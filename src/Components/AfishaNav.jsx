// Import React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import Css
import '../Assets/Css/SideBar.css';
// Import Images
import burger from '../Assets/Icons/burger.svg';


const AfishaNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Запрет прокрутки фона за модальным окном
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Возобновление прокрутки фона
  };
  return(
    <div className="AfishaNav">
      <div className="phone">
        <nav>
          <button className='openModal' onClick={openModal}>
            <img width={45} src={burger} alt='menu' />
          </button>
          {isOpen && (
            <button className="modal-overlay" onClick={closeModal}>
              <div className="modal">
                <h2>АФИША GO:</h2>
                <ul>
                  <li><Link to="/Home"><button onClick={closeModal}>Кино</button></Link></li>
                  <li><Link to="/News"><button onClick={closeModal}>Места GO</button></Link></li>
                  <li><Link to="/Blog"><button onClick={closeModal}>Театры</button></Link></li>
                  <li><Link to="/Afisha"><button onClick={closeModal}>Концерты</button></Link></li>
                  <li><Link to="/Pocupon"><button onClick={closeModal}>Выставки</button></Link></li>
                  <li><Link to="/Forum"><button onClick={closeModal}>Детям</button></Link></li>
                  <li><Link to="/Radio"><button onClick={closeModal}>Отдых</button></Link></li>
                  <li><Link to="/Ad"><button onClick={closeModal}>Обучение</button></Link></li>
                  <li><Link to="/Forum"><button onClick={closeModal}>Спорт</button></Link></li>
                  <li><Link to="/Radio"><button onClick={closeModal}>Вечеринки</button></Link></li>
                  <li><Link to="/Ad"><button onClick={closeModal}>Разное</button></Link></li>
                </ul>
              </div>
            </button>
          )}
      </nav>
      </div>
      <div className="pc gap">
        <div className='gap navafisha'>
          <Link>Кино</Link>
          <Link>Места GO</Link>
          <Link>Театры</Link>
          <Link>Концерты</Link>
          <Link>Выставки</Link>
          <Link>Детям</Link>
          <Link>Отыдх</Link>
          <Link>Обучение</Link>
          <Link>Спорт</Link>
          <Link>Вечеринки</Link>
          <Link>Разное</Link>
        </div>
      </div>
    </div>
  );
}
export default AfishaNav