const banners = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/APAY/PD/travel/Dubai_PC-Hero-Template_GW_3000x1200._CB789421893_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/BAU/PC/Hero/HO/HO_PC_2X_T4._CB550950336_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/AugBau/B0FBRW2NPC_LG_55_Homepage_DesktopHeroTemplate_3000x1200._CB802668118_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Audio/Aug/Pocket-friendly-headphones-3000x1200._CB804230452_.jpg", 
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/2025/Brand-days/PC/Brand_days_-_BAU_GW_Pc_-_Sleepwell._CB802669934_.jpg",
  "https://m.media-amazon.com/images/I/81uXdpbMSBL._SX3000_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/debarsh/Tecno/spark_go_5g/salegolive/D285028256_DesktopHero_3000x1200_live._CB802659618_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/Sept2024/Desktop_tall_Hero_3000x1200-Easy-to-read-books_apay_1._CB803782292_.jpg",

  // Add more banner URLs as needed
];
let currentBanner = 0;
const heroImg = document.getElementById("hero-img");
const leftBtn = document.getElementById("hero-left");
const rightBtn = document.getElementById("hero-right");

function showBanner(idx) {
  currentBanner = (idx + banners.length) % banners.length;
  heroImg.src = banners[currentBanner];
}

// Auto-slide every 5 seconds
let bannerInterval = setInterval(() => {
  showBanner(currentBanner + 1);
}, 5000);

// Left arrow
leftBtn.onclick = function() {
  showBanner(currentBanner - 1);
  resetInterval();
};
// Right arrow
rightBtn.onclick = function() {
  showBanner(currentBanner + 1);
  resetInterval();
};

// Reset interval on manual navigation
function resetInterval() {
  clearInterval(bannerInterval);
  bannerInterval = setInterval(() => {
    showBanner(currentBanner + 1);
  }, 5000);
}
