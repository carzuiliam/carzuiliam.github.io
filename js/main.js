/***************************** Static values ***************************/

var helloCvsY = parseInt($('#hello-banner').css('background-position').split(' ')[1]);
var exprnCvsY = parseInt($('#experience-banner').css('background-position').split(' ')[1]);
var awrdsCvsY = parseInt($('#awards-banner').css('background-position').split(' ')[1]);
var cntctCvsY = parseInt($('#contact-banner').css('background-position').split(' ')[1]);

var unespImgY = parseInt($('.unespImage').css('top'));
var ufscrImgY = parseInt($('.ufscarImage').css('top'));

/*************************** Loading document **************************/

$(document).ready(function () {

	$(this).scrollTop(0);

	setTimeout(function () { $('#hello-box').replaceClass('boxHidden', 'boxLoaded'); }, 0);
	setTimeout(function () { $('#hello-banner').replaceClass('imageHidden', 'imageShow'); }, 1000);

	setTimeout(function () { 
		$('#hello-box').find('.textHidden').replaceClass('textHidden', 'textShow');
		$('#menu-name').find('.textHidden').replaceClass('textHidden', 'textShow');
		$('#menu-social').find('.imageHidden').replaceClass('imageHidden', 'imageShow');
		$('#about-info').find('.textHidden').replaceClass('textHidden', 'textShow');
		$('#about-validation').find('.imageHidden').replaceClass('imageHidden', 'imageShow'); 
	}, 1000);

});

/************************** Scrolling document *************************/

$(window).on('scroll', function () {

	setTimeout(function() {
		$('#hello-banner').applyParallaxToDiv(.2, helloCvsY); 
		$('#experience-banner').applyParallaxToDiv(.2, exprnCvsY); 
		$('#awards-banner').applyParallaxToDiv(.2, awrdsCvsY);
		$('#contact-banner').applyParallaxToDiv(.2, cntctCvsY);
	}, 0);

	setTimeout(function() { 
		$(this).animateSection('#experience-title', null);
		$(this).animateSection('#intro-content', '#intro-canvas');
		$(this).animateSection('#education-content', '#education-canvas');
		$(this).animateSection('#experience-content-a', '#experience-canvas-a');
		$(this).animateSection('#experience-content-b', '#experience-canvas-b');
		$(this).animateSection('#experience-content-c', '#experience-canvas-c');
		$(this).animateSection('#experience-content-d', '#experience-canvas-d');
		$(this).animateSection('#awards-content', '#awards-canvas');
		$(this).animateSection('#skills-content', '#skills-canvas');
		$(this).animateSection('#contact-content', '#contact-canvas');
	}, 100);

});