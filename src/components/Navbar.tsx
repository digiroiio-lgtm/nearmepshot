import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-blue-700 font-extrabold text-xl tracking-tight">PShot<span className="text-green-500">NearMe</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/london" className="hover:text-blue-700 transition-colors">London</Link>
            <Link href="/manchester" className="hover:text-blue-700 transition-colors">Manchester</Link>
            <Link href="/birmingham" className="hover:text-blue-700 transition-colors">Birmingham</Link>
            <Link href="/#faq" className="hover:text-blue-700 transition-colors">FAQ</Link>
          </div>
          <Link
            href={`https://wa.me/447700000000?text=${encodeURIComponent('Hi, I would like a free consultation about the P-Shot treatment.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}
