const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="Components/AboutCompany/AboutCompany.css" />

<div class="header-container-fluied">
  <div class="header-container">
    <div class="header-main">
     
      <div class="header-right-text">
          <span>
          <img class="leaf-side-text" src="images/leaf-side-text.png" alt="leaf-side-text" >
          <h3>About Company</h3>
          </span>
          <h1>Professional Garden Care</h1>
          <p>
            We provide full & comprehsnsive services in irrigation, landscape,
            maintenance and professional tree care management
          </p>
          <p>
          A fifteen acre tree farm and nursery help us to provide our customers with quality plants & trees at affordable pricing. Our lawn care team is trained not only to meet customer expectations.
          </p>
          <button class="btn-header">LEARN MORE</button>
  
      </div>

         <div class="header-left-img">
  
              <img src="images/home-3_02.png" alt="girl">
        </div>
   
   
        </div>
  </div>
</div>


`;

class AboutCompany extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export { AboutCompany };
