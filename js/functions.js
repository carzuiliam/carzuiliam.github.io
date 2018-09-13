/****************************** Functions ******************************/

// Verifies if the element (DIV) is half visible on screen.
$.fn.isHalfVisible = function() {

	var documentTop = $(window).scrollTop();
    var documentBottom = documentTop + $(window).height();

    var divTop = $(this).offset().top;
    var divBottom = divTop + $(this).height();    

    if ((divTop <= documentBottom) && (divBottom >= documentTop)) 
    	return true;
    else
    	return false;
}