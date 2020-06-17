module.exports = () => {
  const args = require('../lib/cmds/args')();
  console.log('invite with ...');
  console.log(args);
};