import React, { useState } from "react";

const SliderMain = () => {
  const [sliderData, setSliderData] = useState([
    { id: 1, title: "Слайд 1", image: "https://primamediamts.servicecdn.ru/f/big/3186/3185582.jpg?25f3568136df96e4d4e71aaee146c58c" },
    { id: 2, title: "Слайд 2", image: "https://primamediamts.servicecdn.ru/f/big/3186/3185582.jpg?25f3568136df96e4d4e71aaee146c58c" },
    { id: 3, title: "Слайд 3", image: "https://primamediamts.servicecdn.ru/f/big/3186/3185582.jpg?25f3568136df96e4d4e71aaee146c58c" },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? sliderData.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === sliderData.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="slider">
      <div className="slide">
        <img src={sliderData[currentSlide].image} alt={sliderData[currentSlide].title} />
        <h3>{sliderData[currentSlide].title}</h3>
      </div>
      <div className="controls">
        <button onClick={handlePrevSlide}>❮</button>
        <button onClick={handleNextSlide}>❯</button>
      </div>
    </div>
  );
};

export default SliderMain;