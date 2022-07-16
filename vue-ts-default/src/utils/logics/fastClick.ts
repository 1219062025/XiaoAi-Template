import { FastClick } from 'fastclick';

export const fastClick = () => {
  if ('addEventListener' in document) {
    document.addEventListener(
      'DOMContentLoaded',
      function () {
        FastClick.attach(document.body);
      },
      false
    );
  }

  FastClick.prototype.focus = function (targetElement: any) {
    let length;
    if (
      targetElement.setSelectionRange &&
      targetElement.type.indexOf('date') !== 0 &&
      targetElement.type !== 'time' &&
      targetElement.type !== 'month'
    ) {
      length = targetElement.value.length;
      targetElement.focus();
      targetElement.setSelectionRange(length, length);
    } else {
      targetElement.focus();
    }
  };
};
