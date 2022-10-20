import React from 'react';
import images from "../../scss/images/images.js";
import style from "./layout.module.scss";

function Footer(props) {
  return (
    <div>
      <div className={style.footer_container}>
        <div className={style.footer_title}>
          <h1>Pufi</h1>
          <ul>
            {images.icons.map((e) => <div key={e.name} ><li>PUFI {e.name}</li></div>)}
          </ul>
        </div>
        <div className={style.footer_contact}>
          <ul>
            <li>CONTACTO</li>
            <li>AYUDA</li>
            <li>CÓMO COMPRAR</li>
            <li>TÉRMINOS & CONDICIONES</li>
          </ul>
        </div>
        <div className={style.footer_buy}>
          <h5>COMPRA 100% SEGURA</h5>
          <ul>
            {images.security.map((e, i) => <li key={i}>{e}</li>)}
            <p>COMPRÁ CON LA GARANTÁ DE PUFI</p>
          </ul>
        </div>
        <div className={style.footer_social}>
          <h5>SEGUINOS EN</h5>
          <ul> {images.social.map((e, i) => <li key={i}>{e}</li>)}</ul>
        </div>
        <div className={style.footer_info}>
          <h6>PUFI Copyright 2017 - Todos los derechos reservados</h6>
          <img src={images.finally} alt="finally" />
        </div>
      </div>
    </div>
  );
}

export default Footer;