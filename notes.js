console.log('Starting Notes.js');
//console.log(module);

const fs = require('fs');
//module.exports.age = 25;

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }
    catch (e)
    { 
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// ADD Note Functionality. 
var addNote = (title, body) =>
{
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });
    
    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

// Remove Functionality.
var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => {
        return note.title !== title;
    });
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

// Read Functionality.
var readNote = (title) => {
    var notes = fetchNotes();
    var readNote = notes.filter((note) => {
        return note.title === title;
    });
    return readNote[0];
};

// Outputs Note Data.
var notesData = (note) => {
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body}`);
};

// Display All Notes.
var allNote = () => {
    var allNotes = fetchNotes();
    console.log(`Printing ${allNotes.length} Notes !`);
    allNotes.forEach(note => {
        console.log(`Title : ${note.title}`);
        console.log(`Body : ${note.body}`);
    });
};

module.exports = {
    addNote,
    removeNote,
    readNote,
    notesData,
    allNote
};

/*
    module.exports.addNumber = (a,b) => {
        return a+b;
    };
*/