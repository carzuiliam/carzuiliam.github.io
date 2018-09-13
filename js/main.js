/*************************** Loading document **************************/

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

/************************** Scrolling document *************************/

$(window).on('scroll', function() {

	//var docViewTop = $(window).scrollTop();
    //var docViewBottom = docViewTop + $(window).height();

    //var elemTop = $('#content-info').offset().top;
    //var elemBottom = elemTop + $('#content-info').height();

    //if ((elemTop <= docViewBottom) && (elemBottom >= docViewTop)) 
    //	alert('foi');

});

/****************************** Functions ******************************/