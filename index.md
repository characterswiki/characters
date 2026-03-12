---
layout: default
title: Home
---

<section class="home">
  <header class="home__header container">
    <h1 class="home__title">{{ site.title }}</h1>
    <p class="home__description">{{ site.description }}</p>
  </header>

  <div class="posts-grid container">
    {% for post in site.posts %}
      <article class="post-card">
        {% if post.image %}
          <a href="{{ post.url | relative_url }}" class="post-card__image-link">
            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="post-card__image" loading="lazy">
          </a>
        {% endif %}
        <div class="post-card__content">
          <h2 class="post-card__title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h2>
          <div class="post-card__meta">
            <time datetime="{{ post.date | date_to_xmlschema }}">
              {{ post.date | date: "%B %d, %Y" }}
            </time>
          </div>
          {% if post.excerpt %}
            <p class="post-card__excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
          {% endif %}
          <div class="post-card__taxonomies">
            {% for category in post.categories limit:3 %}
              <a href="{{ '/categories/' | append: category | slugify | relative_url }}" class="tag category-tag">{{ category }}</a>
            {% endfor %}
          </div>
        </div>
      </article>
    {% endfor %}
  </div>
</section>
