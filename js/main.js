/***************************** Static values ***************************/

var helloCvsY = $('#hello-banner').getBackgroundPosition()[1];
var exprnCvsY = $('#experience-banner').getBackgroundPosition()[1];
var awrdsCvsY = $('#certifications-banner').getBackgroundPosition()[1];
var cntctCvsY = $('#contact-banner').getBackgroundPosition()[1];

/*************************** Loading document **************************/

window.onload = function () {

	document.documentElement.scrollTop = 0;

	setTimeout(function () { $('#hello-box').replaceClass('boxHidden', 'boxShow'); }, 0);
	setTimeout(function () { $('#hello-banner').replaceClass('imageHidden', 'imageShow'); }, 1000);

	setTimeout(function () {
		$('#hello-box').replaceClass('textHidden', 'textShow');
		$('#menu-name').replaceClass('textHidden', 'textShow');
		$('#menu-social').replaceClass('iconHidden', 'iconShow');
		$('#about-info').replaceClass('textHidden', 'textShow');
		$('#about-validation').replaceClass('imageHidden', 'imageShow'); 
	}, 1000);

	$('.currentYear').setInnerText(new Date().getFullYear());	
};

/************************** Scrolling document *************************/

window.onscroll = function () {

	setTimeout(function() {
		$('#hello-banner').applyParallaxToDiv(.15, parseInt(helloCvsY));
		$('#experience-banner').applyParallaxToDiv(.15, parseInt(exprnCvsY)); 
		$('#certifications-banner').applyParallaxToDiv(.15, parseInt(awrdsCvsY));
		$('#contact-banner').applyParallaxToDiv(.15, parseInt(cntctCvsY));
	}, 0);

	setTimeout(function() { 
		$('#intro-content').animateSection();
		$('#intro-canvas').animateSection();
		$('#education-title').animateSection();
		$('#education-section-a').animateSection();
		$('#education-section-b').animateSection();
		$('#education-canvas').animateSection();
		$('#experience-title').animateSection();
		$('#experience-section-a').animateSection();
		$('#experience-canvas-a').animateSection();
		$('#experience-section-b').animateSection();
		$('#experience-canvas-b').animateSection();
		$('#experience-section-c').animateSection();
		$('#experience-canvas-c').animateSection();
		$('#experience-section-d').animateSection();
		$('#experience-canvas-d').animateSection();
		$('#experience-section-e').animateSection();
		$('#experience-canvas-e').animateSection();
		$('#experience-section-f').animateSection();
		$('#experience-canvas-f').animateSection();
		$('#certifications-title').animateSection();
		$('#certifications-section').animateSection();
		$('#certifications-canvas').animateSection();
		$('#skills-content').animateSection();
		$('#skills-canvas').animateSection();
		$('#contact-content').animateSection();
		$('#contact-canvas').animateSection();
	}, 100);

};