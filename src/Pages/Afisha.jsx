// Import Componnets
import AfishaNav from "../Components/AfishaNav";
import Calendar from "../Components/Calendar";
import SliderMain from "./ComponentsAfisha/SliderMain";
const Afisha = () => {
  return(
    <div className="Afisha">
      <AfishaNav />  
      <Calendar />
      <SliderMain />
    </div>
  );
}
export default Afisha;