const productsContainer = document.querySelector('.products')
const shopCartSidebar = document.querySelector('.shop-cart-sidebar')
const subTotalPriceContiner = document.querySelector('.sub-total-price')
const bestSellersContainer = document.querySelector('.best-sellers')
const tooltip = document.querySelector('.tooltip')
const navbar = document.querySelector('navbar-xxl-another-page')
const viewCart =  document.querySelector('.cart-btn')

// const filterBtnPriceRange = document.querySelector('filter')
// console.log(navbar.shadowRoot.children[2].children[1].lastElementChild.firstElementChild.lastElementChild);
// navbar.shadowRoot.children[2].children[1].lastElementChild.firstElementChild.lastElementChild.classList.add('hide')

let cartArray = JSON.parse(localStorage.getItem('CART')) || [];



const renderingProduct =  () =>{
     productDatas.forEach( product => {

        productsContainer.innerHTML += `
                    
            <div class="product-container ">
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
}



bestSellersProducs.forEach( product =>{
        bestSellersContainer.innerHTML += `
        <div class="best-container">
        <div class="img">
          <img class="product-img" src=${product.img} alt="product image"/>
        </div>
        <div  class="product-information" >
            <h5 class="product-name">${product.name}</h5>
            <div class="product-star-rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <div class="product-price">
                <span class="disCount">${product.discount ? product.discount : ''}</span>
                <span class="price">$${product.price}</span>
            </div>
        </div>
        </div>
        `
})


function addToCart(productID){


    let showToolTip  = tooltip.classList.add('show')
    
    setInterval(()=>{
        tooltip.classList.remove('show')
    },3000)


    if(cartArray.some( product => productID === product.id)){
        changeNumber('plus',productID)

    }else{
        let itemAddToCart = productDatas.find(product => product.id === productID)
        window.addEventListener('load',renderingProduct);
        cartArray.push({...itemAddToCart,numberOfRepeat:1})
    }
    
    update()
}

function update(){
  
    cartInShopPage()
    subTotalPrice()

    localStorage.setItem('CART',JSON.stringify(cartArray))
}

function cartInShopPage (){
    
    shopCartSidebar.innerHTML = ''
    cartArray.forEach(product =>{
        shopCartSidebar.innerHTML += `
            <div class="product-in-shop-cart">
                <img src="${product.img}" alt="${product.name}"/>
                <div class="info">
                        <div class="text-cart">
                            <h5 class="name">${product.name}</h5>
                            <p class="price-sidebar">$${product.price}</p>
                        </div>

                        <div class="number-product-container">
                           <div class="number-product">
                            <div class="minus" onclick="changeNumber('minus',${product.id})">-</div>
                            <span class="number">${product.numberOfRepeat}</span>
                            <div class="plus" onclick="changeNumber('plus',${product.id})">+</div>
                           </div>
                        </div>


                    <span class="remove-item" onclick="removeItem(${product.id})">X</span>
                </div>
            </div>
            
        `
    })

}

function changeNumber(action,id){
    cartArray = cartArray.map(product =>{
        let numberOfRepeat = product.numberOfRepeat;
        
        if(product.id === id){
            if(action === 'minus' && numberOfRepeat > 1){
                numberOfRepeat--                 

            }else if(action ==='plus'){
                numberOfRepeat++
            }
        }

        return{
            ...product,
            numberOfRepeat,
        }

    })
    update()
}


const subTotalPrice = () =>{
    let totalPrice = 0
    let totalItems = 0

    cartArray.forEach( product => {
        subTotalPriceContiner.innerHTML=''
        totalPrice += product.price * product.numberOfRepeat
        totalItems += product.numberOfRepeat
        subTotalPriceContiner.innerHTML +=`
        <h3 >Subtotal :&nbsp&nbsp <span class="total-price">$${totalPrice.toFixed(2)}</span></h3>
        `
    })
   
}
subTotalPrice()

function removeItem (id){
    subTotalPriceContiner.innerHTML='<h3>Subtotal : $ 0</h3>'

   cartArray = cartArray.filter(product => product.id !== id)

    
    update()
}

viewCart.addEventListener('click',()=>{
location.href = "./shop/cart.html"
})


window.addEventListener('load',renderingProduct);
window.addEventListener('load',cartInShopPage);

