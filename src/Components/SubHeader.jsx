import vk from '../Assets/Icons/vk.svg';
import telegram from '../Assets/Icons/telegram.svg';
import whatsapp from '../Assets/Icons/whatsapp.svg';

const SubHeader = () => {
  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;
  
  return(
    <div className="SubHeader">
      <span>{formattedDate}</span>
      <span></span>
      <div className='gap'>
        <a href='#'><img width={25} src={vk} alt='social'/>   </a>           
        <a href='#'><img width={25} src={telegram} alt='social'/>              </a>
        <a href='#'><img width={25} src={whatsapp} alt='social'/>  </a>       
      </div>
    </div>
  );
}
export default SubHeader;