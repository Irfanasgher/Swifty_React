import React from "react";
import PropTypes from "prop-types";

const cartProducts = (props) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-md-2 shop-cart-image-div">
              <img
                className={"shop-cart-image"}
                src={props.productPhoto}
                alt={props.productPhoto.split(".")[0]}
              />
            </div>

            <div className="col-sm-5 col-md-4 shop-cart-product-details">
              {props.productVendor ? (
                <h6 className="shop-cart-category">
                  {`Sold by : `}
                  <span className="text-caitalize">
                    {props.productVendor.name}
                  </span>
                </h6>
              ) : null}

              <h5 className="shop-cart-name text-capitalize">
                {props.productName}
              </h5>

              {props.productSize ? (
                <h6 className="shop-cart-category text-capitalize">
                  {`Size : `}
                  {props.productSize}
                </h6>
              ) : null}

              <div>
                <span
                  className={
                    "badge " +
                    (props.productQuantity > 0
                      ? "badge-success"
                      : "badge-danger")
                  }
                >
                  {props.productQuantity > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>
            <div className="col-sm-7 col-md-6">
              <div className="row">
                <div className="col-sm-6 text-left">
                  {props.productQuantity > 0 ? (
                    <span>
                      <h6 className={"shop-cart-item-price"}>
                        {props.productPrice.toLocaleString()}
                      </h6>
                      <select
                        className="form-control input-sm my-3 w-50"
                        disabled={props.productQuantity < 1}
                        value={props.productCount}
                        onChange={props.updateProductCount}
                      >
                        {[...Array(props.productQuantity)].map(
                          (number, index) => (
                            <option key={index} value={index + 1}>
                              {index + 1}
                            </option>
                          )
                        )}
                      </select>
                      <h6 className={"shop-cart-item-total"}>
                        {`Total Price $`}
                        <span>
                          {(
                            props.productPrice * props.productCount
                          ).toLocaleString()}
                        </span>
                      </h6>
                    </span>
                  ) : null}
                </div>
                <div className="col-sm-4 offset-sm-2 shop-cart-b-container">
                  <button
                    type="button"
                    onClick={props.removeCartProduct}
                    className="btn shop-btn-warning btn-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

cartProducts.propTypes = {
  productId: PropTypes.number.isRequired,
  productPhoto: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productVendor: PropTypes.object,
  productCategory: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  updateProductCount: PropTypes.func.isRequired,
  productQuantity: PropTypes.number.isRequired,
  removeCartProduct: PropTypes.func.isRequired
};

export default cartProducts;
