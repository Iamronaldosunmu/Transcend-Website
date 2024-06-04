import Cursor from "./classes/Cursor"
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero"
import Menu from "./components/Menu";
import Preloader from "./components/Preloader"
// import ScrollAnimations from "./components/ScrollAnimations";
import ParticleSceneApp from './hero-particle-scene/app';
import Lenis from 'lenis'

window.app = new ParticleSceneApp();
const lenis = new Lenis()

lenis.on('scroll', (e) => {
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

class App {
  constructor() {
    this.createPreloader()
    this.hero = new Hero()
    this.about = new About()
    this.footer = new Footer()
    this.menu = new Menu()
    // this.scrollAnimations = new ScrollAnimations()
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
    // this.footer.observerFooter()
    this.footer.showLogoLetters()
  }
}

new App()