const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="Components/Header/Header.css" />

<div class="header-container-fluid">
  <div class="header-container">
    <div class="header-main">
      <div class="header-left-img">
  
            <img src="images/home-3_slider_01-1..png" alt="flower">
  
  
      </div>
      <div class="header-right-text">
        <h3>Natrue in your home</h3>
          <h1>Full Plants</h1>
          <h1>Care Services</h1>
          <p>
            We provide full & comprehsnsive services in irrigation, landscape,
            maintenance and professional tree care management
          </p>
          <button class="btn-header">LEARN MORE</button>
  
      </div>
    </div>
  </div>
</div>


`;

class Header extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export { Header };
