const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fetch = require('node-fetch');
const host = 'https://api.github.com';

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.status(200).sendFile('index.html');
});

app.post('/', async (req, res) => {
  try { 
    // check if github account exists with the given username, if no return that the username is invalid
    const user = await fetch(`${host}/users/${req.body.username}`)
      .then(response => response.json());

    if (!user.id) return res.status(401).json({
      status: false,
      message: 'Invalid Username',
      body: `GitHub user with username: ${req.body.username} not found. Please check username's spelling or create GitHub account with that username. Thank you.`
    });
    
    // check if github account is a member, if yes return

    // invite and return
    res.status(201).json({
      status: true,
      message: 'Successfully Invited',
      body: 'Check your inbox and accept the invitation. Thank you!'
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'An Error Occured',
      body: error
    }); 
  }
});

module.exports = app.listen(port);