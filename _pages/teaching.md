---
layout: page
permalink: /teaching/
title: teaching
nav: true
nav_order: 4
---

<style>
  .teaching-summary {
    max-width: 42rem;
    margin: 0 auto 4.5rem;
  }

  .teaching-section-heading {
    margin-bottom: 0.9rem;
    text-align: center;
  }

  .teaching-track-title {
    margin: 0 0 1.35rem;
    text-align: center;
    font-size: 0.88rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--global-theme-color);
  }

  .teaching-track-list {
    display: grid;
    gap: 0.8rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .teaching-track-list li {
    display: grid;
    grid-template-columns: 8.5rem 1fr;
    gap: 1rem;
    align-items: center;
    padding: 0.35rem 0;
    text-align: left;
  }

  .teaching-track-term {
    font-weight: 700;
    color: var(--global-theme-color);
  }

  .teaching-track-role {
    color: var(--global-text-color);
  }

  .teaching-note {
    margin-bottom: 2.75rem;
  }

  .teaching-note + .teaching-note {
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .teaching-note-title {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .teaching-note-link {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    color: var(--global-text-color);
    text-decoration: none;
    transition:
      transform 0.18s ease,
      color 0.18s ease;
  }

  .teaching-note-link:hover {
    transform: translateY(-1px);
    color: var(--global-theme-color);
  }

  .teaching-note-link h3 {
    margin: 0;
    color: inherit;
  }

  .teaching-note-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.2rem;
    height: 2.2rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    color: var(--global-theme-color);
    transition:
      border-color 0.18s ease,
      background-color 0.18s ease;
  }

  .teaching-note-link:hover .teaching-note-icon {
    border-color: var(--global-theme-color);
    background-color: rgba(255, 255, 255, 0.04);
  }

  .teaching-note-link i {
    font-size: 1rem;
  }

  .teaching-quote-lead {
    margin-bottom: 0.65rem;
    color: var(--global-text-color);
  }

  .teaching-quote {
    margin: 0 0 1rem 0;
    padding: 0.95rem 1rem;
    border-left: 3px solid var(--global-theme-color);
    border-radius: 0 14px 14px 0;
    background: rgba(255, 255, 255, 0.03);
    font-size: 0.96rem;
    line-height: 1.65;
  }

  .teaching-quote p:last-child {
    margin-bottom: 0;
  }

  .teaching-notes-block {
    margin-top: 5rem;
    margin-bottom: 1.6rem;
  }

  @media (max-width: 640px) {
    .teaching-note-title {
      align-items: flex-start;
    }

    .teaching-summary {
      margin-bottom: 4rem;
    }

    .teaching-track-list li {
      grid-template-columns: 1fr;
      gap: 0.3rem;
      text-align: center;
    }
  }
</style>

<section class="teaching-summary">
  <h2 class="teaching-section-heading">Teaching Fellow</h2>
  <h3 class="teaching-track-title">Schwartz QFT</h3>

  <ul class="teaching-track-list">
    <li>
      <span class="teaching-track-term">Fall 2025</span>
      <span class="teaching-track-role">Quantum Field Theory I</span>
    </li>
    <li>
      <span class="teaching-track-term">Spring 2026</span>
      <span class="teaching-track-role">Quantum Field Theory II</span>
    </li>
  </ul>
</section>

<div class="teaching-notes-block">
  <h2 class="teaching-section-heading">Teaching Notes</h2>
</div>

<section class="teaching-note">
  <div class="teaching-note-title">
    <a
      class="teaching-note-link"
      href="{{ '/assets/pdf/contour-integration-notes.pdf' | relative_url }}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Contour Integration Notes PDF"
      title="Open PDF"
    >
      <h3>Contour Integration Notes:</h3>
      <span class="teaching-note-icon">
        <i class="fa-solid fa-file-pdf" aria-hidden="true"></i>
      </span>
    </a>
  </div>

  <p class="teaching-quote-lead">In Surely You’re Joking, Mr. Feynman!, Richard Feynman wrote:</p>

  <blockquote class="teaching-quote">
    <p>One time I boasted, "I can do by other methods any integral anybody else needs contour integration to do." So Paul [Olum] puts up this tremendous damn integral he had obtained by starting out with a complex function that he knew the answer to, taking out the real part of it and leaving only the complex part. He had unwrapped it so it was only possible by contour integration! He was always deflating me like that. He was a very smart fellow.</p>
  </blockquote>

  <p>In these lecture notes, I make the utility of contour integration concrete.</p>
</section>

<section class="teaching-note">
  <div class="teaching-note-title">
    <a
      class="teaching-note-link"
      href="{{ '/assets/pdf/qft-the-scenic-route.pdf' | relative_url }}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Quantum Field Theory The Scenic Route PDF"
      title="Open PDF"
    >
      <h3>Quantum Field Theory: The Scenic Route</h3>
      <span class="teaching-note-icon">
        <i class="fa-solid fa-file-pdf" aria-hidden="true"></i>
      </span>
    </a>
  </div>

  <p>It’s hard to appreciate a really elaborate joke the first time you hear it. You might catch the punchline, but only after you know where it’s going do all the little details in the setup start to make sense. I think learning theoretical physics is a lot like that. Once you’ve seen the big picture, the rigor and formalism start to feel more natural, and you can enjoy how all the pieces build toward it.</p>

  <p>These notes are meant as a tour through some of the most beautiful ideas in modern theoretical physics and the math that ties them all together. They’re written for someone who’s already met quantum mechanics and a bit of field theory, but I don’t assume you remember all the details. Whenever possible, I try to reintroduce key ideas from scratch, with enough context to make them feel familiar again.</p>
</section>
