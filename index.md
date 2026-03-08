---
layout: default
title: "Characters Wiki"
description: "Explore the complete database of anime, manga, game, and movie characters with stats and lore."
---

<!-- INTRO -->
<section style="max-width:1200px;margin:30px auto;padding:0 20px;text-align:center;">
  <h1>Welcome to CharactersWiki</h1>
  <p>Discover legendary heroes, villains, and side characters from anime, manga, games, and movies. Use the grid below to browse, or explore by <a href="{{ '/characters/categories/' | relative_url }}">categories</a> and <a href="{{ '/characters/tags/' | relative_url }}">tags</a>.</p>
</section>

<!-- CHARACTER GRID -->
<section class="character-grid">

{% assign posts = site.posts | sort: "title" %}

{% for post in posts %}
<a href="{{ post.url | relative_url }}" class="character-card" aria-label="View profile of {{ post.title }}">

  <div class="card-img-wrapper">
    {% if post.image %}
      {% assign img = post.image | remove_first:'/' %}
      <img src="{{ img | relative_url }}" alt="{{ post.title }} character image" loading="lazy" decoding="async" width="400" height="500" onerror="this.src='{{ '/characters/assets/images/placeholder.jpg' | relative_url }}';">
    {% else %}
      <img src="{{ '/characters/assets/images/placeholder.jpg' | relative_url }}" alt="No image available" loading="lazy" width="400" height="500">
    {% endif %}

    {% if post.categories and post.categories.size > 0 %}
      <span class="card-category">
        <a href="{{ '/characters/categories/#' | append: post.categories | first | slugify | relative_url }}" style="color:white;">{{ post.categories | first }}</a>
      </span>
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

</section>

<!-- OPTIONAL: POPULAR CATEGORIES -->
<section style="max-width:1200px;margin:50px auto;padding:0 20px;">
<h2>Popular Categories</h2>
<div style="display:flex;flex-wrap:wrap;gap:10px;">
{% assign sorted_cats = site.categories | sort %}
{% for category in sorted_cats limit:8 %}
  <a href="{{ '/characters/categories/#' | append: category[0] | slugify | relative_url }}" style="background:#ff4757;color:white;padding:6px 12px;border-radius:8px;font-size:14px;">{{ category[0] }} ({{ category[1].size }})</a>
{% endfor %}
</div>
</section>

<!-- OPTIONAL: POPULAR TAGS -->
<section style="max-width:1200px;margin:50px auto;padding:0 20px;">
<h2>Popular Tags</h2>
<div style="display:flex;flex-wrap:wrap;gap:8px;">
{% assign sorted_tags = site.tags | sort %}
{% for tag in sorted_tags limit:15 %}
  <a href="{{ '/characters/tags/#' | append: tag[0] | slugify | relative_url }}" style="background:#1f2937;color:white;padding:5px 10px;border-radius:6px;font-size:13px;">#{{ tag[0] }}</a>
{% endfor %}
</div>
</section>
