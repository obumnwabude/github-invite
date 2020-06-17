const args = require('../lib/cmds/args')();
const getDetails = require('./get-details');
const invite = require('./invite');

module.exports = async () =>
  invite(await getDetails(args)).then(() => process.exit(0));
