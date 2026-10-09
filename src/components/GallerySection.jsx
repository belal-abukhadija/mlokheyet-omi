import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X, Instagram } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { INSTAGRAM_URL } from '../data/contact';

// Photos from the restaurant's Instagram, resized into /public/gallery. The first one is the big feature photo.
const PHOTOS = [
  { file: '08', ar: 'السفرة كاملة', en: 'The full spread', tilt: '-rotate-1' },
  { file: '01', ar: 'ملوخية مع حمام محشي', en: 'Molokhia with stuffed pigeon', tilt: 'rotate-2' },
  { file: '09', ar: 'ملوخية مع لحمة', en: 'Molokhia with meat', tilt: '-rotate-2' },
  { file: '05', ar: 'هيك القوام الصح', en: 'That is the right texture', tilt: 'rotate-1' },
  { file: '10', ar: 'رز بشعيرية', en: 'Vermicelli rice', tilt: '-rotate-1' },
  { file: '03', ar: 'وينجز وملوخية', en: 'Wings and molokhia', tilt: 'rotate-2' },
  { file: '04', ar: 'عصرة ليمون وبتكمل', en: 'A squeeze of lemon finishes it', tilt: '-rotate-2' },
  { file: '06', ar: 'بنستناكم بدابوق', en: 'See you in Dabouq', tilt: 'rotate-1' },
  { file: '11', ar: 'ولا لقمة بتضل', en: 'Not a bite left', tilt: '-rotate-1' },
];

const src = (photo) => `/gallery/${photo.file}.webp`;

export default function GallerySection() {
  const { lang, t } = useLanguage();
  const [open, setOpen] = useState(null);
  const dialogRef = useRef(null);
  const caption = (photo) => (lang === 'ar' ? photo.ar : photo.en);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open !== null && !dialog.open) dialog.showModal();
    if (open === null && dialog.open) dialog.close();
  }, [open]);

  const step = (delta) => setOpen(i => (i + delta + PHOTOS.length) % PHOTOS.length);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') step(lang === 'ar' ? 1 : -1);
    if (e.key === 'ArrowRight') step(lang === 'ar' ? -1 : 1);
  };

  const navButton = 'w-12 h-12 shrink-0 flex items-center justify-center bg-accent-yellow text-fg-text border-2 border-fg-text wobbly-1 hover:bg-bg-paper transition-colors';

  return (
    <section id="gallery" className="pb-24 md:pb-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-fg-text relative inline-block">
          {t('galleryTitle')}
          <svg className="absolute -bottom-3 left-0 w-full h-3 text-accent-yellow" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 5 Q 50 15, 100 0" stroke="currentColor" strokeWidth="4" fill="none" />
          </svg>
        </h2>
        <p className="text-lg md:text-xl opacity-80 mt-7">{t('gallerySubtitle')}</p>
      </div>

      {/* Phones: a swipeable strip. Wider screens: a photo wall with one big feature photo. */}
      <ul className="flex md:grid md:grid-cols-4 gap-5 md:gap-7 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0 py-6 md:py-0">
        {PHOTOS.map((photo, i) => (
          <li key={photo.file} className={`shrink-0 w-[72vw] max-w-xs md:w-auto md:max-w-none snap-center ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
            <button
              onClick={() => setOpen(i)}
              className={`group relative block w-full h-full text-start bg-white border-2 border-fg-text p-2 md:p-3 shadow-[5px_5px_0px_#579019] ${photo.tilt} hover:rotate-0 hover:shadow-[8px_8px_0px_#ffb300] transition-all duration-300`}
              aria-label={`${t('galleryOpen')}: ${caption(photo)}`}
            >
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-7 bg-muted-paper/90 border border-fg-text wobbly-1 rotate-2 z-10" aria-hidden="true"></span>
              <img
                src={src(photo)}
                alt={caption(photo)}
                width="900"
                height="1125"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover border border-fg-text/40"
              />
              <span className={`block font-heading font-bold text-center pt-3 pb-1 ${i === 0 ? 'text-lg md:text-2xl' : 'text-base'}`}>
                {caption(photo)}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="text-center mt-12">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 wobbly-2 bg-white border-2 border-fg-text px-7 py-3 text-lg font-bold shadow-[4px_4px_0px_#579019] hover:shadow-[2px_2px_0px_#579019] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          <Instagram size={22} aria-hidden="true" />
          {t('galleryInstagram')}
        </a>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(null)}
        onKeyDown={onKeyDown}
        onClick={(e) => e.target === dialogRef.current && setOpen(null)}
        className="m-auto bg-transparent backdrop:bg-deep-green/90 max-w-[min(94vw,56rem)] overflow-visible"
      >
        {open !== null && (
          <div className="flex items-center gap-2 md:gap-4">
            <button onClick={() => step(-1)} className={navButton} aria-label={t('galleryPrev')}>
              <ChevronRight size={24} className="ltr:rotate-180" aria-hidden="true" />
            </button>
            <figure className="relative bg-white border-2 border-fg-text p-2 md:p-3 min-w-0">
              <img src={src(PHOTOS[open])} alt={caption(PHOTOS[open])} className="max-h-[74vh] w-auto mx-auto" />
              <figcaption className="font-heading font-bold text-center text-lg text-fg-text pt-3 pb-1">{caption(PHOTOS[open])}</figcaption>
              <button
                onClick={() => setOpen(null)}
                className="absolute -top-4 -end-4 w-11 h-11 flex items-center justify-center bg-fg-text text-bg-paper border-2 border-bg-paper rounded-full"
                aria-label={t('galleryClose')}
              >
                <X size={20} aria-hidden="true" />
              </button>
            </figure>
            <button onClick={() => step(1)} className={navButton} aria-label={t('galleryNext')}>
              <ChevronLeft size={24} className="ltr:rotate-180" aria-hidden="true" />
            </button>
          </div>
        )}
      </dialog>
    </section>
  );
}
