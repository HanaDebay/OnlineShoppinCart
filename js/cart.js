// Product data with categories
const products = [
    { id: 1, name: "Red Dress", price: 49.99, image: "images/dress1.jpg", category: "women-dresses" },
    { id: 2, name: "Blue Dress", price: 54.99, image: "images/dress2.jpg", category: "women-dresses" },
    { id: 3, name: "Green Dress", price: 59.99, image: "images/dress3.jpg", category: "women-dresses" },
    { id: 4, name: "Silver Necklace", price: 29.99, image: "images/jewellery1.jpg", category: "women-jewellery" },
    { id: 5, name: "Gold Earrings", price: 34.99, image: "images/jewellery2.jpg", category: "women-jewellery" },
    { id: 6, name: "Leather Handbag", price: 79.99, image: "images/bag1.jpg", category: "women-bags" },
    { id: 7, name: "High Heels", price: 69.99, image: "images/shoes1.jpg", category: "women-shoes" },
    { id: 8, name: "Men's Shirt", price: 39.99, image: "images/shirt1.jpg", category: "men-clothes" },
    { id: 9, name: "Men's Jeans", price: 44.99, image: "images/jeans1.jpg", category: "men-clothes" },
    { id: 10, name: "Leather Belt", price: 19.99, image: "images/belt1.jpg", category: "men-belts" },
    { id: 11, name: "Men's Watch", price: 89.99, image: "images/watch1.jpg", category: "men-watches" },
    { id: 12, name: "Men's Shoes", price: 74.99, image: "images/menshoes1.jpg", category: "men-shoes" }
];

// Render products items
const productList = document.getElementById("product-list");
if (productList) {
    products.forEach(p => {
        productList.innerHTML += `
        <div class="col-md-3 mb-4">
            <div class="card shadow-sm h-100">
                <img src="${p.image}" class="card-img-top" alt="${p.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${p.name}</h5>
                    <p class="card-text fw-bold">$${p.price.toFixed(2)}</p>
                    <div class="mt-auto">
                        <button class="btn btn-primary w-100 mb-2" onclick="addToCart(${p.id})">Add to Cart</button>
                        <a href="collection.html?category=${p.category}" class="btn btn-outline-dark w-100">View More</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
}

// Load cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}
updateCartCount();

// Add to cart
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}
