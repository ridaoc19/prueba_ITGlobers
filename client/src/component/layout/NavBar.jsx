import { Link } from "react-router-dom";
import images from "../../scss/images/images.js";
import style from "./layout.module.scss";

function NavBar(props) {
  return (
    <>
      <div className={style.navbar_container}>
        <div className={style.navbar_left}>
          <Link to={"/home"}>
          <h1>PUFI</h1>
          </Link>
        </div>

        <div className={style.navbar_center}>
          {images.icons.map((e, i) => (
            <div key={i}>
              <div>{e.image}</div>
              <h5>{e.name}</h5>
            </div>
          ))}
        </div>
        <div className={style.navbar_right}>
          <Link to={"/"}>MI CUENTA</Link>
          <Link>MI COMPRA</Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
