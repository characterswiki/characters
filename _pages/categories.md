---
layout: page
title: Anime Categories
permalink: /categories/
description: Browse anime and manga characters by series category including Naruto, One Piece, Bleach, Dragon Ball, Attack on Titan and more. Explore detailed character profiles, powers, story arcs, and affiliations.
---

# 🎌 Browse Anime & Manga Characters by Series

Discover detailed profiles of anime and manga characters organized by series. Click on a character to view full biographies, powers, affiliations, story arcs, and transformations.

{% for category in site.categories %}
## {{ category[0] }}

<ul>
  {% for post in category[1] %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>

{% endfor %}

---

## 🔍 Why Browse by Series?

Organizing characters by their series allows fans to:

- Quickly find favorite characters  
- Explore story arcs and transformations in context  
- Compare abilities and affiliations within the same universe  
- Access comprehensive character information efficiently
