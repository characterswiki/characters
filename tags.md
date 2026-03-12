---
layout: page
title: Tags
permalink: /tags/
---

<h2>Browse by Tags</h2>

<ul>

{% for tag in site.tags %}

<li>

<a href="/tags/{{ tag[0] }}/">

{{ tag[0] }} ({{ tag[1].size }})

</a>

</li>

{% endfor %}

</ul>
