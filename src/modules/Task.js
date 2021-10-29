import { v4 as uuidv4 } from "uuid";

export default class Task {
  constructor(title) {
    this.title = title;
    this.id = uuidv4();
  }

  getTitle() {
    return this.title;
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  getId() {
    return this.id;
  }
}
