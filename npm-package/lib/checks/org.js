const chalk = require('chalk');
const Spinner = require('clui').Spinner;
const fetch = require('node-fetch');
const errorHandler = require('../utils/error');

module.exports = (org) => {
  const spinner = new Spinner(
    `Looking up ${chalk.greenBright(org)} GitHub organization`
  );
  spinner.start();
  return fetch(`https://api.github.com/orgs/${org}`)
    .then((response) => response.json())
    .then((organization) => {
      if (!organization.id) {
        spinner.stop();
        console.error(
          `GitHub organization ${chalk.yellowBright.bold(
            org
          )} not found. Please check and try again.`
        );
        process.exit(1);
      } else {
        spinner.stop();
        return organization.login;
      }
    })
    .catch((error) => {
      spinner.stop();
      errorHandler(error);
    });
};
