import React from 'react';
import style from "./sections.module.scss";
import images from "../../scss/images/images.js";

function Instagram(props) {
  return (
    <div>
      <div className={style.instagram_container}>
        <div className={style.instagram_title}>
          <h5>INSTAGRAM</h5>
          <h1>#ESPUFI</h1>
        </div>
        <div className={style.instagram_images}>
          {images.instagram.map((e, i) => <div key={i}><img src={e} alt="img" /></div>)}
        </div>
      </div>
    </div>
  );
}

export default Instagram;