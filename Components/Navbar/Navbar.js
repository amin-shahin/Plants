import SearchNavbar from './SearchNavbar.js'

const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="Components/Navbar/Navbar.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<nav class="navbarContainer">

<div class="hamber-menu">

<div class="linesHamber">
  <span class="line-hamber"></span>
  <span class="line-hamber"></span>
  <span class="line-hamber"></span>
</div>

</div>


<div class="navbar-brand">
<img src="/images/icon footer/logo_2.png" alt="barnd-icon">
</div>

<search-component></search-component>


</nav>


<div id="myNav" class="overlay">
  <div class="menu-items">
    <a href="./index.html">Home</a>
    <a href="./about-us.html">About Us</a>
    <a href="./blogs.html">Blogs</a>
    <a href="./projects.html">Projects</a>
    <a href="./shop/shop.html">Shop</a>
  </div>
</div>

`;

class Navbar extends HTMLElement {
  constructor() {
    super();

    this.toggleBtn = false;
    this.scrollCurrent = 120;


    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  toggleMenu = () => {
    this.toggleBtn = !this.toggleBtn;
    if (this.toggleBtn) {
      this.shadowRoot.querySelector(".overlay ").style.height = "100%";
      // this.shadowRoot.querySelector('.overlay ').style.display ="block"
    } else {
      // this.shadowRoot.querySelector('.overlay ').style.display ="none"
      this.shadowRoot.querySelector(".overlay ").style.height = "0";
    }

    this.shadowRoot.querySelector(".line-hamber").classList.toggle("line-1");
    this.shadowRoot
      .querySelector(".line-hamber")
      .nextElementSibling.classList.toggle("line-2");
    this.shadowRoot
      .querySelector(".line-hamber")
      .nextElementSibling.nextElementSibling.classList.toggle("line-3");
  };




  hideNavbarWithScroll = () => {
    let navbar = this.shadowRoot.querySelector(".navbarContainer");
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > this.scrollCurrent) {
      navbar.style.top = "-100px";
    } 
    else {
      navbar.style.top = "0px";
    }

    this.scrollCurrent = scrollTop;

  };

  connectedCallback() {
    this.shadowRoot.querySelector(".hamber-menu").addEventListener("click", this.toggleMenu);   
    window.addEventListener("scroll", this.hideNavbarWithScroll);
  }
}

window.customElements.define('search-component',SearchNavbar)


export { Navbar };

