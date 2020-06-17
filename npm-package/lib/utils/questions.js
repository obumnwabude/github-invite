module.exports = [
  {
    name: 'org',
    type: 'input',
    message: 'Enter name of GitHub organization:',
    validate: (value) => value.length ? true : 'Please enter the organization\'s name on GitHub:',
  },
  {
    name: 'username',
    type: 'input',
    message: 'Enter username of the GitHub user to be invited:',
    validate: (value) => value.length ? true : 'Please enter the user\'s GitHub username',
  },
  {
    name: 'token',
    type: 'password',
    message: 'Enter token of admin in org',
    validate: (value) => value.length >= 32 ? true : 'Please enter an admin\'s token (tokens are usually longer than 32 characters)',
  }
];