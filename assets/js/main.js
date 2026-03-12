// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.site-nav__toggle');
    const menu = document.querySelector('.site-nav__menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// Global search (from header)
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

if (searchInput && searchResults) {
    let posts = [];

    fetch('/characters/assets/js/search-data.json')
        .then(response => response.json())
        .then(data => { posts = data; })
        .catch(err => console.log('Search data not loaded yet.'));

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        if (query.length < 2) {
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
            return;
        }
        const filtered = posts.filter(post =>
            post.title.toLowerCase().includes(query) ||
            (post.content && post.content.toLowerCase().includes(query))
        ).slice(0, 10);
        if (filtered.length > 0) {
            searchResults.innerHTML = filtered.map(post =>
                `<div class="search-result-item"><a href="${post.url}">${post.title}</a></div>`
            ).join('');
            searchResults.classList.add('active');
        } else {
            searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
            searchResults.classList.add('active');
        }
    });

    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });
}
