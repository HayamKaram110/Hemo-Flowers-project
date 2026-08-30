

// ==================================================
// PRODUCTS
// ==================================================

let allproducts = document.querySelector(".products");

let categorySelect = document.querySelector("select");

let searchInput =
    document.querySelector("#search-input");

let searchbtn =
    document.querySelector("#search-btn");

let currentProducts = [];


// ==================================================
// PRODUCTS DATA
// ==================================================

let products = [

    {
        id: 1,
        title: "Rustic Elegance Bouquet",
        color: "Burgundy & Blue",
        category: "Flower Bouquets",
        price: "180 LE",
        imgurl: "images/download (6).jpg"
    },

    {
        id: 2,
        title: "Soft Blush Bouquet",
        color: "Soft Pink",
        category: "Flower Bouquets",
        price: "200 LE",
        imgurl: "images/Pastelle - Soft Pastel Gerbera & Rose Bouquet – Elegant Round Arrangement with Worldwide Delivery 💖🌍.jpg"
    },

    {
        id: 3,
        title: "Dusty Rose Bouquet",
        color: "Mauve Pink",
        category: "Flower Bouquets",
        price: "300 LE",
        imgurl: "images/download (1).jpg"
    },

    {
        id: 4,
        title: "Magnolia Vase Arrangement",
        color: "White & Pink",
        category: "Home Decor",
        price: "400 LE",
        imgurl: "images/download (4).jpg"
    },

    {
        id: 5,
        title: "Autumn Warmth Box",
        color: "Orange & Peach",
        category: "Gifts",
        price: "500 LE",
        imgurl: "images/download (5).jpg"
    },

    {
        id: 6,
        title: "Vintage Rose Vase",
        color: "Beige & Maroon",
        category: "Home Decor",
        price: "600 LE",
        imgurl: "images/Wonen met zachtheid en zekerheid_.jpg"
    },

    {
        id: 7,
        title: "Classic Daisy Bouquet",
        color: "White & Burgundy",
        category: "Engagements",
        price: "700 LE",
        imgurl: "images/download (7).jpg"
    },

    {
        id: 8,
        title: "Succulent & Tulip Bouquet",
        color: "Plum & Terracotta",
        category: "Engagements",
        price: "750 LE",
        imgurl: "images/download (8).jpg"
    },

    {
        id: 9,
        title: "Calla Lily & Rose Bouquet",
        color: "Rust & Cream",
        category: "Gifts",
        price: "670 LE",
        imgurl: "images/download (9).jpg"
    },

    {
        id: 10,
        title: "White Rose Bouquet",
        color: "Pure White",
        category: "Weddings",
        price: "1000 LE",
        imgurl: "images/Elegant white rose bouquet – perfect for weddings and special moments_ 🤍🌿.jpg"
    },

    {
        id: 11,
        title: "White Lily Bouquet",
        color: "Off white",
        category: "Weddings",
        price: "1200 LE",
        imgurl: "images/All White Bouquet.jpg"
    },

    {
        id: 12,
        title: "White Orchid Bouquet",
        color: "Pure White",
        category: "Weddings",
        price: "1250 LE",
        imgurl: "images/download (10).jpg"
    },

    {
        id: 13,
        title: "White Tulip Bouquet",
        color: "Pure White",
        category: "Weddings",
        price: "1300 LE",
        imgurl: "images/Buquê de Casamento Tulipas.jpg"
    },

    {
        id: 14,
        title: "Luxe Bridal Bouquet",
        color: "White & Green",
        category: "Weddings",
        price: "1700 LE",
        imgurl: "images/download (12).jpg"
    },

    {
        id: 15,
        title: "Cascading Orchid Bouquet",
        color: "Ivory White",
        category: "Weddings",
        price: "1900 LE",
        imgurl: "images/Classic wedding bouquet.jpg"
    },

    {
        id: 16,
        title: "White Rose Bouquet",
        color: "White & Green",
        category: "Weddings",
        price: "2000 LE",
        imgurl: "images/15 White Bridal Bouquets Inspirations That Feel Unforgettable.jpg"
    }

];


currentProducts = products;


// ==================================================
// GET CART
// ==================================================

function getCart() {

    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];

}


// ==================================================
// UPDATE CART COUNT
// ==================================================

function updateCartCount() {

    let cart = getCart();


    let totalQuantity = cart.reduce(
        (total, item) => {

            return total + (item.quantity || 1);

        },
        0
    );


    let cartCount =
        document.querySelector("#cart-count");


    if (cartCount) {

        cartCount.textContent =
            totalQuantity;

    }

}


// ==================================================
// GET FAVORITES
// ==================================================

