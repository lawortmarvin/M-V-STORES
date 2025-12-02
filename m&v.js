// Product data
const sunglasses = [
    { 
        id: 1, 
        name: "Classic Aviator", 
        price: "$149", 
        category: "aviator", 
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Timeless aviator style with UV400 protection",
        featured: true
    },
    { 
        id: 2, 
        name: "Retro Wayfarer", 
        price: "$129", 
        category: "wayfarer", 
        image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Classic wayfarer design with polarized lenses",
        featured: true
    },
    { 
        id: 3, 
        name: "Sport Sunglasses", 
        price: "$179", 
        category: "sport", 
        image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Durable sports sunglasses with grip technology",
        featured: false
    },
    { 
        id: 4, 
        name: "Designer Frames", 
        price: "$299", 
        category: "designer", 
        image: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Luxury designer frames with premium materials",
        featured: true
    },
    { 
        id: 5, 
        name: "Polarized Shades", 
        price: "$199", 
        category: "aviator", 
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Polarized lenses for reduced glare",
        featured: false
    },
    { 
        id: 6, 
        name: "Vintage Collection", 
        price: "$159", 
        category: "wayfarer", 
        image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Vintage-inspired design with modern technology",
        featured: false
    }
];

const perfumes = [
    { 
        id: 1, 
        name: "Floral Essence", 
        price: "$89", 
        category: "floral", 
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Delicate floral notes with lasting fragrance",
        featured: true
    },
    { 
        id: 2, 
        name: "Woody Musk", 
        price: "$99", 
        category: "woody", 
        image: "https://images.unsplash.com/photo-1590736969955-1d0c72c4222f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Rich woody base with musk undertones",
        featured: true
    },
    { 
        id: 3, 
        name: "Fresh Citrus", 
        price: "$79", 
        category: "fresh", 
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Zesty citrus blend for everyday freshness",
        featured: false
    },
    { 
        id: 4, 
        name: "Oriental Spice", 
        price: "$109", 
        category: "oriental", 
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Exotic oriental spices with warm notes",
        featured: false
    },
    { 
        id: 5, 
        name: "Summer Breeze", 
        price: "$85", 
        category: "fresh", 
        image: "https://images.unsplash.com/photo-1546453573-2c87471aca4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Light and airy scent perfect for summer",
        featured: true
    },
    { 
        id: 6, 
        name: "Mystic Rose", 
        price: "$95", 
        category: "floral", 
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Romantic rose fragrance with mysterious depth",
        featured: false
    }
];

// Blog data
const blogPosts = [
    {
        id: 1,
        title: "How to Choose the Perfect Sunglasses for Your Face Shape",
        excerpt: "Discover the best sunglasses styles for oval, round, square, and heart-shaped faces.",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Sunglasses Trends",
        date: "April 12, 2023",
        content: "Choosing the right sunglasses for your face shape can enhance your features and complement your style. For oval faces, most styles work well. Round faces benefit from angular frames, while square faces look great with rounded or oval frames. Heart-shaped faces are flattered by bottom-heavy frames that balance the forehead."
    },
    {
        id: 2,
        title: "The Art of Layering Perfumes",
        excerpt: "Learn how to create your unique scent by combining different fragrances.",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Perfume Guides",
        date: "March 28, 2023",
        content: "Layering perfumes allows you to create a signature scent that is uniquely yours. Start with a base note like musk or vanilla, add a middle note such as floral or spice, and finish with a top note of citrus or light fruits. Apply to pulse points and don't be afraid to experiment with different combinations."
    },
    {
        id: 3,
        title: "Summer 2023 Sunglasses Trends",
        excerpt: "Explore the hottest sunglasses styles for the upcoming summer season.",
        image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Sunglasses Trends",
        date: "March 15, 2023",
        content: "This summer, oversized frames, colored lenses, and retro-inspired designs are making a comeback. Look for cat-eye shapes, transparent frames, and gradient lenses. Don't forget about UV protection - style should never compromise on eye health."
    },
    {
        id: 4,
        title: "Understanding Perfume Notes",
        excerpt: "A guide to top, middle, and base notes in perfumes and how they evolve.",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Perfume Guides",
        date: "February 22, 2023",
        content: "Perfumes are composed of different notes that reveal themselves over time. Top notes are the initial scent that lasts 15-30 minutes. Middle notes form the heart of the fragrance and last several hours. Base notes are the foundation that can linger for days. Understanding these layers helps you choose a perfume that evolves beautifully throughout the day."
    }
];

