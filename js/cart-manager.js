class CartManager {
    static init() {
        // Initialize cart from localStorage
        window.cart = JSON.parse(localStorage.getItem("cart")) || [];
        this.updateCartCount();
        
        // Add event listener for storage changes
        window.addEventListener('storage', (e) => {
            if (e.key === 'cart') {
                window.cart = JSON.parse(e.newValue || '[]');
                this.updateCartCount();
            }
        });
    }

    static updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            const count = window.cart.reduce((sum, item) => sum + item.qty, 0);
            cartCount.textContent = count;
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    CartManager.init();
});

function addToCart(productId) {
    try {
        const product = findProductById(productId);
        if (!product) {
            console.error('Product not found:', productId);
            showNotification('Error: Product not found', 'error');
            return;
        }
        
        const existingItem = window.cart.find(item => item.id.toString() === productId.toString());
        if (existingItem) {
            existingItem.qty += 1;
        } else {
            window.cart.push({ ...product, qty: 1 });
        }
        
        // Save cart and update count
        localStorage.setItem("cart", JSON.stringify(window.cart));
        CartManager.updateCartCount();
        showNotification(`${product.title} added to cart!`, 'success');
        
    } catch (error) {
        console.error('Error adding to cart:', error);
        showNotification('Error adding product to cart', 'error');
    }
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} position-fixed top-0 end-0 m-3`;
    notification.style.zIndex = '1000';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}