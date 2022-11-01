const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./Components/PriceRangeFilter/PriceRangeFilter.css"/>


    <div class="PriceRangeFilter-container">
        <div class="PriceRangeFilter-container-fluid">
        <div class="wrapper">
       
        <div class="price-input">
          <div class="field">
            <span>Min</span>
            <input type="number" class="input-min" value="10">
          </div>
          <div class="separator">-</div>
          <div class="field">
            <span>Max</span>
            <input type="number" class="input-max" value="50">
          </div>
        </div>
        <div class="slider">
          <div class="progress"></div>
        </div>
        <div class="range-input">
          <input type="range" class="range-min" min="0" max="50" value="50" step="5">
          <input type="range" class="range-max" min="0" max="50" value="0" step="5">
        </div>
      </div>

        </div>
    </div>
   

`;

class PriceRangeFilter extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));


    this.rangeInput = this.shadowRoot.querySelectorAll(".range-input input"),
    this.priceInput = this.shadowRoot.querySelectorAll(".price-input input"),
    this.range = this.shadowRoot.querySelector(".slider .progress");
    this.priceGap = 5;
  }

  connectedCallback(){

    this.priceInput.forEach(input =>{
        input.addEventListener("input", e =>{
            this.minPrice = parseInt(this.priceInput[0].value),
            this.maxPrice = parseInt(this.priceInput[1].value);
            
            if((this.maxPrice - this.minPrice >= this.priceGap) && this.maxPrice <= this.rangeInput[1].max){
                if(e.target.className === "input-min"){
                    this.rangeInput[0].value = this.minPrice;
                    this.range.style.left = ((this.minPrice / this.rangeInput[0].max) * 100) + "%";
                }else{
                    this.rangeInput[1].value = this.maxPrice;
                    this.range.style.right = 100 - (this.maxPrice / this.rangeInput[1].max) * 100 + "%";
                }
            }
        });
    });
    
    this.rangeInput.forEach(input =>{
        input.addEventListener("input", e =>{
            this.minVal = parseInt(this.rangeInput[0].value),
            this.maxVal = parseInt(this.rangeInput[1].value);
    
            if((this.maxVal - this.minVal) < this.priceGap){
                if(e.target.className === "range-min"){
                    this.rangeInput[0].value = this.maxVal - this.priceGap
                }else{
                    this.rangeInput[1].value = this.minVal + this.priceGap;
                }
            }else{
                this.priceInput[0].value = this.minVal;
                this.priceInput[1].value = this.maxVal;
                this.range.style.left = ((this.minVal / this.rangeInput[0].max) * 100) + "%";
                this.range.style.right = 100 - (this.maxVal / this.rangeInput[1].max) * 100 + "%";
            }
        });
    });
  }
}

export { PriceRangeFilter };
