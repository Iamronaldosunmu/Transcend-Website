import { ScrollTrigger } from "gsap/ScrollTrigger";
import Component from "../classes/Component";
import GSAP from 'gsap';
GSAP.registerPlugin(ScrollTrigger)
// Import the TextSplitter class for handling text splitting.
import { TextSplitter } from '../utils/textSplitter';

// Defines a class to create scroll-triggered animation effects on text.
export class BlurScrollEffect {
    constructor(textElement) {
        // Check if the provided element is valid.
        if (!textElement || !(textElement instanceof HTMLElement)) {
            throw new Error('Invalid text element provided.');
        }

        this.textElement = textElement;
        console.log(this.textElement)

        // Set up the effect for the provided text element.
        this.initializeEffect();
    }

    // Sets up the initial text effect on the provided element.
    initializeEffect() {
        // Callback to re-trigger animations on resize.
        const textResizeCallback = () => this.scroll();

        // Split text for animation and store the reference.
        this.splitter = new TextSplitter(this.textElement, {
            resizeCallback: textResizeCallback,
            splitTypeTypes: 'words, chars'
        });

        // Trigger the initial scroll effect.
        //   this.scroll();
    }

    // Animates text based on the scroll position.
    scroll() {
        // Query all individual characters in the line for animation.
        const chars = this.splitter.getChars();
        GSAP.fromTo(chars, {
            filter: 'blur(10px) brightness(30%)',
            willChange: 'filter'
        }, {
            ease: 'none', // Animation easing.
            filter: 'blur(0px) brightness(100%)',
            stagger: 0.05, // Delay between starting animations for each character.
            scrollTrigger: {
                trigger: this.textElement, // Element that triggers the animation.
                start: 'top bottom-=15%', // Animation starts when element hits bottom of viewport.
                end: 'bottom center+=15%', // Animation ends in the center of the viewport.
                scrub: true, // Animation progress tied to scroll position.
            },
        });
    }
}

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
        this.aboutUsDescriptionTextElement = document.querySelector('.about__details__description__text');
        this.initializeAboutUsDescriptionEffect()
        this.startStory()
        window.addEventListener('resize', () => {
            ScrollTrigger.refresh()
            console.log('the screen was refreshed')
        })
        // new BlurScrollEffect()
    }

    initializeAboutUsDescriptionEffect() {
        // const textResizeCallback = () => this.scroll();

        // Split text for animation and store the reference.
        this.splitter = new TextSplitter(this.aboutUsDescriptionTextElement, {
            // resizeCallback: textResizeCallback,
            splitTypeTypes: 'words, chars'
        });
    }

    startStory() {
        this.animateAboutSection = GSAP.timeline({
            scrollTrigger: {
                trigger: '.about',
                start: 'top top',
                end: () => "+=" + (4.5 * window.innerHeight),
                scrub: 1.2,
                markers: true,
                onReverseStart: () => {
                    document.querySelector('.top-nav__section-status').innerHTML = 'ABOUT US'
                },
                onStart: () => {
                    document.querySelector('.top-nav__section-status').innerHTML = 'ABOUT US'
                }
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
        this.animateAboutSection.to(this.elements.aboutDetailsTextItems[2], {
            opacity: 0,
            duration: 1,
            delay: 1,
            scale: 1.05
        })
        this.animateAboutSection.to(this.elements.aboutDetailsImageItems[2], {
            opacity: 0,
            duration: 1,
            scale: 0.95
        }, "<")
        this.animateAboutSection.to('.about__details__description', {
            opacity: 1,
            duration: 1,
            delay: 1
        }, "<")
        // Write the text for the final about us section here
        const chars = this.splitter.getChars();
        this.animateAboutSection.fromTo(chars, {
            filter: 'blur(10px) brightness(30%)',
            willChange: 'filter'
        }, {
            ease: 'none', // Animation easing.
            filter: 'blur(0px) brightness(100%)',
            stagger: 0.05, // Delay between starting animations for each character.
        });
        this.animateAboutSection.to(document.querySelector('.top-nav__section-status'), {
            opacity: 0,
            duration: 0.1
        })
        this.animateAboutSection.add(() => {
            document.querySelector('.top-nav__section-status').innerHTML = 'ABOUT US'
        })
        this.animateAboutSection.to('.about__details__description', {
            opacity: 0,
            duration: 1,
            // delay: 1
        }, "<")
        // this.animateAboutSection.to(this.elements.aboutDetails[0], {
        //     opacity: 0,
        //     delay: 0.5,
        //     duration: 0.1,
        //     stagger: 0.6
        // }, "<")

    }
}