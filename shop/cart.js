
const subTotalPriceContiner = document.querySelector('.sub')
const table = document.querySelector('.products-table')

let cartArray = JSON.parse(localStorage.getItem('CART')) || [];
console.log(cartArray);

function cartInShopPage (){

    table.innerHTML=''
    table.innerHTML=`
    <div class="heading-table">
    <span>Product</span>
    <span>price</span>
    <span>Quantity</span>
    <span>Total</span>
</div>`
    cartArray.forEach( product => {
        table.innerHTML += `
    <div class="product-info">
    
    
            <div class="product-details">
                <span><i class="fa-solid fa-xmark" onclick="removeItem(${product.id})"></i></span>
                <img src="${product.img}" alt="${product.name}"/>
                <h4>${product.name}</h4>
            </div>
      
    
         
           <div class="price">
                <span class="display">Price : </span>
                <span class="text"> $${product.price}</span>
            </div>
       
    
       
             <div class="quantity">
                <span class="display">Quantity :</span>
                <span class="icons">
                    <span class="icon" onclick="changeNumber('minus',${product.id})" ><i class="fa-solid fa-minus" ></i></span>
                    <span class="number">${product.numberOfRepeat}</span>
                    <span class="icon" onclick="changeNumber('plus',${product.id})"><i class="fa-solid fa-plus" ></i></span>
                </span>

             </div>
       
    
        
             <div class="total-price">
                    <span class="display">Total Price : </span>
                    <span class="text"> $${product.price * product.numberOfRepeat}</span>
             </div>
        
       
    
    </div>
        `
    })
  
    if(cartArray.length === 0){
        document.querySelector('.cart-cotainer-fluid').innerHTML = `

        <div class="empty-cart">Your cart is currently empty.</div>
        
            `
    }
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
        subTotalPriceContiner.innerHTML =`
        <h3 >Total :&nbsp&nbsp <span class="total-price">$${totalPrice.toFixed(2)}</span></h3>
        `
    })
   
}
subTotalPrice()

function removeItem (id){
    subTotalPriceContiner.innerHTML='<h3>Subtotal : $ 0</h3>'

   cartArray = cartArray.filter(product => product.id !== id)

    
    update()
}

function update(){
  
    cartInShopPage()
    subTotalPrice()

    localStorage.setItem('CART',JSON.stringify(cartArray))
}

window.addEventListener('load',cartInShopPage);
