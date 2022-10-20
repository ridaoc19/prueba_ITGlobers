// import { Link } from "react-router-dom";
import style from "./sections.module.scss";
import images from "../../scss/images/images.js";

function Articules(props) {
  return (
    <div>
      <div className={`articules_container`}>
        {images.icons.map(e => (
            <>
             <div key={e.name} className={`aticules_1_${e.name}`}>
              <img src={e.url1} alt="img" />
            </div>
            <div className={`aticules_2_${e.name}`}>
              <img src={e.url2} alt="img" />
              <h3 >{e.name}</h3>
              <h5 >{e.description}</h5>
              <a href="#">Detalle</a>
            </div>
            </>
        ))}
        {/* <Link to="/">Detalle</Link> */}
      </div>
    </div>
  );
}

export default Articules;