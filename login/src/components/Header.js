import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

// Styled Components

const StyledHeader = styled.header`
    display: flex;
    justify-content: flex-end;
    background: #A4bCC4;
    padding: 15px 10px;

    a {
        margin-left: 15px;
        text-decoration: none;
        color: #1F222B;
        font-weight: bold;
        
        &:hover {
            color: white;
            transition: all 200ms ease;
        }
    }

    .active {
        color: white;
    }

`

// Header Component

const Header = props => {
    return (
        <StyledHeader>
            <NavLink exact to="/login">Log In</NavLink>
            <NavLink to="/register">Sign Up</NavLink>
        </StyledHeader>
    )
}

export default Header;