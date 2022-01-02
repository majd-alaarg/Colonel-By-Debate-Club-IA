$(function () {
	// PROJECT SLIDE
	$('#project-slide').owlCarousel({
		loop: true,
		center: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: false,
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
AOS.refresh();