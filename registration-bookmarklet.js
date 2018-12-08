javascript: (function() {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/udhayakumaran/bookmarklet@3ad45bfd5d876a369e87adcd84d3bcbfb388ddab/registration.js?cache='+Math.random();
    script.async = true;
    head.appendChild(script);
})();
