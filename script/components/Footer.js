import Component from "../classes/Component";
import GSAP from 'gsap'

export default class Footer extends Component {
    constructor() {
        super({
            element: '.footer',
            elements: {
                footerLineSpans: document.querySelectorAll('.footer__text .line span')
            }
        })
        console.log(this.elements)
        this.elements.letters = this.element.querySelectorAll('svg')
    }
    showFooterText() {
        this.textrev = GSAP.timeline();

        this.textrev.from(this.elements.footerLineSpans, 1.8, {
            y: '12rem',
            ease: "power4.out",
            delay: 0.8,
            skewY: 10,
            stagger: {
                amount: 0.25,
            },
        });
    }

    showLogoLetters() {
        this.showLogoLetters = new GSAP.timeline({
            scrollTrigger: {
                trigger: '.footer',
                start: 'top center',
                end: () => "+=" + ((2 * window.innerHeight) - (window.innerHeight - 400)),
                scrub: 1.2,
                markers: true
            }
        })
        this.showLogoLetters.from(this.elements.footerLineSpans, 1.8, {
            y: '12rem',
            ease: "power4.out",
            delay: 0.2,
            skewY: 10,
            stagger: {
                amount: 0.2,
            },
        });
        this.showLogoLetters.fromTo(this.elements.letters, {
            y: '14rem',
            opacity: 0,
            duration: 0.3,
            stagger: 0.1,
            skewY: 10
        }, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.1,
            skewY: 0
        }, "-=1")
        this.showLogoLetters.fromTo('.footer__social-links a', {
            y: '3rem',
            skewY: -10,
        }, {

            y: 0,
            skewY: 0,
            duration: 0.15,
            stagger: 0.05

        })
        this.showLogoLetters.to('.footer__logo path', {
            fill: '#1A1A1A', duration: 0.08
        })
        this.showLogoLetters.to('.footer__text', {
            color: '#1A1A1A'
        }, "<")
        this.showLogoLetters.to('html', {
            backgroundColor: '#E6E6E6'
        }, "<")
    }

    observerFooter() {
        const callbackFunction = (entries) => {
            console.log('showing', entries)
            if (entries[0].isIntersecting) { this.showFooterText() }
        }
        const options = {
            root: null,
            threshold: 0,
            rootMargin: '20px',
        }
        const observer = new IntersectionObserver(callbackFunction, options);
        observer.observe(this.element)
    }

}