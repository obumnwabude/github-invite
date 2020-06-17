const chalk = require('chalk');
const Spinner = require('clui').Spinner;
const fetch = require('node-fetch');
const errorHandler = require('./utils/error');

module.exports = ({ org, user, token }) => {
  const spinner = new Spinner(
    `Inviting GitHub user ${chalk.greenBright(
      user.login
    )} to ${chalk.greenBright(org)} GitHub organization`
  );
  spinner.start();
  return fetch(`https://api.github.com/orgs/${org}/invitations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `token ${token}`,
    },
    body: `{"invitee_id":${user.id}}`,
  })
    .then((response) => {
      if (response.status == 201) {
        spinner.stop();
        console.log(
          `Successfully invited GitHub user ${chalk.greenBright(
            user.login
          )} to ${chalk.greenBright(org)} GitHub organization`
        );
      } else {
        return response
          .json()
          .then((data) => {
            spinner.stop();
            console.log(
              chalk.yellowBright(
                `Could not invite ${chalk.yellow(user.login)} to ${chalk.yellow(
                  org
                )} because`
              )
            );
            console.log(chalk.redBright(response.statusText));
            console.log(chalk.redBright(data.message));
            if (data.errors) {
              for (let error of data.errors) {
                console.log(chalk.redBright(error.message));
              }
            }
          })
          .catch((error) => {
            spinner.stop();
            errorHandler(error);
          });
      }
    })
    .catch((error) => {
      spinner.stop();
      errorHandler(error);
    });
};
