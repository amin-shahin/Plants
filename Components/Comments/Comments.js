const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="Components/Comments/Comments.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<div class="all-component-comment">
<img src="images/back/home-3_03.png"/>
<div class="comment-slider-container">


<div class="comment-slider-container-fluid">

  <div class="comment-container-top">
    <h1 class="Testimonials">Testimonials</h1>
    <h1 class="title">What Clients Say</h1>
  </div>

    <div class="comment-content display">
      <div class="comment">
        “Working with Garderia is always an absolute joy, both personally and professionally. Tommy is an amazing speaker; his expertise and genuine passion for what he does is obvious in every word he says.”
      </div>
      <div class="person-tell">
        <span>Emmy Barton</span>
        <p>Client of Company</p>
      </div>
    </div>



    <div class="comment-content ">
      <div class="comment">
        “A fifteen acre tree farm and nursery help us to provide our customers with quality plants & trees at affordable pricing. Our lawn care team is trained not only to meet customer expectations.”
      </div>
      <div class="person-tell">
        <span>Jane Gardi</span>
        <p>Client of Company</p>
      </div>
    </div>

</div>


<div class="comment-container-bottom">
  <button  class="prev">
    <i class="fa-solid fa-arrow-left arrow-icon"></i>
  </button>

  <button class="next">
    <i class="fa-solid fa-arrow-right arrow-icon"></i>
  </button>
</div>



</div>


</div>
`;

class Comments extends HTMLElement {


  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
   
   
   
   
    this.sliderComment = this.shadowRoot.querySelectorAll(".comment-content");
    this.prevBtn = this.shadowRoot.querySelector(".prev");
    this.nextBtn = this.shadowRoot.querySelector(".next");
  
    this.slideNumber = 1;
  }

   sliderHandler = (num) => {
      if (num > this.sliderComment.length) {
        this.slideNumber = 1;
      }

      if (num < 1) {
        this.slideNumber = this.sliderComment.length;
      }
      let i;
      for (i = 0; i < this.sliderComment.length; i++) {
        this.sliderComment[i].style.display = "none";
      }

      this.sliderComment[this.slideNumber - 1].style.display = "block";
      this.sliderComment[this.slideNumber - 1].classList.add("opacity");
    };

    prevBtnHandler = () => {
      this.sliderHandler((this.slideNumber += -1));
    };
    nextBtnHandler = () => {
      this.sliderHandler((this.slideNumber += 1));
    };


    connectedCallback(){
  
      window.addEventListener('load',this.sliderHandler)
      this.prevBtn.addEventListener('click',this.prevBtnHandler)
      this.nextBtn.addEventListener('click',this.nextBtnHandler)
     
  }

  }



export { Comments };
