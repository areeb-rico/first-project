window.addEventListener('scroll', function() {
    const navbar = document.getElementById('main-navigation');
    if (window.scrollY > 0) {
        navbar.classList.add('shadow'); // Add shadow on scroll
    } else {
        navbar.classList.remove('shadow'); // Remove shadow at the top
    }
});


