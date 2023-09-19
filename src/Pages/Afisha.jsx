// Import Componnets
import AfishaNav from "../Components/AfishaNav";
import Calendar from "../Components/Calendar";
import SliderMain from "./ComponentsAfisha/SliderMain";
import TopSlider from "./ComponentsAfisha/TopSlider";
const Afisha = () => {
  return(
    <div className="Afisha">
      <AfishaNav />  
      <Calendar />
      <SliderMain />
      <TopSlider />
    </div>
  );
}
export default Afisha;