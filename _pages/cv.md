---
layout: single
title: "Curriculum Vitae"
permalink: /cv/
author_profile: false   # hide sidebar
classes: wide           # full-width content (optional)
---

<!-- Make the H1 title clickable to the PDF -->
<script>
document.addEventListener('DOMContentLoaded', function () {
  var h1 = document.querySelector('.page__title');
  if (h1 && !h1.querySelector('a')) {
    var a = document.createElement('a');
    a.href = '{{ "/CV.pdf" | relative_url }}';   // <-- change if your filename/path differs
    a.target = '_blank';
    a.rel = 'noopener';
    a.textContent = h1.textContent.trim();
    h1.textContent = '';
    h1.appendChild(a);
  }
});
</script>

<p><a href="{{ "/CV.pdf" | relative_url }}" target="_blank" rel="noopener">
  Click here if the title link doesn’t work.
</a></p>
