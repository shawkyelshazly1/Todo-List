import { v4 as uuidv4 } from "uuid";

export default class Note {
  constructor(title = "", content = "", color = "blue") {
    this.title = title;
    this.content = content;
    this.id = uuidv4();
    this.color = color;
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  getTitle() {
    return this.title;
  }

  setContent(newContent) {
    this.content = newContent;
  }

  getContent() {
    return this.content;
  }

  getId() {
    return this.id;
  }

  getColor() {
    switch (this.color) {
      case "blue":
        return "note_blue";
      case "red":
        return "note_red";
      case "yellow":
        return "note_yellow";
      case "purple":
        return "note_purple";
      case "green":
        return "note_green";
    }
  }
}
