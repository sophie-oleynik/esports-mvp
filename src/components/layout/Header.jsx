import React from "react";
import { ReactComponent as Logo } from "../../assets/icons/Logo Desktop.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
  const links = [
    { title: "Games", url: "/games" },
    { title: "News", url: "/" },
    { title: "Articles", url: "/articles" },
    { title: "Teams", url: "/teams" },
    { title: "Live Score", url: "/live-score" },
    { title: "Ranking", url: "/ranking" },
    { title: "Forum", url: "/forum" },
  ];
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="menu">
          {links.map((link) => (
            <NavLink to={link.url} className="menu-item" exact>
              <div>{link.title}</div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
