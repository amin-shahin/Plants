const template = document.createElement('template')

template.innerHTML = `
<div class="brands-container">
<link rel="stylesheet" href="Components/About-us-page/Brands/Brands.css"/>
    <div class="brands">
        <img src="./../../../images/about-us/brands/partners-1.png" alt="brand"/>
        <img src="./../../../images/about-us/brands/partners-2.png" alt="brand"/>
        <img src="./../../../images/about-us/brands/partners-3.png" alt="brand"/>
        <img src="./../../../images/about-us/brands/partners-4.png" alt="brand"/>
        <img src="./../../../images/about-us/brands/partners-5.png" alt="brand"/>
        <img src="./../../../images/about-us/brands/partners-6.png" alt="brand"/>
        <img src="./../../../images/about-us/brands/partners-7.png" alt="brand"/>
        <img src="./../../../images/about-us/brands/partners-8.png" alt="brand"/>
    </div>
</div>


`

class BrandsAboutUs extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export {BrandsAboutUs}