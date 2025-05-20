import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h2 className="text-4xl font-medium text-gray-900 mb-4">404</h2>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link 
          href="/"
          className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-300"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
} 