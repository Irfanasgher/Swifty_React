import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProductsByFilter, getUsedCurrency } from "../store/selectors";
import ProductsDisplay from "../components/ProductsDisplay/Index";

const ProductCategories = (props) => {
  const {
    match: { params },
  } = props;
  return (
    <React.Fragment>
    <ProductsDisplay
      products={props.productsProps}
      usedCurrency={props.usedCurrencyProp}
      breadCrumbs={[
        {
          label: params.category,
          to: "/category/" + params.category,
        },
      ]}
    />
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    productsProps: getProductsByFilter(state, ownProps.match.params.category),
    usedCurrencyProp: getUsedCurrency(state),
    fullstate: state
  };
};

ProductCategories.propTypes = {
  productsProps: PropTypes.array.isRequired,
  usedCurrencyProp: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(ProductCategories);
