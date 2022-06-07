---
layout: single
permalink: /teambuilding/
excerpt: Her har vi beskrevet alt om teambuilding.
title: "Teambuilding"
author_profile: true
classes: wide
---

{{ page.excerpt }}

Hvis du er på udkig efter praktiske øvelser, så har vi lavet en samlet oversigt over [teambuildingsøvelser og samarbejdsøvelser](/samarbejdsovelser/).

{% assign site_posts = site.posts | where: "category", "Teambuilding" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

{% comment %}
teambuilding 3,600
teambuilding aktiviteter 1,000
teambuilding øvelser 1,000
teambuilding københavn 720
teambuilding jylland 260
teambuilding vejle 170

{% endcomment %}
