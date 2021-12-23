const productList = {
    products: [{
        title: 'A Pillow',
        imageUrl: 'https://www.slumbr.com/wp-rckXdgae/wp-content/uploads/2017/09/Why-should-I-upgrade-to-a-premium-pillow-932x666.jpg',
        price: 19.99,
        description: 'A soft pillow'
    }, {
        title: 'A Carpet',
        imageUrl: 'http://justfunfacts.com/wp-content/uploads/2019/05/carpet.jpg',
        price: 89.99,
        description: 'A carpet which you might like'
    }],
    render() {
        const renderHook = document.getElementById('app');
        const productList = document.createElement('ul');
        productList.className('product-list');

        this.products.forEach( product => {
            const prodEl = document.createElement('li');
            prodEl.className('product-item');
            prodEl.innerHTML = `
            <div>
            <img src="${product.imageUrl}" alt="${product.title}">
            <div class="product-item_content">
            <h2>${product.title}</h2>
            <h3>\$${product.price}</h3>
            <p>${product.description}</p>
            <button>Add to cart</button>
</div>
            </div>
            `;
            productList.append(prodEl);
        });

        renderHook.append(productList);
    }
};

productList.render();
