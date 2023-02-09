import React from "react";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import s from "./Home.module.scss";
import LogoNcc from "../../images/logoNCC.png";
import Card from "../../components/Card";
import IconHtml from "../../images/htmlIcon.png";
import IconUrl from "../../images/urlIcon.png";
import IconCss from "../../images/cssIcon.png";

const Home = () => {
    const imgages = [
        IconHtml, IconCss, IconUrl
    ];
  return (
    <div className={s.home}>
      <div >
        <Sidebar />
      </div>
      <div className={s.wrapper}>
        <div className={s.content}>
          <div className={s.desc}>
            <img alt="" src={LogoNcc} className={s.logo}/>
            <div className={s.detail}>
              <h6>Lorem ipsum dolor sit asmet?</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tristique consequat placerat. Vestibulum auctor pellentesque
                sem, eu posuere erat hendrerit quis. Maecenas vel consequat
                turpis. Nam facilisis, ligula in mattis sodales, augue justo
                tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam
                augue. Aliquam vel mauris a nibh auctor commodo. Praesent et
                nisi eu justo eleifend convallis. Quisque suscipit maximus
                vestibulum. Phasellus congue mollis orci, sit amet luctus augue
                tristique eu. Donec vulputate odio neque, sed semper turpis
                pellentesque a.
              </p>
            </div>
            <div className={s.cardList}>
              {imgages.map( (item, index) => (
                  <div key={index}>
                      <Card item={item}/>
                  </div>
              ))}
            </div>
          </div>
          
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
