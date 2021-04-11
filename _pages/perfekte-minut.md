---
layout: single
permalink: /perfekte-minut/
excerpt: Udfordringer som kan bruges til det perfekte minut. Lige til at klippe ud.
taxonomy: Det perfekte minut
title: "Det perfekte minut"
author_profile: true
classes: wide
---

{{ page.excerpt }}

{% assign site_posts = site.activity | where: "tags", "Det perfekte minut" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
