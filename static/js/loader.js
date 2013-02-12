// Generated by CoffeeScript 1.4.0

/*
This script is the master controller, it kicks everything off
*/


(function() {
  var load_css, overlay;

  load_css = function(url) {
    var style;
    style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("type", "text/css");
    style.setAttribute("href", url);
    return document.getElementsByTagName("head")[0].appendChild(style);
  };

  if (window.SUBTLEPATTERNS) {
    load_css("http://127.0.0.1:8000/subtle-patterns-bookmarklet/static/css/all.css?cb=" + (Math.random()));
    overlay = new SubtlePatternsBookmarklet();
    overlay.setup({
      patterns: SUBTLEPATTERNS
    });
  } else {
    alert("Something went wrong, I can't find the SubtlePatterns. Please e-mail bjasper@gmail.com");
  }

}).call(this);
