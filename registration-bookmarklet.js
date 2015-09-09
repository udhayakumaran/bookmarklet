javascript: (function() {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = 'https://cdn.rawgit.com/udhayakumaran/bookmarklet/master/registration.js?cache='+Math.random();
    script.async = true;
    head.appendChild(script);
})();
