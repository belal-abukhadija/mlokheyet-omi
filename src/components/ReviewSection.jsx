import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { REVIEW_URL } from '../data/contact';

export default function ReviewSection() {
  const { t } = useLanguage();

  return (
    <section className="pt-20 md:pt-24 flex justify-center">
      <div className="relative max-w-2xl w-full bg-accent-yellow border-4 border-fg-text shadow-[6px_6px_0px_#2d2d2d] wobbly-1 -rotate-1 px-6 py-10 md:p-12 text-center">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-24 h-8 bg-bg-paper/90 border-2 border-fg-text wobbly-2 rotate-2" aria-hidden="true"></div>

        <div className="flex justify-center gap-2 mb-6" aria-hidden="true">
          {[-8, 5, -3, 7, -6].map((tilt, i) => (
            <Star key={i} size={38} strokeWidth={2.5} className="fill-bg-paper text-fg-text" style={{ transform: `rotate(${tilt}deg)` }} />
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-heading font-bold leading-relaxed mb-3">{t('reviewTitle')}</h2>
        <p className="text-lg md:text-xl font-medium mb-8">{t('reviewText')}</p>

        <a
          href={REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block wobbly-2 bg-fg-text text-bg-paper border-2 border-fg-text px-8 py-4 text-lg font-bold hover:bg-deep-green transition-colors"
        >
          {t('reviewCTA')}
        </a>
      </div>
    </section>
  );
}
