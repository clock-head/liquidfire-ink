import Section from '../Modular/Section';
import ProductItem from './ProductItem';
import { products } from './_data/products';

const ProductList = () => {
  return (
    <Section layout="flex" flexWrap="wrap" gridArea="1">
      {products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            productCode={product.productCode}
            imageSrc={product.imageSrc}
          ></ProductItem>
        );
      })}
    </Section>
  );
};

export default ProductList;
