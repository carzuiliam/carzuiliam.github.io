/****************************** Functions ******************************/

// Applies the parallax effect to a DIV.
$.fn.applyParallaxToDiv = function (_rate, _offset) {
    
    var parallax = _offset - ($(window).scrollTop() * _rate);

    $(this).css('background-position', 'center ' + parallax + 'px');

}

// Applies the parallax effect to an element.
$.fn.applyParallaxToClass = function (_rate, _offset) {
    
    var parallax = _offset - ($(window).scrollTop() * _rate);

    $(this).css('top', parallax + 'px');

}

// Verifies if the element (DIV) is visible on screen.
$.fn.isHalfVisible = function () {

    var divTop = $(this).offset().top;
    var divBottom = $(this).offset().top + $(this).height();
    var docMiddle = $(window).scrollTop() + ($(window).height() * .7);

    return (divTop <= docMiddle) ;

}

// Replaces a class in an element.
$.fn.replaceClass = function (_old, _new) { 

    $(this).removeClass(_old).addClass(_new);

}

// Shows an content if it appears on screen.
$.fn.animateSection = function (_content, _canvas = null) {

    if ($(_content).isHalfVisible()) {

        $(_content).find('.textHidden').replaceClass('textHidden', 'textShow');
        
        if (_canvas != null) {
        
            $(_canvas).find('.textHidden').replaceClass('textHidden', 'textShow');
            $(_canvas).find('.imageHidden').replaceClass('imageHidden', 'imageShow');
            $(_canvas).find('.iconHiddenTop').replaceClass('iconHiddenTop', 'iconShowTop');
            $(_canvas).find('.iconHiddenLeft').replaceClass('iconHiddenLeft', 'iconShowLeft');
   
        }
    }

}