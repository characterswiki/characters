---
layout: page
title: Categories
permalink: /categories/
---

<h1>All Categories</h1>

<div class="category-list">
  {% assign categories = site.categories | sort %}
  {% for category in categories %}
    <div class="category-group">
      <h2 id="{{ category[0] | slugify }}">{{ category[0] }}</h2>
      <ul class="post-list">
        {% for post in category[1] %}
          <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <small>{{ post.date | date: "%b %d, %Y" }}</small>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>
