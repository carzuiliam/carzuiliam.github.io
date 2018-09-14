/*************************** Loading document **************************/

// Animates the blue rectangle...
setTimeout(function() {
	$('#content-hello-box').removeClass('boxHidden').addClass('boxLoaded');
}, 0);

// ...shows the "hello" message...
setTimeout(function() {
	$('#content-hello-box').find('.boxTitle').removeClass('textHidden').addClass('textShow');
}, 1000);

// ...and the "hello" image.
setTimeout(function() {
	$('#header-menu').removeClass('textHidden').addClass('textShow');
	$('#content-hello-box').removeClass('boxHidden').addClass('boxLoaded');
	$('#content-hello-image').removeClass('imageHidden').addClass('imageShow');
}, 1000);

/************************** Scrolling document *************************/

$(window).on('scroll', function() {

	// Shows the intro when its DIV appears.
	if ($('#content-intro').isHalfVisible() && 
		$('#content-intro-left').find('.labelTitle').hasClass('textHidden')) {

			setTimeout(function () {
			$('#content-intro-left').find('.labelTitle').removeClass('textHidden');			
			}, 100);

			setTimeout(function () {
				$('#content-intro-left').find('.labelContent').removeClass('textHidden');
			}, 100);
	}

	// Shows the study area when its DIV appears.
	if ($('#content-study').isHalfVisible() && 
		$('#content-study-right').find('.labelTitle').hasClass('textHidden')) {

			setTimeout(function () {
			$('#content-study-right').find('.labelTitle').removeClass('textHidden');			
			}, 100);

			setTimeout(function () {
				$('#content-study-right').find('.labelContent').removeClass('textHidden');
			}, 100);
	}

});