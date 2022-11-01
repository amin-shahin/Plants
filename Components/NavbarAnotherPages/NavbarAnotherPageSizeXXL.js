
const template = document.createElement('template')

template.innerHTML =`
<link rel="stylesheet" href="Components/NavbarAnotherPages/NavbarAnotherPageSizeXXL.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />


<div class="container-nav-xxl">

<div class="top-of-navbar">

  <div class="information-nav">
    <span class="location-nav">
      <i class="fa-solid fa-location-dot"></i>
      <span>27 Division St, New York, NY 10002</span>
    </span>
    <span class="email-nav">
      <span class="email-icon">
        <i class="fa-solid fa-envelope"></i>
      </span>
      <span class="email">aminshain.web@gmail.com</span>
    </span>
  </div>


    <div class="services-nav">
        <div class="icon"><a href="javascript:void(0)"><i class="fa-brands fa-twitter"></i></a></div>
        <div class="icon"><a href="javascript:void(0)"><i class="fa-brands fa-facebook-f"></i></a></div>
        <div class="icon"><a href="javascript:void(0)"><i class="fa-brands fa-pinterest-p"></i></a></div>
        <div class="icon"><a href="javascript:void(0)"><i class="fa-brands fa-instagram"></i></a></div>
    
    </div>


</div>

<div class="navbar-bottom">
  <div class="menu-item-xxl">

    <div>
      <img class="brand-img-xxl" src="images/logo_navbarXXL_3.png" alt="brand">
    </div>

    <div class="items">
      <a class="nav-item" href="./index.html">
       <span> Home</span>
       <i class="fa-solid fa-chevron-down"></i>
    </a>
      <a class="nav-item"  href="./about-us.html">
        <span>About Us</span>
        <i class="fa-solid fa-chevron-down"></i>

      </a>
      <a class="nav-item"  href="./blogs.html">
        <span>Blogs</span>
        <i class="fa-solid fa-chevron-down"></i>

      </a>
      <a class="nav-item"  href="./projects.html">
        <span>Projects</span>
        <i class="fa-solid fa-chevron-down"></i>

      </a>
      <a class="nav-item"  href="./shop/shop.html">
        <span>Shop</span>
        <i class="fa-solid fa-chevron-down"></i>

      </a>
    </div>

    <div class="phone-number">(+98) 9376075686</div>
  </div>

  <div class="icon-nav-xxl">
    <span class="cart-icon-nav">
    <i class="fa-brands fa-opencart"></i>
    <div class="number-product-in-cart">0</div>
    </span>
    
   
   <search-component id="search-icon-xxl"></search-component>
  </div>

</div>

</div>

`


class NavbarAnotherPageXXL extends HTMLElement {

    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.navbar = this.shadowRoot.querySelector('.navbar-bottom')
        this.searchComponent=this.shadowRoot.querySelector('#search-icon-xxl')
        
        this.iconSearch= this.searchComponent.shadowRoot.children[2].firstElementChild.firstChild.nextSibling.style.color='rgb(27,27,27)';
        this.iconCloseSearch=this.searchComponent.shadowRoot.children[2].firstElementChild.firstChild.nextSibling.nextSibling.nextElementSibling.style.color='rgb(27,27,27)'
        
    }

    navStickyPosition = ()=>{
      if(document.documentElement.scrollTop > 150){
        this.navbar.classList.add('nav-sticky')
      }else{
        this.navbar.classList.remove('nav-sticky')

      }
    }

    connectedCallback(){
      window.addEventListener('scroll',this.navStickyPosition)
    }
}


// f099
// f39e
// f231
// f16d

export {NavbarAnotherPageXXL}