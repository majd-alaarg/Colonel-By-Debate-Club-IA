//OWL SLIDESHOW SCRIPT FOR HOMEPAGE
$(function () {
	// PROJECT SLIDE
	$('#project-slide').owlCarousel({
		loop: true,
		center: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: 2000,
		easeInOutBounce: true,
		autoplay: true,
		margin: 30,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			}
		}
	});

});


//SLIDESHOW SCRIPT FOR EDUCATION PAGE
var slideEl = $(".slide--parent");

slideEl.flickity({
	accessibility: true,
	imagesLoaded: true,
	wrapAround: true,
	autoPlay: false,
	pauseAutoPlayOnHover: true,
});



AOS.refresh();
