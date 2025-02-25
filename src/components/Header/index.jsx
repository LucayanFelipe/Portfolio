import React from 'react';
import './Header.css';
import nerd from '../../Assets/nerd.gif';

const Header = () => {
  return (
    <header className="header">
        <img src={nerd}></img>
      <h1>Meu Portfólio</h1>
      <nav>
        <ul>
          <li><a href="#about">Sobre Mim</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#education">Formação</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;