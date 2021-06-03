import React, { useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addProduct } from 'store/modules/cart/action';
import Alert from 'Components/Alert';
import { Container } from './styles';

function ProductCard({ product, products, loading }) {
  const dispatch = useDispatch();
  const { name, price, image, stock } = product;
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  function showAlertFeedback() {
    setShow(false);

    setShow(true);
    // Mantem o alerta visivel por 3 segundos
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }

  // Valida o campo antes de atualizar o estado
  function handleOnChange(e) {
    const { value, validity } = e.target;
    if (!validity.valid) return;
    setError(false);
    if (parseInt(value, 10) > stock - product.quantity) {
      setError(true);
    }

    setQuantity(value);
  }

  // Dispara ação de adição do produto
  async function addToCart() {
    if (!quantity || quantity < 1) {
      setError(true);
      return;
    }
    product = {
      ...product,
      quantity: parseInt(quantity, 10),
    };
    dispatch(addProduct({ product, products }));
    showAlertFeedback();
    setQuantity(0);
  }

  return (
    <>
      <Alert message={`${name} added successfuly`} type="success" show={show} />
      <Container>
        <div className="info-card">
          <div className="card-body">
            {!loading && (
              <div className="data-info">
                <div className="image">
                  <img src={image} alt={name} />
                </div>
                <div className="primary-info">{name}</div>
                <div className="secondary-info">
                  <span className="price">${price}</span>
                  <div className="quantity">
                    <div className="quantity-input">
                      <input
                        pattern="[0-9]*"
                        className={error ? 'error' : ''}
                        onChange={(e) => handleOnChange(e)}
                        value={quantity || ''}
                        maxLength="5"
                        placeholder="Product amount"
                      />
                      {error && (
                        <span className="error-info">
                          Stock: {stock - product.quantity}
                        </span>
                      )}
                    </div>
                    <div className="add-product">
                      <button
                        type="button"
                        className="btn-add-product"
                        disabled={error}
                        onClick={() => addToCart()}
                      >
                        Adicionar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {!product && !loading && (
              <div className="empty-data">
                <div>Nenhuma informação disponível.</div>
              </div>
            )}
            {loading && (
              <div className="loading-data">
                <AiOutlineLoading size={24} />
                <div>Carregando.</div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

ProductCard.defaultProps = {
  products: [],
};

ProductCard.propTypes = {
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
        quantity: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired
  ),
  loading: PropTypes.bool.isRequired,
};

export default ProductCard;
