$(document).ready(function(){
	// search
	$('.menu_right_area ul li i').click(function(){
		$('.mobile_search_box').slideToggle();
		return false
	});
	$('.menu_right_mobile_show ul li i').click(function(){
		$('.mobile_search_box').slideToggle();
		return false
	});
	// Mobile Menu
	// $('.logo a i').click(function(){
	// 	$('.menu ul').slideToggle(1000);

	// 	return false
	// });

	// Banner Carousel
	// $('.banner_carousel').owlCarousel({
	// 	items:1,
	// 	loop:true,
	// 	nav:true,
	// 	dots:true,
	// 	autoplay:true,
	// });
	//Banner Carousel
	$('.student_review_inner_area').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:true,
		autoplay:false,
		navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
		// autoplayTimeout:6000 ,
		// smartSpeed:5000,
	});
	 // fanci box
	 $(".version_video_icon a").fancybox({
	});
	
 
});
// loader
$(window).on("load", function () {
	$("#preloader").fadeOut();
	$("#preloader").delay(500).fadeOut("slow");
	$("body").delay(500).css({ overflow: "visible" });
  });
$('.counter').counterUp({
	delay: 10,
	time: 1000
});
$('.couter_about').counterUp({
	delay: 10,
	time: 2000
});

// scrollup
$(window).on('scroll', function() { if ($(this).scrollTop() > 500) { $('.scrollup').fadeIn(); } else { $('.scrollup').fadeOut(); } }); $('.scrollup').on("click", function() { $("html, body").animate({ scrollTop: 0 }, 800); return false; }); 
function myFunction(x) {
	x.classList.toggle("change");
  }

  