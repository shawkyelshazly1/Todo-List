export default function TaskComponent(task) {
  let taskContainer = document.createElement("div");
  taskContainer.classList.add("task");
  taskContainer.textContent = `${task.getTitle()}`;

  return taskContainer;
}
