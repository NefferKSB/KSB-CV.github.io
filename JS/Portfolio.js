$(function() {
  $("div.collapse ul.nav li a").each(function() {
    $(this).on("click", function() {
      var $obj = $($(this).parents(".show")[0]);
      $obj.animate({height: "1px"}, function(){
        $obj.removeClass("show").addClass("collapse");
      })
    })
  })
})

$('.dropdown').on('show.bs.dropdown', function(event) {
    event.preventDefault();
});
$('.dropdown').on('hide.bs.dropdown-menu', function(event) {
    event.preventDefault();
});


