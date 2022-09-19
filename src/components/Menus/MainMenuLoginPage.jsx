import React from 'react';
import Menu from '../UI/Menu/Menu';
import MenuComponent from '../Menus/MenuComponent';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MainMenuLoginPage = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">
                <span className="navbar-brand">
                    <NavLink to={'/'} exact>SwiftySG</NavLink>
                </span>
                {/*
                <div className="collapse navbar-collapse">
                    <Menu menuClasses="navbar-nav ml-auto mt-2 mt-lg-0">
                        <MenuComponent cartCount={props.cartItemNumber} />
                    </Menu>
                </div>
                */}
            </div>
        </nav>
    )
};

MainMenuLoginPage.propTypes = {
    toggleSideBar: PropTypes.func.isRequired,
    cartItemNumber: PropTypes.number.isRequired
};

export default MainMenuLoginPage;