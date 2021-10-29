import Note from "./Note";
import NotesList from "./NotesList";

export default class Storage {
  static saveNotesList(data) {
    localStorage.setItem("notesList", JSON.stringify(data));
  }

  static getNotesList() {
    let notesList = Object.assign(
      new NotesList(),
      JSON.parse(localStorage.getItem("notesList"))
    );
    notesList.setNotes(
      notesList.getNotes().map((note) => Object.assign(new Note(), note))
    );

    return notesList;
  }

  static addNote(newNote) {
    let notesList = Storage.getNotesList();
    notesList.addNote(newNote);
    Storage.saveNotesList(notesList);
  }

  static loadNote(id) {
    let notesList = Storage.getNotesList();
    return notesList.getNote(id);
  }

  static updateNote(title, content, id) {
    let notesList = Storage.getNotesList();
    notesList.getNote(id).setTitle(title);
    notesList.getNote(id).setContent(content);
    Storage.saveNotesList(notesList);
  }
}
