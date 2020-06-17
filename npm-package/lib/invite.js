const chalk = require('chalk');
const orgCheck = require('./checks/org');

module.exports = () => {
  const args = require('../lib/cmds/args')();
  orgCheck(args[0])
    .then((org) => console.log(`invite into ${chalk.greenBright(org)}`));  
};