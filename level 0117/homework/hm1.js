// Divs
const containerDiv = document.getElementById("container");

// Buttons
const button = document.getElementById("btn");

// Fetch products (https://fakestoreapi.com/products)
const getProducts = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error(response.message);
        }

        const data = await response.json();

        return data;
    } catch (err) {
        console.log(err);
    }
};

// Fetch and render products
const renderProducts = async () => {
    try {
        const products = await getProducts();

        containerDiv.innerHTML = "";

        products.forEach(product => {
            containerDiv.innerHTML += `
                <div>
                    <h1>${product.title}</h1>
                    <h1>Rating: ${product.rating.rate} (${product.rating.count})</h1>
                    <img src="${product.image}" height="200" />
                    <h2>${product.description}</h2>
                    <h3>${product.category}</h3>
                    <p>${product.price}</p>
                    <p>------------------------------------------------------------------</p>
                </div>
            `;
        });
    } catch (err) {
        console.log(err);
    };
};

button.addEventListener("click", renderProducts);