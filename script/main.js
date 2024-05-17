import Preloader from "./components/Preloader"
class App {
  constructor() {
    this.createPreloader()
  }

  createPreloader() {
    this.preloader = new Preloader()
    this.preloader.once('completed', this.onPreloaded.bind(this))
    console.log('this was called')
  }

  showHero() {

  }

  onPreloaded() {
    this.preloader.destroy()
  }
}

new App()