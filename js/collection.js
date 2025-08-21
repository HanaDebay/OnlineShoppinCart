document.addEventListener("DOMContentLoaded", () => {
  
  const products = [
    { id: 1, name: "Red Dress", price: 59.99, image: "images/red-dress1.jpg", description: "Stylish red evening dress." },
    { id: 2, name: "Men's Leather Watch", price: 120.00, image: "images/watch1.jpg", description: "Elegant leather strap watch." },
    { id: 3, name: "Ladies Handbag", price: 75.50, image: "images/handbag1.jpg", description: "Trendy handbag for daily use." },
    { id: 4, name: "Men's Casual Shoes", price: 89.99, image: "images/mens-shoes1.jpg", description: "Comfortable men's casual shoes." },
    { id: 5, name: "Blue Evening Gown", price: 130.00, image: "images/blue-gown.jpg", description: "Elegant blue gown for events." },
    { id: 6, name: "Gold Necklace", price: 220.00, image: "images/gold-necklace.jpg", description: "Beautiful gold-plated necklace." },
    { id: 7, name: "White Sneakers", price: 65.00, image: "images/white-sneakers.jpg", description: "Casual white sneakers." },
    { id: 8, name: "Men's Belt", price: 35.00, image: "images/mens-belt.jpg", description: "Leather belt for men." },
    { id: 9, name: "Ladies Shoes", price: 80.00, image: "images/ladies-shoes.jpg", description: "Fashionable women's shoes." },
    { id: 10, name: "Men's Formal Shirt", price: 55.00, image: "images/formal-shirt.jpg", description: "Classic formal shirt for men." },
    { id: 11, name: "Women's Handbag", price: 95.00, image: "images/women-handbag.jpg", description: "Premium quality handbag." },
    { id: 12, name: "Silver Bracelet", price: 50.00, image: "images/silver-bracelet.jpg", description: "Stylish silver bracelet." }
  ];

  const grid = document.getElementById("collection-grid");

  if (!grid) {
    console.error("Could not find collection-grid");
    return;
  }

  //  Check if there's a search query in the URL
  const params = new URLSearchParams(window.location.search);
  const searchQuery = params.get("search");

  let filteredProducts = products;

  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredProducts = products.filter(p =>
      p.name.toLowerCase().includes(query) ||
      (p.description && p.description.toLowerCase().includes(query))
    );
  }

  // If no products match
  if (filteredProducts.length === 0) {
    grid.innerHTML = `<p class="text-center text-muted">No products found.</p>`;
    return;
  }

  // Render filtered products
  filteredProducts.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-lg-3 col-md-4 col-sm-6 mb-4";
    col.innerHTML = `
      <div class="card h-100 border-0 shadow-sm">
        <img src="${product.image}" class="card-img-top" alt="${product.name}"
             style="cursor:pointer;" onclick="viewProduct(${product.id})">
        <div class="card-body text-center">
          <h6 class="card-title">${product.name}</h6>
          <p class="text-success fw-bold">$${product.price.toFixed(2)}</p>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });
});

// Global function so onclick works
function viewProduct(id) {
  window.location.href = `product-details.html?id=${id}`;
}
