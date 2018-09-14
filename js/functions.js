/****************************** Functions ******************************/

// Replaces a class in an element.
$.fn.replaceClass = function (_old, _new) {	

	$(this).removeClass(_old).addClass(_new);

}

// Verifies if the element (DIV) is half visible on screen.
$.fn.isHalfVisible = function () {

    var divTop = $(this).offset().top;
    var divBottom = $(this).offset().top + $(this).height();
    var docMiddle = $(window).scrollTop(); + ($(window).height() * .5);
    var docBottom = $(window).scrollTop() + $(window).height();

    return ((divTop <= docMiddle) || ((divTop > docMiddle) && (divBottom <= docBottom)));

}

$.fn.showContentIfNeedeed = function () {

    if ($(this).parent().isHalfVisible() && 
        $(this).find('.labelTitle').hasClass('textHidden')) {

            $(this).find('.labelTitle').removeClass('textHidden');         
            $(this).find('.labelContent').removeClass('textHidden');

    }

}

$.fn.applyParallax = function (_rate) {
    
    var offset = - ($(window).scrollTop() * _rate);

    $(this).css('background-position', 'center ' + offset + 'px');

}
