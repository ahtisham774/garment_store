$(function() {
	$('.burger').on('click', function(event) {
		event.preventDefault();
		// $('.navigation').toggleClass('navigation_active');

		if ($('.navigation').css('display') === 'none') {
			$('.navigation').stop().slideDown('400');
		} else {
			$('.navigation').stop().slideUp('400');
		}
	});

})