import React, {Select} from 'react';
import MenuItem from "../UI/MenuItem/MenuItem";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { setCategoriesChangedValue } from "../../store/actions";


const MenuComponent = (props) => {
    const toggleCategoriesChanged = () => {
        console.log("IS THIS TRIGGERED")
        if(props.categoriesChangedValue == false){
            props.setCategoriesChangedValue(true)
        }
    }

    return (
        <React.Fragment>
            <MenuItem linkTo={'/home'}>Home</MenuItem>
            <MenuItem linkTo={'/category/drinks'} onClick= {() => props.setCategoriesChangedValue(true)}>Drinks</MenuItem>
            <MenuItem linkTo={'/category/snacks'} onClick= {() => props.setCategoriesChangedValue(true)} >Snacks</MenuItem>
            <MenuItem linkTo={'/category/instant'} onClick= {() => props.setCategoriesChangedValue(true)} >Instant</MenuItem>
            <MenuItem linkTo={'/category/bread'} onClick= {() => props.setCategoriesChangedValue(true)} >Bread</MenuItem>
            <MenuItem linkTo={'/category/icecream'} onClick= {() => props.setCategoriesChangedValue(true)}>Ice Cream</MenuItem>
            <MenuItem linkTo={'/sale'}>Sale</MenuItem>
            <MenuItem linkTo={'/cart'}>
                Cart <span className="badge badge-light">{props.cartCount}</span>
            </MenuItem>
        </React.Fragment>
    )
};

MenuComponent.propTypes = {
    cartCount: PropTypes.number
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
