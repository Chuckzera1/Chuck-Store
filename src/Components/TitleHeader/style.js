import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 38px;
  border-bottom: 1px solid;
  margin-right: 35px;
  padding-top: 28px;
  border-color: #707070;

  .navigation-bar {
    margin-bottom: 15px;
    color: #707070;
    span {
      font-weight: bold;
      font-size: 40px;
    }
  }

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
