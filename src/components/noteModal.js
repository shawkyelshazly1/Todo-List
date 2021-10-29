import Storage from "../modules/Storage";

function showNoteModal(note) {
  let modal = document.createElement("div");
  modal.classList.add("modal");
  modal.setAttribute("id", "note_modal");

  let modalContent = document.createElement("div");
  modalContent.classList.add("modal_content");

  let noteTitle = document.createElement("h1");
  noteTitle.classList.add("note_modal_title");
  noteTitle.setAttribute("placeholder", "Title...");
  noteTitle.setAttribute("contenteditable", "true");

  let content = document.createElement("p");
  content.classList.add("note_modal_content");
  content.setAttribute("placeholder", "Content...");
  content.setAttribute("contenteditable", "true");

  noteTitle.textContent = note["title"];
  content.textContent = note["content"];

  modalContent.appendChild(noteTitle);
  modalContent.appendChild(content);

  modal.appendChild(modalContent);

  modal.addEventListener("click", (e) => {
    if (e.path[0].classList.contains("modal")) {
      let modalC = document.querySelector("#note_modal");
      updateNote(noteTitle.textContent, content.textContent, note["id"]);
      document.body.removeChild(modalC);
    }
  });

  window.addEventListener("keydown", (e) => {
    let modalC = document.querySelector("#note_modal");
    if (modalC && e.key == "Escape") {
      updateNote(noteTitle.textContent, content.textContent, note["id"]);
      document.body.removeChild(modalC);
    }
  });

  document.body.appendChild(modal);
}

function updateNote(title, content, id) {
  Storage.updateNote(title, content, id);
  document.querySelector(`[data-note-id="${id}"]`).childNodes[0].textContent =
    title;
  document.querySelector(`[data-note-id="${id}"]`).childNodes[1].textContent =
    content;
}

export { showNoteModal };
