import { v4 as uuidv4 } from "uuid";
export default class Project {
  constructor(title) {
    this.title = title;
    this.id = uuidv4();
    this.tasks = [];
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
}
