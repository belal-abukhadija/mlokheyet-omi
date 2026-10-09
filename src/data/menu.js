// Prices are in JOD. Anything under 1 JOD is shown in piasters.
export const DISHES = [
  { id: 'd1', nameAr: 'ملوخية مع دجاج ورز بشعيرية', nameEn: 'Molokhia with Chicken & Vermicelli Rice', price: 5, bestSeller: true },
  { id: 'd2', nameAr: 'فتة ملوخية (جداً قوية)', nameEn: 'Molokhia Fatteh (Very Strong!)', price: 5, bestSeller: true },
  { id: 'd3', nameAr: 'ملوخية سادة مع رز بشعيرية', nameEn: 'Plain Molokhia with Vermicelli Rice', price: 4 },
  { id: 'd4', nameAr: 'ملوخية مع لحمة ورز بشعيرية', nameEn: 'Molokhia with Meat & Vermicelli Rice', price: 5.5 },
  { id: 'd5', nameAr: 'ملوخية مع جمبري ورز بشعيرية', nameEn: 'Molokhia with Shrimp & Vermicelli Rice', price: 6.5 },
  { id: 'd6', nameAr: 'ملوخية مع حمام محشي', nameEn: 'Molokhia with Stuffed Pigeon', price: 7 },
  { id: 'd7', nameAr: 'ملوخية سادة', nameEn: 'Plain Molokhia (Soup Only)', price: 2.5 },
];

export const ADD_ONS = [
  { id: 'a1', nameAr: 'اضافة دجاج', nameEn: 'Extra Chicken', price: 1.75 },
  { id: 'a2', nameAr: 'اضافة حمام', nameEn: 'Extra Pigeon', price: 5 },
  { id: 'a3', nameAr: 'خبز مقلي', nameEn: 'Fried Bread', price: 0.25 },
  { id: 'a4', nameAr: 'دقّة', nameEn: 'Dugga (Garlic/Lemon Mix)', price: 0.25 },
  { id: 'a5', nameAr: 'صحن فلفل وليمون', nameEn: 'Chili & Lemon Plate', price: 0 },
  { id: 'a6', nameAr: 'مشروب غازي', nameEn: 'Soft Drink', price: 0.75 },
  { id: 'a7', nameAr: 'مياه معدنية', nameEn: 'Mineral Water', price: 0.5 },
];

export const ALL_ITEMS = [...DISHES, ...ADD_ONS];

export function formatPrice(price, lang) {
  const ar = lang === 'ar';
  if (price === 0) return { amount: ar ? 'ببلاش' : 'Free', unit: ar ? 'مع الطلب' : 'with order' };
  if (price < 1) return { amount: String(Math.round(price * 100)), unit: ar ? 'قرش' : 'piasters' };
  return { amount: String(price), unit: ar ? (price < 2 ? 'دينار' : 'دنانير') : 'JOD' };
}

export function formatTotal(total, lang) {
  return `${total.toFixed(2)} ${lang === 'ar' ? 'دينار' : 'JOD'}`;
}
