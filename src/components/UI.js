import Project from "../modules/Project";
import ProjectsList from "../modules/ProjectsList";
import Storage from "../modules/Storage";
import Task from "../modules/Task";
import DockComponent from "./dock";
import { MainComponent } from "./mainComponent";

export default class UI {
  static loadHOmePage() {
    this.initPageLayout();
  }

  static initPageLayout() {
    let container = document.querySelector(".container");

    container.appendChild(DockComponent());
    container.appendChild(MainComponent("Tasks"));

    document.querySelector(".tasks_btn").addEventListener("click", (e) => {
      if (!e.target.classList.contains("active")) {
        document.querySelector(".main").remove();
        container.appendChild(MainComponent("Tasks"));
        e.target.classList.toggle("active");
        document.querySelector(".notes_btn").classList.toggle("active");
      }
    });

    document.querySelector(".notes_btn").addEventListener("click", (e) => {
      if (!e.target.classList.contains("active")) {
        document.querySelector(".main").remove();
        container.appendChild(MainComponent("Notes"));
        e.target.classList.toggle("active");
        document.querySelector(".tasks_btn").classList.toggle("active");
      }
    });
  }
}
