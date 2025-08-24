// Category navigation class
class CategoryNavigation {
    constructor() {
        this.initializeEventListeners();
        this.currentCategory = this.getCurrentCategory();
    }

    initializeEventListeners() {
        // Handle category menu buttons
   
// Select all buttons except the first one
[...document.querySelectorAll('#categories .btn')]
  .slice(1)
  .forEach(btn => 
    btn.addEventListener('click', (e) => this.handleCategoryClick(e))
  );



        // Handle sidebar category links
        document.querySelectorAll('#sidebar .list-group-item').forEach(item => 
            item.addEventListener('click', (e) => this.handleSidebarClick(e)));

        // Handle search category dropdown
        const searchCategory = document.getElementById('search-category');
        if (searchCategory) {
            searchCategory.addEventListener('change', (e) => this.handleSearchCategory(e));
        }
    }

    handleCategoryClick(event) {
        if (!event.target.closest('[data-bs-toggle="offcanvas"]')) {
            event.preventDefault();
            const category = event.target.textContent.trim();
            this.navigateToCategory(category);
        }
    }

    handleSidebarClick(event) {
        const category = event.target.textContent.trim();
        if (!['Gift Cards', 'Amazon Live', 'International Shopping'].includes(category)) {
            event.preventDefault();
            this.navigateToCategory(category);
            // Close sidebar
            bootstrap.Offcanvas.getInstance(document.getElementById('sidebar')).hide();
        }
    }

    handleSearchCategory(event) {
        const category = event.target.value;
        if (category) {
            this.navigateToCategory(category);
        }
    }

    navigateToCategory(category) {
        if (!category) return;
        sessionStorage.setItem('selectedCategory', category);
        window.location.href = `product-listing-page.html?category=${encodeURIComponent(category)}`;
    }

    getCurrentCategory() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('category') || sessionStorage.getItem('selectedCategory') || 'all';
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CategoryNavigation();
});