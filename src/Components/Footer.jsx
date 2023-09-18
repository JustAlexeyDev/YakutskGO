import Logo from '../Assets/Images/logo-white.png';
import sixteen from '../Assets/Images/16.png'
const Footer = () => {
  return(
    <div className="Footer">
      <div className='down'>
        <img width={150} src={Logo} alt='logo'/>
        <p>ООО "Я ГО"</p>
        <p>ИНН: 1400017530, ОГРН 1231400000479</p>
        <p>Республика Саха (Якутия), Якутск</p>
      </div>
      <div className='down'>
        <p>info@email.ru</p>
        <a href="#">Рекламодателям</a>
        <a href="#">Правила сайта</a>
        <a href="#">Соглашение</a>
        <img width={50} src={sixteen} alt="16+" />
      </div>
    </div>
  );
}
export default Footer;