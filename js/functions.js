/****************************** Functions ******************************/

// Applies the parallax effect in a DIV.
$.fn.applyParallax = function (_rate) {
    
    var offset = - ($(window).scrollTop() * _rate);

    $(this).css('background-position', 'center ' + offset + 'px');

}

// Verifies if the element (DIV) is half visible on screen.
$.fn.isHalfVisible = function () {

    var divTop = $(this).offset().top;
    var divBottom = $(this).offset().top + $(this).height();
    var docMiddle = $(window).scrollTop(); + ($(window).height() * .5);
    var docBottom = $(window).scrollTop() + $(window).height();

    return ((divTop <= docMiddle) || ((divTop > docMiddle) && (divBottom <= docBottom)));

}

// Replaces a class in an element.
$.fn.replaceClass = function (_old, _new) { 

    $(this).removeClass(_old).addClass(_new);

}

// Shows an content if it appears on screen.
$.fn.animateSection = function (_content, _canvas) {

    if ($(_content).parent().isHalfVisible()) {

        $(_content).find('.textHidden').replaceClass('textHidden', 'textShow');
        $(_canvas).find('.imageHidden').replaceClass('imageHidden', 'imageShow');
        $(_canvas).find('.iconHidden').replaceClass('iconHidden', 'iconShow');
    }

}