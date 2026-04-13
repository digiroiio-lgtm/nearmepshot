export interface Testimonial {
  name: string;
  city: string;
  text: string;
  rating: number;
  date: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "James T.",
    city: "London",
    text: "I was quoted £1,800 in London. Flew to Turkey and paid £320 all-in including hotel. The clinic was world-class and the results have been incredible. Best decision I made.",
    rating: 5,
    date: "March 2024",
    initials: "JT"
  },
  {
    name: "Michael R.",
    city: "Manchester",
    text: "Sceptical at first but after research I took the plunge. The VIP transfer from the airport, the hotel, everything was sorted. Results after 3 months are exactly what I hoped for.",
    rating: 5,
    date: "February 2024",
    initials: "MR"
  },
  {
    name: "David K.",
    city: "Birmingham",
    text: "My local clinic wanted £1,500. Turkey cost me £350 including flights and 2 nights hotel. The doctor spoke perfect English and explained everything clearly.",
    rating: 5,
    date: "January 2024",
    initials: "DK"
  },
  {
    name: "Peter W.",
    city: "Leeds",
    text: "Used WhatsApp to book a free consultation. Within 2 weeks I was in Turkey. Professional staff, modern clinic, and I saved over £1,200. Highly recommend.",
    rating: 5,
    date: "April 2024",
    initials: "PW"
  },
  {
    name: "Simon H.",
    city: "Glasgow",
    text: "The flight from Glasgow took just over 4 hours. Hotel was lovely. Clinic was spotless and the team were reassuring throughout. Amazing value.",
    rating: 5,
    date: "March 2024",
    initials: "SH"
  },
  {
    name: "Tom B.",
    city: "Bristol",
    text: "After months of embarrassment researching options in the UK I found this site. A WhatsApp message later I had my consultation booked. 10/10 experience in Turkey.",
    rating: 5,
    date: "May 2024",
    initials: "TB"
  },
];
