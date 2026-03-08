---
layout: default
title: "Categories"
permalink: /categories/
---

<!-- HEADER is included via default layout -->

# Character Categories

<!-- CATEGORY LIST -->
<ul style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-bottom:40px;">
{% assign sorted_cats = site.categories | sort %}
{% for category in sorted_cats %}
<li>
  <a href="{{ '/characters/categories/#' | append: category[0] | slugify | relative_url }}" 
     style="background:#ff4757;color:white;padding:6px 12px;border-radius:8px;text-decoration:none;font-weight:600;">
    {{ category[0] }} ({{ category[1].size }})
  </a>
</li>
{% endfor %}
</ul>

<!-- CHARACTERS GRID -->
<div class="character-grid">
{% for post in site.posts %}
{% if post.categories %}
  {% for cat in post.categories %}
    {% if cat == page.category or page.category == nil %}
    <a href="{{ post.url | relative_url }}" class="character-card" aria-label="View profile of {{ post.title }}">
      <div class="card-img-wrapper">
        {% if post.image %}
        <img src="{{ post.image | remove_first:'/' | relative_url }}" alt="{{ post.title }}" loading="lazy" decoding="async">
        {% else %}
        <img src="{{ '/characters/assets/images/placeholder.jpg' | relative_url }}" alt="No image available" loading="lazy">
        {% endif %}
        <span class="card-category">{{ post.categories | first }}</span>
      </div>
      <div class="card-info">
        <h3 class="card-title">{{ post.title }}</h3>
        {% if post.excerpt %}
        <p class="card-excerpt">{{ post.excerpt | strip_html | truncate:80 }}</p>
        {% endif %}
        <span class="read-more">View Profile →</span>
      </div>
    </a>
    {% endif %}
  {% endfor %}
{% endif %}
{% endfor %}
</div>
