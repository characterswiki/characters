// Dark mode toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
}

// Lazy loading images (already in HTML)
