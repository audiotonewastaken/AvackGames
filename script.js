document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    if (name === 'control') {
  location.replace("https://classroom.google.com");
    }
    if (event.ctrlKey) {
      location.replace("https://classroom.google.com");
    } else {
    location.replace("https://classroom.google.com");
    }
  }, false);
  // Add event listener on keyup
  document.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name === 'control') {
   location.replace("https://classroom.google.com");
    }
  }, false);
  </script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-226541035-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-226541035-1');

