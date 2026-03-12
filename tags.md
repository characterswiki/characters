---
layout: default
title: Tags
permalink: /tags/
---

<h1>All Tags</h1>
<p>Browse all character tags:</p>

<div class="tags">
  {% for tag in site.tags %}
  <a href="/tags/{{ tag[0] }}/" class="tag">{{ tag[0] }}</a>
  {% endfor %}
</div>
