import { createContext, useContext, useEffect, useState } from "react";

const BasketContext = createContext();
const defaultBasket = JSON.parse(localStorage.getItem("basket")) || [];
const BasketProvider = ({ children }) => {
  const [items, setItems] = useState(defaultBasket);
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(items));
  }, [items]);
  const addtoBasket = (data, findBasketItem) => {
    if (!findBasketItem) {
      return setItems((items) => [data, ...items]);
    }
    const filtered = items.filter((item) => item._id !== findBasketItem._id);
    setItems(filtered);
  };
  const clearBasket = () => setItems([])
  const removeItem = (item_id) => {
    const filtered = items.filter((item) => item._id !== item_id);
    setItems(filtered);
  };
  const values = {
    items,
    setItems,
    addtoBasket,
    removeItem,
    clearBasket
  };
  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
