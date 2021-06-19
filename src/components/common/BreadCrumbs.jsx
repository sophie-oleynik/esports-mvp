import React from "react";

const BreadCrumbs = () => {
  const links = [
    { title: "Home page", url: "#" },
    { title: "Feed", url: "#" },
    { title: "Current place", url: "#" },
  ];
  return (
    <div className="breadcrumbs-links">
      {links.map((link, i) => (
        <>
          <div className="breadcrumbs-links__item" url={link.url}>
            {link.title}
          </div>
          {i !== links.length - 1 && <div className="triangle" />}
        </>
      ))}
    </div>
  );
};

export default BreadCrumbs;
