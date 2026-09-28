---
layout: page
title: "Teaching"
permalink: /teaching/
description: "Teaching by Ali Isse (Mehdi) at Princeton University and elsewhere."
---
{%- assign static_paths = site.static_files | map: "path" -%}
<ul class="course-list">
  {%- for course in site.data.teaching.courses %}
  <li class="course">
    <h2 class="course__title">{{ course.title }}</h2>
    <p class="course__meta">
      {%- if course.institution %}<span>{{ course.institution }}</span>{% endif -%}
      {%- if course.term %}<span>{{ course.term }}</span>{% endif -%}
      {%- if course.enrollment %}<span>{{ course.enrollment }}</span>{% endif -%}
    </p>
    <p class="course__description">{{ course.description }}</p>
    {%- if course.syllabus and static_paths contains course.syllabus %}
    <p class="course__links"><a href="{{ course.syllabus | relative_url }}">Syllabus <span class="visually-hidden">for {{ course.title }}</span>(PDF)</a></p>
    {%- endif %}
  </li>
  {%- endfor %}
</ul>
