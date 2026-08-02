import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../_data/products';
import { CartContext } from './CartContext';

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addItem = (product: Product) => {
    const quantityToAdd = product.quantity ?? 1;

    if (quantityToAdd <= 0) {
      return;
    }

    setCartItems((prev) => {
      const productExists = prev.some((cartItem) => cartItem.id === product.id);

      if (!productExists) {
        return [...prev, { ...product, quantity: quantityToAdd }];
      }

      return prev.map((cartItem) => {
        if (cartItem.id !== product.id) {
          return cartItem;
        }

        return {
          ...cartItem,
          quantity: (cartItem.quantity ?? 0) + quantityToAdd,
        };
      });
    });
  };

  const subtractItem = (product: Product) => {
    setCartItems((prev) =>
      prev.reduce<Product[]>((nextCartItems, cartItem) => {
        if (cartItem.id !== product.id) {
          return [...nextCartItems, cartItem];
        }

        const nextQuantity = (cartItem.quantity ?? 0) - (product.quantity ?? 1);

        if (nextQuantity <= 0) {
          return nextCartItems;
        }

        return [...nextCartItems, { ...cartItem, quantity: nextQuantity }];
      }, []),
    );
  };

  const removeItemFromCart = (product: Product) => {
    setCartItems((prev) =>
      prev.filter((cartItem) => cartItem.id !== product.id),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = useMemo(
    () => ({
      cartItems,
      addItem,
      subtractItem,
      removeItemFromCart,
      clearCart,
    }),
    [cartItems],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
