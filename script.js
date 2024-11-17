function addToCart() {
    const cartPopup = document.getElementById("cartPopup");
    cartPopup.style.display = "block";
}

function closeCartPopup() {
    const cartPopup = document.getElementById("cartPopup");
    cartPopup.style.display = "none";
}

function showCartPopup() {
    alert("Opening cart...");
}

function goToCart() {
    window.location.href = "cart.html";
}

function addToCart() {
    document.getElementById('cartPopup').style.display = 'block';

    setTimeout(closeCartPopup, 2000);
}

function closeCartPopup() {
    document.getElementById('cartPopup').style.display = 'none';
}

function goToCart() {
    window.location.href = 'cart.html';
}

// Function to filter products based on search input
function searchProducts() {
    const searchInput = document.querySelector('.search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.shoe-item');

    products.forEach((product) => {
        const productName = product.querySelector('h3').innerText.toLowerCase();

        if (productName.includes(searchInput)) {
            product.style.display = 'inline-block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Event listener for search button click
document.querySelector('.search-logo').addEventListener('click', searchProducts);

// Optionally, also search as the user types
document.querySelector('.search-bar').addEventListener('input', searchProducts);

// Function to handle the "Proceed to Checkout" button
function proceedToCheckout() {
    // Navigate to checkout page (assuming checkout.html exists)
    window.location.href = 'checkout.html';
}

let cartCount = 0;

function updateCartCount() {
    cartCount += 1;
    document.querySelector('.cart-icon').innerText = ` Cart (${cartCount})`;
}

function addToCart() {
    document.getElementById('cartPopup').style.display = 'block';
    setTimeout(closeCartPopup, 2000);

    updateCartCount();
}

