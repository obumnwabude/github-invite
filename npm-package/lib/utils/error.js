const chalk = require('chalk');

module.exports = (error) => {
	console.error(chalk.redBright('An Error Occured'))
	console.error(chalk.redBright(error))
	process.exit(1);
};