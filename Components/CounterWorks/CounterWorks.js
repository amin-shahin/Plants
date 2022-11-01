import { MainCounter } from "./MainCounter.js";

const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="Components/CounterWorks/CounterWorks.css" />

<div class="counter-container-fluied">
<div class="counter-container">

<maincounter-site valueNumber="0"  title-top="PROJECTS IN" title-bottom="PROGRESS"  id="220"></maincounter-site>
<maincounter-site valueNumber="0" title-top="AWARDS" title-bottom="WINNING"  id="89"></maincounter-site>
<maincounter-site valueNumber="0" title-top="PROJECTS" title-bottom="FINISHED"  id="359"></maincounter-site>
<maincounter-site valueNumber="0" title-top="SATISFIED" title-bottom="CLIENTS"  id="289" ></maincounter-site>

</div>
</div>

`;

class CounterWorks extends HTMLElement {
  constructor() {
    super();



    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

     this.counterContainer = this.shadowRoot.querySelector(".counter-container-fluied");
     this.numberGoal = this.shadowRoot.querySelectorAll("maincounter-site");

    this.startCounter = false;
    
   
  }

  connectedCallback() {
    
        window.addEventListener("scroll", () => {
            if (window.scrollY > this.counterContainer.offsetTop - 300) {
              if (!this.startCounter) {
                this.numberGoal.forEach((item) => {

           
                  let counterInterval = setInterval(() => {
                  item.shadowRoot.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.textContent++
                   
                      if (item.shadowRoot.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.textContent == item.getAttribute('id')) {
                        clearInterval(counterInterval);
                      }
                    }, 10);
                    })
              
                this.startCounter = true;
              }
            }
      
          });
  
  }

}


window.customElements.define('maincounter-site',MainCounter)
export { CounterWorks };