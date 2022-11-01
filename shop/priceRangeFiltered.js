const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider-range .progress"),
inputsTypeNumberContainer = document.querySelectorAll('.inputs-container input')

const productsContainerInPrice = document.querySelector('.products')

const filterBtnPriceRange = document.querySelector('.filter')

 

let priceGap = 1;


rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
  
      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });

priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
  
      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });

  filterBtnPriceRange.addEventListener('click',()=>{
    let minVal = parseInt(rangeInput[0].value),
    maxVal = parseInt(rangeInput[1].value);

    let filterdItem = productDatas.filter(product => product.price <= maxVal && product.price >= minVal)
   
    if(filterdItem.length !== 0) {
      document.querySelector('.alert-price').classList.remove('show-alert')

      productsContainerInPrice.innerHTML = ''
    filterdItem.forEach( product => {


          productsContainerInPrice.innerHTML += `
        
      <div class="product-container">
        <div class="img">
        <img class="product-img" src=${product.img} alt="product image"/>
        <slot name="SALE!"></slot>

        <div class="product-overlay">
        <img src=${product.img} class="overlay-img" alt="overlay image product">
            <button type="button" onclick="addToCart(${product.id})" class="add-to-cart" >
                <i class="fa-brands fa-opencart"></i>
                ADD TO CART
            </button>
        </div>

    </div>

    <div  class="product-information" >
        <h3 class="product-name">${product.name}</h3>
        <div class="product-star-rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <div class="product-price">
            <span class="disCount">${product.discount}</span>
            <span class="price">$${product.price}</span>
        </div>
    </div>

</div>
        
        `
  
    })
    }else{

   
        document.querySelector('.alert-price').classList.add('show-alert')

     
      
    }

    


})