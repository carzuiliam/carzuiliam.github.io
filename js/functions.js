/****************************** Functions ******************************/

// Verifies if the element (DIV) is half visible on screen.
$.fn.isHalfVisible = function() {

    var divTop = $(this).offset().top;
    var divBottom = $(this).offset().top + $(this).height();
    var docMiddle = $(window).scrollTop(); + ($(window).height() / 2);
    var docBottom = $(window).scrollTop() + $(window).height();

    if ((divTop <= docMiddle) || 
    	((divTop > docMiddle) && (divBottom <= docBottom))) 
    	return true;
    else
    	return false;
}