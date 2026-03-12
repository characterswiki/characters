---
layout: default
title: Home
---

<!-- HERO SECTION -->
<section class="hero">
  <div class="container hero__container">
    <h1 class="hero__title">{{ site.title }}</h1>
    <p class="hero__description">{{ site.description }}</p>
    <input 
      type="text" 
      id="hero-search" 
      class="hero__search" 
      placeholder="Search characters..." 
      aria-label="Search characters"
    />
  </div>
</section>

<!-- LATEST CHARACTERS SECTION -->
<section class="latest-characters container">
  <h2 class="section-title">Latest Characters</h2>
  <div class="posts-grid" id="character-grid">
    {% for post in site.posts limit:12 %}
    <article class="post-card">
      <a href="{{ post.url | relative_url }}" class="post-card__image-link">
        <img 
          src="{{ post.image | default: '/assets/images/default-character.jpg' | relative_url }}" 
          alt="{{ post.title }}" 
          class="post-card__image" 
          loading="lazy"
        />
      </a>
      <div class="post-card__content">
        <h3 class="post-card__title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <div class="post-card__meta">
          {{ post.categories | join: ", " }}
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<!-- CATEGORIES SECTION -->
<section class="categories-section container">
  <h2 class="section-title">Categories</h2>
  <div class="category-grid">
    {% for category in site.categories %}
    <a href="{{ '/categories/' | append: category[0] | slugify | relative_url }}" class="category-card">
      <h3 class="category-card__title">{{ category[0] }}</h3>
      <span class="category-card__count">{{ category[1].size }} characters</span>
    </a>
    {% endfor %}
  </div>
</section>

<!-- TAGS SECTION -->
<section class="tags-section container">
  <h2 class="section-title">Popular Tags</h2>
  <div class="tags-cloud">
    {% for tag in site.tags limit:30 %}
    <a href="{{ '/tags/' | append: tag[0] | slugify | relative_url }}" class="tag">{{ tag[0] }}</a>
    {% endfor %}
  </div>
</section>

<!-- SEARCH SCRIPT (filter cards on homepage) -->
<script>
  document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("hero-search");
    if (!searchInput) return;

    searchInput.addEventListener("keyup", function() {
      const filter = this.value.toLowerCase().trim();
      const cards = document.querySelectorAll("#character-grid .post-card");

      cards.forEach(card => {
        const title = card.querySelector(".post-card__title")?.innerText.toLowerCase() || "";
        const meta = card.querySelector(".post-card__meta")?.innerText.toLowerCase() || "";
        const matches = title.includes(filter) || meta.includes(filter);
        card.style.display = matches ? "" : "none";
      });
    });
  });
</script>
