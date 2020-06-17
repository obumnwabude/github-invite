module.exports = [
  {
    name: 'org',
    type: 'input',
    message: 'Enter the name of the GitHub organization:',
    validate: (value) => value.length ? true : 'Please enter the organization\'s name on GitHub:',
  },
  {
    name: 'username',
    type: 'input',
    message: 'Enter the GitHub username of the user to be invited:',
    validate: (value) => value.length ? true : 'Please enter the user\'s GitHub username',
  },
  {
    name: 'token',
    type: 'input',
    message: 'Enter token of admin in org',
    validate: (value) => value.length >= 32 ? true : 'Please enter an admin\'s token (tokens are usually longer than 32 characters)',
  }
];