---
layout: page
title: Character Tags
permalink: /tags/
description: Browse characters by tags including Hokage, Ninja, Pirate, Demon Slayer and more.
---

## Browse by Tags

{% for tag in site.tags %}
### {{ tag[0] }}
<ul>
{% for post in tag[1] %}
<li>
<a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
</li>
{% endfor %}
</ul>
{% endfor %}
