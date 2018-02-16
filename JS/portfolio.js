
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
