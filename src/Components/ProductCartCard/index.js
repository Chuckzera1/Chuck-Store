import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  decreaseProduct,
  increaseProduct,
  removeProduct,
} from 'store/modules/cart/action';
import { Container } from './styles';

function ProductCartCard({ product, products }) {
  const dispatch = useDispatch();
  const { id, name, image, price, quantity, stock } = product;

  // Verifica se ainda tem e estoque antes de adicionar
  function addQuantity() {
    if (stock - quantity < 1) {
      alert('Out of Stock');
      return;
    }
    dispatch(increaseProduct({ product, products }));
  }

  // Remove o produto do carrinho
  function removeItem() {
    dispatch(removeProduct({ id: product.id }));
  }

  // Caso só tenha um item, ele remove do carrinho
  function removeQuantity() {
    if (quantity > 1) dispatch(decreaseProduct({ product, products }));
    else removeItem();
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
                <button
                  className="remove-item"
                  type="button"
                  onClick={removeItem}
                >
                  Remover
                </button>
                <div className="buttons-price">
                  <span className="price">${price}</span>
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
                </div>
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
    stock: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
      }),
    })
  ),
};

export default ProductCartCard;
