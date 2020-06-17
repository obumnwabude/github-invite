const chalk = require('chalk');
const orgCheck = require('./checks/org');
const userCheck = require('./checks/username');

module.exports = () => {
  const args = require('../lib/cmds/args')();
  orgCheck(args[0])
    .then((org) => {
      userCheck(args[1])
        .then((user) => {
          console.log(`invite ${chalk.greenBright(user)} into ${chalk.greenBright(org)}`)
        });
    });  
};