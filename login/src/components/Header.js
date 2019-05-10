import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

// Styled Components

const StyledHeader = styled.header`
    background: #A4BCC4;
    padding: 15px 0;

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

const Nav = styled.nav`
    max-width: 700px;
    margin: auto;
    text-align: right;
`

// Header Component

const Header = props => {
    return (
        <StyledHeader>
            <Nav>
                <NavLink exact to="/login">Log In</NavLink>
                <NavLink to="/register">Sign Up</NavLink>
            </Nav>
        </StyledHeader>
    )
}

export default Header;