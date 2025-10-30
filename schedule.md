---
layout: schedule
title: Weekly Graphic Design Schedule
---

{%- assign rooms = site.data.schedule.rooms -%}
{%- assign times = site.data.schedule.times -%}
{%- assign days = "Monday,Tuesday,Wednesday,Thursday,Friday" | split: "," -%}

<style>
* { box-sizing: border-box; }

body
{
font-family: "IBM Plex Mono", serif;
font-weight: 400;
font-style: normal;
font-size: clamp(0.9rem, 0.8rem + 0.5vw, 1.4rem);
margin: 0.5rem;
padding: 0;
}

.table-container
{
display: grid;
gap: 1px;
grid-template-columns: auto;
background-color: #ccc;
border: solid 1px #e0e0e0;
max-width: 95%;
overflow-x: auto;
}

.table-header, .table-cell, .time-label
{
background-color: #fff;
padding: 10px;
text-align: center;
min-width: 100px;
}

.time-label
{
background-color: #f0f0f0;
font-weight: bold;
}

.table-header { background-color: #e0e0e0; }

.class-block
{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-weight: bold;
color: #003366;
border: 1px solid #99c;
}

.class-room
{
font-size: 0.85em;
font-weight: normal;
margin-bottom: 2px;
color: #222;
}

.class-level-group
{
font-size: 0.85em;
font-weight: normal;
margin-bottom: 2px;
color: #444;
}

.instructor-name
{
font-weight: normal;
font-size: 0.9em;
margin-top: 4px;
color: #333;
}

h2
{
margin-top: 48px;
font-weight: bold;
}

h3
{
margin-top: 48px;
font-weight: bold;
}

a {
text-decoration: none;
color: #003366;
border-bottom: 1px solid #003366;
}
a:hover { border-bottom: 1px solid #0433FF; }

.async {
list-style: none;
padding: 0;
margin: 0;
display: flex;
flex-wrap: wrap;
gap: 2rem;
}

.async-item {
flex: 1 1 250px;
max-width: 400px;
background: #EBEBEB;
padding: 1rem;
border-radius: 8px;
}

.async-item ul {
list-style-type: none;
margin: 0;
padding-left: 1.5rem;    /* indent bullets */
}
</style>

<h2>Asynchronous Courses</h2>
<ul class="async">
  {% for item in site.data.schedule.async %}
    <li class="async-item">
      <ul>
        <li><strong>{{ item.name }}</strong></li>
        <li>{{ item.modality }}</li>
        <li>Level: {{ item.level }}</li>
        <li>{{ item.instructor }}</li>
      </ul>
    </li>
  {% endfor %}
</ul>
<h2>In-Person Courses</h2>
{% for day in days %}
<h3>{{ day }}</h3>

  {% assign day_classes = site.data.schedule.classes | where: "day", day %}
  {% assign classes = day_classes %}
  {% assign room_count = rooms | size %}
  {% assign time_count = times | size %}

  <div role="table" aria-label="Weekly class schedule" class="table-container" style="grid-template-columns: auto repeat({{ room_count }}, 1fr); grid-template-rows: auto repeat({{ time_count }}, auto);">

    <!-- Header row -->
    <div class="table-header" style="grid-column: 1; grid-row: 1;"></div>
    {% for room in rooms %}
      {% assign col = forloop.index0 | plus: 2 %}
      <div class="table-header" style="grid-column: {{ col }}; grid-row: 1;">
        {{ room }}
      </div>
    {% endfor %}

    <!-- Time rows -->
    {% for time in times %}
      {% assign row = forloop.index0 | plus: 2 %}
      {% assign time_index = forloop.index0 %}

      <!-- Time label -->
      <div class="time-label" style="grid-column: 1; grid-row: {{ row }};">
        {{ time }}
      </div>

      {% for room in rooms %}
        {% assign col = forloop.index0 | plus: 2 %}

        {% assign class_here = nil %}
        {% for c in classes %}
          {% if c.start == time %}
            {% if c.room == room or c.room contains room %}
              {% assign class_here = c %}
              {% break %}
            {% endif %}
          {% endif %}
        {% endfor %}

        {% if class_here %}
          {% assign color = "#cccccc" %}
          {% case class_here.group %}
            {% when "l1g1" %} {% assign color = "#d0eaff" %}
            {% when "l1g2" %} {% assign color = "#ffd0d0" %}
            {% when "l3g1" %} {% assign color = "#d0ffd0" %}
            {% when "l3g2" %} {% assign color = "#fff0b0" %}
            {% when "l3g3" %} {% assign color = "#f0d0ff" %}
            {% when "l5g1" %} {% assign color = "#d0ffff" %}
            {% when "l5g2" %} {% assign color = "#f0f0f0" %}
          {% endcase %}

          <div class="table-cell class-block"
               style="
                 grid-column: {{ col }};
                 grid-row: {{ row }} / span {{ class_here.duration }};
                 background-color: {{ color }};
               ">
            <div class="class-room">
              {% if class_here.room contains ',' or class_here.room.size > 1 %}
                {{ class_here.room | join: ", " }}
              {% else %}
                {{ class_here.room }}
              {% endif %}
            </div>

            <div class="class-level-group">
              {% assign parts = class_here.group | remove: "l" | split: "g" %}
              Level {{ parts[0] }}, Group {{ parts[1] }}
            </div>
            <div class="class-name">{{ class_here.name }}</div>
            {% if class_here.instructor %}
              <div class="instructor-name"><a href="mailto:{{ class_here.email }}">{{ class_here.instructor }}</a>
            {% if class_here.instructor2 %} & 
              <a href="mailto:{{ class_here.email2 }}">{{ class_here.instructor2 }}</a>
            {% endif %}
            {% endif %}
              </div>
          </div>

        {% else %}
          {% assign covered = false %}
          {% for c in classes %}
            {% assign room_list = c.room %}
            {% if room_list != nil %}
              {% if room_list == room or room_list contains room %}
                {% assign start_index = nil %}
                {% for t in times %}
                  {% if t == c.start %}
                    {% assign start_index = forloop.index0 %}
                    {% break %}
                  {% endif %}
                {% endfor %}
                {% if start_index != nil %}
                  {% assign end_index = start_index | plus: c.duration %}
                  {% if time_index > start_index and time_index < end_index %}
                    {% assign covered = true %}
                    {% break %}
                  {% endif %}
                {% endif %}
              {% endif %}
            {% endif %}
          {% endfor %}

          {% unless covered %}
            <div class="table-cell" style="grid-column: {{ col }}; grid-row: {{ row }};">
            </div>
          {% endunless %}
        {% endif %}

      {% endfor %}
    {% endfor %}

  </div>
{% endfor %}