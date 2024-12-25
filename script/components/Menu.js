import Component from "../classes/Component";
import GSAP, { Power2 } from 'gsap'

export default class Menu extends Component {
    constructor() {
        super({
            element: '.menu',
            elements: {
                menuToggle: document.querySelector('.top-nav__menu-toggle'),
                menuToggleHide: document.querySelector('.menu__top-nav__menu-toggle')
            }
        })
        console.log(this.elements)
        this.menuShowing = false
        this.createMenuAnimation()
        this.addEventListeners()

    }

    createMenuAnimation() {
        this.menuAnimation = GSAP.timeline({ paused: true })
        this.menuAnimation.set('.menu__nav-item', {
            y: '12.5rem',
            skewY: 10
        })
        this.menuAnimation.to(this.element, {
            duration: 1.1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power4.inOut",
        })
        this.menuAnimation.to('.menu__nav-item', {
            y: 0,
            duration: 1,
            stagger: 0.08,
            ease: "power4.inOut",
            delay: -1.1,
            skewY: 0,
            opacity: 1
        })
        this.menuAnimation.to('.menu__showreel', {
            opacity: 1,
            scale: 1,
            delay: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96]
        }, "<")
        this.menuAnimation.fromTo('.menu__contact-info__link', {
            // skewY: 10,
            y: '2rem'
        }, {
            opacity: 1,
            skewY: 0,
            y: 0,
            stagger: 0.1,
            duration: 0.3,

        }, "-=0.5")
        this.menuAnimation.fromTo('.menu__social-link__inner', {
            // skewY: 10,
            y: '2rem'
        }, {
            opacity: 1,
            skewY: 0,
            y: 0,
            stagger: 0.1,
            duration: 0.3,
        }, "-=0.7")
        this.menuAnimation.set('.menu__social-link', {
            overflow: 'unset'
        })
    }

    addEventListeners() {
        this.elements.menuToggle.addEventListener('click', () => {
            this.menuAnimation.play()
        })
        this.elements.menuToggleHide.addEventListener('click', () => {
            this.menuAnimation.reverse()
        })
    }
}