import React from 'react';
import style from "./sections.module.scss";
import image from '../../scss/images/images';

function Form(props) {



  return (
    <div>
    <div className={style.form_container}>
      <div className={style.form_title}>
        <h5>NEWSLETTER</h5>
        <h1>SUSCRIBITE</h1>
        <p>Y enterate de todas la novedades</p>
      </div>
      <div className={style.form_formulario}>
        <form>
          <div className={style.button}>
          <input type="text" placeholder='Ingresa tu email'/>
          <button>{image.arrow}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Form;