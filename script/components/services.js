import { ScrollTrigger } from "gsap/ScrollTrigger";
import Component from "../classes/Component";
import GSAP from 'gsap';
GSAP.registerPlugin(ScrollTrigger)

export default class Services extends Component {
    constructor() {
        super({
            element: '.services',
            elements: {
            }
        })
        this.startServicesDisplay()
        this.addEventListeners()
    }

    startServicesDisplay() {
        this.animateServicesSection = GSAP.timeline({
            scrollTrigger: {
                trigger: '.services',
                start: 'top center',
                end: () => "+=" + (3 * window.innerHeight),
                scrub: 1.2,
                markers: true,
                onReverseStart: () => {
                    document.querySelector('.top-nav__section-status').innerHTML = 'OUR SERVICES'
                },
                onStart: () => {
                    document.querySelector('.top-nav__section-status').innerHTML = 'OUR SERVICES'
                },
                onEnter: () => {
                    GSAP.to('html', {
                        backgroundColor: 'rgb(0,0,0)'
                    })
                    GSAP.to(['.left-gradient', '.right-gradient'], {
                        opacity: 1,
                        delay: 0.2
                    })
                },
                onEnterBack: () => {
                    GSAP.to('html', {
                        backgroundColor: 'rgb(0,0,0)'
                    })
                    GSAP.to(['.left-gradient', '.right-gradient'], {
                        opacity: 1,
                        delay: 0.2
                    })
                },
                onLeave: () => {
                    GSAP.to('html', {
                        backgroundColor: '#222226'
                    })
                    GSAP.to(['.left-gradient', '.right-gradient'], {
                        opacity: 0, 
                        duration: 0.2
                    })
                },
                onLeaveBack: () => {
                    GSAP.to('html', {
                        backgroundColor: '#222226'
                    })
                    GSAP.to(['.left-gradient', '.right-gradient'], {
                        opacity: 0, 
                        duration: 0.2
                    })
                }
            }
        })
        // this.animateServicesSection.to(document.querySelector('.top-nav__section-status'), {
        //     opacity: 1,
        //     duration: 1
        // })
        // this.animateServicesSection.fromTo(document.querySelector('.service-item__text'), {
        //     opacity: 0,
        //     filter: 'blur(5px)',
        //     y: 20, scale: 0.95
        // }, { filter: 'blur(0px)', opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } })
    }

    addEventListeners() {
        // const parallax = (e) => {
        //     document.querySelectorAll('.service-item__sub-service').forEach(layer => {
        //         const speed = layer.getAttribute("data-speed")

        //         const baseX = window.innerWidth / 2;
        //         const baseY = window.innerHeight / 2;

        //         const x = (e.pageX - baseX) * speed;
        //         const y = (e.pageY - baseY) * speed;
        //         console.log(x, y,)
        //         GSAP.to(layer, {
        //             x, y,
        //         })
        //         // layer.computedStyleMap.transform = `translateX(${x}px) translateY(${y})`

        //     })

        // }
        // document.addEventListener('mousemove', parallax)
    }
}