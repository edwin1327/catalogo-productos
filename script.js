const products = [
    {name: 'Set Cadena Gato', reference: 'P-0001', image: 'img/img001.png', quantity: 5, price: 30000, category: 'joyeria'},
    {name: 'Set Cadena Bailarina', reference: 'P-0002', image: 'img/img002.png', quantity: 5, price: 30000, category: 'joyeria'},
    {name: 'Set Cadena Bailarina', reference: 'P-0003', image: 'img/img003.png', quantity: 6, price: 30000, category: 'joyeria'},
    {name: 'Anillo ajustable orejas de gato', reference: 'P-0004', image: 'img/img004.png', quantity: 8, price: 20000, category: 'joyeria'},
    {name: 'Anillo ajustable gato y corazón', reference: 'P-0005', image: 'img/img005.png', quantity: 5, price: 25000, category: 'joyeria'},
    {name: 'Set Cadena Corazón', reference: 'P-0006', image: 'img/img006.png', quantity: 6, price: 30000, category: 'joyeria'},
    {name: 'Set Cadena Señor Gato', reference: 'P-0007', image: 'img/img007.png', quantity: 5, price: 30000, category: 'joyeria'},
    {name: 'Set Cadena Nota Musical', reference: 'P-0008', image: 'img/img008.png', quantity: 2, price: 30000, category: 'joyeria'},
    {name: 'Anillo ajustable pluma', reference: 'P-0009', image: 'img/img009.png', quantity: 3, price: 20000, category: 'joyeria'},
    {name: 'Relicario de Plata corazón', reference: 'P-0010', image: 'img/img010.png', quantity: 5, price: 20000, category: 'joyeria'},
    {name: 'Reloj dama tipo brazalete', reference: 'P-0011', image: 'img/img011.png', quantity: 4, price: 25000, category: 'accesorios'},
    {name: 'Reloj dama tipo brazalete', reference: 'P-0012', image: 'img/img012.png', quantity: 5, price: 25000, category: 'accesorios'},
    {name: 'Anillo luz LED para selfies', reference: 'P-0013', image: 'img/img013.png', quantity: 1, price: 15000, category: 'tecnologia'},
    {name: 'Guantes Huella de Gato', reference: 'P-0014', image: 'img/img014.png', quantity: 6, price: 25000, category: 'accesorios'},
    {name: 'Guantes Huella de Gato', reference: 'P-0015', image: 'img/img015.png', quantity: 6, price: 25000, category: 'accesorios'},
    {name: 'Guantes Huella de Gato', reference: 'P-0016', image: 'img/img016.png', quantity: 5, price: 25000, category: 'accesorios'},
    {name: 'Medias Gato Artemís - Niña  (Talla L)', reference: 'P-0017', image: 'img/img017.png', quantity: 1, price: 20000, category: 'accesorios'},
    {name: 'Medias Conejo - Niña (Talla M)', reference: 'P-0018', image: 'img/img018.png', quantity: 2, price: 20000, category: 'accesorios'},
    {name: 'Medias Conejo - Niña  (Talla L)', reference: 'P-0019', image: 'img/img018.png', quantity: 2, price: 20000, category: 'accesorios'},
    {name: 'Medias Love Cat - Niña  (Talla L)', reference: 'P-0020', image: 'img/img019.png', quantity: 4, price: 20000, category: 'accesorios'},
    {name: 'Pelicula Antilluvia para espejo (10x15 cm)', reference: 'P-0021', image: 'img/img020.png', quantity: 5, price: 13000, category: 'vehiculos'},
    {name: 'Pelicula Antilluvia para espejo (9.5x13.5 cm)', reference: 'P-0022', image: 'img/img020.png', quantity: 4, price: 13000, category: 'vehiculos'},
    {name: 'Pelicula Antilluvia para espejo (9.5x9.5 cm)', reference: 'P-0023', image: 'img/img020.png', quantity: 9, price: 13000, category: 'vehiculos'},
    {name: 'Pelicula Antilluvia para ventana (20x17 cm)', reference: 'P-0024', image: 'img/img021.png', quantity: 5, price: 20000, category: 'vehiculos'},
    {name: 'Pelicula Antilluvia para casco', reference: 'P-0025', image: 'img/img022.png', quantity: 4, price: 20000, category: 'vehiculos'},
    {name: 'Pelicula Empañante para casco', reference: 'P-0026', image: 'img/img022.png', quantity: 5, price: 20000, category: 'vehiculos'},
    {name: 'Reloj dama de flores - Blanco', reference: 'P-0027', image: 'img/img023.png', quantity: 6, price: 30000, category: 'accesorios'},
    {name: 'Moneda conmemorativa Bitcoin - Plateada', reference: 'P-0028', image: 'img/img024.png', quantity: 7, price: 15000, category: 'coleccionables'},
    {name: 'Guante Masajeador balines acero', reference: 'P-0029', image: 'img/img025.png', quantity: 3, price: 15000, category: 'salud'},
    {name: 'Reloj Skmei para hombre Digital', reference: 'P-0032', image: 'img/img028.png', quantity: 2, price: 35000, category: 'accesorios'},
                
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
