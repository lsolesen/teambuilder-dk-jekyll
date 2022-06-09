---
layout: single
permalink: /samarbejdsovelser/
excerpt: Samarbejdsøvelser både til børn og voksne.
title: "Samarbejdsøvelser til børn og voksne"
author_profile: true
classes: wide
---

{{ page.excerpt }}

Vi har samlet alle vores mere generelle information om at samarbejde og bygge hold på vores side om [teambuilding](/teambuilding/).

{% assign site_posts = site.activity | where: "categories", "Samarbejdsøvelser" | sort: "date" %}

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
teambuilding øvelser i naturen

samarbejdsøvelser 880
samarbejdsøvelser børn 210
samarbejdsøvelser indskoling 90
samarbejdsøvelser voksne 70
samarbejdsøvelser mellemtrin 70
samarbejdsøvelser udskoling 50
samarbejdsøvelser med lego 40


https://goteam.dk/blog/gratis-teambuilding-ovelser


{% endcomment %}
