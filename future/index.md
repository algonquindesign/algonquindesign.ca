---
layout: default
title: "Your Future Starts Here"
description: "Learn about the benefits of attending the Graphic Design program at Algonquin College."
id: "future"
---
<ul class="skip-links">
	<li><a href="#form">Jump to Form</a></li>
</ul>
{% include 01-masthead.html %} {% include 02-banner.html %}
<main role="main" class="main-future">
	<ul class="hanging-list">
		{% for message in site.data.future.messaging %}
		<li>{{ message }}</li>
		{% endfor %}
	</ul>
	<form class="" action="https://submit-form.com/Ktd6xuG2z">
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
				<label class="form-label" for="telephone">Phone</label>
				<input type="telephone" id="tel" name="telephone" placeholder="Telephone">
			</div>
			<div>
				<label class="form-label" for="organization">Organization name <em>(Optional)</em></label>
				<input type="text" id="organization" name="Organization" placeholder="Organization" required="">
			</div>
			<div>
				<label class="form-label" for="address">Address <em>(Optional)</em></label>
				<input type="text" id="address" name="Address" placeholder="Address" required="">
			</div>
			<div>
				<label class="form-label" for="city">City <em>(Optional)</em></label>
				<input type="text" id="city" name="City" placeholder="City">
			</div>
			<div>
				<label class="form-label" for="type">You are a…</label>
				<select id="org-type" name="Org-Type" required="">
					<option value=""></option>
					<option value="Individual">Individual</option>
					<option value="Design firm">Design firm</option>
					<option value="For profit company">For profit company</option>
					<option value="Registered charity">Registered charity</option>
					<option value="Non-profit or not-for-profit">Non-profit or not-for-profit</option>
					<option value="Other">Other</option>
				</select>
			</div>
			<div>
				<label class="form-label" for="seeking">You’re seeking a designer for…</label>
				<select id="seeking" name="Seeking" required="">
					<option value=""></option>
					<option value="A single job">A single job</option>
					<option value="A limited-time contract">A limited-time contract</option>
					<option value="Ongoing part-time work">Ongoing part-time work</option>
					<option value="A full-time position">A full-time position</option>
					<option value="Other">Other, describe below</option>
				</select>
			</div>
		</fieldset>
		<fieldset class="form-work-paid">
			<legend>Is the work paid?</legend>
			<div class="form-row">
				<label class="radio-option">
				<input type="radio" id="work-paid-yes" name="Paid" value="Yes" checked> Yes </label> <label class="radio-option">
				<input type="radio" id="work-paid-no" name="Paid" value="No"> No </label>
			</div>
		</fieldset>
		<fieldset>
			<legend>Description of the work needed</legend>
			<div class="form-text">
				General graphic design, web design, branding, motion video, etc.
			</div>
			<textarea id="work-desc" name="Work-Description" required></textarea>
			<label class="form-label" for="timeframe">Timeframe to complete the work (2 weeks, 1 month, 6 months, etc…)</label>
			<input type="text" id="timeframe" name="timeframe" placeholder="Timeframe" required="">
		</fieldset>
		<fieldset class="app-reqs">
			<legend>Application requirements</legend>
			<div class="form-text">
				What information & documents should the applying students send you?
			</div>
			<div class="form-row">
				<label class="radio-option">
				<input type="checkbox" id="send-resume" name="send-resume" value="R&eacute;sum&eacute;" />
				Résumé
				<input type="checkbox" id="send-portfolio" name="send-portfolio" value="Portfolio" />
				Portfolio </label>
			</div>
		</fieldset>
		<input type="hidden" name="_email.subject" value="Student Employment Opportunity" />
		<input type="hidden" name="_redirect" value="https://algonquindesign.ca/jobs/thanks.html"> <small class="">By providing your contact information, you are granting the Graphic Design program permission to contact you for program-related activities. We mostly wish to invite you to our yearly Grad Show. We will not share your private information.</small>
		<div>
			<button class="" type="submit">Submit</button>
		</div>
	</form>
</main>
{% include 13-footer.html %}
