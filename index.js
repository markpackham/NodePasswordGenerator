const program = require("commander");
const chalk = require("chalk");
const log = console.log;

program.version("1.0.0").description("Password Generator");

// 8 is set as a default length
program
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "save password to passwords.txt")
  .option("-nn, --no-numbers", "forbid numbers")
  .option("-ns, --no-symbols", "forbid symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// Output generated password
log(generatedPassword);
