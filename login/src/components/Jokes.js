import React from 'react';
import axios from 'axios';

import styled from 'styled-components';

// Styled Components

const JokesList = styled.div`
    max-width: 700px;
    margin: auto;
    padding: 20px;
    background: white;

    h1 {
        margin: 0 0 20px 0;
        text-align: center;
    }

    p {
        padding: 10px;
        margin: 0;
        :nth-child(even) {
            background: #D9E0E2;
        }
    }
`

// Jokes Component

class Jokes extends React.Component {
    state = {
        jokes: []
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        const requestConfig = {
            headers: {
                authorization: token
            }
        }
        axios
            .get('http://localhost:3300/api/jokes', requestConfig)
            .then(res => {
                this.setState({ jokes: res.data });
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        return (
            <JokesList>
                <h1>Dad Jokes</h1>
                {this.state.jokes.map(joke => (
                    <p key={joke.id}>{joke.joke}</p>
                ))}
            </JokesList>
        )
    }
}

export default Jokes;