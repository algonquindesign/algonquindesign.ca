---
layout: schedule
title: Schedule List View
permalink: /schedule/list-26w/
day: Null
---

{% assign schedule_sorted = site.data.schedule-26w | sort: "level" %}

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
      <th>Instructor</th>
    </tr>
  </thead>
  <tbody>
    {% for row in schedule_sorted %}
      <tr>
        <td>{{ row.level }}</td>
        <td>{{ row.code }}</td>
        <td>{{ row.courses }}</td>
        <td>{{ row.section }}</td>
        <td>{{ row.day }}</td>
        <td>{{ row.time }}</td>
        <td>{{ row.room }}</td>
        <td><a href="mailto:{{ row.email | strip }}">{{ row.instructor }}</a></td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<script src="https://unpkg.com/tablesort@5.7.0/dist/tablesort.min.js"></script>
<script>
  var dayOrder = {
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4,
    'Friday': 5,
    'Saturday': 6,
    'Sunday': 7
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
