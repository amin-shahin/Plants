import { ComponentServicesImages } from "./ComponentServicesImages.js"

const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="./Components/Services/Services.css"/>


    <div class="services-container">
        <div class="services-container-fluid">

            <div class="top">
                <h3>Our Services</h3>
                <h1>What Can We Offer</h1>
                <p>Gardenias’ mission is to provide our customers with responsive service and unsurpassed quality at an affordable price.</p>
            </div>

            <div class="bottom">
                <component-service behind-img="images/services-img/leafs-1-removebg-preview.png" front-img="images/services-img/img-17.png" number-of-top="01" heading="Garden Design" description="We provide full & comprehensive services in irrigation, landscape..." ></component-service>
                <component-service id="pink-leaf" behind-img="images/services-img/pink-leaf-removebg-preview.png" front-img="images/services-img/img-18.png" number-of-top="02" heading="Irrigation System" description="We provide full & comprehensive services in irrigation, landscape..." ></component-service>
                <component-service behind-img="images/services-img/tropical-removebg-preview.png" front-img="images/services-img/img-19.png" number-of-top="03" heading="Tree Services" description="We provide full & comprehensive services in irrigation, landscape..." ></component-service>
                <component-service behind-img="images/services-img/yellow-leaf-removebg-preview.png" front-img="images/services-img/img-20.png" number-of-top="04" heading="Hedge Cutting" description="We provide full & comprehensive services in irrigation, landscape..." ></component-service>
            </div>
        </div>
    </div>
   

`

class Services extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.pinkLeafs =this.shadowRoot.querySelector("#pink-leaf").shadowRoot.children[2].children[0].children[0].firstElementChild
    }
    connectedCallback(){
        this.pinkLeafs.style.width ="100px"
        this.pinkLeafs.style.transform ="rotate(230deg)"
        this.pinkLeafs.style.top ="-60px"

    }
}

window.customElements.define('component-service',ComponentServicesImages)
export {Services}