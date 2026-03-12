---
layout: default
title: Categories
permalink: /categories/
---

<h1>All Categories</h1>
<p>Browse all character categories:</p>

<div class="category-grid">
  {% for category in site.categories %}
  <a href="/categories/{{ category[0] }}/" class="category-card">
    <h3>{{ category[0] }}</h3>
    <span>{{ category[1].size }} characters</span>
  </a>
  {% endfor %}
</div>
