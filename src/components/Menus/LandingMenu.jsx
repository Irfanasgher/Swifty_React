import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingMenu = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">
                <span className="navbar-brand">
                    <NavLink to={'/'} exact>SwiftySG</NavLink>
                </span>
            </div>
        </nav>
    )
};

export default LandingMenu;