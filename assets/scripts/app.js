
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

class ProductItem {
    product;
    constructor(product){
        this.product = product;
    }
    render(){
        const prodEl = document.createElement("li");
        prodEl.className = "product-item";
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
        return prodEl;
    }
}

class ProductList {
    products = [
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
    ];

    constructor(){}
    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for( const prod of this.products){
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}


const productList = new ProductList();
productList.render();