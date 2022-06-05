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

{% assign site_posts = site.activity | where: "tags", "Samarbejdsøvelse" | sort: "date" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>

{% comment %}
teambuilding
3,600
kr38,77
49
29
teambuilding aktiviteter
1,000
kr31,66
64
21
teambuilding øvelser
1,000
kr17,37
55
29
teambuilding københavn
720
kr39,81
60
23
teambuilding jylland
260
kr28,51
13
24
teambuilding vejle
170
kr23,85
35
20
teambuilding øvelser i naturen
140
kr18,12
56
23






samarbejdsøvelser
880
kr15,12
35
31
samarbejdsøvelser børn
210
kr8,71
38
33
samarbejdsøvelser indskoling
90
kr16,34
16
35
samarbejdsøvelser voksne
70
kr10,23
63
19
samarbejdsøvelser mellemtrin
70
kr12,11
19
32
samarbejdsøvelser udskoling
50
kr8,42
36
28
samarbejdsøvelser med lego
40
kr6,52
57
29


https://goteam.dk/blog/gratis-teambuilding-ovelser


{% endcomment %}
