import { SimpleProduct, SimpleProductCard } from 'filterbee';
import React from 'react';

const Demo: React.FC = () => {
  const product: SimpleProduct = {
    id: 1,
    title: 'Awesome Product',
    description: 'This product is awesome!',
    rating: 4,
    price: '$20',
    image: 'https://cataas.com/cat/says/hello?size=50&color=red',
  };

  const onClick = (product: SimpleProduct) => {
    console.log(`Product card clicked: ${product.title}`);
  };

  return (
    <div style={{ maxWidth: 300 }}>
      <SimpleProductCard product={product} onClick={onClick} />
    </div>
  );
};

export default Demo;
