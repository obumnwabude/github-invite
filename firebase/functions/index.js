const functions = require('firebase-functions');
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const host = 'https://api.github.com';

app.get('/org', (req, res) => {
  try {
    res.status(200).send(functions.config().org.name);
  } catch (error) {
    res.status(500).end();
  }
});

app.post('/invite', async (req, res) => {
  try {
    // check if github account exists with the given username, if no return that the username is invalid
    const user = await fetch(
      `${host}/users/${req.body.username}`
    ).then((response) => response.json());

    if (!user.id)
      return res.status(401).json({
        status: false,
        message: 'Invalid Username',
        body: `GitHub user with username: ${req.body.username} not found. Please check username's spelling or create GitHub account with that username. Thank you.`,
      });

    // ensure that GitHub organization exists else return
    const organization = await fetch(
      `${host}/orgs/${functions.config().org.name}`
    ).then((response) => response.json());

    if (!organization.id)
      return res.status(401).json({
        status: false,
        message: 'Server Error',
        body: `GitHub organization with name: ${functions.config().org.name} not found.`,
      });

    // invite user
    return fetch(`${host}/orgs/${functions.config().org.name}/invitations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `token ${functions.config().org.token}`,
      },
      body: `{"invitee_id":${user.id}}`,
    }).then((response) => {
      // respond apprioprately
      if (response.status === 201) {
        return res.status(201).json({
          status: true,
          message: 'Successfully Invited',
          body: `Dear ${req.body.username},<br>Kindly check your inbox and accept the invitation that has been sent to you.<br>Thank you!`,
        });
      } else {
        return response.json().then((data) => {
          let messages = [data.message];
          if (data.errors) {
            for (let error of data.errors) {
              messages.push(error.message);
            }
          }
          return res.status(401).json({
            status: false,
            message: response.statusText,
            body: messages.join('<br>'),
          });
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: 'An Error Occured',
      body: error.toString(),
    });
  }
});

app.use('*', (req, res) => {
  res.redirect('/');
});

exports.app = functions.https.onRequest(app);