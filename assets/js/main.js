(function ($) {

	$(".hero-area-slider").owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		animateIn: "fadeIn",
		animateOut: "fadeOut",
		mouseDrag: false,
	});

	$(".testimonial-slider").owlCarousel({
		items: 1,
		loop: true,
		dots: true,
	});


	var $grid = $('.portfolio-container').isotope({
		masonry: {
			gutter: 10,
		}
	});
	$('.portfolio-filter').on('click', 'li', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({
			filter: filterValue
		});
	});


	$(".navbar-nav").on("click", "li", function () {
		$(".navbar-nav li").removeClass("active");
		$(this).addClass("active");
	});

	$('.scrl-down').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1000, 'linear');
	});


	var menu = $("nav");
	$(window).scroll(function () {
		if ($(window).scrollTop() < 800) {
			menu.removeClass('fixed-top animated slideInDown');
		} else {
			menu.addClass('fixed-top animated slideInDown');

		}
	});
}(jQuery));
