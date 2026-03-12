---
layout: default
title: Home
---

<section class="hero">

<h1>{{ site.title }}</h1>

<p>{{ site.description }}</p>

<input id="searchInput" placeholder="Search characters...">

</section>

<section class="characters">

<h2>Latest Characters</h2>

<div class="grid">

{% for post in site.posts limit:12 %}

<a href="{{ post.url | relative_url }}" class="card">

<img
src="{{ post.image | default: '/assets/images/default-character.jpg' | relative_url }}"
alt="{{ post.title }}"
loading="lazy">

<div class="card-content">

<h3>{{ post.title }}</h3>

<p>{{ post.categories | join: ", " }}</p>

</div>

</a>

{% endfor %}

</div>

</section>

<section class="categories">

<h2>Categories</h2>

<div class="category-grid">

{% for category in site.categories %}

<a href="/categories/{{ category[0] }}/" class="category-card">

<h3>{{ category[0] }}</h3>

<span>{{ category[1].size }} characters</span>

</a>

{% endfor %}

</div>

</section>
