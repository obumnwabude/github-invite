const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
/* 
 * create a file named 'org.js' and export an object containing the 
 * name(id) of the organisation, to whom the GitHub is user is being invited to and
 * personal access token of an admin member in the organisation on behalf of whom the request is sent.
 * The token should have the write:org permission under admin:org when then token was created
 *
 * Example: in 'org.js'
 * module.exports = {
 *  name: <NAME OR ID OF ORGANISATION ON GITHUB>,
 *  auth: <PERSONAL ACCESS TOKEN OF ADMIN MEMBER>
 * };
 * 
 * 'org.js' file is added to .gitignore to ensure that credentials are not committed to Git.
 */
const org = require('./org');
const fetch = require('node-fetch');
const host = 'https://api.github.com';

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.status(200).sendFile('index.html');
});

app.get('/org', (req, res) => {
  res.status(200).send(org.name || '');
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

    // ensure that GitHub organization exists else return 
    const organization = await fetch(`${host}/orgs/${org.name}`)
      .then(response => response.json());

    if (!organization.id) return res.status(401).json({
      status: false,
      message: 'Server Error',
      body: `GitHub organization with name: ${org.name} not found. Please correct name in org.js file.`
    });

    // invite user 
    fetch(`${host}/orgs/${org.name}/invitations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `token ${org.token}`
      },
      body: `{"invitee_id":${user.id}}`
      }).then(response => {
        // respond apprioprately
        if (response.status == 201) {
          res.status(201).json({
            status: true,
            message: 'Successfully Invited',
            body: `Dear ${req.body.username},<br>Kindly check your inbox and accept the invitation that has been sent to you.<br>Thank you!`
          });
        } else {
          response.json().then(data => {
            let messages = [data.message];
            if (data.errors) {
              for (let error of data.errors) {
                messages.push(error.message);
              }
            }
            res.status(401).json({
              status: false,
              message: response.statusText,
              body: messages.join('<br>')
            });
          });
        }
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'An Error Occured',
      body: error.toString()
    }); 
  }
});

module.exports = app.listen(port);