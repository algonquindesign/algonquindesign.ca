---
layout: wil
title: Employers
---
This is a list of {{ site.data.employers.size }} employers who've taken students on Fieldwork in past years. You'll have to do your own research to find out who to contact.

If a name is <a href="#" class="crossed-out sans"><strong>crossed out</strong></a>, they're no longer hiring.

{% assign modality_groups = site.data.employers | group_by: "Modality" %}

<ul class="legend">
  <li data-modality="all" class="active">
    <span>All</span>
  </li>
  <li data-modality="In-Person">
   <img src="{{ site.url }}{{ site.baseurl }}/svg/in-person.svg" alt="In-Person" width="30px" height="30px">
    <span>In-Person</span>
  </li>
  <li data-modality="Hybrid">
    <img src="{{ site.url }}{{ site.baseurl }}/svg/hybrid.svg" alt="Hybrid" width="30px" height="30px">
    <span>Hybrid</span>
  </li>
  <li data-modality="Remote">
    <img src="{{ site.url }}{{ site.baseurl }}/svg/remote.svg" alt="Remote" width="30px" height="30px">
    <span>Remote</span>
  </li>
</ul>

<ul class="employers">
  {% for row in site.data.wil-employers %}
  <li>
    <strong>
    {% if row.URL %}
      <a href="{{ row.URL }}" target="_blank" class="{% if row.Hired == 'Yes' %}crossed-out{% endif %}">{{ row.Employer }}</a>
      {% else %}
      <span class="{% if row.Hired == 'Yes' %}crossed-out{% endif %}">{{ row.Employer }}</span>
      {% endif %}
    </strong>,
    <span><a href="mailto:{{ row['E-mail'] }}">{{ row.Contact }}</a></span>,
    <span>{{ row.Location }}</span>,
    <span>
      {% if row.Modality == "In-Person" %}
        <img src="{{ site.url }}{{ site.baseurl }}/svg/in-person.svg" alt="In-Person" width="30" height="30">
      {% elsif row.Modality == "Hybrid" %}
        <img src="{{ site.url }}{{ site.baseurl }}/svg/hybrid.svg" alt="Hybrid" width="30" height="30">
      {% elsif row.Modality == "Remote" %}
        <img src="{{ site.url }}{{ site.baseurl }}/svg/remote.svg" alt="Remote" width="30" height="30">
      {% else %}
        {{ row.Modality }}
      {% endif %}
    </span>
    {% if row.Notes %}
    <span class="notes">{{ row.Notes | replace: '||', '<br>' }}</span>
    {% endif %}
  </li>
  {% endfor %}
</ul>


