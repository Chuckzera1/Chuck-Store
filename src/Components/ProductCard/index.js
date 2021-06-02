import React, { useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addProduct } from 'store/modules/cart/action';
import Alert from 'Components/Alert';
import { Container } from './styles';

function ProductCard({ product, products, loading }) {
  const dispatch = useDispatch();
  const { name, price, id, image } = product;
  const [quantity, setQuantity] = useState(0);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  // Mostra popup informando sucesso ou falha
  // eslint-disable-next-line no-unused-vars
  function showAlertFeedback(
    message = `${quantity}x ${name} added successfully`,
    isError = false
  ) {
    setShow(false);
    const type = isError ? 'error' : 'success';
    setAlertType(type);
    setAlertMessage(message);
    setError(isError);

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

    if (parseInt(value, 10) > product.stock) {
      const message = `${product.name} out of stock! In stock only ${product.stock}`;
      showAlertFeedback(message, true);
      return;
    }

    setQuantity(value);
  }

  // Dispara ação de adição do produto
  async function addToCart() {
    if (!quantity) {
      const message = 'Enter the amount, please';
      showAlertFeedback(message, true);
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
      <Container>
        <Alert message={alertMessage} type={alertType} show={show} />
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
                  <div className="quantity-input">
                    <input
                      pattern="[0-9]*"
                      className={error ? 'error' : ''}
                      onChange={(e) => handleOnChange(e)}
                      value={quantity || ''}
                      maxLength="5"
                      placeholder="Product amount"
                    />
                  </div>
                  <div className="add-product">
                    <button
                      type="button"
                      className="btn-add-product"
                      onClick={() => addToCart()}
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
            )}
            {!id && !loading && (
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
