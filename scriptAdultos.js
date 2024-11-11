const products = [
    {name: 'Satisfyer Endless Joy', reference: 'P-0030', image: 'img/img026.png', quantity: 2, price: 120000, category: 'juguetes'},
    {name: 'Satisfyer Double Classic', reference: 'P-0031', image: 'img/img027.png', quantity: 2, price: 120000, category: 'juguetes'},
    {name: 'Dildo Realista Aton', reference: 'P-0033', image: 'img/img029.png', quantity: 3, price: 50000, category: 'dildos'},
    {name: 'Vibrador Realista Leo', reference: 'P-0034', image: 'img/img030.png', quantity: 1, price: 35000, category: 'dildos'},
    {name: 'Vibrador Casiopea', reference: 'P-0035', image: 'img/img031.png', quantity: 4, price: 30000, category: 'dildos'},
    {name: 'Dildo Amon - Negro', reference: 'P-0036', image: 'img/img032.png', quantity: 3, price: 50000, category: 'dildos'},
    {name: 'Dildo Amon - Piel', reference: 'P-0037', image: 'img/img033.png', quantity: 3, price: 50000, category: 'dildos'},
    {name: 'Pinzas para pezones graduables', reference: 'P-0038', image: 'img/img034.png', quantity: 11, price: 13000, category: 'juguetes'},
    {name: 'Dados sexuales para pareja de 12 lados', reference: 'P-0039', image: 'img/img035.png', quantity: 6, price: 10000, category: 'juguetes'},
    {name: 'Anillo vibrador para hombre', reference: 'P-0040', image: 'img/img036.png', quantity: 2, price: 10000, category: 'juguetes'},
    {name: 'Dildo Realista Silicona 15 cm', reference: 'P-0041', image: 'img/img037.png', quantity: 3, price: 25000, category: 'dildos'},
    {name: 'Parques Erótico - Juego de Mesa', reference: 'P-0042', image: 'img/img038.png', quantity: 2, price: 30000, category: 'juguetes'},
        
    // Agrega aquí los demás productos con sus respectivas categorías (joyeria, accesorios, ropa, etc.)
];


const productContainer = document.getElementById("product-container");

function displayProducts(filteredProducts) {
    productContainer.innerHTML = "";
    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Referencia: ${product.reference}</p>
            <p>Disponible: ${product.quantity}</p>
            <p class="price">$${product.price.toLocaleString()}</p>
        `;
        productContainer.appendChild(productCard);
    });
}

function filterCategory(category) {
    if (category === "all") {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// Cargar todos los productos al inicio
displayProducts(products);

