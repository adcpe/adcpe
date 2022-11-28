'use strict'

import boxen from 'boxen'
import chalk from 'chalk'

const data = {
  name: chalk.yellow.bold('Andrés Del Carpio'),
  handle: chalk.yellow.bold('@adcpe'),
  email: chalk.magenta('adc@adc.pe'),
  website: chalk.magenta('https://adc.pe'),
  github: chalk.magenta('https://github.com/adcpe/'),
  gitlab: chalk.magenta('https://gitlab.com/adcpe/'),
  lastfm: chalk.magenta('https://www.last.fm/user/adcpe'),
  linkedin: chalk.magenta('https://www.linkedin.com/in/adcpe/'),
  blurb: [
    chalk.green('I enjoy learning and building things.'),
    chalk.green('I (try to) write readable and reusable code.')
  ]
}

const output = [
  `                      ${data.email}`,
  `                      ${data.website}`,
  `${data.name}     ${data.github}`,
  `           ${data.handle}     ${data.gitlab}`,
  `                      ${data.lastfm}`,
  `                      ${data.linkedin}`,
  ``,
  ``,
  data.blurb[0],
  data.blurb[1]
].join('\n')

const options = {
  float: 'center',
  borderStyle: 'double',
  padding: 2
}

console.clear()
console.log('')
console.log('')
console.log(boxen(output, options))
console.log('')
console.log('')
