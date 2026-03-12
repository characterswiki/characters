---
layout: page
title: All Characters
permalink: /archive/
---

<div class="archive-list">
  {% for post in site.posts %}
    <article class="archive-item">
      <a href="{{ post.url | relative_url }}">
        <h3>{{ post.title }}</h3>
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
      </a>
    </article>
  {% endfor %}
</div>
