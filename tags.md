---
layout: page
title: Tags
permalink: /tags/
---

<h1>All Tags</h1>

<div class="tag-cloud">
  {% assign tags = site.tags | sort %}
  {% for tag in tags %}
    <span class="tag-item">
      <a href="#{{ tag[0] | slugify }}" class="tag-link">#{{ tag[0] }}</a>
      <sup>{{ tag[1].size }}</sup>
    </span>
  {% endfor %}
</div>

<div class="tag-posts">
  {% for tag in tags %}
    <div class="tag-group">
      <h2 id="{{ tag[0] | slugify }}">#{{ tag[0] }}</h2>
      <ul class="post-list">
        {% for post in tag[1] %}
          <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <small>{{ post.date | date: "%b %d, %Y" }}</small>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>
