import { City } from '@/data/cities';
import { FAQItem } from '@/data/faq';

export function generateMedicalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'PShotNearMe – P-Shot Treatment Turkey',
    description: 'UK patients choose our partner clinic in Turkey for P-Shot treatment at 70% less than UK prices.',
    url: 'https://pshotnearme.com',
    telephone: '+447700000000',
    priceRange: '£250–£400',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Antalya',
      addressCountry: 'TR',
    },
    medicalSpecialty: 'Urology',
    availableService: {
      '@type': 'MedicalProcedure',
      name: 'P-Shot (Priapus Shot)',
      description: 'Platelet-Rich Plasma (PRP) injection for erectile dysfunction and sexual wellness improvement.',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  };
}

export function generateFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function generateLocalBusinessSchema(city: City) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: `P-Shot Treatment for ${city.name} Patients`,
    description: `Affordable P-Shot treatment for patients from ${city.name}. Save 70% vs UK clinic prices.`,
    url: `https://pshotnearme.com/${city.slug}`,
    areaServed: {
      '@type': 'City',
      name: city.name,
      addressCountry: 'GB',
    },
    priceRange: city.turkeyPrice,
    availableService: {
      '@type': 'MedicalProcedure',
      name: 'P-Shot (Priapus Shot)',
    },
  };
}
