import React from 'react';
import axios from 'axios';

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
            <div className="jokes-list">
                {this.state.jokes.map(joke => (
                    <p key={joke.id}>{joke.joke}</p>
                ))}
            </div>
        )
    }
}

export default Jokes;