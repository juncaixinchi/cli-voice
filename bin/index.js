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
const isEnglishWord = /[a-zA-Z0-9]+/
if (!word) {
  program.outputHelp()
} else if (isEnglishWord.test(word)) {
  voice(word)
} else {
  console.error('\nError: Please input a valid English word!')
}
