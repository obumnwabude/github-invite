const inquirer = require('inquirer');
const questions = require('./utils/questions');

module.exports = () => {
  return inquirer.prompt(questions);
};