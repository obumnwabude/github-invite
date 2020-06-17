const chalk = require('chalk');

module.exports = (token) => {
  if (token.length < 32) {
    console.log(
      chalk.yellowBright(
        'Please use a valid token (tokens are usually more than 32 characters in length)'
      )
    );
    process.exit(1);
  } else {
    return token;
  }
};
