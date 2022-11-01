const template = document.createElement('template')

template.innerHTML = `
<link rel="stylesheet" href="Components/ImageWithOverlay/ImageWithOverlay.css"/>

<div class="img-with-overlay">

    <div class="img-plant">
        <img src="" alt="plants">
    </div>

    <div class="overlay">
        <a href="javascript:void(0)"></a>
        <p></p>
    </div>

</div>
`


class ComponentImageOverlay extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.shadowRoot.querySelector('.img-plant img').setAttribute('src',this.getAttribute('cover'))
        this.shadowRoot.querySelector('.overlay a').setAttribute('href',this.getAttribute('href'))
        this.shadowRoot.querySelector('.overlay a').innerHTML = this.getAttribute('tagA-content')
        this.shadowRoot.querySelector('.overlay p').innerHTML = this.getAttribute('text')
    }

    static observedAttributes(){
        return ['cover','href','text',"tagA-content"]
    }
}

export{ComponentImageOverlay}