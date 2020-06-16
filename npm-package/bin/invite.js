#!/usr/bin/env node

console.log('Welcome to GitHub invitation');

const args = process.argv.slice(2);
if (args.length) {
  console.log('invite with ...');
  console.log(args);
}