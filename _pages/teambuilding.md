---
layout: single
permalink: /teambuilding/
excerpt: "Skal du i gang med teambuilding? Vi har lavet en komplet guide til, hvordan du kan gribe teambuilding an (BONUS: gratis ideer til teambuilding)."
title: "Teambuilding"
seo_title: "Teambuilding - 50+ sjove ideer til lærerige aktiviteter"
author_profile: true
classes: wide
---

{{ page.excerpt }}

## Samarbejdsøvelser og teambuildingsøvelser

Hvis du skal lave et arrangement, hvor du gerne vil få dit team til at lære hinanden at kende, så kan du med fordel kigge efter nogle samarbejdsøvelser og teambuildingsøvelser.

Hvis du er på udkig efter praktiske øvelser, så har vi lavet en samlet oversigt over [teambuildingsøvelser og samarbejdsøvelser](/samarbejdsovelser/).

## Artikler om teambuilding

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
