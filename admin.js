function updateHome() {
    const title = document.getElementById('home-title').value;
    const text = document.getElementById('home-text').value;
    const image = document.getElementById('home-image').files[0];

    // Update home section in index.html (assume these elements exist)
    localStorage.setItem('home-title', title);
    localStorage.setItem('home-text', text);
    if (image) {
        const reader = new FileReader();
        reader.onload = function (e) {
            localStorage.setItem('home-image', e.target.result);
        };
        reader.readAsDataURL(image);
    }
    alert('Home section updated!');
}

function updateShop() {
    const product1Title = document.getElementById('product1-title').value;
    const product1Price = document.getElementById('product1-price').value;
    const product1Image = document.getElementById('product1-image').files[0];

    // Update product 1 in index.html (assume these elements exist)
    localStorage.setItem('product1-title', product1Title);
    localStorage.setItem('product1-price', product1Price);
    if (product1Image) {
        const reader = new FileReader();
        reader.onload = function (e) {
            localStorage.setItem('product1-image', e.target.result);
        };
        reader.readAsDataURL(product1Image);
    }
    alert('Shop section updated!');
}

function updateAbout() {
    const aboutText = document.getElementById('about-text').value;
    localStorage.setItem('about-text', aboutText);
    alert('About Us section updated!');
}

function updateContact() {
    const contactText = document.getElementById('contact-text').value;
    localStorage.setItem('contact-text', contactText);
    alert('Contact Us section updated!');
}
