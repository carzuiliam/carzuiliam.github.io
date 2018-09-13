/*************************** Loading document **************************/

// Animates the blue rectangle...
setTimeout(function() {
	$('#content-hello-box').removeClass('boxHidden').addClass('boxLoaded');
}, 0);

// ...shows the "hello" message...
setTimeout(function() {
	$('#content-hello-box').find('.boxTitle').removeClass('textHidden').addClass('textAlpha');
}, 1000);

// ...and the "hello" image.
setTimeout(function() {
	$('#content-hello-box').removeClass('boxHidden').addClass('boxLoaded');
	$('#content-hello-text').removeClass('textHidden').addClass('textShow');
}, 1000);

/************************** Scrolling document *************************/

$(window).on('scroll', function() {

	setTimeout(function () {
		if ($('#content-info').hasClass('unloaded') && $('#content-info').isHalfVisible()) {
			$('#content-info').removeClass('unloaded');
			//TODO
		}
	}, 1000);

});