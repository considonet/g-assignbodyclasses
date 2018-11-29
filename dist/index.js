'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var GEnv = _interopDefault(require('@considonet/g-env'));

// G.assignbodyclasses 2.1.1

document.addEventListener("DOMContentLoaded", function () {

  var hasClass = function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : Boolean(el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)")));
  };

  var addClass = function addClass(el, className) {

    if (el.classList) {
      el.classList.add(className);
    } else if (!hasClass(el, className)) {
      el.className += " " + className;
    }
  };

  if (GEnv.isTouchDevice) {
    addClass(document.body, "touchdevice");
  }

  if (GEnv.browserInfo.isAndroidBrowser) {
    addClass(document.body, "androidbrowser");
  }
});
