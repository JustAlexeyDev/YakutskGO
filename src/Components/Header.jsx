// Import images
import logo from '../Assets/Images/logo.png'
import burger from '../Assets/Icons/burger.svg';
// Import React
import { Link } from 'react-router-dom';
// Import Components
import SideBar from './SideBar';
const Header = () => {
  return(
    <div className="Header">
      <div className='phone'>
        <SideBar />
      </div>
      <div className='Logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='gap pc'>
        <Link to='/Home'>Главная</Link>
        <Link to='/News'>Новости</Link>
        <Link to='/Blog'>Блог</Link>
        <Link to='/Afisha'>Афиша</Link>
        <Link to='/Pocupon'>Покупон</Link>
        <Link to='/Forum'>Форум</Link>
        <Link to='/Radio'>Радио</Link>
        <Link to='/Ad'>Реклама</Link>
      </div>
    </div>
  );
}
export default Header;