class ProductLinks {
    constructor() {
        this.initializeLinks();
    }

    initializeLinks() {
        // Handle "See more" links
        document.querySelectorAll('.see-more-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = link.dataset.category;
                if (category) {
                    sessionStorage.setItem('selectedCategory', category);
                    window.location.href = `product-listing-page.html?category=${encodeURIComponent(category)}`;
                }
            });
        });

        // Section see more links
        this.initializeSectionLinks();
        
        // Product card links
        this.initializeProductCardLinks();
        
        // Cart item links
        this.initializeCartItemLinks();
    }

    initializeSectionLinks() {
        const sections = {
            'Related to items you\'ve viewed': 'related',
            'Recommended for you': 'recommended',
            'New arrivals in Electronics': 'new_arrivals'
        };

        document.querySelectorAll('.container.mt-4.white-bg').forEach(container => {
            const heading = container.querySelector('h4');
            const seeMoreLink = container.querySelector('a.text-primary');
            
            if (heading && seeMoreLink) {
                const sectionTitle = heading.textContent.trim();
                const category = sections[sectionTitle] || 'all';
                
                seeMoreLink.href = `product-listing-page.html?category=${encodeURIComponent(category)}`;
                seeMoreLink.addEventListener('click', () => {
                    sessionStorage.setItem('selectedCategory', category);
                });
            }
        });
    }

    initializeProductCardLinks() {
        // Product grid cards
        document.querySelectorAll('.product-grid-container').forEach(container => {
            container.addEventListener('click', (e) => {
                const card = e.target.closest('.product-grid-card');
                if (card) {
                    const title = card.querySelector('.card-title');
                    if (title) {
                        const category = title.textContent.trim();
                        this.navigateToCategory(category);
                    }
                }
            });
        });

        // Related/Recommended product cards
        document.querySelectorAll('.related-product-card, .category-product-card').forEach(card => {
            const productElements = [
                card.querySelector('img'),
                card.querySelector('h6'),
                card.querySelector('.category-product-title')
            ];

            productElements.forEach(element => {
                if (element) {
                    element.style.cursor = 'pointer';
                    element.addEventListener('click', () => {
                        const category = card.dataset.category;
                      
                        if (category) {
                            this.navigateToCategory(category);
                        }
                    });
                }
            });
        });
    }

    initializeCartItemLinks() {
        // Cart items in cart.html
        document.querySelectorAll('.cart-item-details').forEach(item => {
            const titleElement = item.querySelector('h6');
            const imageElement = item.closest('tr')?.querySelector('img');

            [titleElement, imageElement].forEach(element => {
                if (element) {
                    element.style.cursor = 'pointer';
                    element.addEventListener('click', () => {
                        const category = item.dataset.category;
                        if (category) {
                            this.navigateToCategory(category);
                        }
                    });
                }
            });
        });
    }

    navigateToCategory(category) {
        if (!category) return;
        sessionStorage.setItem('selectedCategory', category);
        window.location.href = `product-listing-page.html?category=${encodeURIComponent(category)}`;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => new ProductLinks());