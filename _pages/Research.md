---
layout: page
title: "Research"
permalink: /research/
redirect_from:
  - /publications/
description: "Research by Ali Isse (Mehdi) on nuclear proliferation and counterproliferation, coercive diplomacy, and international security: forthcoming work, papers under review, and working papers."
---
{%- assign research = site.data.research -%}
<p class="page__intro">{{ research.dissertation }}</p>

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
