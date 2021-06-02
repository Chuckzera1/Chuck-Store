import React from 'react';
import { useSelector } from 'react-redux';
import Content from 'Components/Content';
import TitleHeader from 'Components/TitleHeader';
import ProductCartCard from 'Components/ProductCartCard';
import CartResume from 'Components/CartResume';

function Cart() {
  const { products } = useSelector((state) => state.cart);

  return (
    <>
      <TitleHeader title="Cart" />
      <Content>
        <div className="cart-body">
          <div className="shop-box">
            <div className="shop-list">
              <ul>
                {products.map((p, { id }) => (
                  <li key={id}>
                    <ProductCartCard product={p} products={products} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <CartResume />
        </div>
      </Content>
    </>
  );
}

export default Cart;
