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
<ul class="articles">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a><br>
      {{ post.deck }}
    </li>
  {% endfor %}
</ul>
</main>
{% include 13-footer.html %}
