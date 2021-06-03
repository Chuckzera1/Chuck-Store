import React, { useState } from 'react';
import { FiMenu, FiArrowLeft } from 'react-icons/fi';

import Sidebar from 'Components/Sidebar';
import { Container } from './styles';

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  function handleMenu() {
    setMenuOpened(!menuOpened);
  }

  return (
    <Container className={menuOpened ? 'menu-opened' : ''}>
      <Sidebar handleMenu={handleMenu} isMenuOpened={menuOpened} />
      <div className="topbar">
        <button type="button" className="btn btn-menu" onClick={handleMenu}>
          <div className="btn-icon">
            <FiArrowLeft size={24} />
          </div>
          <div className="btn-icon">
            <FiMenu size={24} />
          </div>
          <span className="sr-only">Menu Principal</span>
        </button>
      </div>
    </Container>
  );
}

export default Header;
