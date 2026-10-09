import { useLanguage } from '../LanguageContext';
import { useOrder } from '../OrderContext';
import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { DISHES, ADD_ONS, formatPrice } from '../data/menu';

function Stepper({ item, name }) {
  const { t } = useLanguage();
  const { quantities, add, remove } = useOrder();
  const qty = quantities[item.id] || 0;
  const button = 'w-10 h-10 shrink-0 flex items-center justify-center border-2 border-fg-text wobbly-1 transition-colors';

  return (
    <div className="flex items-center gap-1 shrink-0">
      {qty > 0 && (
        <>
          <button onClick={() => remove(item.id)} className={`${button} bg-white hover:bg-muted-paper`} aria-label={`${t('removeItem')}: ${name}`}>
            <Minus size={18} aria-hidden="true" />
          </button>
          <span className="w-7 text-center font-heading font-bold text-lg" aria-live="polite">{qty}</span>
        </>
      )}
      <button onClick={() => add(item.id)} className={`${button} bg-accent-yellow hover:bg-brand-green hover:text-bg-paper`} aria-label={`${t('addItem')}: ${name}`}>
        <Plus size={18} aria-hidden="true" />
      </button>
    </div>
  );
}

function MenuRow({ item, large }) {
  const { lang, t } = useLanguage();
  const name = lang === 'ar' ? item.nameAr : item.nameEn;
  const { amount, unit } = formatPrice(item.price, lang);

  return (
    <li className="flex items-center gap-3 py-3">
      {/* Phones: name on its own line, then price and badge. Wider screens: one line with a dotted leader. */}
      <div className="flex-1 min-w-0 flex flex-wrap sm:flex-nowrap items-center sm:items-baseline gap-x-3 gap-y-1">
        <span className={`w-full sm:w-auto min-w-0 font-bold leading-relaxed ${large ? 'text-xl' : 'text-lg'} ${item.price === 0 ? 'sm:whitespace-nowrap sm:shrink-0' : ''}`}>
          {name}
        </span>
        {item.bestSeller && (
          <span className="order-last sm:order-none shrink-0 whitespace-nowrap sm:self-center bg-accent-yellow border-2 border-fg-text px-2 py-0.5 text-sm font-bold -rotate-2 wobbly-2">
            {t('bestSeller')}
          </span>
        )}
        <span className="leader hidden sm:block" aria-hidden="true"></span>
        {item.price === 0 ? (
          <span className="whitespace-nowrap shrink-0 flex items-center gap-2">
            <span className="bg-brand-green text-bg-paper border-2 border-fg-text px-3 py-0.5 font-heading font-bold wobbly-1">{amount}</span>
            <span className="opacity-80">{unit}</span>
          </span>
        ) : (
          <span className="whitespace-nowrap shrink-0">
            <span className={`font-heading font-bold ${large ? 'text-2xl' : 'text-xl'}`}>{amount}</span>{' '}
            <span className="opacity-80">{unit}</span>
          </span>
        )}
      </div>
      {/* Free items can't be ordered, so their price label uses the stepper's space */}
      {item.price > 0 && <Stepper item={item} name={name} />}
    </li>
  );
}

export default function MenuSection() {
  const { t } = useLanguage();

  return (
    <section id="menu" className="pb-24 md:pb-32">
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-heading font-bold text-fg-text relative inline-block">
          {t('menuTitle')}
          <svg className="absolute -bottom-4 left-0 w-full h-4 text-brand-green" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 5 Q 25 10, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
          </svg>
        </h2>
        <p className="text-lg md:text-xl opacity-80 mt-8">{t('menuHint')}</p>
      </div>

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-12 items-start">
        <div className="bg-white border-4 border-fg-text p-6 md:p-10 shadow-[6px_6px_0px_#579019] wobbly-3 relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-24 h-8 bg-muted-paper/90 border-2 border-fg-text wobbly-1 -rotate-2" aria-hidden="true"></div>
          <h3 className="text-3xl font-heading font-bold text-brand-green mb-4">{t('dishesTitle')}</h3>
          <ul className="divide-y-2 divide-dashed divide-fg-text/15">
            {DISHES.map(item => <MenuRow key={item.id} item={item} large />)}
          </ul>
        </div>

        <div className="bg-bg-paper border-4 border-fg-text p-6 md:p-8 shadow-[6px_6px_0px_#ffb300] wobbly-2 lg:rotate-1 lg:mt-10">
          <h3 className="text-3xl font-heading font-bold mb-4">{t('addonsTitle')}</h3>
          <ul className="divide-y-2 divide-dashed divide-fg-text/15">
            {ADD_ONS.map(item => <MenuRow key={item.id} item={item} />)}
          </ul>
        </div>
      </div>
    </section>
  );
}
