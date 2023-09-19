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
                  <li><Link to="/Home"><button onClick={closeModal}>КИНО</button></Link></li>
                  <li><Link to="/News"><button onClick={closeModal}>МЕСТА GO</button></Link></li>
                  <li><Link to="/Blog"><button onClick={closeModal}>ТЕАТРЫ</button></Link></li>
                  <li><Link to="/Afisha"><button onClick={closeModal}>КОНЦЕРТЫ</button></Link></li>
                  <li><Link to="/Pocupon"><button onClick={closeModal}>ВЫСТАВКИ</button></Link></li>
                  <li><Link to="/Forum"><button onClick={closeModal}>ДЕТЯМ</button></Link></li>
                  <li><Link to="/Radio"><button onClick={closeModal}>ОТДЫХ</button></Link></li>
                  <li><Link to="/Ad"><button onClick={closeModal}>ОБУЧЕНИЕ</button></Link></li>
                  <li><Link to="/Forum"><button onClick={closeModal}>СПОРТ</button></Link></li>
                  <li><Link to="/Radio"><button onClick={closeModal}>ВЕЧЕРИНКИ</button></Link></li>
                  <li><Link to="/Ad"><button onClick={closeModal}>РАЗНОЕ</button></Link></li>
                </ul>
              </div>
            </button>
          )}
      </nav>
      </div>
      <div className="pc gap">
        <div className='gap'>
          <Link>КИНО</Link>
          <Link>МЕСТА GO</Link>
          <Link>ТЕАТРЫ</Link>
          <Link>КОНЦЕРТЫ</Link>
          <Link>ВЫСТАВКИ</Link>
          <Link>ДЕТЯМ</Link>
          <Link>ОТДЫХ</Link>
          <Link>ОБУЧЕНИЕ</Link>
          <Link>СПОРТ</Link>
          <Link>ВЕЧЕРИНКИ</Link>
          <Link>РАЗНОЕ</Link>
        </div>
      </div>
    </div>
  );
}
export default AfishaNav