---
layout: default
title: "Characters Wiki"
description: "Browse the complete database of anime and manga characters with detailed stats and lore."
---

<!-- ================= HEADER ================= -->
<header class="site-header">
  <div class="header-container">
    <a href="{{ '/' | relative_url }}" class="site-logo">🏮 CharactersWiki</a>
    
    <!-- Hamburger menu for mobile -->
    <button class="menu-toggle" aria-label="Toggle navigation">☰</button>

    <!-- Main navigation -->
    <nav class="main-nav">
      <a href="{{ '/' | relative_url }}">Home</a>
      <a href="{{ '/categories/' | relative_url }}">Categories</a>
      <a href="{{ '/tags/' | relative_url }}">Tags</a>
      <a href="{{ '/about/' | relative_url }}">About</a>
    </nav>

    <!-- Search box -->
    <div class="search-box">
      <input type="text" placeholder="Search characters...">
    </div>
  </div>
</header>

<script>
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
toggle.addEventListener("click", () => { nav.classList.toggle("show"); });
</script>

<!-- ================= INTRO ================= -->
<section class="intro-header">
  <h1>Welcome to Characters Wiki</h1>
  <p>Discover <strong>anime, manga, game, and movie characters</strong> in one place. Explore heroes, villains, and side characters with detailed profiles, abilities, and lore. Use the navigation menu to browse by <strong>Categories</strong>, <strong>Tags</strong>, or <strong>Popular Series</strong>.</p>
</section>

<!-- ================= CHARACTER GRID ================= -->
<div class="character-grid">

{% assign posts = site.posts | sort: "title" %}
{% for post in posts %}
<a href="{{ post.url | relative_url }}" class="character-card" aria-label="View profile of {{ post.title }}">
  <div class="card-img-wrapper">
    {% if post.image %}
      {% assign img = post.image | remove_first: "/" %}
      <img src="{{ img | relative_url }}"
           alt="{{ post.title }} character image"
           loading="lazy"
           decoding="async"
           width="400"
           height="500"
           onerror="this.src='{{ '/assets/images/placeholder.jpg' | relative_url }}';">
    {% else %}
      <img src="{{ '/assets/images/placeholder.jpg' | relative_url }}"
           alt="No image available"
           loading="lazy"
           width="400"
           height="500">
    {% endif %}
    {% if post.categories and post.categories.size > 0 %}
      <span class="card-category">{{ post.categories | first }}</span>
    {% endif %}
  </div>

  <div class="card-info">
    <h3 class="card-title">{{ post.title }}</h3>
    {% if post.excerpt %}
      <p class="card-excerpt">{{ post.excerpt | strip_html | truncate:80 }}</p>
    {% endif %}
    <span class="read-more">View Profile →</span>
  </div>
</a>
{% endfor %}

</div>

<!-- ================= FOOTER ================= -->
<footer class="site-footer">
  <div class="footer-container">

    <div class="footer-section">
      <h4>About CharactersWiki</h4>
      <p>A community-driven encyclopedia for anime, manga, game, and movie characters. Discover abilities, backgrounds, and lore of your favorite heroes and villains.</p>
    </div>

    <div class="footer-section">
      <h4>Explore</h4>
      <ul>
        <li><a href="{{ '/' | relative_url }}">Home</a></li>
        <li><a href="{{ '/categories/' | relative_url }}">Categories</a></li>
        <li><a href="{{ '/tags/' | relative_url }}">Tags</a></li>
        <li><a href="{{ '/sitemap.xml' | relative_url }}">Sitemap</a></li>
      </ul>
    </div>

    <div class="footer-section">
      <h4>Popular Series</h4>
      <ul>
        <li><a href="{{ '/categories/#naruto' | relative_url }}">Naruto</a></li>
        <li><a href="{{ '/categories/#one-piece' | relative_url }}">One Piece</a></li>
        <li><a href="{{ '/categories/#attack-on-titan' | relative_url }}">Attack on Titan</a></li>
        <li><a href="{{ '/categories/#dragon-ball' | relative_url }}">Dragon Ball</a></li>
      </ul>
    </div>

    <div class="footer-section">
      <h4>Community</h4>
      <ul>
        <li><a href="{{ '/about/' | relative_url }}">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms</a></li>
      </ul>
    </div>

  </div>

  <div class="footer-bottom">
    © {{ site.time | date: "%Y" }} CharactersWiki — All Rights Reserved
  </div>
</footer>
