import React from 'react';
import { MapPin, Phone, Navigation } from 'lucide-react';
import DeliveryApps from './DeliveryApps';
import { useLanguage } from '../LanguageContext';
import { MAP_EMBED_URL, DIRECTIONS_URL, TEL_URL, PHONE_DISPLAY } from '../data/contact';

export default function MapSection() {
  const { t } = useLanguage();

  return (
    <section id="visit" className="pt-20 md:pt-28">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-fg-text mb-4 inline-block relative">
          {t('findUsTitle')}
          <svg className="absolute -bottom-3 left-0 w-full h-3 text-accent-yellow" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 5 Q 50 15, 100 0" stroke="currentColor" strokeWidth="4" fill="none" />
          </svg>
        </h2>
        <p className="opacity-80 text-lg md:text-xl mt-4">
          {t('findUsSubtitle')}
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-10 items-stretch">
        <div className="h-[380px] lg:h-auto lg:min-h-[440px] bg-muted-paper border-4 border-fg-text shadow-[6px_6px_0px_#ffb300] wobbly-2 overflow-hidden">
          <iframe
            src={MAP_EMBED_URL}
            title={t('mapTitle')}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>

        <div className="bg-white border-4 border-fg-text shadow-[6px_6px_0px_#579019] wobbly-3 p-7 md:p-9 flex flex-col gap-7">
          <div className="flex gap-4">
            <MapPin size={26} className="text-brand-green shrink-0 mt-1" aria-hidden="true" />
            <div>
              <h3 className="font-body font-bold opacity-70 mb-1">{t('addressLabel')}</h3>
              <p className="text-xl font-bold leading-relaxed">{t('address')}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone size={26} className="text-brand-green shrink-0 mt-1" aria-hidden="true" />
            <div>
              <h3 className="font-body font-bold opacity-70 mb-1">{t('phoneLabel')}</h3>
              <a href={TEL_URL} dir="ltr" className="text-2xl font-bold underline decoration-accent-yellow decoration-4 underline-offset-4 hover:text-brand-green transition-colors">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <DeliveryApps className="text-xl" />

          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto wobbly-2 flex items-center justify-center gap-2 bg-brand-green text-bg-paper border-2 border-fg-text px-6 py-4 text-lg font-bold shadow-[4px_4px_0px_#2d2d2d] hover:shadow-[2px_2px_0px_#2d2d2d] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <Navigation size={20} aria-hidden="true" />
            {t('directions')}
          </a>
        </div>
      </div>
    </section>
  );
}
