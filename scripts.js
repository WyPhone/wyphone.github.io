document.addEventListener('DOMContentLoaded', () => {
    const quoteForm = document.getElementById('quote-form');
    const contactForm = document.getElementById('contact-form');
    const productGallery = document.querySelector('.product-gallery');

    // Handle "Get a Quote" form submission
    quoteForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(quoteForm);
        const quoteData = {};
        formData.forEach((value, key) => {
            quoteData[key] = value;
        });

        console.log('Quote Form Data:', quoteData);

        // Display a confirmation message or send the data to your server
        alert('Quote request submitted successfully!');
        quoteForm.reset();
    });

    // Handle "Contact Us" form submission
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const contactData = {};
        formData.forEach((value, key) => {
            contactData[key] = value;
        });

        console.log('Contact Form Data:', contactData);

        // Display a confirmation message or send the data to your server
        alert('Contact message sent successfully!');
        contactForm.reset();
    });

    // Example products for Phone Cases
    const products = [
        {
            name: 'iPhone 12 Case',
            description: 'Durable and stylish case for iPhone 12.',
            price: '$19.99',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Samsung Galaxy S21 Case',
            description: 'Protective case for Samsung Galaxy S21.',
            price: '$24.99',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Google Pixel 5 Case',
            description: 'Slim case for Google Pixel 5.',
            price: '$15.99',
            imageUrl: 'https://via.placeholder.com/150'
        }
    ];

    // Function to display products in the Phone Cases section
    const displayProducts = () => {
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>${product.price}</strong></p>
                <button class="btn">Add to Cart</button>
            `;
            productGallery.appendChild(productItem);
        });
    };

    // Display products on page load
    displayProducts();
});
