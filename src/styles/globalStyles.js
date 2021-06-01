import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root{
    --font-default: 'Montserrat';
    --font-featured: 'Montserrat';

    --color-body: #fbfbfb;
    --color-black: black;
    --color-blue: #004AB0;
    --color-blue-2: #003277;
    --color-green: #41ECBC;
    --color-green-2: #19c897;
    --color-green-3: #14A37B;
    --color-light-gray: #f4f4f4;

    --topbar-mobile-height: 60px;
  }

  body, html, #root{
    min-height: 100%;
    margin: 0;
    background: #00327703;
  }

  html {
    box-sizing: border-box;
    height: 100%;
  }

  *{
    font-family: var(--font-default);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  ul[class]{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6{
    font-family: var(--font-featured);
    font-weight: normal;
    line-height: 1.2em;
  }


  .flex-end{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }


  .btn{
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
  }

  .sr-only{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
  }

  .thermometer {
    height: 284px;
  }

  .plus-svg{
    margin-left: 17px;
  }

  button{
    cursor: pointer;
    outline: none;
  }

  .content-header{
    position: relative;
    z-index: 2;
    .card-title {
      margin: 23px 0 0 0;
      font-size: 17px;
      color: #707070;
      padding-bottom: 5px;
      margin-bottom: 5px;
      border-bottom: solid 1px #393939;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }

  @media screen and (min-width: 1500px) {
    .filter {
      column-count: 2;
      > * {
        break-inside: avoid;
      }
    }
  }

  }`;
