'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  CheckCircle2, Shield, MessageCircle, Bell, Users, Lock,
  Heart, Clock, Smartphone, ArrowRight, Star
} from 'lucide-react';

export default function Home() {
  const [annual, setAnnual] = useState(false);

  const tiers = [
    {
      name: 'Free', monthly: 0, annual: 0,
      features: ['2 members', 'Weekly check-in', 'Basic dashboard', '14-day Safety AI trial'],
      cta: 'Start free',
    },
    {
      name: 'Check-in', monthly: 12, annual: 120,
      features: ['3 members', 'Daily check-in', 'Full dashboard + history', '1 alert/day', 'Weekly summary'],
      cta: 'Choose Check-in',
    },
    {
      name: 'Safety', monthly: 25, annual: 250, popular: true,
      features: ['5 members', 'SOS + 30-sec clip (7-day)', 'Inactivity alert', 'Unlimited alerts', 'Family sharing (5 viewers)'],
      cta: 'Choose Safety',
    },
    {
      name: 'Safety AI', monthly: 39, annual: 390,
      features: ['Unlimited members', 'Live camera view', 'Fall & cry detection AI', 'Voice AI calls', 'Priority alerts + setup call'],
      cta: 'Choose Safety AI',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Heart className="w-6 h-6" fill="currentColor" /> FamilyCheckin
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#how" className="hover:text-primary">How it works</a>
            <a href="#pricing" className="hover:text-primary">Pricing</a>
            <a href="#faq" className="hover:text-primary">FAQ</a>
            <Link href="/login" className="hover:text-primary">Login</Link>
            <Link href="/signup" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Get Started
            </Link>
          </div>
          <Link href="/signup" className="md:hidden bg-primary text-white px-4 py-2 rounded-lg text-sm">
            Get Started
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="gradient-hero py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-blue-100 px-4 py-1.5 rounded-full text-sm text-primary font-medium mb-6">
            <Star className="w-4 h-4" fill="currentColor" /> Trusted by families worldwide
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Less than one hour of home care.<br />
            <span className="text-primary">24/7 peace of mind.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Daily AI check-ins via WhatsApp for your elderly parents and children.
            No app to download. Just peace of mind, delivered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 inline-flex items-center justify-center gap-2">
              Start free trial <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="#how" className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg border border-gray-200 hover:border-primary inline-flex items-center justify-center">
              See how it works
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">14-day free trial · No credit card required</p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Elderly parents alone. Children far away. You worry.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Home care costs $25-35/hour. Assisted living $5000+/month. But you just want to know they're okay.
            That's why we built FamilyCheckin.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: '1. Add your family', desc: 'Add elderly parents or children. No app download — just their phone number.' },
              { icon: MessageCircle, title: '2. Daily WhatsApp check-in', desc: 'AI sends a friendly check-in via WhatsApp/SMS. They reply with one word.' },
              { icon: Bell, title: '3. Get alerts instantly', desc: 'No reply or concern? You get notified immediately. Peace of mind, always.' },
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Everything you need</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: MessageCircle, title: 'WhatsApp-first', desc: 'No app to download. Works on the phone they already use.' },
              { icon: Bell, title: 'Instant alerts', desc: 'No reply or concern? You know within minutes.' },
              { icon: Shield, title: 'SOS button', desc: 'One tap sends an alert with a 30-second clip.' },
              { icon: Users, title: 'Family sharing', desc: 'Invite siblings. Everyone stays in the loop.' },
              { icon: Lock, title: 'Privacy first', desc: 'Video auto-deletes in 7 days. End-to-end encrypted.' },
              { icon: Clock, title: '24/7 monitoring', desc: 'AI watches over them, so you can sleep.' },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-xl border border-gray-100 hover:border-primary transition">
                <f.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-1">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Simple, honest pricing</h2>
          <p className="text-center text-gray-600 mb-8">Less than one hour of home care. Cancel anytime.</p>

          <div className="flex justify-center items-center gap-3 mb-10">
            <span className={!annual ? 'font-semibold' : 'text-gray-500'}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`w-14 h-7 rounded-full transition ${annual ? 'bg-primary' : 'bg-gray-300'} relative`}
            >
              <span className={`absolute top-1 w-5 h-5 bg-white rounded-full transition ${annual ? 'left-8' : 'left-1'}`} />
            </button>
            <span className={annual ? 'font-semibold' : 'text-gray-500'}>
              Annual <span className="text-success text-sm">(2 months free)</span>
            </span>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {tiers.map((t, i) => (
              <div key={i} className={`bg-white rounded-2xl p-6 border-2 relative ${t.popular ? 'border-primary shadow-lg' : 'border-gray-100'}`}>
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="font-bold text-lg mb-2">{t.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-extrabold">${annual ? t.annual : t.monthly}</span>
                  <span className="text-gray-500">/{annual ? 'year' : 'month'}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {t.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`block text-center py-2.5 rounded-lg font-semibold transition ${t.popular ? 'bg-primary text-white hover:bg-blue-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">14-day money-back guarantee · Cancel anytime</p>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-12 px-4 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          {[
            { icon: Lock, text: 'End-to-end encrypted' },
            { icon: Shield, text: 'GDPR & COPPA compliant' },
            { icon: Clock, text: 'Video auto-deletes in 7 days' },
            { icon: CheckCircle2, text: '14-day money-back' },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-2">
              <b.icon className="w-5 h-5 text-primary" /> {b.text}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Families love it</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', role: 'Daughter, London', text: 'My mum lives alone in Manchester. Now I know she\'s okay every morning. Worth every penny.' },
              { name: 'Raj P.', role: 'Son, Toronto', text: 'Dad refuses to use apps. WhatsApp works. He replies with a "1" every day. I sleep better.' },
              { name: 'Emma K.', role: 'Mother, Sydney', text: 'The SOS feature gave me peace of mind when my son fell at home. Alert came in seconds.' },
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-warning" fill="currentColor" />)}
                </div>
                <p className="text-gray-700 mb-4">"{t.text}"</p>
                <div className="text-sm">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently asked questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Do my parents need to download an app?', a: 'No. Everything happens via WhatsApp or SMS on the phone they already use. Zero learning curve.' },
              { q: 'What if they don\'t reply?', a: 'You get an alert within 2 hours. If still no reply, we escalate to another family member.' },
              { q: 'Is my family\'s data private?', a: 'Yes. End-to-end encrypted, GDPR compliant. Video clips auto-delete after 7 days.' },
              { q: 'Can I cancel anytime?', a: 'Yes. Cancel from your dashboard anytime. 14-day money-back guarantee on first purchase.' },
              { q: 'How does the SOS feature work?', a: 'One tap on their phone sends you an alert with a 30-second video clip (Safety plan and above).' },
              { q: 'Does it work internationally?', a: 'Yes. WhatsApp works worldwide. SMS fallback available in 180+ countries.' },
            ].map((f, i) => (
              <details key={i} className="border border-gray-200 rounded-xl p-4 group">
                <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-primary group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-600 mt-3 text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 gradient-hero">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start your 14-day free trial
          </h2>
          <p className="text-lg text-gray-600 mb-8">No credit card. Cancel anytime. Peace of mind in 5 minutes.</p>
          <Link href="/signup" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600">
            Get started free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-white text-lg mb-4">
              <Heart className="w-5 h-5 text-primary" fill="currentColor" /> FamilyCheckin
            </div>
            <p className="text-sm">24/7 peace of mind for your family.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#how" className="hover:text-white">How it works</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/refund" className="hover:text-white">Refund Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>support@familycheckin.app</li>
            </ul>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          © 2025 FamilyCheckin. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
