import { v4 as uuidv4 } from "uuid";
export default class Project {
  constructor(title, color = "blue") {
    this.title = title;
    this.id = uuidv4();
    this.tasks = [];
    this.color = color;
  }

  getTitle() {
    return this.title;
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  getId() {
    return this.id;
  }

  addTask(newTask) {
    this.tasks.push(newTask);
  }

  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.getId() !== id);
  }

  getTasks() {
    return this.tasks;
  }

  getColor() {
    switch (this.color) {
      case "blue":
        return "project_blue";
      case "red":
        return "project_red";
      case "yellow":
        return "project_yellow";
      case "purple":
        return "project_purple";
      case "green":
        return "project_green";
    }
  }
}
