import styled from 'styled-components';

export const Container = styled.div`
  .alert-box {
    color: #555;
    border-radius: 10px;
    font-family: Tahoma, Geneva, Arial, sans-serif;
    font-size: 11px;
    padding: 10px 10px 10px 10px;
    margin: 10px;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 100px;
    right: 80px;
    span {
      font-weight: bold;
      text-transform: uppercase;
      margin-right: 4px;
    }
    &.fade-in {
      opacity: 1;
      transition: opacity linear 0.6s; // super slow to see fade works
    }
    &.fade-out {
      opacity: 0;
      transition: opacity linear 0.6s; // super slow to see fade works
    }
  }
  .error {
    background: #ffecec no-repeat 10px 50%;
    border: 1px solid #f5aca6;
  }
  .success {
    background: #e9ffd9 no-repeat 10px 50%;
    border: 1px solid #a6ca8a;
  }
`;
