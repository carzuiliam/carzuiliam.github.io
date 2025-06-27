/****************************** Prototype ******************************/

//  Select an unique element.
const $ = (_element, _position = 0) => {        
  if (_element.charAt(0) === '#') { 
     return new HtmlElement(document.getElementById(_element.substring(1, _element.length)));
  }
  else if (_element.charAt(0) === '.') {
      return new HtmlElement(document.getElementsByClassName(_element.substring(1, _element.length))[_position]);
  }

  return new HtmlElement(document.getElementsByTagName(_element)[_position]);
}

//  Select all of elements.
const $$ = (_element) => {
  if (_element.charAt(0) === '#') {
    return [new HtmlElement(document.getElementById(_element.substring(1)))];
  } else if (_element.charAt(0) === '.') {
    return Array.from(document.getElementsByClassName(_element.substring(1))).map(elem => new HtmlElement(elem));
  }

  return Array.from(document.getElementsByTagName(_element)).map(elem => new HtmlElement(elem));  
};