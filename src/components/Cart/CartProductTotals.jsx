import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { currencyToUse } from "../../Utility/currency";

const cartProductTotals = (props) => {
  let currencyKeys = currencyToUse(props.currency);
  let currencyName = currencyKeys.name;
  let deliveryFee = 1.95

  let subtotal = props.subtotal;
  let totalCost = subtotal > 0 ? subtotal + deliveryFee : 0;

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-6 col-sm-4  offset-sm-5 text-left shop-cart-amounts">
          Subtotal
        </div>
        <div className="col-6 col-sm-3 text-right shop-cart-amounts">
          {`$${subtotal.toLocaleString()}`}
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6 col-sm-4 offset-sm-5 text-left shop-cart-amounts">
          Delivery Fee
        </div>
        <div className="col-6 col-sm-3 text-right shop-cart-amounts">
          {`$${deliveryFee}`}
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6 col-sm-4 offset-sm-5 text-left">
          <h4 className={"shop-cart-total"}>Total</h4>
        </div>
        <div className="col-6 col-sm-3 text-right">
          <h4 className={"shop-cart-total"}>
            <span style={{ textTransform: "capitalize" }}>{currencyName}</span>
            {` ${totalCost.toLocaleString()}`}
          </h4>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-12 col-lg-8 offset-lg-4 text-right">
          <button onClick={props.clearCart} className="btn shop-btn-outline">
            Clear cart
          </button>
          <Link to={"/all"} className="btn shop-btn-outline">
            Continue shopping
          </Link>

          {totalCost > 4.95 ? <Link
            className="btn btn-lg shop-btn-secondary checkout"
            to={"/checkout"}
          >
            Checkout
          </Link> : <>
            <button className="btn btn-lg shop-btn-secondaryOff checkout">Checkout</button>
            <div className="text-right">
                Please have a minimum cart order of $3 to checkout
            </div>
            </>
          }


        </div>
      </div>
    </React.Fragment >
  );
};

cartProductTotals.propTypes = {
  subtotal: PropTypes.number.isRequired,
  clearCart: PropTypes.func.isRequired,
  currency: PropTypes.object.isRequired,
};

cartProductTotals.defaultProps = {
  shippingPrice: 0,
};

export default cartProductTotals;
