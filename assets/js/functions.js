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
function showTimeLineSection() {
  for (var i = 0; i < timelineSections.length; i++) {
    if (isElementInViewport(timelineSections[i])) {
      timelineSections[i].classList.add("is-showing");
    }
  }
}

function setNavbarPosition(wScroll){
    if(wScroll > $('header').height())
        $('.navbar').addClass('fixed');
    else
        $('.navbar').removeClass('fixed');
}

function toggleActive(wScroll){
    wScroll+= $('.navbar').height();
    $('.nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= wScroll &&
            refElement.position().top + refElement.outerHeight() > wScroll)
        {
            //console.log(refElement.height());
            // var scale = currLink.width()/$(".sliding-indicator").width();
            // $(".sliding-indicator").css("transform", "scaleX("+scale+")");
            $('.nav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


// window.addEventListener("load", callbackFunc);
// window.addEventListener("scroll", callbackFunc);
$(document).ready(function() {

    $(".nav a").on('click',function(e){
        e.preventDefault();
        var href= $(this).attr('href');
        var index = href.indexOf("#");
        href = href.substring(index);
        $('html, body').animate({
            scrollTop: $(href).offset().top - $('.navbar').height()
        }, 1000);
    });

    $(window).scroll(function(){
        showTimeLineSection();
        var wScroll= $(this).scrollTop();
        setNavbarPosition(wScroll);
        toggleActive(wScroll);
    });
});
