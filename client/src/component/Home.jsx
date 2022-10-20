import React from "react";
import Carousel from "./sections/Carousel";
import style from "./home.module.scss";
import Footer from "./layout/Footer";
import Articules from "./sections/Articules";
import Instagram from "./sections/Instagram";
import Form from "./sections/Form";

function Home(props) {
  return (
    <>
      <div className={style.home_container}>
        <div className={style.home_carousel}>
          <Carousel />
        </div>
        <div className={style.home_articules}>
          <Articules />
        </div>
        <div className={style.home_instagram}>
          <Instagram />
        </div>
        <div className={style.home_form}>
          <Form />
        </div>
        <div className={style.home_footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
