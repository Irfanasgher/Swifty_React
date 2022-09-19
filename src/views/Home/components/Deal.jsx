import React from "react";
import { NavLink } from "react-router-dom";

const Deal = () => {
  const deal = {
    image: "frontmap.png",
    title: "Input your postal code to get started!",
    link: "/all",
  };
  return (
    <div className="container deals-contaner mb-4">
      <div className="deals-content shadow">
        <img
          className="deals-image"
          src={require(`../../../assets/images/${deal.image}`).default}
          alt="#"
          width = "450px"
          height = "500px"
        />
        <div className="deals-text">
          <div className="heading-block">
            <h1 className="deals-title mb-4">{deal.title}</h1>
            <p className="text mb-4">{deal.text}</p>
            <NavLink className="btn btn-primary btn" to={deal.link} exact>
              Postal Code Form Input
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
