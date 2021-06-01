import styled from 'styled-components';

export const Container = styled.div`
  .search-input {
    font-size: 19px;
    padding: 7px;
    border-radius: 5px;
    border: 5px;
    margin: 20px 0px;
    box-shadow: 4px 4px 4px #cecdcd;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #cecdcd;
    }
  }
`;
