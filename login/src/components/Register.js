import React from 'react';
import axios from 'axios';

class Register extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    addUser = event => {
        event.preventDefault();
        axios
            .post('http://localhost:3300/api/register', this.state.credentials)
            .then(res => {
                console.log('User added successfully!')
            })
            .catch(err => {
                console.error(err, 'This user is already registered.')
            })
        this.setState({
            credentials: {
                username: '',
                password: ''
            }
        })
    }

    render() {
        return (
            <div className="sign-up-page">
                <h2>Sign Up</h2>
                <form onSubmit={this.addUser}>
                    <label htmlFor="username"/>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        placeholder="username"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="password"/>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        placeholder="password"
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Register;