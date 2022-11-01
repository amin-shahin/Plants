import { BoxComponent } from "./BoxComponent.js"

const template = document.createElement('template')

template.innerHTML = `
<link rel="stylesheet" href="./Components/BoxWithTranslate/BoxWithTranslate.css"/>
<div class="container-boxs-translate">
    <div class="boxes-translate">
        <box-item text="plants" cover="./images/box-tanslate/cactus.jpg" href="javascript:void(0)" ></box-item>
        <box-item id="vases" text="for home" cover="./images/box-tanslate/2goldon.jpeg" href="javascript:void(0)" ></box-item>
        <box-item id="garden" text="for garden" cover="./images/box-tanslate/orange tree.jpeg" href="javascript:void(0)" ></box-item>
    </div>
</div>
`


class BoxWithTranslate extends HTMLElement {

constructor(){
    super()

    this.attachShadow({mode:'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
}

}

window.customElements.define('box-item',BoxComponent)

export{BoxWithTranslate}
