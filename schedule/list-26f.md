---
layout: schedule
title: Schedule List View
permalink: /schedule/list-26f/
day: Null
---

{% assign schedule_sorted = site.data['schedule-26f'] | sort: "level" %}

<table class="schedule-table">
	<thead>
		<tr>
			<th>Level</th>
			<th>Code</th>
			<th>Course</th>
			<th>Section</th>
			<th data-sort-method="dayname">Day</th>
			<th>Time</th>
			<th>Room</th>
			<th>Instructor 1</th>
      <th>Instructor 2</th>
		</tr>
	</thead>
	<tbody>
		{% for row in schedule_sorted %}
		<tr>
			<td>{{ row.level }}</td>
			<td>{{ row.code }}</td>
			<td>{{ row.course }}</td>
			<td>{{ row.section }}</td>
			<td>{{ row.day }}</td>
			<td>{{ row.time }}</td>
			<td>{{ row.room }}</td>
			<td><a href="mailto:{{ row.email1 | strip }}">{{ row.instructor1 }}</a></td>
			<td>
			{%- if row.instructor2 and row.instructor2 != "" -%}
			<a href="mailto:{{ row.email2 | strip }}">{{ row.instructor2 }}</a>
			{%- endif -%}
			</td>
		</tr>
		{% endfor %}
	</tbody>
</table>


<script src="https://unpkg.com/tablesort@5.7.0/dist/tablesort.min.js"></script>
<script>
  var dayOrder = {
    'MON': 1,
    'TUE': 2,
    'WED': 3,
    'THU': 4,
    'FRI': 5,
    'SAT': 6,
    'SUN': 7,
    'async': 8
  };

  Tablesort.extend('dayname', function (item) {
    return dayOrder.hasOwnProperty(item.trim());
  }, function (a, b) {
    var av = dayOrder[a.trim()] || 0;
    var bv = dayOrder[b.trim()] || 0;
    return av - bv;
  });

  new Tablesort(document.querySelector('.schedule-table'));
</script>
