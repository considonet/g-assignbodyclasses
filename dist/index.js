"use strict";

var _gEnv = require("@considonet/g-env");

var _gEnv2 = _interopRequireDefault(_gEnv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  if (_gEnv2.default.isTouchDevice) {
    addClass(document.body, "touchdevice");
  }

  if (_gEnv2.default.browserInfo.isAndroidBrowser) {
    addClass(document.body, "androidbrowser");
  }
}); // G.assignbodyclasses 2.0.0
// Copyright (C) 2013-2018 ConsidoNet Solutions / www.considonet.com
// Released under MIT Licence

/*
VERSION HISTORY
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