import { useState, createContext, useContext, useMemo } from 'react';
import { ALL_ITEMS, formatTotal } from './data/menu';
import { whatsappUrl } from './data/contact';

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export function OrderProvider({ children }) {
  // { [itemId]: quantity }
  const [quantities, setQuantities] = useState({});

  const change = (id, delta) => {
    setQuantities(prev => {
      const next = { ...prev };
      const qty = (next[id] || 0) + delta;
      if (qty > 0) next[id] = qty;
      else delete next[id];
      return next;
    });
  };

  const value = useMemo(() => {
    const lines = ALL_ITEMS.filter(item => quantities[item.id]).map(item => ({
      ...item,
      qty: quantities[item.id],
    }));
    const count = lines.reduce((sum, line) => sum + line.qty, 0);
    const total = lines.reduce((sum, line) => sum + line.qty * line.price, 0);

    // The message always goes out in Arabic: it is read by the restaurant, not the customer.
    const message = [
      'مرحبا ملوخية أمي، بدي أطلب:',
      ...lines.map(line => `• ${line.qty} × ${line.nameAr}`),
      `المجموع: ${formatTotal(total, 'ar')}`,
    ].join('\n');

    return {
      quantities,
      count,
      total,
      add: (id) => change(id, 1),
      remove: (id) => change(id, -1),
      clear: () => setQuantities({}),
      whatsappLink: whatsappUrl(message),
    };
  }, [quantities]);

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}
