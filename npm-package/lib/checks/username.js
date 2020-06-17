const chalk = require('chalk');
const Spinner = require('clui').Spinner;
const fetch = require('node-fetch');
const errorHandler = require('../utils/error');

module.exports = (username) => {
  const spinner = new Spinner(`Looking up ${chalk.greenBright(username)} GitHub user`);
  spinner.start();
  return fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((user) => {
      if (!user.id) {
        spinner.stop();
        console.error(`GitHub user ${chalk.yellowBright.bold(username)} not found. Please check and try again.`);
        process.exit(1);
      } else {
        spinner.stop();
        return user.id;
      }
    }).catch((error) => {
      spinner.stop();
      errorHandler(error);
    });
};