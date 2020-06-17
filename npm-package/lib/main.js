const orgCheck = require('./checks/org');
const userCheck = require('./checks/username');
const tokenCheck = require('./checks/token');
const invite = require('./invite');

module.exports = () => {
  const args = require('../lib/cmds/args')();
  orgCheck(args[0])
    .then((org) => {
      userCheck(args[1])
        .then((user) => {
          invite(org, user, tokenCheck(args[2]))
            .then(() => {
              process.exit(0);
            });
        });
    });  
};