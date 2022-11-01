import { SingleBlog } from "./SingleBlog.js";


const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="Components/Blogs-page/Blogs.css" />



    <div class="blogs-container">
        <div class="blogs-container-fluid">



             <div class="news-bottom-container">
             
                <blog-component bg-cover="images/whats-news/1.jpg"  text-btn="TIPS"
                                text-title="Choosing Plants For Water Conservation"
                                text-sub="Our mission is to provide our customers..."
                                bg-overlay="images/whats-news/leafs-color-removebg-preview .png"
                                btn-overlay="TIPS" title-overlay="Choosing Plants For Water Conservation">
                </blog-component>

                <blog-component bg-cover="images/whats-news/2.jpg"  text-btn="HOUSEPLANTS"
                                text-title="Maintaining Your Yard This Year"
                                text-sub="Our mission is to provide our customers..."
                                bg-overlay="images/whats-news/leafs-color-removebg-preview .png"
                                btn-overlay="HOUSEPLANTS" title-overlay="Maintaining Your Yard This Year">
                </blog-component>

                <blog-component bg-cover="images/whats-news/3.jpg"  text-btn="LANDSCAPING"
                                text-title="Tips For Managing Your Irrigation System"
                                text-sub="Our mission is to provide our customers..."
                                bg-overlay="images/whats-news/leafs-color-removebg-preview .png"
                                btn-overlay="LANDSCAPING" 
                                title-overlay="Tips For Managing Your Irrigation System">
                </blog-component>

                <blog-component bg-cover="images/whats-news/4.jpg"  text-btn="LANDSCAPING"
                                text-title="Ditching Tools Made Me a Happier Gardener"
                                text-sub="Our mission is to provide our customers..."
                                bg-overlay="images/whats-news/leafs-color-removebg-preview .png"
                                btn-overlay="LANDSCAPING" title-overlay="Ditching Tools Made Me a Happier Gardener">
                </blog-component>

                <blog-component bg-cover="images/whats-news/5.jpg"  text-btn="PLANTING"
                                text-title="Landscaping : The Best Idea you've Ever Had"
                                text-sub="Our mission is to provide our customers..."
                                bg-overlay="images/whats-news/leafs-color-removebg-preview .png"
                                btn-overlay="PLANTING" title-overlay="Landscaping : The Best Idea you've Ever Had">
                </blog-component>

                <blog-component bg-cover="images/whats-news/6.jpg"  text-btn="TIPS"
                                text-title="6 Methods to Prevent Water Problems"
                                text-sub="Our mission is to provide our customers..."
                                bg-overlay="images/whats-news/leafs-color-removebg-preview .png"
                                btn-overlay="TIPS" title-overlay="6 Methods to Prevent Water Problems">
                </blog-component>   
             
                <blog-component bg-cover="images/whats-news/7.jpg"  text-btn="HOUSEPLANTS"
                                text-title="Guide to Create a Small Garden For Your Home"
                                text-sub="Our mission is to provide our customers..."
                                bg-overlay="images/whats-news/leafs-color-removebg-preview .png"
                                btn-overlay="HOUSEPLANTS" title-overlay="Guide to Create a Small Garden For Your Home">
                </blog-component> 
                
                
             </div>

             <button class="load-more">LOAD MORE</button>

        </div>
    </div>

`;

class Blogs extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("blog-component", SingleBlog);

export { Blogs };
