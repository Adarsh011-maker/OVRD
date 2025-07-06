import { createContext, useContext, useState } from "react";

// Create the cart context
const CartContext = createContext();

// Custom hook to use the cart
export const useCart = () => useContext(CartContext);

// Cart provider component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
