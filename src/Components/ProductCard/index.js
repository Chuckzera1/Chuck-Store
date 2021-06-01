import React, { useCallback, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from 'store/modules/cart/action';
import { Container } from './styles';

function ProductCard({ product, products, loading }) {
  const dispatch = useDispatch();
  const { error, loading: load } = useSelector((state) => state.cart);

  const { name, price, id, image } = product;
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  // const [isError, setIsError] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  // Valida o campo antes de atualizar o estado
  function handleOnChange(e) {
    const { value, validity } = e.target;
    if (!validity.valid) return;
    setQuantity(value);
  }
  // Mostra popup informando sucesso ou falha
  // eslint-disable-next-line no-unused-vars
  const showAlertFeedback = useCallback(() => {
    if (load) return;
    const message = error || `${quantity}x ${name} adicionado com sucesso`;
    const type = error ? 'error' : 'success';
    setAlertType(type);
    setAlertMessage(message);
    setShow(true);
    // Mantem o alerta visivel por 3 segundos
    console.log(show, alertMessage, alertType);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, [error]);

  // Dispara ação de adição do produto
  async function addToCart() {
    if (!quantity) return;
    product = { ...product, quantity: parseInt(quantity, 10) };

    dispatch(addProduct({ product, products }));
  }

  return (
    <>
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
                  <div className="quantity-input">
                    <input
                      pattern="[0-9]*"
                      onChange={(e) => handleOnChange(e)}
                      value={quantity}
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

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
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
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ProductCard;
