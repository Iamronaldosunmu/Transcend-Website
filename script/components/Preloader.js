import Component from "../classes/Component";
import GSAP, { Power2 } from 'gsap'

export default class Preloader extends Component {
    constructor() {
        super({
            element: '.preloader',
            elements: {
                wrapper: '.preloader__wrapper',
                text: '.preloader__text',
                number: '.preloader__number',
                image: '.preloader__logo-container',
                loader: '.preloader__loader',
                images: document.querySelectorAll('img')
            }
        })
        this.length = 0
        this.createLoader()
        this.fakeLoadImages()
    }

    createLoader() {
        this.animateIn = GSAP.timeline({ delay: 0.5 })
        this.animateIn.fromTo(this.element, {
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            scaleY: 1.15
        }, {
            paddingLeft: 32,
            paddingRight: 32,
            paddingTop: 20,
            paddingBottom: 20,
            scaleY: 1,
            duration: 0.5,
            ease: Power2.easeOut
        })

        this.animateIn.to(this.elements.wrapper, {
            borderRadius: 8,
            duration: 0.5,
            ease: Power2.easeOut
        }, "-=0.5")

        this.animateIn.to(this.elements.image, {
            opacity: 1,
            duration: 1.5,
            ease: "power4.inOut"
        }, "-=0.5")

        this.animateIn.to(this.elements.text, {
            opacity: 1,
            transition: 0.2
        },)

    }

    fakeLoadImages() {
        setTimeout(() => this.onAssetLoaded(), 2700)
        setTimeout(() => this.onAssetLoaded(), 3000)
        setTimeout(() => this.onAssetLoaded(), 3200)
        setTimeout(() => this.onAssetLoaded(), 5000)
    }

    onAssetLoaded(image) {


        /*=============================================
        =            Correct Code             =
        =============================================*/


        // this.length += 1
        // console.log(this.length)
        // const percent = this.length / this.elements.images.length

        // this.elements.number.innerHTML = `${Math.round(percent * 100)}%`

        // if (percent == 1) {
        //     this.onLoaded()
        // }

        /*=====  End of Correct Code   ======*/

        this.length += 1
        const percent = this.length / 4
        this.elements.number.innerHTML = `${Math.round(percent * 100)}%`

        GSAP.to(this.elements.loader, {
            height: `${percent * 100}%`,
            duration: this.length !== 4 ? 1.4 : 0.6,
            ease: Power2.easeOut
        })

        if (percent == 1) {
            this.onLoaded()
        }

    }

    onLoaded() {
        return new Promise(resolve => {
            this.animateOut = GSAP.timeline({ delay: 0.7 })
            this.animateOut.to([this.elements.image, this.elements.text], {
                opacity: 0,
                duration: 0.5
            })
            this.animateOut.to(this.element, {
                padding: 0,
                duration: 1
            })
            this.animateOut.to(this.elements.wrapper, {
                borderRadius: 0,
                duration: 0.9
            }, "-=0.8")

            this.animateOut.call(_ => {
                this.emit('completed')
            })

        })
    }

    destroy() {
        this.element.parentNode.removeChild(this.element)
        console.log('destroyed')
    }
}