import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchValueUpdate } from 'store/modules/search/action';
import { Container } from './styles';

function SearchBar() {
  const dispatch = useDispatch();

  const { search } = useSelector((state) => state);

  function handleSearchChange(event) {
    const { validity, value } = event.target;
    if (!validity.valid) return;
    dispatch(searchValueUpdate(value));
  }

  return (
    <Container>
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={search.searchValue}
        onChange={(e) => handleSearchChange(e)}
      />
    </Container>
  );
}

export default SearchBar;
