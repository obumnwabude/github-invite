const chalk = require('chalk');
const orgCheck = require('./checks/org');
const userCheck = require('./checks/username');
const tokenCheck = require('./checks/token');
const interactive = require('./interactive');
const handleError = require('./utils/error');

const getOrg = () => {
  return interactive(0).then(({ org }) => orgCheck(org));
};

const getUser = async (org) => {
  return interactive(1).then(async ({ username }) => {
    return await {
      org: org,
      user: await userCheck(username),
    };
  });
};

const getToken = async ({ org, user }) => {
  return interactive(2).then(({ token }) => {
    return {
      org: org,
      user: user,
      token: tokenCheck(token),
    };
  });
};

module.exports = async (args) => {
  try {
    switch (args.length) {
      case 0:
        return getOrg().then((org) =>
          getUser(org).then((obj1) => getToken(obj1).then((obj2) => obj2))
        );
      case 1:
        return orgCheck(args[0]).then((org) =>
          getUser(org).then((obj1) => getToken(obj1).then((obj2) => obj2))
        );
      case 2:
        return orgCheck(args[0]).then((org) =>
          userCheck(args[1]).then((user) =>
            getToken({ org, user }).then((obj2) => obj2)
          )
        );
      default:
        return await {
          org: await orgCheck(args[0]),
          user: await userCheck(args[1]),
          token: await tokenCheck(args[2]),
        };
    }
  } catch (error) {
    console.error(
      chalk.redBright(
        'An error should not occur here. Please try again and if it persists please report it as an issue at https://github.com/obumnwabude/github-invite/issues \nThank you!'
      )
    );
    handleError(error);
  }
};
