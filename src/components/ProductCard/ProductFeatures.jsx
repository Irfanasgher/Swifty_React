import React from "react";
import {
  LocalShipping,
  International,
  Drink,
  Sweet,
  Chocolate,
  Chips,
  Food
} from "../UI/Icons/Icons";

const ProductFeatures = (props) => {
  return (
    <React.Fragment>
      {props.product.shipped_from_abroad ? (
        <span
          className="shop-card-product-features"
          title="International Shipping"
        >
          <International />
          {props.showText ? (
            <span className="feature-text">Shipped From Abroad</span>
          ) : null}
        </span>
      ) : (
        <span className="shop-card-product-features" title="Local Shipping">
          <LocalShipping />
          {props.showText ? (
            <span className="feature-text">Local Shippping</span>
          ) : null}
        </span>
      )}

      {props.product.Category === "Booze" ? (
        <span className="shop-card-product-features" title="Drinks">
          <Drink />
          {props.showText ? (
            <span className="feature-text">Drinks</span>
          ) : null}
        </span>
      ) : null}

      {props.product.Category === "Sweets" ? (
        <span className="shop-card-product-features" title="Sweets">
          <Sweet />
          {props.showText ? (
            <span className="feature-text">Sweets</span>
          ) : null}
        </span>
      ) : null}

      {props.product.Category === "Chocolate" ? (
        <span className="shop-card-product-features" title="Chocolate">
          <Chocolate />
          {props.showText ? (
            <span className="feature-text">Chocolate</span>
          ) : null}
        </span>
      ) : null}

      {props.product.Category === "Chips" ? (
        <span className="shop-card-product-features" title="Chips">
          <Chips />
          {props.showText ? (
            <span className="feature-text">Chips</span>
          ) : null}
        </span>
      ) : null}

      {props.product.Category === "Food" ? (
        <span className="shop-card-product-features" title="Food">
          <Food />
          {props.showText ? (
            <span className="feature-text">Food</span>
          ) : null}
        </span>
      ) : null}

    </React.Fragment>
  );
};

export default ProductFeatures;
