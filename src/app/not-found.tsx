import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-6" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-grey)' }}>
      <div className="max-w-4xl">
        <h1 className="text-7xl md:text-9xl mb-4" style={{ fontFamily: 'var(--font-sabo)' }}>
          404
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Page Not Found
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/" className="px-8 py-4 bg-brand-orange text-white hover:bg-opacity-90 transition-all" style={{ border: '4px solid var(--color-grey)', boxShadow: '4px 4px 0 var(--color-grey)'}}>
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
} 