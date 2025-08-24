const PRODUCTS = [
  // Men's Shoes Category
  {id:1, title:"Grey Sports Shoes", price:799, category:"Men's Shoes", img:"assets/sportshoe.webp"},
  {id:2, title:"Black Casual Shoes", price:899, category:"Men's Shoes", img:"assets/Black Casual Shoes.webp"},
  {id:3, title:"Navy Canvas Shoes", price:699, category:"Men's Shoes", img:"assets/Navy Canvas Shoes.webp"},
  {id:4, title:"Brown Leather Shoes", price:1299, category:"Men's Shoes", img:"assets/Brown Leather Shoes.webp"},
  
  // Electronics Category
  {id:5, title:"HP Laptop", price:45999, category:"Electronics", img:"assets/HP Laptop.webp"},
  {id:6, title:"Dell Laptop", price:52999, category:"Electronics", img:"assets/Dell Laptop.webp"},
  {id:7, title:"Lenovo Laptop", price:48999, category:"Electronics", img:"assets/Lenovo Laptop.webp"},
  {id:8, title:"Acer Laptop", price:42999, category:"Electronics", img:"assets/Acer Laptop.webp"},
  
  // Women's Bags Category
  {id:9, title:"Leather Handbag", price:1499, category:"Women's Bags", img:"assets/Leather Handbag.webp"},
  {id:10, title:"Tote Bag", price:1299, category:"Women's Bags", img:"assets/Tote Bag.webp"},
  {id:11, title:"Shoulder Bag", price:999, category:"Women's Bags", img:"assets/Shoulder Bag.webp"},
  {id:12, title:"Clutch Purse", price:799, category:"Women's Bags", img:"assets/Clutch Purse.webp"},
  
  // Smartphones Category
  {id:13, title:"iPhone 13", price:69999, category:"Smartphones", img:"assets/iPhone 13.webp"},
  {id:14, title:"Samsung Galaxy S21", price:54999, category:"Smartphones", img:"assets/Samsung Galaxy S21.webp"},
  {id:15, title:"OnePlus 9", price:49999, category:"Smartphones", img:"assets/OnePlus 9.webp"},
  {id:16, title:"Pixel 6", price:44999, category:"Smartphones", img:"assets/Pixel 6.webp"},

  // Books Category
  {id:17, title:"Atomic Habits", price:399, category:"Books", img:"assets/Atomic Habits.webp"},
  {id:18, title:"Psychology of Money", price:299, category:"Books", img:"assets/Psychology of Money.webp"},
  {id:19, title:"Rich Dad Poor Dad", price:349, category:"Books", img:"assets/Rich Dad Poor Dad.webp"},
  {id:20, title:"Ikigai", price:249, category:"Books", img:"assets/Ikigai.webp"},

  // Kitchen Appliances Category
  {id:21, title:"Mixer Grinder", price:2999, category:"Kitchen", img:"assets/Mixer Grinder.webp"},
  {id:22, title:"Electric Kettle", price:899, category:"Kitchen", img:"assets/Electric Kettle.webp"},
  {id:23, title:"Induction Cooktop", price:1999, category:"Kitchen", img:"assets/Induction Cooktop.webp"},
  {id:24, title:"Air Fryer", price:4999, category:"Kitchen", img:"assets/Air Fryer.webp"},

  // Men's Clothing Category
  {id:25, title:"Cotton T-Shirt", price:499, category:"Men's Clothing", img:"assets/Cotton T-Shirt.webp"},
  {id:26, title:"Denim Jeans", price:999, category:"Men's Clothing", img:"assets/Denim Jeans.webp"},
  {id:27, title:"Casual Shirt", price:699, category:"Men's Clothing", img:"assets/Casual Shirt.webp"},
  {id:28, title:"Track Pants", price:599, category:"Men's Clothing", img:"assets/Track Pants.webp"},

  // Gaming Category
  {id:29, title:"PS5 Console", price:49999, category:"Gaming", img:"assets/PS5 Console.webp"},
  {id:30, title:"Xbox Controller", price:4999, category:"Gaming", img:"assets/Xbox Controller.webp"},
  {id:31, title:"Gaming Headset", price:2999, category:"Gaming", img:"assets/Gaming Headset.webp"},
  {id:32, title:"Gaming Mouse", price:1999, category:"Gaming", img:"assets/Gaming Mouse.webp"}
];

