#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const avd = require("../lib/avd");

clear();

// Say hello
console.log(
  chalk.yellow(
    figlet.textSync('Vue Morph', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  const settings = await avd.askToSelectEmulator();
  avd.startEmulator(settings.avdName);
};

run();
