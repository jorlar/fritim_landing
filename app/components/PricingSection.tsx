'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const prices = {
    monthly: {
      small: 1900,
      medium: 2900,
      large: 3900,
    },
    yearly: {
      small: 15900,
      medium: 24000,
      large: 32500,
    },
  };

  const currentPrices = isYearly ? prices.yearly : prices.monthly;
  const periodLabel = isYearly ? 'NOK/år' : 'NOK/mnd';

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Enkle og transparente priser
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Velg pakken som passer for ditt arrangement
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-4 bg-[#123C66] rounded-full p-1.5">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition ${
                !isYearly
                  ? 'bg-white text-[#1f6ae1]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Månedlig
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition ${
                isYearly
                  ? 'bg-white text-[#1f6ae1]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Årlig
              <span className="ml-2 text-xs bg-gradient-to-r from-[#6dd5a0] to-[#4ecdc4] text-black px-2 py-0.5 rounded-full">
                Spar 17%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Small */}
          <div className="rounded-3xl bg-[#f5f7fa] p-8">
            <h3 className="text-xl font-bold text-gray-800">Fritim Small</h3>
            <p className="mt-2 text-gray-500">Perfekt for små arrangementer</p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-gray-800">
                {currentPrices.small.toLocaleString('nb-NO')}
              </span>
              <span className="text-gray-500"> {periodLabel}</span>
            </div>
            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-[#4ecdc4]">✓</span> 1 arrangement
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-[#4ecdc4]">✓</span> Opptil 100 frivillige
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-[#4ecdc4]">✓</span> 5 oppgaver per arrangement
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-[#4ecdc4]">✓</span> E-post til frivillige
              </li>
            </ul>
            <Link
              href="https://fritim.app/register-admin"
              className="mt-8 block w-full rounded-xl bg-gradient-to-r from-[#6dd5a0] to-[#4ecdc4] py-4 text-center font-bold text-black transition hover:shadow-lg"
            >
              Kom i gang
            </Link>
          </div>

          {/* Medium - Popular */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#6dd5a0] to-[#4ecdc4] p-8 scale-105 shadow-2xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-black px-4 py-1 text-sm font-semibold text-white">
              Mest populær
            </div>
            <h3 className="text-xl font-bold text-black">Fritim Medium</h3>
            <p className="mt-2 text-black/70">For mellomstore festivaler</p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-black">
                {currentPrices.medium.toLocaleString('nb-NO')}
              </span>
              <span className="text-black/70"> {periodLabel}</span>
            </div>
            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-2 text-black/80">
                <span className="text-black">✓</span> Opptil 3 arrangementer
              </li>
              <li className="flex items-center gap-2 text-black/80">
                <span className="text-black">✓</span> Opptil 250 frivillige
              </li>
              <li className="flex items-center gap-2 text-black/80">
                <span className="text-black">✓</span> Ubegrenset oppgaver
              </li>
              <li className="flex items-center gap-2 text-black/80">
                <span className="text-black">✓</span> E-post og sms-varsling til frivillige
              </li>
              <li className="flex items-center gap-2 text-black/80">
                <span className="text-black">✓</span> CSV eksport
              </li>
              <li className="flex items-center gap-2 text-black/80">
                <span className="text-black">✓</span> Prioritert support
              </li>
            </ul>
            <Link
              href="https://fritim.app/register-admin"
              className="mt-8 block w-full rounded-xl bg-black py-4 text-center font-bold text-white transition hover:bg-black/90"
            >
              Kom i gang
            </Link>
          </div>

          {/* Large */}
          <div className="rounded-3xl bg-[#f5f7fa] p-8">
            <h3 className="text-xl font-bold text-gray-800">Fritim Large</h3>
            <p className="mt-2 text-gray-500">For store festivaler</p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-gray-800">
                {currentPrices.large.toLocaleString('nb-NO')}
              </span>
              <span className="text-gray-500"> {periodLabel}</span>
            </div>
            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-[#4ecdc4]">✓</span> Ubegrenset arrangementer
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-[#4ecdc4]">✓</span> 250+ frivillige
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-[#4ecdc4]">✓</span> Ubegrenset oppgaver
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-[#4ecdc4]">✓</span> Alt i Medium
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-[#4ecdc4]">✓</span> API-tilgang
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="text-[#4ecdc4]">✓</span> Dedikert support
              </li>
            </ul>
            <Link
              href="https://fritim.app/register-admin"
              className="mt-8 block w-full rounded-xl bg-gradient-to-r from-[#6dd5a0] to-[#4ecdc4] py-4 text-center font-bold text-black transition hover:shadow-lg"
            >
              Kom i gang
            </Link>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-md text-white/80">
          <p>Alle priser er inkl. mva.</p>
          <p>SMS faktureres etter faktisk forbruk.</p>
          <p>Arrangementer utover inkludert antall kan kjøpes separat.</p>
        </div>
      </div>
    </section>
  );
}
