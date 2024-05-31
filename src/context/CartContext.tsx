import { createContext, useContext } from "react";

export interface CartItem {
  id: number;
  name: string;
  photo: string;
  price: number;
  quantity: number;
}

export interface CartContextProps {
  items: CartItem[];
  total: number;
  totalItems: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

export default CartContext;
