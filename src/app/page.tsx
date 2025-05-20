import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-7xl md:text-8xl font-medium text-gray-900 mb-8 leading-none tracking-tight">
              <span className="text-purple-600">MILKYSOFT</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              We build innovative software solutions that help businesses grow and succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-medium text-center text-gray-900 mb-20 tracking-tight">
            Why Choose MilkySoft?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Innovative Solutions",
                description: "Cutting-edge technology and modern approaches to solve complex problems.",
                icon: "🚀",
                color: "bg-purple-50"
              },
              {
                title: "Expert Team",
                description: "Skilled professionals with years of experience in software development.",
                icon: "👥",
                color: "bg-purple-50"
              },
              {
                title: "Quality First",
                description: "We never compromise on quality, ensuring robust and reliable solutions.",
                icon: "✨",
                color: "bg-purple-50"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8 tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light">
              Let's discuss how we can help bring your vision to life.
            </p>
            <button className="bg-purple-600 text-white px-12 py-5 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 text-gray-900 py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-medium mb-6 tracking-tight">MilkySoft</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Building the future of digital solutions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-6 tracking-tight">Contact</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Email: contact@milkysoft.io<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-6 tracking-tight">Follow Us</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-lg font-light">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-lg font-light">LinkedIn</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-lg font-light">GitHub</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600 font-light">
            <p>&copy; {new Date().getFullYear()} MilkySoft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
