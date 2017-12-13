// G.assignbodyclasses 1.2.0.20171106
// Copyright (C) 2013-2017 ConsidoNet Solutions / www.considonet.com
// Released under MIT Licence

/*
VERSION HISTORY
1.2.0.20171106 @pg
* Now acting as a separate npm module

1.1.0 @pg
+ ES6

1.0.0 @pg
+ Initial version

*/
import GEnv from '@considonet/g-env';

document.addEventListener("DOMContentLoaded", () => {

  const hasClass = (el, className) => el.classList ? el.classList.contains(className) : Boolean(el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)')));

  const addClass = (el, className) => {

    if (el.classList) {
      el.classList.add(className);
    } else if (!hasClass(el, className)) {
      el.className += " " + className;
    }

  };

  if(GEnv.isTouchDevice) {
    addClass(document.body, "touchdevice");
  }

  if(GEnv.browserInfo.isAndroidBrowser) {
    addClass(document.body, "androidbrowser");
  }

});
