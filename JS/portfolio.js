// Site Name:    Portfolio
// File:         JS
// Revision:     0.0
// Author:       Kennan Stanley-Bey
// Date:         09-02-18
// Last Update:  11-02-18

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

  $("#topNav").scrollspy(
    {
      target: ".navbar-fixed-top"
    }
  );

$(function() {
  // Close bootstrap's dropdown menu after clicking
  $("div.collapse ul.nav li a").each(function() {
    $(this).on("click", function() {
      var $obj = $($(this).parents(".in")[0]);
      $obj.animate({ height: "1px" }, function() {
        $obj.removeClass("in").addClass("collapse");
      });
    });
  });
});
