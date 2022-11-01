const template = document.createElement("template");



template.innerHTML = `
<link rel="stylesheet" href="Components/CounterWorks/CounterWorks.css" />


<div class='counter-main'>
<div class="counter-numbers">
<span class="number" ></span> 
<span>+</span> 
</div>

<div class="details-works">
<span></span>
<span></span>
</div>
</div>

`;




class MainCounter extends HTMLElement {
  constructor() {
    super();

    
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));


   
    this.shadowRoot.querySelector("span.number").innerHTML =this.getAttribute("valueNumber")
    this.shadowRoot.querySelector(".details-works").firstElementChild.innerHTML = this.getAttribute("title-top");
    this.shadowRoot.querySelector(".details-works").firstElementChild.nextElementSibling.innerHTML = this.getAttribute("title-bottom");



  }
  static observedAttributes() {
    return ["valueNumber", "title-top", "title-bottom"];
  }
}

export { MainCounter };
