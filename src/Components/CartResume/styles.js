import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  ul {
    list-style: none;
  }
  li {
    width: 100%;
    padding: 5px 0px;
  }
  .background-highlight {
    background-color: #d9d9d9;
    .product-quantity {
      color: black;
    }
  }

  .product-item {
    display: flex;
    width: 100%;
    margin-right: 0px;
    padding: 0;
  }
  .resume-box {
    span {
      font-weight: bold;
    }
  }
  .product-quantity {
    color: orange;
    margin-right: 5px;
  }
  .product-name {
  }
  .product-value-info {
    display: flex;
    align-items: flex-end;
    margin-left: auto;
  }
  .product-total {
  }
  .order-info {
    display: flex;
    justify-content: center;
    .order-total {
      border-top: 1px solid;
      height: 100%;
      width: 90%;
      padding-top: 10px;
      display: flex;
      flex-direction: row;
      margin-left: 18px;
      .total-value {
        margin-left: auto;
      }
    }
  }
  .button-buy {
    margin: 50px auto;
    padding: 15px 50px;
    display: flex;
    background-color: black;
    color: white;
    font-weight: 500;
  }
  .button-clear {
    display: flex;
    margin: 10px 0px 10px auto;
    background: orange;
    color: white;
    border: 0px;
    padding: 5px 19px;
    font-weight: 500;
  }
  .title {
    font-weight: bold !important;
    font-size: 20px !important;
    color: black !important;
    margin-left: 0px !important;
  }
`;
