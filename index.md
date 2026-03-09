---
layout: default
title: Home
---

# Latest Character Profiles

Explore our growing database of fictional legends. Click on any character to view full details, power levels, and lore.

<!-- Character Grid -->
<div class="character-grid">
  {% for post in site.posts %}
  <div class="char-card">
    
    {% if post.image %}
    <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
    {% endif %}
    
    <h3>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h3>
    
    <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
    
    {% if post.categories %}
    <div class="char-meta">
      <span class="tag">Category: {{ post.categories | join: ", " }}</span>
    </div>
    {% endif %}
    
    <a href="{{ post.url | relative_url }}" class="read-more">Read More →</a>
    
  </div>
  {% endfor %}
</div>

<!-- Optional: Pagination -->
{% if paginator.total_pages > 1 %}
<div class="pagination">
  {% if paginator.previous_page %}
  <a href="{{ paginator.previous_page_path | relative_url }}">&laquo; Previous</a>
  {% endif %}
  
  <span>Page {{ paginator.page }} of {{ paginator.total_pages }}</span>
  
  {% if paginator.next_page %}
  <a href="{{ paginator.next_page_path | relative_url }}">Next &raquo;</a>
  {% endif %}
</div>
{% endif %}
