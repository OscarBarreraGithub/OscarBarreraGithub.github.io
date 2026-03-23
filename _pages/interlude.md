---
layout: page
permalink: /interlude/
title: interlude
description: proof I've left the house
nav: true
nav_order: 3
---

<style>
  .interlude-shell {
    position: relative;
  }

  .interlude-log {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .interlude-lead {
    padding-right: min(410px, 44vw);
  }

  .interlude-photo {
    position: absolute;
    top: -7.85rem;
    right: 0;
    width: min(368px, 40vw);
    aspect-ratio: 16 / 9;
    margin: 0;
    padding: 0.45rem;
    overflow: hidden;
    border: 1px solid var(--global-divider-color);
    border-radius: 22px;
    background: var(--global-card-bg-color);
    box-shadow: 0 18px 42px rgba(0, 0, 0, 0.16);
  }

  .interlude-photo img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 16px;
  }

  .interlude-entry {
    padding: 1rem 0 1.15rem;
    border-top: 1px solid var(--global-divider-color);
  }

  .interlude-entry-lead {
    padding-top: 2.4rem;
    border-top: 0;
  }

  .interlude-date {
    display: block;
    margin-bottom: 0.35rem;
    color: var(--global-text-color-light);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .interlude-shows {
    margin: 0;
    font-size: clamp(1.28rem, 2.8vw, 1.6rem);
    line-height: 1.45;
  }

  .interlude-group-title {
    margin: 0 0 0.75rem;
    font-size: clamp(1.45rem, 3.4vw, 1.95rem);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.03em;
  }

  .interlude-group-list {
    margin: 0;
    padding: 0 12%;
    list-style: none;
    display: grid;
    box-sizing: border-box;
    width: 100%;
    max-width: 72rem;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: repeat(2, minmax(13rem, max-content));
    column-gap: clamp(11.7rem, 23.4vw, 18rem);
    justify-content: center;
    row-gap: 0.32rem;
    font-size: clamp(1.12rem, 2.4vw, 1.32rem);
    line-height: 1.55;
  }

  .interlude-entry-grouped .interlude-date {
    margin-bottom: 0.5rem;
  }

  .interlude-entry-grouped .interlude-group-title {
    text-align: center;
  }

  .interlude-entry-grouped .interlude-group-list {
    text-align: left;
  }

  .interlude-group-list li {
    white-space: nowrap;
  }

  .interlude-group-list li:nth-child(even) {
    justify-self: end;
    text-align: right;
  }

  @media (max-width: 720px) {
    .interlude-lead {
      padding-right: 0;
    }

    .interlude-photo {
      position: static;
      width: min(100%, 340px);
      margin: 0 auto 1.25rem;
    }

    .interlude-entry {
      padding: 0.9rem 0 1rem;
    }

    .interlude-shows {
      font-size: 1.18rem;
    }

    .interlude-group-list {
      grid-template-columns: 1fr;
      padding: 0;
      column-gap: 0;
    }
  }
</style>

{% assign first_year = site.data.interlude.years | first %}
{% assign first_month = first_year.months | first %}

<div class="interlude-shell">
  <figure class="interlude-photo">
    <img
      src="{{ '/assets/img/interlude-rockville-crowd.jpg' | relative_url }}"
      alt="Crowd at Rockville Music Festival"
      loading="eager"
      decoding="async"
    >
  </figure>

  <div class="interlude-lead">
    <div class="interlude-entry interlude-entry-lead">
      <span class="interlude-date">{{ first_month.name }} {{ first_year.year }}</span>
      <p class="interlude-shows">
        {% for show in first_month.shows %}
          {{ show }}{% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </p>
    </div>
  </div>

  <ul class="interlude-log" aria-label="Bands seen live">
    {% for year in site.data.interlude.years %}
      {% for month in year.months %}
        {% unless forloop.parentloop.first and forloop.first %}
          <li class="interlude-entry{% if month.section_title %} interlude-entry-grouped{% endif %}">
            <span class="interlude-date">{{ month.name }} {{ year.year }}</span>
            {% if month.section_title %}
              <p class="interlude-group-title">{{ month.section_title }}</p>
              <ol class="interlude-group-list">
                {% for show in month.shows %}
                  <li>{{ show }}</li>
                {% endfor %}
              </ol>
            {% else %}
              <p class="interlude-shows">
                {% for show in month.shows %}
                  {{ show }}{% unless forloop.last %}, {% endunless %}
                {% endfor %}
              </p>
            {% endif %}
          </li>
        {% endunless %}
      {% endfor %}
    {% endfor %}
  </ul>
</div>
