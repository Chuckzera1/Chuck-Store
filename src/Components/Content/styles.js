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
    .block {
      margin-bottom: 25px;
    }
    h1 {
      margin: 0;
      color: var(--color-blue-2);
      font-size: 1.8rem;
    }
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

  .content,
  .content-extend {
    margin-top: 30px;
  }

  .shop-list {
    list-style: none;
    li {
      display: inline-block;
      margin-right: 24px;
    }
  }

  .hide-element {
    display: none !important;
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


  @media screen and (min-width: 1336px) {
    .content {
      column-count: 2;
      > * {
        break-inside: avoid;
      }
    }
  }
`;
