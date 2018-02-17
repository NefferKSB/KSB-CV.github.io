var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
   var st = $(this).scrollTop();
   if (Math.abs(lastScrollTop — st) <= delta)
     return;
   // If current position > last position AND scrolled past navbar...
   if (st > lastScrollTop && st > navbarHeight){
     // Scroll Down
     $('nav').removeClass('nav-down').addClass('nav-up');
   }
   else {
     // Scroll Up
     // If did not scroll past the document (possible on mac)...
     if(st + $(window).height() < $(document).height()) {
       $('nav').removeClass('nav-up').addClass('nav-down');
     }
   }
   lastScrollTop = st;
}


// Smooth scrolling
function scrollToSection(event) {
   event.preventDefault();
   var $section = $($(this).attr("href"));
   $("html, body").animate(
     {
       scrollTop: $section.offset().top
     },
     1500
   );
}
$(".scroll-to-section").on("click", scrollToSection);

// Highlight the top nav as scrolling occurs
$("html, body").scrollspy({ target: ".navbar-fixed-top" });
    $('a').each(function () {
       $(this).removeClass('active');
    })
    $(this).addClass('active');

// Close bootstrap's dropdown menu after clicking
$(function() {
    $("div.collapse ul.nav li a").each(function() {
       $(this).on("click", function() {
          var $obj = $($(this).parents(".in")[0]);
          $obj.animate({ height: "1px" }, function() {
          $obj.removeClass("in").addClass("collapse");
          });
       });
    });
});
