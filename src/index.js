// G.assignbodyclasses 2.1.1
// Copyright (C) 2013-2018 ConsidoNet Solutions / www.considonet.com
// Released under MIT Licence

/*
VERSION HISTORY
2.1.1 (20181129) @pg
* Ignore files mess cleanup
* Project files cleanup

2.1.0 (20181129) @pg
+ Switched to git (now available on github)
+ Now built with rollup

2.0.0 (20180718) @pg
+ Switched to semver
* Dist package now transpiled from ES6 (compatibility with building environments not transpiling node_modules)
+ Source linted with tslint

1.2.1.20180214 @pg
+ TypeScript declarations

1.2.0.20171106 @pg
* Now acting as a separate npm module

1.1.0 @pg
+ ES6

1.0.0 @pg
+ Initial version

*/
import GEnv from "@considonet/g-env";

document.addEventListener("DOMContentLoaded", () => {

  const hasClass = (el, className) => el.classList ? el.classList.contains(className) : Boolean(el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)")));

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
