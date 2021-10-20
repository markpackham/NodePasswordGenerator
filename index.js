// To save a 20 charactler long password to a file with no symbols or numbers do
// node index.js -s -ns --length=20
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const log = console.log;
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");

program.version("1.0.0").description("Password Generator");

// 8 is set as a default length
program
  .option("--length <number>", "length of password", "8")
  .option("-s, --save", "save password to passwords.txt")
  .option("-nn, --no-numbers", "forbid numbers")
  .option("-ns, --no-symbols", "forbid symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// Save to file
if (save) {
  savePassword(generatedPassword);
}

// Copy password to clipboard
clipboardy.writeSync(generatedPassword);

// Output generated password
log(chalk.blue("Generated Password: ") + chalk.bold(generatedPassword));
log(chalk.yellow("Password copied to clipboard"));
