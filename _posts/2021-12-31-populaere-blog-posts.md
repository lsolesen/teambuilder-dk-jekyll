---
title: &title "De mest populære blog posts 2021"
permalink: /populaere-blog-posts/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1508780709619-79562169bc64?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=5
  teaser: https://images.unsplash.com/photo-1508780709619-79562169bc64?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=5
  caption: *title
category:
  - Om
tags:
  - webclips
last_modified_at: 2021-12-31T16:18:40Z
popular_posts_2021:
  - /samarbejdsovelser/
  - /perfekte-minut/
  - /aktivitet/spaghettitrnet/
  - /aktivitet/196/
  - /aktivitet/197/
  - /aktivitet/220/
  - /aktivitet/225/
  - /aktivitet/238/
  - /aktiviteter/
  - /projektanalyse/
---

Vi har kigget lidt på statistikken over hvilke artikler der har været de mest læste i 2021. Her er de mest læste artikler og samarbejdsøvelser. Nogle af artiklerne er lidt overraskende.

Der er kommet lidt liv i Teambuilder.dk igen. Vi er get i gang med at skrive nye blog posts og har opdateret gamle blog posts.

Her samler vi op på de mest populære blog posts i løbet af 2021. Der er nogle ældre blog posts på {{ page.popular_posts_2021.size }} listen, men der er også nogle nye der har sneget sig ind på listen over populære blog posts.

Tak til alle dem, der læser med, hvad vil I så gerne læse mere om i fremtiden?

## De {{ page.popular_posts_2021.size }} mest populære blog posts i løbet af 2020

{% for permalink in page.popular_posts_2021 %}

    {% assign site_posts = site.posts | where: "url", permalink %}
    {% assign site_pages = site.pages | where: "permalink", permalink %}
    {% assign site_activity = site.activity | where: "url", permalink %}
    {% assign site_posts = site_posts | concat: site_pages | concat: site_activity %}

    {% if site_posts.size > 0 %}
        {% for post in site_posts %}
            {% include archive-single.html %}
        {% endfor %}
    {% endif %}

{% endfor %}

## Blog posts skrevet i 2019-2021

{% assign date_from = '2019-01-01' | date: '%s' %}
{% assign date_to = '2021-12-31' | date: '%s' %}

{% assign site_posts = site.posts | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" %}

<div class="feature__wrapper">

{% if site_posts.size > 0 %}
  {% for post in site_posts %}
    {% capture current_year %}{{ post.date | date: "%Y" }}{% endcapture %}
    {% if current_year == '2022' %}
      {% include archive-single.html %}
    {% endif %}
  {% endfor %}
{% endif %}

</div>
