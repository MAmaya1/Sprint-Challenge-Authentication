const axios = require('axios');
const bcrypt = require('bcryptjs');

const { authenticate, jwt } = require('../auth/authenticate');

const secrets = require('../auth/authenticate');

const Users = require('../config/routes-model');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  // implement user registration
  const user = req.body;

  if (!user.username || !user.password) {
    res.status(400).json({ errorMessage: 'Username and password required.' })
  } else {
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.addUser(user)
      .then(saved => {
        res.status(201).json(saved)
      })
      .catch(err => {
        res.status(500).json({ error: err, message: 'This username already exists.' })
      })
  }
}

function login(req, res) {
  // implement user login
  let { username, password } = req.body;

  Users.findUserBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(201).json({ message: `Welcome ${user.username}!`, token })
      } else {
        res.status(401).json({ message: 'Invalid credentials.' })
      }
    })
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  }

  const options = {
    expiresIn: '1hr'
  }

  return jwt.sign(payload, secrets.jwtKey, options)
}