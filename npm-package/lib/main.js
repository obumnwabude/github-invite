const orgCheck = require('./checks/org');
const userCheck = require('./checks/username');
const tokenCheck = require('./checks/token');
const interactive = require('./interactive');
const invite = require('./invite');
const args = require('../lib/cmds/args')();

const getDetails = async () => {
  if (args.length === 0) {
    return await interactive();
  } else {
    return await {
      org: args[0],
      username: args[1],
      token: tokenCheck(args[2]),
    };
  }
};

module.exports = async () => {
  const data = await getDetails();
  orgCheck(data.org)
    .then((org) => {
      userCheck(data.username)
        .then((user) => {
          invite(org, user, data.token)
            .then(() => {
              process.exit(0);
            });
        });
    });  
};