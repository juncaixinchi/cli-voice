#!/usr/bin/env node

const program = require('commander')
const package = require('../package.json')
const voice = require('../lib/voice')

program
  .name('voice')
  .version(package.version)
  .usage("[word]")
  .parse(process.argv)

const word = program.args[0]
if (word) {
  voice(word)
} else {
  program.outputHelp()
}
