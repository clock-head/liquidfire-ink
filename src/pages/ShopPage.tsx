import Layout from '../components/Modular/Layout';
import Section from '../components/Modular/Section';
import ProductList from '../components/Shop/ProductList';
import Cart from '../components/Shop/Cart';
import { CartProvider } from '../components/Shop/context/CartProvider';
import { useCart } from '../components/Shop/hooks/useCart';

const ShopContent = () => {
  const context = {};
  const { cartItems } = useCart();

  return (
    <Layout
      layout="grid"
      gridTemplate="horizontal-2-1"
      background="dark"
      context={context}
    >
      <ProductList></ProductList>
      <Section gridArea="2">{cartItems.length > 0 && <Cart />}</Section>
    </Layout>
  );
};

const ShopPage = () => {
  return (
    <CartProvider>
      <ShopContent />
    </CartProvider>
  );
};

export default ShopPage;
