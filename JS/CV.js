// Highlight section title on linkk click
var links = document.getElementsByClassName("nav-link");
var sections = document.querySelectorAll("h3");
var nodeIndex;

for(var i = 0; i < links.length; i++) {
	(function(index){
		links[i].onclick = function(){
			nodeIndex = index;
			clear();
			highlight(nodeIndex);
		}
	})(i);
};

function clear() {
	for(var i = 0; i < sections.length; i++) {
		sections[i].classList.remove("selected");
	}
};

function highlight(nodeIndex) {
	sections[nodeIndex].classList.add("selected");
};

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
};
$(".scroll-to-section").on("click", scrollToSection);

// Scroll to Top Button and scroll to top on refresh
window.onbeforeunload = function(){
    window.scrollTo(0,0);
};
jQuery(document).ready(function() {
    var offset = 250;
    var duration = 1000;
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
        jQuery("#back-to-top").fadeIn(duration);
    }
    else {
        jQuery("#back-to-top").fadeOut(duration);
    }
});

jQuery("#back-to-top").click(function(event) {
	clear();
    event.preventDefault();
    jQuery("html, body").animate({scrollTop: 0}, duration);
    return false;
    })
});