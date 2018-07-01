const inquirer = require("inquirer");
const exec = require('./exec');

module.exports = {
  askToSelectEmulator: async () => {
    const avds = await exec.run('~/Library/Android/sdk/tools/emulator -list-avds');

    const questions = [
      {
        type: "list",
        name: "avdName",
        message: "Select AVD:",
        choices: avds.split('\n'),
        default: avds.split('\n')[0],
      }
    ];
    return inquirer.prompt(questions);
  },

  startEmulator: (avdName) => {
    exec.run(`~/Library/Android/sdk/tools/emulator @${avdName}`)
  }
};
