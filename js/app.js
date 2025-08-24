let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initialize all components
        initializeSearch();
        renderCategories();
        // initializeSidebar();
        // initializeHero();
        renderProducts();
        updateCartCount();
        
        // Add back to top functionality
        document.getElementById("back-to-top")?.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        
    } catch (error) {
        console.error('Error initializing app:', error);
    }
});

function renderProducts(list = PRODUCTS) {
  const p = document.getElementById("product-list");
  p.innerHTML = "";

  // Group products by category
  const groupedProducts = {};
  list.forEach(product => {
    if (!groupedProducts[product.category]) {
      groupedProducts[product.category] = [];
    }
    groupedProducts[product.category].push(product);
  });

  // Render only first 6 categories
  Object.entries(groupedProducts).slice(0, 8).forEach(([category, products]) => {
    const gridSection = document.createElement("div");
    gridSection.className = "product-grid-container";

    gridSection.innerHTML = `
      <div class="product-grid-card">
        <h5 class="card-title ">${category}</h5>
        <div class="product-items-row">
          ${products.slice(0, 4).map(product => `
            <div class="product-item">
              <img src="${product.img}" class="product-img" alt="${product.title}">
              <div class="product-item-title">${product.title}</div>
             
            </div>
          `).join('')}
        </div>
        <a href="product-listing-page.html?category=${encodeURIComponent(category)}" 
           class="see-all-link text-primary text-decoration-none">
          See all deals
        </a>
      </div>
    `;

    p.appendChild(gridSection);
  });
}



function renderProducts(list = PRODUCTS) {
  const p = document.getElementById("product-list");
  p.innerHTML = "";

  // Group products by category
  const groupedProducts = {};
  list.forEach(product => {
    if (!groupedProducts[product.category]) {
      groupedProducts[product.category] = [];
    }
    groupedProducts[product.category].push(product);
  });

  // Render only first 6 categories
  Object.entries(groupedProducts).slice(0, 8).forEach(([category, products]) => {
    const gridSection = document.createElement("div");
    gridSection.className = "product-grid-container";

    gridSection.innerHTML = `
      <div class="product-grid-card">
        <h5 class="card-title ">${category}</h5>
        <div class="product-items-row">
          ${products.slice(0, 4).map(product => `
            <div class="product-item">
              <img src="${product.img}" class="product-img" alt="${product.title}">
              <div class="product-item-title">${product.title}</div>
             
            </div>
          `).join('')}
        </div>
        <a href="product-listing-page.html?category=${encodeURIComponent(category)}" 
           class="see-all-link text-primary text-decoration-none">
          See all deals
        </a>
      </div>
    `;

    p.appendChild(gridSection);
  });
}


// New function to filter products by category
function filterProductsByCategory(category) {
  const allProducts = [
    ...PRODUCTS,
    ...RELATED_PRODUCTS,
    ...RECOMMENDED_PRODUCTS,
    ...TRENDING_PRODUCTS,
    ...NEW_PRODUCTS
  ];
  
  // Remove duplicates
  const uniqueProducts = [...new Map(allProducts.map(item => [item.id, item])).values()];
  
  // Filter products by category
  const filtered = uniqueProducts.filter(p => p.category === category);
  
  // Clear existing content and render
  const productList = document.getElementById("product-list");
  productList.className = "section-over-hero";
  renderProducts(filtered);
}

function addToCart(id) {
  const item = PRODUCTS.find(p => p.id===id);
  const exist = cart.find(p => p.id===id);
  if (exist) exist.qty += 1;
  else cart.push({...item, qty:1});
  localStorage.setItem("cart", JSON.stringify(cart));
  
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").textContent =
    cart.reduce((a,b)=>a+b.qty,0);
}

document.getElementById("search-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const term = document.getElementById("search").value.toLowerCase();
  const category = document.getElementById("search-category").value;
  
  // Combine all product arrays
  const allProducts = [
    ...PRODUCTS,
    ...RELATED_PRODUCTS,
    ...RECOMMENDED_PRODUCTS,
    ...TRENDING_PRODUCTS,
    ...NEW_PRODUCTS
  ];
  
  // Remove duplicates by ID
  const uniqueProducts = [...new Map(allProducts.map(item => [item.id, item])).values()];
  
  // Filter products
  let filtered = uniqueProducts.filter(p => p.title.toLowerCase().includes(term));
  if (category !== "All") {
    filtered = filtered.filter(p => p.category === category);
  }

  // Clear existing content
  const productList = document.getElementById("product-list");
  productList.className = "section-over-hero"; // Add the hero overlay class
  
  // Render filtered products
  renderProducts(filtered);
});

