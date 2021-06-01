import React from 'react';
import { useSelector } from 'react-redux';
import Content from 'Components/Content';
import TitleHeader from 'Components/TitleHeader';
import ProductCartCard from 'Components/ProductCartCard';

function Cart() {
  const { products } = useSelector((state) => state.cart);

  return (
    <>
      <TitleHeader title="Cart" />
      <Content>
        <div className="cart-item">
          {products.map((p) => (
            <ProductCartCard product={p} products={products} />
          ))}
        </div>
      </Content>
    </>
  );
}

export default Cart;
