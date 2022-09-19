import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setCategoriesChangedValue } from "../../../store/actions";

const MenuItem = (props) => {
  return (
    
    <li className={"nav-item"}>
      <NavLink className={"nav-link"} onClick= {() => {console.log(props.setCategoriesChangedValue(true))}}to={props.linkTo} exact>
        {props.children}
      </NavLink>
    </li>
  );
};

MenuItem.propTypes = {
  navItemClasses: PropTypes.string,
  navLinkClasses: PropTypes.string,
  linkTo: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
      categoriesChangedValue: state.categoriesChangedValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      setCategoriesChangedValue: (categoriesChangedValue) => dispatch(setCategoriesChangedValue(categoriesChangedValue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
