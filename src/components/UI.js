import DockComponent from "./dock";
import { MainComponent } from "./mainComponent";

export default class UI {
  static loadHOmePage() {
    this.initPageLayout();
  }

  static initPageLayout() {
    let container = document.querySelector(".container");

    container.appendChild(DockComponent());
    container.appendChild(MainComponent());
  }
}




