import { useLanguage } from '../LanguageContext';
import React from 'react';
import { Phone } from 'lucide-react';
import { TEL_URL } from '../data/contact';

export default function Header() {
  const { lang, toggleLanguage, t } = useLanguage();

  const links = [
    { href: '#menu', label: t('navMenu') },
    { href: '#gallery', label: t('navGallery') },
    { href: '#story', label: t('navStory') },
    { href: '#visit', label: t('navVisit') },
  ];

  return (
    <header className="sticky top-0 z-40 bg-bg-paper border-b-2 border-dashed border-fg-text/30">
      <div className="px-5 md:px-6 py-1 flex justify-between items-center gap-4 w-full max-w-6xl mx-auto">
        <a href="#top" className="flex items-center gap-2 shrink-0" aria-label={t('brand')}>
          <img src="/logo.jpg" alt="" width="96" height="96" className="w-20 h-20 md:w-24 md:h-24 mix-blend-multiply" />
        </a>

        <nav className="hidden md:flex items-center gap-8 font-bold text-lg">
          {links.map(link => (
            <a key={link.href} href={link.href} className="hover:text-brand-green transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={toggleLanguage}
            className="wobbly-1 border-2 border-fg-text px-4 py-2 font-bold hover:bg-muted-paper transition-colors"
            lang={lang === 'ar' ? 'en' : 'ar'}
          >
            {lang === 'ar' ? 'English' : 'عربي'}
          </button>
          <a
            href={TEL_URL}
            className="wobbly-2 flex items-center gap-2 bg-brand-green text-bg-paper border-2 border-fg-text px-4 py-2 font-bold hover:bg-deep-green transition-colors"
          >
            <Phone size={18} aria-hidden="true" />
            {t('call')}
          </a>
        </div>
      </div>
    </header>
  );
}
