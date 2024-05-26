// productos.js

let cart = [];
let total = 0;

document.getElementById('search').addEventListener('input', function (event) {
    const searchTerm = event.target.value.toLowerCase();
    const products = document.querySelectorAll('.producto');
    
    products.forEach(product => {
        const productName = product.querySelector('h2').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

function addToCart(productName, productPrice) {
    const product = cart.find(item => item.name === productName);
    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(productName) {
    const productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex !== -1) {
        cart[productIndex].quantity -= 1;
        if (cart[productIndex].quantity === 0) {
            cart.splice(productIndex, 1);
        }
    }
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';
    total = 0;
    
    cart.forEach(product => {
        const productItem = document.createElement('div');
        productItem.textContent = `${product.name} x${product.quantity} - $${product.price * product.quantity}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = () => removeFromCart(product.name);
        
        productItem.appendChild(removeButton);
        cartContainer.appendChild(productItem);
        
        total += product.price * product.quantity;
    });
    
    document.getElementById('total').textContent = total;
}

