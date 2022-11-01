const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="Components/Projects-page/Projects.css"/>


<div class="card-container">
    <div class="img">
        <img src="" alt="project image"/>
        <div class="overlay">
                <div class="btns">
                    <a class="btn-link" href="javascript:void(0)"></a>
                    <slot  name="PLAN CARE"></slot>
                </div>
                <h2 class="title"></h2>
        </div>
    </div>
</div>

`

class ProjectComponent extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.shadowRoot.querySelector('div.img img').setAttribute('src',this.getAttribute('cover'))
        this.shadowRoot.querySelector('.overlay .btns a').innerHTML = this.getAttribute('btn')
        this.shadowRoot.querySelector('.overlay h2').innerHTML = this.getAttribute('title')
    }

    static observedAttributes(){
        return ['cover','btn','title']
    }
}

export{ProjectComponent}