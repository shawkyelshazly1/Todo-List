import TaskComponent from "./taskComponent";

export default function ProjectComponent(project) {
  let container = document.createElement("div");
  container.classList.add("tasks_container");

  let header = document.createElement("h3");
  header.classList.add("container_title");
  header.textContent = `${project.getTitle()}`;

  let tasksContainer = document.createElement("div");
  tasksContainer.classList.add("tasks");

  project.getTasks().forEach((task) => {
    tasksContainer.appendChild(TaskComponent(task));
  });

  container.appendChild(header);
  container.appendChild(tasksContainer);

  return container;
}
