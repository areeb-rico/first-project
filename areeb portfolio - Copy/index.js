window.addEventListener('scroll', function() {
    const navbar = document.getElementById('main-navigation');
    if (window.scrollY > 0) {
        navbar.classList.add('shadow'); // Add shadow on scroll
    } else {
        navbar.classList.remove('shadow'); // Remove shadow at the top
    }
});


const sections = document.querySelectorAll('.portfolio-section'); // Select all sections
const navlinks = document.querySelectorAll('.rightlinks ul li a'); // Select all navigation links

window.onscroll = () => {
    let top = window.scrollY; // Get the current scroll position

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Offset for the section
        let height = sec.offsetHeight; // Height of the section
        let id = sec.getAttribute('id'); // Get the id of the section

        // Check if the current scroll position is within the section
        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active'); // Remove active class from all links
            });

            // Use template literals to construct the selector
            const activeLink = document.querySelector(`.rightlinks ul li a[href*='${id}']`);
            if (activeLink) {
                activeLink.classList.add('active'); // Add active class to the corresponding link
            }
        }
    });
};