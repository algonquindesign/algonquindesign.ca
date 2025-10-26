---
layout: schedule
title: Weekly Graphic Design Schedule
---

<style>
  body {
    font-family: "IBM Plex Mono", monospace;
    font-size: clamp(0.9rem, 1vw + 0.5rem, 1.2rem);
    line-height: 1.6;
  }
  .schedule-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2rem;
  }
  .schedule-table th,
  .schedule-table td {
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: center;
    vertical-align: top;
  }
  .course-block {
    font-size: inherit;
    line-height: inherit;
  }
  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .legend-color {
    width: 20px;
    height: 20px;
    border-radius: 4px;
  }
  @media (max-width: 768px) {
    .schedule-table {
      display: block;
      overflow-x: auto;
    }
  }
</style>

<h2>Asynchronous Courses</h2>
<ul>
  {% for item in site.data.schedule.async %}
    <li>
      <strong>{{ item.name }}</strong><br>
      Modality: {{ item.modality }}<br>
      Level: {{ item.level }}<br>
      Instructor: <a href="mailto:{{ item.email }}">{{ item.instructor }}</a>
    </li>
  {% endfor %}
</ul>

<h2>Legend</h2>
<div class="legend">
  {% assign colors = "l1g1:#d0eaff,l1g2:#ffd0d0,l3g1:#d0ffd0,l3g2:#fff0b0,l3g3:#f0d0ff,l5g1:#d0ffff,l5g2:#f0f0f0" | split: "," %}
  {% for item in colors %}
    {% assign parts = item | split: ":" %}
    <div class="legend-item">
      <div class="legend-color" style="background-color: {{ parts[1] }};"></div>
      <span>Level {{ parts[0] | remove: "l" | split: "g" | first }}, Group {{ parts[0] | remove: "l" | split: "g" | last }}</span>
    </div>
  {% endfor %}
</div>

<h2>In-Person Courses</h2>
{% assign rooms = site.data.schedule.rooms %}
{% assign times = site.data.schedule.times %}
{% assign days = "Monday,Tuesday,Wednesday,Thursday,Friday" | split: "," %}

{% for day in days %}
  <h3>{{ day }}</h3>
  <table class="schedule-table">
    <thead>
      <tr>
        <th>Time</th>
        {% for room in rooms %}
          <th>{{ room }}</th>
        {% endfor %}
      </tr>
    </thead>
    <tbody>
      {% for time in times %}
        <tr>
          <td>{{ time }}</td>
          {% for room in rooms %}
            {% assign class_here = nil %}
            {% assign day_classes = site.data.schedule.classes | where: "day", day %}
            {% for c in day_classes %}
              {% if c.start == time and (c.room == room or c.room contains room) %}
                {% assign class_here = c %}
                {% break %}
              {% endif %}
            {% endfor %}
            {% assign color = "#ffffff" %}
            {% if class_here %}
              {% case class_here.group %}
                {% when "l1g1" %}{% assign color = "#d0eaff" %}
                {% when "l1g2" %}{% assign color = "#ffd0d0" %}
                {% when "l3g1" %}{% assign color = "#d0ffd0" %}
                {% when "l3g2" %}{% assign color = "#fff0b0" %}
                {% when "l3g3" %}{% assign color = "#f0d0ff" %}
                {% when "l5g1" %}{% assign color = "#d0ffff" %}
                {% when "l5g2" %}{% assign color = "#f0f0f0" %}
              {% endcase %}
            {% endif %}
            <td style="background-color: {{ color }}">
              {% if class_here %}
                {% assign start_index = times | index_of: class_here.start %}
                {% assign end_index = start_index | plus: class_here.duration %}
                {% assign end_time = times[end_index] %}
                <div class="course-block">
                  <strong>{{ class_here.name }}</strong><br>
                  Level {{ class_here.group | remove: "l" | split: "g" | first }}, Group {{ class_here.group | remove: "l" | split: "g" | last }}<br>
                  {{ class_here.room | join: ", " }}, {{ class_here.start }}–{{ end_time }}<br>
                  <a href="mailto:{{ class_here.email }}">{{ class_here.instructor }}</a>
                  {% if class_here.instructor2 %}<br>
                    & <a href="mailto:{{ class_here.email2 }}">{{ class_here.instructor2 }}</a>
                  {% endif %}
                </div>
              {% endif %}
            </td>
          {% endfor %}
        </tr>
      {% endfor %}
    </tbody>
  </table>
{% endfor %}
