import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink exact to="/" activeClassName="selected">Página Inicial</NavLink>
        <NavLink to="/novo-video" activeClassName="selected">Novo Vídeo</NavLink>
      </nav>
    </header>
  );
};

export default Header;