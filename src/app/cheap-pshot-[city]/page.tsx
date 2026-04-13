import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { cities, getCityBySlug } from '@/data/cities';
import { faqItems } from '@/data/faq';
import { testimonials } from '@/data/testimonials';
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
  return generateCityMetadata(city.name, 'cheap-pshot');
}

const WhatsAppIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default async function CheapPshotCityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const WHATSAPP_URL = getWhatsAppUrl(`Hi, I'm looking for affordable P-Shot treatment from ${city.name}.`);
  const localSchema = generateLocalBusinessSchema(city);
  const faqSchema = generateFAQSchema(faqItems);

  return (
    <>
      <Script id="schema-local" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> › <span>Cheap P-Shot {city.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Cheap P-Shot in {city.name} –<br />
            <span className="text-green-400">Affordable Treatment Options</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Looking for affordable P-Shot treatment from {city.name}? Skip the expensive UK clinics. Our Turkey partner offers the
            same procedure from just <strong className="text-green-300">£250–£400</strong> — hotel and VIP transfers included.
          </p>
          <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg">
            <WhatsAppIcon />
            Get Free Consultation
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Turkey Is the Affordable Choice for {city.name} Patients</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you&apos;re searching for cheap P-Shot options from {city.name}, the honest answer is that UK private clinics simply cannot
            match Turkey on price. The same world-class treatment — with an internationally trained specialist — costs 70% less in Turkey.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our all-inclusive package includes the P-Shot procedure, hotel accommodation, and VIP airport transfers — all for £250–£400.
            Flights from {city.nearbyAirport} add £80–£200 return, yet patients still save £800–£1,500 compared to UK prices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: '💷', label: 'UK Clinic Price', value: city.ukPrice, sub: 'Treatment only', color: 'text-red-600' },
              { icon: '🇹🇷', label: 'Turkey All-In', value: city.turkeyPrice, sub: 'Hotel + transfers included', color: 'text-green-600' },
              { icon: '✈️', label: 'Return Flights', value: '£80–£200', sub: `From ${city.nearbyAirport}`, color: 'text-blue-600' },
            ].map(({ icon, label, value, sub, color }) => (
              <div key={label} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
                <div className="text-3xl mb-2">{icon}</div>
                <p className="text-gray-500 text-sm mb-1">{label}</p>
                <p className={`text-2xl font-extrabold ${color}`}>{value}</p>
                <p className="text-gray-400 text-sm mt-1">{sub}</p>
              </div>
            ))}
          </div>
          <PriceComparison cityName={city.name} />
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">UK Patient Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold mb-4">Get the Most Affordable P-Shot Available</h2>
          <p className="text-blue-100 mb-6">
            Save up to 70% on your P-Shot. Free consultation, no obligation, response within 1 hour.
          </p>
          <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105">
            <WhatsAppIcon />
            WhatsApp for Free Consultation
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <FAQSection />
        </div>
      </section>

      <section className="py-12 px-4 bg-green-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to Save?</h2>
          <p className="text-green-100 mb-6">Free WhatsApp consultation. Response within 1 hour.</p>
          <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-green-50 transition-colors">
            WhatsApp Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
