const chalk = require('chalk');
const inquirer = require('inquirer');
const handleError = require('./utils/error');
const questions = require('./utils/questions');

module.exports = (stage) => {
  try {
    return inquirer.prompt(questions[stage]);
  } catch (error) {
    console.error(
      chalk.redBright(
        'An error should not occur here. Please try again and if it persists please report it as an issue at https://github.com/obumnwabude/github-invite/issues \nThank you!'
      )
    );
    handleError(error);
  }
};
