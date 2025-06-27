/***************************** HTML Element ****************************/

class HtmlElement {
  //  Constructor
  constructor(_element) { 
    this.element = _element;
  }

  //  Element behavior
  isOnScreen = () => {
    var div = this.element.getBoundingClientRect();
    var doc = (window.innerHeight || document.documentElement.clientHeight);

    return (div.top <= (doc * .8));
  }

  // DOM actions 
  setHtml = (_innerHtml) => {
    this.element.innerHTML = _innerHtml;
  }

  getCssStyle = () => {
    return this.element.style;
  }
  
  replaceClass = (_old, _new) => {
    var elements = this.element.getElementsByTagName('*');
 
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.replace(_old, _new);
    }    
  
    this.element.classList.replace(_old, _new);
  }

  //  Element events 
  onMouseMove = (_function) => {
    this.element.addEventListener('mousemove', _function);
  }

  onMouseOver = (_function) => {
    this.element.addEventListener('mouseover', _function);
  }

  onMouseOut = (_function) => {
    this.element.addEventListener('mouseout', _function);
  }
}