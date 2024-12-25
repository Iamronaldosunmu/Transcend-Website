import Menu from "./components/Menu";
import GSAP from 'gsap'
import Cursor from "./classes/Cursor";

class App {
  constructor() {
      this.menu = new Menu()
      this.cursor = new Cursor(document.querySelector('.cursor'))
      GSAP.set('.top-nav', {
        opacity: 1
    })
  }

}

new App()