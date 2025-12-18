---
layout: default
title: "Your Future Starts Here"
description: "Discover how the Graphic Design program at Algonquin College can spark your creative future."
id: "spark"
---
<ul class="skip-links">
	<li><a href="#form">Jump to Form</a></li>
</ul>
{% include 01-masthead.html %}
{% include 02-banner.html %}
<main role="main" class="main-future">
	<h3>
		Why AlgonquinDesign?
	</h3>
	<p>
		There are myriad reasons for starting your creative future at Algonquin College's Graphic Design program. These are a few of them.
	</p>
	<div class="content-box">
		<div class="graphic-box">
			{% assign img = site.data.sample-work.images[1] %} <img src="/images/sample-work/{{ img.src }}" alt="{{ img.title }}">
		</div>
		<div class="text-box">
			<h3>
				{{site.data.sample-work.title}}
			</h3>
			<p>
				<strong>{{site.data.sample-work.desc}}</strong>
			</p>
			<p>
				{{site.data.sample-work.long-desc}}
			</p>
			<p>
				<a href="/index.html#sample-work">{{site.data.sample-work.button}}</a> ➜
			</p>
		</div>
	</div>
	<h4>
		From Art to Design
	</h4>
	<p>
		Transition from expressive art to applied design, where creativity solves real communication problems for real people. Explore visual storytelling, branding, layout, and digital experiences while keeping your unique artistic voice at the centre.
	</p>
	<h4>
		Studio Energy in Every Class
	</h4>
	<p>
		Classes feel like art studios, with project-based learning, critiques, collaboration, and lots of feedback. Weekly three-hour studio blocks give space to experiment, explore, and refine work, similar to high school art classes but with a professional focus.
	</p>
	<blockquote>
		“Find tools, community, and real-world experience with Algonquin’s Graphic Design program—where creativity meets employability.”
	</blockquote>
	<h4>
		Creativity with Modern Tools
	</h4>
	<p>
		Learn industry-standard design software as creative instruments, not just technical tools to click through. Use them to sketch, explore, and refine ideas, so technology supports your imagination rather than replacing it.
	</p>
	<h4>
		Build a Standout Portfolio
	</h4>
	<p>
		Create a professional portfolio that shows both artistic strengths and design thinking. Projects are diverse, so students can explore style across posters, branding, digital media, motion, and more, building a portfolio that speaks to employers and clients.
	</p>
	<blockquote>
		“<a href="/ai-in-graphic-design/">The future of design is human-led, AI-enhanced.</a>”
	</blockquote>
	<h4>
		Community, Mentors, Futures
	</h4>
	<p>
		Join a cohort of students who care about art and design as much as you do. Study with faculty who work as designers and educators, who understand the move from fine art to graphic design, and who help students prepare for careers in design, web, animation, user experience, publishing, and more.
	</p>
	<a href="https://www.ontariocolleges.ca/en/cba?collegeCode=ALGO&amp;programCode=1400X01F" class="btn btn-lime-green">Apply Now&nbsp;➜</a>
	<h4>
		Turning Passion Into a Career
	</h4>
	<p>
		Learn how to monetize creativity while staying true to artistic roots. Fieldwork and client-based projects offer a first look at the business side of art, from working with clients to meeting deadlines to presenting work with confidence.
	</p>
	<div class="content-box">
		<div class="graphic-box">
			<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewbox="0 0 151.42 157.32"><defs><style>



.cls-1{fill:rgb(43, 101, 65)}.cls-2{fill:rgb(149, 200, 70)}




			</style>
			</defs><path d="M132.57 157.32l-96.34-13.93 18.85-130.4 96.34 13.93-18.85 130.4zm-85.02-22.4l76.55 11.07 15.99-110.6-76.55-11.07-15.99 110.6z" class="cls-1" /><path d="M47.55 134.92l76.55 11.07 15.99-110.6-76.55-11.07-15.99 110.6z" class="cls-2" /><path d="M82.45 10.5h36.74v96.13H82.45z" class="cls-2" /><path d="M124.19 111.63H77.45V5.5h46.74v106.13zm-36.74-10h26.74V15.5H87.45v86.13z" class="cls-1" /><path d="M0 24.52l32.54 127.67 96.18-24.52L96.18 0 0 24.52zm12.16 7.22l10.88-2.77 27.6 108.29-10.88 2.77-27.6-108.29zm104.4 88.71l-56.23 14.33-27.6-108.29 56.23-14.33 27.6 108.29z" class="cls-1" /><path d="M12.16 31.74l10.88-2.77 27.6 108.29-10.88 2.77-27.6-108.29zm104.4 88.71l-56.23 14.33-27.6-108.29 56.23-14.33 27.6 108.29z" class="cls-2" /></svg>
		</div>
		<div class="text-box">
			<h3>
				{{site.data.portfolio.title}}
			</h3>
			<p>
				<em>{{site.data.portfolio.desc}}</em>
			</p>
			<p>
				{{site.data.portfolio.details | replace: '& ', '<abbr title="and">&amp;</abbr> '}}
			</p>
			<p>
				<em>{{site.data.portfolio.questions}} <a href="mailto:{{site.data.portfolio.email}}?subject=Question%20about%20portfolio%20requirements">{{site.data.portfolio.email_text}}</a><span aria-hidden="true" role="presentation">.</span></em>
			</p>
			<a href="{{site.data.portfolio.url}}" class="">{{site.data.portfolio.button}} ➜</a>
		</div>
	</div>
	<h3>
		Interested?
	</h3>
	<p>
		Do you have questions, or do you wish to express interest in learning more? Just get in touch!
	</p>
	<form class="" action="https://submit-form.com/psFiS9q14" data-botpoison-public-key="pk_6470daed-f37c-4eb7-8c5b-3d5e79205092">
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
				<label class="form-label" for="telephone">Phone <em>(Optional)</em></label>
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
