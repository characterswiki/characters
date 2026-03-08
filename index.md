---
layout: default
title: Home
---

<div class="hero">
  <h1>Welcome to Characters Wiki</h1>
  <p>Explore amazing characters from anime, games, and comics!</p>
</div>

<div class="content-wrapper">
  <main class="main-content">
    <h2>Latest Characters</h2>
    <div class="card-grid">
      {% for post in site.posts limit:12 %}
        <article class="post-card">
          <a href="{{ post.url | relative_url }}">
            {% if post.image %}
              <img src="{{ post.image }}" alt="{{ post.title }}" loading="lazy">
            {% else %}
              <img src="https://via.placeholder.com/300x200?text=Anime" alt="Placeholder">
            {% endif %}
            <div class="card-content">
              <h3>{{ post.title }}</h3>
              <p class="post-meta">
                {% for category in post.categories limit:1 %}
                  <span class="category">{{ category }}</span>
                {% endfor %}
                <span class="date">{{ post.date | date: "%b %d, %Y" }}</span>
              </p>
              <p class="excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
            </div>
          </a>
        </article>
      {% endfor %}
    </div>
  </main>
  
  {% include sidebar.html %}
</div>
