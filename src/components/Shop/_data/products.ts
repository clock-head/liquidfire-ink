export interface Product {
  id: string;
  name: string;
  productCode: string;
  imageSrc: string;
  quantity?: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Law of the Jungle T-Shirt',
    productCode: 'L-01',
    imageSrc: '',
  },
  {
    id: '2',
    name: 'Artemis-01 T-Shirt',
    productCode: 'A-02',
    imageSrc: '../../../assets/images/First_AI.png',
  },
  {
    id: '3',
    name: 'Golden Stampede T-Shirt',
    productCode: 'G-03',
    imageSrc: '',
  },
  {
    id: '4',
    name: 'Birth T-Shirt',
    productCode: 'B-04',
    imageSrc: '',
  },
  {
    id: '5',
    name: 'Clockhead T-Shirt',
    productCode: 'C-05',
    imageSrc: '',
  },
];
