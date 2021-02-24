function newElement(tagName, className, src) {
    const elem = document.createElement(tagName)
    elem.className = className
    elem.src = src;
    return elem
}

function cloroquine() {
    this.element = newElement('div', 'cloro')
    const corpse = newElement('div', 'corpo')
    const cloroimg = newElement('img', 'cloroquine', './img/cloror.png')
    this.element.appendChild(corpse)
    corpse.appendChild(cloroimg)
    this.setHeight = heightt => cloroimg.style.height = `${heightt}px`

} 

function pair(height, open, x) {
    this.element = this.element = newElement('div', 'par-de-cloro')

    this.superior = new cloroquine()
    this.inferior = new cloroquine()

    this.element.appendChild(this.superior.element)
    this.element.appendChild(this.inferior.element)

    this.sortOpening = () => {
        const heightS = Math.random()  *  (height - open)
        const heightD = height - open - heightS
        this.superior.setHeight(heightS)
        this.inferior.setHeight(heightD)
    }   

    this.getX  = () => parseInt(this.element.style.left.split('px')[0])
    this.setX = x => this.element.style.left = `${x}px`
    this.getWidth = () => this.element.clientWidth

    this.sortOpening()
    this.setX(x)

}
/*
const b = new pair(500, 0.02, 800);

*/

function notifier() {

}
function bars(heightt, widhtt, opening, space, notifier) {

    this.pairs = [
        new pair(heightt, opening, space),
        new pair(heightt, opening, widhtt + space),
        new pair(heightt, opening, widhtt + space * 2),
        new pair(heightt, opening, widhtt + space * 3)
    ]
    const desloc = 3
    this.animar = ()  => {
        this.pairs.forEach(par => {
                par.setX(par.getX() - desloc)
                if(par.getX() < -par.getWidth()) {
                    par.setX(par.getX() + space * this.pairs.length)
                    par.sortOpening()
                }

                const mid = widhtt / 2
                const crossmid = par.getX() + desloc >= mid
                    && par.getX()  < mid
               /* crossmid && notifier() */

        })
    }
}

function virus(heig) {
    let flying = false
    this.element = newElement('img', 'virus', './img/passaro.png')
    this.getY = () => parseInt(this.element.style.bottom.split('px')[0])
    this.setY = y => this.element.style.bottom = `${y}px`

    window.onkeydown = e => flying = true
    window.onkeyup = e => flying = false
    this.setY(200)
    this.animar = () => {
        const newY = this.getY() + (flying ? 5 : -8)
        if(newY <= 0) {
            this.setY(0)
        }
        else if(newY >= 650) {
            this.setY(650)
        } else {
            this.setY(newY)
        }

    }

}

const cloroo = new virus(500)
const barss = new bars(500, 400, 0.02, 400) 
const area = document.querySelector('[game]')
area.appendChild(cloroo.element)
barss.pairs.forEach(par => area.appendChild(par.element))
setInterval(() => {
    cloroo.animar()
    barss.animar()
}, 20);
