/*global $ , window, baguetteBox, AOS, document*/
/* Carousel Fit screen */
/*if ($(window).width() >= 1300) {
    $(".carousel, .carousel-item").height($(window).height() - $(".header").height());
}*/

if ($(window).width() >= 500) {
    var owl = $('.testimonials .owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });
}
if ($(window).width() >= 500) {
    var clients = $('.clients .owl-carousel');
    clients.owlCarousel({
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });
}else{
    var clients = $('.clients .owl-carousel');
    clients.owlCarousel({
        items:2,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });
}

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});

/* Navbar Settings */
$(document).ready(function () {
    "use strict";
    var scrollLink = $('.scroll');
  
    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top - 10
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 10;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });

    });
  
});


// ScrollUp Button
$(document).on("scroll", function (e) {
    "use strict";
    var x = $(document).scrollTop();
	if (x > 700) {
		$(".scrollUp").fadeIn(1000);
	} else {
		$(".scrollUp").fadeOut(1000);
	}
});
$(".scrollUp").on("click", function () {
    "use strict";
    $("html, body").animate({
        scrollTop: 0
    }, 2000);
});