import TitleHeader from 'Components/TitleHeader';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartClearRequest } from 'store/modules/cart/action';
import { Container } from './styles';

function CartResume() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);

  const [productsTotalPrice, setProductsTotalPrice] = useState(0);

  useEffect(() => {
    if (!products) return;
    let total = 0;
    products.forEach(({ price, quantity }) => {
      total += parseInt(price, 10) * quantity;
    });
    setProductsTotalPrice(total.toFixed(2));
  }, [products]);

  return (
    <>
      <Container>
        <TitleHeader title="Order Sumarry" />
        <div className="resume-box">
          <ul>
            {products.map(({ quantity, name, price }, index) => (
              <li className={index % 2 === 0 ? 'background-highlight' : ''}>
                <div className="product-item">
                  <div className="product-info">
                    <span className="product-quantity">{quantity}x</span>
                    <span className="product-name">{name}</span>{' '}
                  </div>
                  <div className="product-value-info">
                    <span className="product-total">
                      {' '}
                      ${` ${(price * quantity).toFixed(2)}`}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button
            className="button-clear"
            type="button"
            onClick={() => dispatch(cartClearRequest())}
          >
            Clear Cart
          </button>
          <div className="order-info">
            <div className="order-total">
              <span className="total-label">Order Total:</span>
              <span className="total-value">${` ${productsTotalPrice}`}</span>
            </div>
          </div>
          <button
            className="button-buy"
            type="button"
            onClick={() =>
              alert("MAN, IT'S JUST A PROJECT! NOT A REAL E-COMMERCE! SORRY")
            }
          >
            Buy Everything!
          </button>
        </div>
      </Container>
    </>
  );
}

export default CartResume;
