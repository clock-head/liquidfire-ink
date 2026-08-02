import { createContext } from 'react';
import type { Product } from '../_data/products';

export interface CartContextValue {
  cartItems: Product[];
  addItem: (product: Product) => void;
  subtractItem: (product: Product) => void;
  removeItemFromCart: (product: Product) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextValue | undefined>(
  undefined,
);
