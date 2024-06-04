// import Component from "../classes/Component"
// import GSAP from 'gsap'

// export default class ScrollAnimations extends Component {
//     constructor() {
//         super({
//             elements: {
//                 heroText: document.querySelector('.hero__text')
//             }
//         })
//         this.addObservers()
//     }

//     fadeNavOutObserver() {
//         let reverse = true
//         const callbackFunction = (entries) => {
//             GSAP.to('.top-nav', {
//                 opacity: reverse ? 1 : 0,
//                 duration: 0.3,
//                 ease: 'power3.in'
//             })
//             reverse = !reverse
//         }
//         const options = {
//             rootMargin: '-100px 0% 0% 0%',
//             threshold: 1,

//         }
//         this.fadeNavOutObserver = new IntersectionObserver(
//             callbackFunction,
//             options
//         )
//         this.fadeNavOutObserver.observe(this.elements.heroText)
//     }

//     fadeNavInObserver() {
//         let reverse = true
//         const callbackFunction = (entries) => {
//             GSAP.to('.top-nav', {
//                 opacity: reverse ? 0 : 1,
//                 duration: 0.3,
//                 ease: 'power3.in'
//             })
//             reverse = !reverse
//         }
//         const options = {
//             rootMargin: `${document.querySelector('.hero__text').clientHeight}px 0% 0% 0%`,
//             threshold: 1,
//         }
//         this.fadeNavInObserver = new IntersectionObserver(
//             callbackFunction,
//             options
//         )
//         this.fadeNavInObserver.observe(this.elements.heroText)

//     }
//     addObservers() {
//         this.fadeNavOutObserver()
//         this.fadeNavInObserver()

//     }

// }