---
layout: single
title: "Curriculum Vitae"
permalink: /cv/
author_profile: false
classes: wide
---

<style>
/* Make the H1 itself the link and keep it styled like a title */
.page__title a { color: inherit; text-decoration: none; }
.page__title a:hover { text-decoration: underline; }
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var h1 = document.querySelector('.page__title');
  if (!h1) return;
  if (!h1.querySelector('a')) {
    var a = document.createElement('a');
    a.href = '{{ "/CV.pdf" | relative_url }}';   // change if your filename differs
    a.target = '_blank';
    a.rel = 'noopener';
    a.textContent = h1.textContent.trim();
    h1.textContent = '';
    h1.appendChild(a);
  }
  // If fallback exists, remove it (since JS worked)
  var fb = document.getElementById('cv-fallback');
  if (fb) fb.remove();
});
</script>

<!-- This link only shows if JS is disabled -->
<noscript>
  <p id="cv-fallback"><a href="{{ "/CV.pdf" | relative_url }}" target="_blank" rel="noopener">Open CV (PDF)</a></p>
</noscript>
