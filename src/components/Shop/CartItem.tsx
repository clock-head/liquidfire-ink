import Unit from '../Modular/Unit';
import MicroUnit from '../Modular/MicroUnit';
import Button from '../UI/Button/Button';
import { useCart } from './hooks/useCart';
import type { Product } from './_data/products';

const CartItem = ({ id, name, imageSrc, productCode, quantity }: Product) => {
  const { addItem, subtractItem, removeItemFromCart } = useCart();
  const product = {
    id,
    name,
    imageSrc,
    productCode,
  };

  return (
    <Unit layout="flex" gap="sm">
      <Unit layout="flex" flexDirection="row">
        <MicroUnit as="p">{name}</MicroUnit>
        <MicroUnit as="p">{productCode}</MicroUnit>
        <MicroUnit as="p">{quantity}</MicroUnit>
      </Unit>

      <Button width="3" variant="outlinelight" onClick={() => addItem(product)}>
        +
      </Button>
      <Button
        width="3"
        variant="outlinelight"
        onClick={() => subtractItem(product)}
      >
        -
      </Button>
      <Button
        width="3"
        variant="outlinelight"
        onClick={() => removeItemFromCart(product)}
      >
        Remove Item
      </Button>
    </Unit>
  );
};

export default CartItem;
