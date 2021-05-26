// const note1 = require('./not.js')
// const name = require('./not.js')

// const show = name('Your notes...')
// console.log(show)


//----class 2 -----//
// const getNotes = require('./not.js')

// const msg = getNotes()
// console.log(msg)


//---class 3 ----//

// const validator = require('validator')

// console.log(validator.isEmail('sharan.xworkz@gmail.com'))

// console.log(validator.isURL('https://mead.io'))

//--example 2

const chalk = require('chalk')
//console.log(chalk.green('Success'))

const greenMsg = chalk.green.inverse.bold('Success')
console.log(greenMsg)