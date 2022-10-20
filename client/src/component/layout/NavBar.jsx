import images from "../../scss/images/images.js";
import style from "./layout.module.scss";

function NavBar(props) {
  return (
    <>
      <div className={style.navbar_container}>
        <div className={style.navbar_left}>
          <h1>PUFI</h1>
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
          <h5>MI CUENTA</h5>
          <h5>MI COMPRA</h5>
        </div>
      </div>
    </>
  );
}

export default NavBar;
