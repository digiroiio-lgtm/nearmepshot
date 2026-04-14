import Link from 'next/link';
import { cities } from '@/data/cities';
import { getWhatsAppUrl, DEFAULT_WA_MESSAGE } from '@/lib/config';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="text-white font-extrabold text-xl tracking-tight">PShot<span className="text-green-500">NearMe</span></span>
            <p className="mt-3 text-sm leading-relaxed">
              Connecting UK patients with world-class P-Shot treatment in Turkey. Save up to 70% with our partner clinic.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Popular Cities</h3>
            <ul className="space-y-2 text-sm">
              {cities.slice(0, 6).map(city => (
                <li key={city.slug}>
                  <Link href={`/${city.slug}`} className="hover:text-white transition-colors">
                    P-Shot {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/#prices" className="hover:text-white transition-colors">Prices</Link></li>
              <li><Link href="/#testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <p className="text-sm mb-3">Free confidential consultation via WhatsApp</p>
            <Link
              href={getWhatsAppUrl(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-xs text-center text-gray-500">
          <p>© 2024 PShotNearMe.com · This site provides information about medical tourism. Always consult a qualified medical professional before undergoing any treatment.</p>
        </div>
      </div>
    </footer>
  );
}
