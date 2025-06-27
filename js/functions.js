/*************************** Custom Functions **************************/

const runTypingEffect = (_htmlElement, _str) => {
  let n = 0;

  let timer = setInterval(() => {
    n = n + 1;    
    _htmlElement.setHtml(_str.slice(0, n) + '|');

    if (n === _str.length) {
      clearInterval(timer);

      _htmlElement.setHtml(_str + '&nbsp;');
      n = 0;
      
      setInterval(() => {  
        if (n === 0) {
          _htmlElement.setHtml(_str + '|');
          n = 1;
        } else {
          _htmlElement.setHtml(_str + '&nbsp;');
          n = 0;
        };
      }, 500);
    };
  }, 60);
}

const buildToolTip = (_text, _event) => {
  const tooltip = document.createElement('div');

  tooltip.className = 'tooltipPopup';
  tooltip.innerText = _text;
  tooltip.style.top = `${_event.pageY + 10}px`;
  tooltip.style.left = `${_event.pageX + 10}px`;
  
  document.body.appendChild(tooltip);

  requestAnimationFrame(() => {
    tooltip.style.opacity = '1';
  });

  return {
    remove() {
      tooltip.style.opacity = '0';

      setTimeout(() => {
        if (tooltip.parentNode) tooltip.parentNode.removeChild(tooltip);
      }, 200);
    }
  };
}
