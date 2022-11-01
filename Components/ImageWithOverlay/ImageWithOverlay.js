import { ComponentImageOverlay } from "./ComponentImageOverlay.js"

const template = document.createElement('template')

template.innerHTML = `
<link rel="stylesheet" href="Components/ImageWithOverlay/ImageWithOverlay.css"

<div class="image-with-overlay-container">
    <div class="image-with-overlay-container-fluid">

        <overlay-component cover="images/gol/portfolio_03-570x570.jpg" href="javascript:void(0)" text="Florarium" tagA-content="PLAN CARE"></overlay-component>
        <overlay-component cover="images/gol/portfolio_04-570x570.jpg" href="javascript:void(0)" text="Tree Services" tagA-content="REMOVAL"></overlay-component>
        <overlay-component cover="images/gol/portfolio_05-570x570.jpg" href="javascript:void(0)" text="Modern Landscape" tagA-content="GARDEN"></overlay-component>
        <overlay-component cover="images/gol/portfolio_13-570x570.jpg" href="javascript:void(0)" text="Plants" tagA-content="PLAN CARE"></overlay-component>

    </div>
</div>

`


class ImageWithOverlay extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}


window.customElements.define('overlay-component',ComponentImageOverlay)
export{ImageWithOverlay}