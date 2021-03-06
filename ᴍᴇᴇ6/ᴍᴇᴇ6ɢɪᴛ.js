const git = require("simple-git")();
const chalk = require("chalk");
const exec = require("child_process").exec;

const gitPull = async () => {
  await git.fetch();
  var newCommits = await git.log(["main..origin/main"]);
  if (newCommits.total) {
    console.log(chalk.blueBright("๐กโฌฐ New Update pending, updating..."));
    await git.pull("origin", "KrakinzLab", (err, update) => {
      if (update && update.summary.changes) {
        if (update.files.includes("package.json")) {
          exec("npm install").stderr.pipe(process.stderr);
        }
        console.log(
          chalk.greenBright.bold(
            "๐กโฌฐ ๐๐๐๐ผ-๐จ๐ฝ๐ฑ๐ฎ๐๐ฒ๐ฑ โก๐๐๐๐โข ๐๐ถ๐๐ต ๐น๐ฎ๐๐ฒ๐๐ ๐ฐ๐ต๐ฎ๐ป๐ด๐ฒ๐."
          )
        );
      } else if (err) {
        console.log(
          chalk.redBright.bold(
            "โโฌฐ ๐๐ณ ๐ถ๐ ๐๐ฎ๐ ๐ฎ ๐๐๐ โก๐๐๐๐โข ๐๐ฝ๐ฑ๐ฎ๐๐ฒ ๐๐ต๐ฒ๐ป ๐ฃ๐น๐ฒ๐ฎ๐๐ฒ ๐ฟ๐ฒ๐ฑ๐ฒ๐ฝ๐น๐ผ๐ ๐๐ผ๐๐ฟ ๐ฏ๐ผ๐!"
          )
        );
      }
    });
  } else {
    console.log(
      chalk.greenBright.bold("๐กโฌฐ โก๐๐๐๐โข ๐ถ๐ ๐ฎ๐น๐ฟ๐ฒ๐ฎ๐ฑ๐ ๐ผ๐ป ๐น๐ฎ๐๐ฒ๐๐ ๐๐ฒ๐ฟ๐๐ถ๐ผ๐ป.")
    );
  }
};

module.exports = gitPull;
