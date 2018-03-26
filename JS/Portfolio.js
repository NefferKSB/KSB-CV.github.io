// vanishing navbar
var scrollTimeOut = true,
    lastYPos = 0,
    yPos = 0,
    yPosDelta = 5,
    nav = $('nav.navbar'),
    navHeight = nav.outerHeight(),
    setNavClass = function() {
        scrollTimeOut = false;
        yPos = $(window).scrollTop();

        if(Math.abs(lastYPos - yPos) >= yPosDelta) {
            if (yPos > lastYPos && yPos > navHeight){
                nav.addClass('hide-nav');
            } else {
                nav.removeClass('hide-nav');
            }
            lastYPos = yPos;
        }
    };

$(window).scroll(function(e){
    scrollTimeOut = true;
});

setInterval(function() {
    if (scrollTimeOut) {
        setNavClass();
    }

}, 250);

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

// Removes CSS :focus selector when link is clicked
$(".navbar-inverse .navbar-nav>li>a").on("click", function() {
  $(this).blur();
})

// Highlight site links
var sites = document.getElementsByClassName("siteHover");

for (var i = 0; i < sites.length; i++) {
  sites[i].addEventListener("mouseover", function() {
    $(this).fadeTo(200, .8);
  });
  sites[i].addEventListener("mouseout", function() {
    $(this).fadeTo(200, 1);
  });
}