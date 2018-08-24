console.log('starting file');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;

//const command = process.argv[2];
const command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        notes.notesData(note);
    } else {
        console.log("Note Already exist");
    }
} 
else if (command === 'list') {
    notes.allNote();
} 
else if (command === 'read') {
    var note = notes.readNote(argv.title);
    if(note) {
        notes.notesData(note);
    } else {
        console.log("Note Doesn't exist");
    }
} 
else if (command === 'remove') {
    var note = notes.removeNote(argv.title);
    console.log(note ? "Note Was Removed" : "Note Not Recognized" );
} 
else {
    console.log('Command not recognized');
}

/*
    console.log(_.isString(true));
    console.log(_.isString("Jainish"));

    const filteredArray = _.uniq(['shreyal']);
    console.log(filteredArray);

    const res = notes.addNote();
    console.log(res);

    First Method.
    fs.appendFile('demo.txt','Hello World !!!',function(err){
    if(err)
    {
        console.log("Error Occurured");
    }
    });

    user = os.userInfo();
    console.log(user);

    fs.appendFileSync('demo.txt','Hello '+user.username+'!!');
    fs.appendFileSync('demo.txt',`Hello ${user.username} ! You are ${notes.age} !`);

    const addition = notes.addNumber('jainish','patel');
    console.log(addition);
    console.log('Result is : ',notes.addNumber(10,20));


*/

