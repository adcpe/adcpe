#!/usr/bin/env node

'use strict'

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import boxen from 'boxen'
import chalk from 'chalk'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const data = {
  name: chalk.yellow.bold('Andrés Del Carpio'),
  handle: chalk.yellow.bold('@adcpe'),
  email: chalk.cyan('adc@adc.pe'),
  website: chalk.cyan('https://adc.pe'),
  github: chalk.cyan('https://github.com/adcpe/'),
  gitlab: chalk.cyan('https://gitlab.com/adcpe/'),
  lastfm: chalk.cyan('https://www.last.fm/user/adc39'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/adcpe/'),
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
  '',
  '',
  data.blurb[0],
  data.blurb[1]
].join('\n')

const options = {
  float: 'center',
  borderStyle: 'double',
  padding: 2
}

fs.writeFileSync(path.join(__dirname, './bin/output'), chalk.white(boxen(output, options)))
