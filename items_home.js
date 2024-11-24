fetch('products.json')
.then(response => response.json())
.then(data => {

    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const swiper_item_sale = document.getElementById("swiper_item_sale")
    const swiper_item_electronics = document.getElementById("swiper_item_electronics")
    const swiper_item_appliances = document.getElementById("swiper_item_appliances")
    const swiper_item_mobiles = document.getElementById("swiper_item_mobiles")

    data.forEach(product => {
        if(product.old_price){

            const isInCart = cart.some(cartItem => cartItem.id === product.id)

            const precent_disc = Math.floor((product.old_price - product.price)  / product.old_price * 100)
            
            swiper_item_sale.innerHTML += `
            
                    <div class="swiper-slide product">

                        <span class="sale_present">%${precent_disc}</span>

                        <div class="img_product">
                            <a href="#"><img src="${product.img}"></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="name_product"><a href="#">${product.name}</a></p>

                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old_price">$${product.old_price}</p>
                        </div>

                        <div class="icons">
                            <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'item in cart' : 'add to cart'}
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>

                    </div>
            
            `


        }
    });

    data.forEach(product => {
        if(product.catetory === "electronics"){

            const isInCart = cart.some(cartItem => cartItem.id === product.id)

            const precent_disc = Math.floor((product.old_price - product.price)  / product.old_price * 100)
            const old_price_paragraph = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : ""
            const precent_disc_paragraph = product.old_price ? `<span class="sale_present">%${precent_disc}</span>` : ""
            
            swiper_item_electronics.innerHTML += `
            
                    <div class="swiper-slide product">

                        ${precent_disc_paragraph}

                        <div class="img_product">
                            <a href="#"><img src="${product.img}"></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="name_product"><a href="#">${product.name}</a></p>

                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_paragraph}
                        </div>

                        <div class="icons">
                            <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'item in cart' : 'add to cart'}
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>

                    </div>
            
            `


        }
    });

    data.forEach(product => {
        if(product.catetory === "appliances"){

            const isInCart = cart.some(cartItem => cartItem.id === product.id)

            const precent_disc = Math.floor((product.old_price - product.price)  / product.old_price * 100)
            const old_price_paragraph = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : ""
            const precent_disc_paragraph = product.old_price ? `<span class="sale_present">%${precent_disc}</span>` : ""
            
            swiper_item_appliances.innerHTML += `
            
                    <div class="swiper-slide product">

                        ${precent_disc_paragraph}

                        <div class="img_product">
                            <a href="#"><img src="${product.img}"></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="name_product"><a href="#">${product.name}</a></p>

                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_paragraph}
                        </div>

                        <div class="icons">
                            <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'item in cart' : 'add to cart'}
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>

                    </div>
            
            `


        }
    });

    data.forEach(product => {
        if(product.catetory === "mobiles"){

            const isInCart = cart.some(cartItem => cartItem.id === product.id)

            const precent_disc = Math.floor((product.old_price - product.price)  / product.old_price * 100)
            const old_price_paragraph = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : ""
            const precent_disc_paragraph = product.old_price ? `<span class="sale_present">%${precent_disc}</span>` : ""
            
            swiper_item_mobiles.innerHTML += `
            
                    <div class="swiper-slide product">

                        ${precent_disc_paragraph}

                        <div class="img_product">
                            <a href="#"><img src="${product.img}"></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="name_product"><a href="#">${product.name}</a></p>

                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_paragraph}
                        </div>

                        <div class="icons">
                            <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'item in cart' : 'add to cart'}
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>

                    </div>
            
            `


        }
    });
    
})