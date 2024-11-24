// open and close category_nav_list

const category_btn = document.querySelector(".category_btn")
const category_nav_list = document.querySelector(".category_nav_list")

function openCategoryNavList(){
    category_nav_list.classList.toggle("active")
}

let nav_links = document.querySelector(".nav_links")

function open_menu(){
    nav_links.classList.toggle("active")
}


// open and close cart

var cart = document.querySelector(".cart")

function open_close_cart(){
    cart.classList.toggle('active')
}


fetch('products.json')
.then(response => response.json())
.then(data => {
    
    const addToCartButtons = document.querySelectorAll(".btn_add_cart")

    addToCartButtons.forEach(button =>{
        button.addEventListener("click", (event) => {
            const productId = event.target.getAttribute('data-id')
            const selectedProduct = data.find(product => product.id == productId)


            addToCart(selectedProduct)

            const allMatchingButtons = document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`)

            allMatchingButtons.forEach(btn => {
                btn.classList.add("active")
                btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Item in cart`
            })
        })
    })    
    
})



function addToCart(product){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    
    cart.push({... product , quantity: 1})
    localStorage.setItem('cart' , JSON.stringify(cart))
    updateCart()
}



function updateCart(){
    const cartItemsContainer = document.getElementById("cart_items")
    const cart = JSON.parse(localStorage.getItem('cart')) || []

    var total_price = 0
    var total_count = 0

    cartItemsContainer.innerHTML = '';
    cart.forEach((item , index) => {

        let total_price_item = item.price * item.quantity

        total_price += total_price_item
        total_count += item.quantity

        cartItemsContainer.innerHTML += `
        
        <div class="item_cart">
                <img src="${item.img}">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price_cart">$${total_price_item}</p>
                    <div class="quantity_controls">
                        <button class="decrease_quantity" data-index=${index}>-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase_quantity" data-index=${index}>+</button>
                    </div>

                </div>

                <button class="delete_item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>

        </div>

        `
    })


    const price_cart_total = document.querySelector(".price_cart_total")
    const count_item_cart = document.querySelector(".count_item_cart")
    const count_item_header = document.querySelector(".count_item_header")

    price_cart_total.innerHTML = `$${total_price}`
    count_item_cart.innerHTML = total_count
    count_item_header.innerHTML = total_count

    const increaseButtons = document.querySelectorAll(".increase_quantity")
    const decreaseButtons = document.querySelectorAll(".decrease_quantity")

    increaseButtons.forEach(button => {
        button.addEventListener("click" , (event) =>{
            const ItemIndex = event.target.getAttribute("data-index")
            increaseQuantity(ItemIndex)
        })
    })

    decreaseButtons.forEach(button => {
        button.addEventListener("click" , (event) =>{
            const ItemIndex = event.target.getAttribute("data-index")
            decreaseQuantity(ItemIndex)
        })
    })

    const deleteButtons = document.querySelectorAll('.delete_item')

    deleteButtons.forEach(button => {
        button.addEventListener("click", (event) =>{
            const ItemIndex = event.target.closest("button").getAttribute('data-index')
            removeFromCart(ItemIndex)
        })
    })
}



function increaseQuantity(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart[index].quantity += 1
    localStorage.setItem("cart" , JSON.stringify(cart))
    updateCart()
}

function decreaseQuantity(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || []

    if(cart[index].quantity > 1){
        cart[index].quantity -= 1
    }
    localStorage.setItem("cart" , JSON.stringify(cart))
    updateCart()
}




function removeFromCart(index){
    const cart = JSON.parse(localStorage.getItem('cart')) || []

    const removeProduct = cart.splice(index , 1)[0]
    localStorage.setItem("cart" , JSON.stringify(cart))
    updateCart()
    updateButtonsState(removeProduct.id)
}

function updateButtonsState(productId){
    const allMatchingButtons = document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`)

    allMatchingButtons.forEach(button =>{
        button.classList.remove("active")
        button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> add to cart`
    })
}


updateCart()