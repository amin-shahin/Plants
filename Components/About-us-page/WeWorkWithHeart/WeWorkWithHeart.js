
const template =document.createElement('template')

template.innerHTML = `
<link rel="stylesheet" href="Components/About-us-page/WeWorkWithHeart/WeWorkWithHeart.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />


    <div class="we-are-with-heart-container">
        <div class="content">
            <img src="images/about-us/layers/heart.png" alt="heart img"/>
            <div class="box-text">
               
                <h3 class="title">Quality Services</h3>
                <p class="text">We provide full & comprehensive</p>
                <p class="text"> services in irrigation...</p>
                <a href="javascript:void(0)">AND MORE
                    <i class="fa-solid fa-arrow-right and-more-icon"></i>
                </a>
            </div>

            <div class="box-text">
               
                <h3 class="title">Experienced Team</h3>
                <p class="text">We provide full & comprehensive</p>
                <p class="text"> services in irrigation...</p>
                <a href="javascript:void(0)">AND MORE
                     <i class="fa-solid fa-arrow-right and-more-icon"></i>
                </a>
            </div>

            <div class="box-text">
               
                <h3 class="title">Certificated Materials</h3>
                <p class="text">We provide full & comprehensive</p>
                <p class="text"> services in irrigation...</p>
                <a href="javascript:void(0)">AND MORE
                     <i class="fa-solid fa-arrow-right and-more-icon"></i>
                </a>
            </div>

            <img class="flower" src="../../../images/box-tanslate/2goldon.jpeg" alt="flower img"/>

        </div>
    </div>

`

class WeWorkWithHeart extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}


export{WeWorkWithHeart}