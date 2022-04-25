
const productList = {
    products: [
        {
            title: "A Pillow",
            imageUrl: 'https://rnb.scene7.com/is/image/roomandboard/452325?scl=1',
            price: 19.99,
            description: "A Soft Pillow"
        },
        {
            title: "A Carpet",
            imageUrl: 'https://www.tapi.co.uk/oimgnn/images_products/L_1622_49355b0ed02f3c9ade7f27b8fdd0d0eb-Houston-1622-pdp-large-635.jpg',
            price: 89.99,
            description: "A carpet which you might like  - or not"
        }
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