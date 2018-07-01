const inquirer = require("inquirer");
const exec = require('./exec');

const gradleCommand = append => `./gradlew ${append}`;
const cwd = 'apps/android';

module.exports = {
  assembleDebug: async () => {
    const assembleDebug = await exec.run(gradleCommand('assembleDebug'), cwd);
  },
  
  installDebug: async () => {
    const assembleDebug = await exec.run(gradleCommand('installDebug'), cwd);
  },
};
