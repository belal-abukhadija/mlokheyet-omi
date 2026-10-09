import { useState, useEffect, createContext, useContext } from 'react';

// Create Language Context
export const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

// Translations
const translations = {
  ar: {
    brand: 'ملوخية أمي',
    navMenu: 'المنيو',
    navStory: 'قصتنا',
    navVisit: 'وين مكاننا',
    call: 'اتصل',
    heroHeadline: 'الطعم الأصيل للملوخية الأردنية',
    heroSubHeadline: 'وصفة أمي، من القلب لمعدتك مباشرة.',
    heroCTA: 'شوف المنيو',
    heroSecondaryCTA: 'اتصل واطلب',
    heroPhotoCaption: 'ملوخية مع دجاج',
    heroArea: 'دابوق، عمّان',
    delivery: 'توصيل متوفر',
    aboutHeadline: 'قصتنا',
    aboutText: 'ملوخية أمي مش مجرد مطعم، هي قصة حب حقيقية للطبخ البيتي الأردني. كل طبق بنقدمه مصنوع بنفس الشغف ونفس الوصفة اللي كبرنا عليها.',
    bestSeller: 'الأكثر مبيعاً',
    menuTitle: 'المنيو',
    menuHint: 'اختار أطباقك وابعتلنا الطلب عالواتساب بكبسة.',
    dishesTitle: 'الأطباق',
    addonsTitle: 'الإضافات',
    addItem: 'ضيف',
    removeItem: 'شيل',
    orderCount: (n) => (n === 1 ? 'صنف واحد' : n === 2 ? 'صنفين' : n <= 10 ? `${n} أصناف` : `${n} صنف`),
    orderSend: 'ابعت الطلب عالواتساب',
    orderClear: 'امسح الطلب',
    tagline: 'المحل الأول و الوحيد متخصص بالملوخية 🌿',
    findUsTitle: 'وين مكاننا؟',
    findUsSubtitle: 'زورونا بدابوق وجربوا الطعم على أصوله.',
    addressLabel: 'العنوان',
    address: 'عمّان، دابوق، شارع المواصفات والمقاييس',
    phoneLabel: 'للطلب والاستفسار',
    directions: 'الاتجاهات على الخريطة',
    mapTitle: 'موقع ملوخية أمي على الخريطة',
    reviewTitle: 'أكلت عنّا؟ احكيلنا رأيك',
    reviewText: 'تقييمك على جوجل بيعرّف ناس أكتر على ملوخية أمي.',
    reviewCTA: 'قيّمنا على جوجل',
    footerMotto: 'أصالة، حب، وعيلة.',
    backToTop: 'ارجع لفوق',
    rights: 'كل الحقوق محفوظة.',
  },
  en: {
    brand: 'Mlokheyet Omi',
    navMenu: 'Menu',
    navStory: 'Our story',
    navVisit: 'Find us',
    call: 'Call',
    heroHeadline: 'The Authentic Taste of Jordanian Molokhia',
    heroSubHeadline: "My mother's recipe, straight from the heart to your stomach.",
    heroCTA: 'View menu',
    heroSecondaryCTA: 'Call to order',
    heroPhotoCaption: 'Molokhia with chicken',
    heroArea: 'Dabouq, Amman',
    delivery: 'Delivery available',
    aboutHeadline: 'Our Story',
    aboutText: "Mlokheyet Omi isn't just a restaurant, it's a true love story for authentic Jordanian home cooking. Every dish is made with the same passion and recipe we grew up with.",
    bestSeller: 'Best seller',
    menuTitle: 'The Menu',
    menuHint: 'Pick your dishes and send us the order on WhatsApp in one tap.',
    dishesTitle: 'Dishes',
    addonsTitle: 'Add-ons',
    addItem: 'Add',
    removeItem: 'Remove',
    orderCount: (n) => (n === 1 ? '1 item' : `${n} items`),
    orderSend: 'Send order on WhatsApp',
    orderClear: 'Clear order',
    tagline: 'The first and only place specialized in Molokhia 🌿',
    findUsTitle: 'Find Us',
    findUsSubtitle: 'Visit us in Dabouq and taste the real thing.',
    addressLabel: 'Address',
    address: 'Standards and Metrology St, Dabouq, Amman',
    phoneLabel: 'Orders and questions',
    directions: 'Get directions',
    mapTitle: 'Mlokheyet Omi on the map',
    reviewTitle: 'Eaten with us? Tell us how it was',
    reviewText: 'Your Google review helps more people find Mlokheyet Omi.',
    reviewCTA: 'Review us on Google',
    footerMotto: 'Authenticity, love, and family.',
    backToTop: 'Back to top',
    rights: 'All rights reserved.',
  }
};

const STORAGE_KEY = 'mlokheyet-omi-lang';

function readStoredLang() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'ar';
  } catch {
    return 'ar';
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang);

  // Update document direction and lang for accessibility and proper rendering
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage unavailable (private mode): the choice just won't be remembered.
    }
  }, [lang]);

  const toggleLanguage = () => setLang(prev => (prev === 'ar' ? 'en' : 'ar'));

  const t = (key) => translations[lang][key];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
