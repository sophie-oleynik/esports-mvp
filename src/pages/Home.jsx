import React from "react";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Background from "../assets/images/home_back.png";
import Keyboard from "../assets/images/keyboard.png";

const Home = () => {
  const buttons = [{ title: "Buy now" }, { title: "Learn more" }];
  return (
    <>
      <div className="content-top">
        <img className="content-top__back" src={Background} alt="HOME" />
        <div className="content-top__keyboard">
          <img
            className="content-top__keyboard__img"
            src={Keyboard}
            alt="KEYBOARD"
          />
          <div className="content-top__keyboard__items">
            <div className="content-top__keyboard__items__1">
              Razer Blackwidow V3 <br /> mini hyperspeed
            </div>
            <div className="content-top__keyboard__items__2">
              Freedom Through Form
            </div>
            <div className="content-top__keyboard__items__3">
              {buttons.map((button) => (
                <button className="content-top__keyboard__items__3__buttons">
                  {button.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BreadCrumbs />
      <div className="content-bottom"></div>
    </>
  );
};

export default Home;
