---
layout: page
title: Anime Categories
permalink: /categories/
description: Browse anime and manga characters by series category including Naruto, One Piece, Bleach and more.
---

## Browse by Anime Series

{% for category in site.categories %}
### {{ category[0] }}
<ul>
{% for post in category[1] %}
<li>
<a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
</li>
{% endfor %}
</ul>
{% endfor %}
