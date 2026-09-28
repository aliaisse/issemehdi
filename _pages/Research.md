---
layout: page
title: "Research"
permalink: /research/
redirect_from:
  - /publications/
description: "Research by Ali Isse (Mehdi) on nuclear proliferation and counterproliferation, coercive diplomacy, and international security: dissertation, forthcoming work, papers under review, and works in progress."
---
{%- assign research = site.data.research -%}
<section class="dissertation" aria-labelledby="dissertation-heading">
  <h2 id="dissertation-heading" class="section-label">Dissertation</h2>
  <p class="dissertation__title">{{ research.dissertation.title }}</p>
  <p class="dissertation__summary">{{ research.dissertation.summary }}</p>
</section>

{% for group in research.groups %}
<section class="entry-group" aria-labelledby="research-{{ forloop.index }}">
  <h2 id="research-{{ forloop.index }}">{{ group.title }}</h2>
  <ul class="entry-list">
    {%- for entry in group.entries %}
    {% include site/entry.html entry=entry %}
    {%- endfor %}
  </ul>
</section>
{% endfor %}
