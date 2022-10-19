import React, { useState } from 'react';
import image from '../../scss/images/images';
import NavBar from '../layout/NavBar';
import style from "./sections.module.scss";

export default function Carousel(props) {
  const images = image.carousel;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);


  const selectNewImage = (index, images, next = true) => {
    const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
    const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };
  return (
    <>
      <div className={style.carousel_container}>
        <div className={style.carousel_image}>
          <img src={selectedImage} alt="imagen" />
        </div>
        <div className={style.carousel_navbar}>
        <NavBar/>
        </div>
        <div className={style.carousel_button}>
          <button onClick={previous}>{"<"}</button>
          <button onClick={next}>{">"}</button>
        </div>
      </div>
    </>
  );
}
