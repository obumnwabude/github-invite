#!/usr/bin/env node

const args = require('../lib/cmds/args');
if (args.length) {
  console.log('invite with ...');
  console.log(args);
}