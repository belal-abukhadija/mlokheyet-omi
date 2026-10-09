import React from 'react';
import { Bike } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { DELIVERY_APPS } from '../data/contact';

// "Delivery on Talabat and Careem" line. Each app becomes a link once its url is filled in.
export default function DeliveryApps({ className = '' }) {
  const { lang, t } = useLanguage();
  const pill = 'inline-block bg-accent-yellow border-2 border-fg-text px-3 py-0.5 font-bold wobbly-2';

  return (
    <p className={`flex flex-wrap items-center gap-x-3 gap-y-2 font-bold ${className}`}>
      <Bike size={22} className="text-brand-green shrink-0" aria-hidden="true" />
      <span>{t('deliveryOn')}</span>
      {DELIVERY_APPS.map(app => {
        const name = lang === 'ar' ? app.nameAr : app.nameEn;
        return app.url ? (
          <a key={app.id} href={app.url} target="_blank" rel="noopener noreferrer" className={`${pill} hover:bg-brand-green hover:text-bg-paper transition-colors`}>
            {name}
          </a>
        ) : (
          <span key={app.id} className={pill}>{name}</span>
        );
      })}
    </p>
  );
}
