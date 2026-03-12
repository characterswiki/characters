---
layout: page
title: Categories
permalink: /categories/
---

<ul class="category-list">
  {% for category in site.categories %}
    <li>
      <a href="{{ '/categories/' | append: category[0] | slugify | relative_url }}">
        {{ category[0] }} <span>({{ category[1] | size }})</span>
      </a>
    </li>
  {% endfor %}
</ul>
