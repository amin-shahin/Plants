const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="Components/SupportGarden/SupportGarden.css" />
<div class="support-your-garden-container">
      <div class="support-your-garden-container-fluid">
        <h2>Bring nature in your home</h2>
        <h1>We Take Care of Your 
          Garden 24/7</h1>
        
        <a href="javascript:void(0)">FREE QUOTE</a>
      </div>
    </div>
`

class SupportGarden extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }
}
export{SupportGarden}