import React from 'react';
import axios from 'axios';

import styled from 'styled-components';

// Styled Components

const LoginPage = styled.div`
    max-width: 700px;
    height: 200px;
    margin: auto;
    background: white;
    padding: 20px;
    text-align: center;

    h2 {
        margin: 0 0 15px 0;
    }
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    input {
        width: 50%;
        margin: 3px 0;
        padding: 8px;
        border: solid 1px black;
        border-radius: 5px;
    }

    button {
        margin-top: 20px;
        width: 80px;
        height: 30px;
        background: white;
        border: solid 1px black;
        border-radius: 5px;

        &:hover {
            background: #D9E0E2;
            transition: all 200ms ease;
        }
    }
`

// Login Component

class Login extends React.Component {
  state = {
    credentials: {
        username: '',
        password: '',
    }
  };

  handleChange = event => {
    this.setState({
        credentials: {
            ...this.state.credentials,
            [event.target.name]: event.target.value
        }
    })
  };

  login = event => {
    event.preventDefault();
    axios
      .post('http://localhost:3300/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/jokes');
      })
      .catch(err => {
        console.error('Invalid credentials', err);
      });
  };

  render() {
    return (
      <LoginPage>
        <h2>Login</h2>
        <LoginForm onSubmit={this.login}>
            <label htmlFor="username" />
            <input
                id="username"
                type="text"
                name="username"
                value={this.state.credentials.username}
                placeholder="username"
                onChange={this.handleChange}
            />
            <label htmlFor="password" />
            <input
                id="password"
                type="password"
                name="password"
                value={this.state.credentials.password}
                placeholder="password"
                onChange={this.handleChange}
            />
            <button type="submit">Login</button>
        </LoginForm>
      </LoginPage>
    );
  }
}

export default Login;