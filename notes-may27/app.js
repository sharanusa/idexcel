const chalk = require('chalk')
const { demandOption } = require('yargs')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// console.log(chalk.green('success'))
// console.log(process.argv[2])

// console.log(process.argv) -->> node app.js add--title="This is my Title"

// const command = process.argv[2]
// if(command === 'add'){
//     console.log('Adding note')
// }else if(command === 'remove'){
//     console.log('Removing note')
// }

//yargs

//creating custom version
yargs.version('1.1.0')

// creating add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe:'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler : function(argv){
        // console.log('Adding a new note',argv)
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

// creating remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler: function(){
        console.log('removing a note')
    }
})

// creating list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function(){
        console.log('Listing all notes')
    }
})

// creating help command
yargs.command({
    command: 'read',
    describe: 'Read your notes',
    handler: function(){
        console.log('Reading all notes')
    }
})

console.log(yargs.argv)