const RELATED_PRODUCTS = [
  {
    id: "r1",
    title: "Laptop Keyboard Cover",
    price: 499,
    img: "assets/Laptop Keyboard Cover.webp",
    category: "Laptop Accessories"
  },
  {
    id: "r2",
    title: "Wireless Keyboard",
    price: 1299,
    img: "assets/Wireless Keyboard.webp",
    category: "Laptop Accessories"
  },
  {
    id: "r3",
    title: "Keyboard Protection",
    price: 299,
    img: "assets/Keyboard Protection.webp",
    category: "Laptop Accessories"
  },
  {
    id: "r4",
    title: "Gaming Keyboard",
    price: 2499,
    img: "assets/Gaming Keyboard.webp",
    category: "Laptop Accessories"
  },
  {
    id: "r5",
    title: "Mechanical Keyboard",
    price: 3999,
    img: "assets/Mechanical Keyboard.webp",
    category: "Laptop Accessories"
  },
  {
    id: "r6",
    title: "Keyboard Mat",
    price: 399,
    img: "assets/Keyboard Mat.webp",
    category: "Laptop Accessories"
  },
  {
    id: "r7",
    title: "Wireless Mouse",
    price: 899,
    img: "assets/Wireless Mouse.webp",
    category: "Mouse Accessories"
  },
  {
    id: "r8",
    title: "Gaming Mouse Pad",
    price: 299,
    img: "assets/Gaming Mouse Pad.webp",
    category: "Mouse Accessories"
  },
  {
    id: "r9",
    title: "Adjustable Laptop Stand",
    price: 799,
    img: "assets/Adjustable Laptop Stand.jpg",
    category: "Laptop Stands"
  },
  {
    id: "r10",
    title: "Cooling Pad",
    price: 1499,
    img: "assets/Cooling Pad.webp",
    category: "Laptop Stands"
  },
  {
    id: "r11",
    title: "1TB External HDD",
    price: 4299,
    img: "assets/1TB External HDD.jpg",
    category: "Storage Devices"
  },
  {
    id: "r12",
    title: "256GB Pendrive",
    price: 999,
    img: "assets/256GB Pendrive.jpg",
    category: "Storage Devices"
  },
  {
    id: "r13",
    title: "15.6 inch Laptop Bag",
    price: 799,
    img: "assets/15.6 inch Laptop Bag.webp",
    category: "Laptop Bags"
  },
  {
    id: "r14",
    title: "Premium Backpack",
    price: 1999,
    img: "assets/Premium Backpack.jpg",
    category: "Laptop Bags"
  }
];

const RECOMMENDED_PRODUCTS = [
  {
    id: "rec1",
    title: "Sony WH-1000XM4",
    price: 24999,
    img: "assets/Sony WH-1000XM4.jpg",
    category: "Headphones"
  },
  {
    id: "rec2",
    title: "Apple AirPods Pro",
    price: 19999,
    img: "assets/Apple AirPods Pro.jpg",
    category: "Headphones"
  },
  {
    id: "rec3",
    title: "Samsung Galaxy Watch 5",
    price: 22999,
    img: "assets/Samsung Galaxy Watch 5.jpg",
    category: "Smartwatches"
  },
  {
    id: "rec4",
    title: "Apple Watch Series 8",
    price: 41999,
    img: "assets/Apple Watch Series 8.jpg",
    category: "Smartwatches"
  },
  {
    id: "rec5",
    title: "Echo Dot 5th Gen",
    price: 4499,
    img: "assets/Echo Dot 5th Gen.webp",
    category: "Smart Home"
  },
  {
    id: "rec6",
    title: "Fire TV Stick 4K",
    price: 3999,
    img: "assets/Fire TV Stick 4K.webp",
    category: "Smart Home"
  },
  {
    id: "rec7",
    title: "iPad Air",
    price: 54900,
    img: "assets/iPad Air.jpg",
    category: "Tablets"
  },
  {
    id: "rec8",
    title: "Samsung Galaxy Tab S8",
    price: 58999,
    img: "assets/Samsung Galaxy Tab S8.jpg",
    category: "Tablets"
  }
];

