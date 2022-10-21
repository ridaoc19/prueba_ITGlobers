import React from 'react';
import Footer from './Footer';
import style from "./layout.module.scss";
import NavBar from './NavBar';

function Layout({ children }) {
  return (
    <div>
      <div className={style.layout_container}>
        <div className={style.layout_navbar}>
          <NavBar />
        </div>
        <div className={style.layout_children}>
          {children}
        </div>
        <div className={style.layout_footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;