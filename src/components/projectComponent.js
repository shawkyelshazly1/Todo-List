import Storage from "../modules/Storage";
import Task from "../modules/Task";
import TaskComponent from "./taskComponent";

export default function ProjectComponent(project) {
  let container = document.createElement("div");
  container.classList.add("tasks_container", project.getColor());

  let header = document.createElement("h3");
  header.classList.add("container_title");
  header.textContent = `${project.getTitle()}`;

  let tasksContainer = document.createElement("div");
  tasksContainer.classList.add("tasks");

  project.getTasks().forEach((task) => {
    tasksContainer.appendChild(TaskComponent(task));
  });

  let newTaskBtn = document.createElement("button");
  newTaskBtn.classList.add("new_task_btn");
  newTaskBtn.textContent = `+`;

  newTaskBtn.addEventListener("click", (e) => {
    addTaskContainer.classList.toggle("show_container");
    newTaskBtn.classList.toggle("hide_btn");
  });

  let inputField = document.createElement("input");
  inputField.setAttribute("type", "text");
  inputField.classList.add("add_task_field");
  inputField.setAttribute("placeholder", "Enter Task Name");

  let addBtn = document.createElement("button");
  addBtn.classList.add("add_task_btn");
  addBtn.textContent = `Add`;

  addBtn.addEventListener("click", (e) => {
    if (inputField.value.length == 0) {
      inputField.style.border = "1px solid red";
    } else {
      Storage.addNewTask(new Task(inputField.value), project);
      tasksContainer.appendChild(TaskComponent(new Task(inputField.value)));
      tasksContainer.scrollBy({
        top: 99999,
        left: 0,
        behavior: "smooth",
      });
      addTaskContainer.classList.toggle("show_container");
      newTaskBtn.classList.toggle("hide_btn");
      inputField.style.border = "none";
      inputField.value = ``;
    }
  });

  let addTaskContainer = document.createElement("div");
  addTaskContainer.classList.add("add_task_container");

  addTaskContainer.appendChild(inputField);
  addTaskContainer.appendChild(addBtn);

  container.appendChild(header);
  container.appendChild(tasksContainer);
  container.appendChild(newTaskBtn);
  container.appendChild(addTaskContainer);
  return container;
}
