import styled from 'styled-components';

export const Container = styled.main`
  padding: 20px;

  .title {
    color: #888;
    font-weight: bold;
  }

  .header {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    .secondary-info {
      opacity: 0.5;
      font-size: 12px;
      margin-top: 5px;
      margin-bottom: -15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .cart-body {
    display: flex;
    flex-direction: row;
  }

  .shop-box{
    width: 100%;
    max-height: 80vh;
    overflow: auto;
  }

  .shop-list {
    ul {
      list-style: none;
    }
    li {
      display: inline-block;
      margin-right: 24px;
    }
  }

  @media screen and (min-width: 1024px) {
    padding-left: 66px;
    padding-right: 40px;
    padding-bottom: 40px;
    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 2.6rem;
      }
    }
`;
