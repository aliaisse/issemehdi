---
layout: page
title: "Talks"
permalink: /talks/
description: "Conference presentations, invited talks and research presentations by Ali Isse (Mehdi)."
---
{% for group in site.data.talks.groups %}
{%- if group.entries.size > 0 %}
<section class="entry-group" aria-labelledby="talks-{{ forloop.index }}">
  <h2 id="talks-{{ forloop.index }}">{{ group.title }}</h2>
  <ul class="entry-list">
    {%- for talk in group.entries %}
    <li class="entry">
      <span class="entry__year">{{ talk.year }}</span>
      <div class="entry__body"><p>{{ talk.text }}</p></div>
    </li>
    {%- endfor %}
  </ul>
</section>
{%- endif %}
{% endfor %}
