---
layout: home
title: Character Database
description: "Browse the complete database of anime and manga characters with detailed stats and lore."
---

<!-- ========================
     Home Intro Section
======================== -->
<section class="home-intro">
  <h1>Character Archive</h1>
  <p>Welcome to the <strong>Characters Wiki</strong>, your ultimate source for anime and manga character profiles. Explore our growing collection of legendary heroes, villains, and side characters.</p>
  <p>Use the sidebar to filter by series, category, or origin, or browse the cards below to discover detailed stats, powers, and lore for each character.</p>
</section>

<!-- ========================
     Character Cards Grid
======================== -->
<section class="card-grid">
  {% for post in site.posts %}
  <a href="{{ post.url | relative_url }}" class="character-card" aria-label="View profile of {{ post.title }}">
    <div class="card-img-wrapper">
      <img src="{{ post.fandom_url }}" alt="{{ post.title }} image" loading="lazy" decoding="async">
    </div>
    <div class="card-info">
      {% if post.categories.size > 0 %}
      <span class="card-category">{{ post.categories | first }}</span>
      {% endif %}
      <h2 class="card-title">{{ post.title }}</h2>
    </div>
  </a>
  {% endfor %}
</section>

<!-- ========================
     Pagination (Optional)
======================== -->
{% if paginator.total_pages > 1 %}
<nav class="pagination" role="navigation" aria-label="Pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}" class="prev">&larr; Previous</a>
  {% endif %}
  {% for page in (1..paginator.total_pages) %}
    <a href="{{ paginator.paginate_path | replace: ':num', page }}" class="{% if page == paginator.page %}active{% endif %}">{{ page }}</a>
  {% endfor %}
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}" class="next">Next &rarr;</a>
  {% endif %}
</nav>
{% endif %}
