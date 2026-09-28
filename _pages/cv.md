---
layout: page
title: "Curriculum Vitae"
permalink: /cv/
description: "Curriculum vitae of Ali Isse (Mehdi), Ph.D. candidate in Security Studies & International Relations at Princeton University's School of Public and International Affairs."
---
{%- assign profile = site.data.profile -%}
<p class="cv-actions">
  <a class="button" href="{{ profile.cv | relative_url }}">{% include site/icon.html name="download" %}Download CV <span class="button__note">(PDF)</span></a>
</p>

{%- comment -%} Summary of the CV (cv.pdf), which is the authoritative source. {%- endcomment %}
<section class="cv-glance" aria-labelledby="glance-heading">
  <h2 id="glance-heading">At a glance</h2>

  <h3 class="section-label">Education</h3>
  <ul class="entry-list">
    <li class="entry"><span class="entry__year">2027</span><div class="entry__body"><p>Ph.D., Public &amp; International Affairs — Security Studies &amp; International Relations, Princeton University</p></div></li>
    <li class="entry"><span class="entry__year">2024</span><div class="entry__body"><p>M.A., Public Affairs, Princeton University</p></div></li>
    <li class="entry"><span class="entry__year">2021</span><div class="entry__body"><p>M.A., Social Science — Political Science &amp; International Relations, The University of Chicago</p></div></li>
    <li class="entry"><span class="entry__year">2018</span><div class="entry__body"><p>M.S., City &amp; Regional Planning; Minor in Public Policy &amp; Management, The Ohio State University</p></div></li>
    <li class="entry"><span class="entry__year">2015</span><div class="entry__body"><p>B.A., Political Science; Minor in Global Affairs, The University of Texas at San Antonio</p></div></li>
  </ul>

  <h3 class="section-label">Dissertation</h3>
  <p class="cv-dissertation"><em>{{ site.data.research.dissertation.title }}</em></p>
  <p>Committee: Christopher Chyba (chair), G. John Ikenberry, Kristopher Ramsay</p>

  <h3 class="section-label">Selected fellowships &amp; awards</h3>
  <ul class="entry-list">
    <li class="entry"><span class="entry__year">2025</span><div class="entry__body"><p>Resident Fellow, Nuclear Security Program, MacMillan Center for International and Area Studies at Yale (AY 2025–2026)</p></div></li>
    <li class="entry"><span class="entry__year">2025</span><div class="entry__body"><p>IvyPlus Exchange Scholar Fellow, Department of Political Science, Yale (AY 2025–2026)</p></div></li>
    <li class="entry"><span class="entry__year">2022</span><div class="entry__body"><p>Center for International Security Studies (CISS) Graduate Fellow, Princeton University (2022–2025)</p></div></li>
    <li class="entry"><span class="entry__year">2022</span><div class="entry__body"><p>President’s Fellowship Award, Princeton University (2022–2024)</p></div></li>
    <li class="entry"><span class="entry__year">2021</span><div class="entry__body"><p>Maroon Scholar Research Award, The University of Chicago (2020–2021)</p></div></li>
  </ul>
  <p class="cv-more">The full CV lists all fellowships, grants, presentations and service.</p>
</section>

<div class="cv-embed" aria-hidden="true">
  <object data="{{ profile.cv | relative_url }}#view=FitH" type="application/pdf" tabindex="-1">
    <p>Your browser cannot display the PDF here. <a href="{{ profile.cv | relative_url }}">Open the CV (PDF)</a>.</p>
  </object>
</div>