// Gallery data
const galleryItems = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "sunglasses",
        title: "Classic Collection"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "perfumes",
        title: "Fragrance Display"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "sunglasses",
        title: "Retro Styles"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "perfumes",
        title: "Luxury Scents"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "sunglasses",
        title: "Sport Collection"
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "sunglasses",
        title: "Vintage Finds"
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "sunglasses",
        title: "Designer Frames"
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1546453573-2c87471aca4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "perfumes",
        title: "Summer Collection"
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "lifestyle",
        title: "Store Interior"
    }
];

// Team data
const teamMembers = [
    {
        id: 1,
        name: "Sarah Johnson",
        position: "Founder & CEO",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        bio: "Sarah founded LuxeVision with a vision to bring luxury accessories to fashion-forward individuals."
    },
    {
        id: 2,
        name: "Michael Brown",
        position: "Head of Product",
        image: "https://randomuser.me/api/portraits/men/54.jpg",
        bio: "Michael curates our collections with an expert eye for quality and style."
    },
    {
        id: 3,
        name: "Emma Wilson",
        position: "Creative Director",
        image: "https://randomuser.me/api/portraits/women/67.jpg",
        bio: "Emma ensures our brand aesthetic remains consistent and appealing across all touchpoints."
    },
    {
        id: 4,
        name: "David Chen",
        position: "Customer Experience Manager",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        bio: "David and his team are dedicated to providing exceptional service to our customers."
    }
];

// FAQ data
const faqItems = [
    {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for all unused items in their original packaging. Returns are free for customers in the United States."
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location."
    },
    {
        question: "How can I track my order?",
        answer: "Once your order ships, you will receive a tracking number via email. You can use this number to track your package on our website or the carrier's website."
    },
    {
        question: "Do you offer gift wrapping?",
        answer: "Yes, we offer complimentary gift wrapping for all orders. You can select this option during checkout and include a personalized message."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted."
    }
];

// Shopping cart functionality
let cart = [];
let cartCount = 0;

// Function to generate product cards
function generateProductCards(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        
        col.innerHTML = `
            <div class="card product-card" data-category="${product.category}">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text price">${product.price}</p>
                    <div class="d-flex justify-content-between">
                        <a href="#" class="btn btn-outline-primary">View Details</a>
                        <button class="btn btn-primary add-to-cart" data-product-id="${product.id}" data-product-type="${containerId === 'sunglasses-container' ? 'sunglasses' : 'perfumes'}">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
    
    // Add event listeners to the new add to cart buttons
    attachAddToCartListeners();
}

// Function to load featured products on home page
function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Get featured products from both categories
    const featuredSunglasses = sunglasses.filter(product => product.featured);
    const featuredPerfumes = perfumes.filter(product => product.featured);
    const featuredProducts = [...featuredSunglasses, ...featuredPerfumes];
    
    // Display only 3 featured products
    const productsToShow = featuredProducts.slice(0, 3);
    
    productsToShow.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        
        col.innerHTML = `
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text price">${product.price}</p>
                    <div class="d-flex justify-content-between">
                        <a href="products.html" class="btn btn-outline-primary">View Details</a>
                        <button class="btn btn-primary add-to-cart" data-product-id="${product.id}" data-product-type="${sunglasses.includes(product) ? 'sunglasses' : 'perfumes'}">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
    
    // Add event listeners to the new add to cart buttons
    attachAddToCartListeners();
}

// Function to load all products on products page
function loadAllProducts() {
    generateProductCards(sunglasses, 'sunglasses-container');
    generateProductCards(perfumes, 'perfumes-container');
}

