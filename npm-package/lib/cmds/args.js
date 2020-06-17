const args = process.argv.splice(2);

const checkHelpAndVersion = () => {
  args.forEach((arg) => {
    if (arg === 'help' || arg === '--help' || arg === '-h') {
      require('./help');
    }
    if (arg === 'version' || arg === '--version' || arg === '-v') {
      require('./version');
    }
  });
};

module.exports = (() => {
  if (args.length === 3) {
    return args;
  } else {
    checkHelpAndVersion();
    require('./help');
  }
})();