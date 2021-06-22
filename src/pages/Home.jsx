import React from "react";
import BreadCrumbs from "../components/common/BreadCrumbs";
import News from "../components/News";
import Games from "../components/Games";
import Background from "../assets/images/home_back.png";
import Keyboard from "../assets/images/keyboard.png";
import KeyboardMob from "../assets/images/keyboard_mob.png";

const Home = () => {
  return (
    <div className="home-page">
      <img className="home-page__back" src={Background} alt="HOME" />
      <div className="home-page-top">
        <picture>
          <source srcset={Keyboard} media="(min-width: 600px)" />
          <img className="home-page-top__img" src={KeyboardMob} alt="KEYBOARD" />
        </picture>

        <div className="home-page-top-content">
          <div className="home-page-top-content__title">
            Razer Blackwidow V3 <br /> mini hyperspeed
          </div>
          <div>Freedom Through Form</div>
          <div className="home-page-top-content__btns">
            <button className="btn btn-primary">Buy now</button>
            <button className="btn btn-outlined">Learn more</button>
          </div>
        </div>
      </div>

      <BreadCrumbs />

      <div className="home-page__categories">
        <News />
        <Games />
      </div>
    </div>
  );
};

export default Home;
