import Note from "../modules/Note";
import Storage from "../modules/Storage";
import NoteComponent from "./note";
import ProjectComponent from "./projectComponent";

function MainComponent(view) {
  let container = document.createElement("div");
  container.classList.add("main");

  loadView(view).components.forEach((component) => {
    container.appendChild(component);
  });

  return container;
}

function loadView(view) {
  let components = [];

  let title = document.createElement("h1");
  title.textContent = `${view}`;

  components.push(title);

  switch (view) {
    case "Tasks":
      components.push(loadTasksView());
      break;
    case "Notes":
      components.push(loadNotesView());
      break;
  }

  return { components };
}

function loadNotesView() {
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

  return container;
}

function loadTasksView() {
  let container = document.createElement("div");
  container.classList.add("lists_container");

  Storage.getProjectsList()
    .getProjects()
    .forEach((project) => {
      container.appendChild(ProjectComponent(project));
    });

  return container;
}

export { MainComponent };
