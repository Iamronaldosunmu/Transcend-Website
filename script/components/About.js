import { ScrollTrigger } from "gsap/ScrollTrigger";
import Component from "../classes/Component";
import GSAP from 'gsap';
GSAP.registerPlugin(ScrollTrigger)

export default class About extends Component {
    constructor() {
        super({
            element: '.about',
            elements: {
                aboutText: document.querySelector('.about__text'),
                aboutDetails: document.querySelectorAll('.about__details'),
                aboutDetailsTextItems: document.querySelectorAll('.about__details__text'),
                aboutDetailsImageItems: document.querySelectorAll('.about__details__image')
            }
        })

        this.elements.aboutTextSpans = this.elements.aboutText.querySelectorAll('span')
        this.elements.aboutLogoImages = this.element.querySelectorAll('img.logo')
        this.elements.aboutLogoSvg = this.element.querySelector('svg.logo')
        this.elements.aboutLogosPaths = this.element.querySelectorAll('svg path')
        console.log(this.elements)
        this.startStory()
        window.addEventListener('resize', () => {
            ScrollTrigger.refresh()
            console.log('the screen was refreshed')
        })
    }

    startStory() {
        this.animateAboutSection = GSAP.timeline({
            scrollTrigger: {
                trigger: '.about',
                start: 'top top',
                end: () => "+=" + (4 * window.innerHeight),
                scrub: 1.2,
                markers: true
            }
        })
        this.animateAboutSection.to(document.querySelector('.top-nav__section-status'), {
            opacity: 1,
            duration: 0.1
        })
        this.animateAboutSection.fromTo(this.elements.aboutText, {
            opacity: 0
        },
            { opacity: 1, duration: 1 }, "<")
        this.animateAboutSection.to(this.elements.aboutTextSpans, {
            color: function (index, target, targets) {
                console.log(target.classList.value == 'bold')
                return target.classList.value == 'bold' ? '#5E5F6B' : '#E6E6E6'
            },
            duration: 0.3,
            stagger: 0.4
        })
        this.animateAboutSection.to(this.elements.aboutText, {
            opacity: 0,
            duration: 2.5
        })

        this.animateAboutSection.fromTo(this.elements.aboutLogoImages, {
            opacity: 0,
            y: 200
        }, {
            opacity: 0,
            y: 0,
            duration: 5
        }, "<")
        this.animateAboutSection.to(this.elements.aboutLogoSvg, {
            opacity: 1,
            y: '-50%',
            duration: 5
        }, "<")
        this.animateAboutSection.to(this.elements.aboutLogoImages, {
            opacity: 1,
            duration: 0.1
        })
        this.animateAboutSection.to(this.elements.aboutLogosPaths, {
            fill: 'transparent'
        })
        this.animateAboutSection.to(this.elements.aboutLogoImages, {
            scale: 8,
            ease: 'power3.in',
            stagger: 0.1,
            duration: 5,
            y: '-60%',
            opacity: 0
        })
        this.animateAboutSection.to(this.elements.aboutLogoSvg, {
            ease: 'power3.in',
            duration: 0.5,
            opacity: 0
        }, "<")
        this.animateAboutSection.to(this.elements.aboutDetailsTextItems[0], {
            opacity: 1,
            duration: 1,
            scale: 1,
            delay: 0.2
        })
        this.animateAboutSection.to(this.elements.aboutDetailsImageItems[0], {
            opacity: 1,
            duration: 1,
            scale: 1
        }, "<")
        this.animateAboutSection.to(this.elements.aboutDetailsTextItems[0], {
            opacity: 0,
            duration: 1,
            delay: 1,
            scale: 1.05
        })
        this.animateAboutSection.to(this.elements.aboutDetailsImageItems[0], {
            opacity: 0,
            duration: 1,
            scale: 0.95
        }, "<")
        this.animateAboutSection.to(this.elements.aboutDetailsTextItems[1], {
            opacity: 1,
            duration: 1,
            scale: 1
        }, "-=0.2")
        this.animateAboutSection.to(this.elements.aboutDetailsImageItems[1], {
            opacity: 1,
            duration: 1,
            scale: 1
        }, "<")
        this.animateAboutSection.to(this.elements.aboutDetailsTextItems[1], {
            opacity: 0,
            duration: 1,
            delay: 1,
            scale: 1.05
        })
        this.animateAboutSection.to(this.elements.aboutDetailsImageItems[1], {
            opacity: 0,
            duration: 1,
            scale: 0.95
        }, "<")
        this.animateAboutSection.to(this.elements.aboutDetailsTextItems[2], {
            opacity: 1,
            duration: 1,
            scale: 1
        }, "-=0.2")
        this.animateAboutSection.to(this.elements.aboutDetailsImageItems[2], {
            opacity: 1,
            duration: 1,
            scale: 1
        }, "<")
        // this.animateAboutSection.to(this.elements.aboutDetailsTextItems[2], {
        //     opacity: 0,
        //     duration: 1,
        //     delay: 1,
        //     scale: 1.05
        // })
        // this.animateAboutSection.to(this.elements.aboutDetailsImageItems[2], {
        //     opacity: 0,
        //     duration: 1,
        //     scale: 0.95
        // }, "<")
        this.animateAboutSection.to(document.querySelector('.top-nav__section-status'), {
            opacity: 0,
            duration: 0.1
        })
        // this.animateAboutSection.to(this.elements.aboutDetails[0], {
        //     opacity: 0,
        //     delay: 0.5,
        //     duration: 0.1,
        //     stagger: 0.6
        // }, "<")

    }
}