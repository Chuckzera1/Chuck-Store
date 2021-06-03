import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 99;

  .sidebar,
  .topbar {
    background: #fff;
    pointer-events: all;
  }

  .sidebar {
    position: absolute;
    top: 0;
    width: 280px;
    height: 100%;
    padding: 20px;
    .main-menu {
      a,
      button {
        text-decoration: none;
        appearance: none;
        width: 238px;
        height: 44px;
        margin: 0;
        padding: 0;
        border: 0;
        color: var(--color-body);
        display: flex;
        align-items: center;
        line-height: 1em;
        padding: 12px 15px;
        border-radius: 5px;
        margin-bottom: 5px;
        text-align: left;
        background: transparent linear-gradient(74deg, #004ab0 0%, #6457e8 100%)
          0% 0% no-repeat padding-box;
        opacity: 1;
        color: #fff;
        svg {
          margin-right: 10px;
        }
        img {
          margin-right: 10px;
          width: 13px;
          height: 25px;
        }
        &.active {
          background: transparent linear-gradient(74deg,#ff8100 0%,#e8a757 100%) 0% 0% no-repeat padding-box;
          opacity: 1;
          color: #fff;
        }
      }
    }
  }

  .topbar {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--topbar-mobile-height);

    .btn-icon {
      width: 42px;
      height: 42px;
      line-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: var(--color-blue-2);
      }
    }

    .user-menu {
      position: relative;
      .btn-icon,
      .dropdown {
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      }

      .dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        background: #fff;
        min-width: 100px;
        border-radius: 6px;
        box-shadow: 0 14px 28px rgba(0, 50, 119, 0.08),
          0 10px 10px rgba(0, 50, 119, 0.04);
        transform: translate3d(0, -20px, 0);
        opacity: 0;
        visibility: hidden;
        button,
        a {
          appearance: none;
          margin: 0;
          padding: 10px 15px;
          border: 0;
          background: none;
          font-size: 14px;
          display: block;
          /* min-width: 100%; */
          text-align: left;
        }
      }
      &:hover {
        .btn-icon {
          background: var(--color-blue-2);
          svg {
            color: #fff;
          }
        }
        .dropdown {
          transform: translate3d(0, 0, 0);
          opacity: 1;
          visibility: visible;
        }
      }
    }

    .logo,
    .btn-menu {
      display: none;
    }
  }

  .leads-menu {
    justify-content: center;
    display: flex;
    margin-top: 40px;
  }

  .user-menu {
    display: flex;
    cursor: default;
    justify-content: center;
    span {
      font-size: 17px;
      cursor: default;
    }
    button{
      cursor: default;
    }
    .user-profile {
      cursor: default;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 75px;
      height: 75px;
      border: 3px solid #003177;
      border-radius: 50%;
      font-size: xx-large;
      color: #003177;
      margin-bottom: 15px;
    }
    .btn {
      margin-bottom: 50px;
      font-size: 1.4em;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #707070;
    }
  }

  .logo {
    font-size: 0;
    img {
      width: 133px;
    }
  }

  @media screen and (min-width: 768px) {
    .sidebar {
      max-width: 300px;
    }
  }
    .sidebar {
      transform: translate3d(+100%, 0, 0);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      top: var(--topbar-mobile-height);

      .logo {
        display: none;
      }
    }

    .topbar {
      padding: 0 10px;
      .btn-menu {
        width: 42px;
        white-space: nowrap;
        overflow: hidden;
        z-index: 2;
        div {
          display: inline-flex;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          &:first-of-type {
            margin-left: -42px;
            opacity: 0;
          }
        }
      }

      .btn-menu,
      .logo {
        display: block;
      }

      .user-menu {
        margin-left: 0;
        .btn {
          span {
            display: none;
          }
        }
        .btn-icon {
          border-radius: 50% 50% 0 0;
        }
      }
    }

    .logo {
      img {
        height: 40px;
      }
    }

    &.menu-opened {
      background: rgba(0,0,0,0.4);
      .topbar {
        .btn-menu {
          div {
            &:first-of-type {
              opacity: 1;
              margin-left: 0;
            }
            &:last-of-type {
              opacity: 0;
            }
          }
        }
      }

      .sidebar {
        transform: translate3d(0, 0, 0);
        box-shadow: 0 14px 28px rgba(0, 50, 119, 0.25),
          0 10px 10px rgba(0, 50, 119, 0.22);
      }
    }
  }
      .user-menu {
        margin-left: auto;
        border-radius: 6px;
        .btn {
          display: flex;
          align-items: center;
          padding: 6px 10px;
          span {
            margin-left: 10px;
            font-weight: bold;
            font-size: 1.2em;
            color: var(--color-blue-2);
          }
          .btn-icon {
            width: 30px;
            height: 30px;
          }
        }
        &:hover {
          background: #004ab014;
        }
      }
    }
    .sidebar {
      z-index: 1;
      padding: 30px;
      padding-top: 20px;
      box-shadow: 0 3px 6px rgba(0, 50, 119, 0.06),
        0 3px 6px rgba(0, 50, 119, 0.03);
      .logo {
        margin-bottom: 30px;
        display: block;
        width: 216px;
        margin-left: 45px;
      }
      .main-menu {
        a,
        button {
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
      }
    }

    @media screen and (min-width: 1204px) {
      .topbar{
        width: 50px;
        background: #fff;
        height: 100%;
        .btn-icon{
          top: 2px;
          position: absolute;
           left: 4px;
        }
        .topbar-logo{
          display: none;
        }
      }
      .sidebar {
        top: 0;
      }
    }
`;
