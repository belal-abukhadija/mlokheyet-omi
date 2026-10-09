import { useLanguage } from '../LanguageContext';
import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import DeliveryApps from './DeliveryApps';
import { TEL_URL } from '../data/contact';

// Hand-drawn clay bowl of molokhia with a lemon and a green chili on the side
function BowlIllustration() {
  const ink = { stroke: 'var(--color-fg-text)', strokeWidth: 4, strokeLinecap: 'round', strokeLinejoin: 'round' };

  return (
    <svg viewBox="0 0 400 350" className="w-full h-auto" aria-hidden="true">
      <g className="steam" fill="none" stroke="var(--color-brand-green)" strokeWidth="5" strokeLinecap="round">
        <path d="M140 118 q-20 -22 0 -44 t0 -44" />
        <path d="M200 112 q-20 -24 0 -48 t0 -48" />
        <path d="M260 118 q-20 -22 0 -44 t0 -44" />
      </g>

      {/* Lemon half */}
      <circle cx="52" cy="258" r="40" fill="var(--color-accent-yellow)" {...ink} />
      <circle cx="52" cy="258" r="28" fill="#ffe082" stroke="var(--color-fg-text)" strokeWidth="2.5" />
      <path d="M52 230 v56 M24 258 h56 M32 238 l40 40 M72 238 l-40 40" stroke="var(--color-fg-text)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

      {/* Chili */}
      <path d="M22 306 C 60 330, 110 328, 140 300 C 112 308, 62 304, 34 288 Z" fill="var(--color-brand-green)" {...ink} />
      <path d="M22 306 q-12 -6 -14 -18" fill="none" {...ink} />

      {/* Bowl */}
      <ellipse cx="200" cy="322" rx="72" ry="10" fill="var(--color-fg-text)" opacity="0.15" />
      <path d="M56 168 C 66 272, 128 318, 200 318 C 272 318, 334 272, 344 168 Z" fill="var(--color-clay)" {...ink} />
      <path d="M92 214 C 110 262, 150 290, 196 294" fill="none" stroke="#fdfbf7" strokeWidth="4" strokeLinecap="round" opacity="0.35" />
      <ellipse cx="200" cy="168" rx="146" ry="40" fill="#cf7a4e" {...ink} />
      <ellipse cx="200" cy="172" rx="124" ry="29" fill="#3d6a10" {...ink} />

      {/* Swirls and garlic on the molokhia */}
      <path d="M130 172 q22 -14 46 -2 t44 2" fill="none" stroke="var(--color-brand-green)" strokeWidth="4" strokeLinecap="round" />
      <path d="M196 186 q24 8 50 -2 t34 -8" fill="none" stroke="var(--color-brand-green)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="158" cy="184" r="4" fill="#ffe082" />
      <circle cx="238" cy="166" r="4" fill="#ffe082" />
      <circle cx="268" cy="182" r="3" fill="#ffe082" />
    </svg>
  );
}

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="top" className="grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-6 items-center pt-10 md:pt-16 pb-20 md:pb-28">
      <div className="text-center md:text-start">
        <div className="inline-block mb-6 transform rotate-1 wobbly-3 border-2 border-brand-green bg-bg-paper px-4 py-2 text-brand-green font-bold text-sm md:text-base shadow-[2px_2px_0px_#579019]">
          {t('tagline')}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-brand-green font-heading leading-[1.5] md:leading-[1.45] lg:leading-[1.4]">
          {t('heroHeadline')}
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-80 font-medium max-w-xl mx-auto md:mx-0">
          {t('heroSubHeadline')}
        </p>

        <div className="flex flex-col min-[480px]:flex-row items-center gap-4 justify-center md:justify-start">
          <a
            href="#menu"
            className="wobbly-2 bg-brand-green text-bg-paper border-2 border-fg-text px-10 py-4 text-xl font-bold shadow-[4px_4px_0px_#2d2d2d] hover:shadow-[2px_2px_0px_#2d2d2d] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            {t('heroCTA')}
          </a>
          <a
            href={TEL_URL}
            className="wobbly-1 flex items-center gap-2 text-fg-text border-2 border-fg-text px-8 py-4 text-lg font-bold hover:bg-muted-paper transition-colors"
          >
            <Phone size={20} aria-hidden="true" />
            {t('heroSecondaryCTA')}
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 justify-center md:justify-start text-lg font-bold">
          <li className="flex items-center gap-2">
            <MapPin size={20} className="text-brand-green" aria-hidden="true" />
            {t('heroArea')}
          </li>
          <li>
            <DeliveryApps />
          </li>
        </ul>
      </div>

      <div className="relative max-w-sm md:max-w-md w-full mx-auto">
        <div className="absolute inset-x-6 top-[38%] bottom-0 bg-accent-yellow/25 wobbly-1 -rotate-3" aria-hidden="true"></div>
        <div className="relative">
          <BowlIllustration />
        </div>

        {/* Taped photo of the real dish */}
        <figure className="absolute -bottom-10 right-0 md:-right-6 w-40 md:w-52 bg-white border-2 border-fg-text p-2 pb-1 shadow-[4px_4px_0px_#579019] transform -rotate-6">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-7 bg-muted-paper/90 border border-fg-text rotate-3 wobbly-1" aria-hidden="true"></div>
          <img
            src="/gallery/09.webp"
            alt={t('heroPhotoCaption')}
            width="900"
            height="1125"
            className="w-full aspect-square object-cover border border-fg-text/40"
          />
          <figcaption className="font-heading text-xs text-center py-2">{t('heroPhotoCaption')}</figcaption>
        </figure>
      </div>
    </section>
  );
}
