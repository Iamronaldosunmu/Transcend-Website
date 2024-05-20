import GSAP from 'gsap'

const getMousePos = e => {
    return {
        x: e.clientX,
        y: e.clientY
    };
};

const lerp = (a, b, n) => (1 - n) * a + n * b;

let mouse = { x: 0, y: 0 };
window.addEventListener('mousemove', (ev) => (mouse = getMousePos(ev)));

export default class Cursor {
    constructor(el) {
        this.Cursor = el;
        this.Cursor.style.opacity = 0;

        this.cursorCnfigs = {
            x: { previous: 0, current: 0, amt: 0.2 },
            y: { previous: 0, current: 0, amt: 0.2 }
        };

        this.onMouseMoveEv = () => {
            this.cursorCnfigs.x.previous = this.cursorCnfigs.x.current = mouse.x;
            this.cursorCnfigs.y.previous = this.cursorCnfigs.y.current = mouse.y;

            // Set cursor opacity to 1 when hovered on the screen
            GSAP.to(this.Cursor, {
                duration: 0.5, ease: 'Power3.easeInOut',
                opacity: 1,
            })

            //    requestAnimationFrame
            requestAnimationFrame(() => this.render())

            //    Cleanup function (Removing after one cycle complete)
            window.removeEventListener('mousemove', this.onMouseMoveEv)
        }
        this.addEventListeners()
        //    Assign the mouse function
        window.addEventListener('mousemove', this.onMouseMoveEv)
    }

    addEventListeners() {
        const onClickableElementHover = () => {
            GSAP.to(this.Cursor.querySelector('svg'), {
                scale: 2.5,
                duration: 0.2,
                ease: 'Power3.easeInOut'
            })

            GSAP.to(this.Cursor.querySelector('path'), {
                fill: 'transparent',
                duration: 0.2
            })
        }
        const onClickableElementHoverLeave = () => {
            console.log('mouseen')
            GSAP.to(this.Cursor.querySelector('svg'), {
                scale: 1,
                duration: 0.2,
                ease: 'Power3.easeInOut'
            })
            GSAP.to(this.Cursor.querySelector('path'), {
                fill: '#E6E6E6',
                duration: 0.2
            })
        }

        const onClickableElementMouseDown = () => {
            GSAP.to(this.Cursor.querySelector('svg'), {
                scale: 1.5,
                duration: 0.2,
                ease: 'Power3.easeInOut'
            })
        }
        const onClickableElementMouseUp = () => {
            GSAP.to(this.Cursor.querySelector('svg'), {
                scale: 2.5,
                duration: 0.2,
                ease: 'Power3.easeInOut'
            })
        }

        const clickableElements = document.querySelectorAll('.clickable')
        clickableElements.forEach(clickableElement => {
            clickableElement.addEventListener('mouseenter', onClickableElementHover)
            clickableElement.addEventListener('mouseleave', onClickableElementHoverLeave)
            clickableElement.addEventListener('mousedown', onClickableElementMouseDown)
            clickableElement.addEventListener('mouseup', onClickableElementMouseUp)
        })
    }

    render() {
        this.cursorCnfigs.x.current = mouse.x;
        this.cursorCnfigs.y.current = mouse.y;
        for (const key in this.cursorCnfigs) {
            this.cursorCnfigs[key].previous = lerp(
                this.cursorCnfigs[key].previous,
                this.cursorCnfigs[key].current,
                this.cursorCnfigs[key].amt
            )

        }
        //    setting the cursor x and y to our cursor html element
        this.Cursor.style.transform = `
        translateX(${this.cursorCnfigs.x.previous}px) 
        translateY(${this.cursorCnfigs.y.previous}px)
        `;

        requestAnimationFrame(() => this.render())

    }

}