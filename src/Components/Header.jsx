import { Link } from "react-router-dom";
import LogoGo from '../Assets/Images/logo.png'
const Header = () => {
  return(
    <div className="Header">
        <img width={200} src={LogoGo} alt="Logo"/>
        <Link>Главная</Link>
        <Link>Новости GO</Link>
        <Link>Афиша GO</Link>
        <Link>Кино GO</Link>
        <Link>Покупон GO</Link>
        <Link>Форум GO</Link>
        <Link>Радио GO</Link>
        <Link>Реклама</Link>
    </div>
  );
}
export default Header;