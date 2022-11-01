const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="Components/About-us-page/WeAreSince/WeAreSince.css" />

<div class="since-container-fluid">
  <div class="since-container">
    <div class="since-main">
      <div class="since-left-img">
            <div class="wrap-img">
                <div class="left">
                    <img class="number-of-project-img" src="../../../images/about-us/layers/image_layers_1-1.png" alt="number project" />
                    <img src="../../../images/about-us/layers/image_layers_1-3.png" alt="hands" />
                </div>
                <div class="right">
                   <img src="../../../images/about-us/layers/image_layers_1-2.png" alt="women" />
                </div>
            </div>
      </div>
          <div class="since-right-text">
            <span class="title">
                <img class="leaf-side-text" src="images/leaf-side-text.png" alt="leaf-side-text" >
                <h3>We are since 2012</h3>
            </span>
            <h1>Professional Garden Care</h1>
            <p>
            We provide full & comprehensive services in irrigation, landscape , maintenance and professional tree care management. A fifteen acre tree farm and nursery help us to provide our customers with quality plants & trees at affordable pricing. Our lawn care team is trained not only to meet customer expectations, but to exceed them in every way possible.
            <div class="avatar-since">
                <div class="details">
                     <img src="/images/about-us/layers/avatar.png" alt="avatar" />
                     <span class="info">
                        <h4 class="name">Jane Gardi</h4>
                        <h5 class="sub">Founder of Company</h5>
                     </span>
                </div>
                <img class="sign" src="/images/about-us/layers/sign.png" alt="sign" />
                
            </div>

         </div>
    </div>
  </div>
</div>


`;

class WeAreSince extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export { WeAreSince };
