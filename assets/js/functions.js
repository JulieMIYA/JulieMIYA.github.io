
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
  console.log('tt');
  for (var i = 0; i < timelineSections.length; i++) {
    if (isElementInViewport(timelineSections[i])) {
      timelineSections[i].classList.add("is-showing");
    }
    // else
    //   if(timelineSections[i].classList.contains('is-showing'))
    //     timelineSections[i].classList.remove('is-showing');
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
$(document).ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 2800);
});
// $(window).scroll(function(){
//   var wScroll= $(this).scrollTop();
//   if(wScroll> $('.timeline-section').offset().top- ($(window).height()/1.5)){
//     $('.timeline-section').each(function(i){
//       setTimeout(function(){
//         $('.timeline-section').eq(i).addClass('is-showing');
//       }, 150 * (i+1));
//
//     });
//   }
//
// });
