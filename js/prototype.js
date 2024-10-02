/****************************** Prototype ******************************/

$ = (_element, _position = 0) => {        
  if (_element.charAt(0) === '#') { 
     return new HtmlElement(document.getElementById(_element.substring(1, _element.length)));
  }
  else if (_element.charAt(0) === '.') {
      return new HtmlElement(document.getElementsByClassName(_element.substring(1, _element.length))[_position]);
  }

  return new HtmlElement(document.getElementsByTagName(_element)[_position]);
}