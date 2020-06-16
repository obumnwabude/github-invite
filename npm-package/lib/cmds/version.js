module.exports = (() => {
  console.log(`v${(require('../../package').version)}`);
  process.exit(0);
})();