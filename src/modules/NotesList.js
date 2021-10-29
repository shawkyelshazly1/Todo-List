export default class NotesList {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  getNote(id) {
    return this.notes.find((note) => note.getId() === id);
  }

  setNotes(notes) {
    this.notes = notes;
  }

  addNote(newNote) {
    this.notes.unshift(newNote);
  }

  deleteNote(id) {
    this.notes = this.notes.filter((note) => note.getId() !== id);
  }
}
