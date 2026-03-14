---
layout: page
permalink: /interlude/
title: interlude
description: proof I've left the house
nav: true
nav_order: 3
---

<style>
  .interlude-ledger {
    display: grid;
    gap: 1.5rem;
  }

  .year-card {
    position: relative;
    overflow: hidden;
    padding: 1.5rem 1.75rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 24px;
    background:
      radial-gradient(circle at top left, rgba(0, 212, 255, 0.12), transparent 32%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.025) 0%, rgba(255, 255, 255, 0.01) 100%),
      var(--global-card-bg-color);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18);
  }

  .year-card::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 1px;
    background: linear-gradient(90deg, var(--global-theme-color), transparent 70%);
  }

  .year-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .year-kicker {
    margin: 0 0 0.25rem 0;
    color: var(--global-text-color-light);
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .year-header h2 {
    margin: 0;
    font-size: clamp(2.4rem, 5vw, 3.5rem);
    line-height: 0.95;
    letter-spacing: -0.05em;
  }

  .year-count {
    margin: 0;
    color: var(--global-text-color-light);
    font-size: 0.88rem;
    white-space: nowrap;
  }

  .month-list {
    display: grid;
    gap: 0.9rem;
  }

  .month-block {
    display: grid;
    grid-template-columns: 140px 1fr;
    gap: 1rem;
    align-items: start;
    padding: 0.35rem 0;
  }

  .month-name {
    margin: 0;
    padding-top: 0.45rem;
    color: var(--global-theme-color);
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .show-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
  }

  .show-pill {
    display: inline-flex;
    align-items: center;
    min-height: 2.5rem;
    padding: 0.55rem 0.95rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.035);
    color: var(--global-text-color);
    font-weight: 600;
    line-height: 1.2;
  }

  @media (max-width: 720px) {
    .year-card {
      padding: 1.25rem;
      border-radius: 20px;
    }

    .year-header {
      align-items: start;
      flex-direction: column;
    }

    .month-block {
      grid-template-columns: 1fr;
      gap: 0.55rem;
    }

    .month-name {
      padding-top: 0;
    }
  }
</style>

<div class="interlude-ledger">
  {% for year in site.data.interlude.years %}
    {% assign total_shows = 0 %}
    {% for month in year.months %}
      {% assign total_shows = total_shows | plus: month.shows.size %}
    {% endfor %}

    <section class="year-card">
      <div class="year-header">
        <div>
          <p class="year-kicker">Concert Log</p>
          <h2>{{ year.year }}</h2>
        </div>
        <p class="year-count">{{ total_shows }} show{% if total_shows > 1 %}s{% endif %}</p>
      </div>

      <div class="month-list">
        {% for month in year.months %}
          <div class="month-block">
            <p class="month-name">{{ month.name }}</p>
            <div class="show-cloud">
              {% for show in month.shows %}
                <span class="show-pill">{{ show }}</span>
              {% endfor %}
            </div>
          </div>
        {% endfor %}
      </div>
    </section>

{% endfor %}

</div>
