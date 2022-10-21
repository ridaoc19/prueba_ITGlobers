import style from './presentation.module.scss';
import images from './images/images.js';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'

export default function Presentation(props) {
  return (
    <div>
      <div className={style.presentation_container}>
        <div className={style.presentation_title}>
          <h1>Proyecto Eccomerce Pufi</h1>
          <h6>Creado desde el 19 al 21 septiembre de 2022</h6>
        </div>
        <div className={style.presentation_video}>
          <p>Esta prueba se realiza enfocada a una página web de Ecommerce (puede ver el ejemplo dando clic
            {" "}<a href="Pufi.pdf" target="_blank" rel="noreferrer"> acá </a>) simulando una empresa llamada
            Pufi, como requerimiento se debe trabajar con React, Redux, Css (opcional Sass), se califica
            la maquetación y control de formulario <br/><Link to={"/home"} className={style.button}>Ingresar a la aplicacion</Link></p>
          <div>
            <ReactPlayer url='https://vimeo.com/762578074' width='100%' height='100%' />
          </div>
        </div>
      
      <div className={style.presentation_tecnologies}>
        <div className={style.tecnologies_title}>
        <h2>Tecnologias utilizadas en el Proyecto</h2> 
        </div>
        <div className={style.tecnologies_content}>
          <ul>
            {images.tecnologies.map((e, i) => <li key={i}><h4>{e.name}</h4> <img src={e.image}  alt="logo" /></li>)}
          </ul>
        </div>

      </div>
      <div className={style.presentation_footer}>
      <div className={style.footer_name}>
        <h2>Proyecto realizado por Ricardo David Ocampo</h2>
        </div>
        <div className={style.footer_social}>
        {images.contact.map(e => (
          <div key={e.name} >
            {e.name === "email" ?
              (<a href={`mailto:${e.url}`}><img src={e.image} alt="imagen" /></a>) :
              (<a href={e.url} target="_blank" rel="noreferrer"><img src={e.image} alt="imagen" /></a>)
            }
          </div>
        )
        )}</div>
      </div>
      </div>
    </div>
  );
}

