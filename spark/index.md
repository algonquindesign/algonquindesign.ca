---
layout: default
title: "Your Future Starts Here"
description: "Learn about the benefits of attending the Graphic Design program at Algonquin College."
id: "spark"
---
<ul class="skip-links">
	<li><a href="#form">Jump to Form</a></li>
</ul>
{% include 01-masthead.html %} {% include 02-banner.html %}
<main role="main" class="main-future">
<h3>Why AlgonquinDesign?</h3>
<p>
There are myriad reasons for starting your creative future at Algonquin College's Graphic Design program. These are a few of them.
</p>
	<ul class="hanging-list">
		{% for message in site.data.future.messaging %}
		<li>{{ message }}</li>
		{% endfor %}
	</ul>
<h3>Interested?</h3>
<p>
Do you have questions, or do you wish to express interest in learning more? Just get in touch!
</p>
	<form class="" action="https://submit-form.com/psFiS9q14">
		<fieldset>
			<legend>Identification</legend>
			<div>
				<label class="form-label" for="name">Name</label>
				<input type="text" id="name" name="Name" placeholder="Name" required="">
			</div>
			<div>
				<label class="form-label" for="email">Email</label>
				<input type="email" id="email" name="E-mail" placeholder="E-mail" required="">
			</div>
			<div>
				<label class="form-label" for="telephone">Phone  <em>(Optional)</em></label>
				<input type="telephone" id="tel" name="telephone" placeholder="Telephone">
			</div>
		</fieldset>
		<fieldset>
			<legend>How may we help?</legend>
			<div class="form-text">
				Ask us a question, or tell us if you're interested in registering.
			</div>
			<textarea id="work-desc" name="Work-Description" required></textarea>
		</fieldset>
		<input type="hidden" name="_email.subject" value="Spark Question or Expression of Interest" />
		<input type="hidden" name="_redirect" value="https://algonquindesign.ca/spark/thanks.html"> <small class="">By providing your contact information, you are granting the Graphic Design program permission to contact you for program-related activities. We mostly wish to invite you to our yearly Grad Show. We will not share your private information.</small>
		<div>
			<button class="" type="submit">Submit</button>
		</div>
	</form>
</main>
{% include 13-footer.html %}