const TRENDING_PRODUCTS = [
  {
    id: "t1",
    title: "Power Bank 20000mAh",
    price: 1499,
    category: "Mobile Accessories",
    img: "assets/Power Bank 20000mAh.jpg"
  },
  {
    id: "t2",
    title: "Phone Case",
    price: 299,
    category: "Mobile Accessories",
    img: "assets/Phone Case.webp"
  },
  {
    id: "t3",
    title: "Fast Charger",
    price: 799,
    img: "assets/Fast Charger.webp",
    category: "Mobile Accessories"
  },
  {
    id: "t4",
    title: "Screen Guard",
    price: 199,
    img: "assets/Screen Guard.webp",
    category: "Mobile Accessories"
  },
  {
    id: "t5",
    title: "DSLR Camera",
    price: 42999,
    img: "assets/DSLR Camera.jpg",
    category: "Camera & Photo"
  },
  {
    id: "t6",
    title: "Tripod Stand",
    price: 899,
    category: "Camera & Photo",
    img: "assets/Tripod Stand.webp"
  },
  {
    id: "t7",
    title: "Camera Bag",
    price: 799,
    category: "Camera & Photo",
    img: "assets/Camera Bag.webp"
  },
  {
    id: "t8",
    title: "Camera Lens",
    price: 12999,
    category: "Camera & Photo",
    img: "assets/Camera Lens.webp"
  },
  {
    id: "t9",
    title: "Smart LED TV",
    price: 32999,
    category: "Home Appliances",
    img: "assets/Smart LED TV.webp"
  },
  {
    id: "t10",
    title: "Washing Machine",
    price: 15999,
    category: "Home Appliances",
    img: "assets/Washing Machine.webp"
  },
  {
    id: "t11",
    title: "Refrigerator",
    price: 18999,
    category: "Home Appliances",
    img: "assets/Refrigerator.webp"
  },
  {
    id: "t12",
    title: "Microwave Oven",
    price: 8999,
    category: "Home Appliances",
    img: "assets/Microwave Oven.webp"
  },
  {
    id: "t13",
    title: "Yoga Mat",
    price: 599,
    category: "Fitness",
    img: "assets/Yoga Mat.webp"
  },
  {
    id: "t14",
    title: "Dumbbells Set",
    price: 1299,
    category: "Fitness",
    img: "assets/Dumbbells Set.webp"
  },
  {
    id: "t15",
    title: "Fitness Band",
    price: 2499,
    category: "Fitness",
    img: "assets/Fitness Band.webp"
  },
  {
    id: "t16",
    title: "Treadmill",
    price: 19999,
    category: "Fitness",
    img: "assets/Treadmill.webp"
  },
  {
    id: "t17",
    title: "Gaming Console",
    price: 49999,
    category: "Gaming",
    img: "assets/Gaming Console.jpg"
  },
  {
    id: "t18",
    title: "Gaming Controller",
    price: 3999,
    category: "Gaming",
    img: "assets/Gaming Controller.jpg"
  },
  {
    id: "t19",
    title: "Gaming Headset",
    price: 2999,
    category: "Gaming",
    img: "assets/Gaming Headset.webp"
  },
  {
    id: "t20",
    title: "Gaming Chair",
    price: 12999,
    category: "Gaming",
    img: "assets/Gaming Chair.jpg"
  },
  {
    id: "t21",
    title: "Smart Speaker",
    price: 3499,
    category: "Smart Home",
    img: "assets/Smart Speaker.jpg"
  },
  {
    id: "t22",
    title: "Smart Camera",
    price: 2999,
    category: "Smart Home",
    img: "assets/Smart Camera.webp"
  },
  {
    id: "t23",
    title: "Smart Bulb Set",
    price: 1499,
    category: "Smart Home",
    img: "assets/Smart Bulb Set.webp"
  },
  {
    id: "t24",
    title: "Smart Lock",
    price: 4999,
    category: "Smart Home",
    img: "assets/Smart Lock.webp"
  },
  {
    id: "t25",
    title: "Bluetooth Speaker",
    price: 1999,
    category: "Audio Devices",
    img: "assets/Bluetooth Speaker.webp"
  },
  {
    id: "t26",
    title: "Soundbar",
    price: 8999,
    category: "Audio Devices",
    img: "assets/Soundbar.webp"
  },
  {
    id: "t27",
    title: "TWS Earbuds",
    price: 2499,
    category: "Audio Devices",
    img: "assets/TWS Earbuds.webp"
  },
  {
    id: "t28",
    title: "Home Theatre",
    price: 15999,
    category: "Audio Devices",
    img: "assets/Home Theatre.webp"
  },
  {
    id: "t29",
    title: "Webcam HD",
    price: 1999,
    category: "Computer Accessories",
    img: "assets/Webcam HD.jpg"
  },
  {
    id: "t30",
    title: "Mechanical Keyboard",
    price: 4999,
    category: "Computer Accessories",
    img: "assets/Mechanical Keyboard.webp"
  },
  {
    id: "t31",
    title: "Gaming Mouse",
    price: 1499,
    category: "Computer Accessories",
    img: "assets/Gaming Mouse.webp"
  },
  {
    id: "t32",
    title: "USB Hub",
    price: 999,
    category: "Computer Accessories",
    img: "assets/USB Hub.webp"
  }
];

