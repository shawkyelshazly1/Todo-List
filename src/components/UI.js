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
    this.tasksScroll();
    document.querySelector(".tasks_btn").addEventListener("click", (e) => {
      if (!e.target.classList.contains("active")) {
        document.querySelector(".main").remove();
        container.appendChild(MainComponent("Tasks"));
        e.target.classList.toggle("active");
        document.querySelector(".notes_btn").classList.toggle("active");
        this.tasksScroll();
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

  static tasksScroll() {
    let slider = document.querySelector(".lists_container");
    let mouseDown = false;
    let startX, scrollLeft;

    let startDragging = (e) => {
      mouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    let stopDragging = (e) => {
      mouseDown = false;
    };

    slider.addEventListener("mousemove", (e) => {
      e.preventDefault();
      if (!mouseDown) {
        return;
      }

      let x = e.pageX - slider.offsetLeft;
      let scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    });

    slider.addEventListener("mousedown", startDragging, false);
    slider.addEventListener("mouseup", stopDragging, false);
    slider.addEventListener("mouseleave", stopDragging, false);
  }
}
