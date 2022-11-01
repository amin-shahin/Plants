const template = document.createElement('template')

template.innerHTML = `
<link rel="stylesheet" href="./Components/BoxWithTranslate/BoxWithTranslate.css"/>

   
        <div class="box-translate">

            <img src="" alt="flower"/>

            <div class="text-in-box">
                 <a class="to-porfolito" href="">plants</a>
            </div>

         </div>


`

class BoxComponent extends HTMLElement {
constructor(){
    super()

    this.attachShadow({mode:'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))


    this.shadowRoot.querySelector('.box-translate img').setAttribute('src',this.getAttribute('cover'))
    this.shadowRoot.querySelector('.text-in-box a').innerHTML = this.getAttribute('text')
    this.shadowRoot.querySelector('.to-porfolito').setAttribute('href',this.getAttribute('href'))

}

static observedAttributes() {
    return ['cover','text','href'];
  }

}
export{BoxComponent}