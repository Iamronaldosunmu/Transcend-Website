import Cursor from "./classes/Cursor"
import Hero from "./components/Hero"
import Preloader from "./components/Preloader"
import ParticleSceneApp from './hero-particle-scene/app';

window.app = new ParticleSceneApp();

class App {
  constructor() {
    this.createPreloader()
    this.hero = new Hero()
  }

  createPreloader() {
    this.preloader = new Preloader()
    this.preloader.once('completed', this.onPreloaded.bind(this))
  }

  showHero() {
    this.hero.showHero()
  }

  onPreloaded() {
    this.preloader.destroy()
    this.showHero()
    window.app.init();
    this.cursor = new Cursor(document.querySelector('.cursor'))
  }
}

new App()