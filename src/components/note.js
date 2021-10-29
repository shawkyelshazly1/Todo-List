import Storage from "../modules/Storage";
import { showNoteModal } from "./noteModal";

export default function NoteComponent(note) {
  let container = document.createElement("div");
  container.classList.add("note");
  container.classList.add(note.getColor());
  container.setAttribute("data-note-id", note.getId());

  let header = document.createElement("h1");
  header.classList.add("note_title");

  if (note.getTitle() === "") {
    header.setAttribute("placeholder", "Title...");
  } else {
    header.textContent = note.getTitle();
  }

  let content = document.createElement("p");
  content.classList.add("note_content");

  if (note.getContent() === "") {
    content.setAttribute("placeholder", "Content...");
  } else {
    content.textContent = note.getContent();
  }

  container.appendChild(header);
  container.appendChild(content);

  container.addEventListener("click", (e) => {
    let noteToDisplay = Storage.loadNote(e.target.dataset.noteId);
    showNoteModal(noteToDisplay);
  });

  return container;
}
