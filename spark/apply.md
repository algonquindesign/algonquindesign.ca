---
layout: default
title: "Steps to Apply"
description: "This is how you apply to the program."
id: "spark-apply"
---
<ul class="skip-links">
	<li><a href="#form">Jump to Form</a></li>
</ul>
{% include 01-masthead.html %} {% include 02-banner.html %}
<main role="main" class="main-apply">
	<p>
		Wondering about the process of applying to our program? This is what to expect.
	</p>
	<ol class="StepsToApply">
		{% for application in site.data.apply.StepsToApply %}
		<li>
		<h4>
		{% if application.url %}
      <a href="{{ application.url }}">{{ application.title }}</a>
      {% else %}
     <span class="">{{ application.title }}</span>
    {% endif %}
		</h4>
		<p>
			{{ application.text }}
		</p>
		</li>
		{% endfor %}
	</ol>
</main>
{% include 13-footer.html %}
