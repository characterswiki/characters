// --- MAIN.JS FOR CHARACTERS WIKI ---
// Author: Your site
// Handles search, lazy load, smooth interactions

document.addEventListener("DOMContentLoaded", function() {

  // --- 1. Character Search Filter ---
  const searchInput = document.getElementById("searchInput");
  if(searchInput){
    searchInput.addEventListener("keyup", function() {
      const filter = this.value.toLowerCase();
      document.querySelectorAll(".card").forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(filter) ? "block" : "none";
      });
    });
  }

  // --- 2. Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // --- 3. Lazy load fallback ---
  const lazyImages = document.querySelectorAll("img[loading='lazy']");
  if("IntersectionObserver" in window){
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          obs.unobserve(img);
        }
      });
    });
    lazyImages.forEach(img => observer.observe(img));
  }

  // --- 4. Optional: Highlight active category/tag ---
  const currentPath = window.location.pathname;
  document.querySelectorAll('a').forEach(link => {
    if(link.href.includes(currentPath) && currentPath != "/"){
      link.classList.add("active-link");
    }
  });

});
