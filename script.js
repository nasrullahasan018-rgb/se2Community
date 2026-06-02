// Comprehensive Product Database with 72 Products across 10 Categories
const allProducts = [
    // TECH PRODUCTS (8 items)
    { id: 1, category: 'tech', name: "AI Wireless Earbuds Pro", price: 25.00, rating: 4.5, reviews: 234, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300", coins: "Extra 5% off", badge: "Hot" },
    { id: 2, category: 'tech', name: "Smart Watch SE2", price: 45.00, rating: 4.8, reviews: 567, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300", coins: "Get 10 coins", badge: "Best" },
    { id: 3, category: 'tech', name: "Gaming Mouse RGB", price: 15.00, rating: 4.3, reviews: 189, img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300", coins: "Extra 2% off", badge: "New" },
    { id: 4, category: 'tech', name: "Mechanical Keyboard", price: 60.00, rating: 4.7, reviews: 445, img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=300", coins: "Free Shipping", badge: "Sale" },
    { id: 5, category: 'tech', name: "USB-C Hub 7-in-1", price: 35.00, rating: 4.4, reviews: 267, img: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300", coins: "Extra 8% off", badge: "Hot" },
    { id: 6, category: 'tech', name: "Wireless Charger Pad", price: 22.00, rating: 4.6, reviews: 312, img: "https://images.unsplash.com/photo-1591290619701-6d54a2c1c6f5?w=300", coins: "Get 5 coins", badge: "Best" },
    { id: 7, category: 'tech', name: "4K Webcam", price: 55.00, rating: 4.5, reviews: 198, img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300", coins: "Free Delivery", badge: "New" },
    { id: 8, category: 'tech', name: "Portable SSD 1TB", price: 85.00, rating: 4.9, reviews: 523, img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300", coins: "Extra 12% off", badge: "Sale" },

    // FASHION PRODUCTS (8 items)
    { id: 9, category: 'fashion', name: "Classic White T-Shirt", price: 12.00, rating: 4.4, reviews: 445, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300", coins: "Get 3 coins", badge: "Hot" },
    { id: 10, category: 'fashion', name: "Blue Denim Jeans", price: 35.00, rating: 4.6, reviews: 678, img: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=300", coins: "Extra 10% off", badge: "Best" },
    { id: 11, category: 'fashion', name: "Casual Cotton Shirt", price: 20.00, rating: 4.3, reviews: 234, img: "https://images.unsplash.com/photo-1563622298318-c03d2b5f8317?w=300", coins: "Get 4 coins", badge: "New" },
    { id: 12, category: 'fashion', name: "Black Formal Blazer", price: 65.00, rating: 4.7, reviews: 389, img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300", coins: "Free Shipping", badge: "Sale" },
    { id: 13, category: 'fashion', name: "Summer Casual Shorts", price: 18.00, rating: 4.2, reviews: 156, img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300", coins: "Extra 5% off", badge: "Hot" },
    { id: 14, category: 'fashion', name: "Sweater Cardigan", price: 28.00, rating: 4.5, reviews: 267, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300", coins: "Get 6 coins", badge: "Best" },
    { id: 15, category: 'fashion', name: "Striped Polo Shirt", price: 22.00, rating: 4.4, reviews: 312, img: "https://images.unsplash.com/photo-1584865288642-e2b5ad5ed3e4?w=300", coins: "Extra 7% off", badge: "New" },
    { id: 16, category: 'fashion', name: "Premium Winter Coat", price: 95.00, rating: 4.8, reviews: 534, img: "https://images.unsplash.com/photo-1539533057440-7814baea1002?w=300", coins: "Free Delivery", badge: "Sale" },

    // HOME PRODUCTS (8 items)
    { id: 17, category: 'home', name: "Minimalist Backpack", price: 30.00, rating: 4.5, reviews: 289, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300", coins: "Get 15 coins", badge: "Hot" },
    { id: 18, category: 'home', name: "LED Desk Lamp", price: 28.00, rating: 4.6, reviews: 456, img: "https://images.unsplash.com/photo-1565636192335-14f2b7ce338c?w=300", coins: "Extra 8% off", badge: "Best" },
    { id: 19, category: 'home', name: "Soft Pillow Set (2pcs)", price: 24.00, rating: 4.4, reviews: 234, img: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=300", coins: "Get 5 coins", badge: "New" },
    { id: 20, category: 'home', name: "Cozy Throw Blanket", price: 32.00, rating: 4.7, reviews: 378, img: "https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=300", coins: "Extra 10% off", badge: "Sale" },
    { id: 21, category: 'home', name: "Wall Clock Modern", price: 18.00, rating: 4.3, reviews: 167, img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=300", coins: "Get 3 coins", badge: "Hot" },
    { id: 22, category: 'home', name: "Coffee Maker Deluxe", price: 58.00, rating: 4.8, reviews: 523, img: "https://images.unsplash.com/photo-1559056199-641a0ac8b8d5?w=300", coins: "Free Shipping", badge: "Best" },
    { id: 23, category: 'home', name: "Ceramic Vase Set", price: 26.00, rating: 4.4, reviews: 198, img: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=300", coins: "Extra 6% off", badge: "New" },
    { id: 24, category: 'home', name: "Bath Mat Premium", price: 22.00, rating: 4.5, reviews: 289, img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=300", coins: "Get 4 coins", badge: "Sale" },

    // SPORTS PRODUCTS (8 items)
    { id: 25, category: 'sports', name: "Running Shoes Pro", price: 72.00, rating: 4.7, reviews: 567, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300", coins: "Extra 15% off", badge: "Hot" },
    { id: 26, category: 'sports', name: "Yoga Mat Premium", price: 32.00, rating: 4.6, reviews: 445, img: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300", coins: "Free Shipping", badge: "Best" },
    { id: 27, category: 'sports', name: "Dumbbell Set 10kg", price: 48.00, rating: 4.5, reviews: 289, img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300", coins: "Extra 10% off", badge: "New" },
    { id: 28, category: 'sports', name: "Basketball Official Size", price: 28.00, rating: 4.4, reviews: 156, img: "https://images.unsplash.com/photo-1624526267942-ab67cb47c334?w=300", coins: "Get 7 coins", badge: "Sale" },
    { id: 29, category: 'sports', name: "Badminton Racket", price: 25.00, rating: 4.3, reviews: 198, img: "https://images.unsplash.com/photo-1461561111945-a1b6d76fdbbc?w=300", coins: "Extra 5% off", badge: "Hot" },
    { id: 30, category: 'sports', name: "Swimming Goggles", price: 15.00, rating: 4.2, reviews: 134, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300", coins: "Get 2 coins", badge: "Best" },
    { id: 31, category: 'sports', name: "Gym Bag Waterproof", price: 35.00, rating: 4.5, reviews: 267, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300", coins: "Extra 8% off", badge: "New" },
    { id: 32, category: 'sports', name: "Bicycle Helmet", price: 42.00, rating: 4.6, reviews: 312, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300", coins: "Free Delivery", badge: "Sale" },

    // JEWELRY PRODUCTS (8 items)
    { id: 33, category: 'jewelry', name: "Designer Sunglasses", price: 12.00, rating: 4.5, reviews: 456, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300", coins: "Get 5 coins", badge: "Hot" },
    { id: 34, category: 'jewelry', name: "Gold Chain Necklace", price: 45.00, rating: 4.7, reviews: 567, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300", coins: "Extra 12% off", badge: "Best" },
    { id: 35, category: 'jewelry', name: "Silver Ring Set", price: 35.00, rating: 4.4, reviews: 289, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300", coins: "Free Shipping", badge: "New" },
    { id: 36, category: 'jewelry', name: "Crystal Bracelet", price: 28.00, rating: 4.5, reviews: 234, img: "https://images.unsplash.com/photo-1515562141207-5dca89b14fab?w=300", coins: "Get 8 coins", badge: "Sale" },
    { id: 37, category: 'jewelry', name: "Pearl Earrings", price: 32.00, rating: 4.6, reviews: 312, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300", coins: "Extra 9% off", badge: "Hot" },
    { id: 38, category: 'jewelry', name: "Diamond Pendant", price: 125.00, rating: 4.8, reviews: 445, img: "https://images.unsplash.com/photo-1515562141207-5dca89b14fab?w=300", coins: "Free Delivery", badge: "Best" },
    { id: 39, category: 'jewelry', name: "Gold Plated Watch", price: 55.00, rating: 4.5, reviews: 267, img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=300", coins: "Extra 10% off", badge: "New" },
    { id: 40, category: 'jewelry', name: "Gemstone Ring", price: 48.00, rating: 4.6, reviews: 198, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300", coins: "Get 12 coins", badge: "Sale" },

    // BEAUTY PRODUCTS (8 items)
    { id: 41, category: 'beauty', name: "Face Cleanser Gel", price: 14.00, rating: 4.5, reviews: 389, img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300", coins: "Get 3 coins", badge: "Hot" },
    { id: 42, category: 'beauty', name: "Moisturizer Cream", price: 22.00, rating: 4.6, reviews: 523, img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300", coins: "Extra 6% off", badge: "Best" },
    { id: 43, category: 'beauty', name: "Lipstick Set (5pcs)", price: 28.00, rating: 4.4, reviews: 267, img: "https://images.unsplash.com/photo-1512207736139-6a3ee3dc3cb0?w=300", coins: "Get 5 coins", badge: "New" },
    { id: 44, category: 'beauty', name: "Foundation Makeup", price: 18.00, rating: 4.5, reviews: 234, img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300", coins: "Extra 4% off", badge: "Sale" },
    { id: 45, category: 'beauty', name: "Serum Anti-Aging", price: 35.00, rating: 4.7, reviews: 445, img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300", coins: "Free Shipping", badge: "Hot" },
    { id: 46, category: 'beauty', name: "Hair Shampoo", price: 12.00, rating: 4.3, reviews: 178, img: "https://images.unsplash.com/photo-1583408694512-8391f6ce9c60?w=300", coins: "Get 2 coins", badge: "Best" },
    { id: 47, category: 'beauty', name: "Mascara Premium", price: 16.00, rating: 4.4, reviews: 198, img: "https://images.unsplash.com/photo-1512207736139-6a3ee3dc3cb0?w=300", coins: "Extra 5% off", badge: "New" },
    { id: 48, category: 'beauty', name: "Face Mask Sheet", price: 11.00, rating: 4.5, reviews: 289, img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300", coins: "Get 2 coins", badge: "Sale" },

    // SHOES PRODUCTS (8 items)
    { id: 49, category: 'shoes', name: "Casual Sneakers White", price: 48.00, rating: 4.6, reviews: 534, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300", coins: "Extra 10% off", badge: "Hot" },
    { id: 50, category: 'shoes', name: "Formal Leather Shoes", price: 65.00, rating: 4.7, reviews: 445, img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300", coins: "Free Shipping", badge: "Best" },
    { id: 51, category: 'shoes', name: "Sports Running Shoes", price: 72.00, rating: 4.8, reviews: 567, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300", coins: "Extra 15% off", badge: "New" },
    { id: 52, category: 'shoes', name: "Comfortable Sandals", price: 22.00, rating: 4.4, reviews: 234, img: "https://images.unsplash.com/photo-1565610915601-0fbb63cb2136?w=300", coins: "Get 4 coins", badge: "Sale" },
    { id: 53, category: 'shoes', name: "Winter Boots", price: 85.00, rating: 4.6, reviews: 389, img: "https://images.unsplash.com/photo-1608256399457-f1fcac87b5ab?w=300", coins: "Extra 12% off", badge: "Hot" },
    { id: 54, category: 'shoes', name: "Casual Loafers", price: 42.00, rating: 4.5, reviews: 267, img: "https://images.unsplash.com/photo-1531378503509-106f1a53b3b3?w=300", coins: "Get 8 coins", badge: "Best" },
    { id: 55, category: 'shoes', name: "High Heels Formal", price: 58.00, rating: 4.7, reviews: 312, img: "https://images.unsplash.com/photo-1514001879170-fac9a75652bb?w=300", coins: "Free Delivery", badge: "New" },
    { id: 56, category: 'shoes', name: "Slip-on Flats", price: 32.00, rating: 4.4, reviews: 198, img: "https://images.unsplash.com/photo-1543934519-c152b6435b66?w=300", coins: "Extra 7% off", badge: "Sale" },

    // WATCHES PRODUCTS (8 items)
    { id: 57, category: 'watches', name: "Digital Watch Classic", price: 28.00, rating: 4.5, reviews: 267, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300", coins: "Get 6 coins", badge: "Hot" },
    { id: 58, category: 'watches', name: "Analog Leather Watch", price: 45.00, rating: 4.6, reviews: 389, img: "https://images.unsplash.com/photo-1569495413033-cb5c840f3a9b?w=300", coins: "Extra 8% off", badge: "Best" },
    { id: 59, category: 'watches', name: "Smart Watch Premium", price: 95.00, rating: 4.8, reviews: 534, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300", coins: "Free Shipping", badge: "New" },
    { id: 60, category: 'watches', name: "Chronograph Sport", price: 65.00, rating: 4.7, reviews: 445, img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300", coins: "Extra 10% off", badge: "Sale" },
    { id: 61, category: 'watches', name: "Dress Watch Gold", price: 78.00, rating: 4.6, reviews: 312, img: "https://images.unsplash.com/photo-1579836343880-5be5b268def5?w=300", coins: "Get 15 coins", badge: "Hot" },
    { id: 62, category: 'watches', name: "Waterproof Dive Watch", price: 85.00, rating: 4.7, reviews: 267, img: "https://images.unsplash.com/photo-1569495413033-cb5c840f3a9b?w=300", coins: "Free Delivery", badge: "Best" },
    { id: 63, category: 'watches', name: "Vintage Style Watch", price: 52.00, rating: 4.5, reviews: 234, img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300", coins: "Extra 9% off", badge: "New" },
    { id: 64, category: 'watches', name: "Minimalist Watch", price: 38.00, rating: 4.4, reviews: 198, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300", coins: "Get 7 coins", badge: "Sale" },

    // BAGS PRODUCTS (8 items)
    { id: 65, category: 'bags', name: "Laptop Backpack", price: 48.00, rating: 4.6, reviews: 456, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300", coins: "Extra 10% off", badge: "Hot" },
    { id: 66, category: 'bags', name: "Tote Bag Canvas", price: 32.00, rating: 4.5, reviews: 289, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300", coins: "Get 6 coins", badge: "Best" },
    { id: 67, category: 'bags', name: "Crossbody Bag Leather", price: 58.00, rating: 4.7, reviews: 367, img: "https://images.unsplash.com/photo-1491637539821-3b374c7171d0?w=300", coins: "Free Shipping", badge: "New" },
    { id: 68, category: 'bags', name: "Travel Duffle Bag", price: 42.00, rating: 4.4, reviews: 234, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300", coins: "Extra 8% off", badge: "Sale" },
    { id: 69, category: 'bags', name: "Shoulder Bag Hobo", price: 38.00, rating: 4.5, reviews: 267, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300", coins: "Get 7 coins", badge: "Hot" },
    { id: 70, category: 'bags', name: "Clutch Evening Bag", price: 28.00, rating: 4.6, reviews: 198, img: "https://images.unsplash.com/photo-1491637539821-3b374c7171d0?w=300", coins: "Extra 5% off", badge: "Best" },
    { id: 71, category: 'bags', name: "Sling Bag Premium", price: 35.00, rating: 4.4, reviews: 212, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300", coins: "Get 6 coins", badge: "New" },
    { id: 72, category: 'bags', name: "Weekender Bag", price: 55.00, rating: 4.7, reviews: 345, img: "https://images.unsplash.com/photo-1491637539821-3b374c7171d0?w=300", coins: "Free Delivery", badge: "Sale" },
];

// Cart and Wishlist Arrays
let cart = [];
let wishlist = [];
let cartCount = 0;

// Load Products
const productGrid = document.getElementById('productGrid');

function displayProducts(productsToShow = allProducts) {
    productGrid.innerHTML = '';
    productsToShow.forEach(product => {
        const isWishlisted = wishlist.some(item => item.id === product.id);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.img}" alt="${product.name}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <button class="wishlist-btn ${isWishlisted ? 'wishlisted' : ''}" onclick="toggleWishlist(${product.id}, event)" title="Add to wishlist">
                    <i class="fa fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="rating">
                    <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</span>
                    <span class="review-count">(${product.reviews})</span>
                </div>
                <p class="price">₨ ${product.price.toFixed(2)}</p>
                <p class="coins">${product.coins}</p>
                <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.img}')" class="add-to-cart-btn">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

function toggleWishlist(id, event) {
    event.stopPropagation();
    const product = allProducts.find(p => p.id === id);
    const index = wishlist.findIndex(item => item.id === id);
    
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(product);
    }
    
    displayProducts();
}

function addToCart(id, name, price, img) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id, name, price, img, quantity: 1 });
    }
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    openCart();
}

function openCart() {
    document.getElementById('cartModal').style.display = 'flex';
    updateCartDisplay();
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function updateCartDisplay() {
    const cartItemsList = document.getElementById('cartItemsList');
    cartItemsList.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">Your cart is empty</p>';
        return;
    }
    
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="item-details">
                <h4>${item.name}</h4>
                <p class="item-price">₨ ${item.price.toFixed(2)}</p>
                <div class="quantity-control">
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})"><i class="fa fa-trash"></i></button>
        `;
        cartItemsList.appendChild(cartItem);
    });
    
    document.getElementById('itemsTotal').innerText = `₨ ${total.toFixed(2)}`;
    document.getElementById('grandTotal').innerText = `₨ ${(total + 85 + 5).toFixed(2)}`;
}

function updateQuantity(index, change) {
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
        updateCartDisplay();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    cartCount--;
    document.getElementById('cart-count').innerText = cartCount;
    
    if (cart.length === 0) {
        closeCart();
    } else {
        updateCartDisplay();
    }
}

function applyPromo() {
    const code = document.getElementById('promoCode').value;
    if (code) {
        alert('Promo code "' + code + '" applied!');
    } else {
        alert('Please enter a promo code');
    }
}

function proceedToPayment() {
    alert('Proceeding to payment with ' + cart.length + ' item(s)!');
}

// Filter Products by Category
function filterByCategory(category) {
    if (category === 'all') {
        displayProducts(allProducts);
    } else {
        const filtered = allProducts.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

// Flash Sale Countdown
function startTimer(duration, display) {
    var timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    displayProducts();
    var fiveHours = 60 * 60 * 5,
    display = document.querySelector('#countdown');
    startTimer(fiveHours, display);
};
