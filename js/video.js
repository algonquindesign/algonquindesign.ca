(function () {
  'use strict';

  var videoLinks = document.querySelectorAll('.video-link');
  var iframe = {
    youtube: '<iframe class="embed-item" src="https://www.youtube.com/embed/{{id}}?autoplay=1&color=white&theme=light&rel=0" frameborder="0" allowfullscreen></iframe>',
    vimeo: '<iframe class="embed-item" src="https://player.vimeo.com/video/{{id}}?autoplay=1&color=#ffffff" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
  };

  if (!videoLinks) return;

  [].forEach.call(videoLinks, function (link) {
    link.addEventListener('click', function (e) {
      var iframeTag;

      if (iframe[e.currentTarget.dataset.videoService]) {
        iframeTag = iframe[e.currentTarget.dataset.videoService].replace('{{id}}', e.currentTarget.dataset.videoId);
      } else {
        iframeTag = iframe.youtube.replace('{{id}}', e.currentTarget.dataset.videoId);
      }

      e.preventDefault();
      e.currentTarget.parentNode.innerHTML = iframeTag;
    });
  });
}());
