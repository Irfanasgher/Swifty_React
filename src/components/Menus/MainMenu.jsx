import React from 'react';
import Menu from '../UI/Menu/Menu';
import MenuComponent from '../Menus/MenuComponent';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MainMenu = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">
                <span className="navbar-brand">
                    <NavLink to={'/'} exact>SwiftySG</NavLink>
                </span>
                <button
                    className="navbar-toggler custom-toggler"
                    onClick={props.toggleSideBar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <Menu menuClasses="navbar-nav ml-auto mt-2 mt-lg-0">
                        <MenuComponent cartCount={props.cartItemNumber} />
                    </Menu>
                </div>
            </div>
        </nav>
    )
};

MainMenu.propTypes = {
    toggleSideBar: PropTypes.func.isRequired,
    cartItemNumber: PropTypes.number.isRequired
};

export default MainMenu;