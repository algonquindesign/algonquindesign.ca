---
layout: default
title: Articles
id: articles
---
<ul class="skip-links">
	<li><a href="#form">Jump to Form</a></li>
</ul>
{% include 01-masthead.html %}
{% include 02-banner.html %}
<main role="main" class="main-articles">
{% include breadcrumb.html %}
<h3>Guides</h3>
<ul class="articles none">
  {% for post in site.posts %}
  {% if post.category == 'Guide' %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a><br>
      {{ post.deck }}
    </li>
  {% endif %}
  {% endfor %}
</ul>

<h3>Advice</h3>
<ul class="articles none">
  {% for post in site.posts %}
  {% if post.category == 'Advice' %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a><br>
      {{ post.deck }}
    </li>
  {% endif %}
  {% endfor %}
</ul>
</main>
{% include 13-footer.html %}
