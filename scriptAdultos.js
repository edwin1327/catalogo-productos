const products = [
    {name: 'Satisfyer Endless Joy', reference: 'P-0030', image: 'img/img026.png', quantity: 2, price: 120000, category: 'juguetes'},
    {name: 'Satisfyer Double Classic', reference: 'P-0031', image: 'img/img027.png', quantity: 2, price: 120000, category: 'juguetes'},           
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

