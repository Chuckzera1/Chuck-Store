import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addProduct } from 'store/modules/cart/action';
import { Container } from './styles';

function ProductCartCard({ product, products }) {
  const dispatch = useDispatch();
  const { id, name, image, price, quantity } = product;
  function addQuantity() {
    product = { ...product, quantity: 1 };
    dispatch(addProduct({ product, products }));
  }

  function removeQuantity() {
    product = { ...product, quantity: -1 };
    dispatch(addProduct({ product, products }));
  }

  return (
    <>
      <Container key={id}>
        <div className="info-card">
          <div className="card-body">
            <div className="data-info">
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="primary-info">{name}</div>
              <div className="secondary-info">
                <span className="button-decremease">
                  <button type="button" onClick={removeQuantity}>
                    -
                  </button>
                </span>
                <span className="quantity">{quantity}x</span>
                <span className="button-increment">
                  <button type="button" onClick={addQuantity}>
                    +
                  </button>
                </span>
                <span className="price">${price}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

ProductCartCard.defaultProps = {
  products: [],
};

ProductCartCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired
  ),
};

export default ProductCartCard;
