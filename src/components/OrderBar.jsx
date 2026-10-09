import { useLanguage } from '../LanguageContext';
import { useOrder } from '../OrderContext';
import React from 'react';
import { MessageCircle, Trash2 } from 'lucide-react';
import { formatTotal } from '../data/menu';

// Sticks to the bottom of the screen once the visitor has picked something
export default function OrderBar() {
  const { lang, t } = useLanguage();
  const { count, total, clear, whatsappLink } = useOrder();

  if (count === 0) return null;

  return (
    <div className="sticky bottom-0 z-40 bg-deep-green text-bg-paper border-t-4 border-fg-text">
      <div className="max-w-6xl mx-auto px-5 md:px-6 py-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <p className="text-lg font-bold" aria-live="polite">
          {t('orderCount')(count)}
          <span className="font-heading text-accent-yellow ms-3">{formatTotal(total, lang)}</span>
        </p>
        <div className="flex items-center gap-2 ms-auto">
          <button
            onClick={clear}
            className="w-11 h-11 flex items-center justify-center border-2 border-bg-paper/60 wobbly-1 hover:bg-bg-paper/15 transition-colors"
            aria-label={t('orderClear')}
          >
            <Trash2 size={18} aria-hidden="true" />
          </button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="wobbly-2 flex items-center gap-2 bg-accent-yellow text-fg-text border-2 border-fg-text px-5 py-2.5 font-bold hover:bg-bg-paper transition-colors"
          >
            <MessageCircle size={20} aria-hidden="true" />
            {t('orderSend')}
          </a>
        </div>
      </div>
    </div>
  );
}
