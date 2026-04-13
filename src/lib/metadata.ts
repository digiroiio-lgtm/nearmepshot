import { Metadata } from 'next';

const SITE_URL = 'https://pshotnearme.com';
const SITE_NAME = 'PShotNearMe.com';

export function generateCityMetadata(cityName: string, prefix?: string): Metadata {
  let title: string;
  let description: string;

  if (!prefix) {
    title = `P-Shot Near Me in ${cityName} | Save 70% with Treatment in Turkey`;
    description = `Looking for P-Shot in ${cityName}? UK prices are £1,200–£2,000. Our partner clinic in Turkey costs just £250–£400 including hotel & VIP transfer. Free consultation on WhatsApp.`;
  } else if (prefix === 'pshot-near-me') {
    title = `P-Shot Near Me ${cityName} | Save 70% – Turkey vs UK Prices`;
    description = `Find the best P-Shot clinic near you in ${cityName}. Compare UK prices (£1,200+) vs Turkey (£250–£400). Book a free consultation and save up to 70%.`;
  } else if (prefix === 'cheap-pshot') {
    title = `Cheap P-Shot ${cityName} | Affordable P-Shot Treatment in Turkey`;
    description = `Looking for cheap P-Shot in ${cityName}? Skip the expensive UK clinics. Get the same high-quality treatment in Turkey for just £250–£400. Includes hotel & transfers.`;
  } else {
    title = `Best P-Shot ${cityName} | Top-Rated P-Shot Clinic via Turkey`;
    description = `Discover the best P-Shot treatment for ${cityName} patients. Our partner clinic in Turkey is rated 5 stars by UK patients. Free consultation, all-inclusive packages.`;
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: SITE_URL,
      siteName: SITE_NAME,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: SITE_URL,
    },
  };
}

export function generateHomeMetadata(): Metadata {
  return {
    title: 'P-Shot Near Me UK | Save 70% with P-Shot Treatment in Turkey',
    description: 'Find P-Shot treatment near you in the UK. Compare prices: UK costs £1,200–£2,000 vs Turkey at just £250–£400. Includes hotel & VIP transfer. Free WhatsApp consultation.',
    openGraph: {
      title: 'P-Shot Near Me UK | Save 70% with P-Shot Treatment in Turkey',
      description: 'Find P-Shot treatment near you in the UK. Compare prices: UK costs £1,200–£2,000 vs Turkey at just £250–£400. Includes hotel & VIP transfer. Free WhatsApp consultation.',
      url: SITE_URL,
      siteName: SITE_NAME,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'P-Shot Near Me UK | Save 70% with P-Shot Treatment in Turkey',
      description: 'Find P-Shot treatment near you. UK clinics charge £1,200–£2,000. Turkey: £250–£400 all-in.',
    },
    alternates: {
      canonical: SITE_URL,
    },
  };
}
