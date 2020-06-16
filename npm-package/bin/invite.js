#!/usr/bin/env node

console.log('Welcome to GitHub invitation');

const args = require('../lib/cmds/args');
if (args.length) {
  console.log('invite with ...');
  console.log(args);
}