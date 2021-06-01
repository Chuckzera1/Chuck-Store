import styled from 'styled-components';

export const Container = styled.div`
  text-decoration: none;
  appearance: none;
  width: 332px;
  height: 325px;
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
  justify-content: center;
  line-height: 1em;
  border-radius: 8px;
  margin-bottom: 15px;
  background-color: #fff;
  color: #000;
  box-shadow: 5px 5px 5px #e1e1e1;
  transition: all 0.4s ease-in-out;
  :hover {
    transform: scale(1.1);
  }

  .info-card {
    height: 100%;
  }
  .card-body {
    height: 100%;
    transition: all 0.4s ease-in-out;
  }

  .data-info {
    display: flex;
    flex-direction: column;
  }

  .primary-info {
    display: flex;
    justify-content: center;
    margin: 10px;
  }

  .secondary-info {
    display: flex;
    justify-content: flex-start;
    margin: 10px 10px 0 10px;
    font-weight: bold;
    .price,
    .btn-add-product {
      color: orange;
      margin-right: 19px;
      margin-top: 10px;
    }
  }

  .image {
    display: flex;
  }

  img {
    padding: 0px;
    margin: 10px;
    display: flex;
    height: 208px;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }

  .select {
    position: relative;
    width: 100%;
    padding-right: 10px;
  }
  svg {
    position: absolute;
    right: 12px;
    top: calc(50% - 3px);
    width: 10px;
    height: 6px;
    stroke-width: 2px;
    stroke: #9098a9;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    pointer-events: none;
  }
  input {
    -webkit-appearance: none;
    padding: 7px 7px 7px 7px;
    width: 100px;
    border: 1px solid #e8eaed;
    border-radius: 5px;
    background: white;
    box-shadow: 0 1px 3px -2px #9098a9;
    font-family: inherit;
    font-size: 16px;
    transition: all 150ms ease;
    text-align: center;
    &::placeholder {
      font-size: 10px;
      color: #cecdcd;
    }
    &.error {
      border: 2px solid #f44242;
    }
    &:focus {
      outline: none;
      border-color: #0077ff;
      box-shadow: 0 0 0 2px rgba(#0077ff, 0.2);
      &:hover + svg {
        stroke: #0077ff;
      }
    }
  }

  .sprites {
    position: absolute;
    width: 0;
    height: 0;
    pointer-events: none;
    user-select: none;
  }

  .add-product {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    & button {
      background-color: transparent;
      border: 0px solid;
      text-decoration: underline;
    }
  }
`;