const NEW_PRODUCTS = [
  {
    id: "n1",
    title: "iPhone 15 Pro",
    price: 129999,
    category: "Smartphones",
    img: "assets/iPhone 15 Pro.webp"
  },
  {
    id: "n2",
    title: "Samsung S24 Ultra",
    price: 124999,
    category: "Smartphones",
    img: "assets/Samsung S24 Ultra.webp"
  },
  {
    id: "n3",
    title: "MacBook Air M3",
    price: 114900,
    category: "Laptops",
    img: "assets/MacBook Air M3.jpg"
  },
  {
    id: "n4",
    title: "ASUS ROG Strix",
    price: 89990,
    category: "Laptops",
    img: "assets/ASUS ROG Strix.webp"
  },
  {
    id: "n5",
    title: "Sony Bravia",
    price: 179999,
    category: "TVs",
    img: "assets/Sony Bravia.jpg"
  },
  {
    id: "n6",
    title: "LG C3 55 4K OLED",
    price: 139999,
    category: "TVs",
    img: "assets/LG C3 55 4K OLED.webp"
  },
  {
    id: "n7",
    title: "Echo Show 15",
    price: 24999,
    category: "Smart Home",
    img: "assets/Echo Show 15.webp"
  },
  {
    id: "n8",
    title: "Ring Doorbell Pro",
    price: 18999,
    category: "Smart Home",
    img: "assets/Ring Doorbell Pro.webp"
  },
  {
    id: "n9",
    title: "Sony Alpha A7 IV",
    price: 214999,
    category: "Cameras",
    img: "assets/Sony Alpha A7 IV.webp"
  },
  {
    id: "n10",
    title: "Canon EOS R6",
    price: 189999,
    category: "Cameras",
    img: "assets/Canon EOS R6.webp"
  }
];
