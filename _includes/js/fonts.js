var openSansNormal, openSansBold;
var merriweatherNormal, merriweatherItalic, merriweatherBold;

if (!sessionStorage.fontsLoaded) {
  openSansNormal = new FontFaceObserver('Open Sans', {
    weight: 'normal'
  });

  openSansBold = new FontFaceObserver('Open Sans', {
    weight: 'bold'
  });

  merriweatherNormal = new FontFaceObserver('Merriweather', {
    weight: 'normal'
  });

  merriweatherItalic = new FontFaceObserver('Merriweather', {
    style: 'italic'
  });

  merriweatherBold = new FontFaceObserver('Merriweather', {
    weight: 'bold'
  });

  Promise.all([
    openSansNormal.load(),
    openSansBold.load(),
    merriweatherNormal.load(),
    merriweatherItalic.load(),
    merriweatherBold.load(),
  ]).then(function() {
    document.documentElement.classList.add('fonts-loaded');
    sessionStorage.fontsLoaded = true;
  });
} else {
  document.documentElement.classList.add('fonts-loaded');
}
