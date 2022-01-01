---
title: "Værktøjer til projektledelse"
language: da
categories:
  - Projektledelse
tags:
  - projektplanlægning
last_modified_at: 2020-01-23T20:50:27Z
feature_row:
  - image_path: https://imgcdn.saxo.com/_9788771580051/0x500
    alt: "Teamwork - metoder til effektivt samarbejde af Michael A. West"
    title: "Teamwork - metoder til effektivt samarbejde af Michael A. West"
    excerpt: "_Teamwork_ har fokus på effektivitet og kreativitet og er for alle, der på den ene eller anden måde bruger teamwork i deres dagligdag. Bogen er fyldt med praktiske eksempler og teori, der kan hjælpe et team med at opstille mål og opnå dem."
    url: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=43264&htmlurl=https://www.saxo.com/dk/teamwork_michael-a-west_haeftet_9788771580051"
    btn_label: "Læs mere"
    btn_class: "btn--success"
    rel: sponsored nofollow noopener
  - image_path: https://imgcdn.saxo.com/_9788777064487/0x500
    alt: "Team - udvikling og læring"
    title: "Team - udvikling og læring"
    excerpt: "At arbejde i team er organisationers forsøg på at styrke udvikling af faglige og personlige potentialer og kompetencer. Bogens formål er at give svar på, hvordan udvikling og læring i team kan blive en succes, fx om sporten er en passende metafor til at fremme teamudvikling og læring og forståelse af samarbejde samt om team på arbejdspladsen kan skabe nye fortællinger om medarbejdernes måde at se på samarbejde og gensidig udvikling."
    url: "https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=43264&htmlurl=https://www.saxo.com/dk/team-udvikling-og-laering_morten-bertelsen-red-reinhard-stelter-red_haeftet_9788777064487"
    btn_label: "Læs mere"
    btn_class: "btn--success"
    rel: sponsored nofollow noopener
---

Opstart, planlægning, gennemførsel og evaluering. Projektlederuddannelsen giver dig både redskaber til at lave projekter i samarbejde med andre og redskaber til at navigere mere sikkert gennem dine egne projekter i livet.

## Stærke værktøjer

Det er ikke bare værktøjer, der gør dig i stand til at skabe projekter for andre. Det er også værktøjer, der gør det nemmere at arbejde sammen med andre og angribe skoleopgaver på en helt ny måde. Du får et større overblik og kan overskue mere. Du lærer at møde forskelligheder i projektgrupper, og bliver god til at få andre til at sparke bolden i den rigtige retning – imod målet.

Vi arbejder både teoretisk og praktisk, så du både får hovedet og hænderne i reelle projekter.

Du vil få svar på

- Hvad er projektledelse?
- Hvordan styrer jeg store projekter fra start til slut?
- Hvordan vælger jeg den rigtige projektstyringsmodel?
- Hvad skal jeg have i min værktøjskasse for at lykkes med mine projekter?
- Hvilke muligheder har jeg, og hvad skal jeg være opmærksom på i de forskellige faser af et projekt?
- Hvordan sikrer jeg, at det faktisk sker, og at jeg når alt det, jeg vil?
- Hvordan sammensætter jeg en god projektgruppe, og hvordan udvikler jeg den, så vi bliver endnu bedre?
- Hvordan motiverer jeg og får andre med på den gode ide?

## Værktøjer

{% assign date_from = '2022-01-01' | date: '%s' %}
{% assign date_to = '2022-01-31' | date: '%s' %}

{% assign site_posts = site.posts | where: "categories", "Projektledelse" | where_exp: "post", "post.url != page.url" | sort: "last_modified_at" | reverse %}

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
