let cart = JSON.parse(localStorage.getItem("cart")) || [];
// Get category from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category') || sessionStorage.getItem('selectedCategory') || 'all';

function getProductsByCategory(category) {
    // Combine all product arrays
    const allProducts = [
        ...PRODUCTS,
        ...RELATED_PRODUCTS,
        ...RECOMMENDED_PRODUCTS,
        ...TRENDING_PRODUCTS,
        ...NEW_PRODUCTS
    ];

    // Remove duplicates
    const uniqueProducts = [...new Map(allProducts.map(item => [item.id, item])).values()];

    switch(category.toLowerCase()) {
        case 'all':
            return uniqueProducts;
        case 'related':
            return RELATED_PRODUCTS;
        case 'recommended':
            return RECOMMENDED_PRODUCTS;
        case 'new_arrivals':
            return NEW_PRODUCTS.filter(p => p.category === 'Electronics');
        case 'electronics':
            return uniqueProducts.filter(p => p.category === 'Electronics');
        default:
            return uniqueProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
}

// Add this function at the top of your file
function handleImageError(img) {
    // Remove the onerror handler to prevent multiple requests
    img.onerror = null;  
    // Set default placeholder image
    img.src = 'https://via.placeholder.com/300x300?text=Image+Not+Found';
    // Add a class to dim the broken image
    img.classList.add('img-error');
}

class ProductListingPage {
    constructor() {
        this.container = document.getElementById('category-products');
        this.titleElement = document.getElementById('category-title');
        this.category = this.getCategory();
        this.initialize();
    }

    getCategory() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('category') || sessionStorage.getItem('selectedCategory') || 'all';
    }

    getProducts() {
        switch(this.category.toLowerCase()) {
            case 'related':
                return RELATED_PRODUCTS;
            case 'recommended':
                return RECOMMENDED_PRODUCTS;
            case 'new_arrivals':
                return NEW_PRODUCTS;
            case 'all':
                return [...new Map([
                    ...PRODUCTS,
                    ...RELATED_PRODUCTS,
                    ...RECOMMENDED_PRODUCTS,
                    ...TRENDING_PRODUCTS,
                    ...NEW_PRODUCTS
                ].map(item => [item.id, item])).values()];
            default:
                const allProducts = [
                    ...PRODUCTS,
                    ...RELATED_PRODUCTS,
                    ...RECOMMENDED_PRODUCTS,
                    ...TRENDING_PRODUCTS,
                    ...NEW_PRODUCTS
                ];
                return allProducts.filter(p => 
                    p.category.toLowerCase() === this.category.toLowerCase()
                );
        }
    }

    updateTitle() {
        const titles = {
            'related': 'Related Products',
            'recommended': 'Recommended Products',
            'new_arrivals': 'New Arrivals in Electronics',
            'all': 'All Products'
        };
        
        this.titleElement.textContent = titles[this.category.toLowerCase()] || 
            `${this.category.charAt(0).toUpperCase() + this.category.slice(1)} Products`;
    }

    initialize() {
        if (!this.container || !this.titleElement) {
            console.error('Required elements not found');
            return;
        }

        this.renderProducts();
        this.updateTitle();
    }

    renderProducts() {
        const products = this.getProducts();

        if (!products || products.length === 0) {
            this.container.innerHTML = `
                <div class="alert alert-info text-center my-4">
                    No products found in this category. 
                    <a href="index.html" class="text-primary">Return to Home</a>
                </div>`;
            return;
        }

        this.container.innerHTML = `
            <div class="product-grid">
                ${products.map(product => this.renderProductCard(product)).join('')}
            </div>`;
    }

    renderProductCard(product) {
        return `
            <div class="category-product-card" data-category="${product.category}">
            <div class="image-size">

                <img src="${product.img}" 
                     alt="${product.title}" 
                     class="category-product-img product-link"
                     onerror="handleImageError(this)"
                     loading="lazy">
</div>
                <h3 class="category-product-title product-link">${product.title}</h3>
                <a href="#" 
                   class="product-category-link" 
                   data-category="${product.category}">
                    Category: ${product.category}
                </a>
                <div class="category-product-price">₹${product.price}</div>
                <div class="category-product-rating">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                </div>
                <button onclick="addToCart('${product.id}')" class="add-to-cart-btn">
                    Add to Cart
                </button>
            </div>`;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProductListingPage();
});