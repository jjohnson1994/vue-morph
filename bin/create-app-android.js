#!/usr/bin/env node

// https://github.com/sitepoint-editors/ginit

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const Spinner = require('cli-spinner').Spinner;

// const github = require('./lib/github');
// const repo = require('./lib/repo');
const inquirer = require('../lib/inquirer');
const files = require('../lib/files');

clear();

// Say hello
console.log(
  chalk.yellow(
    figlet.textSync('Vue Morph', { horizontalLayout: 'full' })
  )
);

// Check for existing Android app
if (files.directoryExists('apps/android')) {
  console.log(chalk.red('Android app already exists!'));
  process.exit();
}

const run = async () => {
  const settings = await inquirer.askNativeAppDetails();

  const spinner = new Spinner('%s Creating new Android project...');
  spinner.setSpinnerString('|/-\\');
  spinner.start();
}

run();
