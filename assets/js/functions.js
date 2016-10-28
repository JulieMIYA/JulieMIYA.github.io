function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var timelineSections = document.querySelectorAll(".timeline-section");
function callbackFunc() {
  for (var i = 0; i < timelineSections.length; i++) {
    if (isElementInViewport(timelineSections[i])) {
      timelineSections[i].classList.add("is-showing");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
$(document).ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 2800);

    $("nav a").on('click',function(){
      var href= $(this).attr('href');
      var index = href.indexOf("#");
      href = href.substring(index);

      console.log(href);
      $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000);
    });
});