function getFavorites() {

    return JSON.parse(
        localStorage.getItem("favorites")
    ) || [];

}


// ==================================================
// DRAW PRODUCTS
// ==================================================

function drawitems(productsToShow) {

    if (!allproducts) return;


    currentProducts =
        productsToShow;


    let cart = getCart();

    let favorites = getFavorites();


    let y = productsToShow.map(
        (item) => {


        let isInCart =
            cart.some(
                (cartItem) => {

                    return cartItem.id === item.id;

                }
            );


        let isFavorite =
            favorites.some(
                (favoriteItem) => {

                    return favoriteItem.id === item.id;

                }
            );


        return `

            <div
                class="
                product_item
                group

                bg-[#FBFAF7]

                border
                border-[#E4E1D8]

                rounded-[28px]

                overflow-hidden

                shadow-sm

                hover:shadow-lg

                transition-all
                duration-500

                flex
                flex-col
                "
            >


                <!-- IMAGE -->

                <div
                    class="
                    relative
                    w-full
                    h-80

                    overflow-hidden

                    bg-[#F0EFE9]
                    "
                >

                    <img
                        class="
                        w-full
                        h-full

                        object-cover

                        group-hover:scale-105

                        transition-transform
                        duration-700
                        "

                        src="${item.imgurl}"

                        alt="${item.title}"
                    >


                    <!-- FAVORITE -->

                    <button
                        onclick="toggleFavorite(${item.id})"

                        class="
                        absolute
                        top-4
                        right-4

                        w-11
                        h-11

                        flex
                        items-center
                        justify-center

                        rounded-full

                        bg-[#FBFAF7]/95

                        shadow-md

                        transition-all
                        duration-300

                        ${
                            isFavorite
                            ?
                            "text-[#A56F6F]"
                            :
                            "text-[#71806F]"
                        }
                        "
                    >

                        <i
                            class="
                            ${
                                isFavorite
                                ?
                                "fas"
                                :
                                "far"
                            }
                            fa-heart
                            text-[17px]
                            "
                        ></i>

                    </button>

                </div>



                <!-- PRODUCT INFO -->

                <div
                    class="
                    product_item_desc

                    px-5
                    pt-5
                    pb-3

                    flex-1
                    "
                >

                    <div
                        class="
                        flex
                        items-center
                        justify-between

                        gap-3
                        "
                    >

                        <h2
                            class="
                            text-xl

                            font-semibold

                            text-[#343936]
                            "
                        >
                            ${item.title}
                        </h2>


                        <span
                            class="
                            text-[11px]

                            px-3
                            py-1.5

                            rounded-full

                            bg-[#E8EDE5]

                            text-[#657262]

                            whitespace-nowrap
                            "
                        >
                            ${item.color}
                        </span>

                    </div>


                    <p
                        class="
                        text-sm

                        text-[#777D78]

                        mt-3
                        "
                    >
                        ${item.price}
                    </p>

                </div>



                <!-- CART BUTTON -->

                <div class="px-5 pb-5">

                    ${
                        isInCart

                        ?

                        `

                        <button
                            onclick="removeFromCart(${item.id})"

                            class="
                            w-full
                            py-3

                            rounded-2xl

                            bg-[#A56F6F]

                            text-white

                            font-medium

                            hover:bg-[#925F5F]

                            transition-all
                            duration-300
                            "
                        >

                            <i
                                class="
                                fas
                                fa-trash
                                mr-2
                                "
                            ></i>

                            Remove From Cart

                        </button>

                        `

                        :

                        `

                        <button
                            onclick="addToCart(${item.id})"

                            class="
                            w-full
                            py-3

                            rounded-2xl

                            bg-[#71806F]

                            text-white

                            font-medium

                            hover:bg-[#5E6C5C]

                            transition-all
                            duration-300
                            "
                        >

                            <i
                                class="
                                fas
                                fa-shopping-bag
                                mr-2
                                "
                            ></i>

                            Add To Cart

                        </button>

                        `
                    }

                </div>

            </div>

        `;

    }).join("");


    allproducts.innerHTML = y;

}


// ==================================================
// ADD TO CART
// ==================================================

function addToCart(productId) {

    let product =
        products.find(
            (item) => {

                return item.id === productId;

            }
        );


    if (!product) return;


    let cart = getCart();


    let existingProduct =
        cart.find(
            (item) => {

                return item.id === productId;

            }
        );


    if (existingProduct) {

        existingProduct.quantity =
            (existingProduct.quantity || 1) + 1;

    }

    else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    updateCartCount();


    drawitems(currentProducts);


    drawCartDropdown();

}


// ==================================================
// REMOVE FROM CART
// ==================================================

function removeFromCart(productId) {

    let cart = getCart();


    cart =
        cart.filter(
            (item) => {

                return item.id !== productId;

            }
        );


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    updateCartCount();


    drawitems(currentProducts);


    drawCartDropdown();


    if (typeof drawCart === "function") {

        drawCart();

    }

}


// ==================================================
// TOGGLE FAVORITE
// ==================================================

function toggleFavorite(productId) {

    let favorites =
        getFavorites();


    let product =
        products.find(
            (item) => {

                return item.id === productId;

            }
        );


    if (!product) return;


    let existingFavorite =
        favorites.find(
            (item) => {

                return item.id === productId;

            }
        );


    if (existingFavorite) {

        favorites =
            favorites.filter(
                (item) => {

                    return item.id !== productId;

                }
            );

    }

    else {

        favorites.push(product);

    }


    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );


    drawitems(currentProducts);

}


// ==================================================
// CATEGORY FILTER
// ==================================================

if (categorySelect) {

    categorySelect.addEventListener(
        "change",
        function () {


        if (categorySelect.value === "") {

            drawitems(products);

        }

        else {

            let filteredProducts =
                products.filter(
                    (item) => {

                        return (
                            categorySelect.value ===
                            item.category
                        );

                    }
                );


            drawitems(filteredProducts);

        }

    });

}


// ==================================================
// SEARCH
// ==================================================

if (searchbtn && searchInput) {

    searchbtn.addEventListener(
        "click",
        function () {


        let searchValue =
            searchInput.value
            .trim()
            .toLowerCase();


        if (searchValue === "") {

            drawitems(products);

            return;

        }


        let filteredProducts =
            products.filter(
                (item) => {

                    return item.title
                        .toLowerCase()
                        .includes(searchValue);

                }
            );


        if (
            filteredProducts.length === 0
        ) {

            if (allproducts) {

                allproducts.innerHTML = `

                    <div
                        class="
                        col-span-full
                        text-center
                        py-20
                        "
                    >

                        <i
                            class="
                            fas
                            fa-search

                            text-5xl

                            text-[#AEB9AA]

                            mb-5
                            "
                        ></i>


                        <h2
                            class="
                            text-2xl

                            font-semibold

                            text-[#5E685F]
                            "
                        >
                            Product Not Found
                        </h2>


                        <p
                            class="
                            text-[#8A918B]

                            mt-2
                            "
                        >
                            Sorry, we couldn't find
                            "${searchInput.value}"
                        </p>

                    </div>

                `;

            }

        }

        else {

            drawitems(filteredProducts);

        }

    });

}


// ==================================================
// LOGIN / LOGOUT
// ==================================================

let authArea =
    document.querySelector("#auth-area");


let userArea =
    document.querySelector("#user-area");


let usernameDisplay =
    document.querySelector("#username-display");


let logoutBtn =
    document.querySelector("#logout-btn");


let loggedInUser =
    localStorage.getItem("loggedInUser");


if (loggedInUser) {

    if (authArea) {

        authArea.classList.add("hidden");

    }


    if (userArea) {

        userArea.classList.remove("hidden");

        userArea.classList.add("flex");

    }


    if (usernameDisplay) {

        usernameDisplay.textContent =
            loggedInUser;

    }

}

else {

    if (authArea) {

        authArea.classList.remove("hidden");

    }


    if (userArea) {

        userArea.classList.add("hidden");

        userArea.classList.remove("flex");

    }

}


// ==================================================
// LOGOUT
// ==================================================

if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "loggedInUser"
            );


            window.location.href =
                "index.html";

        }
    );

}


