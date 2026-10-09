import { useLanguage } from '../LanguageContext';
import React from 'react';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import { INSTAGRAM_URL, FACEBOOK_URL, DIRECTIONS_URL, TEL_URL, PHONE_DISPLAY } from '../data/contact';

export default function Footer() {
  const { t } = useLanguage();
  const social = 'p-3 bg-white border-2 border-fg-text hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all';

  return (
    <footer className="mt-24 md:mt-32 w-full border-t-2 border-fg-text border-dashed pt-12 pb-8 px-6 text-lg max-w-6xl mx-auto relative">
      {/* Small leaf icon returning to top */}
      <a
        href="#top"
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-green text-bg-paper flex items-center justify-center wobbly-1 border-2 border-fg-text shadow-[3px_3px_0px_#2d2d2d] z-10"
        aria-label={t('backToTop')}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m18 15-6-6-6 6" />
        </svg>
      </a>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center">
        <div className="md:text-start">
          <img src="/logo.jpg" alt={t('brand')} width="126" height="126" className="w-32 h-32 mix-blend-multiply mx-auto md:mx-0" />
          <p className="opacity-80">{t('footerMotto')}</p>
        </div>

        <div className="flex justify-center gap-6">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`${social} wobbly-1 shadow-[2px_2px_0px_#579019] rotate-2`}>
            <Instagram size={24} aria-hidden="true" />
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${social} wobbly-2 shadow-[2px_2px_0px_#ffb300] -rotate-3`}>
            <Facebook size={24} aria-hidden="true" />
          </a>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-end">
          <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-bold hover:text-brand-green transition-colors">
            <MapPin size={20} className="text-brand-green shrink-0" aria-hidden="true" />
            {t('address')}
          </a>
          <a href={TEL_URL} className="flex items-center gap-2 font-bold hover:text-brand-green transition-colors">
            <Phone size={20} className="text-brand-green shrink-0" aria-hidden="true" />
            <span dir="ltr">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>

      <div className="opacity-60 text-base text-center mt-12 pt-4 border-t border-fg-text/20">
        &copy; {new Date().getFullYear()} Mlokheyet Omi. {t('rights')}
      </div>
    </footer>
  );
}
