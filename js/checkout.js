// Load cart items for summary
function loadOrderSummary() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const summaryList = document.getElementById("order-summary");
    let total = 0;

    summaryList.innerHTML = "";

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        summaryList.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${item.name} x ${item.quantity}
                <span>$${subtotal.toFixed(2)}</span>
            </li>
        `;
    });

    document.getElementById("summary-total").textContent = total.toFixed(2);
}
loadOrderSummary();

// Checkout form validation simulation
document.getElementById("checkout-form").addEventListener("submit", function(e) {
    e.preventDefault();

    if (this.checkValidity()) {
        alert("Order placed successfully! Thank you for shopping.");
        localStorage.removeItem("cart");
        window.location.href = "index.html";
    } else {
        alert("Please fill in all fields correctly.");
    }
});
