// Update the renderCartItem method
renderCartItem(item) {
    return `
        <tr data-category="${item.category}">
            <td>
                <img src="${item.img}" 
                     alt="${item.title}" 
                     class="cart-item-img product-link"
                     onerror="handleImageError(this)">
                <div class="cart-item-details" data-category="${item.category}">
                    <h6 class="product-link">${item.title}</h6>
                    <a href="#" 
                       class="product-category-link" 
                       data-category="${item.category}">
                        Category: ${item.category}
                    </a>
                </div>
            </td>
            <td>₹${item.price}</td>
            <td>
                <input type="number" 
                       class="cart-quantity" 
                       value="${item.qty}" 
                       min="1"
                       data-product-id="${item.id}">
            </td>
            <td>₹${(item.price * item.qty).toFixed(2)}</td>
            <td>
                <button class="btn btn-danger remove-item" 
                        data-product-id="${item.id}">
                    Remove
                </button>
            </td>
        </tr>`;
}

class CartPage {
    constructor() {
        this.cartContainer = document.querySelector('.cart-items-container');
        this.cartTotal = document.getElementById('cart-total');
        this.initialize();
    }

    initialize() {
        // Ensure cart is initialized
        window.cart = window.cart || JSON.parse(localStorage.getItem("cart")) || [];
        
        this.renderCart();
        this.attachEventListeners();
        CartManager.updateCartCount(); // Update count on cart page load
    }

    // ...rest of your existing CartPage code...

    saveCart() {
        localStorage.setItem("cart", JSON.stringify(window.cart));
        CartManager.updateCartCount();
    }
}

// Initialize cart page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CartPage();
});