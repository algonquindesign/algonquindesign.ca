---
layout: schedule
title: Monday Schedule
permalink: /schedule/
day: Monday
---

<div class="async">
  {% assign async_courses = site.data.schedule-26w | where: "day", "ASYNC" %}
  <ul>
    {% for async in async_courses %}
    <li><strong>Asynchronous:</strong> {{ async.code }} {{ async.courses }}, Level: {{ async.level }}, <a href="mailto:{{ async.email }}">{{ async.instructor }}</a></li>
    {% endfor %}
  </ul>
</div>

{% include schedule-table.html day=page.day %}

<footer>
	<p>
		Note: Level 6 courses are 7 weeks in duration, ending February 27, 2026.
	</p>
</footer>
