// import { SingleArticleComponent } from "./SingleArticlesComponents.js";

const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="Components/Articles/Articles.css" />



    <div class="news-container">
        <div class="news-container-fluid">
            <div class="news-top">

                <div class="text">
                    <span>
                        <img class="leaf-side-text" src="images/leaf-side-text.png" alt="leaf-side-text" >
                        <h3>Whats news</h3>
                    </span>
                    <h1 class="lastest-news">Our Latest News</h1>
                </div>

                <div class="more-news-btn">
                    <button>More News</button>
                </div>
             </div>

        </div>
    </div>

`;

class Articles extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  
    }
}



export { Articles };

