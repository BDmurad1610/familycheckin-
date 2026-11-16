'use client';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function Pricing() {
  const tiers = [
    { name: 'Free', price: 0, features: ['2 members', 'Weekly check-in', '14-day trial'] },
    { name: 'Check-in', price: 12, features: ['3 members', 'Daily check-in', '1 alert/day'] },
    { name: 'Safety', price: 25, features: ['5 members', 'SOS + clip', 'Unlimited alerts'] },
    { name: 'Safety AI', price: 39, features: ['Unlimited members', 'Live camera', 'Voice AI'] },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Simple, honest pricing</h1>
        <p className="text-gray-600 mb-12">Cancel anytime. 14-day money-back guarantee.</p>
        <div className="grid md:grid-cols-4 gap-6 text-left">
          {tiers.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-lg">{t.name}</h3>
              <div className="text-3xl font-extrabold my-4">${t.price}<span className="text-sm text-gray-500 font-normal">/mo</span></div>
              <ul className="space-y-2 mb-6">
                {t.features.map((f, j) => (
                  <li key={j} className="flex gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="block text-center bg-primary text-white py-2 rounded-lg">Choose {t.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
