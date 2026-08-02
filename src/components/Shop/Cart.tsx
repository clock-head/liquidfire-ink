import CartItem from './CartItem';
import Assembly from '../Modular/Assembly';
import { useCart } from './hooks/useCart';

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <Assembly layout="flex" flexDirection="column">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          imageSrc={item.imageSrc}
          productCode={item.productCode}
          quantity={item.quantity ?? 0}
        />
      ))}
    </Assembly>
  );
};

export default Cart;
