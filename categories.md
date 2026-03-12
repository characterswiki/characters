---
layout: page
title: Categories
permalink: /categories/
---

<h2>Browse by Category</h2>

<ul>

{% for category in site.categories %}

<li>

<a href="/categories/{{ category[0] }}/">

{{ category[0] }} ({{ category[1].size }})

</a>

</li>

{% endfor %}

</ul>
