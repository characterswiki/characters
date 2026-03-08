---
layout: default
title: "Characters Wiki"
description: "Browse the complete database of anime and manga characters with detailed stats and lore."
---

# Welcome to Characters Wiki

Discover **anime, manga, game, and movie characters** in one place. Browse heroes, villains, and side characters with detailed profiles, abilities, and lore.

Use the **navigation menu** to explore by **Categories**, **Tags**, or **Popular Series**.

---

<!-- CHARACTER GRID -->
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
