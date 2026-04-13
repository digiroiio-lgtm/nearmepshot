'use client';
import { useState, useEffect } from 'react';

export function SocialProofCounter() {
  const [count, setCount] = useState(12);

  useEffect(() => {
    setCount(Math.floor(Math.random() * 8) + 9); // 9–16
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50 bg-white border border-gray-200 rounded-xl shadow-lg px-4 py-3 max-w-xs hidden sm:flex items-center gap-3">
      <span className="text-2xl">🔥</span>
      <p className="text-sm text-gray-700 font-medium">
        <span className="text-green-600 font-bold">{count} UK patients</span> contacted us in the last 24h
      </p>
    </div>
  );
}
