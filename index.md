---
layout: default
title: Characters Wiki
---

# Latest Characters

<div class="post-grid">

{% for post in site.posts %}

<div class="card">

<a href="{{ post.url }}">

<h3>{{ post.title }}</h3>

<p>{{ post.excerpt | truncate:120 }}</p>

</a>

</div>

{% endfor %}

</div>
