/*************************** Loading document **************************/

// Animates the "hello" rectangle...
setTimeout(function () { $('#content-hello-box').replaceClass('boxHidden', 'boxLoaded'); }, 0);

// ...the right image...
setTimeout(function () { $('#content-hello-image').replaceClass('imageHidden', 'imageShow'); }, 1000);

// ...and the labels.
setTimeout(function () {	
	$('#header-menu').find('.barLeft').replaceClass('textHidden', 'textShow');
	$('#header-menu').find('img').replaceClass('imageHidden', 'imageShow');
	$('#footer-contact').find('.barLeft').replaceClass('textHidden', 'textShow');
	$('#footer-contact').find('.barRight').replaceClass('textHidden', 'textShow');
	$('#content-hello-box').find('.boxTitle').replaceClass('textHidden', 'textShow');
}, 1000);

/************************** Scrolling document *************************/

$(window).on('scroll', function () {

	// Applies parallax effect to the images.
	setTimeout(function() { $('#content-hello-image').applyParallax(.3); }, 0);
	
	// Shows each content block if needed.
	setTimeout(function() { $('#content-intro-left').showContentIfNeedeed(); }, 100);
	setTimeout(function() { $('#content-study-right').showContentIfNeedeed(); }, 100);

});