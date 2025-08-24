// Navigation related functions
function updateCartCount() {
    const count = cart.reduce((a,b) => a + b.qty, 0);
    document.getElementById("cart-count").textContent = count;
}

function initializeSearch() {
    document.getElementById("search-form").addEventListener("submit", function(e) {
        e.preventDefault();
        const term = document.getElementById("search").value.toLowerCase();
        const category = document.getElementById("search-category").value;
        filterAndRenderProducts(term, category);
    });

    document.getElementById("search-category").addEventListener("change", function() {
        const term = document.getElementById("search").value.toLowerCase();
        const category = this.value;
        filterAndRenderProducts(term, category);
    });
}

function filterAndRenderProducts(term, category) {
    const allProducts = [
        ...PRODUCTS,
        ...RELATED_PRODUCTS,
        ...RECOMMENDED_PRODUCTS,
        ...TRENDING_PRODUCTS,
        ...NEW_PRODUCTS
    ];
    
    const uniqueProducts = [...new Map(allProducts.map(item => [item.id, item])).values()];
    let filtered = uniqueProducts.filter(p => p.title.toLowerCase().includes(term));
    
    if (category !== "All") {
        filtered = filtered.filter(p => p.category === category);
    }

    const productList = document.getElementById("product-list");
    productList.className = "section-over-hero";
    renderProducts(filtered);
}