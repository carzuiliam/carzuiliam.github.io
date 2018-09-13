/******* Loading Document ******/
$(document).ready(function() {

	// Animates the blue rectangle...
	setTimeout(function() {
		$('#content-hello-left').removeClass('boxHidden').addClass('boxLoaded');
	}, 0);

	// ...shows the "hello" message.
	setTimeout(function() {
		$('#content-hello-left').find('.boxTitle').removeClass('textHidden').addClass('textShow');
	}, 1000);

});

/** Loads DIV's on scroll down */
$(window).on('scroll', function() {

	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();

	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
		alert('Testing...');
	}

});