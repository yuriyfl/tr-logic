$(document).ready(function() {
	// ----------------- aside function -----------------
	$('.btn-aside_l').click(function() {
		$('.aside_left').stop().animate({width: 'toggle', opacity: 'toggle'}, 400);
		});
	$('.btn-aside_r').click(function() {
		$('.aside_right').stop().animate({width: 'toggle', opacity: 'toggle'}, 400);
		});
	//----------------- sticky-block function -----------------
	var offset = $('.content-sticky').offset();
	var topPadding = $('.header').height();
	$(window).scroll(function() {
		if ($(window).scrollTop() > offset.top) {
			$('.content-sticky').stop(true, true).animate({marginTop: $(window).scrollTop() - offset.top + topPadding});
			} else {
			$('.content-sticky').stop(true, true).animate({marginTop: 0});
			}
		});
	});