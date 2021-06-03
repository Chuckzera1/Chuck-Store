import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Sidebar({ handleMenu, isMenuOpened }) {
  useEffect(() => {
    const handleWindowClick = (event) => {
      if (
        event.target.className === 'sidebar' ||
        (event.keyCode && event.keyCode !== 27)
      )
        return;
      window.removeEventListener('click', handleWindowClick);
      window.removeEventListener('keydown', handleWindowClick);

      handleMenu();
    };
    if (!isMenuOpened) return;
    window.addEventListener('click', handleWindowClick);
    window.addEventListener('keydown', handleWindowClick);
  });

  return (
    <aside className="sidebar">
      <nav className="leads-menu">
        <ul className="main-menu">
          <li>
            <NavLink to="/" exact onClick={handleMenu}>
              Store{' '}
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" exact>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

Sidebar.propTypes = {
  handleMenu: PropTypes.func.isRequired,
  isMenuOpened: PropTypes.bool.isRequired,
};

export default Sidebar;
