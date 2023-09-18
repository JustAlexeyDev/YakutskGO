import React, { useState } from 'react';
import burger from '../Assets/Icons/burger.svg';
import '../Assets/Css/SideBar.css'
import { Link } from 'react-router-dom';

const SideBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Запрет прокрутки фона за модальным окном
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Возобновление прокрутки фона
  };
  return (
    <nav>
      <button className='openModal' onClick={openModal}>
        <img width={45} src={burger} alt='menu' />
      </button>
        {isOpen && (
          <button className="modal-overlay" onClick={closeModal}>
            <div className="modal">
              <h2>Меню сайта:</h2>
              <ul>
                <li><Link to="/Home"><button onClick={closeModal}>Главная</button></Link></li>
                <li><Link to="/News"><button onClick={closeModal}>Новости</button></Link></li>
                <li><Link to="/Blog"><button onClick={closeModal}>Блог</button></Link></li>
                <li><Link to="/Afisha"><button onClick={closeModal}>Афиша</button></Link></li>
                <li><Link to="/Pocupon"><button onClick={closeModal}>Покупон</button></Link></li>
                <li><Link to="/Forum"><button onClick={closeModal}>Форум</button></Link></li>
                <li><Link to="/Radio"><button onClick={closeModal}>Радио</button></Link></li>
                <li><Link to="/Ad"><button onClick={closeModal}>Реклама</button></Link></li>
              </ul>
            </div>
          </button>
        )}
    </nav>
)}
export default SideBar;