module.exports = (() => {
  const args =  process.argv.splice(2);
  args.forEach((arg) => {
    if (arg === 'help' || arg === '--help' || arg === '-h') {
      require('./help');
    }
    if (arg === 'version' || arg === '--version' || arg === '-v') {
      require('./version');
    }
  });
  return args;
})();