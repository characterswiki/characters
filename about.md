---
layout: page
title: About
permalink: /about/
---

Welcome to your ultimate anime character database! We cover characters from:

{% for category in site.categories %}
- {{ category[0] }} ({{ category[1].size }} characters)
{% endfor %}

This wiki is maintained by fans, for fans. Every character page includes:
- Detailed analysis
- Anime/manga origins
- Personality traits
- Relationships
- Fun facts
