// Navigation related functions
function updateCartCount() {
    const count = cart.reduce((a, b) => a + b.qty, 0);
    document.getElementById("cart-count").textContent = count;
}

function initializeSearch() {
    const form = document.getElementById("search-form");
    const input = document.getElementById("search");
    const categorySelect = document.getElementById("search-category");

    if (!form || !input || !categorySelect) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const rawTerm = input.value.trim();
        const selectedCategory = categorySelect.value;

        // Build unified product list to detect exact product name match
        const allProducts = [
            ...(window.PRODUCTS || []),
            ...(window.RELATED_PRODUCTS || []),
            ...(window.RECOMMENDED_PRODUCTS || []),
            ...(window.TRENDING_PRODUCTS || []),
            ...(window.NEW_PRODUCTS || [])
        ];
        const uniqueProducts = [...new Map(allProducts.map(item => [item.id, item])).values()];

        const termLower = rawTerm.toLowerCase();
        const exact = uniqueProducts.find(p => p.title.toLowerCase() === termLower);

        // Determine destination URL based on intent
        let url = "product-listing-page.html";
        const params = new URLSearchParams();

        if (rawTerm.length > 0) {
            if (exact) {
                params.set("q", exact.title);
                params.set("mode", "product");
            } else {
                params.set("q", rawTerm);
                params.set("mode", "search");
            }
        }
        if (selectedCategory && selectedCategory !== "All") {
            params.set("category", selectedCategory);
        }

        const query = params.toString();
        if (query) url += `?${query}`;
        window.location.href = url;
    });

    // Changing category should navigate to listing page without altering current page contents
    categorySelect.addEventListener("change", function () {
        const selectedCategory = this.value;
        let url = "product-listing-page.html";
        const params = new URLSearchParams();
        if (selectedCategory && selectedCategory !== "All") params.set("category", selectedCategory);
        const rawTerm = input.value.trim();
        if (rawTerm) {
            params.set("q", rawTerm);
            params.set("mode", "search");
        }
        const query = params.toString();
        if (query) url += `?${query}`;
        window.location.href = url;
    });
}