// Function to load blog posts
function loadBlogPosts() {
    const container = document.getElementById('blog-posts');
    if (!container) return;
    
    container.innerHTML = '';
    
    blogPosts.forEach(post => {
        const col = document.createElement('div');
        col.className = 'col-md-6 mb-4';
        
        col.innerHTML = `
            <div class="blog-card">
                <div class="blog-card-inner">
                    <div class="blog-card-front">
                        <img src="${post.image}" alt="${post.title}">
                        <div class="card-body">
                            <span class="badge bg-primary mb-2">${post.category}</span>
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.excerpt}</p>
                            <small class="text-muted">${post.date}</small>
                        </div>
                    </div>
                    <div class="blog-card-back">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.content}</p>
                            <a href="#" class="btn btn-light mt-3">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
}

// Function to load gallery items
function loadGalleryItems() {
    const container = document.getElementById('gallery-items');
    if (!container) return;
    
    container.innerHTML = '';
    
    galleryItems.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        
        col.innerHTML = `
            <div class="gallery-item" data-category="${item.category}">
                <img src="${item.image}" alt="${item.title}">
                <div class="gallery-overlay">
                    <h5 class="text-white">${item.title}</h5>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
    
    // Add filter functionality to gallery
    const filterButtons = document.querySelectorAll('.gallery-filter .filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Function to load team members
function loadTeamMembers() {
    const container = document.getElementById('team-members');
    if (!container) return;
    
    container.innerHTML = '';
    
    teamMembers.forEach(member => {
        const col = document.createElement('div');
        col.className = 'col-md-3';
        
        col.innerHTML = `
            <div class="team-card">
                <img src="${member.image}" alt="${member.name}">
                <h4>${member.name}</h4>
                <p class="text-primary">${member.position}</p>
                <p>${member.bio}</p>
            </div>
        `;
        
        container.appendChild(col);
    });
}

// Function to initialize contact page
function initContactPage() {
    // Contact form validation and submission
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            showFormMessage('Sending your message...', 'info');
            
            setTimeout(() => {
                showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
            }, 2000);
        });
    }
    
    // Load FAQ items
    const faqContainer = document.getElementById('faqAccordion');
    if (faqContainer) {
        faqContainer.innerHTML = '';
        
        faqItems.forEach((item, index) => {
            const faqItem = document.createElement('div');
            faqItem.className = 'accordion-item';
            
            faqItem.innerHTML = `
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="collapse${index}">
                        ${item.question}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="heading${index}" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        ${item.answer}
                    </div>
                </div>
            `;
            
            faqContainer.appendChild(faqItem);
        });
    }
}

// Function to show form message
function showFormMessage(message, type) {
    const formMessage = document.getElementById('form-message');
    if (!formMessage) return;
    
    formMessage.textContent = message;
    formMessage.className = `mt-3 alert alert-${type === 'error' ? 'danger' : type === 'success' ? 'success' : 'info'}`;
    
    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = '';
        }, 5000);
    }
}

// Function to attach event listeners to add to cart buttons
function attachAddToCartListeners() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = parseInt(this.getAttribute('data-product-id'));
            const productType = this.getAttribute('data-product-type');
            
            addToCart(productId, productType);
            
            // Show confirmation
            showAddToCartConfirmation();
        });
    });
}

// Function to add item to cart
function addToCart(productId, productType) {
    let product;
    
    if (productType === 'sunglasses') {
        product = sunglasses.find(p => p.id === productId);
    } else {
        product = perfumes.find(p => p.id === productId);
    }
    
    if (product) {
        cart.push(product);
        cartCount++;
        updateCartCount();
    }
}

// Function to update cart count in UI
function updateCartCount() {
    const cartIcon = document.querySelector('.fa-shopping-cart').parentElement;
    
    // Remove existing badge if any
    const existingBadge = cartIcon.querySelector('.cart-badge');
    if (existingBadge) {
        existingBadge.remove();
    }
    
    // Add new badge if there are items in cart
    if (cartCount > 0) {
        const badge = document.createElement('span');
        badge.className = 'cart-badge';
        badge.textContent = cartCount;
        cartIcon.style.position = 'relative';
        cartIcon.appendChild(badge);
    }
}

// Function to show add to cart confirmation
function showAddToCartConfirmation() {
    // Create toast notification
    const toast = document.createElement('div');
    toast.className = 'position-fixed bottom-0 end-0 p-3';
    toast.style.zIndex = '11';
    toast.innerHTML = `
        <div class="toast show" role="alert">
            <div class="toast-header">
                <i class="fas fa-check-circle text-success me-2"></i>
                <strong class="me-auto">Success</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
            </div>
            <div class="toast-body">
                Item added to cart successfully!
            </div>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Initialize the page with common functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                alert(`Thank you for subscribing with ${email}! You'll receive our latest updates soon.`);
                emailInput.value = '';
            }
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Filter functionality for products
    const filterButtons = document.querySelectorAll('.filter-buttons .filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            const containerId = this.closest('section').querySelector('.row[id$="container"]').id;
            
            let products = [];
            if (containerId === 'sunglasses-container') {
                products = sunglasses;
            } else {
                products = perfumes;
            }
            
            if (filterValue === 'all') {
                generateProductCards(products, containerId);
            } else {
                const filteredProducts = products.filter(product => product.category === filterValue);
                generateProductCards(filteredProducts, containerId);
            }
        });
    });
});