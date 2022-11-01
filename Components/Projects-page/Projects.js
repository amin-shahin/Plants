import { ProjectComponent } from "./ProjectComponent.js"

const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="Components/Projects-page/Projects.css"/>

<div class="categories-container">

    <div class="heading">
        <h2 class="head-text">Enjoy our works</h2>
        <h1 class="title-text">Our Incredible Projects</h1>
        <p class="main-text">Gardenias’ mission is to provide our customers with responsive service and unsurpassed quality at an affordable price.</p>
    </div>


    <div class="categories">
        <span class="item active" data-name="all">All</span>
        <span class="item" data-name="garden">Garden</span>
        <span class="item" data-name="landscape">Landscape</span>
        <span class="item" data-name="plan care">Plan Care</span>
        <span class="item" data-name="removal">Removal</span>
    </div>

    <div class="project-component-container">

            <card-component-project data-name="landscape" cover="images/Projects/project-01.jpg" btn="LANDSCAPE" title="Certificated Materials"></card-component-project>
            <card-component-project data-name="garden" cover="images/Projects/Projects-02.jpg" btn="GARDEN" title="Garden in the Nursery"></card-component-project>
            <card-component-project data-name="plan care" cover="images/Projects/Projects-03.jpg" btn="PLAN CARE" title="Florarium"></card-component-project>
            <card-component-project data-name="removal" cover="images/Projects/Projects-04.jpg" btn="REMOVAL" title="Tree Services"></card-component-project>
            <card-component-project data-name="garden" cover="images/Projects/Projects-05.jpg" btn="GARDEN" title="Modern Landscape"></card-component-project>
            <card-component-project  data-name="landscape" cover="images/Projects/Projects-06.jpg" btn="LANDSCAPE" title="Hedge"></card-component-project>
            <card-component-project data-name="garden" cover="images/Projects/Projects-07.jpg" btn="GARDEN" title="Experienced Team"></card-component-project>
            
            <card-component-project data-name="removal" cover="images/Projects/Projects-08.jpg" btn="REMOVAL" title="Houseplants">
                <a href="javascript:void(0)" class="overlay-btn-slot" slot="PLAN CARE">PLAN CARE</a>
            </card-component-project>
            
            <card-component-project data-name="plan care" cover="images/Projects/Projects-09.jpg" btn="PLAN CARE" title="Irrigation System"></card-component-project>
            
    </div>

</div>

`

class Projects extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.com= this.shadowRoot.querySelectorAll('card-component-project')
        console.log(this.com[0].getAttribute("btn"));
        this.categories = this.shadowRoot.querySelector('.categories')
        this.items = this.shadowRoot.querySelectorAll('.item')
        this.components = this.shadowRoot.querySelectorAll('card-component-project')
       
    }

    addActiveClass = (event) =>{

        this.items.forEach( item =>{
            item.classList.remove('active')
            
            if(event.target.innerHTML.toLowerCase() == item.innerHTML.toLowerCase()){
                item.classList.add('active')
            }

  
        })
        if(event.target.nodeName === 'SPAN'){

            this.components.forEach( component =>{
                if(component.getAttribute('data-name') === event.target.getAttribute('data-name') 
                ||event.target.getAttribute('data-name') === 'all' ){
                    component.classList.remove('hide')
                    component.classList.add('show')
    
                }else{
                    component.classList.add('hide')
                    component.classList.remove('show')
                }
            } )
        }
        

    }

    connectedCallback(){
        this.categories.addEventListener('click',this.addActiveClass)
    }
}


window.customElements.define('card-component-project',ProjectComponent)
export{Projects}