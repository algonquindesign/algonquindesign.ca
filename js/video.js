(function () {
  'use strict';

  var videoLinks = document.querySelectorAll('.video-link');
  var iframe = '<iframe class="embed-item" src="https://www.youtube.com/embed/{{id}}?autoplay=1&color=white&theme=light&rel=0" frameborder="0" allowfullscreen></iframe>';

  if (!videoLinks) return;

  [].forEach.call(videoLinks, function (link) {
    link.addEventListener('click', function (e) {
      var iframeTag = iframe.replace('{{id}}', e.currentTarget.dataset.videoId);

      e.preventDefault();
      e.currentTarget.parentNode.innerHTML = iframeTag;
    });
  });
}());
