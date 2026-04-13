'use client';
import { useState } from 'react';
import { faqItems } from '@/data/faq';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqItems.map((item, idx) => (
        <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <span className="font-semibold text-gray-800 pr-4">{item.question}</span>
            <span className="text-blue-600 text-xl flex-shrink-0">{openIndex === idx ? '−' : '+'}</span>
          </button>
          {openIndex === idx && (
            <div className="px-6 py-4 bg-gray-50 text-gray-600 leading-relaxed border-t border-gray-200">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
