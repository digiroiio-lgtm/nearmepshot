import Link from 'next/link';
import Script from 'next/script';
import { cities } from '@/data/cities';
import { testimonials } from '@/data/testimonials';
import { faqItems } from '@/data/faq';
import { getWhatsAppUrl, DEFAULT_WA_MESSAGE } from '@/lib/config';
import { PriceComparison } from '@/components/PriceComparison';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialCard } from '@/components/TestimonialCard';
import { generateMedicalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { generateHomeMetadata } from '@/lib/metadata';

export const metadata = generateHomeMetadata();

const WHATSAPP_URL = getWhatsAppUrl(DEFAULT_WA_MESSAGE);

const WhatsAppIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function HomePage() {
  const medicalSchema = generateMedicalBusinessSchema();
  const faqSchema = generateFAQSchema(faqItems);

  return (
    <>
      <Script id="schema-medical" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
            🇬🇧 UK Patients Trust Us – 500+ Treated
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            P-Shot Near You –<br />
            <span className="text-green-400">Save Up to 70%</span> with<br />
            Treatment in Turkey
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            UK Patients Choose Our Clinic for Safe, Affordable Results.<br />
            UK prices: £1,200–£2,000 · Turkey: <strong className="text-green-300">£250–£400</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              <WhatsAppIcon />
              WhatsApp Now
            </Link>
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all border border-white/30 flex items-center justify-center">
              Free Consultation
            </Link>
          </div>
          <p className="mt-6 text-blue-200 text-sm">✓ No obligation · ✓ Confidential · ✓ Response within 1 hour</p>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-green-500 p-4">
        <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-white font-bold text-lg">
          <WhatsAppIcon />
          Get Free WhatsApp Consultation
        </Link>
      </div>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-4">How It Works</h2>
          <p className="text-center text-gray-500 mb-12 text-lg">3 simple steps to your treatment in Turkey</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', icon: '💬', title: 'Free WhatsApp Consultation', desc: 'Message us on WhatsApp for a free, confidential consultation. Our English-speaking team responds within 1 hour.' },
              { step: '2', icon: '✈️', title: 'Travel to Turkey', desc: 'Fly from your nearest UK airport. We arrange your hotel, VIP airport transfer, and clinic appointment. Everything is included.' },
              { step: '3', icon: '🏆', title: 'Treatment & Results', desc: 'Receive your P-Shot from a specialist doctor. Return home the same day or next day. Results develop over 3 months.' },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-5xl mb-4">{icon}</div>
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">{step}</div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE COMPARISON */}
      <section id="prices" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-4">UK vs Turkey Price Comparison</h2>
          <p className="text-center text-gray-500 mb-12 text-lg">Why UK patients choose Turkey for P-Shot treatment</p>
          <PriceComparison cityName="UK Average" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { label: 'Average UK Price', value: '£1,600', sub: 'Treatment only', color: 'text-red-600' },
              { label: 'Turkey All-In', value: '£400', sub: 'Inc. hotel & transfers', color: 'text-green-600' },
              { label: 'Average Saving', value: '£1,200+', sub: 'Even after flights', color: 'text-blue-600' },
            ].map(({ label, value, sub, color }) => (
              <div key={label} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-500 text-sm mb-1">{label}</p>
                <p className={`text-4xl font-extrabold ${color}`}>{value}</p>
                <p className="text-gray-400 text-sm mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-16 px-4 bg-blue-700 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10">Why UK Patients Choose Turkey</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '✈️', title: '3.5hr Flight', sub: 'From London Heathrow' },
              { icon: '🏨', title: 'Hotel Included', sub: 'VIP accommodation' },
              { icon: '🚗', title: 'VIP Transfer', sub: 'Airport to clinic' },
              { icon: '🏥', title: 'Accredited Clinic', sub: 'European standards' },
            ].map(({ icon, title, sub }) => (
              <div key={title} className="bg-white/10 rounded-2xl p-6">
                <div className="text-4xl mb-3">{icon}</div>
                <p className="font-bold text-lg">{title}</p>
                <p className="text-blue-200 text-sm mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PLACEHOLDER */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-4">Before &amp; After Results</h2>
          <p className="text-center text-gray-500 mb-12">Real results from UK patients treated at our clinic</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-blue-400">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-sm font-medium">Patient {i} Result</p>
                  <p className="text-xs">3 months post-treatment</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            Images from our partner sites:{' '}
            <a href="https://pshotbeforeandafter.com" className="text-blue-500 hover:underline">pshotbeforeandafter.com</a>{' '}
            ·{' '}
            <a href="https://pshotresultspictures.com" className="text-blue-500 hover:underline">pshotresultspictures.com</a>
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-4">What UK Patients Say</h2>
          <p className="text-center text-gray-500 mb-12 text-lg">Verified reviews from patients across the UK</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CITY LINKS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-4">P-Shot Near Me by City</h2>
          <p className="text-center text-gray-500 mb-12">Find city-specific information for your area</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map(city => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="bg-white border border-gray-200 hover:border-blue-400 hover:shadow-md rounded-xl p-4 text-center transition-all group"
              >
                <p className="font-semibold text-gray-900 group-hover:text-blue-700">{city.name}</p>
                <p className="text-green-600 font-bold text-sm mt-1">{city.turkeyPrice}</p>
                <p className="text-gray-400 text-xs mt-1">Turkey price</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-gray-500 mb-12">Everything you need to know about P-Shot treatment in Turkey</p>
          <FAQSection />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Save Up to 70%?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join 500+ UK patients who chose Turkey for their P-Shot treatment. Free confidential consultation on WhatsApp.
          </p>
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-green-700 font-bold px-10 py-5 rounded-xl text-xl hover:bg-green-50 transition-all hover:scale-105 shadow-xl"
          >
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Start Free WhatsApp Consultation
          </Link>
          <p className="mt-4 text-green-200 text-sm">Response within 1 hour · No obligation · 100% confidential</p>
        </div>
      </section>
    </>
  );
}
