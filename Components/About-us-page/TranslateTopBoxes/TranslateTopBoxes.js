const template =document.createElement('template')

template.innerHTML = `
<link rel="stylesheet" href="Components/About-us-page/TranslateTopBoxes/TranslateTopBoxes.css" />

<div class="translate-container">
    <div class="translate-container-fluid">
        <div class="translate-boxes">
            <div class="box-1 box">
                <div class="bg-1 bg"></div>
                <h3 class="title">Residence Services</h3>
                <p class="content">We provide comprehensive lawn care services to meet needs.</p>
            </div>

            <div class="box-2 box">
                <div class="bg-2 bg"></div>
                <h3 class="title">Commerical Services</h3>
                <p class="content">We provide comprehensive lawn care services to meet needs.</p>
            </div> 

            <div class="box-3 box">
                <div class="bg-3 bg"></div>
                <h3 class="title">Landscaping Services</h3>
                <p class="content">We provide comprehensive lawn care services to meet needs.</p>
            </div>
        </div>
    </div>

</div>

`

class TranslateTopBoxes extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export{TranslateTopBoxes}