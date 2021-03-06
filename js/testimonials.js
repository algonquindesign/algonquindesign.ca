(function () {
  'use strict';

  var appendNewTestimonial = function (quote, id) {
    var template = document.getElementById('testimonial-template');
    var group = document.getElementById('testimonials-group');
    var testimonialWrap = document.createElement('div');
    var testimonial;

    testimonialWrap.innerHTML = template.innerHTML;
    testimonial = testimonialWrap.querySelector('.testimonials');
    testimonial.id = 'testimonial-' + (id + 1);
    testimonial.setAttribute('aria-hidden', true);
    testimonial.setAttribute('hidden', true);
    testimonial.querySelector('.testimonial-img').style.backgroundImage = 'url(' + imgUrlBase + quote.image + ')';
    testimonial.querySelector('.testimonial-quote').innerHTML = quote.text;
    testimonial.querySelector('.testimonial-author').innerHTML = quote.author;

    group.appendChild(testimonial);
  };

  var showTestimonial = function (id) {
    var testimonial = document.getElementById(id);
    var current = document.querySelector('.testimonials[aria-hidden="false"]');

    if (current) {
      current.setAttribute('aria-hidden', 'true');
      current.setAttribute('hidden', true);
    }

    testimonial.setAttribute('aria-hidden', 'false');
    testimonial.removeAttribute('hidden');
    document.querySelector('.testimonial-button[aria-selected="true"]').setAttribute('aria-selected', false);
    document.querySelector('.testimonial-button[aria-controls="' + id + '"]').setAttribute('aria-selected', true);
  };

  var initButtons = function () {
    var buttons = document.getElementById('testimonial-buttons');
    var buttonWrap = document.querySelector('.testimonial-button-wrap');

    buttonWrap.innerHTML += buttons.innerHTML;

    document.querySelector('.testimonial-buttons').addEventListener('click', function (e) {
      if (e.target.classList.contains('testimonial-button')) {
        showTestimonial(e.target.getAttribute('aria-controls'));
      }
    });
  };

  var initTestimonials = function () {
    var randTestimonials = shuffle(testimonials);
    var totalButtons = document.querySelectorAll('.testimonial-button').length;
    var i = 0;

    document.getElementById('testimonials-group').innerHTML = '';

    for (i = 0; i < totalButtons; i++) {
      appendNewTestimonial(randTestimonials[i], i);
    }
  };

  var initSwipe = function () {
    var group = document.getElementById('testimonials-group');

    swiper(group, function (e) {
      var allButtons = document.querySelectorAll('.testimonial-button');
      var current = 0;
      var next = 0;

      [].forEach.call(allButtons, function (btn, i) {
        if (btn.getAttribute('aria-selected') == 'true') current = i;
      });

      if (e.direction == 'left') {
        next = ((current + 1) < allButtons.length) ? current + 1 : 0;
      } else {
        next = ((current - 1) >= 0) ? current - 1 : allButtons.length - 1;
      }

      showTestimonial('testimonial-' + (next + 1));
    });
  };

  initButtons();
  initTestimonials();
  initSwipe();
  showTestimonial('testimonial-1');
}());
