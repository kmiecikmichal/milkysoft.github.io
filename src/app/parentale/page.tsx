'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Recording {
  blob: Blob;
  url: string;
  mimeType: string;
}

export default function ParentaleApplication() {
  const [isRecording, setIsRecording] = useState(false);
  const [currentRecording, setCurrentRecording] = useState<Recording | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    childrenCount: '',
    childrenAgeGroups: [] as string[],
    readingFrequency: '',
    aiTools: [] as string[],
    testingInterest: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [remainingTime, setRemainingTime] = useState(180);

  // Set theme color for Parentale page
  useEffect(() => {
    // Update theme color meta tags
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', '#3BA181');
    } else {
      const newThemeColorMeta = document.createElement('meta');
      newThemeColorMeta.name = 'theme-color';
      newThemeColorMeta.content = '#3BA181';
      document.head.appendChild(newThemeColorMeta);
    }

    // Update msapplication-TileColor
    const tileColorMeta = document.querySelector('meta[name="msapplication-TileColor"]');
    if (tileColorMeta) {
      tileColorMeta.setAttribute('content', '#3BA181');
    } else {
      const newTileColorMeta = document.createElement('meta');
      newTileColorMeta.name = 'msapplication-TileColor';
      newTileColorMeta.content = '#3BA181';
      document.head.appendChild(newTileColorMeta);
    }

    // Cleanup function to restore original theme color when component unmounts
    return () => {
      const themeColorMeta = document.querySelector('meta[name="theme-color"]');
      if (themeColorMeta) {
        themeColorMeta.setAttribute('content', '#403d39');
      }
      
      const tileColorMeta = document.querySelector('meta[name="msapplication-TileColor"]');
      if (tileColorMeta) {
        tileColorMeta.setAttribute('content', '#403d39');
      }
    };
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
    setIsRecording(false);
  }, []);

  useEffect(() => {
    if (!isRecording) return;

    if (remainingTime <= 0) {
      stopRecording();
      return;
    }

    const intervalId = setInterval(() => {
      setRemainingTime(prev => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRecording, remainingTime, stopRecording]);

  const startRecording = async () => {
    try {
      // Clean up previous recording if exists
      if (currentRecording) {
        URL.revokeObjectURL(currentRecording.url);
        setCurrentRecording(null);
      }

      // Get user media stream
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Try to use MP3 format first, fallback to WebM if not supported
      let mimeType = 'audio/mp3';
      if (!MediaRecorder.isTypeSupported('audio/mp3')) {
        mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
          ? 'audio/webm;codecs=opus'
          : 'audio/webm';
      }
      
      const mediaRecorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = mediaRecorder;
      
      const chunks: BlobPart[] = [];
      
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: mimeType });
        const url = URL.createObjectURL(blob);
        setCurrentRecording({
          blob,
          url,
          mimeType
        });
      };

      setRemainingTime(180);
      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Błąd podczas dostępu do mikrofonu:', err);
      alert('Błąd podczas dostępu do mikrofonu. Prosimy upewnić się, że masz udzielone pozwolenie i spróbować ponownie.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentRecording) {
      alert('Prosimy o nagranie próbki głosu przed wysłaniem formularza.');
      return;
    }

    if (!formData.consent) {
      alert('Musisz wyrazić zgodę na przetwarzanie danych przed wysłaniem formularza.');
      return;
    }

    // Check file size (limit to 25MB)
    if (currentRecording.blob.size > 30 * 1024 * 1024) {
      alert('Nagranie jest za duże. Prosimy o nagranie próbki głosu o mniejszym rozmiarze (maksymalnie 30MB).');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create a ZIP file with the recording and form data
      const timestamp = new Date().toISOString();
      
      // Determine file extension based on the MIME type used
      const fileExtension = currentRecording.mimeType.startsWith('audio/mp3') ? 'mp3' : 'webm';
      
      // Import JSZip dynamically and handle any module errors
      let JSZip;
      try {
        const jszipModule = await import('jszip');
        JSZip = jszipModule.default;
      } catch (importError) {
        console.error('Failed to import JSZip:', importError);
        // Fallback: send recording directly without ZIP
        console.log('Falling back to direct file upload...');
        
        const submissionData = new FormData();
        submissionData.append('access_key', '10a937ff-a425-42a9-91fa-1342a944e56e');
        submissionData.append('name', formData.name);
        submissionData.append('last_name', formData.lastName);
        submissionData.append('email', formData.email);
        submissionData.append('phone', formData.phone);
        submissionData.append('attachment', currentRecording.blob, `recording-${timestamp}.${fileExtension}`);
        submissionData.append('subject', 'New Parentale Program Application');
        
        // Continue with submission...
        await submitFormData(submissionData);
        return;
      }
      
      // Create ZIP file
      const zip = new JSZip();
      
      // Add the recording
      zip.file(`recording-${timestamp}.${fileExtension}`, currentRecording.blob);
      
      // Add form data as a text file
      const formDataText = `
PARENTALE PROGRAM APPLICATION

Name: ${formData.name}
Last Name: ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Submission Date: ${new Date().toLocaleString()}
      `.trim();
      
      zip.file('application-data.txt', formDataText);
      
      // Generate the ZIP file
      const zippedFile = await zip.generateAsync({ type: 'blob' });
      
      console.log('Form data being sent:', {
        name: formData.name,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        recordingSize: currentRecording.blob.size,
        zipSize: zippedFile.size
      });

      // Create form data for submission
      const submissionData = new FormData();
      submissionData.append('access_key', '10a937ff-a425-42a9-91fa-1342a944e56e');
      submissionData.append('name', formData.name);
      submissionData.append('last_name', formData.lastName);
      submissionData.append('email', formData.email);
      submissionData.append('phone', formData.phone);
      submissionData.append('attachment', zippedFile, `parentale-application-${timestamp}.zip`);
      submissionData.append('subject', 'New Parentale Program Application');
      
      // Submit the form data
      await submitFormData(submissionData);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error instanceof Error) {
        console.error('Error details:', {
          name: error.name,
          message: error.message,
          stack: error.stack
        });
        
        // Handle specific error types
        if (error.name === 'AbortError') {
          alert('Czas trwania żądania wygasł. Prosimy sprawdzić połączenie z internetem i spróbować ponownie. Jeśli problem będzie się powtarzał, prosimy o kontakt na adres contact@milkysoft.io');
        } else if (error.message.includes('Failed to fetch')) {
          alert('Błąd sieci. Prosimy sprawdzić połączenie z internetem i spróbować ponownie. Jeśli problem będzie się powtarzał, prosimy o kontakt na adres contact@milkysoft.io');
        } else {
          // Show the actual error message
          alert(`Błąd podczas wysyłania formularza: ${error.message}`);
        }
      } else {
        alert('Błąd podczas wysyłania formularza. Prosimy upewnić się, że wszystkie pola zostały wypełnione poprawnie i spróbować ponownie. Jeśli problem będzie się powtarzał, prosimy o kontakt na adres contact@milkysoft.io');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitFormData = async (submissionData: FormData) => {
    console.log('Submitting to Web3Forms...');
    console.log('FormData entries:');
    for (const [key, value] of submissionData.entries()) {
      console.log(`${key}:`, value instanceof File ? `File (${value.size} bytes)` : value);
    }
    
    // Add timeout to prevent hanging
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
    
    console.log('Making fetch request...');
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: submissionData,
      signal: controller.signal
    });

    clearTimeout(timeoutId);
    console.log('Fetch completed, status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response body:', errorText);
      throw new Error(`HTTP ${response.status}: ${response.statusText} - ${errorText}`);
    }
    
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    const data = await response.json();
    console.log('Web3Forms Response:', data);
    
    if (data.success) {
      // Clear form after successful submission
      setFormData({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        childrenCount: '',
        childrenAgeGroups: [],
        readingFrequency: '',
        aiTools: [],
        testingInterest: '',
        consent: false
      });
      
      // Clean up recording
      if (currentRecording) {
        URL.revokeObjectURL(currentRecording.url);
        setCurrentRecording(null);
      }
      
      alert('Formularz został wysłany! Dziękujemy za zgłoszenie. Odpowiemy wkrótce.');
      window.location.href = '/';
    } else {
      // Show the actual error message from Web3Forms
      const errorMessage = data.message || data.error || 'Unknown error from Web3Forms';
      console.error('Web3Forms error:', errorMessage);
      alert(`Błąd podczas wysyłania formularza: ${errorMessage}`);
    }
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-0 sm:p-4 lg:p-8">
      <div className="w-full max-w-none sm:max-w-xl lg:max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-none sm:rounded-xl lg:rounded-2xl p-4 sm:p-4 lg:p-6 xl:p-8 shadow-2xl border-0 sm:border sm:border-white/20">
        <div className="flex justify-center mb-6 sm:mb-6 lg:mb-8">
          <Image
            src="/parentale_full_logo.svg"
            alt="Parentale Logo"
            width={300}
            height={75}
            className="filter-white w-56 sm:w-64 lg:w-80 xl:w-96"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4 lg:space-y-6">
          <div className="p-4 sm:p-4 lg:p-6 bg-white/10 rounded-lg sm:rounded-xl border border-white/20 space-y-4 sm:space-y-4 text-white/90">
            <p className="text-base sm:text-base lg:text-lg font-bold">Cześć!</p>
            <p className="text-sm sm:text-sm lg:text-base">Tu Filip, Bartek i Michał. Wspólnie tworzymy aplikację, która czyta dzieciom bajki… Twoim głosem!</p>
            
            <h3 className="text-base sm:text-base lg:text-lg font-semibold pt-2">Jak to działa?</h3>
            <p className="text-sm sm:text-sm lg:text-base">Nagrywasz krótką próbkę swojego głosu (około 3 minut), a my za pomocą naszych algorytmów tworzymy jego cyfrową wersję, która posłuży nam do stworzenia audiobooka czytanego Twoim głosem. W zamian otrzymasz od nas gotowego audiobooka w formacie MP3, całkowicie za darmo.</p>

            <h3 className="text-base sm:text-base lg:text-lg font-semibold pt-2">Na jakim etapie jesteśmy?</h3>
            <p className="text-sm sm:text-sm lg:text-base">Jesteśmy we wczesnej fazie rozwoju aplikacji, dlatego Twoja opinia jest dla nas szczególnie cenna. Wystarczy, że prześlesz nam nagranie głosu, a my zajmiemy się resztą. Po odsłuchaniu audiobooka poprosimy Cię o wypełnienie krótkiej ankiety z pytaniami o Twoje wrażenia z korzystania z usługi.</p>
            <p className="text-sm sm:text-sm lg:text-base">Dodatkowo, jeśli zdecydujesz się zostać testerem naszej aplikacji w kolejnych etapach rozwoju, otrzymasz 3 miesiące darmowego dostępu do pełnej wersji.</p>
          </div>

          {/* Recording Section */}
          <div className="p-4 sm:p-4 lg:p-6 bg-white/10 rounded-lg sm:rounded-xl border border-white/20 space-y-4 sm:space-y-4">
            <h2 className="text-lg sm:text-lg lg:text-xl font-bold text-center text-white">Nagraj próbkę swojego głosu</h2>
            <p className="text-center text-white/80 text-sm sm:text-sm lg:text-base px-2">
              Nagraj 3 minutową próbkę swojego głosu. Opowiadaj o czymkolwiek. Ważne, aby próbka nagrana była w cichym pomieszczeniu.
            </p>
            
            <hr className="border-white/20" />
            
            {/* Recording Button with Counter */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs flex justify-center">
                <div className="relative flex flex-col items-center">
                  {/* Text above button */}
                  <p className="text-lg sm:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-4 text-center px-2">
                    {isRecording 
                      ? 'Nagrywanie...' 
                      : currentRecording 
                      ? 'Nagraj ponownie' 
                      : 'Rozpocznij nagrywanie'
                    }
                  </p>
                  
                  {/* Recording Button */}
                  <button
                    type="button"
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`w-16 h-16 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 ${
                      isRecording
                        ? 'bg-red-500 text-white hover:bg-red-600 animate-pulse'
                        : currentRecording
                        ? 'bg-white text-brand-green hover:bg-white/90'
                        : 'bg-white text-brand-green hover:bg-white/90'
                    }`}
                  >
                    {isRecording ? (
                      // Stop icon (square)
                      <svg className="w-8 h-8 sm:w-8 sm:h-8 lg:w-10 lg:h-10" fill="currentColor" viewBox="0 0 20 20">
                        <rect x="6" y="6" width="8" height="8" />
                      </svg>
                    ) : currentRecording ? (
                      // Refresh/record again icon (arrows)
                      <svg className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      // Microphone icon
                      <svg className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>

                  {/* Countdown below button (only during recording) */}
                  {isRecording && (
                    <div className="mt-4 sm:mt-4 text-center">
                      <p className="text-lg sm:text-lg lg:text-xl font-bold text-white tabular-nums">
                        {formatTime(remainingTime)}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Audio Preview Section */}
            {currentRecording && !isRecording && (
              <>
                <hr className="border-white/20" />
                <div className="w-full text-center space-y-4 sm:space-y-4">
                  <h3 className="text-lg sm:text-lg lg:text-xl font-bold mb-2 text-white">
                    Podgląd nagrania
                  </h3>
                  <audio
                    src={currentRecording.url}
                    controls
                    className="w-full"
                    onError={(e) => {
                      console.error('Błąd podczas odtwarzania nagrania:', e);
                      alert('Błąd podczas odtwarzania nagrania. Prosimy spróbować ponownie.');
                    }}
                  />
                </div>
              </>
            )}
          </div>
          
          {/* Personal Info Section */}
          <div className="p-4 sm:p-4 lg:p-6 bg-white/10 rounded-lg sm:rounded-xl border border-white/20 space-y-4 sm:space-y-4 lg:space-y-6">
            <h2 className="text-lg sm:text-lg lg:text-xl font-bold text-center text-white mb-4 sm:mb-4 lg:mb-6">
              Dane kontaktowe
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4 lg:gap-6">
              <input
                type="text"
                required
                placeholder="Imię"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 sm:px-4 lg:px-5 py-3 sm:py-3 bg-white/10 text-white rounded-lg border border-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none placeholder:text-white/60 text-sm sm:text-sm lg:text-base"
              />
              <input
                type="text"
                required
                placeholder="Nazwisko"
                value={formData.lastName}
                onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                className="w-full px-4 sm:px-4 lg:px-5 py-3 sm:py-3 bg-white/10 text-white rounded-lg border border-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none placeholder:text-white/60 text-sm sm:text-sm lg:text-base"
              />
            </div>
            <input
              type="tel"
              required
              placeholder="Telefon"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full px-4 sm:px-4 lg:px-5 py-3 sm:py-3 bg-white/10 text-white rounded-lg border border-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none placeholder:text-white/60 text-sm sm:text-sm lg:text-base"
            />
            <input
                type="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 sm:px-4 lg:px-5 py-3 sm:py-3 bg-white/10 text-white rounded-lg border border-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none placeholder:text-white/60 text-sm sm:text-sm lg:text-base"
              />
          </div>

          {/* Consent Checkbox */}
          <div className="p-4 sm:p-4 bg-white/10 rounded-lg border border-white/10">
            <label className="flex items-start space-x-3 text-white">
              <input
                type="checkbox"
                required
                checked={formData.consent}
                onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                className="w-5 h-5 mt-1 text-brand-green bg-white/10 border-white/20 rounded focus:ring-2 focus:ring-white/50 flex-shrink-0"
              />
              <span className="text-sm sm:text-sm leading-relaxed">
                Wyrażam zgodę na udostępnienie swoich danych oraz próbki głosu, które zostaną wykorzystane wyłącznie na potrzeby wygenerowania pojedynczego audiobooka
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isRecording}
            className="w-full px-6 sm:px-8 py-4 font-bold text-lg sm:text-xl bg-white text-brand-green rounded-lg transition-all duration-300 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed mb-8 sm:mb-0"
          >
            {isSubmitting ? 'Wysyłanie...' : 'Wyślij zgłoszenie'}
          </button>
        </form>
      </div>
    </main>
  );
} 