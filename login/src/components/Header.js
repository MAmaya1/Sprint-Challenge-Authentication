import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <header>
            <NavLink exact to="/login">Log In</NavLink>
            <NavLink to="/register">Sign Up</NavLink>
        </header>
    )
}

export default Header;