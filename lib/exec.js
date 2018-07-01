const { exec } = require("child_process");

module.exports = {
  run: (command, cwd) =>
    new Promise((resolve, reject) => {
      exec(command, { cwd }, (err, stdout, stderr) => {
        if (err) {
          return reject(err);
        }

        if (stdout) {
          return resolve(stdout);
        }

        if (stderr) {
          return reject(stderr);
        }
      });
    })
};
