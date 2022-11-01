import { BrandsAboutUs } from "./Components/About-us-page/Brands/Brands.js";
import { Employees } from "./Components/About-us-page/Employees/Employees.js";
import { TranslateTopBoxes } from "./Components/About-us-page/TranslateTopBoxes/TranslateTopBoxes.js";
import { WeAreSince } from "./Components/About-us-page/WeAreSince/WeAreSince.js";
import { WeWorkWithHeart } from "./Components/About-us-page/WeWorkWithHeart/WeWorkWithHeart.js";
import { AboutCompany } from "./Components/AboutCompany/AboutCompany.js";
import { Articles } from "./Components/Articles/Articles.js";
import { SingleArticleComponent } from "./Components/Articles/SingleArticlesComponents.js";
import { Blogs } from "./Components/Blogs-page/Blogs.js";
import { BoxWithTranslate } from "./Components/BoxWithTranslate/BoxWithTranslate.js";
import { Brands } from "./Components/brandsMoving/BrandsMoving.js";
import { Comments } from "./Components/Comments/Comments.js";
import { CounterWorks } from "./Components/CounterWorks/CounterWorks.js";
import { Footer } from "./Components/Footer/Footer.js";
import { Header } from "./Components/Header/Header.js";
import { HeaderAnotherPage } from "./Components/HeaderAnotherPages/HeaderAnotherPage.js";
import { ImageWithOverlay } from "./Components/ImageWithOverlay/ImageWithOverlay.js";
import { Navbar } from "./Components/Navbar/Navbar.js";
import { NavbarXXL } from "./Components/Navbar/NavbarSizeXXL.js";
import { NavbarAnotherPageXXL } from "./Components/NavbarAnotherPages/NavbarAnotherPageSizeXXL.js";
import { Projects } from "./Components/Projects-page/Projects.js";
import { Services } from "./Components/Services/Services.js";
import { SupportGarden } from "./Components/SupportGarden/SupportGarden.js";
// import { Shop } from "./Components/Shop/Shop.js";
// import { productDatas } from "./Components/Shop/datas.js";



///////////////   HOME PAGE  //////////////////
window.customElements.define("navbar-site", Navbar);
window.customElements.define("navbar-site-xxl", NavbarXXL);
window.customElements.define("header-site", Header);
window.customElements.define("counter-works", CounterWorks);
window.customElements.define("box-translate", BoxWithTranslate);
window.customElements.define("about-company", AboutCompany);
window.customElements.define("services-company", Services);
window.customElements.define("image-with-overlay", ImageWithOverlay);
window.customElements.define("support-garden", SupportGarden);
window.customElements.define("footer-site", Footer);
window.customElements.define('brands-moving',Brands)
window.customElements.define('comments-site',Comments)
window.customElements.define('articles-site',Articles)


window.customElements.define("card-component", SingleArticleComponent);
/////////////////////////////////////////////////////////////////////////
////////////////////////components another pages/////////////////////////


///////////////  ABOUT US PAGE  //////////////////
window.customElements.define('header-another-page',HeaderAnotherPage)
window.customElements.define('we-are-since',WeAreSince)
window.customElements.define('about-us-translate-box',TranslateTopBoxes)
window.customElements.define('we-work-with-heart',WeWorkWithHeart)
window.customElements.define('brands-about-us',BrandsAboutUs)
window.customElements.define('employees-company',Employees)
window.customElements.define('navbar-xxl-another-page',NavbarAnotherPageXXL)


///////////////  BLOGS PAGE  //////////////////
window.customElements.define('blogs-site',Blogs)
{/* <i class="fa-brands fa-linkedin-in"></i> */}

///////////////  PROJECTS PAGE  //////////////////
window.customElements.define('projects-page',Projects)



///////////////  SHOP PAGE  //////////////////
// window.customElements.define('shop-page',Shop)

// const navbar = document.querySelector('navbar-xxl-another-page')
// console.log(navbar.shadowRoot.children[2].children[1].lastElementChild.firstElementChild);
window.addEventListener('load',()=>{
    document.querySelector('.loading-container').style.display='none'
})