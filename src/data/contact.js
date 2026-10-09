// Single source of truth for the restaurant's contact details (one branch: Dabouq).
export const PHONE_DISPLAY = '0795699382';
export const PHONE_INTL = '962795699382';
export const TEL_URL = `tel:+${PHONE_INTL}`;

const PLACE_ID = 'ChIJ_4stBryhHBURVWwY9pwmbNY';

export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16092.157598702945!2d35.824176242575!3d32.016213183054056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1bc062d8bff%3A0xd66c269cf6186c55!2sMom's%20Mulokhiya!5e0!3m2!1sen!2sjo!4v1791567768892!5m2!1sen!2sjo";
export const DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=Mom%27s%20Mulokhiya&query_place_id=${PLACE_ID}`;
export const REVIEW_URL = `https://search.google.com/local/writereview?placeid=${PLACE_ID}`;

export const INSTAGRAM_URL = 'https://www.instagram.com/mlokheyet.omi?igsh=c3cybzZ6dTNkbno5';
export const FACEBOOK_URL = 'https://www.facebook.com/share/1TCLeJRReG/';

export const whatsappUrl = (text) =>
  `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(text)}`;

// Delivery apps the restaurant is listed on. Paste each restaurant page link into `url` to make the label a link.
export const DELIVERY_APPS = [
  { id: 'talabat', nameAr: 'طلبات', nameEn: 'Talabat', url: '' },
  { id: 'careem', nameAr: 'كريم', nameEn: 'Careem', url: '' },
];
