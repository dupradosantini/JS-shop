
class Product {
    title = 'DEFAULT';
    imageUrl;
    description;
    price;

    constructor(title, imageUrl, description, price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
}


const productList = {
    products: [
        new Product(
            "A Pillow",
            "https://rnb.scene7.com/is/image/roomandboard/452325?scl=1",
            19.99,
            "A Soft Pillow"
        ),
        new Product(
            "A Carpet",
            'https://www.tapi.co.uk/oimgnn/images_products/L_1622_49355b0ed02f3c9ade7f27b8fdd0d0eb-Houston-1622-pdp-large-635.jpg',
            89.99,
            "A carpet which you might like  - or not"
        ),
    ],
    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for( const prod of this.products){
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
                <img src="${prod.imageUrl}" alt="${prod.title}">
                <div class="product-item__content">
                    <h2>${prod.title}</h2>
                    <h3>\$${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    } 
};

productList.render();