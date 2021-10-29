import Note from "../modules/Note";
import Storage from "../modules/Storage";
import NoteComponent from "./note";

function MainComponent() {
  let container = document.createElement("div");
  container.classList.add("main");

  loadView().components.forEach((component) => {
    container.appendChild(component);
  });

  return container;
}

function loadView() {
  let components = [];

  let title = document.createElement("h1");
  title.textContent = `Tasks`;

  let container = document.createElement("div");
  container.classList.add("items_container");

  let notesContainer = document.createElement("div");
  notesContainer.classList.add("notes_container");

  let notes = Storage.getNotesList().getNotes();

  if (notes.length) {
    notesContainer.textContent = ``;
    notes.forEach((note) => {
      notesContainer.appendChild(NoteComponent(note));
    });
  } else {
    let firstNote = new Note();
    Storage.addNote(firstNote);
    notesContainer.appendChild(NoteComponent(firstNote));
  }

  container.appendChild(notesContainer);

  components = [title, container];

  return { components };
}

export { MainComponent };
