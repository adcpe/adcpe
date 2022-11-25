import boxen from 'boxen'
import chalk from 'chalk'

const data = {
  name: {
    label: '         ',
    info: chalk.yellow.bold('Andrés Del Carpio'),
    handle: chalk.yellow.bold('adcpe'),
    separator: chalk.bold.dim(' / ')
  },
  website: {
    label: chalk.whiteBright(' Website:  '),
    info: chalk.cyan('https://adc.pe')
  },
  email: {
    label: chalk.whiteBright('   Email:  '),
    info: chalk.cyan('adc@adc.pe')
  },
  github: {
    label: chalk.whiteBright('  Github:  '),
    info: chalk.cyan('https://github.com/adcpe/')
  },
  gitlab: {
    label: chalk.whiteBright('  Gitlab:  '),
    info: chalk.cyan('https://gitlab.com/adcpe/')
  },
  linkedin: {
    label: chalk.whiteBright('Linkedin:  '),
    info: chalk.cyan('https://www.linkedin.com/in/adcpe/')
  },
  blurb: [
    chalk.green('I enjoy learning and building things.'),
    chalk.green('I (try to) write readable and reusable code.')
  ]
}
// w.l is the middle

const output = [
  `${data.name.label}${data.name.info}${data.name.separator}${data.name.handle}`,
  ``,
  `${data.website.label}${data.website.info}`,
  `${data.email.label}${data.email.info}`,
  `${data.github.label}${data.github.info}`,
  `${data.gitlab.label}${data.gitlab.info}`,
  `${data.linkedin.label}${data.linkedin.info}`,
  ``,
  data.blurb[0],
  data.blurb[1]
].join('\n')

const options = {
  float: 'center',
  borderStyle: 'double',
  // borderColor: '#034923',
  padding: 2.5
}

console.clear()
console.log(boxen(output, options))
