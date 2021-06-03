import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadStoreData } from 'store/modules/store/action';

import { removeAccents } from 'utils';

import Content from 'Components/Content';
import ProductCard from 'Components/ProductCard';
import SearchBar from 'Components/SearchBar';
import TitleHeader from 'Components/TitleHeader';
// import Alert from 'Components/Alert';

function Store() {
  const [productsFiltered, setProductsFiltered] = useState([]);
  const { data, loaded, loading, error } = useSelector((state) => state.store);
  const { products } = useSelector((state) => state.cart);
  const { searchValue } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  // Carrega lista de produtos
  async function loadProducts() {
    if (!loaded) {
      dispatch(loadStoreData());
    }
    if (error) {
      console.log(error);
    }
    setProductsFiltered(data || []);
  }

  // Faz a filtragem dos produtos
  function filterProductList(searchValues) {
    if (!data) return;
    let productsArray = data;
    const searchSplits = removeAccents(searchValues)
      .split(' ')
      .filter((f) => f || null);

    searchSplits.forEach(
      // eslint-disable-next-line no-return-assign
      (s) =>
        (productsArray = productsArray.filter(
          (f) => f.name.toLowerCase().indexOf(s) > -1
        ))
    );
    setProductsFiltered(productsArray);
  }

  // Filtra toda vez que o valor de search ou a lista são atualizados
  useEffect(() => {
    filterProductList(searchValue);
  }, [searchValue, data]);

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <TitleHeader title="Store" />
      <Content>
        {/* <Alert message={alertMessage} type={alertType} show={show} /> */}
        <SearchBar />
        {productsFiltered.length === 0 && (
          <span>
            Nenhum produto encontrado para{' '}
            <span style={{ color: 'blue' }}>{searchValue}</span> :( <br />
          </span>
        )}
        <ul className="shop-list">
          {productsFiltered.length > 0 &&
            productsFiltered.map((product, index, { id }) => (
              <li key={id}>
                <ProductCard
                  product={product}
                  index={index}
                  products={products}
                  loading={loading}
                />
              </li>
            ))}
        </ul>
      </Content>
    </>
  );
}

export default Store;
