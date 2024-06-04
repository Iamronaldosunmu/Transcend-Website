import Component from "../classes/Component";
import GSAP from 'gsap'

export default class Hero extends Component {
    constructor() {
        super({
            element: '.hero',
            elements: {
                heroBg: '.hero__bg',
                subtitle: '.hero__text__subtitle',
                subtext: '.hero__text__subtext',
                topNav: document.querySelector('.top-nav'),
                title: '.hero__text__title',
                subtextLines: '.hero__text__subtext__line'
            }
        })
        this.elements.titleSpans = this.elements.title.querySelectorAll('span')
    }

    showHero() {
        const twinkleStars = () => {
            const twinkle = GSAP.timeline({ repeat: -1 })
            twinkle.to(this.elements.heroBg, {
                scale: 0.85, duration: 10, ease: 'linear'
            })
            twinkle.to(this.elements.heroBg, {
                scale: 1, duration: 10, ease: 'linear'
            })
        }
        this.fadeHeroOut = GSAP.timeline({
            scrollTrigger: {
                trigger: '.hero',
                start: 'top',
                end: "+=500vh",
                scrub: 0,
                markers: true
            }
        })
        this.fadeHeroOut.to('.hero', {
            delay: 5, 
            duration: 1, 
            opacity: 0, 
        })
        this.animateHeroIn = GSAP.timeline({ delay: 0.1 })
        this.animateHeroIn.fromTo(this.elements.topNav, {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            ease: [0.43, 0.13, 0.23, 0.96]
        })
        this.animateHeroIn.fromTo(this.elements.heroBg, {
            opacity: 0,
        }, {
            opacity: 1, duration: 1
        }, "-=0.5")
        this.animateHeroIn.fromTo(this.elements.titleSpans, {
            y: '7.4rem',
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96]
        }, "-=1")
        this.animateHeroIn.fromTo([this.elements.subtitle.querySelector('img'), this.elements.subtitle.querySelector('span')], {
            y: '1.8rem'
        }, {
            y: 0,
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96]
        }, "-=1")
        this.animateHeroIn.fromTo(this.elements.subtext, {
            y: '4.8rem',
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            // stagger: 0.15,
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96]
        }, "-=1")
        // this.animateHeroIn.fromTo(this.elements.subtextLines, {
        //     y: '2.4rem',
        //     opacity: 0
        // }, {
        //     y: 0,
        //     opacity: 1,
        //     stagger: 0.15,
        //     duration: 0.6,
        //     ease: [0.43, 0.13, 0.23, 0.96]
        // }, "-=1")
        this.animateHeroIn.fromTo(this.elements.heroBg, {
            scale: 0.85,
        }, {
            scale: 1, duration: 8,
            onComplete: twinkleStars
        }, "-=0.5")
    }
}