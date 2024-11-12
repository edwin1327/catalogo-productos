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
    {name: 'Babydoll sexy tipo corse con liguero, esposas y medias', reference: 'P-0043', image: 'img/img039.png', quantity: 4, price: 25000, category: 'babydolls'},
    {name: 'Babydoll sexy en V enterizo con liguero y medias', reference: 'P-0044', image: 'img/img040.png', quantity: 3, price: 20000, category: 'babydolls'},
    {name: 'Babydoll Sexy en V  en encaje', reference: 'P-0045', image: 'img/img041.png', quantity: 7, price: 15000, category: 'babydolls'},
    {name: 'Babydoll Sexy en V  en encaje', reference: 'P-0046', image: 'img/img042.png', quantity: 5, price: 15000, category: 'babydolls'},
    {name: 'Babydoll sexy lolita erótica', reference: 'P-0047', image: 'img/img043.png', quantity: 3, price: 40000, category: 'babydolls'},
    {name: 'Babydoll Sexy Monjita', reference: 'P-0048', image: 'img/img044.png', quantity: 2, price: 40000, category: 'babydolls'},
    {name: 'Babydoll Sexy Enfermera', reference: 'P-0049', image: 'img/img045.png', quantity: 1, price: 40000, category: 'babydolls'},
    {name: 'Cubre Pezones - Gato', reference: 'P-0050', image: 'img/img046.png', quantity: 4, price: 10000, category: 'juguetes'},
    {name: 'Cubre Pezones - Corazón', reference: 'P-0051', image: 'img/img047.png', quantity: 5, price: 10000, category: 'juguetes'},
    {name: 'Tanga invisible de encaje con flores - Rojo', reference: 'P-0052', image: 'img/img048.png', quantity: 6, price: 15000, category: 'babydolls'},
    {name: 'Masturbador Artificial para hombre (Boca) - Sin vibración', reference: 'P-0053', image: 'img/img049.png', quantity: 3, price: 45000, category: 'juguetes'},
    {name: 'Masajeador vibrador Electra Wand', reference: 'P-0054', image: 'img/img050.png', quantity: 2, price: 70000, category: 'juguetes'},
    {name: 'Medias tipo liguero - Cindy Love S4816', reference: 'P-0055', image: 'img/img051.png', quantity: 6, price: 15000, category: 'babydolls'},
    {name: 'Medias tipo liguero - Cindy Love S4535', reference: 'P-0056', image: 'img/img052.png', quantity: 6, price: 15000, category: 'babydolls'},
    {name: 'Babydoll Tipo Vestido Sexy en Encaje Sensual', reference: 'P-0057', image: 'img/img053.png', quantity: 4, price: 18000, category: 'babydolls'},
    {name: 'Babydoll Spandex sexy con encaje', reference: 'P-0058', image: 'img/img054.png', quantity: 4, price: 18000, category: 'babydolls'},
    
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

