// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger.addEventListener('click', ()=>{mobileMenu.classList.toggle('active');});

// Search toggle
const searchToggle = document.querySelector('.search-toggle');
const searchBar = document.querySelector('.search-bar');
searchToggle.addEventListener('click', ()=>{searchBar.classList.toggle('active');});

// Sidebar search filter
const searchInput = document.getElementById('searchInput');
if(searchInput){
  searchInput.addEventListener('input', function(){
    const term = this.value.toLowerCase();
    const posts = document.querySelectorAll('.post-card');
    posts.forEach(post=>{
      const title = post.querySelector('h2').innerText.toLowerCase();
      post.style.display = title.includes(term)?'block':'none';
    });
  });
}
