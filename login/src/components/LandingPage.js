import React from 'react';
import joke from '../img/joke.jpg';

import styled from 'styled-components';

// Styled Components

const Landing = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 700px;
    margin: auto;
    background: white;
    padding: 20px;

    h1 {
        margin: 0;
        text-align: center;
    }

    img {
        margin: 40px 0;
        width: 50%;
    }
`

const LandingPage = props => {
    return (
        <Landing>
            <h1>Dad Jokes</h1>
            <img src={joke}/>
        </Landing>
    )
}

export default LandingPage;