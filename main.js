/*	= = = = = progressbar = = = =  */
$(window).scroll(function () {
	//	console.log('test');
	var percent = ($(this).scrollTop() * 100) / ($('body').height() - $(this).height());
	$('.progressbar').css('width', percent + '%');
	console.log(percent);
});


/*	= = = = = background on menu = = = =  */
$(function () {
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 70) {
			$('.navbar').addClass('scroll');
		} else {
			$('.navbar').removeClass('scroll');
		}
	})
});

/*	= = = = = smooth scroll = = = =  */
$(function () {
	$("a[href^='#']").on('click', function (e) {
		var target = $($(this).attr('href'));

		if (target.length) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000)
		}
	})
})
