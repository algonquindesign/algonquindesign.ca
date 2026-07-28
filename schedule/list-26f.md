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
      <th>Instructor</th>
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
        <td>
          {%- if row.instructor1 and row.instructor1 != "" -%}
            {%- if row.email1 and row.email1 != "" -%}
              <a href="mailto:{{ row.email1 | strip }}">{{ row.instructor1 }}</a>
            {%- else -%}
              {{ row.instructor1 }}
            {%- endif -%}
          {%- endif -%}
          {%- if row.Instructor2 and row.Instructor2 != "" -%}
            {%- if row.instructor1 and row.instructor1 != "" %}, {% endif -%}
            {%- if row.email2 and row.email2 != "" -%}
              <a href="mailto:{{ row.email2 | strip }}">{{ row.instructor2 }}</a>
            {%- else -%}
              {{ row.instructor2 }}
            {%- endif -%}
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
