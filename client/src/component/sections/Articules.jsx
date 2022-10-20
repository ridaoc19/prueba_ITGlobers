import { Link } from "react-router-dom";
import images from "../../scss/images/images.js";

function Articules(props) {
  return (
    <div>
      <div className={`articules_container`}>
        {images.icons.map((e, i) => (
          <>
            <div className={`aticules_1_${e.name}`}>
              <img src={e.url1} alt="img" />
            </div>
            <div className={`aticules_2_${e.name}`}>
              <img src={e.url2} alt="img" />
              <h2>{e.name}</h2>
              <h5>{e.description}</h5>
            <Link to="/">{`> VER MAS`}</Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Articules;
