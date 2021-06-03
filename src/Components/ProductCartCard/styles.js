import styled from 'styled-components';

export const Container = styled.div`
  text-decoration: none;
  appearance: none;
  width: 332px;
  height: 300px;
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
    justify-content: flex-end;
    margin: 10px 10px 0 10px;
    font-weight: bold;
    align-items: center;
    button {
      margin: 0 10px 0 10px;
      background: orange;
      border: 0px;
      color: white;
      &.remove-item {
        background: transparent;
        color: orange;
        text-decoration: underline;
      }
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
`;
