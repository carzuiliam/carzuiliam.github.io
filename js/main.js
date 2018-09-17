/***************************** Static values ***************************/

var helloCanvasY = parseInt($('#hello-canvas').css('background-position').split(' ')[1]) ;
var experienceCanvasY = parseInt($('#experience-canvas').css('background-position').split(' ')[1]) ;

var unespImageY = parseInt($('.unespImage').css('top')) ;
var ufscarImageY = parseInt($('.ufscarImage').css('top')) ;

/*************************** Loading document **************************/

$(this).scrollTop(0);

setTimeout(function () { $('#hello-box').replaceClass('boxHidden', 'boxLoaded'); }, 0);
setTimeout(function () { $('#hello-canvas').replaceClass('imageHidden', 'imageShow'); }, 1000);

setTimeout(function () { 
	$('#hello-box').find('.textHidden').replaceClass('textHidden', 'textShow');
	$('#menu-name').find('.textHidden').replaceClass('textHidden', 'textShow');
	$('#menu-social').find('.imageHidden').replaceClass('imageHidden', 'imageShow');
	$('#contact').find('.textHidden').replaceClass('textHidden', 'textShow'); 
}, 1000);

/************************** Scrolling document *************************/

$(window).on('scroll', function () {

	setTimeout(function() { 
		$('#hello-canvas').applyParallaxToDiv(.2, helloCanvasY); 
		$('#experience-canvas').applyParallaxToDiv(.2, experienceCanvasY); 
	}, 0);
	
	setTimeout(function() { 
		$('.unespImage').applyParallaxToClass(-.04, unespImageY);
		$('.ufscarImage').applyParallaxToClass(.04, ufscarImageY); 
	}, 0);

	setTimeout(function() { 
		$(this).animateSection('#intro-content', '#intro-canvas');
		$(this).animateSection('#education-content', '#education-canvas');
		$(this).animateSection('#experience-content', '#experience-canvas'); 
		$(this).animateSection('#experience-content-a', '#experience-canvas-a'); 
		$(this).animateSection('#experience-content-b', '#experience-canvas-b'); 
		$(this).animateSection('#experience-content-c', '#experience-canvas-c'); 
		$(this).animateSection('#experience-content-d', '#experience-canvas-d'); 
	}, 100);

});