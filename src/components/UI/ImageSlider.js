import React, { Fragment, useState } from "react";
import SliderData from "./ImageSliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import classes from "./ImageSlider.module.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  //ako nemam podatke ili ako nije array ne renderuje nista
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={classes.slider}>
      <FaArrowAltCircleLeft
        className={classes["left-arrow"]}
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className={classes["right-arrow"]}
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="burger" className={classes.image} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
