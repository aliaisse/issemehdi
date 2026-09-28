---
layout: page
title: "Curriculum Vitae"
permalink: /cv/
description: "Curriculum vitae of Ali Isse (Mehdi), Ph.D. candidate in Security Studies at Princeton University's School of Public and International Affairs."
---
{%- assign profile = site.data.profile -%}
<p class="cv-actions">
  <a class="button" href="{{ profile.cv | relative_url }}">{% include site/icon.html name="download" %}Download CV <span class="button__note">(PDF)</span></a>
</p>

<section class="cv-glance" aria-labelledby="glance-heading">
  <h2 id="glance-heading">At a glance</h2>
  <dl class="glance-list">
    <dt>Current</dt>
    <dd>Ph.D. candidate in Security Studies, School of Public and International Affairs, Princeton University</dd>
    <dd>Nuclear Security Program Resident Fellow, MacMillan Center, Yale University (2025–2026)</dd>
    <dd>Fellow, Center for International Security Studies, Princeton University</dd>
    <dt>Education</dt>
    <dd>M.A. in Public Affairs, Princeton University</dd>
    <dd>M.A. in Political Science, University of Chicago (Maroon Scholar Research Award)</dd>
    <dd>Advanced coursework in international law (the use of force and the law of armed conflict), University of Cambridge</dd>
    <dt>Research support</dt>
    <dd>Princeton PIIRS; Princeton School of Public and International Affairs; Liechtenstein Institute on Self-Determination</dd>
  </dl>
</section>

<div class="cv-embed" aria-hidden="true">
  <object data="{{ profile.cv | relative_url }}#view=FitH" type="application/pdf" tabindex="-1">
    <p>Your browser cannot display the PDF here. <a href="{{ profile.cv | relative_url }}">Open the CV (PDF)</a>.</p>
  </object>
</div>
