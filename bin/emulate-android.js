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

// Check for existing Android app
if (!files.directoryExists('apps/android')) {
  console.log(chalk.red('Can\' find an Android App! You need to add an Android app to the Project.'));
  console.log('Try running `yarn create-app:android`');
  process.exit();
}

const run = async () => {
  const settings = await avd.askToSelectEmulator();
  avd.startEmulator(settings.avdName);
};

run();
