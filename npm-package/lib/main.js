const orgCheck = require('./checks/org');
const userCheck = require('./checks/username');
const invite = require('./invite');

module.exports = () => {
  const args = require('../lib/cmds/args')();
  orgCheck(args[0])
    .then((org) => {
      userCheck(args[1])
        .then((user) => {
          invite(org, user, args[2])
            .then(() => {
              process.exit(0);
            });
        });
    });  
};