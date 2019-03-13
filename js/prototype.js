/****************************** Prototype ******************************/

function $(_element) {
        
    if (_element.charAt(0) === '#') { 
       return new HtmlElement(document.getElementById(_element.substring(1, _element.length)));
    }
    else if (_element.charAt(0) === '.') {
        return new HtmlElement(document.getElementByClassName(_element.substring(1, _element.length)));
    }

    return null;
}