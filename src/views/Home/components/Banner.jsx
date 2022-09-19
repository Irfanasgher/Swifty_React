import React from "react";

const Banner = () => {
  const banner = {
    image: "banner.png",
    title: "",
    text:
      "Enjoy a flat delivery fee of $1.95!",
    link: "/all",
  };
  return (
    <div className="container main-banner-container my-4">
      <div className="main-banner-content" style={{ backgroundImage: `url(${require("../../../assets/images/banner.png").default})` }}>
        <div className="main-banner-text">
          <h4 className="display-4 main-banner-title">{banner.title}</h4>
          <p className="lead">{banner.text}</p>
          <p>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Banner;
