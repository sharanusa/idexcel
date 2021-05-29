const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

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
    handler(argv){
       notes.addNote(argv.title,argv.body)
    }
})

// creating remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder: {
        title: { 
            describe : 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        // console.log('removing a note')
        notes.removeNote(argv.title)
    }
})

// creating list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler(){
        notes.listNotes()
    }
})

// creating help command
yargs.command({
    command: 'read',
    describe: 'Read your notes',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
       notes.readNote(argv.title)
    }
})

yargs.parse()