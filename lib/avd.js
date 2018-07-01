const inquirer = require("inquirer");
const exec = require('./exec');

const emulatorCommands = append => `~/Library/Android/sdk/emulator/emulator ${append}`;

module.exports = {
  askToSelectEmulator: async () => {
    const avds = await exec.run(emulatorCommands('-list-avds'));

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
    exec.run(emulatorCommands(`@${avdName}`));
  }
};
