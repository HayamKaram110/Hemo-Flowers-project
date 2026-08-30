// ==================================================
// CART ELEMENTS
// ==================================================

let cartProducts =
    document.querySelector("#cart-products");


let totalPrice =
    document.querySelector("#total-price");


let totalItems =
    document.querySelector("#total-items");


let favoritesProducts =
    document.querySelector("#favorites-products");


// ==================================================
// GET CART
// ==================================================

function getCart() {

    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];

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
// UPDATE CART COUNT
// ==================================================

function updateCartCount() {

    let cart = getCart();


    let totalQuantity =
        cart.reduce(
            (total, item) => {

                return total +
                    (item.quantity || 1);

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
// DRAW CART
// ==================================================

function drawCart() {

    if (!cartProducts) return;


    let cart = getCart();


    cartProducts.innerHTML = "";


    let total = 0;

    let itemsCount = 0;


    // ==================================================
    // EMPTY CART
    // ==================================================

    if (cart.length === 0) {

        cartProducts.innerHTML = `

            <div
                class="
                col-span-full
                text-center
                py-16
                "
            >

                <h2
                    class="
                    text-sm
                    text-[#5E685F]
                    "
                >
                    Your Cart Is Empty
                </h2>

            </div>

        `;


        if (totalPrice) {

            totalPrice.textContent =
                "0 LE";

        }


        if (totalItems) {

            totalItems.textContent =
                "0";

        }


        updateCartCount();

        return;

    }


    // ==================================================
    // DRAW PRODUCTS
    // ==================================================

    cart.forEach(
        (item) => {


        let price =
            parseFloat(
                String(item.price)
                    .replace("LE", "")
                    .trim()
            );


        let quantity =
            item.quantity || 1;


        let productTotal =
            price * quantity;


        total += productTotal;


        itemsCount += quantity;


        cartProducts.innerHTML += `

            <div
                class="
                group

                bg-[#FBFAF7]

                border
                border-[#E4E1D8]

                rounded-[30px]

                p-5
                md:p-6

                shadow-[0_4px_20px_rgba(60,70,60,0.06)]

                hover:shadow-[0_12px_35px_rgba(60,70,60,0.12)]

                hover:-translate-y-1

                transition-all
                duration-300
                "
            >


                <div
                    class="
                    flex
                    flex-col
                    sm:flex-row

                    gap-6

                    min-h-[250px]
                    "
                >


                    <!-- IMAGE -->

                    <div
                        class="
                        w-full

                        sm:w-52
                        md:w-56

                        h-60
                        sm:h-52
                        md:h-56

                        flex-shrink-0

                        overflow-hidden

                        rounded-[24px]

                        bg-[#F0EFE9]
                        "
                    >

                        <img
                            src="${item.imgurl}"

                            alt="${item.title}"

                            class="
                            w-full
                            h-full

                            object-cover

                            group-hover:scale-105

                            transition-transform
                            duration-500
                            "
                        >

                    </div>



                    <!-- INFO -->

                    <div
                        class="
                        flex-1

                        flex
                        flex-col

                        justify-between

                        py-1
                        "
                    >


                        <div>

                            <div
                                class="
                                flex
                                flex-col

                                md:flex-row

                                md:items-start

                                md:justify-between

                                gap-4
                                "
                            >


                                <div>

                                    <h2
                                        class="
                                        text-xl
                                        md:text-2xl

                                        font-semibold

                                        text-[#343936]

                                        leading-snug
                                        "
                                    >
                                        ${item.title}
                                    </h2>


                                    <span
                                        class="
                                        inline-block

                                        mt-3

                                        px-4
                                        py-1.5

                                        rounded-full

                                        bg-[#E8EDE5]

                                        text-[#657262]

                                        text-xs

                                        font-medium
                                        "
                                    >
                                        ${item.color}
                                    </span>

                                </div>



                                <!-- REMOVE -->

                                <button
                                    onclick="
                                        removeFromCart(${item.id})
                                    "

                                    class="
                                    w-full
                                    md:w-auto

                                    px-5
                                    py-2.5

                                    rounded-2xl

                                    bg-[#F1E2E0]

                                    text-[#A56F6F]

                                    border
                                    border-[#E5C9C5]

                                    font-semibold

                                    text-sm

                                    whitespace-nowrap

                                    hover:bg-[#A56F6F]

                                    hover:text-white

                                    hover:border-[#A56F6F]

                                    transition-all
                                    duration-300
                                    "
                                >

                                    <i
                                        class="
                                        fas
                                        fa-trash-alt
                                        mr-2
                                        "
                                    ></i>

                                    Remove From Cart

                                </button>

                            </div>

                        </div>



                        <!-- BOTTOM -->

                        <div
                            class="
                            mt-8

                            pt-5

                            border-t
                            border-[#E4E1D8]

                            flex
                            flex-col

                            sm:flex-row

                            sm:items-end

                            sm:justify-between

                            gap-6
                            "
                        >


                            <!-- PRICE -->

                            <div>

                                <p
                                    class="
                                    text-sm

                                    text-[#8A918B]

                                    mb-1
                                    "
                                >
                                    Price
                                </p>


                                <span
                                    class="
                                    text-2xl

                                    font-bold

                                    text-[#71806F]
                                    "
                                >
                                    ${item.price}
                                </span>

                            </div>



                            <!-- QUANTITY -->

                            <div>

                                <p
                                    class="
                                    text-sm

                                    text-[#8A918B]

                                    mb-2
                                    "
                                >
                                    Quantity
                                </p>


                                <div
                                    class="
                                    inline-flex

                                    items-center

                                    gap-4

                                    bg-[#EEF2EC]

                                    border
                                    border-[#DCE4D9]

                                    rounded-2xl

                                    px-2
                                    py-1.5
                                    "
                                >


                                    <!-- MINUS -->

                                    <button
                                        onclick="
                                            decreaseQuantity(${item.id})
                                        "

                                        class="
                                        w-9
                                        h-9

                                        flex
                                        items-center
                                        justify-center

                                        rounded-xl

                                        text-[#5E685F]

                                        hover:bg-[#DCE4D9]

                                        hover:scale-105

                                        transition-all
                                        duration-200
                                        "
                                    >

                                        <i
                                            class="
                                            fas
                                            fa-minus
                                            text-xs
                                            "
                                        ></i>

                                    </button>



                                    <!-- NUMBER -->

                                    <span
                                        class="
                                        w-8

                                        text-center

                                        text-lg

                                        font-bold

                                        text-[#343936]
                                        "
                                    >
                                        ${quantity}
                                    </span>



                                    <!-- PLUS -->

                                    <button
                                        onclick="
                                            increaseQuantity(${item.id})
                                        "

                                        class="
                                        w-9
                                        h-9

                                        flex
                                        items-center
                                        justify-center

                                        rounded-xl

                                        text-[#5E685F]

                                        hover:bg-[#DCE4D9]

                                        hover:scale-105

                                        transition-all
                                        duration-200
                                        "
                                    >

                                        <i
                                            class="
                                            fas
                                            fa-plus
                                            text-xs
                                            "
                                        ></i>

                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        `;

    });


    // ==================================================
    // TOTAL
    // ==================================================

    if (totalPrice) {

        totalPrice.textContent =
            `${total} LE`;

    }


    if (totalItems) {

        totalItems.textContent =
            itemsCount;

    }


    updateCartCount();

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


    drawCart();


    if (
        typeof drawitems === "function"
    ) {

        drawitems(currentProducts);

    }


    if (
        typeof drawCartDropdown === "function"
    ) {

        drawCartDropdown();

    }

}


// ==================================================
// INCREASE QUANTITY
// ==================================================

function increaseQuantity(productId) {

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


    drawCart();


    updateCartCount();


    if (
        typeof drawCartDropdown === "function"
    ) {

        drawCartDropdown();

    }

}


// ==================================================
// DECREASE QUANTITY
// ==================================================

function decreaseQuantity(productId) {

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


    drawCart();


    updateCartCount();


    if (
        typeof drawCartDropdown === "function"
    ) {

        drawCartDropdown();

    }

}


// ==================================================
// DRAW FAVORITES
// ==================================================

function drawFavorites() {

    if (!favoritesProducts) return;


    let favorites =
        getFavorites();


    favoritesProducts.innerHTML = "";


    // ==================================================
    // EMPTY FAVORITES
    // ==================================================

    if (favorites.length === 0) {

        favoritesProducts.innerHTML = `

            <div
                class="
                col-span-full

                text-center

                py-12
                "
            >

                <p
                    class="
                    text-sm

                    text-[#5E685F]
                    "
                >
                    No Favorites added Yet
                </p>

            </div>

        `;

        return;

    }


    // ==================================================
    // DRAW FAVORITES
    // ==================================================

    favorites.forEach(
        (item) => {


        favoritesProducts.innerHTML += `

            <div
                class="
                bg-[#FBFAF7]

                w-80

                border
                border-[#E4E1D8]

                rounded-[26px]

                overflow-hidden

                shadow-sm

                hover:shadow-lg

                hover:-translate-y-1

                transition-all
                duration-300
                "
            >


                <!-- IMAGE -->

                <div
                    class="
                    relative
                    h-80
                    "
                >

                    <img
                        src="${item.imgurl}"

                        alt="${item.title}"

                        class="
                        w-full
                        h-full

                        object-cover
                        "
                    >


                    <!-- REMOVE FAVORITE -->

                    <button
                        onclick="
                            removeFromFavorites(${item.id})
                        "

                        class="
                        absolute
                        top-4
                        right-4

                        w-10
                        h-10

                        rounded-full

                        bg-[#FBFAF7]/95

                        text-[#A56F6F]

                        hover:bg-[#A56F6F]

                        hover:text-white

                        transition
                        "
                    >

                        <i
                            class="
                            fas
                            fa-heart
                            "
                        ></i>

                    </button>

                </div>



                <!-- INFO -->

                <div class="p-5">

                    <h3
                        class="
                        text-lg

                        font-semibold

                        text-[#343936]
                        "
                    >
                        ${item.title}
                    </h3>


                    <span
                        class="
                        inline-block

                        mt-2

                        px-3
                        py-1

                        rounded-full

                        bg-[#E8EDE5]

                        text-[#657262]

                        text-xs
                        "
                    >
                        ${item.color}
                    </span>


                    <div
                        class="
                        flex
                        items-center
                        justify-between

                        mt-5
                        "
                    >

                        <span
                            class="
                            font-bold

                            text-[#71806F]
                            "
                        >
                            ${item.price}
                        </span>

                    </div>

                </div>

            </div>

        `;

    });

}


// ==================================================
// REMOVE FROM FAVORITES
// ==================================================

function removeFromFavorites(productId) {

    let favorites =
        getFavorites();


    favorites =
        favorites.filter(
            (item) => {

                return item.id !== productId;

            }
        );


    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );


    drawFavorites();

}


// ==================================================
// ADD FAVORITE TO CART
// ==================================================

function addFavoriteToCart(productId) {

    let favorites =
        getFavorites();


    let product =
        favorites.find(
            (item) => {

                return item.id === productId;

            }
        );


    if (!product) return;


    let cart =
        getCart();


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


    drawCart();


    if (
        typeof drawCartDropdown === "function"
    ) {

        drawCartDropdown();

    }

}


// ==================================================
// INITIAL DISPLAY
// ==================================================

drawCart();

drawFavorites();

updateCartCount();