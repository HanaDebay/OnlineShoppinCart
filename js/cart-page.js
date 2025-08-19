function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="text-muted">Your cart is empty.</p>`;
        document.getElementById("cart-total").textContent = "0.00";
        return;
    }

    cartItemsContainer.innerHTML = `
      <div class="table-responsive">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${cart.map((item, index) => {
                const subtotal = item.price * item.quantity;
                total += subtotal;
                return `
                  <tr>
                    <td><img src="${item.image}" width="60"></td>
                    <td>${item.name}</td>
                    <td>$${item.price.toFixed(2)}</td>
                    <td>
                      <input type="number" min="1" value="${item.quantity}" class="form-control w-50" onchange="updateQuantity(${item.id}, this.value)">
                    </td>
                    <td>$${subtotal.toFixed(2)}</td>
                    <td><button class="btn btn-danger btn-sm" onclick="removeItem(${item.id})">Remove</button></td>
                  </tr>
                `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;

    document.getElementById("cart-total").textContent = total.toFixed(2);
    updateCartCount();
}

function updateQuantity(id, quantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = cart.find(item => item.id === id);
    if (product) {
        product.quantity = parseInt(quantity);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }
}

function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Initial render
renderCart();
