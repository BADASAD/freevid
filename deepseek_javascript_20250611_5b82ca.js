document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar on menu click
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Video card click handler
    const videoCards = document.querySelectorAll('.video-card');
    const videoModal = document.querySelector('.video-player-modal');
    const closeModal = document.querySelector('.close-modal');
    
    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            videoModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeModal.addEventListener('click', function() {
        videoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === videoModal) {
            videoModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Category scrolling
    const categories = document.querySelector('.categories');
    let isDown = false;
    let startX;
    let scrollLeft;

    categories.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - categories.offsetLeft;
        scrollLeft = categories.scrollLeft;
    });

    categories.addEventListener('mouseleave', () => {
        isDown = false;
    });

    categories.addEventListener('mouseup', () => {
        isDown = false;
    });

    categories.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - categories.offsetLeft;
        const walk = (x - startX) * 2;
        categories.scrollLeft = scrollLeft - walk;
    });

    // Active category selection
    const categoryBtns = document.querySelectorAll('.category');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Dark mode toggle (example)
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.classList.add('dark-mode-toggle');
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.bottom = '20px';
    darkModeToggle.style.right = '20px';
    darkModeToggle.style.zIndex = '1000';
    darkModeToggle.style.padding = '10px';
    darkModeToggle.style.borderRadius = '50%';
    darkModeToggle.style.backgroundColor = '#333';
    darkModeToggle.style.color = 'white';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.cursor = 'pointer';
    
    document.body.appendChild(darkModeToggle);
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            document.body.style.backgroundColor = '#0f0f0f';
            document.body.style.color = '#f1f1f1';
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            darkModeToggle.style.backgroundColor = '#f1f1f1';
            darkModeToggle.style.color = '#333';
        } else {
            document.body.style.backgroundColor = '#f9f9f9';
            document.body.style.color = '#030303';
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            darkModeToggle.style.backgroundColor = '#333';
            darkModeToggle.style.color = 'white';
        }
    });

    // Simulate loading more videos on scroll
    window.addEventListener('scroll', function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
            // In a real app, you would fetch more videos here
            console.log('Loading more videos...');
        }
    });
});