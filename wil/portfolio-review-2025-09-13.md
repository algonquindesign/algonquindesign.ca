---
layout: wil
title: Portfolio Building Session
---

<span class="sans"><strong>September 27, 2025, 9<span class="smallcaps">AM</span>-noon</strong></span> — We'll be holding a portfolio building session at the AC Hub. This event will be tailored for third-year students seeking to improve their portfolios and find a fieldwork employer. The location is directly above Starbucks in the Student Commons (E) building [<a href="https://www.algonquincollege.com/maps/files/2024/10/Algonquin-College-Ottawa-Campus-Maps-Level-1.pdf" target="_blank" rel="noopener noreferrer">Campus Map</a> PDF]. Parking rates are listed on <a href="https://www.algonquincollege.com/parking/parking-services/rates/" target="_blank" rel="noopener noreferrer">the college's parking rates page</a>.

<a href="/handling-anxiety/" class="btn-small">Handling Anxiety ➜</a>

Most of all, do not stay home because you believe your work is not ready or not good enough. You do not need a completely assembled, polished portfolio to attend this event. Bring what you have.

These are the reviewers who are expected to attend.

{% for event in site.data.portfolioreviews %}
{% if event.date == "Sept. 27, 2025" %}
<ol>
  {% for attendee in event.attendees %}
    <li>
      {{ attendee.last_name }}, {{ attendee.first_name }} — <a href="{{ attendee.url }}">{{ attendee.studio }}</a>
    </li>
  {% endfor %}
</ol>
{% endif %}
{% endfor %}

---

<h2>Question Bank</h2>

Feel free to choose from these questions. They may be useful during your talks with reviewers.

<h3>About Professional Standards</h3>
<ul>
	<li>How does my work compare to what you see from junior designers applying for jobs?</li>
	<li>What skills do you think entry-level designers often lack that I should focus on?</li>
	<li>Are there industry trends or tools you think I should learn to stay relevant?</li>
	<li>What would make a portfolio truly memorable to you as a hiring designer?</li>
</ul>

<h3>About Career & Industry</h3>
<ul>
	<li>When you hire a new designer, what do you look for besides good design skills?</li>
	<li>How do you evaluate potential in a junior designer’s portfolio?</li>
	<li>What advice would you give someone entering the job market this year?</li>
	<li>Are there specific studios, agencies, or types of work you’d recommend exploring early in a career?</li>
	<li>How important are personal projects or passion work when you’re looking at a portfolio?</li>
</ul>

<h3>About Growth & Development</h3>
<ul>
	<li>How did you find your first job or big break in the industry?</li>
	<li>If you were me, what one thing would you focus on for the next six months?</li>
	<li>What do you wish you’d done differently when you were starting out?</li>
</ul>

<h3>About Your Portfolio</h3>
<ul>
	<li>What is the first impression my portfolio gives you about me as a designer?</li>
	<li>Do you see a design style emerging in my work?</li>
	<li>Is my portfolio cohesive enough?</li>
	<li>Are there projects that stand out that I should keep or replace?</li>
	<li>Do you think I have the right mix of project types (branding, web, print, motion, etc.)?</li>
	<li>Are my case studies explaining my process clearly enough?</li>
</ul>

<h3>About Presentation & Communication</h3>
<ul>
	<li>Do my mockups and presentation choices help my work shine, or distract from it?</li>
	<li>Does the way I’ve structured my portfolio make sense?</li>
	<li>How could I make my portfolio easier or faster to review?</li>
	<li>How do you prefer to see work, in person, PDF, website, or something else?</li>
</ul>
