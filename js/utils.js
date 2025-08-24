function filterProductsByCategory(category) {
    const allProducts = [
        ...PRODUCTS,
        ...RELATED_PRODUCTS,
        ...RECOMMENDED_PRODUCTS,
        ...TRENDING_PRODUCTS,
        ...NEW_PRODUCTS
    ];
    
    const uniqueProducts = [...new Map(allProducts.map(item => [item.id, item])).values()];
    const filtered = uniqueProducts.filter(p => p.category === category);
    
    const productList = document.getElementById("product-list");
    if (productList) {
        productList.className = "section-over-hero";
        renderProducts(filtered);
    }
}

function findProductById(id) {
    // Convert id to proper type for comparison
    const productId = typeof id === 'string' ? id : Number(id);
    
    // Get all products
    const allProducts = [
        ...PRODUCTS,
        ...RELATED_PRODUCTS,
        ...RECOMMENDED_PRODUCTS,
        ...TRENDING_PRODUCTS,
        ...NEW_PRODUCTS
    ];
    
    // Get current category from URL
    const urlParams = new URLSearchParams(window.location.search);
    const currentCategory = urlParams.get('category')?.toLowerCase();
    
    let product;
    
    // First try to find in specific category
    switch(currentCategory) {
        case 'new_arrivals':
            product = NEW_PRODUCTS.find(p => p.id.toString() === productId.toString());
            break;
        case 'related':
            product = RELATED_PRODUCTS.find(p => p.id.toString() === productId.toString());
            break;
        case 'recommended':
            product = RECOMMENDED_PRODUCTS.find(p => p.id.toString() === productId.toString());
            break;
        case 'trending':
            product = TRENDING_PRODUCTS.find(p => p.id.toString() === productId.toString());
            break;
        default:
            // For main categories, first check PRODUCTS array
            product = PRODUCTS.find(p => p.id.toString() === productId.toString());
            
            // If not found in PRODUCTS, check other arrays
            if (!product) {
                product = allProducts.find(p => p.id.toString() === productId.toString());
            }
    }

    if (!product) {
        console.log(`Product not found for ID: ${productId}, Category: ${currentCategory}`);
    }
    
    return product;
}

