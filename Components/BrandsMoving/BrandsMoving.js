const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="Components/BrandsMoving/BrandsMoving.css"


<div class="container">
<div class="brands-container">
  <div class="all-brands">
   <div class="brand">
    <img src="images/brands/partners-2-removebg-preview.png" alt="">
   </div>
   <div class="brand">
    <img src="images/brands/partners-3-removebg-preview.png" alt="">
   </div>
   <div class="brand">
    <img src="images/brands/partners-6-removebg-preview.png" alt="">
   </div>

   <div class="brand">
    <img src="images/brands/partners-8-removebg-preview.png" alt="">
   </div>

   <div class="brand">
    <img src="images/brands/partners-2-removebg-preview.png" alt="">
   </div>
   <div class="brand">
    <img src="images/brands/partners-3-removebg-preview.png" alt="">
   </div>
   <div class="brand">
    <img src="images/brands/partners-6-removebg-preview.png" alt="">
   </div>

   <div class="brand">
    <img src="images/brands/partners-8-removebg-preview.png" alt="">
   </div>

   <div class="brand">
    <img src="images/brands/partners-2-removebg-preview.png" alt="">
   </div>
   <div class="brand">
    <img src="images/brands/partners-3-removebg-preview.png" alt="">
   </div>
   <div class="brand">
    <img src="images/brands/partners-6-removebg-preview.png" alt="">
   </div>

   <div class="brand">
    <img src="images/brands/partners-8-removebg-preview.png" alt="">
   </div>

   <div class="brand">
    <img src="images/brands/partners-2-removebg-preview.png" alt="">
   </div>
   <div class="brand">
    <img src="images/brands/partners-3-removebg-preview.png" alt="">
   </div>
   <div class="brand">
    <img src="images/brands/partners-6-removebg-preview.png" alt="">
   </div>

   <div class="brand">
    <img src="images/brands/partners-8-removebg-preview.png" alt="">
  </div>

</div>
</div>


</div>



`

class Brands extends HTMLElement {
    constructor(){
        super()


        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export{Brands}