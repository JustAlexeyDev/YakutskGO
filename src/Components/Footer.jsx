import Logo from '../Assets/Images/logo-white.png';
import sixteen from '../Assets/Images/16.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return(
    <div className="Footer">
      <div className='Footer-Container'>
        <div className='down'>
          <img width={150} src={Logo} alt='logo'/>
          <p>ООО "Я ГО"</p>
          <p>ИНН: 1400017530, ОГРН 1231400000479</p>
          <p>Республика Саха (Якутия), Якутск</p>
        </div>
        <div className='down'>
          <p>info@email.ru</p>
          <Link>Рекламодателям</Link>
          <Link>Правила сайта</Link>
          <Link>Соглашение</Link>
          <img width={50} src={sixteen} alt="16+" />
        </div>        
      </div>
      <div className='Copyright-Footer'>
        <hr />
        <span> © Copyright Якутск GO 2023</span>        
      </div>

    </div>
  );
}
export default Footer;