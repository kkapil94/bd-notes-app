const yargs = require("yargs");
const { addNote, removeNote, listNotes, getNote } = require("./notes.js");

// adding the notes
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function ({ title, body }) {
    addNote(title, body);
  },
});

// removing the notes
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Provide the note title.",
      demandOption: true,
      type: "string",
    },
  },
  handler: function ({ title }) {
    removeNote(title);
  },
});

// listing the notes
yargs.command({
  command: "list",
  describe: "list the notes",
  handler: () => {
    listNotes();
  },
});

// reading the notes
yargs.command({
  command: "read",
  describe: "read the notes",
  builder: {
    title: {
      describe: "Provide the title that you want to raed.",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title }) => {
    getNote(title);
  },
});

yargs.parse();
