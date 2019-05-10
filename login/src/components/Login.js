import React from 'react';
import axios from 'axios';

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
      .post('http://localhost:3300/api/login', this.state)
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
      <>
        <h2>Login</h2>
        <form onSubmit={this.login}>
          <div>
            <label htmlFor="username" />
            <input
              id="username"
              type="text"
              name="username"
              value={this.state.credentials.username}
              placeholder="username"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              id="password"
              type="password"
              name="password"
              value={this.state.credentials.password}
              placeholder="password"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </>
    );
  }
}

export default Login;