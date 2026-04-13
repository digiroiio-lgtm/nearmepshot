export interface City {
  slug: string;
  name: string;
  region: string;
  ukPrice: string;
  turkeyPrice: string;
  saving: string;
  population: string;
  nearbyAirport: string;
  flightTime: string;
}

export const cities: City[] = [
  { slug: "london", name: "London", region: "Greater London", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "9 million", nearbyAirport: "Heathrow (LHR)", flightTime: "3.5 hours" },
  { slug: "manchester", name: "Manchester", region: "Greater Manchester", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "2.8 million", nearbyAirport: "Manchester Airport (MAN)", flightTime: "4 hours" },
  { slug: "birmingham", name: "Birmingham", region: "West Midlands", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "1.1 million", nearbyAirport: "Birmingham Airport (BHX)", flightTime: "3.5 hours" },
  { slug: "leeds", name: "Leeds", region: "West Yorkshire", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "800,000", nearbyAirport: "Leeds Bradford Airport (LBA)", flightTime: "4 hours" },
  { slug: "glasgow", name: "Glasgow", region: "Scotland", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "600,000", nearbyAirport: "Glasgow Airport (GLA)", flightTime: "4.5 hours" },
  { slug: "liverpool", name: "Liverpool", region: "Merseyside", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "500,000", nearbyAirport: "Liverpool John Lennon Airport (LPL)", flightTime: "4 hours" },
  { slug: "bristol", name: "Bristol", region: "South West England", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "470,000", nearbyAirport: "Bristol Airport (BRS)", flightTime: "3.5 hours" },
  { slug: "sheffield", name: "Sheffield", region: "South Yorkshire", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "580,000", nearbyAirport: "Leeds Bradford Airport (LBA)", flightTime: "4 hours" },
  { slug: "edinburgh", name: "Edinburgh", region: "Scotland", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "520,000", nearbyAirport: "Edinburgh Airport (EDI)", flightTime: "4 hours" },
  { slug: "nottingham", name: "Nottingham", region: "East Midlands", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "330,000", nearbyAirport: "East Midlands Airport (EMA)", flightTime: "3.5 hours" },
  { slug: "cardiff", name: "Cardiff", region: "Wales", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "370,000", nearbyAirport: "Cardiff Airport (CWL)", flightTime: "4 hours" },
  { slug: "leicester", name: "Leicester", region: "East Midlands", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "360,000", nearbyAirport: "East Midlands Airport (EMA)", flightTime: "3.5 hours" },
  { slug: "coventry", name: "Coventry", region: "West Midlands", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "370,000", nearbyAirport: "Birmingham Airport (BHX)", flightTime: "3.5 hours" },
  { slug: "bradford", name: "Bradford", region: "West Yorkshire", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "530,000", nearbyAirport: "Leeds Bradford Airport (LBA)", flightTime: "4 hours" },
  { slug: "stoke", name: "Stoke-on-Trent", region: "Staffordshire", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "250,000", nearbyAirport: "Birmingham Airport (BHX)", flightTime: "3.5 hours" },
  { slug: "wolverhampton", name: "Wolverhampton", region: "West Midlands", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "260,000", nearbyAirport: "Birmingham Airport (BHX)", flightTime: "3.5 hours" },
  { slug: "sunderland", name: "Sunderland", region: "Tyne and Wear", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "280,000", nearbyAirport: "Newcastle Airport (NCL)", flightTime: "4 hours" },
  { slug: "oxford", name: "Oxford", region: "Oxfordshire", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "160,000", nearbyAirport: "Heathrow (LHR)", flightTime: "3.5 hours" },
  { slug: "cambridge", name: "Cambridge", region: "Cambridgeshire", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "130,000", nearbyAirport: "Stansted Airport (STN)", flightTime: "3.5 hours" },
  { slug: "newcastle", name: "Newcastle", region: "Tyne and Wear", ukPrice: "£1,200–£2,000", turkeyPrice: "£250–£400", saving: "70%", population: "300,000", nearbyAirport: "Newcastle Airport (NCL)", flightTime: "4 hours" },
];

export const programmaticPrefixes = ['pshot-near-me', 'cheap-pshot', 'best-pshot'];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug);
}

export function generateProgrammaticSlugs(): { prefix: string; citySlug: string }[] {
  const result: { prefix: string; citySlug: string }[] = [];
  for (const city of cities) {
    for (const prefix of programmaticPrefixes) {
      result.push({ prefix, citySlug: city.slug });
    }
  }
  return result;
}
