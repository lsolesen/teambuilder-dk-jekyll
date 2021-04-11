---
layout: single
permalink: /samarbejdsovelser/
excerpt: Samarbejdsøvelser både til børn og voksne.
title: "Samarbejdsøvelser til børn og voksne"
author_profile: true
classes: wide
---

{{ page.excerpt }}

{% assign site_posts = site.activity | where: "tags", "Samarbejdsøvelse" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
