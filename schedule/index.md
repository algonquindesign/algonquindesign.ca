---
layout: schedule
title: Monday Schedule
permalink: /schedule/
day: Monday
---

<div class="async">
  {% assign async_courses = site.data['schedule-26f'] | where: "day", "async" %}
  <ul>
    {% for async in async_courses %}
    <li><strong>Asynchronous:</strong> {{ async.code }} {{ async.course }}, Level: {{ async.level }}, <a href="mailto:{{ async.email1 }}">{{ async.instructor1 }}</a></li>
    {% endfor %}
  </ul>
</div>
{% include schedule-table.html day=page.day %}
<footer>

</footer>
