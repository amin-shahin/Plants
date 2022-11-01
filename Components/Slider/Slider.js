const controls = document.querySelector(".controls");
const container = document.querySelector(".thumbnail-container");
const allBox = container.children;
// let containerWidth = window.innerWidth

const margin = 30;
var items = 0;
var totalItems = allBox.length;
var jumpSlideWidth = 0;


// item setup per slide

responsive = [
  { breakPoint: { width: 0, item: 1 } }, //if width greater than 0 (1 item will show)
  { breakPoint: { width: 600, item: 2 } }, //if width greater than 600 (2  item will show)
  { breakPoint: { width: 1000, item: 3 } }, //if width greater than 1000 (4 item will show)
];


const mediaQueryGreater1000 = window.matchMedia(
  `(min-width:${responsive[2].breakPoint.width}px)`
);

const mediaQuery600 = window.matchMedia(
  `(max-width:${responsive[1].breakPoint.width}px)`
);



function load() {


   mediaQueryGreater1000.addListener(handleTabletChangeGreater1000);

   mediaQuery600.addListener(handleTabletChange600);

  function handleTabletChangeGreater1000(e) {
    // Check if the media query is true
    if (e.matches) {
      items = responsive[2].breakPoint.item;
    }else if(window.screen.width <1000 && window.screen.width > 600){
      
      items = responsive[1].breakPoint.item;
   }
  //  start();
    
  }

  function handleTabletChange600(e) {
    // Check if the media query is true
    if (e.matches) {
      items = responsive[0].breakPoint.item;
    }else if(window.screen.width <1000 && window.screen.width > 600){
      items = responsive[1].breakPoint.item;
   }
  }
  // Initial check
  handleTabletChangeGreater1000(mediaQueryGreater1000);
  handleTabletChange600(mediaQuery600);
  //   end load function
  start();
}

function start() {

let containerWidth = container.parentElement.offsetWidth;

   
  let totalItemsWidth = 0;

  for (let i = 0; i < allBox.length; i++) {
    // width and margin setup of items
    allBox[i].style.width = (containerWidth / items) - margin + "px";
    allBox[i].style.margin = margin / 2 + "px";
    totalItemsWidth += containerWidth / items;
   //  totalItems;
   }
   
  // thumbnail-container width set up
  container.style.width = totalItemsWidth + "px";

  // slides controls number set up
  const allSlides = Math.ceil(totalItems / items);
  const ul = document.createElement("ul");
  
  for (let i = 1; i <= allSlides; i++) {
     const li = document.createElement("li");
     const div = document.createElement("div");
      div.className = 'div-li'
      div.id = i
      li.id = i;
      div.setAttribute("onclick", "controlSlides(this)");
      div.appendChild(li)
      ul.appendChild(div);

      if (i == 1) {
         div.className = "active";
      }
 
   }

  controls.innerHTML = ''
  controls.appendChild(ul)
}




// when click on numbers slide to next slide
function controlSlides(ele) {


let containerWidth = container.parentElement.offsetWidth;

  // select controls children  'ul' element
  const ul = controls.children;

  const divLi = ul[0].children
  const li = divLi.children;
//   console.log(li);

  var active;

  for (let i = 0; i < divLi.length; i++) {
    if (divLi[i].className == "active") {
      // find who is now active
      active = i;
      // remove active class from all 'li' elements
      divLi[i].className = "";
    }
  }

  // add active class to current slide
  ele.className = "active";

  var numb = ele.id - 1 - active;
  jumpSlideWidth = jumpSlideWidth + containerWidth * numb;
  container.style.marginLeft = -jumpSlideWidth + "px";
}

window.addEventListener("load", load);
window.addEventListener("resize", load);
// window.addEventListener("load", start);
// window.addEventListener("resize", start);