// ==================================================
// CART DROPDOWN
// ==================================================

let cartToggle =
    document.querySelector("#cart-toggle");


let cartDropdown =
    document.querySelector("#cart-dropdown");


let cartDropdownProducts =
    document.querySelector(
        "#cart-dropdown-products"
    );


// ==================================================
// DRAW CART DROPDOWN
// ==================================================

function drawCartDropdown() {

    if (!cartDropdownProducts) return;


    let cart = getCart();


    cartDropdownProducts.innerHTML = "";


    // ==================================================
    // EMPTY CART
    // ==================================================

    if (cart.length === 0) {

        cartDropdownProducts.innerHTML = `

            <div
                class="
                text-center
                py-8
                px-4
                "
            >

                <div
                    class="
                    w-14
                    h-14

                    mx-auto
                    mb-3

                   
                  

                    flex
                    items-center
                    justify-center
                    "
                >

                </div>


                <h4
                    class="
                    text-sm
                     flex
                    items-center
                    justify-center
                    font-semibold
                    text-[#5E685F]
                    "
                >
                    Your Cart Is Empty
                </h4>


            </div>

        `;

        return;

    }


    // ==================================================
    // FIRST 3 PRODUCTS
    // ==================================================

    let firstThreeProducts =
        cart.slice(0, 3);


    firstThreeProducts.forEach(
        (item) => {


        let quantity =
            item.quantity || 1;


        cartDropdownProducts.innerHTML += `

            <div
                class="
                flex
                items-center

                gap-3

                py-3

                border-b
                border-[#EDEAE3]

                last:border-b-0
                "
            >


              


                <!-- INFO -->

                <div
                    class="
                    flex-1
                    min-w-0
                    "
                >

                    <h4
                        class="
                        text-sm

                        font-semibold

                        text-[#343936]

                        truncate
                        "
                    >
                        ${item.title}
                    </h4>


                    <p
                        class="
                        text-xs

                        text-[#71806F]

                        font-semibold

                        mt-1
                        "
                    >
                        ${item.price}
                    </p>



                    <!-- QUANTITY -->

                    <div
                        class="
                        inline-flex
                        items-center

                        gap-2

                        mt-2

                        bg-[#EEF2EC]

                        border
                        border-[#DCE4D9]

                        rounded-xl

                        px-1
                        py-1
                        "
                    >


                        <!-- MINUS -->

                        <button
                            type="button"

                            onclick="
                                decreaseDropdownQuantity(${item.id})
                            "

                            class="
                            w-6
                            h-6

                            flex
                            items-center
                            justify-center

                            rounded-lg

                            text-[#5E685F]

                            hover:bg-[#DCE4D9]

                            transition
                            "
                        >

                            <i
                                class="
                                fas
                                fa-minus
                                text-[9px]
                                "
                            ></i>

                        </button>



                        <!-- NUMBER -->

                        <span
                            class="
                            w-5

                            text-center

                            text-xs

                            font-bold

                            text-[#343936]
                            "
                        >
                            ${quantity}
                        </span>



                        <!-- PLUS -->

                        <button
                            type="button"

                            onclick="
                                increaseDropdownQuantity(${item.id})
                            "

                            class="
                            w-6
                            h-6

                            flex
                            items-center
                            justify-center

                            rounded-lg

                            text-[#5E685F]

                            hover:bg-[#DCE4D9]

                            transition
                            "
                        >

                            <i
                                class="
                                fas
                                fa-plus
                                text-[9px]
                                "
                            ></i>

                        </button>

                    </div>

                </div>

        `;

    });


    // ==================================================
    // MORE PRODUCTS
    // ==================================================

    if (cart.length > 3) {

        cartDropdownProducts.innerHTML += `

            <p
                class="
                text-center

                text-xs

                text-[#8A918B]

                pt-3
                "
            >
                + ${cart.length - 3} more product(s)
            </p>

        `;

    }

}


