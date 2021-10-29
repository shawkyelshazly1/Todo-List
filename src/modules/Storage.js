import Note from "./Note";
import NotesList from "./NotesList";
import Project from "./Project";
import ProjectsList from "./ProjectsList";
import Task from "./Task";

export default class Storage {
  static saveNotesList(data) {
    localStorage.setItem("notesList", JSON.stringify(data));
  }

  static saveProjectsList(data) {
    localStorage.setItem("projectsList", JSON.stringify(data));
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

  static getProjectsList() {
    let projectsList = Object.assign(
      new ProjectsList(),
      JSON.parse(localStorage.getItem("projectsList"))
    );

    projectsList.setProjects(
      projectsList
        .getProjects()
        .map((project) => Object.assign(new Project(), project))
    );

    projectsList
      .getProjects()
      .forEach((project) =>
        project.setTasks(
          project.getTasks().map((task) => Object.assign(new Task(), task))
        )
      );

    return projectsList;
  }

  static addNote(newNote) {
    let notesList = Storage.getNotesList();
    notesList.addNote(newNote);
    Storage.saveNotesList(notesList);
  }

  static addProject(newProject) {
    let projectsList = Storage.getProjectsList();
    projectsList.addProject(newProject);
    Storage.saveProjectsList(projectsList);
  }

  static loadNote(id) {
    let notesList = Storage.getNotesList();
    return notesList.getNote(id);
  }

  static loadProject(id) {
    let projectsList = Storage.getProjectsList();
    return projectsList.getProject(id);
  }

  static updateNote(title, content, id) {
    let notesList = Storage.getNotesList();
    notesList.getNote(id).setTitle(title);
    notesList.getNote(id).setContent(content);
    Storage.saveNotesList(notesList);
  }
}
