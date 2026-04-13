'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/lib/config';

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isDismissed) {
        setIsVisible(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isDismissed]);

  const dismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isVisible) return null;

  const url = getWhatsAppUrl('Hi, I saw the £50 discount offer. I would like a free consultation.');

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4" onClick={dismiss}>
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        <div className="text-center">
          <div className="text-5xl mb-3">🎁</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Wait! Don&apos;t Leave Yet</h2>
          <p className="text-green-600 font-bold text-xl mb-2">Claim Your £50 Discount Today</p>
          <p className="text-gray-600 mb-6">
            Message us on WhatsApp now and mention this offer to receive £50 off your P-Shot treatment in Turkey.
          </p>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl text-lg transition-colors"
          >
            Claim £50 Discount on WhatsApp
          </Link>
          <button onClick={dismiss} className="mt-4 text-sm text-gray-400 hover:text-gray-600 underline">
            No thanks, I&apos;ll pay full price
          </button>
        </div>
      </div>
    </div>
  );
}
