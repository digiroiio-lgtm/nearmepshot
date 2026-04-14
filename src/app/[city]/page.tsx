import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { cities, getCityBySlug } from '@/data/cities';
import { testimonials } from '@/data/testimonials';
import { faqItems } from '@/data/faq';
import { PriceComparison } from '@/components/PriceComparison';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialCard } from '@/components/TestimonialCard';
import { generateCityMetadata } from '@/lib/metadata';
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { getWhatsAppUrl } from '@/lib/config';

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map(c => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};
  return generateCityMetadata(city.name);
}

const WhatsAppIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const WHATSAPP_URL = getWhatsAppUrl(`Hi, I'm from ${city.name} and would like a free P-Shot consultation.`);
  const localSchema = generateLocalBusinessSchema(city);
  const faqSchema = generateFAQSchema(faqItems);
  const cityTestimonials = testimonials.slice(0, 3);

  return (
    <>
      <Script id="schema-local" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> › <span>{city.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            P-Shot Near Me in {city.name}<br />
            <span className="text-green-400">Save Up to 70%</span> in Turkey
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Looking for P-Shot in {city.name}? Skip the expensive UK clinics. Our partner clinic in Turkey costs{' '}
            <strong className="text-green-300">just £250–£400</strong> — vs £1,200–£2,000 locally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              <WhatsAppIcon />
              WhatsApp for Free Consultation
            </Link>
          </div>
          <p className="mt-4 text-blue-200 text-sm">
            Fly from {city.nearbyAirport} · Just {city.flightTime} to Antalya · Hotel included
          </p>
        </div>
      </section>

      {/* LOCAL INTENT SECTION */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            P-Shot Clinics in {city.name} – What to Expect
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Looking for the best P-Shot clinics in {city.name}? While there are some top providers in {city.name} offering this treatment,
            you&apos;ll typically face high prices of £1,200–£2,000 and waiting times of 2–6 weeks for availability.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Many UK patients from {city.name} are now choosing Turkey as a cost-effective alternative — getting the same world-class
            treatment at {city.turkeyPrice}, with hotel and VIP transfers included. The flight from {city.nearbyAirport} takes just {city.flightTime}.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '💰', label: 'UK Price Range', value: city.ukPrice, sub: city.name + ' clinics', color: 'text-red-600' },
              { icon: '🇹🇷', label: 'Turkey Price', value: city.turkeyPrice, sub: 'All-inclusive', color: 'text-green-600' },
              { icon: '📅', label: 'UK Wait Time', value: '2–6 weeks', sub: 'Limited availability', color: 'text-orange-600' },
            ].map(({ icon, label, value, sub, color }) => (
              <div key={label} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
                <div className="text-3xl mb-2">{icon}</div>
                <p className="text-gray-500 text-sm mb-1">{label}</p>
                <p className={`text-2xl font-extrabold ${color}`}>{value}</p>
                <p className="text-gray-400 text-sm mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE COMPARISON TABLE */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            {city.name} vs Turkey – Price Comparison
          </h2>
          <PriceComparison cityName={city.name} />
        </div>
      </section>

      {/* CONVERSION BLOCK */}
      <section className="py-16 px-4 bg-blue-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Ready to Save Up to 70% on Your P-Shot?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Join patients from {city.name} who chose Turkey. Fly from {city.nearbyAirport} in just {city.flightTime}. Everything is arranged for you.
          </p>
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105"
          >
            <WhatsAppIcon />
            WhatsApp for Free Consultation
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What UK Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cityTestimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO SECTION */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">P-Shot Treatment Guide for {city.name} Patients</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Finding the best P-Shot clinics in {city.name} can be challenging. Top providers in {city.name} typically charge premium
            prices reflecting UK private healthcare costs. However, there is a rapidly growing trend of {city.name} patients travelling
            to Turkey for the same treatment at a fraction of the cost.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Many UK patients from {city.name} and across {city.region} are discovering that Turkish clinics offer world-class P-Shot
            treatment at 70% less than local prices. With direct flights from {city.nearbyAirport} taking just {city.flightTime} to
            Antalya, the trip is quick and straightforward.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our partner clinic is internationally accredited, staffed by English-speaking specialists, and offers a full all-inclusive
            package including hotel and VIP airport transfers. If you&apos;re searching for affordable P-Shot treatment in {city.name},
            Turkey is worth serious consideration.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <FAQSection />
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-700 mb-6">Explore Other Cities</h3>
          <div className="flex flex-wrap gap-3">
            {cities.filter(c => c.slug !== city.slug).slice(0, 10).map(c => (
              <Link key={c.slug} href={`/${c.slug}`}
                className="bg-white border border-gray-200 hover:border-blue-400 text-gray-700 hover:text-blue-700 px-4 py-2 rounded-lg text-sm transition-colors">
                P-Shot {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
