const fs = require("fs");

//get the notes
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

//save the notes
const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

//add the new note
const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note?.title === title);
  debugger;
  if (!duplicateNote) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log("note added!");
  } else console.log("title already taken");
};

//remove note
const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  if (notes.length > filteredNotes.length)
    console.log("Note removed successfully!");
  else console.log("Note not found!");
};

//list note
const listNotes = () => {
  const notes = loadNotes();
  if (!notes.length) console.log("You don't have any notes.");
  else {
    console.log("Your notes");
    notes.forEach((note) => {
      console.log(note?.title);
    });
  }
};

//get single note or read note
const getNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => note.title === title);
  if (noteToRead) {
    console.log(noteToRead?.title);
    console.log(noteToRead?.body);
  } else console.log("Note not found with given title!");
};

module.exports = { addNote, removeNote, listNotes, getNote };