document.getElementById("search-category").addEventListener("change", function() {
  const term = document.getElementById("search").value.toLowerCase();
  const category = this.value;
  
  // Combine all product arrays
  const allProducts = [
    ...PRODUCTS,
    ...RELATED_PRODUCTS,
    ...RECOMMENDED_PRODUCTS,
    ...TRENDING_PRODUCTS,
    ...NEW_PRODUCTS
  ];
  
  // Remove duplicates by ID
  const uniqueProducts = [...new Map(allProducts.map(item => [item.id, item])).values()];
  
  // Filter products
  let filtered = uniqueProducts.filter(p => p.title.toLowerCase().includes(term));
  if (category !== "All") {
    filtered = filtered.filter(p => p.category === category);
  }

  // Clear existing content
  const productList = document.getElementById("product-list");
  productList.className = "section-over-hero"; // Add the hero overlay class
  
  // Render filtered products
  renderProducts(filtered);
});

// kkkkkk

  

// renderRelatedProducts

function renderRelatedProducts() {
  const container = document.getElementById("related-products");
  container.innerHTML = RELATED_PRODUCTS.map(product => `
    <div class="related-product-card">
      <img src="${product.img}" alt="${product.title}" class="related-product-img">
      <h6 class="mb-2">${product.title}</h6>
      <p class="text-danger mb-0">₹${product.price}</p>
    </div>
  `).join('');

  // Scroll functionality
  const scrollLeft = document.getElementById("scroll-left");
  const scrollRight = document.getElementById("scroll-right");
  
  scrollLeft.onclick = () => {
    container.scrollBy({ left: -200, behavior: 'smooth' });
  };
  
  scrollRight.onclick = () => {
    container.scrollBy({ left: 200, behavior: 'smooth' });
  };
}

function renderRecommendedProducts() {
  const container = document.getElementById("recommended-products");
  container.innerHTML = RECOMMENDED_PRODUCTS.map(product => `
    <div class="related-product-card">
      <img src="${product.img}" alt="${product.title}" class="related-product-img">
      <h6 class="mb-2">${product.title}</h6>
      <p class="text-danger mb-0">₹${product.price}</p>
    </div>
  `).join('');

  // Scroll functionality
  const scrollLeft = document.getElementById("rec-scroll-left");
  const scrollRight = document.getElementById("rec-scroll-right");
  
  scrollLeft.onclick = () => {
    container.scrollBy({ left: -200, behavior: 'smooth' });
  };
  
  scrollRight.onclick = () => {
    container.scrollBy({ left: 200, behavior: 'smooth' });
  };
}

function renderTrendingProducts() {
  const p = document.getElementById("trending-list");
  p.innerHTML = "";

  // Group products by category
  const groupedProducts = {};
  TRENDING_PRODUCTS.forEach(product => {
    if (!groupedProducts[product.category]) {
      groupedProducts[product.category] = [];
    }
    groupedProducts[product.category].push(product);
  });

  // Render categories
  Object.entries(groupedProducts).forEach(([category, products]) => {
    const gridSection = document.createElement("div");
    gridSection.className = "product-grid-container";

    gridSection.innerHTML = `
      <div class="product-grid-card">
        <h5 class="card-title">${category}</h5>
        <div class="product-items-row">
          ${products.slice(0, 4).map(product => `
            <div class="product-item">
              <img src="${product.img}" class="product-img" alt="${product.title}">
              <div class="product-item-title">${product.title}</div>
            </div>
          `).join('')}
        </div>
        <a href="product-listing-page.html?category=${encodeURIComponent(category)}" 
           class="see-all-link text-primary text-decoration-none">
          See all deals
        </a>
      </div>
    `;

    p.appendChild(gridSection);
  });
}

function renderNewProducts() {
  const container = document.getElementById("new-products");
  container.innerHTML = NEW_PRODUCTS.map(product => `
    <div class="related-product-card">
      <img src="${product.img}" alt="${product.title}" class="related-product-img">
      <h6 class="mb-2">${product.title}</h6>
      <p class="text-danger mb-0">₹${product.price}</p>
    </div>
  `).join('');

  // Scroll functionality
  const scrollLeft = document.getElementById("new-scroll-left");
  const scrollRight = document.getElementById("new-scroll-right");
  
  scrollLeft.onclick = () => {
    container.scrollBy({ left: -200, behavior: 'smooth' });
  };
  
  scrollRight.onclick = () => {
    container.scrollBy({ left: 200, behavior: 'smooth' });
  };
}

// Add this line at the bottom with other initialization calls

renderProducts();
updateCartCount();
renderRelatedProducts();
renderRecommendedProducts();
renderTrendingProducts();
renderNewProducts();

