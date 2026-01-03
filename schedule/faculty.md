---
layout: schedule
title: Faculty List
---
<style>
ul.columns {
  column-count: 3;
  column-gap: 20px;
}
ul {
  list-style-type: none;
}
ul li { line-height: 1.6rem; }
</style>
{% assign unique_instructors = "" | split: "" %}
{% for row in site.data.schedule-26w %}
  {% assign key = row.instructor | append: "||" | append: row.email %}
  {% unless unique_instructors contains key %}
    {% assign unique_instructors = unique_instructors | push: key %}
  {% endunless %}
{% endfor %}
{% assign emails = "" | split: "" %}
{% for item in unique_instructors %}
  {% assign parts = item | split: "||" %}
  {% assign email = parts[1] | strip %}
  {% unless emails contains email %}
    {% assign emails = emails | push: email %}
  {% endunless %}
{% endfor %}
{% assign emails_sorted = emails | sort %}
<ul class="columns">
  {% for email in emails_sorted %}
    {% for item in unique_instructors %}
      {% assign parts = item | split: "||" %}
      {% assign name  = parts[0] %}
      {% assign item_email = parts[1] | strip %}
      {% if item_email == email %}
        <li>
          <a href="mailto:{{ item_email }}">
            {{ name }}
          </a>
        </li>
        {% break %}
      {% endif %}
    {% endfor %}
  {% endfor %}
</ul>
