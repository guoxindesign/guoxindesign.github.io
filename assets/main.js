---
layout: nil
---

var target = document.getElementsByClassName("navbar")[0];

document.onscroll = function(e){
  var percent = document.body.scrollTop / 200;

  if (percent > 0.95) { percent = 0.95; }
  if (percent < 0) { percent = 0.0; }

  target.style.backgroundColor = 'rgba(255, 255, 255, ' + percent + ')';
};
