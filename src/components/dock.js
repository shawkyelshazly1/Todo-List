import Note from "../modules/Note";
import Project from "../modules/Project";
import Storage from "../modules/Storage";
import NoteComponent from "./note";
import ProjectComponent from "./projectComponent";

export default function DockComponent() {
  let dockContainer = document.createElement("div");
  dockContainer.classList.add("dock");

  let title = document.createElement("h3");
  title.classList.add("title");
  title.textContent = `Do!t`;

  let addBtn = document.createElement("button");
  addBtn.classList.add("add_new");
  addBtn.innerHTML = `<i class="fas fa-plus"></i>`;

  let colorsContainer = document.createElement("div");
  colorsContainer.classList.add("colors");

  let redSpan = document.createElement("span");
  redSpan.classList.add("color_btn", "color_red");
  let blueSpan = document.createElement("span");
  blueSpan.classList.add("color_btn", "color_blue");
  let yellowSpan = document.createElement("span");
  yellowSpan.classList.add("color_btn", "color_yellow");
  let purpleSpan = document.createElement("span");
  purpleSpan.classList.add("color_btn", "color_purple");
  let greenSpan = document.createElement("span");
  greenSpan.classList.add("color_btn", "color_green");

  addBtn.addEventListener("click", () => {
    colorsContainer.classList.toggle("open");
  });

  let colors = [redSpan, blueSpan, yellowSpan, purpleSpan, greenSpan];

  colors.forEach((color) =>
    color.addEventListener("click", (e) => {
      colorsContainer.classList.toggle("open");
      if (document.querySelector(".tasks_btn").classList.contains("active")) {
        let newProject = new Project(
          "New Project",
          e.target.classList[1].split("_")[1]
        );
        Storage.addProject(newProject);
        document
          .querySelector(".lists_container")
          .appendChild(ProjectComponent(newProject));
        document.querySelector(".lists_container").scrollBy({
          top: 0,
          left: 9999,
          behavior: "smooth",
        });
      } else if (
        document.querySelector(".notes_btn").classList.contains("active")
      ) {
        let note = new Note("", "", e.target.classList[1].split("_")[1]);
        Storage.addNote(note);
        document.querySelector(".notes_container").prepend(NoteComponent(note));
      }
    })
  );

  colorsContainer.appendChild(redSpan);
  colorsContainer.appendChild(blueSpan);
  colorsContainer.appendChild(yellowSpan);
  colorsContainer.appendChild(purpleSpan);
  colorsContainer.appendChild(greenSpan);

  let middleSectionContainer = document.createElement("div");
  middleSectionContainer.classList.add("middle_section");

  middleSectionContainer.innerHTML = `<i class="fas fa-tasks tasks_btn active"></i>
  <i class="fas fa-sticky-note notes_btn"></i>`;

  let bottomSectionContainer = document.createElement("div");
  bottomSectionContainer.classList.add("bottom_section");

  bottomSectionContainer.innerHTML = `<i class="fas fa-calendar-alt calendar_btn"></i>
  <i class="fas fa-question about_btn"></i>`;

  dockContainer.appendChild(title);
  dockContainer.appendChild(addBtn);
  dockContainer.appendChild(colorsContainer);
  dockContainer.appendChild(middleSectionContainer);
  dockContainer.appendChild(bottomSectionContainer);

  return dockContainer;
}
