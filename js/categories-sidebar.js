function renderCategories() {
  // Get unique categories from all product arrays
  const allProducts = [
    ...PRODUCTS,
    ...RELATED_PRODUCTS,
    ...RECOMMENDED_PRODUCTS,
    ...TRENDING_PRODUCTS,
    ...NEW_PRODUCTS
  ];
  
  const cats = ["All", ...new Set(allProducts.map(p => p.category))].sort();
  
  // Render category buttons
  const c = document.getElementById("categories");
  c.innerHTML = "";
  cats.slice(0, 10).forEach((cat, i) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-square btn-dark text-white mx-1";
    btn.textContent = cat;
    if (cat === "All") {
      btn.innerHTML = `<span class="ham-size"><i class="bi bi-list"></i>${cat}</span>`;
      btn.id = "all-cat-btn";
    }
    btn.onclick = () => {
      if (cat === "All") {
        document.getElementById("sidebar").classList.add("show");
      } else {
        filterProductsByCategory(cat);
      }
    };
    c.appendChild(btn);
  });

  // Render sidebar categories
  const sidebarList = document.querySelector("#sidebar .offcanvas-body ul");
  sidebarList.innerHTML = `
    <li class="list-group-item">
      <h6 class="mb-0 text-primary">Digital Content & Devices</h6>
    </li>
    ${cats.slice(1).map(cat => `
      <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
        ${cat}
        <span class="badge bg-secondary rounded-pill"></span>
      </li>
    `).join('')}
    <li class="list-group-item mt-3">
      <h6 class="mb-0 text-primary">Programs & Features</h6>
    </li>
    <li class="list-group-item list-group-item-action">Gift Cards</li>
    <li class="list-group-item list-group-item-action">Amazon Live</li>
    <li class="list-group-item list-group-item-action">International Shopping</li>
  `;

  // Add click handlers to sidebar items
  sidebarList.querySelectorAll('.list-group-item-action').forEach(item => {
    item.onclick = () => {
      const category = item.textContent.trim();
      if (!['Gift Cards', 'Amazon Live', 'International Shopping'].includes(category)) {
        filterProductsByCategory(category);
        document.getElementById("sidebar").classList.remove("show");
      }
    };
  });
  
  // Update the All button click handler
  const allCatBtn = document.getElementById("all-cat-btn");
  if (allCatBtn) {
    allCatBtn.onclick = () => {
      const offcanvas = new bootstrap.Offcanvas(document.getElementById("sidebar"));
      offcanvas.show();
    };
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const sidebarEl = document.getElementById("sidebar");
  
  // Initialize Bootstrap's Offcanvas
  const offcanvas = new bootstrap.Offcanvas(sidebarEl);

  // Update close button handler
  const closeBtn = sidebarEl.querySelector(".btn-close");
  if (closeBtn) {
    closeBtn.onclick = function(e) {
      e.preventDefault();
      offcanvas.hide();
    };
  }

  // Update outside click handler
  document.addEventListener('click', function(event) {
    const isClickInsideSidebar = sidebarEl.contains(event.target);
    const isClickOnAllButton = event.target.closest('#all-cat-btn');
    
    if (!isClickInsideSidebar && !isClickOnAllButton && sidebarEl.classList.contains('show')) {
      offcanvas.hide();
    }
  });

  // Initialize categories
  renderCategories();
});