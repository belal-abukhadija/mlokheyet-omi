import { useLanguage } from '../LanguageContext';
import React from 'react';

// Hand-torn edge used above and below the green band
function TornEdge({ flip }) {
  return (
    <svg
      className={`block w-full h-6 text-deep-green ${flip ? 'rotate-180' : ''}`}
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 24 V14 Q 60 2, 130 12 T 280 9 T 430 15 T 590 7 T 740 14 T 900 6 T 1050 13 T 1200 8 V24 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="story">
      <TornEdge />
      <div className="bg-deep-green text-bg-paper px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-accent-yellow mb-8">
            {t('aboutHeadline')}
          </h2>
          <p className="text-xl md:text-3xl leading-loose md:leading-loose font-medium">
            {t('aboutText')}
          </p>
          <svg className="mx-auto mt-10 text-accent-yellow" width="120" height="20" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden="true">
            <path d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10" />
          </svg>
        </div>
      </div>
      <TornEdge flip />
    </section>
  );
}
