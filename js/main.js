/***************************** Static values ***************************/

var helloCanvasY = parseInt($('#hello-canvas').css('background-position').split(' ')[1]) ;

var unespImageY = parseInt($('.unespImage').css('top')) ;
var ufscarImageY = parseInt($('.ufscarImage').css('top')) ;

/*************************** Loading document **************************/

$(this).scrollTop(0);

setTimeout(function () { $('#hello-box').replaceClass('boxHidden', 'boxLoaded'); }, 0);
setTimeout(function () { $('#hello-canvas').replaceClass('imageHidden', 'imageShow'); }, 1000);

setTimeout(function () { $('#hello-box').find('.textHidden').replaceClass('textHidden', 'textShow'); }, 1000);
setTimeout(function () { $('#menu-name').find('.textHidden').replaceClass('textHidden', 'textShow'); }, 1000);
setTimeout(function () { $('#menu-social').find('.imageHidden').replaceClass('imageHidden', 'imageShow'); }, 1000);
setTimeout(function () { $('#contact').find('.textHidden').replaceClass('textHidden', 'textShow'); }, 1000);

/************************** Scrolling document *************************/

$(window).on('scroll', function () {

	setTimeout(function() { $('#hello-canvas').applyParallaxToDiv(.2, helloCanvasY); }, 0);
	
	setTimeout(function() { $('.unespImage').applyParallaxToClass(-.03, unespImageY); }, 0);
	setTimeout(function() { $('.ufscarImage').applyParallaxToClass(.03, ufscarImageY); }, 0);

	setTimeout(function() { $(this).animateSection('#intro-content', '#intro-canvas'); }, 100);
	setTimeout(function() { $(this).animateSection('#education-content', '#education-canvas'); }, 100);

});