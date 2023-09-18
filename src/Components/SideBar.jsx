import React, { useState } from 'react';
import burger from '../Assets/Icons/burger.svg';
import '../Assets/Css/SideBar.css';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleMenu}>
        <img src={burger} alt='burger'/>
      </button>
      <div className="menu-items">
        {/* Ваши пункты меню здесь */}
        <a href="#">Пункт 1</a>
        <a href="#">Пункт 2</a>
        <a href="#">Пункт 3</a>
      </div>
    </div>
  );
};

export default SideBar;