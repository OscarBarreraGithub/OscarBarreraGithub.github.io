---
layout: page
permalink: /publications/
title: publications

nav: true
nav_order: 2
---

<div class="publications-intro">
  <div class="publication-profile-links">
    {% if site.data.socials.scholar_userid %}
      <a
        class="publication-profile-link"
        href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}"
      >
        <i class="ai ai-google-scholar"></i>
        <span>Google Scholar</span>
      </a>
    {% endif %}
    {% if site.data.socials.inspirehep_id %}
      <a class="publication-profile-link" href="https://inspirehep.net/authors/{{ site.data.socials.inspirehep_id }}">
        <i class="ai ai-inspire"></i>
        <span>InspireHEP</span>
      </a>
    {% endif %}
  </div>
</div>

<div class="publications">
  {% bibliography %}
</div>
