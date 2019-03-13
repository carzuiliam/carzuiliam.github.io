/***************************** HTML Element ****************************/

class HtmlElement {
    constructor(_element) { this.element = _element; }
}

HtmlElement.prototype.backgroundPosition = function() {     
    return window.getComputedStyle(this.element).getPropertyValue("background-position").split(' ');
}

HtmlElement.prototype.backgroundPosition = function() {     
    return window.getComputedStyle(this.element).getPropertyValue("background-position").split(' ');
}

HtmlElement.prototype.replaceClass = function(_old, _new) {

    var elements = this.element.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.replace(_old, _new);
    }    

    this.element.classList.replace(_old, _new);
}

HtmlElement.prototype.applyParallaxToDiv = function(_rate, _offset) {

    var parallax = _offset - (window.pageYOffset * _rate);

    this.element.style.backgroundPosition = 'center ' + parallax + 'px';
}

HtmlElement.prototype.isOnScreen = function() {

    var div = this.element.getBoundingClientRect();
    var doc = (window.innerHeight || document.documentElement.clientHeight);

    return (div.top <= (doc * .55) || div.bottom <= doc);
}

HtmlElement.prototype.animateSection = function() {

    if (this.isOnScreen()) {

        this.replaceClass('textHidden', 'textShow');
        this.replaceClass('imageHidden', 'imageShow');
        this.replaceClass('iconHiddenTop', 'iconShowTop');
        this.replaceClass('iconHiddenLeft', 'iconShowLeft');

    }
}