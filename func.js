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
        const heightS = Math.random() *  (height - open)
        const heightD = height - open - heightS
        this.superior.setHeight(heightS)
        this.superior.setHeight(heightD)
    }   

    this.getX  = () => parseInt(this.element.style.left.split('px')[0])
    this.setX = x => this.element.style.left = `${x}px`
    this.getWidth = () => this.element.clientWidth

    this.sortOpening(
    this.setX(x)
    )

}

const b = new pair();
document.querySelector('[game').appendChild(b.element)