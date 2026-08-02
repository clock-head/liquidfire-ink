import Unit from '../Modular/Unit';
import MicroUnit from '../Modular/MicroUnit';
import Button from '../UI/Button/Button';
import Assembly from '../Modular/Assembly';
import type { Product } from './_data/products';
import { useCart } from './hooks/useCart';
import './ProductItem.css';

const ProductItem = ({ id, name, imageSrc, productCode }: Product) => {
  const { cartItems, addItem, subtractItem } = useCart();

  const product = {
    id,
    name,
    imageSrc,
    productCode,
  };

  const cartItem = cartItems.find((item) => item.id === id);
  const quantity = cartItem?.quantity ?? 0;

  const addProducts = () => {
    addItem(product);
  };

  const subtractProducts = () => {
    subtractItem(product);
  };

  return (
    <Assembly layout="grid">
      <Unit
        layout="flex"
        flexDirection="column"
        paddingLeft="xl"
        paddingRight="lg"
      >
        <MicroUnit as="img" srcLink={imageSrc}></MicroUnit>
        <MicroUnit as="h2" h2Typography="subtitle" h2Color="text-primary">
          {name}
        </MicroUnit>
        <MicroUnit as="p" pTypography="caption" pColor="light">
          {productCode}
        </MicroUnit>
      </Unit>
      <Unit
        layout="flex"
        flexDirection="row"
        height="1"
        alignItems="center"
        gap="sm"
      >
        <MicroUnit
          as="h2"
          h2Typography="subtitle"
          pColor="light"
          className="quantity"
        >
          {quantity}
        </MicroUnit>
        <Button width="3" variant="outlinelight" onClick={addProducts}>
          +
        </Button>
        <Button width="3" variant="outlinelight" onClick={subtractProducts}>
          -
        </Button>
        <Button width="7" variant="primary" onClick={addProducts}>
          Add to Cart
        </Button>
      </Unit>
    </Assembly>
  );
};

export default ProductItem;