// ==================================================
// INCREASE DROPDOWN QUANTITY
// ==================================================

function increaseDropdownQuantity(productId) {

    let cart = getCart();


    let product =
        cart.find(
            (item) => {

                return item.id === productId;

            }
        );


    if (!product) return;


    product.quantity =
        (product.quantity || 1) + 1;


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    updateCartCount();


    drawCartDropdown();


    drawitems(currentProducts);


    if (typeof drawCart === "function") {

        drawCart();

    }

}


// ==================================================
// DECREASE DROPDOWN QUANTITY
// ==================================================

function decreaseDropdownQuantity(productId) {

    let cart = getCart();


    let product =
        cart.find(
            (item) => {

                return item.id === productId;

            }
        );


    if (!product) return;


    if (
        (product.quantity || 1) > 1
    ) {

        product.quantity--;

    }

    else {

        cart =
            cart.filter(
                (item) => {

                    return item.id !== productId;

                }
            );

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    updateCartCount();


    drawCartDropdown();


    drawitems(currentProducts);


    if (typeof drawCart === "function") {

        drawCart();

    }

}


// ==================================================
// OPEN / CLOSE CART DROPDOWN
// ==================================================

if (
    cartToggle &&
    cartDropdown
) {

    cartToggle.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();


            cartDropdown.classList.toggle(
                "hidden"
            );


            drawCartDropdown();

        }
    );



    // ==================================================
    // CLOSE WHEN CLICK OUTSIDE
    // ==================================================

    document.addEventListener(
        "click",
        function (event) {


            if (
                !cartDropdown.contains(
                    event.target
                )

                &&

                !cartToggle.contains(
                    event.target
                )
            ) {

                cartDropdown.classList.add(
                    "hidden"
                );

            }

        }
    );

}


// ==================================================
// INITIAL DISPLAY
// ==================================================

drawitems(products);

updateCartCount();

drawCartDropdown();