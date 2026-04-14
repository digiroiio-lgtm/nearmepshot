import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">★</span>
        ))}
      </div>
      <p className="text-gray-700 italic mb-4 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
          {testimonial.initials}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
          <p className="text-gray-400 text-xs">{testimonial.city} · {testimonial.date}</p>
        </div>
      </div>
    </div>
  );
}
