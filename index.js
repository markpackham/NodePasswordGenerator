const program = require("commander");
const chalk = require("chalk");
const log = console.log;

program.version("1.0.0").description("Password Generator");

program.option("-l, --length <number>", "length of password").parse();

log(program.opts());
