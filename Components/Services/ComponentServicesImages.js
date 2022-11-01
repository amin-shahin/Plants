
const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="./Components/Services/Services.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />


    <div class="component-service">
            
    <div class="img-service">
        <span class="behind-img"><img class="behind-image" src="" alt=""></span>
        <span class="front-img"><img class="front-image" src="" alt=""></span>
        <div class="number-of-top"></div>
    </div>


    <div class="text-service">
        <h3></h3>
        <p></p>
        <a href="javascript:void(0)">AND MORE
            <i class="fa-solid fa-arrow-right and-more-icon"></i>
        </a>
    </div>
    

    </div>

`

class ComponentServicesImages extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    
        this.shadowRoot.querySelector('.behind-image').setAttribute('src',this.getAttribute('behind-img'))
        this.shadowRoot.querySelector('.front-image').setAttribute('src',this.getAttribute('front-img'))
        this.shadowRoot.querySelector('.number-of-top').innerHTML = this.getAttribute('number-of-top')
        this.shadowRoot.querySelector('.text-service h3').innerHTML = this.getAttribute('heading')
        this.shadowRoot.querySelector('.text-service p').innerHTML = this.getAttribute('description')
        
    } 

    static observedAttributes(){
        return ['behind-img','front-img','number-of-top','heading','description']
    }
}

export{ComponentServicesImages}