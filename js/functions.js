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