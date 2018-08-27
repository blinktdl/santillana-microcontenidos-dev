

(function (blink) {
	'use strict';

	var SantillanaMicrocontenidosDev = function() {
		blink.theme.styles.basic.apply(this, arguments);
	}

	SantillanaMicrocontenidosDev.prototype = {
		// bodyClassName: 'santillana-microcontenidos-dev',
		// ckEditorStyles: {
		// 	name: 'santillana-microcontenidos-dev',
		// 	styles: [
		// 		{ name: 'Énfasis', element: 'span', attributes: { 'class': 'bck-enfasis'} }
		// 	]
		// },

		init: function() {
			var parent = blink.theme.styles.basic.prototype;
			parent.init.call(this);

			// Ejemplo carga de datos de la clase en una actividad.
			blink.getActivity(idcurso, idclase).done((function(data) {
				this.onActivityDataLoaded(data);
			}).bind(this));

			// Ejemplo carga de datos del libro en una actividad.
			blink.getCourse(idcurso).done((function(data) {
				this.onCourseDataLoaded(data);
			}).bind(this));

		},

		onActivityDataLoaded: function(data) {
			console.log('onActivityDataLoaded:');
			console.log(JSON.parse(JSON.stringify(data)));
			// console.log(JSON.stringify(data));
		},

		onCourseDataLoaded: function(data) {
			console.log('onCourseDataLoaded:');
			console.log(JSON.parse(JSON.stringify(data)));
			// console.log(data);
			// console.log(JSON.stringify(data));
			SantillanaMicrocontenidosStyle.init(data);
		}
	};

	SantillanaMicrocontenidosDev.prototype = _.extend({}, new blink.theme.styles.basic(), SantillanaMicrocontenidosDev.prototype);

	blink.theme.styles['santillana-microcontenidos-dev'] = SantillanaMicrocontenidosDev;

	// blink.events.on('loadSeguimientoCurso', function() {
	// 	// Ejemplo carga de datos del libro en el toc del curso.
	// 	blink.getCourse(idcurso).done(function(data) {
	// 		var style = new SantillanaMicrocontenidosDev;
	// 		style.onCourseDataLoaded(data);
	// 	});
	// });
	blink.events.on('digitalbook:bpdfloaded', function() {
		// Ejemplo carga de datos del curso desde un libro digital.
		blink.getCourse(idcurso).done(function(data) {
				var style = new SantillanaMicrocontenidosDev;
				style.onCourseDataLoaded(data);
		});
	});


	

})(blink);


(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["_"], factory);
	else if(typeof exports === 'object')
		exports["SantillanaMicrocontenidosStyle"] = factory(require("lodash"));
	else
		root["SantillanaMicrocontenidosStyle"] = factory(root["_"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__32__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ({

/***/ 32:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__32__;

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(32);


/***/ })

/******/ });
});(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SantillanaMicrocontenidosStyle"] = factory();
	else
		root["SantillanaMicrocontenidosStyle"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var config={dev:true,//window.location.hash == '#dev',
// velocityFast: 100,
velocity:200,velocitySlow:400,velocityTransitions:600,easingTransitions:'easeOutCubic'};exports.default=config;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// ChildNode.remove
(function () {
  "use strict";

  if(!("remove" in Element.prototype)){
    Element.prototype.remove = function(){
      if(this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }
})();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var responsiveStatus=function(){function responsiveStatus(sizeChangedFunction){_classCallCheck(this,responsiveStatus);this.state={size:null};this.sizeChanged=sizeChangedFunction;window.addEventListener('resize',this.check.bind(this),false);this.check();}_createClass(responsiveStatus,[{key:'check',value:function check(){var width=window.innerWidth;var size=void 0;if(width<768){size='mobile';}else if(width<1024){size='tablet-portrait';}else if(width<=1168){size='tablet-landscape';}else{size='desktop';}if(size!=this.state.size){this.state.size=size;this.sizeChanged(size);}}},{key:'getSize',value:function getSize(){return this.state.size;}}]);return responsiveStatus;}();exports.default=responsiveStatus;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/tiny-slider/src/helpers/keys.js
var keys = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/tiny-slider/src/helpers/childNode.remove.js
var childNode_remove = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/raf.js
var raf_win = window;

var raf = raf_win.requestAnimationFrame
  || raf_win.webkitRequestAnimationFrame
  || raf_win.mozRequestAnimationFrame
  || raf_win.msRequestAnimationFrame
  || function(cb) { return setTimeout(cb, 16); };

// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/caf.js
var caf_win = window;

var caf = caf_win.cancelAnimationFrame
  || caf_win.mozCancelAnimationFrame
  || function(id){ clearTimeout(id); };

// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/extend.js
function extend() {
  var obj, name, copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;

  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];

        if (target === copy) {
          continue;
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/checkStorageValue.js
function checkStorageValue (value) {
  return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/setLocalStorage.js
function setLocalStorage(storage, key, value, access) {
  if (access) { storage.setItem(key, value); }
  return value;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/getSlideId.js
function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;
  
  return 'tns' + window.tnsId;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/getBody.js
function getBody () {
  var doc = document,
      body = doc.body;

  if (!body) {
    body = doc.createElement('body');
    body.fake = true;
  }

  return body;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/docElement.js
var docElement = document.documentElement;
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/setFakeBody.js


function setFakeBody (body) {
  var docOverflow = '';
  if (body.fake) {
    docOverflow = docElement.style.overflow;
    //avoid crashing IE8, if background image is used
    body.style.background = '';
    //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
    body.style.overflow = docElement.style.overflow = 'hidden';
    docElement.appendChild(body);
  }

  return docOverflow;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/resetFakeBody.js



function resetFakeBody (body, docOverflow) {
  if (body.fake) {
    body.remove();
    docElement.style.overflow = docOverflow;
    // Trigger layout so kinetic scrolling isn't disabled in iOS6+
    // eslint-disable-next-line
    docElement.offsetHeight;
  }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/calc.js
// get css-calc 
// @return - false | calc | -webkit-calc | -moz-calc
// @usage - var calc = getCalc(); 





function calc() {
  var doc = document, 
      body = getBody(),
      docOverflow = setFakeBody(body),
      div = doc.createElement('div'), 
      result = false;

  body.appendChild(div);
  try {
    var str = '(10px * 10)',
        vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
        val;
    for (var i = 0; i < 3; i++) {
      val = vals[i];
      div.style.width = val;
      if (div.offsetWidth === 100) { 
        result = val.replace(str, ''); 
        break;
      }
    }
  } catch (e) {}
  
  body.fake ? resetFakeBody(body, docOverflow) : div.remove();

  return result;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/percentageLayout.js
// get subpixel support value
// @return - boolean





function percentageLayout() {
  // check subpixel layout supporting
  var doc = document,
      body = getBody(),
      docOverflow = setFakeBody(body),
      wrapper = doc.createElement('div'),
      outer = doc.createElement('div'),
      str = '',
      count = 70,
      perPage = 3,
      supported = false;

  wrapper.className = "tns-t-subp2";
  outer.className = "tns-t-ct";

  for (var i = 0; i < count; i++) {
    str += '<div></div>';
  }

  outer.innerHTML = str;
  wrapper.appendChild(outer);
  body.appendChild(wrapper);

  supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;

  body.fake ? resetFakeBody(body, docOverflow) : wrapper.remove();

  return supported;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/mediaquerySupport.js





function mediaquerySupport () {
  var doc = document,
      body = getBody(),
      docOverflow = setFakeBody(body),
      div = doc.createElement('div'),
      style = doc.createElement('style'),
      rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
      position;

  style.type = 'text/css';
  div.className = 'tns-mq-test';

  body.appendChild(style);
  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }

  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];

  body.fake ? resetFakeBody(body, docOverflow) : div.remove();

  return position === "absolute";
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/createStyleSheet.js
// create and append style sheet
function createStyleSheet (media) {
  // Create the <style> tag
  var style = document.createElement("style");
  // style.setAttribute("type", "text/css");

  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")
  if (media) { style.setAttribute("media", media); }

  // WebKit hack :(
  // style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.querySelector('head').appendChild(style);

  return style.sheet ? style.sheet : style.styleSheet;
};
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/addCSSRule.js
// cross browsers addRule method

function addCSSRule(sheet, selector, rules, index) {
  // return raf(function() {
    'insertRule' in sheet ?
      sheet.insertRule(selector + '{' + rules + '}', index) :
      sheet.addRule(selector, rules, index);
  // });
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/removeCSSRule.js
// cross browsers addRule method

function removeCSSRule(sheet, index) {
  // return raf(function() {
    'deleteRule' in sheet ?
      sheet.deleteRule(index) :
      sheet.removeRule(index);
  // });
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/getCssRulesLength.js
function getCssRulesLength(sheet) {
  var rule = ('insertRule' in sheet) ? sheet.cssRules : sheet.rules;
  return rule.length;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/toDegree.js
function toDegree (y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/getTouchDirection.js
function getTouchDirection(angle, range) {
  var direction = false,
      gap = Math.abs(90 - Math.abs(angle));
      
  if (gap >= 90 - range) {
    direction = 'horizontal';
  } else if (gap <= range) {
    direction = 'vertical';
  }

  return direction;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/forEachNodeList.js
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function forEachNodeList (arr, callback, scope) {
  for (var i = 0, l = arr.length; i < l; i++) {
    callback.call(scope, arr[i], i);
  }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/classListSupport.js
var classListSupport = 'classList' in document.createElement('_');
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/hasClass.js


var hasClass = classListSupport ?
    function (el, str) { return el.classList.contains(str); } :
    function (el, str) { return el.className.indexOf(str) >= 0; };


// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/addClass.js

var addClass = classListSupport ?
    function (el, str) {
      if (!hasClass(el,  str)) { el.classList.add(str); }
    } :
    function (el, str) {
      if (!hasClass(el,  str)) { el.className += ' ' + str; }
    };


// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/removeClass.js

var removeClass = classListSupport ?
    function (el, str) {
      if (hasClass(el,  str)) { el.classList.remove(str); }
    } :
    function (el, str) {
      if (hasClass(el, str)) { el.className = el.className.replace(str, ''); }
    };


// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/hasAttr.js
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/getAttr.js
function getAttr(el, attr) {
  return el.getAttribute(attr);
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/isNodeList.js
function isNodeList(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined"; 
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/setAttrs.js


function setAttrs(els, attrs) {
  els = (isNodeList(els) || els instanceof Array) ? els : [els];
  if (Object.prototype.toString.call(attrs) !== '[object Object]') { return; }

  for (var i = els.length; i--;) {
    for(var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/removeAttrs.js


function removeAttrs(els, attrs) {
  els = (isNodeList(els) || els instanceof Array) ? els : [els];
  attrs = (attrs instanceof Array) ? attrs : [attrs];

  var attrLength = attrs.length;
  for (var i = els.length; i--;) {
    for (var j = attrLength; j--;) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/removeElementStyles.js
function removeElementStyles(el) {
  el.style.cssText = '';
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js
function arrayFromNodeList (nl) {
  var arr = [];
  for (var i = 0, l = nl.length; i < l; i++) {
    arr.push(nl[i]);
  }
  return arr;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/hideElement.js



function hideElement(el) {
  if (!hasAttr(el, 'hidden')) {
    setAttrs(el, {'hidden': ''});
  }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/showElement.js



function showElement(el) {
  if (hasAttr(el, 'hidden')) {
    removeAttrs(el, 'hidden');
  }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/isVisible.js
function isVisible(el) {
  return el.offsetWidth > 0 && el.offsetHeight > 0;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/whichProperty.js
function whichProperty(props){
  if (typeof props === 'string') {
    var arr = [props],
        Props = props.charAt(0).toUpperCase() + props.substr(1),
        prefixes = ['Webkit', 'Moz', 'ms', 'O'];
        
    prefixes.forEach(function(prefix) {
      if (prefix !== 'ms' || props === 'transform') {
        arr.push(prefix + Props);
      }
    });

    props = arr;
  }

  var el = document.createElement('fakeelement'),
      len = props.length;
  for(var i = 0; i < props.length; i++){
    var prop = props[i];
    if( el.style[prop] !== undefined ){ return prop; }
  }

  return false; // explicit for ie9-
}

// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/has3D.js





function has3D(tf){
  if (!tf) { return false; }
  if (!window.getComputedStyle) { return false; }
  
  var doc = document,
      body = getBody(),
      docOverflow = setFakeBody(body),
      el = doc.createElement('p'),
      has3d,
      cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';

  cssTF += 'transform';

  // Add it to the body to get the computed style
  body.insertBefore(el, null);

  el.style[tf] = 'translate3d(1px,1px,1px)';
  has3d = window.getComputedStyle(el).getPropertyValue(cssTF);

  body.fake ? resetFakeBody(body, docOverflow) : el.remove();

  return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
}

// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/getEndProperty.js
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
function getEndProperty(propIn, propOut) {
  var endProp = false;
  if (/^Webkit/.test(propIn)) {
    endProp = 'webkit' + propOut + 'End';
  } else if (/^O/.test(propIn)) {
    endProp = 'o' + propOut + 'End';
  } else if (propIn) {
    endProp = propOut.toLowerCase() + 'end';
  }
  return endProp;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/passiveOption.js
// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}
var passiveOption = supportsPassive ? { passive: true } : false;
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/addEvents.js


function addEvents(el, obj) {
  for (var prop in obj) {
    var option = (prop === 'touchstart' || prop === 'touchmove') ? passiveOption : false;
    el.addEventListener(prop, obj[prop], option);
  }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/removeEvents.js


function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? passiveOption : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/events.js
function Events() {
  return {
    topics: {},
    on: function (eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function (eventName, data) {
      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function(fn) {
          fn(data);
        });
      }
    }
  };
};
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/jsTransform.js
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10),
      unit = (to.indexOf('%') >= 0) ? '%' : 'px',
      to = to.replace(unit, ''),
      from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
      positionTick = (to - from) / duration * tick,
      running;

  setTimeout(moveElement, tick);
  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + unit + postfix;
    if (duration > 0) { 
      setTimeout(moveElement, tick); 
    } else {
      callback();
    }
  }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/tiny-slider.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tns", function() { return tns; });
// Version: 2.8.1

// helper functions






































var tns = function(options) {
  options = extend({
    container: '.slider',
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    autoWidth: false,
    viewportMax: false,
    slideBy: 1,
    controls: true,
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    prevButton: false,
    nextButton: false,
    nav: true,
    navContainer: false,
    navAsThumbnails: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    // animateIn: 'tns-fadeIn',
    // animateOut: 'tns-fadeOut',
    // animateNormal: 'tns-normal',
    // animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    touch: true,
    mouseDrag: false,
    swipeAngle: 15,
    nested: false,
    freezable: true,
    // startIndex: 0,
    onInit: false,
    useLocalStorage: true
  }, options || {});
  
  var doc = document,
      win = window,
      KEYS = {
        ENTER: 13,
        SPACE: 32,
        PAGEUP: 33,
        PAGEDOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
      },
      tnsStorage = {},
      localStorageAccess = options.useLocalStorage;

  if (localStorageAccess) {
    // check browser version and local storage access
    var browserInfo = navigator.userAgent;
    var uid = new Date;

    try {
      tnsStorage = win.localStorage;
      if (tnsStorage) {
        tnsStorage.setItem(uid, uid);
        localStorageAccess = tnsStorage.getItem(uid) == uid;
        tnsStorage.removeItem(uid);
      } else {
        localStorageAccess = false;
      }
      if (!localStorageAccess) { tnsStorage = {}; }
    } catch(e) {
      localStorageAccess = false;
    }

    if (localStorageAccess) {
      // remove storage when browser version changes
      if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
        ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function(item) { tnsStorage.removeItem(item); });
      }
      // update browserInfo
      localStorage['tnsApp'] = browserInfo;
    }
  }

  function getSetConstant (name, value) {
    return tnsStorage[name] ? 
        checkStorageValue(tnsStorage[name]) :
        setLocalStorage(tnsStorage, name, value, localStorageAccess);
  }

  var CALC = getSetConstant('tC', calc()),
      PERCENTAGELAYOUT = getSetConstant('tPL', percentageLayout()),
      CSSMQ = getSetConstant('tMQ', mediaquerySupport()),
      TRANSFORM = getSetConstant('tTf', whichProperty('transform')),
      HAS3D = getSetConstant('t3D', has3D(TRANSFORM)),
      TRANSITIONDURATION = getSetConstant('tTDu', whichProperty('transitionDuration')),
      TRANSITIONDELAY = getSetConstant('tTDe', whichProperty('transitionDelay')),
      ANIMATIONDURATION = getSetConstant('tADu', whichProperty('animationDuration')),
      ANIMATIONDELAY = getSetConstant('tADe', whichProperty('animationDelay')),
      TRANSITIONEND = getSetConstant('tTE', getEndProperty(TRANSITIONDURATION, 'Transition')),
      ANIMATIONEND = getSetConstant('tAE', getEndProperty(ANIMATIONDURATION, 'Animation'));

  // get element nodes from selectors
  var supportConsoleWarn = win.console && typeof win.console.warn === "function",
      list = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'];
  for (var i = list.length; i--;) {
    var item = list[i];
    if (typeof options[item] === 'string') {
      var el = doc.querySelector(options[item]);

      if (el && el.nodeName) {
        options[item] = el;
      } else {
        if (supportConsoleWarn) { console.warn('Can\'t find', options[item]); }
        return;
      }
    }
  }

  // make sure at least 1 slide
  if (options.container.children.length < 1) {
    if (supportConsoleWarn) { console.warn('No slides found in', options.container); }
    return;
   }

  // update responsive
  // from: { 
  //    300: 2, 
  //    800: {
  //      loop: false
  //    }
  // }
  // to: {
  //    300: { 
  //      items: 2 
  //    }, 
  //    800: {
  //      loop: false
  //    }
  // }
  if (options.responsive) {
    var resTem = {}, res = options.responsive;
    for(var key in res) {
      var val = res[key];
      resTem[key] = typeof val === 'number' ? {items: val} :  val;
    }

    options.responsive = resTem;
    resTem = null;

    // apply responsive[0] to options and remove it
    if (0 in options.responsive) {
      options = extend(options, options.responsive[0]);
      delete options.responsive[0];
    }
  }

  // === define and set variables ===
  var carousel = options.mode === 'carousel' ? true : false;

  if (!carousel) {
    options.axis = 'horizontal';
    options.edgePadding = false;

    var animateIn = 'tns-fadeIn',
        animateOut = 'tns-fadeOut',
        animateDelay = false,
        animateNormal = options.animateNormal || 'tns-normal';

    if (TRANSITIONEND && ANIMATIONEND) {
      animateIn = options.animateIn || animateIn;
      animateOut = options.animateOut || animateOut;
      animateDelay = options.animateDelay || animateDelay;
    }
  }

  var horizontal = options.axis === 'horizontal' ? true : false,
      outerWrapper = doc.createElement('div'),
      innerWrapper = doc.createElement('div'),
      container = options.container,
      containerParent = container.parentNode,
      slideItems = container.children,
      slideCount = slideItems.length,
      vpOuter = getViewportWidth(containerParent),
      responsive = options.responsive,
      responsiveItems = [],
      breakpoints = false,
      breakpointZone = 0,
      windowWidth = getWindowWidth(),
      isOn;


  if (responsive) {
    breakpoints = Object.keys(responsive)
      .map(function (x) { return parseInt(x); })
      .sort(function (a, b) { return a - b; });

    // get all responsive items
    breakpoints.forEach(function(bp) {
      responsiveItems = responsiveItems.concat(Object.keys(responsive[bp]));
    });

    // remove duplicated items
    var arr = [];
    responsiveItems.forEach(function (item) { if (arr.indexOf(item) < 0) { arr.push(item); } });
    responsiveItems = arr;

    setBreakpointZone();
  } 

  // fixedWidth: vpOuter > vpInner > rightBoundary > indexMax
  var nested = options.nested,
      autoWidth = options.autoWidth,
      fixedWidth = getOption('fixedWidth'),
      edgePadding = getOption('edgePadding'),
      gutter = getOption('gutter'),
      vpInner = getViewportWidthInner(),
      items = !autoWidth ? Math.floor(getOption('items')) : null,
      slideBy = getOption('slideBy') === 'page' ? items : getOption('slideBy'),
      viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
      arrowKeys = getOption('arrowKeys'),
      speed = getOption('speed'),
      rewind = options.rewind,
      loop = rewind ? false : options.loop,
      autoHeight = getOption('autoHeight'),
      sheet = createStyleSheet(),
      lazyload = options.lazyload,
      slidePositions, // collection of slide positions
      slideItemsOut = [],
      hasEdgePadding = checkOption('edgePadding'),
      cloneCount = loop ? getCloneCountForLoop() : 0,
      slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
      rightBoundary = fixedWidth ? getRightBoundary() : null,
      updateIndexBeforeTransform = (!carousel || !loop) ? true : false,
      // transform
      transformAttr = horizontal ? 'left' : 'top',
      transformPrefix = '',
      transformPostfix = '',
      // index
      startIndex = getOption('startIndex'),
      index = startIndex ? updateStartIndex(startIndex) : !carousel ? 0 : cloneCount,
      indexCached = index,
      indexMin = 0,
      indexMax = !autoWidth ? getIndexMax() : null,
      // resize
      resizeTimer,
      swipeAngle = options.swipeAngle,
      moveDirectionExpected = swipeAngle ? '?' : true,
      running = false,
      onInit = options.onInit,
      events = new Events(),
      // id, class
      containerIdCached = container.id,
      classContainer = ' tns-slider tns-' + options.mode,
      slideId = container.id || getSlideId(),
      disable = getOption('disable'),
      freezable = options.freezable,
      freeze = !autoWidth ? getFreeze() : null,
      frozen,
      importantStr = nested === 'inner' ? ' !important' : '',
      controlsEvents = {
        'click': onControlsClick,
        'keydown': onControlsKeydown
      },
      navEvents = {
        'click': onNavClick,
        'keydown': onNavKeydown
      },
      hoverEvents = {
        'mouseover': mouseoverPause,
        'mouseout': mouseoutRestart
      },
      visibilityEvent = {'visibilitychange': onVisibilityChange},
      docmentKeydownEvent = {'keydown': onDocumentKeydown},
      touchEvents = {
        'touchstart': onPanStart,
        'touchmove': onPanMove,
        'touchend': onPanEnd,
        'touchcancel': onPanEnd
      }, dragEvents = {
        'mousedown': onPanStart,
        'mousemove': onPanMove,
        'mouseup': onPanEnd,
        'mouseleave': onPanEnd
      },
      hasControls = checkOption('controls'),
      hasNav = checkOption('nav'),
      navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
      hasAutoplay = checkOption('autoplay'),
      hasTouch = checkOption('touch'),
      hasMouseDrag = checkOption('mouseDrag'),
      slideActiveClass = 'tns-slide-active',
      imgCompleteClass = 'tns-complete',
      imgEvents = {
        'load': imgLoadedOrError,
        'error': imgLoadedOrError
      },
      imgsComplete;

  // controls
  if (hasControls) {
    var controls = getOption('controls'),
        controlsText = getOption('controlsText'),
        controlsContainer = options.controlsContainer,
        prevButton = options.prevButton,
        nextButton = options.nextButton,
        prevIsButton,
        nextIsButton;
  }

  // nav
  if (hasNav) {
    var nav = getOption('nav'),
        navContainer = options.navContainer,
        navItems,
        visibleNavIndexes = [],
        visibleNavIndexesCached = visibleNavIndexes,
        navClicked = -1,
        navCurrentIndex = getAbsIndex(),
        navCurrentIndexCached = navCurrentIndex,
        navActiveClass = 'tns-nav-active';
  }

  // autoplay
  if (hasAutoplay) {
    var autoplay = getOption('autoplay'),
        autoplayTimeout = getOption('autoplayTimeout'),
        autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
        autoplayText = getOption('autoplayText'),
        autoplayHoverPause = getOption('autoplayHoverPause'),
        autoplayButton = options.autoplayButton,
        autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
        autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
        autoplayTimer,
        animating,
        autoplayHoverPaused,
        autoplayUserPaused,
        autoplayVisibilityPaused;
  }

  if (hasTouch || hasMouseDrag) {
    var initPosition = {},
        lastPosition = {},
        translateInit,
        disX,
        disY,
        panStart = false,
        rafIndex = 0,
        getDist = horizontal ? 
          function(a, b) { return a.x - b.x; } :
          function(a, b) { return a.y - b.y; };
  }
  
  // touch
  if (hasTouch) {
    var touch = getOption('touch');
  }

  // mouse drag
  if (hasMouseDrag) {
    var mouseDrag = getOption('mouseDrag');
  }

  // disable slider when slidecount <= items
  if (freeze) {
    controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
  }

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = 'translate';

    if (HAS3D) {
      transformPrefix += horizontal ? '3d(' : '3d(0px, ';
      transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
    } else {
      transformPrefix += horizontal ? 'X(' : 'Y(';
      transformPostfix = ')';
    }

  }

  sliderInit();

  // === COMMON FUNCTIONS === //
  function getIndexMax () {
    if (!fixedWidth && !autoWidth) {
      return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(getOption('items'))) : slideCountNew - 1;
    } else {
      if (fixedWidth) {
        return Math.floor(- rightBoundary / (fixedWidth + gutter)) + 1;
      } else {
        var i = slideCountNew - 1,
            result = i;
        while (slidePositions[i] > - rightBoundary) {
          i--;
          result = i;
        }
        return result;
      }
    }
  }

  function updateStartIndex (indexTem) {
    indexTem = indexTem%slideCount;
    if (indexTem < 0) { indexTem += slideCount; }
    indexTem = Math.min(indexTem, slideCountNew - items);
    return indexTem;
  }

  function getAbsIndex (i) {
    if (i === undefined) { i = index; }

    var min = carousel ? cloneCount : 0;
    while (i < min) { i += slideCount; }
    if (carousel) { i -= cloneCount; }

    return i ? Math.floor(i%slideCount) : i;
  }

  function getItemsMax () {
    // fixedWidth or autoWidth while viewportMax is not available
    if (autoWidth || (fixedWidth && !viewportMax)) {
      return slideCount - 1;
    // most cases
    } else {
      var str = fixedWidth ? 'fixedWidth' : 'items',
          arr = [];

      if (fixedWidth || options[str] < slideCount) { arr.push(options[str]); }

      if (breakpoints && responsiveItems.indexOf(str) >= 0) {
        breakpoints.forEach(function(bp) {
          var tem = responsive[bp][str];
          if (tem && (fixedWidth || tem < slideCount)) { arr.push(tem); }
        });
      }

      if (!arr.length) { arr.push(0); }

      return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
    }
  }

  function getCloneCountForLoop () {
    var itemsMax = getItemsMax(),
        result = carousel ? Math.ceil((itemsMax * 5 - slideCount)/2) : (itemsMax * 4 - slideCount);
    result = Math.max(itemsMax, result);

    return hasEdgePadding ? result + 1 : result;
  }

  function getWindowWidth () {
    return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
  }

  function getViewportWidth (el) {
    return el.clientWidth || getViewportWidth(el.parentNode);
  }

  function getViewportWidthInner () {
    return edgePadding ? vpOuter - (edgePadding * 2 - gutter) : vpOuter;
  }

  function checkOption (item) {
    var result = options[item];
    if (!result && breakpoints && responsiveItems.indexOf(item) >= 0) {
      breakpoints.forEach(function (bp) {
        if (responsive[bp][item]) { result = true; }
      });
    }
    return result;
  }

  function getOption (item, viewport) {
    viewport = viewport ? viewport : windowWidth;
    
    var obj = {
          slideBy: 'page',
          edgePadding: false
        },
        result;

    if (!carousel && item in obj) {
      result = obj[item];
    } else {
      if (item === 'items' && fixedWidth) {
        result = Math.floor(vpInner / (fixedWidth + gutter));
      } else if (item === 'autoHeight' && nested === 'outer') {
        result = true;
      } else {
        result = options[item];

        if (breakpoints && responsiveItems.indexOf(item) >= 0) {
          for (var i = 0, len = breakpoints.length; i < len; i++) {
            var bp = breakpoints[i];
            if (viewport >= bp) {
              if (item in responsive[bp]) { result = responsive[bp][item]; }
            } else { break; }
          }
        }
      }
    }

    if (item === 'slideBy' && result === 'page') { result = getOption('items'); }
    if (!carousel && (item === 'slideBy' || item === 'items')) { result = Math.floor(result); }

    return result;
  }

  function getSlideMarginLeft (i) {
    return CALC ? 
      CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' : 
      i * 100 / slideCountNew + '%';
  }

  function getInnerWrapperStyles (edgePaddingTem, gutterTem, fixedWidthTem, speedTem) {
    var str = '';

    if (edgePaddingTem) {
      var gap = edgePaddingTem;
      if (gutterTem) { gap -= gutterTem; }
      str = horizontal ?
        'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' :
        'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
    } else if (gutterTem && !fixedWidthTem) {
      var gutterTemUnit = '-' + gutterTem + 'px',
          dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
      str = 'margin: 0 ' + dir + ';'
    }

    if (TRANSITIONDURATION && speedTem) { str += getTrsnsitionDurationStyle(speedTem); }
    
    return str;
  }

  function getContainerWidth (fixedWidthTem, gutterTem, itemsTem) {
    if (fixedWidthTem) {
      return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
    } else {
      return CALC ?
        CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' :
        slideCountNew * 100 / itemsTem + '%';
    }
  }

  function getSlideWidthStyle (fixedWidthTem, gutterTem, itemsTem) {
    var width;

    if (fixedWidthTem) {
      width = (fixedWidthTem + gutterTem) + 'px';
    } else {
      if (!carousel) { itemsTem = Math.floor(itemsTem); }
      var dividend = carousel ? slideCountNew : itemsTem;
      width = CALC ? 
        CALC + '(100% / ' + dividend + ')' : 
        100 / dividend + '%';
    }

    return 'width:' + width + importantStr + ';';
  }

  function getSlideGutterStyle (gutterTem) {
    var str = '';

    // gutter maybe interger || 0
    // so can't use 'if (gutter)'
    if (gutterTem !== false) {
      var prop = horizontal ? 'padding-' : 'margin-',
          dir = horizontal ? 'right' : 'bottom';
      str = prop +  dir + ': ' + gutterTem + 'px;';
    }

    return str;
  }

  function getCSSPrefix (name, num) {
    var prefix = name.substring(0, name.length - num).toLowerCase();
    if (prefix) { prefix = '-' + prefix + '-'; }

    return prefix;
  }

  function getTrsnsitionDurationStyle (speed) {
    return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
  }

  function getAnimationDurationStyle (speed) {
    return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
  }

  function sliderInit () {
    var classOuter = 'tns-outer',
        classInner = 'tns-inner',
        hasGutter = checkOption('gutter');

    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    innerWrapper.id = slideId + '-iw';
    if (autoHeight) { innerWrapper.className += ' tns-ah'; }

    // set container properties
    if (container.id === '') { container.id = slideId; }
    classContainer += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
    classContainer += CALC ? ' tns-calc' : ' tns-no-calc';
    if (carousel) { classContainer += ' tns-' + options.axis; }
    container.className += classContainer;

    // add constrain layer for carousel
    if (carousel) {
      var middleWrapper = doc.createElement('div');
      middleWrapper.className = 'tns-ovh';

      outerWrapper.appendChild(middleWrapper);
      middleWrapper.appendChild(innerWrapper);
    } else {
      outerWrapper.appendChild(innerWrapper);
    }

    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container);

    // add events
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      addEvents(container, eve);
    }

    // add id, class, aria attributes 
    // before clone slides
    for (var x = 0; x < slideCount; x++) {
      var item = slideItems[x];
      if (!item.id) { item.id = slideId + '-item' + x; }
      addClass(item, 'tns-item');
      if (!carousel && animateNormal) { addClass(item, animateNormal); }
      setAttrs(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    }

    // ## clone slides
    // carousel: n + slides + n
    // gallery:      slides + n
    if (cloneCount) {
      var fragmentBefore = doc.createDocumentFragment(), 
          fragmentAfter = doc.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j%slideCount,
            cloneFirst = slideItems[num].cloneNode(true);
        removeAttrs(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (carousel) {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          removeAttrs(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }

    // ## images loaded/failed
    if (checkOption('autoHeight') || !carousel || autoWidth || !horizontal) {
      var imgs = container.querySelectorAll('img');

      // add complete class if all images are loaded/failed
      forEachNodeList(imgs, function(img) {
        var src = img.src;

        if (src.indexOf('data:image') < 0) {
          addEvents(img, imgEvents);
          img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
          img.src = src;
        } else {
          addClass(img, imgCompleteClass);
        }
      });

      raf(function(){ imageLoaded(arrayFromNodeList(imgs), function() {
        // set imgsComplete to true
        imgsComplete = true;

        // run Fn()s which are rely on image loading
        if (!disable) {
          if (!horizontal || autoWidth) {
            getSlidePositions();
            lazyLoad();

            if (autoWidth) {
              items = getOption('items');
              rightBoundary = getRightBoundary();
              freeze = getFreeze();
              indexMax = getIndexMax();

              // update slider UI
              initUI();
            }

            if (!horizontal) { updateContentWrapperHeight(); }
          }

          // set container transform property
          if (carousel) {
            doContainerTransformSilent();
          }
        }
      }); });
    }

    if (carousel && horizontal && !autoWidth) { doContainerTransformSilent(); }

    initSheet();
    if (!autoWidth) { initUI(); }
  }

  function initSheet () {
    // activate visible slides
    // add aria attrs
    // set animation classes and left value for gallery slider
    // use slide count when slides are fewer than items
    for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
      var item = slideItems[i];
      setAttrs(item, {'aria-hidden': 'false'});
      removeAttrs(item, ['tabindex']);
      addClass(item, slideActiveClass);

      if (!carousel) { 
        item.style.left = (i - index) * 100 / items + '%';
        addClass(item, animateIn);
        removeClass(item, animateNormal);
      }
    }

    // #### LAYOUT

    // ## INLINE-BLOCK VS FLOAT

    // ## PercentageLayout:
    // slides: inline-block
    // remove blank space between slides by set font-size: 0

    // ## Non PercentageLayout:
    // slides: float
    //         margin-right: -100%
    //         margin-left: ~

    // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
    if (carousel && horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        addCSSRule(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', getCssRulesLength(sheet));
        addCSSRule(sheet, '#' + slideId, 'font-size:0;', getCssRulesLength(sheet));
      } else {
        forEachNodeList(slideItems, function (slide, i) {
          slide.style.marginLeft = getSlideMarginLeft(i);
        });
      }
    }


    // ## BASIC STYLES
    if (CSSMQ) {
      // inner wrapper styles
      var str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed);
      addCSSRule(sheet, '#' + slideId + '-iw', str, getCssRulesLength(sheet));

      // container styles
      if (carousel) {
        str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';
        if (TRANSITIONDURATION) { str += getTrsnsitionDurationStyle(speed); }
        addCSSRule(sheet, '#' + slideId, str, getCssRulesLength(sheet));
      }

      // slide styles
      str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';
      if (options.gutter) { str += getSlideGutterStyle(options.gutter); }
      // set gallery items transition-duration
      if (!carousel) {
        if (TRANSITIONDURATION) { str += getTrsnsitionDurationStyle(speed); }
        if (ANIMATIONDURATION) { str += getAnimationDurationStyle(speed); }
      }
      if (str) { addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet)); }

    // non CSS mediaqueries: IE8
    // ## update inner wrapper, container, slides if needed
    // set inline styles for inner wrapper & container
    // insert stylesheet (one line) for slides only (since slides are many)
    } else {
      // inner wrapper styles
      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth);

      // container styles
      if (carousel && horizontal && !autoWidth) {
        container.style.width = getContainerWidth(fixedWidth, gutter, items);
      }

      // slide styles
      var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';
      if (gutter) { str += getSlideGutterStyle(gutter); }

      // append to the last line
      if (str) { addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet)); }
    }

    // ## MEDIAQUERIES
    if (responsive && CSSMQ) {
      breakpoints.forEach(function(bp) {
        var opts = responsive[bp],
            str = '',
            innerWrapperStr = '',
            containerStr = '',
            slideStr = '',
            itemsBP = !autoWidth ? getOption('items', bp) : null,
            fixedWidthBP = getOption('fixedWidth', bp),
            speedBP = getOption('speed', bp),
            edgePaddingBP = getOption('edgePadding', bp),
            gutterBP = getOption('gutter', bp);

        // inner wrapper string
        if ('edgePadding' in opts || 'gutter' in opts) {
          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP) + '}';
        }

        // container string
        if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || (fixedWidth && 'gutter' in opts))) {
          containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
        }
        if (TRANSITIONDURATION && 'speed' in opts) {
          containerStr += getTrsnsitionDurationStyle(speedBP);
        }
        if (containerStr) {
          containerStr = '#' + slideId + '{' + containerStr + '}';
        }

        // slide string
        if ('fixedWidth' in opts || (fixedWidth && 'gutter' in opts) || !carousel && 'items' in opts) {
          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
        }
        if ('gutter' in opts) {
          slideStr += getSlideGutterStyle(gutterBP);
        }
        // set gallery items transition-duration
        if (!carousel && 'speed' in opts) {
          if (TRANSITIONDURATION) { slideStr += getTrsnsitionDurationStyle(speedBP); }
          if (ANIMATIONDURATION) { slideStr += getAnimationDurationStyle(speedBP); }
        }
        if (slideStr) { slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}'; }

        // add up
        str = innerWrapperStr + containerStr + slideStr;

        if (str) {
          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
        }
      });
    }
  }

  function initUI () {
    // == msInit ==
    // for IE10
    if (navigator.msMaxTouchPoints) {
      addClass(container, 'ms-touch');
      addEvents(container, {'scroll': ie10Scroll});
      setSnapInterval();
    }

    // == autoplayInit ==
    if (hasAutoplay) {
      var txt = autoplay ? 'stop' : 'start';
      if (autoplayButton) {
        setAttrs(autoplayButton, {'data-action': txt});
      } else if (options.autoplayButtonOutput) {
        outerWrapper.insertAdjacentHTML('afterbegin', '<button data-action="' + txt + '" type="button">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
        autoplayButton = outerWrapper.querySelector('[data-action]');
      }

      // add event
      if (autoplayButton) {
        addEvents(autoplayButton, {'click': toggleAutoplay});
      }

      if (!autoplay) {
        if (autoplayButton) {
          hideElement(autoplayButton);
        }
      } else {
        startAutoplay();
        if (autoplayHoverPause) { addEvents(container, hoverEvents); }
        if (autoplayResetOnVisibility) { addEvents(container, visibilityEvent); }
      }
    }
 
    // == navInit ==
    if (hasNav) {
      var initIndex = !carousel ? 0 : cloneCount;
      // customized nav
      // will not hide the navs in case they're thumbnails
      if (navContainer) {
        setAttrs(navContainer, {'aria-label': 'Carousel Pagination'});
        navItems = navContainer.children;
        for (var i = 0; i < slideCount; i++) {
          var item = navItems[i];
          if (item) {
            setAttrs(item, {
              'data-nav': i,
              'tabindex': '-1',
              'aria-selected': 'false',
              'aria-controls': slideItems[initIndex + i].id,
            });
          }
        }

      // generated nav 
      } else {
        var navHtml = '',
            hiddenStr = navAsThumbnails ? '' : 'hidden';
        for (var i = 0; i < slideCount; i++) {
          // hide nav items by default
          navHtml += '<button data-nav="' + i +'" tabindex="-1" aria-selected="false" aria-controls="' + slideItems[initIndex + i].id + '" ' + hiddenStr + ' type="button"></button>';
        }
        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        outerWrapper.insertAdjacentHTML('afterbegin', navHtml);

        navContainer = outerWrapper.querySelector('.tns-nav');
        navItems = navContainer.children;
      }

      updateNavVisibility();

      // add transition
      if (TRANSITIONDURATION) {
        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
            str = 'transition: all ' + speed / 1000 + 's';

        if (prefix) {
          str = '-' + prefix + '-' + str;
        }

        addCSSRule(sheet, '[aria-controls^=' + slideId + '-item]', str, getCssRulesLength(sheet));
      }

      setAttrs(navItems[navCurrentIndex], {'tabindex': '0', 'aria-selected': 'true'});
      addClass(navItems[navCurrentIndex], navActiveClass);

      // add events
      addEvents(navContainer, navEvents);

      if (!nav) { hideElement(navContainer); }
    }



    // == controlsInit ==
    if (hasControls) {
      if (controlsContainer || (prevButton && nextButton)) {
        if (controlsContainer) {
          prevButton = controlsContainer.children[0];
          nextButton = controlsContainer.children[1];
          setAttrs(controlsContainer, {
            'aria-label': 'Carousel Navigation',
            'tabindex': '0'
          });
          setAttrs(controlsContainer.children, {
            'aria-controls': slideId,
            'tabindex': '-1',
          });
        }
        
        setAttrs(prevButton, {'data-controls' : 'prev'});
        setAttrs(nextButton, {'data-controls' : 'next'});
      } else {
        outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + slideId +'" type="button">' + controlsText[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + slideId +'" type="button">' + controlsText[1] + '</button></div>');

        controlsContainer = outerWrapper.querySelector('.tns-controls');
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }

      prevIsButton = isButton(prevButton);
      nextIsButton = isButton(nextButton);

      updateControlsStatus();

      // add events
      if (controlsContainer) {
        addEvents(controlsContainer, controlsEvents);
      } else {
        addEvents(prevButton, controlsEvents);
        addEvents(nextButton, controlsEvents);
      }

      if (!controls) { hideElement(controlsContainer); }
    }


    if (touch) { addEvents(container, touchEvents); }
    if (mouseDrag) { addEvents(container, dragEvents); }
    if (arrowKeys) { addEvents(doc, docmentKeydownEvent); }


    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else {
      addEvents(win, {'resize': onResize});
    }

    if (nested === 'outer') {
      events.on('innerLoaded', runAutoHeight);
    } else if ((autoHeight || !carousel) && !disable) {
      runAutoHeight();
    }

    if (!autoWidth) { lazyLoad(); }
    toggleSlideDisplayAndEdgePadding();

    events.on('indexChanged', additionalUpdates);

    if (typeof onInit === 'function') { onInit(info()); }
    if (nested === 'inner') { events.emit('innerLoaded', info()); }

    if (disable) { disableSlider(true); }

    isOn = true;
  }





// === ON RESIZE ===
  function onResize (e) {
    raf(function(){ resizeTasks(getEvent(e)); });
  }

  function resizeTasks (e) {
    if (!isOn) { return; }

    windowWidth = getWindowWidth();
    if (nested === 'outer') { events.emit('outerResized', info(e)); }

    var breakpointZoneTem = breakpointZone,
        edgePaddingTem = edgePadding,
        gutterTem = gutter,
        indexTem = index, 
        itemsTem = items,
        freezeTem = freeze,
        needContainerTransform = false;

    vpOuter = getViewportWidth(outerWrapper);
    edgePadding = getOption('edgePadding');
    gutter = getOption('gutter');
    vpInner = getViewportWidthInner();
    if (breakpoints) { setBreakpointZone(); }
    if (breakpointZoneTem !== breakpointZone) { events.emit('newBreakpointStart', info(e)); }
    if ((!horizontal || autoWidth) && !disable) {
      getSlidePositions();
      if (!horizontal) {
        updateContentWrapperHeight();
        needContainerTransform = true;
      }
    }
    if (fixedWidth || autoWidth) {
      rightBoundary = getRightBoundary();
      indexMax = getIndexMax();
    }

    // things do when breakpoint zone change
    if (breakpointZoneTem !== breakpointZone || fixedWidth || autoWidth) {
      var slideByTem = slideBy,
          arrowKeysTem = arrowKeys,
          autoHeightTem = autoHeight,
          fixedWidthTem = fixedWidth,
          disableTem = disable;

      // update variables
      items = getOption('items');
      slideBy = getOption('slideBy');
      disable = getOption('disable');
      if (hasRightDeadZone) { needContainerTransform = true; }
      freeze = getFreeze();

      if (items !== itemsTem) {
        if (!fixedWidth && !autoWidth) { indexMax = getIndexMax(); }
        // check index before transform in case
        // slider reach the right edge then items become bigger
        updateIndex();
      }

      if (disable !== disableTem) {
        disableSlider(disable);
      }
      
      if (freeze !== freezeTem) {
        // reset container transforms
        if (freeze) {
          doContainerTransform(getContainerTransformValue(!carousel ? 0 : cloneCount));
        } else {
          needContainerTransform = true;
        }

        toggleSlideDisplayAndEdgePadding();
      }
      
      if (breakpointZoneTem !== breakpointZone) {
        speed = getOption('speed');

        fixedWidth = getOption('fixedWidth');
        if (!disable && fixedWidth !== fixedWidthTem) {
          needContainerTransform = true;
        }

        autoHeight = getOption('autoHeight');
        if (autoHeight !== autoHeightTem) {
          if (!autoHeight) { innerWrapper.style.height = ''; }
        }
      }

      arrowKeys = freeze ? false : getOption('arrowKeys');
      if (arrowKeys !== arrowKeysTem) {
        arrowKeys ?
          addEvents(doc, docmentKeydownEvent) :
          removeEvents(doc, docmentKeydownEvent);
      }

      if (hasControls) {
        var controlsTem = controls,
            controlsTextTem = controlsText;
        controls = freeze ? false : getOption('controls');
        controlsText = getOption('controlsText');

        if (controls !== controlsTem) {
          controls ?
            showElement(controlsContainer) :
            hideElement(controlsContainer); 
        }
        if (controlsText !== controlsTextTem) {
          prevButton.innerHTML = controlsText[0];
          nextButton.innerHTML = controlsText[1];
        }
      }
      if (hasNav) {
        var navTem = nav;
        nav = freeze ? false : getOption('nav');

        if (nav !== navTem) {
          if (nav) {
            showElement(navContainer);
            updateNavVisibility();
          } else {
            hideElement(navContainer);
          }
        }
      }
      if (hasTouch) {
        var touchTem = touch;
        touch = freeze ? false : getOption('touch');

        if (touch !== touchTem && carousel) {
          touch ?
            addEvents(container, touchEvents) :
            removeEvents(container, touchEvents);
        }
      }
      if (hasMouseDrag) {
        var mouseDragTem = mouseDrag;
        mouseDrag = freeze ? false : getOption('mouseDrag');

        if (mouseDrag !== mouseDragTem && carousel) {
          mouseDrag ?
            addEvents(container, dragEvents) :
            removeEvents(container, dragEvents);
        }
      }
      if (hasAutoplay) {
        var autoplayTem = autoplay,
            autoplayHoverPauseTem = autoplayHoverPause,
            autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
            autoplayTextTem = autoplayText;

        if (freeze) {
          autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
        } else {
          autoplay = getOption('autoplay');
          
          if (autoplay) {
            autoplayHoverPause = getOption('autoplayHoverPause');
            autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');
          } else {
            autoplayHoverPause = autoplayResetOnVisibility = false;
          }
        }
        autoplayText = getOption('autoplayText');
        autoplayTimeout = getOption('autoplayTimeout');

        if (autoplay !== autoplayTem) {
          if (autoplay) {
            if (autoplayButton) { showElement(autoplayButton); }
            if (!animating && !autoplayUserPaused) { startAutoplay(); }
          } else {
            if (autoplayButton) { hideElement(autoplayButton); }
            if (animating) { stopAutoplay(); }
          }
        }
        if (autoplayHoverPause !== autoplayHoverPauseTem) {
          autoplayHoverPause ?
            addEvents(container, hoverEvents) :
            removeEvents(container, hoverEvents);
        }
        if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
          autoplayResetOnVisibility ?
            addEvents(doc, visibilityEvent) :
            removeEvents(doc, visibilityEvent);
        }
        if (autoplayButton && autoplayText !== autoplayTextTem) {
          var i = autoplay ? 1 : 0,
              html = autoplayButton.innerHTML,
              len = html.length - autoplayTextTem[i].length;
          if (html.substring(len) === autoplayTextTem[i]) {
            autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
          }
        }
      }

      // non-meduaqueries: IE8
      // ## update inner wrapper, container, slides if needed
      // set inline styles for inner wrapper & container
      // insert stylesheet (one line) for slides only (since slides are many)
      if (!CSSMQ) {
        // inner wrapper styles
        if (!freeze && (edgePadding !== edgePaddingTem || gutter !== gutterTem)) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth);
        }

        if (horizontal && !fixedWidth) {
          // container styles
          if (carousel) {
            container.style.width = getContainerWidth(false, null, items);
          }

          // slide styles
          var str = getSlideWidthStyle(fixedWidth, gutter, items) + 
                    getSlideGutterStyle(gutter);

          // remove the last line and
          // add new styles
          removeCSSRule(sheet, getCssRulesLength(sheet) - 1);
          addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet));
        }

        if (!fixedWidth) { needContainerTransform = true; }
      }

      if (index !== indexTem) { 
        events.emit('indexChanged', info());
        needContainerTransform = true;
      }

      // items is not updated in autoWidth slider
      if (items !== itemsTem || autoWidth) { 
        additionalUpdates();
        updateSlidePosition();

        if (navigator.msMaxTouchPoints) { setSnapInterval(); }
      }
    }

    if (needContainerTransform) {
      doContainerTransformSilent();
      indexCached = index;
    }

    // auto height
    if ((autoHeight || !carousel) && !disable) { runAutoHeight(); }

    if (breakpointZoneTem !== breakpointZone) { events.emit('newBreakpointEnd', info(e)); }
  }





  // === INITIALIZATION FUNCTIONS === //
  function getFreeze () {
    if (disable) {
      return true;
    } else if (!freezable) {
      return false;
    } else if (!fixedWidth && !autoWidth) {
      return slideCount <= items;
    } else {
      if (loop) {
        var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount];
        return width - gutter <= vpInner;
      } else {
        return !rightBoundary;
      }
    }
  }

  function setBreakpointZone () {
    breakpointZone = 0;
    breakpoints.forEach(function(bp, i) {
      if (windowWidth >= bp) { breakpointZone = i + 1; }
    });
  }

  // (slideBy, indexMin, indexMax) => index
  var updateIndex = (function () {
    return loop ? 
      carousel ?
        // loop + carousel
        function () {
          var leftEdge = indexMin,
              rightEdge = indexMax;

          leftEdge += slideBy;
          rightEdge -= slideBy;

          // adjust edges when edge padding is true
          // or fixed-width slider with extra space on the right side
          if (edgePadding) {
            leftEdge += 1;
            rightEdge -= 1;
          } else if (fixedWidth) {
            var gt = gutter ? gutter : 0;
            if (vpOuter%(fixedWidth + gt) > gt) { rightEdge -= 1; }
          }

          if (cloneCount) {
            if (index > rightEdge) {
              index -= slideCount;
            } else if (index < leftEdge) {
              index += slideCount;
            }
          }
        } :
        // loop + gallery
        function() {
          if (index > indexMax) {
            while (index >= indexMin + slideCount) { index -= slideCount; }
          } else if (index < indexMin) {
            while (index <= indexMax - slideCount) { index += slideCount; }
          }
        } :
      // non-loop
      function() {
        index = Math.max(indexMin, Math.min(indexMax, index));
      };
  })();

  function toggleSlideDisplayAndEdgePadding () {
    var str = 'tns-transparent';

    if (freeze) {
      if (!frozen) {
        // remove edge padding from inner wrapper
        if (edgePadding) { innerWrapper.style.margin = '0px'; }

        // add class tns-transparent to cloned slides
        if (cloneCount) {
          for (var i = cloneCount; i--;) {
            if (carousel) { addClass(slideItems[i], str); }
            addClass(slideItems[slideCountNew - i - 1], str);
          }
        }

        frozen = true;
      }
    } else if (frozen) {
      // restore edge padding for inner wrapper
      // for mordern browsers
      if (edgePadding && CSSMQ) { innerWrapper.style.margin = ''; }

      // remove class tns-transparent to cloned slides
      if (cloneCount) {
        for (var i = cloneCount; i--;) {
          if (carousel) { removeClass(slideItems[i], str); }
          removeClass(slideItems[slideCountNew - i - 1], str);
        }
      }

      frozen = false;
    }
  }

  function disableSlider (disable) {
    var len = slideItems.length;
    
    if (disable) {
      sheet.disabled = true;
      container.className = container.className.replace(classContainer.substring(1), '');
      removeElementStyles(container);
      if (loop) {
        for (var j = cloneCount; j--;) {
          if (carousel) { hideElement(slideItems[j]); }
          hideElement(slideItems[len - j - 1]);
        }
      }

      // vertical slider
      if (!horizontal || !carousel) { removeElementStyles(innerWrapper); }

      // gallery
      if (!carousel) { 
        for (var i = index, l = index + slideCount; i < l; i++) {
          var item = slideItems[i];
          removeElementStyles(item);
          removeClass(item, animateIn);
          removeClass(item, animateNormal);
        }
      }
    } else {
      sheet.disabled = false;
      container.className += classContainer;

      // vertical slider: get offsetTops before container transform
      if (!horizontal || autoWidth) {
        getSlidePositions();
        if (autoWidth) {
          rightBoundary = getRightBoundary();
          indexMax = getIndexMax();
        }
      }

      doContainerTransformSilent();
      if (loop) {
        for (var j = cloneCount; j--;) {
          if (carousel) { showElement(slideItems[j]); }
          showElement(slideItems[len - j - 1]);
        }
      }

      // gallery
      if (!carousel) { 
        for (var i = index, l = index + slideCount; i < l; i++) {
          var item = slideItems[i],
              classN = i < index + items ? animateIn : animateNormal;
          item.style.left = (i - index) * 100 / items + '%';
          addClass(item, classN);
        }
      }
    }
  }

  function lazyLoad () {
    if (lazyload && !disable) {
      var i = index, len;

      if (!autoWidth) {
        len = index + items;
      } else {
        var a = index + 1,
            len = a,
            edge = slidePositions[index] + vpInner + edgePadding - gutter;
        while (slidePositions[a] < edge) {
          a++;
          len = a;
        }
      }

      if (edgePadding) {
        i -=1;
        if (!autoWidth) { len +=1; }
      }

      i = Math.floor(Math.max(i, 0));
      len = Math.ceil(Math.min(len, slideCountNew));

      for(; i < len; i++) {
        forEachNodeList(slideItems[i].querySelectorAll('.tns-lazy-img'), function (img) {
          // stop propagationl transitionend event to container
          var eve = {};
          eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };
          addEvents(img, eve);

          if (!hasClass(img, 'loaded')) {
            img.src = getAttr(img, 'data-src');
            addClass(img, 'loaded');
          }
        });
      }
    }
  }


  function imgLoadedOrError (e) {
    var img = getTarget(e);
    addClass(img, imgCompleteClass);
    removeEvents(img, imgEvents);
  }

  function getImageArray (slideStart, slideRange) {
    var imgs = [];
    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      forEachNodeList(slideItems[i].querySelectorAll('img'), function (img) {
        imgs.push(img);
      });
    }

    return imgs;
  }

  // check if all visible images are loaded
  // and update container height if it's done
  function runAutoHeight () {
    var imgs = autoHeight ?
        getImageArray(index, items) :
        getImageArray(cloneCount, slideCount);

    raf(function(){ imageLoaded(imgs, updateInnerWrapperHeight); });
  }

  function imageLoaded (imgs, cb) {
    // directly execute callback function if all images are complete
    if (imgsComplete) { return cb(); }

    // check selected image classes otherwise
    imgs.forEach(function (img, index) {
      if (hasClass(img, imgCompleteClass)) { imgs.splice(index, 1); }
    });

    // execute callback function if selected images are all complete
    if (!imgs.length) { return cb(); }

    // otherwise execute this functiona again
    raf(function(){ imageLoaded(imgs, cb); });
  } 

  function additionalUpdates () {
    lazyLoad(); 
    updateSlideStatus();
    updateControlsStatus();
    updateNavVisibility();
    updateNavStatus();
  }


  function getMaxSlideHeight (slideStart, slideRange) {
    var heights = [];
    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      heights.push(slideItems[i].offsetHeight);
    }

    return Math.max.apply(null, heights);
  }

  // update inner wrapper height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update inner wrapper height to max-height
  // 4. set transitionDuration to 0s after transition done
  function updateInnerWrapperHeight () {
    var maxHeight = autoHeight ? 
        getMaxSlideHeight(index, items) :
        getMaxSlideHeight(cloneCount, slideCount);

    if (innerWrapper.style.height !== maxHeight) { innerWrapper.style.height = maxHeight + 'px'; }
  }

  // get the distance from the top edge of the first slide to each slide
  // (init) => slidePositions
  function getSlidePositions () {
    slidePositions = [0];
    var attr = horizontal ? 'left' : 'top',
        first = slideItems[0].getBoundingClientRect()[attr],
        position;
    for (var i = 1; i < slideCountNew; i++) {
      position = slideItems[i].getBoundingClientRect()[attr];
      slidePositions.push(position - first);
    }
  }

  // set snapInterval (for IE10)
  function setSnapInterval () {
    outerWrapper.style.msScrollSnapPointsX = 'snapInterval(0%, ' + (100 / items) + '%)';
  }

  // update slide
  function updateSlideStatus () {
    var l = index + Math.min(slideCount, items);
    for (var i = slideCountNew; i--;) {
      var item = slideItems[i];
      
      // visible slides
      if (i >= index && i < l) {
        if (hasAttr(item, 'tabindex')) {
          setAttrs(item, {'aria-hidden': 'false'});
          removeAttrs(item, ['tabindex']);
          addClass(item, slideActiveClass);
        }
      // hidden slides
      } else {
        if (!hasAttr(item, 'tabindex')) {
          setAttrs(item, {
            'aria-hidden': 'true',
            'tabindex': '-1'
          });
        }
        if (hasClass(item, slideActiveClass)) {
          removeClass(item, slideActiveClass);
        }
      }
    }
  }

  // gallery: update slide position
  function updateSlidePosition () {
    if (!carousel) { 
      var l = index + Math.min(slideCount, items);
      for (var i = slideCountNew; i--;) {
        var item = slideItems[i];

        if (i >= index && i < l) {
          // add transitions to visible slides when adjusting their positions
          addClass(item, 'tns-moving');

          item.style.left = (i - index) * 100 / items + '%';
          addClass(item, animateIn);
          removeClass(item, animateNormal);
        } else if (item.style.left) {
          item.style.left = '';
          addClass(item, animateNormal);
          removeClass(item, animateIn);
        }

        // remove outlet animation
        removeClass(item, animateOut);
      }

      // removing '.tns-moving'
      setTimeout(function() {
        forEachNodeList(slideItems, function(el) {
          removeClass(el, 'tns-moving');
        });
      }, 300);
    }
  }

  // set tabindex & aria-selected on Nav
  function updateNavStatus () {
    // get current nav
    if (nav) {
      navCurrentIndex = navClicked !== -1 ? navClicked : getAbsIndex();
      navClicked = -1;

      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached],
            navCurrent = navItems[navCurrentIndex];

        setAttrs(navPrev, {
          'tabindex': '-1',
          'aria-selected': 'false'
        });
        setAttrs(navCurrent, {
          'tabindex': '0',
          'aria-selected': 'true'
        });
        removeClass(navPrev, navActiveClass);
        addClass(navCurrent, navActiveClass);

        navCurrentIndexCached = navCurrentIndex;
      }
    }
  }

  function getLowerCaseNodeName (el) {
    return el.nodeName.toLowerCase();
  }

  function isButton (el) {
    return getLowerCaseNodeName(el) === 'button';
  }

  function isAriaDisabled (el) {
    return el.getAttribute('aria-disabled') === 'true';
  }

  function disEnableElement (isButton, el, val) {
    if (isButton) {
      el.disabled = val;
    } else {
      el.setAttribute('aria-disabled', val.toString());
    }
  }

  // set 'disabled' to true on controls when reach the edges
  function updateControlsStatus () {
    if (!controls || rewind || loop) { return; }

    var prevDisabled = (prevIsButton) ? prevButton.disabled : isAriaDisabled(prevButton),
        nextDisabled = (nextIsButton) ? nextButton.disabled : isAriaDisabled(nextButton),
        disablePrev = (index === indexMin) ? true : false,
        disableNext = (!rewind && index === indexMax) ? true : false;

    if (disablePrev && !prevDisabled) {
      disEnableElement(prevIsButton, prevButton, true);
    }
    if (!disablePrev && prevDisabled) {
      disEnableElement(prevIsButton, prevButton, false);
    }
    if (disableNext && !nextDisabled) {
      disEnableElement(nextIsButton, nextButton, true);
    }
    if (!disableNext && nextDisabled) {
      disEnableElement(nextIsButton, nextButton, false);
    }
  }

  // set duration
  function resetDuration (el, str) {
    if (TRANSITIONDURATION) { el.style[TRANSITIONDURATION] = str; }
  }

  function getFixedSliderWidth () {
    return fixedWidth ? (fixedWidth + gutter) * slideCountNew - gutter: slidePositions[slideCountNew - 1] + slideItems[slideCountNew - 1].getBoundingClientRect().width - gutter;
  }

  function getRightBoundary () {
    var result = - (getFixedSliderWidth() - vpInner);
    if (result > 0) { result = 0; }
    return result;
  }

  function getContainerTransformValue (num) {
    if (num == null) { num = index; }
    var val;
    if (horizontal && !autoWidth) {
      if (fixedWidth) {
        val = - (fixedWidth + gutter) * num;
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;
        val = - num * 100 / denominator;
      }
    } else {
      val = - slidePositions[num];
    }

    if (hasRightDeadZone) { val = Math.max(val, rightBoundary); }

    val += (horizontal && !autoWidth && !fixedWidth) ? '%' : 'px';
    return val;
  }

  function doContainerTransformSilent (val) {
    resetDuration(container, '0s');
    doContainerTransform(val);
    setTimeout(function() { resetDuration(container, ''); }, 10);
  }

  function doContainerTransform (val) {
    if (val == null) { val = getContainerTransformValue(); }
    container.style[transformAttr] = transformPrefix + val + transformPostfix;
  }

  function animateSlide (number, classOut, classIn, isOut) {
    var l = number + items;
    if (!loop) { l = Math.min(l, slideCountNew); }

    for (var i = number; i < l; i++) {
        var item = slideItems[i];

      // set item positions
      if (!isOut) { item.style.left = (i - index) * 100 / items + '%'; }

      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
      }
      removeClass(item, classOut);
      addClass(item, classIn);
      
      if (isOut) { slideItemsOut.push(item); }
    }
  }

  // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers
  var transformCore = (function () {
    return carousel ?
      function (duration, distance) {
        if (duration == null) { duration = speed; }
        if (TRANSITIONDURATION || !duration) {
          // for morden browsers with non-zero duration or 
          // zero duration for all browsers
          doContainerTransform(distance);
          // run fallback function manually 
          // when duration is 0 / container is hidden
          if (!duration || !isVisible(container)) { onTransitionEnd(); }

        } else {
          // for old browser with non-zero duration
          jsTransform(container, transformAttr, transformPrefix, transformPostfix, distance, speed, onTransitionEnd);
        }

        if (!horizontal) { updateContentWrapperHeight(); }
      } :
      function (duration) {
        if (duration == null) { duration = speed; }
        slideItemsOut = [];

        var eve = {};
        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
        removeEvents(slideItems[indexCached], eve);
        addEvents(slideItems[index], eve);

        animateSlide(indexCached, animateIn, animateOut, true);
        animateSlide(index, animateNormal, animateIn);

        // run fallback function manually 
        // when transition or animation not supported / duration is 0
        if (!TRANSITIONEND || !ANIMATIONEND || !duration || !isVisible(container)) { onTransitionEnd(); }
      };
  })();

  function render (e, sliderMoved) {
    if (updateIndexBeforeTransform) { updateIndex(); }
    // if (!carousel) { index = Math.floor(index);}

    // render when slider was moved (touch or drag) even though index may not change
    if (index !== indexCached || sliderMoved) {
      // events
      events.emit('indexChanged', info());
      events.emit('transitionStart', info());

      // pause autoplay when click or keydown from user
      if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) { stopAutoplay(); }

      running = true;
      transformCore();
    }
  }

  /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */
  function strTrans (str) {
    return str.toLowerCase().replace(/-/g, '');
  }

  // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height
  function onTransitionEnd (event) {
    // check running on gallery mode
    // make sure trantionend/animationend events run only once
    if (carousel || running) {
      events.emit('transitionEnd', info(event));

      if (!carousel && slideItemsOut.length > 0) {
        for (var i = 0; i < slideItemsOut.length; i++) {
          var item = slideItemsOut[i];
          // set item positions
          item.style.left = '';

          if (ANIMATIONDELAY && TRANSITIONDELAY) { 
            item.style[ANIMATIONDELAY] = '';
            item.style[TRANSITIONDELAY] = '';
          }
          removeClass(item, animateOut);
          addClass(item, animateNormal);
        }
      }

      /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event' 
       *    have to check event first, otherwise event.target will cause an error 
       * => or 'gallery' mode: 
       *   + event target is slide item
       * => or 'carousel' mode: 
       *   + event target is container, 
       *   + event.property is the same with transform attribute
       */
      if (!event || 
          !carousel && event.target.parentNode === container || 
          event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {

        if (!updateIndexBeforeTransform) { 
          var indexTem = index;
          updateIndex();
          if (index !== indexTem) { 
            events.emit('indexChanged', info());

            doContainerTransformSilent();
          }
        } 

        if (autoHeight) { runAutoHeight(); }

        if (nested === 'inner') { events.emit('innerLoaded', info()); }
        running = false;
        indexCached = index;
      }
    }

  }

  // # ACTIONS
  function goTo (targetIndex, e) {
    if (freeze) { return; }

    // prev slideBy
    if (targetIndex === 'prev') {
      onControlsClick(e, -1);

    // next slideBy
    } else if (targetIndex === 'next') {
      onControlsClick(e, 1);

    // go to exact slide
    } else {
      if (running) { onTransitionEnd(); }

      var absIndex = getAbsIndex(), 
          indexGap = 0;
      if (absIndex < 0) { absIndex += slideCount; }

      if (targetIndex === 'first') {
        indexGap = - absIndex;
      } else if (targetIndex === 'last') {
        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
      } else {
        if (typeof targetIndex !== 'number') { targetIndex = parseInt(targetIndex); }

        if (!isNaN(targetIndex)) {
          if (!e) {
            targetIndex -= 1; // switch from natual index to JS index
            if (carousel && cloneCount) { targetIndex += cloneCount; }
          }

          var absTargetIndex = getAbsIndex(targetIndex);
          if (absTargetIndex < 0) { absTargetIndex += slideCount; }
          indexGap = absTargetIndex - absIndex;
        }
      }

      // gallery: make sure new page won't overlap with current page
      if (!carousel && indexGap && Math.abs(indexGap) < items) {
        var factor = indexGap > 0 ? 1 : -1;
        indexGap += (index + indexGap - slideCount) >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
      }

      index += indexGap;

      // make sure index is in range
      if (carousel && loop) {
        if (index < indexMin) { index += slideCount; }
        if (index > indexMax) { index -= slideCount; }
      }

      // if index is changed, start rendering
      if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
        render(e);
      }

    }
  }

  // on controls click
  function onControlsClick (e, dir) {
    if (running) { onTransitionEnd(); }

    var passEventObject;

    if (!dir) {
      e = getEvent(e);
      var target = e.target || e.srcElement;

      while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) { target = target.parentNode; }

      var targetIn = [prevButton, nextButton].indexOf(target);
      if (targetIn >= 0) {
        passEventObject = true;
        dir = targetIn === 0 ? -1 : 1;
      }
    }

    if (rewind) {
      if (index === indexMin && dir === -1) {
        goTo('last', e);
        return;
      } else if (index === indexMax && dir === 1) {
        goTo('first', e);
        return;
      }
    }

    if (dir) {
      index += slideBy * dir;
      if (autoWidth) { index = Math.floor(index); }
      // pass e when click control buttons or keydown
      render((passEventObject || (e && e.type === 'keydown')) ? e : null);
    }
  }

  // on nav click
  function onNavClick (e) {
    // if (!running) {
    if (running) { onTransitionEnd(); }
    
    e = getEvent(e);
    var target = e.target || e.srcElement,
        navIndex;

    // find the clicked nav item
    while (target !== navContainer && !hasAttr(target, 'data-nav')) { target = target.parentNode; }
    if (hasAttr(target, 'data-nav')) {
      navIndex = navClicked = [].indexOf.call(navItems, target);
      goTo(carousel ? navIndex + cloneCount : navIndex, e);
    }
    // }
  }

  // autoplay functions
  function setAutoplayTimer () {
    autoplayTimer = setInterval(function () {
      onControlsClick(null, autoplayDirection);
    }, autoplayTimeout);

    animating = true;
  }

  function stopAutoplayTimer () {
    clearInterval(autoplayTimer);
    animating = false;
  }

  function updateAutoplayButton (action, txt) {
    setAttrs(autoplayButton, {'data-action': action});
    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
  }

  function startAutoplay () {
    setAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('stop', autoplayText[1]); }
  }

  function stopAutoplay () {
    stopAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('start', autoplayText[0]); }
  }

  // programaitcally play/pause the slider
  function play () {
    if (autoplay && !animating) {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }
  function pause () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    }
  }

  function toggleAutoplay () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    } else {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }

  function onVisibilityChange () {
    if (doc.hidden) {
      if (animating) {
        stopAutoplayTimer();
        autoplayVisibilityPaused = true;
      }
    } else if (autoplayVisibilityPaused) {
      setAutoplayTimer();
      autoplayVisibilityPaused = false;
    }
  }

  function mouseoverPause () {
    if (animating) { 
      stopAutoplayTimer();
      autoplayHoverPaused = true;
    }
  }

  function mouseoutRestart () {
    if (autoplayHoverPaused) { 
      setAutoplayTimer();
      autoplayHoverPaused = false;
    }
  }

  // keydown events on document 
  function onDocumentKeydown (e) {
    e = getEvent(e);
    switch(e.keyCode) {
      case KEYS.LEFT:
        onControlsClick(e, -1);
        break;
      case KEYS.RIGHT:
        onControlsClick(e, 1);
    }
  }

  // on key control
  function onControlsKeydown (e) {
    e = getEvent(e);
    var code = e.keyCode;

    switch (code) {
      case KEYS.LEFT:
      case KEYS.UP:
      case KEYS.PAGEUP:
          if (!prevButton.disabled) {
            onControlsClick(e, -1);
          }
          break;
      case KEYS.RIGHT:
      case KEYS.DOWN:
      case KEYS.PAGEDOWN:
          if (!nextButton.disabled) {
            onControlsClick(e, 1);
          }
          break;
      case KEYS.HOME:
        goTo('first', e);
        break;
      case KEYS.END:
        goTo(slideCount - 1, e);
        break;
    }
  }

  // set focus
  function setFocus (focus) {
    focus.focus();
  }

  // on key nav
  function onNavKeydown (e) {
    var curElement = doc.activeElement;
    if (!hasAttr(curElement, 'data-nav')) { return; }

    e = getEvent(e);
    var code = e.keyCode,
        navIndex = [].indexOf.call(navItems, curElement),
        len = visibleNavIndexes.length,
        current = visibleNavIndexes.indexOf(navIndex);

    if (options.navContainer) {
      len = slideCount;
      current = navIndex;
    }

    function getNavIndex (num) {
      return options.navContainer ? num : visibleNavIndexes[num];
    }

    switch(code) {
      case KEYS.LEFT:
      case KEYS.PAGEUP:
        if (current > 0) { setFocus(navItems[getNavIndex(current - 1)]); }
        break;

      case KEYS.UP:
      case KEYS.HOME:
        if (current > 0) { setFocus(navItems[getNavIndex(0)]); }
        break;

      case KEYS.RIGHT:
      case KEYS.PAGEDOWN:
        if (current < len - 1) { setFocus(navItems[getNavIndex(current + 1)]); }
        break;

      case KEYS.DOWN:
      case KEYS.END:
        if (current < len - 1) { setFocus(navItems[getNavIndex(len - 1)]); }
        break;

      // Can't use onNavClick here,
      // Because onNavClick require event.target as nav items
      case KEYS.ENTER:
      case KEYS.SPACE:
        navClicked = navIndex;
        goTo(navIndex + cloneCount, e);
        break;
    }
  }

  // IE10 scroll function
  function ie10Scroll () {
    transformCore(0, container.scrollLeft);
    indexCached = index;
  }

  function getEvent (e) {
    e = e || win.event;
    return isTouchEvent(e) ? e.changedTouches[0] : e;
  }
  function getTarget (e) {
    return e.target || win.event.srcElement;
  }

  function isTouchEvent (e) {
    return e.type.indexOf('touch') >= 0;
  }

  function preventDefaultBehavior (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }

  function onPanStart (e) {
    if (running) { onTransitionEnd(); }
    
    panStart = true;
    if (carousel) {
      caf(rafIndex);
      rafIndex = 0;
    }

    var $ = getEvent(e);
    events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

    if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
      preventDefaultBehavior(e);
    }

    lastPosition.x = initPosition.x = parseInt($.clientX);
    lastPosition.y = initPosition.y = parseInt($.clientY);
    if (carousel) {
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, '').replace(transformPostfix, ''));
      resetDuration(container, '0s');
    }
  }

  function onPanMove (e) {
    if (panStart) {
      var $ = getEvent(e);
      lastPosition.x = parseInt($.clientX);
      lastPosition.y = parseInt($.clientY);
    }
    if (carousel && !rafIndex) { rafIndex = raf(function(){ panUpdate(e); }); }
  }

  function panUpdate (e) {
    if (!moveDirectionExpected) {
      panStart = false;
      return;
    }
    caf(rafIndex);
    if (panStart) { rafIndex = raf(function(){ panUpdate(e); }); }

    if (
      moveDirectionExpected === '?' && 
      lastPosition.x !== initPosition.x && 
      lastPosition.y !== initPosition.y) {
      moveDirectionExpected = getTouchDirection(toDegree(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
    }

    if (moveDirectionExpected) {
      try {
        if (e.type) { events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e)); }
      } catch(err) {}

      var x = translateInit,
          dist = getDist(lastPosition, initPosition);
      if (!horizontal || fixedWidth || autoWidth) {
        x += dist;
        x += 'px';
      } else {
        var percentageX = TRANSFORM ? dist * items * 100 / (vpInner * slideCountNew): dist * 100 / vpInner;
        x += percentageX;
        x += '%';
      }

      container.style[transformAttr] = transformPrefix + x + transformPostfix;
    }
  }

  function onPanEnd (e) {
    if (swipeAngle) { moveDirectionExpected = '?'; } // reset

    if (panStart) {
      if (carousel) {
        caf(rafIndex);
        resetDuration(container, '');
      }
      panStart = false;

      var $ = getEvent(e);
      lastPosition.x = parseInt($.clientX);
      lastPosition.y = parseInt($.clientY);
      var dist = getDist(lastPosition, initPosition);

      // initPosition = {x:0, y:0}; // reset positions
      // lastPosition = {x:0, y:0}; // reset positions
      
      if (Math.abs(dist) >= 5) {
        // drag vs click
        if (!isTouchEvent(e)) { 

          // prevent "click"
          var target = getTarget(e);
          addEvents(target, {'click': function preventClick (e) {
            preventDefaultBehavior(e);
            removeEvents(target, {'click': preventClick});
          }}); 
        }

        if (carousel) {
          rafIndex = raf(function() {
            if (horizontal && !autoWidth) {
              var indexMoved = - dist * items / vpInner;
              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
              index += indexMoved;
            } else {
              var moved = - (translateInit + dist);
              if (moved <= 0) {
                index = indexMin;
              } else if (moved >= slidePositions[slidePositions.length - 1]) {
                index = indexMax;
              } else {
                var i = 0;
                while (i < slideCountNew && moved >= slidePositions[i]) {
                  index = i;
                  if (moved > slidePositions[i] && dist < 0) { index += 1; }
                  i++;
                }
              }
            }

            render(e, dist);
            events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
          });
        } else {
          if (
            moveDirectionExpected === '?' && 
            lastPosition.x !== initPosition.x && 
            lastPosition.y !== initPosition.y) {
            moveDirectionExpected = getTouchDirection(toDegree(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
          }

          if (moveDirectionExpected) {
            onControlsClick(e, dist > 0 ? -1 : 1);
          }
        }
      }

    }
  }

  // === RESIZE FUNCTIONS === //
  // (slidePositions, index, items) => vertical_conentWrapper.height
  function updateContentWrapperHeight () {
    innerWrapper.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
  }

  /*
   * get nav item indexes per items
   * add 1 more if the nav items cann't cover all slides
   * [0, 1, 2, 3, 4] / 3 => [0, 3]
   */
  function getVisibleNavIndex () {
    // reset visibleNavIndexes
    visibleNavIndexes = [];

    var absIndexMin = getAbsIndex()%items;
    while (absIndexMin < slideCount) {
      if (carousel && !loop && absIndexMin + items > slideCount) { absIndexMin = slideCount - items; }
      visibleNavIndexes.push(absIndexMin);
      absIndexMin += items;
    }

    // nav count * items < slide count means
    // some slides can not be displayed only by nav clicking
    if (loop && visibleNavIndexes.length * items < slideCount ||
        !loop && visibleNavIndexes[0] > 0) {
      visibleNavIndexes.unshift(0);
    }
  }
  
  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */
  function updateNavVisibility () {
    if (!nav || navAsThumbnails) { return; }
    getVisibleNavIndex();

    if (visibleNavIndexes !== visibleNavIndexesCached) {
      forEachNodeList(navItems, function(el, i) {
        if (visibleNavIndexes.indexOf(i) < 0) {
          hideElement(el);
        } else {
          showElement(el);
        }
      });

      // cache visible nav indexes
      visibleNavIndexesCached = visibleNavIndexes;
    }
  }

  function info (e) {
    return {
      container: container,
      slideItems: slideItems,
      navContainer: navContainer,
      navItems: navItems,
      controlsContainer: controlsContainer,
      hasControls: hasControls,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      slideBy: slideBy,
      cloneCount: cloneCount,
      slideCount: slideCount,
      slideCountNew: slideCountNew,
      index: index,
      indexCached: indexCached,
      navCurrentIndex: navCurrentIndex,
      navCurrentIndexCached: navCurrentIndexCached,
      visibleNavIndexes: visibleNavIndexes,
      visibleNavIndexesCached: visibleNavIndexesCached,
      sheet: sheet,
      event: e || {},
    };
  }

  return {
    getInfo: info,
    events: events,
    goTo: goTo,
    play: play,
    pause: pause,
    isOn: isOn,
    updateSliderHeight: updateInnerWrapperHeight,
    rebuild: function() {
      return tns(options);
    },

    destroy: function () {
      // remove win event listeners
      removeEvents(win, {'resize': onResize});

      // remove arrowKeys eventlistener
      removeEvents(doc, docmentKeydownEvent);

      // sheet
      sheet.disabled = true;

      // cloned items
      if (loop) {
        for (var j = cloneCount; j--;) {
          if (carousel) { slideItems[0].remove(); }
          slideItems[slideItems.length - 1].remove();
        }
      }

      // Slide Items
      var slideClasses = ['tns-item', slideActiveClass];
      if (!carousel) { slideClasses = slideClasses.concat('tns-normal', animateIn); }

      for (var i = slideCount; i--;) {
        var slide = slideItems[i];
        if (slide.id.indexOf(slideId + '-item') >= 0) { slide.id = ''; }

        slideClasses.forEach(function(cl) { removeClass(slide, cl); })
      }
      removeAttrs(slideItems, ['style', 'aria-hidden', 'tabindex']);
      slideItems = slideId = slideCount = slideCountNew = cloneCount = null;

      // controls
      if (controls) {
        removeEvents(controlsContainer, controlsEvents);
        if (options.controlsContainer) {
          removeAttrs(controlsContainer, ['aria-label', 'tabindex']);
          removeAttrs(controlsContainer.children, ['aria-controls', 'aria-disabled', 'tabindex']);
        }
        controlsContainer = prevButton = nextButton = null;
      }

      // nav
      if (nav) {
        removeEvents(navContainer, navEvents);
        if (options.navContainer) {
          removeAttrs(navContainer, ['aria-label']);
          removeAttrs(navItems, ['aria-selected', 'aria-controls', 'tabindex']);
        }
        navContainer = navItems = null;
      }

      // auto
      if (autoplay) {
        clearInterval(autoplayTimer);
        if (autoplayButton) {
          removeEvents(autoplayButton, {'click': toggleAutoplay});
        }
        removeEvents(container, hoverEvents);
        removeEvents(container, visibilityEvent);
        if (options.autoplayButton) {
          removeAttrs(autoplayButton, ['data-action'])
        }
      }

      // container
      container.id = containerIdCached || '';
      container.className = container.className.replace(classContainer, '');
      removeElementStyles(container);
      if (carousel && TRANSITIONEND) {
        var eve = {};
        eve[TRANSITIONEND] = onTransitionEnd;
        removeEvents(container, eve);
      }
      removeEvents(container, touchEvents);
      removeEvents(container, dragEvents);

      // outerWrapper
      containerParent.insertBefore(container, outerWrapper);
      outerWrapper.remove();
      outerWrapper = innerWrapper = container =
      index = indexCached = items = slideBy = navCurrentIndex = navCurrentIndexCached = hasControls = visibleNavIndexes = visibleNavIndexesCached = 
      this.getInfo = this.events = this.goTo = this.play = this.pause = this.destroy = null;
      this.isOn = isOn = false;
    }
  };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(20);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,r,p){if(p.get||p.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[r]=p.value)};$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var e=$jscomp.global.Symbol.iterator;e||(e=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[e]&&$jscomp.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(e){var r=0;return $jscomp.iteratorPrototype(function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(e){$jscomp.initSymbolIterator();e={next:e};e[$jscomp.global.Symbol.iterator]=function(){return this};return e};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(e,r){$jscomp.initSymbolIterator();e instanceof String&&(e+="");var p=0,m={next:function(){if(p<e.length){var u=p++;return{value:r(u,e[u]),done:!1}}m.next=function(){return{done:!0,value:void 0}};return m.next()}};m[Symbol.iterator]=function(){return m};return m};
$jscomp.polyfill=function(e,r,p,m){if(r){p=$jscomp.global;e=e.split(".");for(m=0;m<e.length-1;m++){var u=e[m];u in p||(p[u]={});p=p[u]}e=e[e.length-1];m=p[e];r=r(m);r!=m&&null!=r&&$jscomp.defineProperty(p,e,{configurable:!0,writable:!0,value:r})}};$jscomp.polyfill("Array.prototype.keys",function(e){return e?e:function(){return $jscomp.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var $jscomp$this=this;
(function(e,r){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})(this,function(){function e(a){if(!h.col(a))try{return document.querySelectorAll(a)}catch(c){}}function r(a,c){for(var d=a.length,b=2<=arguments.length?arguments[1]:void 0,f=[],n=0;n<d;n++)if(n in a){var k=a[n];c.call(b,k,n,a)&&f.push(k)}return f}function p(a){return a.reduce(function(a,d){return a.concat(h.arr(d)?p(d):d)},[])}function m(a){if(h.arr(a))return a;
h.str(a)&&(a=e(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function u(a,c){return a.some(function(a){return a===c})}function C(a){var c={},d;for(d in a)c[d]=a[d];return c}function D(a,c){var d=C(a),b;for(b in a)d[b]=c.hasOwnProperty(b)?c[b]:a[b];return d}function z(a,c){var d=C(a),b;for(b in c)d[b]=h.und(a[b])?c[b]:a[b];return d}function T(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,c,d,k){return c+c+d+d+k+k});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
a=parseInt(c[1],16);var d=parseInt(c[2],16),c=parseInt(c[3],16);return"rgba("+a+","+d+","+c+",1)"}function U(a){function c(a,c,b){0>b&&(b+=1);1<b&&--b;return b<1/6?a+6*(c-a)*b:.5>b?c:b<2/3?a+(c-a)*(2/3-b)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a=parseInt(d[1])/360;var b=parseInt(d[2])/100,f=parseInt(d[3])/100,d=d[4]||1;if(0==b)f=b=a=f;else{var n=.5>f?f*(1+b):f+b-f*b,k=2*f-n,f=c(k,n,a+1/3),b=c(k,n,a);a=c(k,n,a-1/3)}return"rgba("+
255*f+","+255*b+","+255*a+","+d+")"}function y(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a))return a[2]}function V(a){if(-1<a.indexOf("translate")||"perspective"===a)return"px";if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function I(a,c){return h.fnc(a)?a(c.target,c.id,c.total):a}function E(a,c){if(c in a.style)return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function J(a,c){if(h.dom(a)&&
u(W,c))return"transform";if(h.dom(a)&&(a.getAttribute(c)||h.svg(a)&&a[c]))return"attribute";if(h.dom(a)&&"transform"!==c&&E(a,c))return"css";if(null!=a[c])return"object"}function X(a,c){var d=V(c),d=-1<c.indexOf("scale")?1:0+d;a=a.style.transform;if(!a)return d;for(var b=[],f=[],n=[],k=/(\w+)\((.+?)\)/g;b=k.exec(a);)f.push(b[1]),n.push(b[2]);a=r(n,function(a,b){return f[b]===c});return a.length?a[0]:d}function K(a,c){switch(J(a,c)){case "transform":return X(a,c);case "css":return E(a,c);case "attribute":return a.getAttribute(c)}return a[c]||
0}function L(a,c){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;var b=y(a)||0;c=parseFloat(c);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return c+a+b;case "-":return c-a+b;case "*":return c*a+b}}function F(a,c){return Math.sqrt(Math.pow(c.x-a.x,2)+Math.pow(c.y-a.y,2))}function M(a){a=a.points;for(var c=0,d,b=0;b<a.numberOfItems;b++){var f=a.getItem(b);0<b&&(c+=F(d,f));d=f}return c}function N(a){if(a.getTotalLength)return a.getTotalLength();switch(a.tagName.toLowerCase()){case "circle":return 2*
Math.PI*a.getAttribute("r");case "rect":return 2*a.getAttribute("width")+2*a.getAttribute("height");case "line":return F({x:a.getAttribute("x1"),y:a.getAttribute("y1")},{x:a.getAttribute("x2"),y:a.getAttribute("y2")});case "polyline":return M(a);case "polygon":var c=a.points;return M(a)+F(c.getItem(c.numberOfItems-1),c.getItem(0))}}function Y(a,c){function d(b){b=void 0===b?0:b;return a.el.getPointAtLength(1<=c+b?c+b:0)}var b=d(),f=d(-1),n=d(1);switch(a.property){case "x":return b.x;case "y":return b.y;
case "angle":return 180*Math.atan2(n.y-f.y,n.x-f.x)/Math.PI}}function O(a,c){var d=/-?\d*\.?\d+/g,b;b=h.pth(a)?a.totalLength:a;if(h.col(b))if(h.rgb(b)){var f=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b=f?"rgba("+f[1]+",1)":b}else b=h.hex(b)?T(b):h.hsl(b)?U(b):void 0;else f=(f=y(b))?b.substr(0,b.length-f.length):b,b=c&&!/\s/g.test(b)?f+c:f;b+="";return{original:b,numbers:b.match(d)?b.match(d).map(Number):[0],strings:h.str(a)||c?b.split(d):[]}}function P(a){a=a?p(h.arr(a)?a.map(m):m(a)):[];return r(a,
function(a,d,b){return b.indexOf(a)===d})}function Z(a){var c=P(a);return c.map(function(a,b){return{target:a,id:b,total:c.length}})}function aa(a,c){var d=C(c);if(h.arr(a)){var b=a.length;2!==b||h.obj(a[0])?h.fnc(c.duration)||(d.duration=c.duration/b):a={value:a}}return m(a).map(function(a,b){b=b?0:c.delay;a=h.obj(a)&&!h.pth(a)?a:{value:a};h.und(a.delay)&&(a.delay=b);return a}).map(function(a){return z(a,d)})}function ba(a,c){var d={},b;for(b in a){var f=I(a[b],c);h.arr(f)&&(f=f.map(function(a){return I(a,
c)}),1===f.length&&(f=f[0]));d[b]=f}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return h.arr(a)?A.apply(this,a):Q[a]}function da(a,c){var d;return a.tweens.map(function(b){b=ba(b,c);var f=b.value,e=K(c.target,a.name),k=d?d.to.original:e,k=h.arr(f)?f[0]:k,w=L(h.arr(f)?f[1]:f,k),e=y(w)||y(k)||y(e);b.from=O(k,e);b.to=O(w,e);b.start=d?d.end:a.offset;b.end=b.start+b.delay+b.duration;b.easing=ca(b.easing);b.elasticity=(1E3-Math.min(Math.max(b.elasticity,1),999))/
1E3;b.isPath=h.pth(f);b.isColor=h.col(b.from.original);b.isColor&&(b.round=1);return d=b})}function ea(a,c){return r(p(a.map(function(a){return c.map(function(b){var c=J(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})),function(a){return!h.und(a)})}function R(a,c,d,b){var f="delay"===a;return c.length?(f?Math.min:Math.max).apply(Math,c.map(function(b){return b[a]})):f?b.delay:d.offset+b.delay+
b.duration}function fa(a){var c=D(ga,a),d=D(S,a),b=Z(a.targets),f=[],e=z(c,d),k;for(k in a)e.hasOwnProperty(k)||"targets"===k||f.push({name:k,offset:e.offset,tweens:aa(a[k],d)});a=ea(b,f);return z(c,{children:[],animatables:b,animations:a,duration:R("duration",a,c,d),delay:R("delay",a,c,d)})}function q(a){function c(){return window.Promise&&new Promise(function(a){return p=a})}function d(a){return g.reversed?g.duration-a:a}function b(a){for(var b=0,c={},d=g.animations,f=d.length;b<f;){var e=d[b],
k=e.animatable,h=e.tweens,n=h.length-1,l=h[n];n&&(l=r(h,function(b){return a<b.end})[0]||l);for(var h=Math.min(Math.max(a-l.start-l.delay,0),l.duration)/l.duration,w=isNaN(h)?1:l.easing(h,l.elasticity),h=l.to.strings,p=l.round,n=[],m=void 0,m=l.to.numbers.length,t=0;t<m;t++){var x=void 0,x=l.to.numbers[t],q=l.from.numbers[t],x=l.isPath?Y(l.value,w*x):q+w*(x-q);p&&(l.isColor&&2<t||(x=Math.round(x*p)/p));n.push(x)}if(l=h.length)for(m=h[0],w=0;w<l;w++)p=h[w+1],t=n[w],isNaN(t)||(m=p?m+(t+p):m+(t+" "));
else m=n[0];ha[e.type](k.target,e.property,m,c,k.id);e.currentValue=m;b++}if(b=Object.keys(c).length)for(d=0;d<b;d++)H||(H=E(document.body,"transform")?"transform":"-webkit-transform"),g.animatables[d].target.style[H]=c[d].join(" ");g.currentTime=a;g.progress=a/g.duration*100}function f(a){if(g[a])g[a](g)}function e(){g.remaining&&!0!==g.remaining&&g.remaining--}function k(a){var k=g.duration,n=g.offset,w=n+g.delay,r=g.currentTime,x=g.reversed,q=d(a);if(g.children.length){var u=g.children,v=u.length;
if(q>=g.currentTime)for(var G=0;G<v;G++)u[G].seek(q);else for(;v--;)u[v].seek(q)}if(q>=w||!k)g.began||(g.began=!0,f("begin")),f("run");if(q>n&&q<k)b(q);else if(q<=n&&0!==r&&(b(0),x&&e()),q>=k&&r!==k||!k)b(k),x||e();f("update");a>=k&&(g.remaining?(t=h,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||(g.completed=!0,f("complete"),"Promise"in window&&(p(),m=c()))),l=0)}a=void 0===a?{}:a;var h,t,l=0,p=null,m=c(),g=fa(a);g.reset=function(){var a=g.direction,c=g.loop;g.currentTime=
0;g.progress=0;g.paused=!0;g.began=!1;g.completed=!1;g.reversed="reverse"===a;g.remaining="alternate"===a&&1===c?2:c;b(0);for(a=g.children.length;a--;)g.children[a].reset()};g.tick=function(a){h=a;t||(t=h);k((l+h-t)*q.speed)};g.seek=function(a){k(d(a))};g.pause=function(){var a=v.indexOf(g);-1<a&&v.splice(a,1);g.paused=!0};g.play=function(){g.paused&&(g.paused=!1,t=0,l=d(g.currentTime),v.push(g),B||ia())};g.reverse=function(){g.reversed=!g.reversed;t=0;l=d(g.currentTime)};g.restart=function(){g.pause();
g.reset();g.play()};g.finished=m;g.reset();g.autoplay&&g.play();return g}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},S={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},W="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),H,h={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},
pth:function(a){return h.obj(a)&&a.hasOwnProperty("totalLength")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||h.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return h.hex(a)||h.rgb(a)||h.hsl(a)}},A=function(){function a(a,
d,b){return(((1-3*b+3*d)*a+(3*b-6*d))*a+3*d)*a}return function(c,d,b,f){if(0<=c&&1>=c&&0<=b&&1>=b){var e=new Float32Array(11);if(c!==d||b!==f)for(var k=0;11>k;++k)e[k]=a(.1*k,c,b);return function(k){if(c===d&&b===f)return k;if(0===k)return 0;if(1===k)return 1;for(var h=0,l=1;10!==l&&e[l]<=k;++l)h+=.1;--l;var l=h+(k-e[l])/(e[l+1]-e[l])*.1,n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(.001<=n){for(h=0;4>h;++h){n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(0===n)break;var m=a(l,c,b)-k,l=l-m/n}k=l}else if(0===
n)k=l;else{var l=h,h=h+.1,g=0;do m=l+(h-l)/2,n=a(m,c,b)-k,0<n?h=m:l=m;while(1e-7<Math.abs(n)&&10>++g);k=m}return a(k,d,f)}}}}(),Q=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var c="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,
.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},b={linear:A(.25,.25,.75,.75)},f={},e;for(e in d)f.type=e,d[f.type].forEach(function(a){return function(d,f){b["ease"+a.type+c[f]]=h.fnc(d)?
d:A.apply($jscomp$this,d)}}(f)),f={type:f.type};return b}(),ha={css:function(a,c,d){return a.style[c]=d},attribute:function(a,c,d){return a.setAttribute(c,d)},object:function(a,c,d){return a[c]=d},transform:function(a,c,d,b,f){b[f]||(b[f]=[]);b[f].push(c+"("+d+")")}},v=[],B=0,ia=function(){function a(){B=requestAnimationFrame(c)}function c(c){var b=v.length;if(b){for(var d=0;d<b;)v[d]&&v[d].tick(c),d++;a()}else cancelAnimationFrame(B),B=0}return a}();q.version="2.2.0";q.speed=1;q.running=v;q.remove=
function(a){a=P(a);for(var c=v.length;c--;)for(var d=v[c],b=d.animations,f=b.length;f--;)u(a,b[f].animatable.target)&&(b.splice(f,1),b.length||d.pause())};q.getValue=K;q.path=function(a,c){var d=h.str(a)?e(a)[0]:a,b=c||100;return function(a){return{el:d,property:a,totalLength:N(d)*(b/100)}}};q.setDashoffset=function(a){var c=N(a);a.setAttribute("stroke-dasharray",c);return c};q.bezier=A;q.easings=Q;q.timeline=function(a){var c=q(a);c.pause();c.duration=0;c.add=function(d){c.children.forEach(function(a){a.began=
!0;a.completed=!0});m(d).forEach(function(b){var d=z(b,D(S,a||{}));d.targets=d.targets||a.targets;b=c.duration;var e=d.offset;d.autoplay=!1;d.direction=c.direction;d.offset=h.und(e)?b:L(e,b);c.began=!0;c.completed=!0;c.seek(d.offset);d=q(d);d.began=!0;d.completed=!0;d.duration>b&&(c.duration=d.duration);c.children.push(d)});c.seek(0);c.reset();c.autoplay&&c.restart();return c};return c};q.random=function(a,c){return Math.floor(Math.random()*(c-a+1))+a};return q});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(28);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(10);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(9);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3), __webpack_require__(11)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(12);
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<div id=santillana_microcontenidos_menu class=sm-base> <div id=sm-left-menu> <div class=\"sm-left-menu--level1 sm-color-background-color_before\"> <div class=sm-left-menu--image></div> <div class=sm-left-menu--title></div> <div class=sm-left-menu--arrow> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=10 height=16 viewBox=\"0 0 10 16\"> <path d=\"M0.413623017,0.411885438 C0.968407485,-0.137295146 1.8619621,-0.137295146 2.41674657,0.411885438 L10,7.91854035 L2.41674657,15.4251953 C1.8619621,15.9743759 0.968407485,15.9743759 0.413623017,15.4251953 C0.410269289,15.4218754 0.406932428,15.4185386 0.403612562,15.4151849 C-0.138421122,14.8676249 -0.13394118,13.9843347 0.413618791,13.442301 L5.99369679,7.91854035 L0.413618791,2.39477968 C0.410265077,2.39145982 0.40692823,2.38812296 0.403608378,2.38476923 C-0.138422971,1.83720695 -0.133939265,0.953916788 0.413623017,0.411885438 Z\"/> </svg> </div> </div> <div class=\"sm-left-menu--level2 sm-color-background-color_before\"> <div class=sm-left-menu--image></div> <div class=sm-left-menu--title></div> <div class=sm-left-menu--arrow> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=10 height=16 viewBox=\"0 0 10 16\"> <path d=\"M0.413623017,0.411885438 C0.968407485,-0.137295146 1.8619621,-0.137295146 2.41674657,0.411885438 L10,7.91854035 L2.41674657,15.4251953 C1.8619621,15.9743759 0.968407485,15.9743759 0.413623017,15.4251953 C0.410269289,15.4218754 0.406932428,15.4185386 0.403612562,15.4151849 C-0.138421122,14.8676249 -0.13394118,13.9843347 0.413618791,13.442301 L5.99369679,7.91854035 L0.413618791,2.39477968 C0.410265077,2.39145982 0.40692823,2.38812296 0.403608378,2.38476923 C-0.138422971,1.83720695 -0.133939265,0.953916788 0.413623017,0.411885438 Z\"/> </svg> </div> </div> </div> <div id=sm-left-menu__background></div> <div id=sm-home> <div class=sm-content> <div class=sm-content--content> <h2><strong class=sm-color-color>3º</strong><span>ESO</span></h2> <h1></h1> <a href=#units class=\"sm-button-next-screen sm-color-background-color\"> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> <span>Unidades</span> </a> </div> </div> </div> <div id=sm-units-menu> <div id=sm-units-menu__unit--template class=\"sm-units-menu__unit sm-color-background-color_after\"> <a> <div class=sm-units-menu__unit__number></div> <div class=sm-units-menu__unit__title></div> <div class=sm-units-menu__unit__progress> <div class=sm-units-menu__unit__progress__title></div> <div class=sm-units-menu__unit__progress__bar> <div class=sm-color-background-color></div> </div> </div> </a> </div> <div class=sm-content> <div id=sm-units-menu-slider__controls> <div class=\"sm-units-menu-slider__controls__prev sm-button-slide-left\"> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> </div> <div class=\"sm-units-menu-slider__controls__next sm-button-slide-right\"> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> </div> </div> <div class=sm-units-menu-slider></div> <a href=# class=\"sm-button-back-screen sm-color-background-color\"> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> <span>Portada</span> </a> </div> </div> <div id=sm-unit> <div id=sm-unit__activity_main--template class=sm-unit__activity_main> <a class=sm-unit__activity_main__link> <div class=sm-unit__activity_main__number></div> <div class=sm-unit__activity_main__texts> <div class=sm-unit__activity_main__title></div> <div class=sm-unit__activity_main__type></div> <div class=sm-unit__activity_main__progress> <div class=sm-unit__activity_main__progress__title></div> <div class=sm-unit__activity_main__progress__bar> <div class=sm-color-background-color></div> </div> </div> </div> <div class=sm-unit__activity_main__image></div> </a> <a href=# class=sm-unit__activity_main__send_link> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=14 viewBox=\"0 0 16 14\"> <path fill=red id=folder-action-a d=\"M13.4122915,1.13076588 C14.6339038,1.13076588 15.6316299,2.07195626 15.7090789,3.24796695 C15.1233298,2.65359791 14.2004495,2.26159435 13.4122915,2.26159435 L5.55414155,2.26159435 L2.31364722,2.26159435 C1.52418756,2.26159435 0.602608935,2.65423428 0.0155581432,3.24796695 C0.0103514843,3.25305791 0.00514482538,3.25751249 -6.18335273e-05,3.26260345 L-6.18335273e-05,0.565033469 C-6.18335273e-05,0.254485191 0.260271112,-6.25777779e-05 0.578528137,-6.25777779e-05 L4.05006796,-6.25777779e-05 C4.36767415,-6.25777779e-05 4.72498112,0.236666847 4.84278178,0.524942195 L5.09074891,1.13076588 L13.4122915,1.13076588 Z M13.4121613,3.3929319 C14.6845386,3.3929319 15.7245687,4.41048661 15.7245687,5.65458883 L15.7245687,9.4759872 L15.7245687,10.607452 L15.7245687,11.7382805 C15.7245687,12.9823827 14.6845386,13.9999374 13.4121613,13.9999374 L2.31351705,13.9999374 C1.04113978,13.9999374 -0.000192,12.9823827 -0.000192,11.7382805 L-0.000192,10.607452 L-0.000192,9.4759872 L-0.000192,5.65458883 C-0.000192,5.52540584 0.0180313062,5.4013138 0.0395087741,5.2784945 C0.224995998,4.21257572 1.17325875,3.3929319 2.31351705,3.3929319 L6.0167532,3.3929319 L13.4121613,3.3929319 Z M9.26831168,12.3116493 L9.98162395,11.7376441 L12.3467488,9.83299045 C12.4730102,9.70635294 12.4678036,9.51926033 12.3395896,9.39580466 L9.20583177,7.00687385 C9.06980781,6.87705449 8.73853414,6.91587302 8.73462914,7.17805722 C8.73332748,7.403332 8.72681915,8.56534256 8.72681915,8.56534256 C6.7066355,8.56534256 4.68449935,7.50387837 4.26861747,5.65586157 C4.25560082,5.59795195 4.23802835,5.5406787 4.22891669,5.48085998 C4.19247008,5.26258526 4.10721104,4.97303718 3.78960485,4.96858259 C3.35484883,4.96158253 3.29236892,5.31222208 3.28976559,5.54513329 C3.28846393,5.58267908 3.29236892,5.61831577 3.29236892,5.65586157 C3.2656848,8.52016033 5.7915652,10.7907264 8.73723247,10.7907264 C8.73723247,10.7907264 8.73462914,11.2578216 8.73853414,11.7376441 C8.7398358,11.8967365 8.74048663,12.0577379 8.74308996,12.2028302 C8.74569329,12.3791045 9.01904289,12.5420151 9.26831168,12.3116493 Z\"/> </svg> Enviar </a> </div> <div id=sm-unit__activity_aside--template class=sm-unit__activity_aside> <a> <div class=sm-unit__activity_aside__header> <div class=sm-unit__activity_aside__icon> <svg class=flipped-icon width=84px height=84px viewBox=\"0 0 84 84\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <path d=\"M83.5083091,41.5247926 C83.5083091,64.453462 64.8145033,83.0407093 41.7543865,83.0407093 C18.6938057,83.0407093 0,64.453462 0,41.5247926 C0,18.5961232 18.6938057,0.00887594401 41.7543865,0.00887594401 C64.8145033,0.00887594401 83.5083091,18.5961232 83.5083091,41.5247926\" fill-opacity=0.521824049 fill=#031023></path> <path d=\"M45.3279684,9.62285559 C44.1548639,9.49413878 42.9560372,9.42328164 41.7648006,9.42328164 L41.7466685,9.42328164 L41.7466685,8.16546259 L41.7648006,8.16546259 C43.0011566,8.16546259 44.2455244,8.25099429 45.4629049,8.38432311 L45.3279684,9.62285559 Z M34.5351543,10.2429604 L34.2602211,9.04551665 C35.4750715,8.76921573 36.7207044,8.55832141 37.9629638,8.41870349 L38.1021171,9.63878797 C36.9053988,9.77337461 35.7057287,9.97672202 34.5351543,10.2429604 Z M52.3754504,11.2093847 C51.2398751,10.8165259 50.068879,10.4840424 48.8957746,10.2207389 L49.1673343,9.02245664 C50.3859799,9.29582264 51.6016737,9.64130361 52.781525,10.0492563 L52.3754504,11.2093847 Z M27.7200161,12.6244311 L27.1823784,11.5188082 C28.3090984,10.9766882 29.4758777,10.4936856 30.6510906,10.0836366 L31.0605386,11.242088 C29.9287584,11.6374624 28.8049902,12.1024362 27.7200161,12.6244311 Z M58.8903547,14.3208097 C57.8703189,13.6847726 56.8043203,13.0994674 55.7214547,12.5825038 L56.2565623,11.4752038 C57.3807523,12.0122925 58.4880752,12.6193998 59.5469053,13.2801741 L58.8903547,14.3208097 Z M21.6124514,16.4586828 L20.8407831,15.4998055 C21.8144345,14.7241504 22.8437472,13.9950346 23.8992039,13.3330025 L24.5587062,14.3711225 C23.5420438,15.0096753 22.5506819,15.7115383 21.6124514,16.4586828 Z M64.5450387,18.7944528 C63.6919869,17.9487791 62.782852,17.1433557 61.8433564,16.4004039 L62.6124946,15.4390109 C63.5878327,16.2104732 64.5311234,17.0465036 65.4174878,17.924042 L64.5450387,18.7944528 Z M16.5088988,21.5448838 L15.5428375,20.7797105 C16.319566,19.8099321 17.1608109,18.8720183 18.0433801,17.9928028 L18.9179375,18.8598594 C18.0682591,19.7072102 17.2577965,20.6107435 16.5088988,21.5448838 Z M69.0628825,24.4005523 C68.4210906,23.3909429 67.7139388,22.4056513 66.9620894,21.4723496 L67.9256205,20.7042414 C68.7065657,21.6731813 69.4407048,22.6957882 70.1073756,23.7439708 L69.0628825,24.4005523 Z M12.6661594,27.6302124 L11.5525113,27.0981549 C12.0935225,25.9799538 12.7049536,24.8797814 13.3699377,23.8269868 L14.4156958,24.4806335 C13.7755907,25.4940163 13.1865084,26.5539385 12.6661594,27.6302124 Z M72.2136505,30.8636459 C71.8147443,29.7374785 71.3462616,28.6201159 70.8212741,27.5430036 L71.9332355,27.0075919 C72.4784634,28.1257931 72.9646566,29.2855022 73.3787431,30.4556932 L72.2136505,30.8636459 Z M10.2870597,34.4157268 L9.08232945,34.1444572 C9.35810599,32.9323389 9.70598923,31.7235748 10.117124,30.5517067 L11.2834816,30.9563052 C10.8879489,32.0841496 10.552716,33.2480515 10.2870597,34.4157268 Z M73.8295154,37.8642474 C73.6937355,36.6756084 73.488379,35.4827767 73.2201927,34.3180362 L74.4240795,34.0438317 C74.7028078,35.2530151 74.9157545,36.4919668 75.0565945,37.7258873 L73.8295154,37.8642474 Z M8.52655961,41.5488187 L8.25837326,41.5433681 C8.25795158,40.2909996 8.3262632,39.0486937 8.46119973,37.8286092 L9.68912216,37.9631958 C9.55924575,39.1379988 9.49346419,40.3358618 9.49346419,41.5224045 L8.52655961,41.5488187 Z M75.1687605,45.2505801 L73.9779456,45.1143164 C74.1111954,43.9302894 74.2157712,42.7215253 74.2157712,41.5224045 L74.2157712,41.2880309 L75.4808012,41.2880309 L75.4808012,41.5224045 C75.4808012,42.7672261 75.3062271,44.0212716 75.1687605,45.2505801 Z M9.09793149,48.9678547 C8.82004657,47.7586713 8.60878656,46.5197195 8.46878991,45.2853798 L9.69671234,45.147439 C9.83080552,46.3369165 10.034897,47.5301675 10.30224,48.6940694 L9.09793149,48.9678547 Z M73.4010919,52.5258055 L72.235156,52.1203685 C72.6319537,50.9925241 72.9684517,49.8290415 73.2349513,48.6617854 L74.4396815,48.9338936 C74.16264,50.1460119 73.81307,51.3543567 73.4010919,52.5258055 Z M11.5820287,56.0066101 C11.0380658,54.8879897 10.552716,53.7270227 10.1398945,52.5564124 L11.3049871,52.1497176 C11.7034716,53.2771427 12.1702676,54.3949246 12.6935684,55.472037 L11.5820287,56.0066101 Z M70.1411097,59.2471712 L69.0957732,58.5931053 C69.7371434,57.5797224 70.3270691,56.5202195 70.8486831,55.444365 L71.9614878,55.9785188 C71.4196333,57.0954621 70.8073588,58.1956345 70.1411097,59.2471712 Z M15.5820535,62.3137341 C14.8019517,61.3439556 14.0694993,60.3209294 13.4040935,59.271489 L14.4490083,58.6165846 C15.0899568,59.6270326 15.7958435,60.6127434 16.546428,61.5464644 L15.5820535,62.3137341 Z M65.4617638,65.076324 L64.5880498,64.2080095 C65.4381499,63.3623359 66.2494558,62.4600603 67.0000403,61.5255008 L67.9652581,62.2919319 C67.1864213,63.2617103 66.344333,64.1983663 65.4617638,65.076324 Z M20.8896976,67.5844151 C19.9135161,66.8104371 18.9710688,65.9731489 18.0876562,65.0964491 L18.9609485,64.2272961 C19.8114704,65.0721312 20.7201836,65.8788125 21.6596792,66.6238607 L20.8896976,67.5844151 Z M59.6008799,69.7306737 L58.9426427,68.6917152 C59.9593051,68.0548395 60.9510886,67.3533957 61.8905842,66.6070897 L62.6614091,67.5668057 C61.6864927,68.3416222 60.6567583,69.0698994 59.6008799,69.7306737 Z M27.2418348,71.5545113 C26.1172231,71.0161648 25.0107436,70.4077996 23.9531785,69.7461868 L24.6105724,68.7063897 C25.6293432,69.3432654 26.6949201,69.9294091 27.7782075,70.4480498 L27.2418348,71.5545113 Z M52.8464632,72.9733312 L52.4378585,71.813622 C53.5709037,71.4195054 54.6950937,70.9553702 55.7792244,70.4346331 L56.3164404,71.5410946 C55.1905637,72.0815375 54.0229411,72.5632822 52.8464632,72.9733312 Z M34.3276894,74.0143861 C33.1086221,73.7397623 31.89335,73.3930235 30.7143421,72.9833938 L31.1221034,71.8236846 C32.2568353,72.2182205 33.426988,72.5519618 34.6005142,72.8165231 L34.3276894,74.0143861 Z M45.5316382,74.6302982 L45.3941716,73.4093751 C46.5913116,73.2756271 47.7914034,73.0739567 48.9611345,72.8089762 L49.235646,74.0072585 C48.0207955,74.2818823 46.774741,74.4915188 45.5316382,74.6302982 Z M41.7816677,74.8298721 L41.7648006,74.8298721 C40.5179027,74.8298721 39.2621496,74.7653041 38.0325405,74.6298789 L38.1683204,73.4110522 C39.3532318,73.5414461 40.5630221,73.6089491 41.7648006,73.6089491 L41.8120284,73.6068527 L41.7816677,74.8298721 Z\" fill-opacity=0.56 fill=#FFFFFF></path> <path d=\"M50.9232765,37.6128283 C50.9232765,43.044906 46.5177195,47.4492429 41.0820493,47.4492429 C35.6473138,47.4492429 31.240822,43.044906 31.240822,37.6128283 C31.240822,32.1807506 35.6473138,27.7764137 41.0820493,27.7764137 C46.5177195,27.7764137 50.9232765,32.1807506 50.9232765,37.6128283\" fill-opacity=0.18 fill=#000000></path> <polygon fill=#FFFFFF points=\"41.4046019 37.3097957 38.4820985 34.6809759 54.0494924 20.6770261 56.9719957 23.3067754\"></polygon> <path d=\"M81.9810609,18.8689674 C81.9810609,28.8729698 73.6643051,36.9829099 63.4051857,36.9829099 C53.1451417,36.9829099 44.828386,28.8729698 44.828386,18.8689674 C44.828386,8.86496504 53.1451417,0.755024922 63.4051857,0.755024922 C73.6643051,0.755024922 81.9810609,8.86496504 81.9810609,18.8689674\" fill=#FF1D25></path> <path d=\"M69.3273149,9.24368734 C69.3273149,10.8384499 68.0015892,12.1312083 66.3661578,12.1312083 C64.7307264,12.1312083 63.4050008,10.8384499 63.4050008,9.24368734 C63.4050008,7.64892477 64.7307264,6.35616642 66.3661578,6.35616642 C68.0015892,6.35616642 69.3273149,7.64892477 69.3273149,9.24368734\" fill=#FFFFFF></path> </svg> <svg class=refuerzo-icon width=84px height=84px viewBox=\"0 0 84 84\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g stroke=none stroke-width=1 fill=none fill-rule=evenodd> <path d=\"M42,0 C65.1959766,0 84,18.8040234 84,42 C84,65.1959766 65.1959766,84 42,84 C18.8040234,84 0,65.1959766 0,42 C0,18.8040234 18.8040234,0 42,0\" fill-opacity=0.521824049 fill=#031023></path> <path d=\"M45.3279684,9.62285559 C44.1548639,9.49413878 42.9560372,9.42328164 41.7648006,9.42328164 L41.7466685,9.42328164 L41.7466685,8.16546259 L41.7648006,8.16546259 C43.0011566,8.16546259 44.2455244,8.25099429 45.4629049,8.38432311 L45.3279684,9.62285559 Z M34.5351543,10.2429604 L34.2602211,9.04551665 C35.4750715,8.76921573 36.7207044,8.55832141 37.9629638,8.41870349 L38.1021171,9.63878797 C36.9053988,9.77337461 35.7057287,9.97672202 34.5351543,10.2429604 Z M52.3754504,11.2093847 C51.2398751,10.8165259 50.068879,10.4840424 48.8957746,10.2207389 L49.1673343,9.02245664 C50.3859799,9.29582264 51.6016737,9.64130361 52.781525,10.0492563 L52.3754504,11.2093847 Z M27.7200161,12.6244311 L27.1823784,11.5188082 C28.3090984,10.9766882 29.4758777,10.4936856 30.6510906,10.0836366 L31.0605386,11.242088 C29.9287584,11.6374624 28.8049902,12.1024362 27.7200161,12.6244311 Z M58.8903547,14.3208097 C57.8703189,13.6847726 56.8043203,13.0994674 55.7214547,12.5825038 L56.2565623,11.4752038 C57.3807523,12.0122925 58.4880752,12.6193998 59.5469053,13.2801741 L58.8903547,14.3208097 Z M21.6124514,16.4586828 L20.8407831,15.4998055 C21.8144345,14.7241504 22.8437472,13.9950346 23.8992039,13.3330025 L24.5587062,14.3711225 C23.5420438,15.0096753 22.5506819,15.7115383 21.6124514,16.4586828 Z M64.5450387,18.7944528 C63.6919869,17.9487791 62.782852,17.1433557 61.8433564,16.4004039 L62.6124946,15.4390109 C63.5878327,16.2104732 64.5311234,17.0465036 65.4174878,17.924042 L64.5450387,18.7944528 Z M16.5088988,21.5448838 L15.5428375,20.7797105 C16.319566,19.8099321 17.1608109,18.8720183 18.0433801,17.9928028 L18.9179375,18.8598594 C18.0682591,19.7072102 17.2577965,20.6107435 16.5088988,21.5448838 Z M69.0628825,24.4005523 C68.4210906,23.3909429 67.7139388,22.4056513 66.9620894,21.4723496 L67.9256205,20.7042414 C68.7065657,21.6731813 69.4407048,22.6957882 70.1073756,23.7439708 L69.0628825,24.4005523 Z M12.6661594,27.6302124 L11.5525113,27.0981549 C12.0935225,25.9799538 12.7049536,24.8797814 13.3699377,23.8269868 L14.4156958,24.4806335 C13.7755907,25.4940163 13.1865084,26.5539385 12.6661594,27.6302124 Z M72.2136505,30.8636459 C71.8147443,29.7374785 71.3462616,28.6201159 70.8212741,27.5430036 L71.9332355,27.0075919 C72.4784634,28.1257931 72.9646566,29.2855022 73.3787431,30.4556932 L72.2136505,30.8636459 Z M10.2870597,34.4157268 L9.08232945,34.1444572 C9.35810599,32.9323389 9.70598923,31.7235748 10.117124,30.5517067 L11.2834816,30.9563052 C10.8879489,32.0841496 10.552716,33.2480515 10.2870597,34.4157268 Z M73.8295154,37.8642474 C73.6937355,36.6756084 73.488379,35.4827767 73.2201927,34.3180362 L74.4240795,34.0438317 C74.7028078,35.2530151 74.9157545,36.4919668 75.0565945,37.7258873 L73.8295154,37.8642474 Z M8.52655961,41.5488187 L8.25837326,41.5433681 C8.25795158,40.2909996 8.3262632,39.0486937 8.46119973,37.8286092 L9.68912216,37.9631958 C9.55924575,39.1379988 9.49346419,40.3358618 9.49346419,41.5224045 L8.52655961,41.5488187 Z M75.1687605,45.2505801 L73.9779456,45.1143164 C74.1111954,43.9302894 74.2157712,42.7215253 74.2157712,41.5224045 L74.2157712,41.2880309 L75.4808012,41.2880309 L75.4808012,41.5224045 C75.4808012,42.7672261 75.3062271,44.0212716 75.1687605,45.2505801 Z M9.09793149,48.9678547 C8.82004657,47.7586713 8.60878656,46.5197195 8.46878991,45.2853798 L9.69671234,45.147439 C9.83080552,46.3369165 10.034897,47.5301675 10.30224,48.6940694 L9.09793149,48.9678547 Z M73.4010919,52.5258055 L72.235156,52.1203685 C72.6319537,50.9925241 72.9684517,49.8290415 73.2349513,48.6617854 L74.4396815,48.9338936 C74.16264,50.1460119 73.81307,51.3543567 73.4010919,52.5258055 Z M11.5820287,56.0066101 C11.0380658,54.8879897 10.552716,53.7270227 10.1398945,52.5564124 L11.3049871,52.1497176 C11.7034716,53.2771427 12.1702676,54.3949246 12.6935684,55.472037 L11.5820287,56.0066101 Z M70.1411097,59.2471712 L69.0957732,58.5931053 C69.7371434,57.5797224 70.3270691,56.5202195 70.8486831,55.444365 L71.9614878,55.9785188 C71.4196333,57.0954621 70.8073588,58.1956345 70.1411097,59.2471712 Z M15.5820535,62.3137341 C14.8019517,61.3439556 14.0694993,60.3209294 13.4040935,59.271489 L14.4490083,58.6165846 C15.0899568,59.6270326 15.7958435,60.6127434 16.546428,61.5464644 L15.5820535,62.3137341 Z M65.4617638,65.076324 L64.5880498,64.2080095 C65.4381499,63.3623359 66.2494558,62.4600603 67.0000403,61.5255008 L67.9652581,62.2919319 C67.1864213,63.2617103 66.344333,64.1983663 65.4617638,65.076324 Z M20.8896976,67.5844151 C19.9135161,66.8104371 18.9710688,65.9731489 18.0876562,65.0964491 L18.9609485,64.2272961 C19.8114704,65.0721312 20.7201836,65.8788125 21.6596792,66.6238607 L20.8896976,67.5844151 Z M59.6008799,69.7306737 L58.9426427,68.6917152 C59.9593051,68.0548395 60.9510886,67.3533957 61.8905842,66.6070897 L62.6614091,67.5668057 C61.6864927,68.3416222 60.6567583,69.0698994 59.6008799,69.7306737 Z M27.2418348,71.5545113 C26.1172231,71.0161648 25.0107436,70.4077996 23.9531785,69.7461868 L24.6105724,68.7063897 C25.6293432,69.3432654 26.6949201,69.9294091 27.7782075,70.4480498 L27.2418348,71.5545113 Z M52.8464632,72.9733312 L52.4378585,71.813622 C53.5709037,71.4195054 54.6950937,70.9553702 55.7792244,70.4346331 L56.3164404,71.5410946 C55.1905637,72.0815375 54.0229411,72.5632822 52.8464632,72.9733312 Z M34.3276894,74.0143861 C33.1086221,73.7397623 31.89335,73.3930235 30.7143421,72.9833938 L31.1221034,71.8236846 C32.2568353,72.2182205 33.426988,72.5519618 34.6005142,72.8165231 L34.3276894,74.0143861 Z M45.5316382,74.6302982 L45.3941716,73.4093751 C46.5913116,73.2756271 47.7914034,73.0739567 48.9611345,72.8089762 L49.235646,74.0072585 C48.0207955,74.2818823 46.774741,74.4915188 45.5316382,74.6302982 Z M41.7816677,74.8298721 L41.7648006,74.8298721 C40.5179027,74.8298721 39.2621496,74.7653041 38.0325405,74.6298789 L38.1683204,73.4110522 C39.3532318,73.5414461 40.5630221,73.6089491 41.7648006,73.6089491 L41.8120284,73.6068527 L41.7816677,74.8298721 Z\" fill-opacity=0.56 fill=#FFFFFF></path> <path d=\"M84,45.604152 C82.1344116,67.118918 64.1272356,84 42.1725376,84 C41.6588201,84 41.1451026,84 40.6313851,83.9728774 L20.7586207,64.0568631 L56.8000364,18.3448276 L84,45.604152 Z\" fill-opacity=0.521824049 fill=#031023></path> <path d=\"M22.4413222,17.3793103 L54.3172985,17.3793103 C56.044723,17.3793103 57.4482759,18.7891636 57.4482759,20.5243422 L57.4482759,39.2858174 L57.4482759,43.732151 L57.4482759,59.5112571 L57.4482759,60.8668346 C57.4482759,62.9816144 55.7478679,64.6896552 53.6425386,64.6896552 L22.4413222,64.6896552 C20.7138977,64.6896552 19.3103448,63.279802 19.3103448,61.5446233 L19.3103448,20.5243422 C19.3103448,18.7891636 20.7140614,17.3793103 22.4413222,17.3793103\" fill=#FF1D25></path> <polygon points=\"0 84 84 84 84 0 0 0\"></polygon> <polygon fill=#F7F7F8 points=\"21.2413793 63.2413793 55.5172414 63.2413793 55.5172414 19.7931034 21.2413793 19.7931034\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 37.3198466 28.4827586 37.3198466 28.4827586 32.2440863 24.137931 32.2440863\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 46.418544 28.4827586 46.418544 28.4827586 41.3427837 24.137931 41.3427837\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 55.5172414 28.4827586 55.5172414 28.4827586 50.4414811 24.137931 50.4414811\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 28.248174 28.4827586 28.248174 28.4827586 23.1724138 24.137931 23.1724138\"></polygon> <polygon fill=#999999 points=\"30.4137931 34.9756684 45.3793103 34.9756684 45.3793103 33.6576581 30.4137931 33.6576581\"></polygon> <polygon fill=#999999 points=\"30.4137931 44.0395583 45.3793103 44.0395583 45.3793103 42.7215481 30.4137931 42.7215481\"></polygon> <polygon fill=#999999 points=\"30.4137931 53.1034483 45.3793103 53.1034483 45.3793103 51.7854381 30.4137931 51.7854381\"></polygon> <polygon fill=#999999 points=\"30.4137931 25.9386999 45.3793103 25.9386999 45.3793103 24.6206897 30.4137931 24.6206897\"></polygon> <path d=\"M52.5,35 C61.6128223,35 69,42.3871777 69,51.5 C69,60.6128223 61.6128223,68 52.5,68 C43.3871777,68 36,60.6128223 36,51.5 C36,42.3871777 43.3871777,35 52.5,35\" fill=#FF1D25></path> <path d=\"M41,52.310695 L45.3513529,51.8070473 L50.068546,56.1303198 C50.068546,56.1303198 52.3459818,46.308682 63,44 C57.7948554,46.8961011 54.5824671,52.6465449 52.4271426,60.5793769 C51.8984873,62.5939673 50.4753367,62.0483066 50.0278423,61.4606329 C49.295915,60.4950961 44.4161537,54.7449069 41.0002467,52.2684273 L41.0002467,52.310695 L41,52.310695 Z\" fill=#FFFFFF></path> <path d=\"M35.5814898,15.1979342 L36.0743196,15.1979342 C35.9374501,14.9767286 35.8553948,14.6999698 35.8553948,14.4233788 L35.8553948,12.7633296 C35.8553948,11.850311 36.6769439,11.1034483 37.6898444,11.1034483 L39.5791081,11.1034483 C40.5921748,11.1034483 41.4135577,11.8504788 41.4135577,12.7633296 L41.4135577,14.423211 C41.4135577,14.6999698 41.3315024,14.9488681 41.1944669,15.1977664 L41.6872966,15.1977664 C45.0552158,15.1977664 47.7931034,17.7154489 47.7931034,20.7586207 L29.4482759,20.7586207 C29.4482759,17.6877562 32.2137368,15.1977664 35.5540827,15.1977664 L35.5814898,15.1977664 L35.5814898,15.1979342 Z\" fill=#FF1D25></path> <path d=\"M38.6210219,11.1034483 L39.5792569,11.1034483 C40.5923052,11.1034483 41.4136732,11.8504788 41.4136732,12.7633296 L41.4136732,14.423211 C41.4136732,14.6999698 41.3316195,14.9488681 41.1945864,15.1977664 L41.6874072,15.1977664 C45.0552653,15.1977664 47.7931034,17.7154489 47.7931034,20.7586207 L38.6206897,20.7586207 L38.6210219,11.1034483 Z\" fill=#C7090F></path> </g> </svg> <svg class=ampliacion-icon width=84px height=84px viewBox=\"0 0 84 84\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g stroke=none stroke-width=1 fill=none fill-rule=evenodd> <path d=\"M42,0 C65.1959766,0 84,18.8040234 84,42 C84,65.1959766 65.1959766,84 42,84 C18.8040234,84 0,65.1959766 0,42 C0,18.8040234 18.8040234,0 42,0\" fill-opacity=0.521824049 fill=#031023></path> <path d=\"M45.3279684,9.62285559 C44.1548639,9.49413878 42.9560372,9.42328164 41.7648006,9.42328164 L41.7466685,9.42328164 L41.7466685,8.16546259 L41.7648006,8.16546259 C43.0011566,8.16546259 44.2455244,8.25099429 45.4629049,8.38432311 L45.3279684,9.62285559 Z M34.5351543,10.2429604 L34.2602211,9.04551665 C35.4750715,8.76921573 36.7207044,8.55832141 37.9629638,8.41870349 L38.1021171,9.63878797 C36.9053988,9.77337461 35.7057287,9.97672202 34.5351543,10.2429604 Z M52.3754504,11.2093847 C51.2398751,10.8165259 50.068879,10.4840424 48.8957746,10.2207389 L49.1673343,9.02245664 C50.3859799,9.29582264 51.6016737,9.64130361 52.781525,10.0492563 L52.3754504,11.2093847 Z M27.7200161,12.6244311 L27.1823784,11.5188082 C28.3090984,10.9766882 29.4758777,10.4936856 30.6510906,10.0836366 L31.0605386,11.242088 C29.9287584,11.6374624 28.8049902,12.1024362 27.7200161,12.6244311 Z M58.8903547,14.3208097 C57.8703189,13.6847726 56.8043203,13.0994674 55.7214547,12.5825038 L56.2565623,11.4752038 C57.3807523,12.0122925 58.4880752,12.6193998 59.5469053,13.2801741 L58.8903547,14.3208097 Z M21.6124514,16.4586828 L20.8407831,15.4998055 C21.8144345,14.7241504 22.8437472,13.9950346 23.8992039,13.3330025 L24.5587062,14.3711225 C23.5420438,15.0096753 22.5506819,15.7115383 21.6124514,16.4586828 Z M64.5450387,18.7944528 C63.6919869,17.9487791 62.782852,17.1433557 61.8433564,16.4004039 L62.6124946,15.4390109 C63.5878327,16.2104732 64.5311234,17.0465036 65.4174878,17.924042 L64.5450387,18.7944528 Z M16.5088988,21.5448838 L15.5428375,20.7797105 C16.319566,19.8099321 17.1608109,18.8720183 18.0433801,17.9928028 L18.9179375,18.8598594 C18.0682591,19.7072102 17.2577965,20.6107435 16.5088988,21.5448838 Z M69.0628825,24.4005523 C68.4210906,23.3909429 67.7139388,22.4056513 66.9620894,21.4723496 L67.9256205,20.7042414 C68.7065657,21.6731813 69.4407048,22.6957882 70.1073756,23.7439708 L69.0628825,24.4005523 Z M12.6661594,27.6302124 L11.5525113,27.0981549 C12.0935225,25.9799538 12.7049536,24.8797814 13.3699377,23.8269868 L14.4156958,24.4806335 C13.7755907,25.4940163 13.1865084,26.5539385 12.6661594,27.6302124 Z M72.2136505,30.8636459 C71.8147443,29.7374785 71.3462616,28.6201159 70.8212741,27.5430036 L71.9332355,27.0075919 C72.4784634,28.1257931 72.9646566,29.2855022 73.3787431,30.4556932 L72.2136505,30.8636459 Z M10.2870597,34.4157268 L9.08232945,34.1444572 C9.35810599,32.9323389 9.70598923,31.7235748 10.117124,30.5517067 L11.2834816,30.9563052 C10.8879489,32.0841496 10.552716,33.2480515 10.2870597,34.4157268 Z M73.8295154,37.8642474 C73.6937355,36.6756084 73.488379,35.4827767 73.2201927,34.3180362 L74.4240795,34.0438317 C74.7028078,35.2530151 74.9157545,36.4919668 75.0565945,37.7258873 L73.8295154,37.8642474 Z M8.52655961,41.5488187 L8.25837326,41.5433681 C8.25795158,40.2909996 8.3262632,39.0486937 8.46119973,37.8286092 L9.68912216,37.9631958 C9.55924575,39.1379988 9.49346419,40.3358618 9.49346419,41.5224045 L8.52655961,41.5488187 Z M75.1687605,45.2505801 L73.9779456,45.1143164 C74.1111954,43.9302894 74.2157712,42.7215253 74.2157712,41.5224045 L74.2157712,41.2880309 L75.4808012,41.2880309 L75.4808012,41.5224045 C75.4808012,42.7672261 75.3062271,44.0212716 75.1687605,45.2505801 Z M9.09793149,48.9678547 C8.82004657,47.7586713 8.60878656,46.5197195 8.46878991,45.2853798 L9.69671234,45.147439 C9.83080552,46.3369165 10.034897,47.5301675 10.30224,48.6940694 L9.09793149,48.9678547 Z M73.4010919,52.5258055 L72.235156,52.1203685 C72.6319537,50.9925241 72.9684517,49.8290415 73.2349513,48.6617854 L74.4396815,48.9338936 C74.16264,50.1460119 73.81307,51.3543567 73.4010919,52.5258055 Z M11.5820287,56.0066101 C11.0380658,54.8879897 10.552716,53.7270227 10.1398945,52.5564124 L11.3049871,52.1497176 C11.7034716,53.2771427 12.1702676,54.3949246 12.6935684,55.472037 L11.5820287,56.0066101 Z M70.1411097,59.2471712 L69.0957732,58.5931053 C69.7371434,57.5797224 70.3270691,56.5202195 70.8486831,55.444365 L71.9614878,55.9785188 C71.4196333,57.0954621 70.8073588,58.1956345 70.1411097,59.2471712 Z M15.5820535,62.3137341 C14.8019517,61.3439556 14.0694993,60.3209294 13.4040935,59.271489 L14.4490083,58.6165846 C15.0899568,59.6270326 15.7958435,60.6127434 16.546428,61.5464644 L15.5820535,62.3137341 Z M65.4617638,65.076324 L64.5880498,64.2080095 C65.4381499,63.3623359 66.2494558,62.4600603 67.0000403,61.5255008 L67.9652581,62.2919319 C67.1864213,63.2617103 66.344333,64.1983663 65.4617638,65.076324 Z M20.8896976,67.5844151 C19.9135161,66.8104371 18.9710688,65.9731489 18.0876562,65.0964491 L18.9609485,64.2272961 C19.8114704,65.0721312 20.7201836,65.8788125 21.6596792,66.6238607 L20.8896976,67.5844151 Z M59.6008799,69.7306737 L58.9426427,68.6917152 C59.9593051,68.0548395 60.9510886,67.3533957 61.8905842,66.6070897 L62.6614091,67.5668057 C61.6864927,68.3416222 60.6567583,69.0698994 59.6008799,69.7306737 Z M27.2418348,71.5545113 C26.1172231,71.0161648 25.0107436,70.4077996 23.9531785,69.7461868 L24.6105724,68.7063897 C25.6293432,69.3432654 26.6949201,69.9294091 27.7782075,70.4480498 L27.2418348,71.5545113 Z M52.8464632,72.9733312 L52.4378585,71.813622 C53.5709037,71.4195054 54.6950937,70.9553702 55.7792244,70.4346331 L56.3164404,71.5410946 C55.1905637,72.0815375 54.0229411,72.5632822 52.8464632,72.9733312 Z M34.3276894,74.0143861 C33.1086221,73.7397623 31.89335,73.3930235 30.7143421,72.9833938 L31.1221034,71.8236846 C32.2568353,72.2182205 33.426988,72.5519618 34.6005142,72.8165231 L34.3276894,74.0143861 Z M45.5316382,74.6302982 L45.3941716,73.4093751 C46.5913116,73.2756271 47.7914034,73.0739567 48.9611345,72.8089762 L49.235646,74.0072585 C48.0207955,74.2818823 46.774741,74.4915188 45.5316382,74.6302982 Z M41.7816677,74.8298721 L41.7648006,74.8298721 C40.5179027,74.8298721 39.2621496,74.7653041 38.0325405,74.6298789 L38.1683204,73.4110522 C39.3532318,73.5414461 40.5630221,73.6089491 41.7648006,73.6089491 L41.8120284,73.6068527 L41.7816677,74.8298721 Z\" fill-opacity=0.56 fill=#FFFFFF></path> <path d=\"M84,45.604152 C82.1344116,67.118918 64.1272356,84 42.1725376,84 C41.6588201,84 41.1451026,84 40.6313851,83.9728774 L20.7586207,64.0568631 L56.8000364,18.3448276 L84,45.604152 Z\" fill-opacity=0.521824049 fill=#031023></path> <path d=\"M22.4413222,17.3793103 L54.3172985,17.3793103 C56.044723,17.3793103 57.4482759,18.7891636 57.4482759,20.5243422 L57.4482759,39.2858174 L57.4482759,43.732151 L57.4482759,59.5112571 L57.4482759,60.8668346 C57.4482759,62.9816144 55.7478679,64.6896552 53.6425386,64.6896552 L22.4413222,64.6896552 C20.7138977,64.6896552 19.3103448,63.279802 19.3103448,61.5446233 L19.3103448,20.5243422 C19.3103448,18.7891636 20.7140614,17.3793103 22.4413222,17.3793103\" fill=#FF1D25></path> <polygon points=\"0 84 84 84 84 0 0 0\"></polygon> <polygon fill=#F7F7F8 points=\"21.2413793 63.2413793 55.5172414 63.2413793 55.5172414 19.7931034 21.2413793 19.7931034\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 37.3198466 28.4827586 37.3198466 28.4827586 32.2440863 24.137931 32.2440863\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 46.418544 28.4827586 46.418544 28.4827586 41.3427837 24.137931 41.3427837\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 55.5172414 28.4827586 55.5172414 28.4827586 50.4414811 24.137931 50.4414811\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 28.248174 28.4827586 28.248174 28.4827586 23.1724138 24.137931 23.1724138\"></polygon> <polygon fill=#999999 points=\"30.4137931 34.9756684 45.3793103 34.9756684 45.3793103 33.6576581 30.4137931 33.6576581\"></polygon> <polygon fill=#999999 points=\"30.4137931 44.0395583 45.3793103 44.0395583 45.3793103 42.7215481 30.4137931 42.7215481\"></polygon> <polygon fill=#999999 points=\"30.4137931 53.1034483 45.3793103 53.1034483 45.3793103 51.7854381 30.4137931 51.7854381\"></polygon> <polygon fill=#999999 points=\"30.4137931 25.9386999 45.3793103 25.9386999 45.3793103 24.6206897 30.4137931 24.6206897\"></polygon> <path d=\"M52.5,35 C61.6128223,35 69,42.3871777 69,51.5 C69,60.6128223 61.6128223,68 52.5,68 C43.3871777,68 36,60.6128223 36,51.5 C36,42.3871777 43.3871777,35 52.5,35\" fill=#FF1D25></path> <polygon fill=#FFFFFF points=\"50.3 53.66 45.02 53.66 45.02 50.54 50.3 50.54 50.3 45.02 53.54 45.02 53.54 50.54 58.82 50.54 58.82 53.66 53.54 53.66 53.54 59.18 50.3 59.18\"></polygon> <path d=\"M35.5814898,15.1979342 L36.0743196,15.1979342 C35.9374501,14.9767286 35.8553948,14.6999698 35.8553948,14.4233788 L35.8553948,12.7633296 C35.8553948,11.850311 36.6769439,11.1034483 37.6898444,11.1034483 L39.5791081,11.1034483 C40.5921748,11.1034483 41.4135577,11.8504788 41.4135577,12.7633296 L41.4135577,14.423211 C41.4135577,14.6999698 41.3315024,14.9488681 41.1944669,15.1977664 L41.6872966,15.1977664 C45.0552158,15.1977664 47.7931034,17.7154489 47.7931034,20.7586207 L29.4482759,20.7586207 C29.4482759,17.6877562 32.2137368,15.1977664 35.5540827,15.1977664 L35.5814898,15.1977664 L35.5814898,15.1979342 Z\" fill=#FF1D25></path> <path d=\"M38.6210219,11.1034483 L39.5792569,11.1034483 C40.5923052,11.1034483 41.4136732,11.8504788 41.4136732,12.7633296 L41.4136732,14.423211 C41.4136732,14.6999698 41.3316195,14.9488681 41.1945864,15.1977664 L41.6874072,15.1977664 C45.0552653,15.1977664 47.7931034,17.7154489 47.7931034,20.7586207 L38.6206897,20.7586207 L38.6210219,11.1034483 Z\" fill=#C7090F></path> </g> </svg> <svg class=microproyecto-icon width=83px height=84px viewBox=\"0 0 83 84\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g stroke=none stroke-width=1 fill=none fill-rule=evenodd> <path d=\"M41.321275,0 C64.1423319,0 82.64255,18.8040945 82.64255,42 C82.64255,65.1959055 64.1423319,84 41.321275,84 C18.5002181,84 0,65.1959055 0,42 C0,18.8040945 18.5002181,0 41.321275,0\" fill-opacity=0.521824049 fill=#031023></path> <path d=\"M33.6174482,54.0235294 L48.9495273,54.0235294 C49.4253505,48.6239303 51.3286431,43.491638 54.4479281,39.0543437 C56.3512207,36.3812748 57.4614747,33.1201308 57.4614747,29.5382185 C57.4614747,20.3963229 50.1126506,13.0186528 41.0191416,13.1790369 C32.242848,13.2859597 25.1583701,20.556707 25.0526316,29.4312957 C25.0526316,33.0666694 26.1628856,36.4881975 28.1719166,39.2147278 C31.344071,43.5450994 33.1944943,48.6773916 33.6174482,54.0235294\" fill=#FFFFFF></path> <path d=\"M48.6400303,54.0235294 L33.8740761,54.0235294 C32.5742561,54.0235294 31.5344002,55.1947712 31.5344002,56.6588235 C31.5344002,58.1228758 32.5742561,59.2941176 33.8740761,59.2941176 L48.6400303,59.2941176 C49.9398502,59.2941176 50.9797061,58.1228758 50.9797061,56.6588235 C50.9797061,55.1947712 49.9398502,54.0235294 48.6400303,54.0235294\" fill=#FF0000></path> <path d=\"M48.6400303,60.6117647 L33.8740761,60.6117647 C32.5742561,60.6117647 31.5344002,61.7830065 31.5344002,63.2470588 C31.5344002,64.7111111 32.5742561,65.8823529 33.8740761,65.8823529 L48.6400303,65.8823529 C49.9398502,65.8823529 50.9797061,64.7111111 50.9797061,63.2470588 C50.9797061,61.7830065 49.9398502,60.6117647 48.6400303,60.6117647\" fill=#FF0000></path> <path d=\"M34.1271077,67.2 C34.1271077,68.6374332 35.4137144,69.8352941 37.0755814,69.8352941 L45.4385249,69.8352941 C47.0467833,69.8352941 48.3869986,68.6853476 48.3869986,67.2 L34.1271077,67.2 Z\" fill=#FF0000></path> </g> </svg> </div> <div class=sm-unit__activity_aside__type></div> </div> <div class=sm-unit__activity_aside__title></div> <div class=sm-unit__activity_aside__progress> <div class=sm-unit__activity_aside__progress__title></div> <div class=sm-unit__activity_aside__progress__bar> <div class=sm-color-background-color></div> </div> </div> </a> </div> <div class=sm-content> <div class=sm-unit__header_background> <div class=sm-unit__header_background__content> </div> </div> <a href=#units class=\"sm-button-back-screen sm-color-background-color\"> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> <span>Unidades</span> </a> <div class=sm-content--scrolled> <div class=sm-unit__header> <div class=sm-unit__header__content> <div class=sm-unit__header__number></div> <div class=sm-unit__header__title></div> <div class=sm-unit__header__progress> <div class=sm-unit__header__progress__title></div> <div class=sm-unit__header__progress__bar> <div class=sm-color-background-color></div> </div> </div> </div> </div> <div class=sm-unit__activities_container> <div class=sm-unit__activities_container__content> <div class=sm-unit__activities__main_container> <div class=sm-unit__activities__main> </div> </div> <div class=sm-unit__activities__aside_container> <h4>Contenidos<br>complementarios</h4> <div class=sm-unit__activities__aside> </div> </div> </div> </div> </div> </div> </div> <div id=sm-activities-slider> sm-activities-slider </div> <div id=sm-resources> sm-resources </div> <div id=sm-final-evaluation> sm-final-evaluation </div> </div>";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ScreenSubUnit=function(){function ScreenSubUnit(){_classCallCheck(this,ScreenSubUnit);this.state={started:false};}_createClass(ScreenSubUnit,[{key:'init',value:function init(){if(_config2.default.dev)console.log("ScreenSubUnit.Init");if(!this.started){//Styling
//slides buttons nav
var slidesNaveButtons=document.querySelectorAll('.navbar-bottom ol.slider-indicators li.slider-indicator');slidesNaveButtons.forEach(function(slideButton,index){slideButton.classList.add('sm-color-background-color--active');slideButton.classList.add('sm-color-border-color--active');var textInButton=index;if(index==0){textInButton='Inicio';slideButton.classList.add('sm-big');}else if(index==slidesNaveButtons.length-1){textInButton='Fin';slideButton.classList.add('sm-big');}slideButton.innerHTML=textInButton;});}this.started=true;}}]);return ScreenSubUnit;}();exports.default=ScreenSubUnit;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _animejs=__webpack_require__(6);var _animejs2=_interopRequireDefault(_animejs);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}// import Velocity from 'velocity-animate';
var LeftMenu=function(){function LeftMenu(data){_classCallCheck(this,LeftMenu);this.state={unitSelected:null,subunitSelected:null};this.data=data;this.fillData();}_createClass(LeftMenu,[{key:'fillData',value:function fillData(){var _this=this;var level1DomElement=document.querySelector('#sm-left-menu .sm-left-menu--level1');var level2DomElement=document.querySelector('#sm-left-menu .sm-left-menu--level2');document.querySelector('#sm-left-menu .sm-left-menu--level1').remove();document.querySelector('#sm-left-menu .sm-left-menu--level2').remove();var ulLevel1DomElement=document.createElement('ul');//Units
this.data.units.forEach(function(unit){var unitElement=level1DomElement.cloneNode(true);unitElement.querySelector('.sm-left-menu--image').style.backgroundImage='url('+unit.image+')';unitElement.querySelector('.sm-left-menu--title').innerHTML='<span>'+('0'+unit.numberformenu).slice(-2)+'</span> '+unit.title;unitElement.addEventListener('click',_this.toggleUnit);var liElement=document.createElement('li');liElement.appendChild(unitElement);//Subunits
var suUlElement=document.createElement('ul');unit.subunits.forEach(function(subunit,index){var subUnitElement=level2DomElement.cloneNode(true);if(subunit.image){subUnitElement.querySelector('.sm-left-menu--image').style.backgroundImage='url('+subunit.image+')';}subUnitElement.querySelector('.sm-left-menu--title').innerHTML='<span>'+('0'+(index+1)).slice(-2)+'</span> '+subunit.title;var suLiElement=document.createElement('li');suLiElement.appendChild(subUnitElement);suUlElement.appendChild(suLiElement);});liElement.appendChild(suUlElement);ulLevel1DomElement.appendChild(liElement);});document.querySelector('#sm-left-menu').appendChild(ulLevel1DomElement);document.querySelector('#sm-left-menu__background').addEventListener('click',this.closeMenu);}},{key:'toggleUnit',value:function toggleUnit(e){//If is active
if(this.classList.contains('active')){this.classList.remove('active');var ulElement=this.parentNode.getElementsByTagName('ul')[0];ulElement.style.height='0px';}else{this.classList.add('active');var _ulElement=this.parentNode.getElementsByTagName('ul')[0];var ulChildrenNumber=_ulElement.children.length;var heightMax=ulChildrenNumber*80;_ulElement.style.height=heightMax+'px';}}},{key:'openMenu',value:function openMenu(){document.querySelector('#sm-left-menu').classList.add('active');(0,_animejs2.default)({targets:'#sm-left-menu__background',opacity:[0,1],duration:200,easing:_config2.default.easingTransitions,begin:function begin(anim){document.getElementById('sm-left-menu__background').style.display='block';}});}},{key:'closeMenu',value:function closeMenu(){document.querySelector('#sm-left-menu').classList.remove('active');(0,_animejs2.default)({targets:'#sm-left-menu__background',opacity:[1,0],duration:200,easing:_config2.default.easingTransitions,complete:function complete(anim){document.getElementById('sm-left-menu__background').style.display='none';}});}},{key:'toggleMenu',value:function toggleMenu(){var active=document.querySelector('#sm-left-menu').classList.contains('active');if(active){document.querySelector('#sm-left-menu').classList.remove('active');(0,_animejs2.default)({targets:'#sm-left-menu__background',opacity:[1,0],duration:200,easing:_config2.default.easingTransitions,complete:function complete(anim){document.getElementById('sm-left-menu__background').style.display='none';}});}else{document.querySelector('#sm-left-menu').classList.add('active');(0,_animejs2.default)({targets:'#sm-left-menu__background',opacity:[0,1],duration:200,easing:_config2.default.easingTransitions,begin:function begin(anim){document.getElementById('sm-left-menu__background').style.display='block';}});}return!active;}}]);return LeftMenu;}();exports.default=LeftMenu;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ImagesPreload=function(){function ImagesPreload(){_classCallCheck(this,ImagesPreload);this.image=[];}_createClass(ImagesPreload,[{key:'add',value:function add(imagesToLoad){if(typeof imagesToLoad=='string'){imagesToLoad=[imagesToLoad];}imagesToLoad.forEach(function(imageToLoad){var newImage=new Image();newImage.src=imageToLoad;});}}]);return ImagesPreload;}();exports.default=ImagesPreload;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.setBookColor=setBookColor;function setBookColor(){// document.write('<div id="getbookcolor" class="bookcolor" style="display: none"></div>');
var divElement=document.createElement("div");divElement.className='bookcolor';divElement.id='getbookcolor';document.body.appendChild(divElement);var bookColor=window.getComputedStyle(divElement,null).getPropertyValue('color');var style=document.createElement('style');style.type='text/css';style.innerHTML='\n        .sm-color-color,\n        .sm-color-color--hover:hover{\n            color: '+bookColor+'!important;\n        }\n        .sm-color-background-color,\n        .sm-color-background-color--active.active,\n        .sm-color-background-color_before:before,\n        .sm-color-background-color_after:after{\n            background-color: '+bookColor+'!important;\n        }\n        .sm-color-border-color,\n        .sm-color-border-color--hover:hover,\n        .sm-color-border-color--active.active{\n            border-color: '+bookColor+'!important;\n        }\n        \n        .sm-color-svg-fill svg,\n        .sm-color-svg-fill--hover:hover svg{\n            fill: '+bookColor+'!important;\n        }\n    ';document.getElementsByTagName('head')[0].appendChild(style);}// function getStyleRuleValue(style, selector) {
//     console.log(document.styleSheets);
//     for (var i = 0; i < document.styleSheets.length; i++) {
//         var mysheet = document.styleSheets[i];
//         var myrules = mysheet.cssRules ? mysheet.cssRules : mysheet.rules;
//         for (var j = 0; j < myrules.length; j++) {
//             if (myrules[j].selectorText && myrules[j].selectorText.toLowerCase() === selector) {
//                 return myrules[j].style[style];
//             }
//         }
//     }
// };

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _responsiveStatus=__webpack_require__(2);var _responsiveStatus2=_interopRequireDefault(_responsiveStatus);var _tinySlider=__webpack_require__(4);__webpack_require__(5);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ScreenUnit=function(){function ScreenUnit(){_classCallCheck(this,ScreenUnit);this.state={started:false};this.goto=null;this.unit=null;this.responsiveStatus=null;}_createClass(ScreenUnit,[{key:'init',value:function init(_ref){var data=_ref.data,goTo=_ref.goTo;//onsole.log("Units menu init");
if(!this.started){this.goTo=goTo;// this.responsiveStatus = new responsiveStatus(this.updateSlider.bind(this));
}this.started=true;this.unit=data.unit;console.log(data.unit);var unitElement=document.getElementById('sm-unit');// Background
document.querySelector('.sm-unit__header_background__content').style.backgroundImage='url('+this.unit.image+')';// Header
var headerElement=unitElement.getElementsByClassName('sm-unit__header')[0];headerElement.querySelector('.sm-unit__header__number').innerHTML=this.unit.numberformenu;headerElement.querySelector('.sm-unit__header__title').innerHTML=this.unit.title;headerElement.querySelector('.sm-unit__header__progress__title').innerHTML='76% completado';// Main activities
var mainActivitiesContainer=unitElement.querySelector('.sm-unit__activities__main');while(mainActivitiesContainer.firstChild){mainActivitiesContainer.removeChild(mainActivitiesContainer.firstChild);}var mainActivityTemplate=document.querySelector('#sm-unit__activity_main--template');this.unit.subunitsmain.forEach(function(subunit,index){var activityElement=mainActivityTemplate.cloneNode(true);activityElement.removeAttribute('id');// activityElement.getElementsByTagName('a')[0].setAttribute('href',`#activity_${subunit.id}`);
activityElement.getElementsByTagName('a')[0].setAttribute('href',''+subunit.url);activityElement.querySelector('.sm-unit__activity_main__image').style.backgroundImage='url('+subunit.image+')';activityElement.querySelector('.sm-unit__activity_main__number').innerHTML=index+1;activityElement.querySelector('.sm-unit__activity_main__title').innerHTML=subunit.title;activityElement.querySelector('.sm-unit__activity_main__type').innerHTML='Microcontenido';activityElement.querySelector('.sm-unit__activity_main__progress__title').innerHTML='76%';mainActivitiesContainer.appendChild(activityElement);});// Aside activities
var asideActivitiesContainer=unitElement.querySelector('.sm-unit__activities__aside');while(asideActivitiesContainer.firstChild){asideActivitiesContainer.removeChild(asideActivitiesContainer.firstChild);}var asideActivityTemplate=document.querySelector('#sm-unit__activity_aside--template');this.unit.resourcesmain.forEach(function(subunit,index){var activityElement=asideActivityTemplate.cloneNode(true);activityElement.removeAttribute('id');var svgElements=activityElement.querySelectorAll('.sm-unit__activity_aside__icon svg');svgElements.forEach(function(svgElement){if(!svgElement.classList.contains(subunit.smtype+'-icon')){svgElement.remove();// svgElement.style.display = 'none';
}});// activityElement.getElementsByTagName('a')[0].setAttribute('href',`#activity_${subunit.id}`);
activityElement.getElementsByTagName('a')[0].setAttribute('href',''+subunit.url);activityElement.querySelector('.sm-unit__activity_aside__title').innerHTML=subunit.title;activityElement.querySelector('.sm-unit__activity_aside__type').innerHTML='TEXTO POR DEFINIR';activityElement.querySelector('.sm-unit__activity_aside__progress__title').innerHTML='76%';asideActivitiesContainer.appendChild(activityElement);});}},{key:'processHash',value:function processHash(hashParts){return{is:hashParts[0]=='#unit'&&parseInt(hashParts[1])>0&&hashParts.length==2,data:{id:hashParts[1]}};}},{key:'transformInputData',value:function transformInputData(inputData,data){var screenData={unit:_.find(data.units,{id:inputData.id})};return screenData;}},{key:'onBackButton',value:function onBackButton(){this.disable();this.goTo('#');}},{key:'disable',value:function disable(){//document.querySelector('#sm-units-menu').classList.remove('active');
}}]);return ScreenUnit;}();exports.default=ScreenUnit;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".tns-outer{padding:0 !important}.tns-outer [hidden]{display:none !important}.tns-outer [aria-controls],.tns-outer [data-action]{cursor:pointer}.ms-touch{overflow-x:scroll;overflow-y:hidden;-ms-overflow-style:none;-ms-scroll-chaining:none;-ms-scroll-snap-type:mandatory;-ms-scroll-snap-points-x:snapInterval(0%, 100%)}.tns-slider{-webkit-transition:all 0s;-moz-transition:all 0s;transition:all 0s}.tns-slider>div,.tns-slider>li{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.tns-horizontal.tns-subpixel{white-space:nowrap}.tns-horizontal.tns-subpixel>div,.tns-horizontal.tns-subpixel>li{display:inline-block;vertical-align:top;white-space:normal}.tns-horizontal.tns-no-subpixel:after{content:'';display:table;clear:both}.tns-horizontal.tns-no-subpixel>div,.tns-horizontal.tns-no-subpixel>li{float:left;margin-right:-100%}.tns-no-calc{position:relative;left:0}.tns-gallery{position:relative;left:0;min-height:1px}.tns-gallery>div,.tns-gallery>li{position:absolute;left:-100%;-webkit-transition:transform 0s, opacity 0s;-moz-transition:transform 0s, opacity 0s;transition:transform 0s, opacity 0s}.tns-gallery>.tns-moving{-webkit-transition:all 0.25s;-moz-transition:all 0.25s;transition:all 0.25s}.tns-lazy-img{-webkit-transition:opacity 0.6s;-moz-transition:opacity 0.6s;transition:opacity 0.6s;opacity:0.6}.tns-lazy-img.loaded{opacity:1}.tns-ah{-webkit-transition:height 0s;-moz-transition:height 0s;transition:height 0s}.tns-ovh{overflow:hidden}.tns-hdx{overflow-x:hidden}.tns-hdy{overflow-y:hidden}.tns-visually-hidden{position:absolute;left:-10000em}.tns-transparent{opacity:0;visibility:hidden}.tns-fadeIn{opacity:1;filter:alpha(opacity=100);z-index:0}.tns-normal,.tns-fadeOut{opacity:0;filter:alpha(opacity=0);z-index:-1}.tns-t-subp2{margin:0 auto;width:310px;position:relative;height:10px;overflow:hidden}.tns-t-ct{width:2333.3333333%;width:-webkit-calc(100% * 70 / 3);width:-moz-calc(100% * 70 / 3);width:calc(100% * 70 / 3);position:absolute;right:0}.tns-t-ct:after{content:'';display:table;clear:both}.tns-t-ct>div{width:1.4285714%;width:-webkit-calc(100% / 70);width:-moz-calc(100% / 70);width:calc(100% / 70);height:10px;float:left}\n", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// keys
if (!Object.keys) {
    Object.keys = function (object) {
        var keys = [];
        for (var name in object) {
            if (Object.prototype.hasOwnProperty.call(object, name)) {
                keys.push(name);
            }
        }
        return keys;
    };
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _responsiveStatus=__webpack_require__(2);var _responsiveStatus2=_interopRequireDefault(_responsiveStatus);var _tinySlider=__webpack_require__(4);__webpack_require__(5);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ScreenUnitsMenu=function(){function ScreenUnitsMenu(){_classCallCheck(this,ScreenUnitsMenu);this.state={started:false};this.slider=null;this.goto=null;this.units=[];this.responsiveStatus=null;}_createClass(ScreenUnitsMenu,[{key:'init',value:function init(_ref){var data=_ref.data,goTo=_ref.goTo;if(!this.started){this.goTo=goTo;this.units=data.units;document.querySelector('#sm-units-menu').classList.add('active');// document.querySelector('#sm-home h1').innerHTML = title;
// // document.querySelector('#sm-home h2').innerHTML = type;
// document.querySelector('#sm-home').style.backgroundImage = `url(${homeBackgroundImageUrl})`;
// document.querySelector('#sm-home .sm-button-next-screen').addEventListener('click', this.onNextButton.bind(this));
this.responsiveStatus=new _responsiveStatus2.default(this.updateSlider.bind(this));var _this=this;document.getElementById("sm-units-menu").addEventListener("wheel",function(e){var windowSize=_this.responsiveStatus.getSize();if(windowSize=='tablet-landscape'||windowSize=='desktop'){if(e.deltaY<0){//Check if we are here
var hashName=window.location.hash;var hashParts=hashName.split('_',3);if(_this.processHash(hashParts).is){_this.onBackButton();}}}});}this.started=true;// this.updateSlider(this.responsiveStatus.getSize());
//document.querySelector('#sm-units-menu').classList.add('active');
}},{key:'processHash',value:function processHash(hashParts){return{is:hashParts[0]=='#units'&&hashParts.length==1,data:{}};}},{key:'transformInputData',value:function transformInputData(inputData,data){var screenData={units:data.units};return screenData;}},{key:'updateSlider',value:function updateSlider(size){if(this.slider!=null){this.slider.destroy();//onsole.log('this.slider.destroy');
this.slider=null;//onsole.log(document.querySelector('#sm-units-menu .sm-content'));
// document.querySelector('#sm-units-menu .sm-content').remove();
// document.querySelector('#sm-units-menu').appendChild(this.mainDomStructure);
//onsole.log(document.querySelector('#sm-units-menu .sm-content'));
}//Vacía el slide
var sliderElement=document.querySelector('#sm-units-menu .sm-units-menu-slider');while(sliderElement.firstChild){sliderElement.removeChild(sliderElement.firstChild);}var unitTemplate=document.querySelector('#sm-units-menu__unit--template');this.units.forEach(function(unit){var unitElement=unitTemplate.cloneNode(true);unitElement.removeAttribute('id');unitElement.getElementsByTagName('a')[0].setAttribute('href','#unit_'+unit.id);unitElement.style.backgroundImage='url('+unit.image+')';unitElement.querySelector('.sm-units-menu__unit__number').innerHTML=unit.numberformenu;unitElement.querySelector('.sm-units-menu__unit__title').innerHTML=unit.title;unitElement.querySelector('.sm-units-menu__unit__progress__title').innerHTML='76% completado';// unitElement.querySelector('.sm-left-menu--title').innerHTML = `<span>${('0' + unit.numberformenu).slice(-2)}</span> ${unit.title}`;
// unitElement.addEventListener('click', this.toggleUnit);
// document.querySelector('#sm-units-menu .sm-button-back-screen').addEventListener('click', this.onBackButton.bind(this));
sliderElement.appendChild(unitElement);});//onsole.log(document.querySelector('.sm-units-menu-slider'));
if(size=='mobile'||size=='tablet-portrait'){}else{this.slider=(0,_tinySlider.tns)({container:'#sm-units-menu .sm-units-menu-slider',fixedWidth:352,loop:false,slideBy:'page',mouseDrag:true,controlsContainer:'#sm-units-menu-slider__controls',nav:false});}}},{key:'onBackButton',value:function onBackButton(){this.disable();this.goTo('#');}},{key:'disable',value:function disable(){//document.querySelector('#sm-units-menu').classList.remove('active');
}}]);return ScreenUnitsMenu;}();exports.default=ScreenUnitsMenu;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ScreenHome=function(){function ScreenHome(){_classCallCheck(this,ScreenHome);this.state={started:false};this.goto=null;}_createClass(ScreenHome,[{key:'init',value:function init(_ref){var data=_ref.data,goTo=_ref.goTo;if(!this.started){this.goTo=goTo;var title=data.title,type=data.type,homeBackgroundImageUrl=data.homeBackgroundImageUrl;document.querySelector('#sm-home h1').innerHTML=title;// document.querySelector('#sm-home h2').innerHTML = type;
document.querySelector('#sm-home').style.backgroundImage='url('+homeBackgroundImageUrl+')';// document.querySelector('#sm-home .sm-button-next-screen').addEventListener('click', this.onNextButton.bind(this));
var _this=this;document.getElementById("sm-home").addEventListener("wheel",function(e){if(e.deltaY>0){//Check if we are here
var hashName=window.location.hash;var hashParts=hashName.split('_',3);if(_this.processHash(hashParts).is){_this.onNextButton();}}});}this.started=true;//document.querySelector('#sm-home').classList.add('active');
}},{key:'processHash',value:function processHash(hashParts){return{is:(hashParts[0]=='#'||hashParts[0]=='')&&hashParts.length==1,data:{}};}},{key:'transformInputData',value:function transformInputData(inputData,data){var screenData={homeBackgroundImageUrl:data.homeBackgroundImageUrl,title:data.title,//¿?
type:data.type};return screenData;}},{key:'onNextButton',value:function onNextButton(){this.disable();this.goTo('#units');}},{key:'disable',value:function disable(){//document.querySelector('#sm-home').classList.remove('active');
}}]);return ScreenHome;}();exports.default=ScreenHome;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _animejs=__webpack_require__(6);var _animejs2=_interopRequireDefault(_animejs);var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _responsiveStatus=__webpack_require__(2);var _responsiveStatus2=_interopRequireDefault(_responsiveStatus);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var responsiveStatusTool=new _responsiveStatus2.default(function(){return null;});var routeTransitions={'null__to__home':{to:{targets:'#sm-home',scale:[1.1,1],opacity:[0,1],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitions,update:function update(anim){document.getElementById('sm-home').style.display='block';}}},'null__to__units-menu':{to:{targets:'#sm-units-menu',scale:[1.1,1],opacity:[0,1],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitions,update:function update(anim){document.getElementById('sm-units-menu').style.display='block';}}},'null__to__unit':{to:{targets:'#sm-unit',scale:[1.1,1],opacity:[0,1],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitions,update:function update(anim){document.getElementById('sm-unit').style.display='block';}}},'home__to__units-menu':{from:[{targets:'#sm-home .sm-content',translateY:['0%','-100%'],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitions,complete:function complete(anim){document.getElementById('sm-home').style.display='none';}}],to:[{targets:'#sm-units-menu',translateY:['100%','0%'],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitions,begin:function begin(anim){document.getElementById('sm-units-menu').style.display='block';}}]},'units-menu__to__home':{from:{targets:'#sm-units-menu',translateY:['0%','100%'],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitions},to:{targets:'#sm-home .sm-content',translateY:['-100%','0%'],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitions,update:function update(anim){document.getElementById('sm-home').style.display='block';}}},'units-menu__to__unit':{from:[],to:[{targets:'#sm-unit .sm-content--scrolled',translateY:['100%','0%'],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitions,begin:function begin(anim){document.getElementById('sm-unit').style.display='block';document.querySelector('#sm-unit .sm-content--scrolled').scrollTo(0,0);}},{targets:'#sm-unit .sm-unit__header_background',opacity:[0,1],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitions},{targets:'#sm-unit .sm-unit__header_background__content',height:function height(){var backgroundHeight=0;switch(responsiveStatusTool.getSize()){case'tablet-portrait':backgroundHeight=8*73+'px';break;case'tablet-landscape':backgroundHeight=8*67+'px';break;case'desktop':backgroundHeight=8*67+'px';break;default:backgroundHeight='362px';break;}return[window.innerHeight+'px',backgroundHeight];},duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitions,complete:function complete(){document.querySelector('#sm-unit .sm-unit__header_background__content').style.removeProperty('height');}}]},'unit__to__units-menu':{from:[{targets:'#sm-unit .sm-content--scrolled',translateY:['0%','100%'],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitions,complete:function complete(anim){document.getElementById('sm-unit').style.display='none';}},{targets:'#sm-unit .sm-unit__header_background',opacity:[1,0],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitions},{targets:'#sm-unit .sm-unit__header_background__content',height:function height(){var backgroundHeight=0;switch(responsiveStatusTool.getSize()){case'tablet-portrait':backgroundHeight=8*73+'px';break;case'tablet-landscape':backgroundHeight=8*67+'px';break;case'desktop':backgroundHeight=8*67+'px';break;default:backgroundHeight='362px';break;}return[backgroundHeight,window.innerHeight+'px'];},duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitions}],to:{targets:'#sm-units-menu',duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitions,begin:function begin(anim){document.getElementById('sm-units-menu').style.display='block';}}}};var Transitions=function(){function Transitions(){_classCallCheck(this,Transitions);}_createClass(Transitions,[{key:'start',value:function start(toRoute,fromRoute){//onsole.log(`de ${fromRoute} a ${toRoute}`);
if(routeTransitions[fromRoute+'__to__'+toRoute]){// document.getElementById('sm-home').style.display = 'block';
// if(routeTransitions[`${fromRoute}__to__${toRoute}`].from){
//     if(typeof routeTransitions[`${fromRoute}__to__${toRoute}`].from === 'object'){
//         anime(routeTransitions[`${fromRoute}__to__${toRoute}`].from);
//     } else {
//         routeTransitions[`${fromRoute}__to__${toRoute}`].from.forEach(animationObject => {
//             anime(animationObject);
//         });
//     }
// }
if(Array.isArray(routeTransitions[fromRoute+'__to__'+toRoute].from)){routeTransitions[fromRoute+'__to__'+toRoute].from.forEach(function(animationObject){(0,_animejs2.default)(animationObject);});}else{(0,_animejs2.default)(routeTransitions[fromRoute+'__to__'+toRoute].from);}if(Array.isArray(routeTransitions[fromRoute+'__to__'+toRoute].to)){routeTransitions[fromRoute+'__to__'+toRoute].to.forEach(function(animationObject){(0,_animejs2.default)(animationObject);});}else{(0,_animejs2.default)(routeTransitions[fromRoute+'__to__'+toRoute].to);}}else{console.log("NO EXISTE ESA RUTA");}}}]);return Transitions;}();exports.default=Transitions;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var UrlHelper=function(){function UrlHelper(routes,updateRouter){_classCallCheck(this,UrlHelper);this.updateRouter=updateRouter;//Functión para actualizar el router
this.routes=routes;this.state={route:null,routeData:{}};// if(config.dev)
//     console.log("UrlHelper.constructor()", routes);
var _this=this;window.onhashchange=function(){_this.goToState();};this.goToState();}_createClass(UrlHelper,[{key:'updateCurrentState',value:function updateCurrentState(){var _this2=this;// if(config.dev)
//     console.log("UrlHelper.updateCurrentState()");
var urlState={};var hashName=window.location.hash;var hashParts=hashName.split('_',3);//Para dividir las partes del hash con un máximo de 3 partes
var routeFound=false;this.routes.forEach(function(route){if(!routeFound){var hashProcessed=route.object.processHash(hashParts);if(hashProcessed.is){// if(config.dev)
//     console.log('Esta ruta concuerda', route);
routeFound=true;_this2.state.route=route;_this2.state.routeData=hashProcessed.data;}}});if(!routeFound){// if(config.dev)
//     console.log("No se ha encontrado ruta")
this.state.route=this.routes[0];this.state.routeData={};}}},{key:'goToState',value:function goToState(){this.updateCurrentState();this.updateRouter(this.state.route,this.state.routeData);}},{key:'updateUrlHash',value:function updateUrlHash(urlHash){// let urlHash = '';
// switch (urlState.stateName) {
//     case 'splash':
//         urlHash = '';
//         break;
//     case 'unitmenu':
//         urlHash = `#unitmenu`;
//         break;
//     case 'unit':
//         urlHash = `#unit_${urlState.unit}`;
//         break;
//     case 'pluszone':
//         urlHash = `#pluszone_${urlState.unit}`;
//         break;
//     case 'pluscategory':
//         urlHash = `#pluscategory_${urlState.unit}_${urlState.category}`;
//         break;
//     default:
//         break;
// }
window.location.hash=urlHash;}}]);return UrlHelper;}();exports.default=UrlHelper;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();//Screens
var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _urlHelper=__webpack_require__(25);var _urlHelper2=_interopRequireDefault(_urlHelper);var _Transitions=__webpack_require__(24);var _Transitions2=_interopRequireDefault(_Transitions);var _1ScreenHome=__webpack_require__(23);var _1ScreenHome2=_interopRequireDefault(_1ScreenHome);var _2ScreenUnitsMenu=__webpack_require__(22);var _2ScreenUnitsMenu2=_interopRequireDefault(_2ScreenUnitsMenu);var _3ScreenUnit=__webpack_require__(19);var _3ScreenUnit2=_interopRequireDefault(_3ScreenUnit);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}//El hash puede ser
// "#" o "#" => Home
// "#units" => Menú de unidades
// "#unit_X" => Unidad X
// "#pluszone_X" => Pluszone de unidad X
// "#pluscategory_X_CATEGORY" => Pluszone en categoría CATEGORY y unidad X
var screens=[{id:'home',object:new _1ScreenHome2.default()},{id:'units-menu',object:new _2ScreenUnitsMenu2.default()},{id:'unit',object:new _3ScreenUnit2.default()},{id:'activities-slider',className:'ScreenActivitiesSlider',hash:'#unrrrits',processHash:function processHash(hashParts){return{is:hashParts[0]=='#units'&&hashParts.length==1,data:{}};}},{id:'resources',className:'ScreenResources',hash:'#unrrrits',processHash:function processHash(hashParts){return{is:hashParts[0]=='#units'&&hashParts.length==1,data:{}};}},{id:'final-evaluation',className:'ScreenFinalEvaluation',hash:'#unrrrits',processHash:function processHash(hashParts){return{is:hashParts[0]=='#units'&&hashParts.length==1,data:{}};}}];var transitions=new _Transitions2.default();var Router=function(){function Router(data){_classCallCheck(this,Router);this.state={data:data,lastRoute:null};this.urlHelper=new _urlHelper2.default(screens,this.update.bind(this));}_createClass(Router,[{key:'update',value:function update(route,inputData){console.log("Update router");//This function change from one screen to another (or only data)
route.object.init({data:route.object.transformInputData(inputData,this.state.data),goTo:this.goTo.bind(this)});//Transisions
var lastRouteId=this.state.lastRoute?this.state.lastRoute.id:null;transitions.start(route.id,lastRouteId);this.state.lastRoute=route;}},{key:'goTo',value:function goTo(hash){//Go from link
// if(config.dev){
//     console.log("Router.goto");
//     console.log(hash);
// }
this.urlHelper.updateUrlHash(hash);}}]);return Router;}();exports.default=Router;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();//Helpers
//Left Menu
//SubUnit
//Templates
var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _router=__webpack_require__(26);var _router2=_interopRequireDefault(_router);var _bookColors=__webpack_require__(18);var _ImagesPreload=__webpack_require__(17);var _ImagesPreload2=_interopRequireDefault(_ImagesPreload);var _0LeftMenu=__webpack_require__(16);var _0LeftMenu2=_interopRequireDefault(_0LeftMenu);var _ScreenSubUnit=__webpack_require__(15);var _ScreenSubUnit2=_interopRequireDefault(_ScreenSubUnit);var _main=__webpack_require__(14);var _main2=_interopRequireDefault(_main);var _assert=__webpack_require__(13);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var SantillanaMicrocontenidos=function(){function SantillanaMicrocontenidos(){_classCallCheck(this,SantillanaMicrocontenidos);this.state={book:{}};this.leftMenu=null;}_createClass(SantillanaMicrocontenidos,[{key:'init',value:function init(data){// if(config.dev){
// 	onsole.log('Loaded Data:', data);
// 	console.log('Unit 0:', data.units[0]);
// }
//Check if we are in first subunit of book
var isFirstSubunit=idclase==data.units[0].subunits[0].id;//Transforma los datos
if(_config2.default.dev){console.log('%c Iniciando estilos Santillana ','background: #29495e; color: white');console.log('%c Unidades: '+data.units.length+' ','background: #29495e; color: white');}//Get home image
var homeBackgroundImageUrl='';if(data.units[0].subunits.length>=1){if(data.units[0].subunits[0].image){homeBackgroundImageUrl=data.units[0].subunits[0].image;}}//Remove first unit
data.units.shift();data.homeBackgroundImageUrl=homeBackgroundImageUrl;//if user is student, remove subunits not visible for her
if((typeof blink==='undefined'?'undefined':_typeof(blink))=='object'){if(blink.user.esAlumno()){data.units.forEach(function(unit){var i=unit.subunits.length;while(i--){if(unit.subunits[i].onlyVisibleTeachers){unit.subunits.splice(i,1);}}i=unit.resources.length;while(i--){if(unit.resources[i].onlyVisibleTeachers){unit.resources.splice(i,1);}}});}}//Regenerate units number with new property
data.units.forEach(function(unit,index){unit.numberformenu=index+1;});//Divide subunits in main, aside and evaluation
//TODO QUEDA POR ENTENDER COMO SE GESTIONA EVALUACION, PERO POR AHORA LO SEPARO
var asideClassesName=['flipped','refuerzo','microproyecto','ampliacion'];var evaluationClassesName=['evaluacion'];data.units.forEach(function(unit){unit.subunitsmain=[];unit.subunitsevaluation=[];unit.resourcesmain=[];unit.resourcesevaluation=[];unit.subunits.forEach(function(subunit){var added=false;if(subunit.tag){evaluationClassesName.forEach(function(tagName){if(subunit.tag.indexOf(tagName)>=0){if(!added){unit.subunitsevaluation.push(subunit);added=true;}}});}if(!added){unit.subunitsmain.push(subunit);}});unit.resources.forEach(function(resource){var added=false;if(resource.tag){// asideClassesName.forEach(tagName => {
// 	if(resource.tag.indexOf(tagName)>=0){
// 		if(!added){
// 			resource.smtype=tagName;
// 			unit.resourcesmain.push(resource);
// 			added = true;
// 		}
// 	}
// });
asideClassesName.forEach(function(tagName){if(resource.tag.indexOf(tagName)>=0){resource.smtype=tagName;}});evaluationClassesName.forEach(function(tagName){if(resource.tag.indexOf(tagName)>=0){if(!added){unit.resourcesevaluation.push(resource);added=true;}}});}// if(resource.evalType==2){
// 	unit.resourcesevaluation.push(resource);
// 	added = true;
// }
if(!added){unit.resourcesmain.push(resource);}});});// console.log("data.units[1].subunitsmain");
// console.log(data.units[1].subunitsmain);
// console.log("data.units[1].subunitsaside");
// console.log(data.units[1].subunitsaside);
// console.log("data.units[1].subunitsevaluation");
// console.log(data.units[1].subunitsevaluation);
// If this page is the first subunit of first unit, show menu.
if(isFirstSubunit){//Hide navbar bottom
if(document.getElementsByClassName('navbar-bottom').length){document.getElementsByClassName('navbar-bottom')[0].style.display='none';}// Generate HTML Structure
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend',_main2.default);//Add class to hide all elemens in body except #santillana_microcontenidos_menu
document.getElementsByTagName('body')[0].classList.add('santillana_microcontenidos_menu');(0,_bookColors.setBookColor)();var router=new _router2.default(data);this.leftMenu=new _0LeftMenu2.default(data);// this.leftMenu.onChange = function(data){
// 	alert("hola", data);
// }
window.SantillanaMicrocontenidosMenuToggle=this.leftMenu.toggleMenu;window.SantillanaMicrocontenidosMenuOpen=this.leftMenu.openMenu;window.SantillanaMicrocontenidosMenuClose=this.leftMenu.closeMenu;// router.goTo({
// 	id: 'home',
// 	data: {}
// });
//PreloadImages
var preloadImages=new _ImagesPreload2.default();preloadImages.add(data.homeBackgroundImageUrl);//Else show content of subunit
}else{if(_config2.default.dev)console.log('NO es la actividad Portada');this.ScreenSubUnit=new _ScreenSubUnit2.default();this.ScreenSubUnit.init();(0,_bookColors.setBookColor)();}}}]);return SantillanaMicrocontenidos;}();exports.default=SantillanaMicrocontenidos;

/***/ }),
/* 28 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,900);", ""]);

// module
exports.push([module.i, ".sm-base div,.sm-base span,.sm-base applet,.sm-base object,.sm-base iframe,.sm-base h1,.sm-base h2,.sm-base h3,.sm-base h4,.sm-base h5,.sm-base h6,.sm-base p,.sm-base blockquote,.sm-base pre,.sm-base a,.sm-base abbr,.sm-base acronym,.sm-base address,.sm-base big,.sm-base cite,.sm-base code,.sm-base del,.sm-base dfn,.sm-base em,.sm-base img,.sm-base ins,.sm-base kbd,.sm-base q,.sm-base s,.sm-base samp,.sm-base small,.sm-base strike,.sm-base strong,.sm-base sub,.sm-base sup,.sm-base tt,.sm-base var,.sm-base b,.sm-base u,.sm-base i,.sm-base center,.sm-base dl,.sm-base dt,.sm-base dd,.sm-base ol,.sm-base ul,.sm-base li,.sm-base fieldset,.sm-base form,.sm-base label,.sm-base legend,.sm-base table,.sm-base caption,.sm-base tbody,.sm-base tfoot,.sm-base thead,.sm-base tr,.sm-base th,.sm-base td,.sm-base article,.sm-base aside,.sm-base canvas,.sm-base details,.sm-base embed,.sm-base figure,.sm-base figcaption,.sm-base footer,.sm-base header,.sm-base hgroup,.sm-base menu,.sm-base nav,.sm-base output,.sm-base ruby,.sm-base section,.sm-base summary,.sm-base time,.sm-base mark,.sm-base audio,.sm-base video{margin:0;padding:0;font-size:100%;font:inherit;vertical-align:baseline}.sm-base article,.sm-base aside,.sm-base details,.sm-base figcaption,.sm-base figure,.sm-base footer,.sm-base header,.sm-base hgroup,.sm-base menu,.sm-base nav,.sm-base section{display:block}.sm-base body{line-height:1}.sm-base ol,.sm-base ul{list-style:none}.sm-base blockquote,.sm-base q{quotes:none}.sm-base blockquote:before,.sm-base blockquote:after{content:'';content:none}.sm-base q:before,.sm-base q:after{content:'';content:none}.sm-base table{border-collapse:collapse;border-spacing:0}.sm-base a{text-decoration:none}.h5,.sm-base .sm-button-next-screen span,.sm-base .sm-button-back-screen span,.sm-base .sm-button-slide-left span,.sm-base .sm-button-slide-right span{font-weight:700;font-size:12px}.sm-base{min-width:300px;color:#29495e;background-color:#29495e;perspective:1000px}.sm-base *,.sm-base *:before,.sm-base *:after{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.sm-base a{color:#29495e}.sm-base .sm-button-next-screen,.sm-base .sm-button-back-screen{position:relative;display:block;margin:0 auto;width:80px;height:40px;text-align:center;color:#fff;border-top-left-radius:40px;border-top-right-radius:40px;border-bottom-width:0;cursor:pointer;transition:transform .1s ease-out;transform-origin:50% 100%}@media only screen and (min-width: 768px){.sm-base .sm-button-next-screen,.sm-base .sm-button-back-screen{width:112px;height:56px}}@media only screen and (min-width: 768px){.sm-base .sm-button-next-screen,.sm-base .sm-button-back-screen{border-top-left-radius:56px;border-top-right-radius:56px}}.sm-base .sm-button-next-screen:hover,.sm-base .sm-button-back-screen:hover{transform:scale(0.9) !important}.sm-base .sm-button-next-screen svg,.sm-base .sm-button-back-screen svg{position:relative;margin-top:18px;fill:#fff}@media only screen and (min-width: 768px){.sm-base .sm-button-next-screen svg,.sm-base .sm-button-back-screen svg{margin-top:14px}}.sm-base .sm-button-next-screen span,.sm-base .sm-button-back-screen span{display:none;position:relative;margin-top:4px;text-transform:uppercase}@media only screen and (min-width: 768px){.sm-base .sm-button-next-screen span,.sm-base .sm-button-back-screen span{display:block}}.sm-base .sm-button-back-screen{border-top-left-radius:0;border-top-right-radius:0;border-top-width:0;border-bottom-left-radius:40px;border-bottom-right-radius:40px;border-bottom-width:2px;transform-origin:50% 0%}@media only screen and (min-width: 768px){.sm-base .sm-button-back-screen{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:56px;border-bottom-right-radius:56px}}.sm-base .sm-button-back-screen svg{margin-top:11px;transform:rotateZ(180deg)}@media only screen and (min-width: 768px){.sm-base .sm-button-back-screen svg{margin-top:8px}}.sm-base .sm-button-slide-left,.sm-base .sm-button-slide-right{position:relative;margin:0 auto;width:56px;height:112px;text-align:center;color:#fff;border-width:2px;border-left-width:0;border-style:solid;border-color:rgba(255,255,255,0);border-top-right-radius:56px;border-bottom-right-radius:56px;background-color:rgba(41,73,94,0.73);cursor:pointer;outline:none}.sm-base .sm-button-slide-left:hover,.sm-base .sm-button-slide-right:hover{border-color:#fff}.sm-base .sm-button-slide-left[aria-disabled=true],.sm-base .sm-button-slide-right[aria-disabled=true]{display:none}.sm-base .sm-button-slide-left svg,.sm-base .sm-button-slide-right svg{position:relative;margin-top:50px;fill:#fff;transform:rotateZ(90deg)}.sm-base .sm-button-slide-left span,.sm-base .sm-button-slide-right span{display:none;position:relative;margin-top:4px;text-transform:uppercase}@media only screen and (min-width: 768px){.sm-base .sm-button-slide-left span,.sm-base .sm-button-slide-right span{display:block}}.sm-base .sm-button-slide-right{border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:56px;border-bottom-left-radius:56px;border-width:2px;border-right-width:0}.sm-base .sm-button-slide-right svg{transform:rotateZ(-90deg)}#santillana_microcontenidos_menu{position:fixed;top:44px;right:0;bottom:0;left:0}body.santillana_microcontenidos_menu{font-family:'Source Sans Pro', sans-serif}#sm-home{display:none}#sm-units-menu{display:none}#sm-unit{display:none}#sm-activities-slider{display:none}#sm-activities-slider.active{display:block}#sm-resources{display:none}#sm-resources.active{display:block}#sm-final-evaluation{display:none}#sm-final-evaluation.active{display:block}#sm-left-menu{position:absolute;top:0;bottom:0;left:0;z-index:501;display:block;width:100%;max-width:400px;background-color:#fff;overflow-y:auto;transform:translateX(-100%);transition:transform .2s ease-in-out}#sm-left-menu.active{transform:translateX(0%)}#sm-left-menu>ul>li{border-bottom:1px solid rgba(41,73,94,0.1)}#sm-left-menu .sm-left-menu--level1,#sm-left-menu .sm-left-menu--level2{display:flex;position:relative;align-items:center;min-height:96px;padding:16px 24px 16px 24px;cursor:pointer}#sm-left-menu .sm-left-menu--level1 .sm-left-menu--image,#sm-left-menu .sm-left-menu--level2 .sm-left-menu--image{width:64px;height:64px;margin-right:24px;border-radius:50%;background-size:cover;background-position:center center;background-repeat:no-repeat;background-color:rgba(41,73,94,0.73)}#sm-left-menu .sm-left-menu--level1 .sm-left-menu--title,#sm-left-menu .sm-left-menu--level2 .sm-left-menu--title{flex:1;font-weight:700;font-size:15px;padding-left:24px}#sm-left-menu .sm-left-menu--level1 .sm-left-menu--title span,#sm-left-menu .sm-left-menu--level2 .sm-left-menu--title span{position:absolute;display:block;margin-left:-24px}#sm-left-menu .sm-left-menu--level1 .sm-left-menu--arrow,#sm-left-menu .sm-left-menu--level2 .sm-left-menu--arrow{width:24px;text-align:right}#sm-left-menu .sm-left-menu--level1 .sm-left-menu--arrow svg,#sm-left-menu .sm-left-menu--level2 .sm-left-menu--arrow svg{transform:rotateZ(90deg);transition:transform .2s ease-in-out,fill .2s ease-in-out;fill:rgba(41,73,94,0.5)}#sm-left-menu .sm-left-menu--level1:hover,#sm-left-menu .sm-left-menu--level2:hover{background-color:rgba(41,73,94,0.05)}#sm-left-menu .sm-left-menu--level1.active:before,#sm-left-menu .sm-left-menu--level2.active:before{content:'';position:absolute;display:block;top:0;bottom:0;left:0;width:5px}#sm-left-menu .sm-left-menu--level1.active .sm-left-menu--arrow svg,#sm-left-menu .sm-left-menu--level2.active .sm-left-menu--arrow svg{transform:rotateZ(-90deg);fill:#29495e}#sm-left-menu .sm-left-menu--level2{min-height:80px;padding:16px 24px 16px 40px}#sm-left-menu .sm-left-menu--level2:before{content:'';position:absolute;display:block;top:0;bottom:0;left:0;width:5px}#sm-left-menu .sm-left-menu--level2 .sm-left-menu--image{width:48px;height:48px}#sm-left-menu .sm-left-menu--level2 .sm-left-menu--arrow svg{display:none;transform:rotateZ(0) !important;fill:#29495e}#sm-left-menu .sm-left-menu--level2:hover .sm-left-menu--arrow svg{display:block}#sm-left-menu .sm-left-menu--level1+ul{height:0;overflow-y:hidden;transition:height .2s ease-in-out}#sm-left-menu__background{display:none;position:fixed;z-index:500;top:0;right:0;bottom:0;left:0;background-color:rgba(41,73,94,0.8)}#sm-home{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#29495e;background-size:cover;background-position:center center;background-repeat:no-repeat;z-index:100}#sm-home .sm-content{position:absolute;top:0;right:0;bottom:0;left:0}#sm-home .sm-content:before{content:'';position:absolute;right:0;bottom:0;left:0;height:359px;background:linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0.73))}@media only screen and (min-width: 768px){#sm-home .sm-content:before{height:492px}}#sm-home .sm-content .sm-content--content{position:absolute;right:0;bottom:0;left:0}#sm-home .sm-content .sm-content--content h2{position:relative;margin:0 auto;width:128px;height:128px;text-align:center;border-radius:50%;background-color:rgba(41,73,94,0.73)}@media only screen and (min-width: 768px){#sm-home .sm-content .sm-content--content h2{width:157px;height:157px}}@media only screen and (min-width: 1168px){#sm-home .sm-content .sm-content--content h2{width:184px;height:184px}}#sm-home .sm-content .sm-content--content h2 strong{position:absolute;top:0;right:0;left:0;font-weight:700;line-height:122px;font-size:84px;letter-spacing:4px}@media only screen and (min-width: 768px){#sm-home .sm-content .sm-content--content h2 strong{line-height:150px;font-size:110px}}@media only screen and (min-width: 1168px){#sm-home .sm-content .sm-content--content h2 strong{line-height:174px;font-size:125px}}#sm-home .sm-content .sm-content--content h2 span{display:block;font-weight:700;padding:68px 0 0 50px;font-size:17px;color:#fff;text-transform:uppercase}@media only screen and (min-width: 768px){#sm-home .sm-content .sm-content--content h2 span{padding:85px 0 0 71px;font-size:24px}}@media only screen and (min-width: 1168px){#sm-home .sm-content .sm-content--content h2 span{padding:93px 0 0 82px;font-size:30px}}#sm-home .sm-content .sm-content--content h1{margin:10px auto;width:90%;min-width:280px;text-align:center;line-height:normal;font-weight:700;font-size:40px;color:#29495e}@media only screen and (min-width: 768px){#sm-home .sm-content .sm-content--content h1{width:80%}}@media only screen and (min-width: 768px){#sm-home .sm-content .sm-content--content h1{font-size:50px}}#sm-home .sm-content .sm-content--content .sm-button-next-screen{margin-top:20px}#sm-units-menu{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#29495e;background-size:cover;background-position:center center;background-repeat:no-repeat;z-index:110}#sm-units-menu #sm-units-menu__unit--template{display:none}#sm-units-menu .sm-content{position:absolute;top:0;right:0;bottom:0;left:0}#sm-units-menu .sm-content .tns-controls{position:relative;z-index:2}#sm-units-menu .sm-content .sm-button-back-screen{z-index:3}#sm-units-menu .sm-content #sm-units-menu-slider__controls{position:absolute;display:none;top:0;right:0;left:0;height:0;z-index:1}@media only screen and (min-width: 1024px){#sm-units-menu .sm-content #sm-units-menu-slider__controls{display:block}}#sm-units-menu .sm-content #sm-units-menu-slider__controls>div{position:absolute;top:35vh}#sm-units-menu .sm-content #sm-units-menu-slider__controls>div.sm-units-menu-slider__controls__next{right:0}#sm-units-menu .sm-content .sm-units-menu-slider{position:absolute;top:0;right:0;bottom:0;left:0;overflow-y:auto}@media only screen and (min-width: 1024px){#sm-units-menu .sm-content .sm-units-menu-slider{overflow-y:inherit}}#sm-units-menu .sm-content .sm-units-menu__unit{position:relative;width:100%;height:200px;background-color:#fff;background-size:cover;background-position:center center;background-repeat:no-repeat}@media only screen and (min-width: 768px){#sm-units-menu .sm-content .sm-units-menu__unit{width:100%;height:300px}}@media only screen and (min-width: 1024px){#sm-units-menu .sm-content .sm-units-menu__unit{width:352px;height:100%}}#sm-units-menu .sm-content .sm-units-menu__unit:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0) 100%);z-index:0}@media only screen and (min-width: 768px){#sm-units-menu .sm-content .sm-units-menu__unit:before{background:linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.1) 100%)}}@media only screen and (min-width: 1024px){#sm-units-menu .sm-content .sm-units-menu__unit:before{background:linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)}}#sm-units-menu .sm-content .sm-units-menu__unit:after{content:'';position:absolute;display:none;top:0;right:0;bottom:0;left:0;z-index:1;opacity:0.72}#sm-units-menu .sm-content .sm-units-menu__unit:hover:after{display:block}#sm-units-menu .sm-content .sm-units-menu__unit a{display:block;position:absolute;z-index:3;top:0;right:0;bottom:0;left:0;padding:56px 24px 0 24px}@media only screen and (min-width: 768px){#sm-units-menu .sm-content .sm-units-menu__unit a{padding:40px 32px 0 32px}}#sm-units-menu .sm-content .sm-units-menu__unit .sm-units-menu__unit__number{position:relative;width:32px;height:32px;border:1px solid #fff;border-radius:50%;text-align:center;color:#fff;font-weight:900;line-height:28px;font-size:15px;z-index:2}@media only screen and (min-width: 768px){#sm-units-menu .sm-content .sm-units-menu__unit .sm-units-menu__unit__number{width:64px;height:64px;border-width:2px;line-height:56px;font-size:30px}}@media only screen and (min-width: 1024px){#sm-units-menu .sm-content .sm-units-menu__unit .sm-units-menu__unit__number{position:absolute;left:40px;bottom:176px}}#sm-units-menu .sm-content .sm-units-menu__unit .sm-units-menu__unit__title{position:relative;margin-top:8px;color:#fff;font-weight:700;font-size:20px;z-index:2}@media only screen and (min-width: 768px){#sm-units-menu .sm-content .sm-units-menu__unit .sm-units-menu__unit__title{font-size:20px}}@media only screen and (min-width: 1024px){#sm-units-menu .sm-content .sm-units-menu__unit .sm-units-menu__unit__title{position:absolute;left:40px;bottom:112px}}#sm-units-menu .sm-content .sm-units-menu__unit .sm-units-menu__unit__progress{position:absolute;right:24px;bottom:24px;left:24px;z-index:2}@media only screen and (min-width: 768px){#sm-units-menu .sm-content .sm-units-menu__unit .sm-units-menu__unit__progress{right:32px;bottom:32px;left:32px}}@media only screen and (min-width: 1024px){#sm-units-menu .sm-content .sm-units-menu__unit .sm-units-menu__unit__progress{right:40px;bottom:40px;left:40px}}#sm-units-menu .sm-content .sm-units-menu__unit .sm-units-menu__unit__progress .sm-units-menu__unit__progress__title{text-align:right;font-weight:700;font-size:10px;color:#fff;text-transform:uppercase}@media only screen and (min-width: 1024px){#sm-units-menu .sm-content .sm-units-menu__unit .sm-units-menu__unit__progress .sm-units-menu__unit__progress__title{font-size:12px}}#sm-units-menu .sm-content .sm-units-menu__unit .sm-units-menu__unit__progress .sm-units-menu__unit__progress__bar{position:relative;height:2px;margin-top:4px;background-color:#fff}@media only screen and (min-width: 768px){#sm-units-menu .sm-content .sm-units-menu__unit .sm-units-menu__unit__progress .sm-units-menu__unit__progress__bar{height:4px;margin-top:8px}}#sm-units-menu .sm-content .sm-units-menu__unit .sm-units-menu__unit__progress .sm-units-menu__unit__progress__bar div{position:absolute;top:0;bottom:0;left:0;width:70%}#sm-unit{position:absolute;top:0;right:0;bottom:0;left:0;background-size:cover;background-position:center center;background-repeat:no-repeat;z-index:110}#sm-unit #sm-unit__activity_main--template{display:none}#sm-unit #sm-unit__activity_aside--template{display:none}#sm-unit .sm-content{position:absolute;top:0;right:0;bottom:0;left:0}#sm-unit .sm-content .sm-unit__header_background{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#fff}#sm-unit .sm-content .sm-unit__header_background .sm-unit__header_background__content{position:absolute;top:0;right:0;left:0;background-size:cover;background-position:center center;background-repeat:no-repeat;height:362px}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-unit__header_background .sm-unit__header_background__content{height:584px}}@media only screen and (min-width: 1024px){#sm-unit .sm-content .sm-unit__header_background .sm-unit__header_background__content{height:536px}}#sm-unit .sm-content .sm-unit__header_background .sm-unit__header_background__content:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(-180deg, rgba(3,16,35,0.3) 82%, rgba(3,16,35,0.4) 100%);z-index:0}#sm-unit .sm-content .sm-button-back-screen{z-index:4}#sm-unit .sm-content .sm-content--scrolled{position:absolute;top:0;right:0;bottom:0;left:0;overflow-y:auto}#sm-unit .sm-content .sm-content--scrolled .sm-unit__header{position:relative;height:362px;padding:56px 24px 0 24px}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__header{height:584px;padding:120px 32px 0 32px}}@media only screen and (min-width: 1024px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__header{height:536px;padding:120px 312px 0 40px}}@media only screen and (min-width: 1600px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__header{padding:120px 40px 0 40px}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__header .sm-unit__header__content{position:relative;width:100%;max-width:936px;height:100%;margin:0 auto}#sm-unit .sm-content .sm-content--scrolled .sm-unit__header .sm-unit__header__content .sm-unit__header__number{position:relative;width:32px;height:32px;border:1px solid #fff;border-radius:50%;text-align:center;color:#fff;font-weight:900;line-height:28px;font-size:15px;z-index:2}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__header .sm-unit__header__content .sm-unit__header__number{width:64px;height:64px;border-width:2px;line-height:56px;font-size:30px}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__header .sm-unit__header__content .sm-unit__header__title{position:relative;width:80%;margin-top:40px;color:#fff;font-weight:700;line-height:1em;font-size:30px;z-index:2}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__header .sm-unit__header__content .sm-unit__header__title{font-size:50px}}@media only screen and (min-width: 1024px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__header .sm-unit__header__content .sm-unit__header__title{width:80%}}@media only screen and (min-width: 1168px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__header .sm-unit__header__content .sm-unit__header__title{width:100%;margin-top:64px}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__header .sm-unit__header__content .sm-unit__header__progress{position:absolute;right:0;bottom:104px;left:0;z-index:2}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__header .sm-unit__header__content .sm-unit__header__progress{bottom:192px}}@media only screen and (min-width: 1024px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__header .sm-unit__header__content .sm-unit__header__progress{bottom:160px}}@media only screen and (min-width: 1168px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__header .sm-unit__header__content .sm-unit__header__progress{bottom:160px}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__header .sm-unit__header__content .sm-unit__header__progress .sm-unit__header__progress__title{text-align:right;font-weight:700;font-size:10px;color:#fff;text-transform:uppercase}@media only screen and (min-width: 1024px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__header .sm-unit__header__content .sm-unit__header__progress .sm-unit__header__progress__title{font-size:12px}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__header .sm-unit__header__content .sm-unit__header__progress .sm-unit__header__progress__bar{position:relative;height:2px;margin-top:4px;background-color:#fff}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__header .sm-unit__header__content .sm-unit__header__progress .sm-unit__header__progress__bar{height:4px;margin-top:8px}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__header .sm-unit__header__content .sm-unit__header__progress .sm-unit__header__progress__bar div{position:absolute;top:0;bottom:0;left:0;width:70%}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container{background-color:#fff}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content{position:relative;max-width:1288px;margin:0 auto;padding:0 24px;padding-bottom:80px;display:flex;flex-direction:column;align-items:center}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content{padding:0 32px;padding-bottom:112px}}@media only screen and (min-width: 1024px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content{display:block;padding:0 40px;padding-bottom:160px}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content:after{content:\"\";display:table;clear:both}}@media only screen and (min-width: 1600px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content{max-width:1640px}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container{position:relative;max-width:936px;margin-top:-80px;width:100%}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container{margin-top:-144px}}@media only screen and (min-width: 1024px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container{float:left;width:calc( 100% - (8px * 34));margin-top:-104px}}@media only screen and (min-width: 1600px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container{margin-left:312px}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container:before{content:'';position:absolute;top:0px;right:0px;left:0px;height:400px;background-image:linear-gradient(-180deg, rgba(41,73,94,0.42) 0%, rgba(41,73,94,0) 97%);border-radius:100px;filter:blur(27px)}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main{position:relative;padding-top:40px;border-top-left-radius:9px;border-top-right-radius:9px;background-color:#fff}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main{position:relative}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__send_link{display:none}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__send_link{position:absolute;display:block;top:24px;right:152px;width:128px;height:24px;text-align:center;line-height:24px;font-weight:700;font-size:10px;text-transform:uppercase;color:#29495e;border:1px solid rgba(41,73,94,0.2);border-radius:12px}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__send_link:hover,#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__send_link:active{border-color:#29495e}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__send_link svg{position:absolute;top:4px;left:14px}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__send_link svg path{fill:#29495e}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link{display:block;position:relative;min-height:120px;color:#29495e}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link{min-height:136px}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link:hover,#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link:active{background-color:rgba(41,73,94,0.05)}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link .sm-unit__activity_main__number{position:absolute;top:24px;left:24px;width:20px;height:20px;text-align:center;font-weight:700;line-height:18px;font-size:12px;border:1px solid rgba(41,73,94,0.56);border-radius:50%;background-color:rgba(255,255,255,0.6)}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link .sm-unit__activity_main__number{left:40px}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link .sm-unit__activity_main__texts{padding:21.6px 24px 24px 56px}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link .sm-unit__activity_main__texts{padding:21.6px 152px 24px 100px}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link .sm-unit__activity_main__texts .sm-unit__activity_main__title{font-weight:900;line-height:1.4em;font-size:14px}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link .sm-unit__activity_main__texts .sm-unit__activity_main__title{font-size:15px}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link .sm-unit__activity_main__texts .sm-unit__activity_main__type{font-size:12px;color:rgba(41,73,94,0.56)}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link .sm-unit__activity_main__texts .sm-unit__activity_main__type{font-size:15px}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link .sm-unit__activity_main__texts .sm-unit__activity_main__progress{padding-top:8px}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link .sm-unit__activity_main__texts .sm-unit__activity_main__progress{padding-top:16px}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link .sm-unit__activity_main__texts .sm-unit__activity_main__progress .sm-unit__activity_main__progress__title{font-size:12px}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link .sm-unit__activity_main__texts .sm-unit__activity_main__progress .sm-unit__activity_main__progress__title{text-align:right}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link .sm-unit__activity_main__texts .sm-unit__activity_main__progress .sm-unit__activity_main__progress__bar{position:relative;height:1px;margin-top:4px;background-color:rgba(41,73,94,0.2)}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link .sm-unit__activity_main__texts .sm-unit__activity_main__progress .sm-unit__activity_main__progress__bar div{position:absolute;top:0;bottom:0;left:0;width:70%}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link .sm-unit__activity_main__image{position:absolute;top:24px;right:24px;width:40px;height:40px;border-radius:50%;background-color:#29495e;background-size:cover;background-position:center center;background-repeat:no-repeat}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link .sm-unit__activity_main__image{top:50%;right:40px;margin-top:-36px;width:72px;height:72px}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link:before{content:'';position:absolute;top:0;bottom:0;left:34px;width:0px;border-right:1px dashed rgba(41,73,94,0.14)}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main>a.sm-unit__activity_main__link:before{left:50px}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main:first-child>a.sm-unit__activity_main__link:before{top:34px}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__main_container .sm-unit__activities__main .sm-unit__activity_main:last-child>a.sm-unit__activity_main__link:before{bottom:auto;height:34px}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__aside_container{position:relative;width:100%;max-width:1288px;padding-top:24px}@media only screen and (min-width: 1024px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__aside_container{float:right;width:240px;padding:0}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__aside_container h4{margin:0;padding:24px 0;text-align:center;font-weight:700;font-size:15px;text-transform:uppercase}@media only screen and (min-width: 1024px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__aside_container h4{text-align:left}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__aside_container .sm-unit__activities__aside .sm-unit__activity_aside>a{display:block;position:relative;min-height:200px;padding:24px;margin-bottom:16px;border:1px solid rgba(41,73,94,0.2);border-radius:6px}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__aside_container .sm-unit__activities__aside .sm-unit__activity_aside>a:hover,#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__aside_container .sm-unit__activities__aside .sm-unit__activity_aside>a:active{border-color:transparent;background-color:rgba(41,73,94,0.05)}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__aside_container .sm-unit__activities__aside .sm-unit__activity_aside>a .sm-unit__activity_aside__header{display:flex;align-items:center}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__aside_container .sm-unit__activities__aside .sm-unit__activity_aside>a .sm-unit__activity_aside__header .sm-unit__activity_aside__icon{width:72px;height:48px}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__aside_container .sm-unit__activities__aside .sm-unit__activity_aside>a .sm-unit__activity_aside__header .sm-unit__activity_aside__icon svg{width:48px;height:48px}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__aside_container .sm-unit__activities__aside .sm-unit__activity_aside>a .sm-unit__activity_aside__header .sm-unit__activity_aside__type{flex:1;padding-bottom:4px;font-weight:700;font-size:12px;text-transform:uppercase;color:rgba(41,73,94,0.5)}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__aside_container .sm-unit__activities__aside .sm-unit__activity_aside>a .sm-unit__activity_aside__title{padding:24px 0 16px 0;line-height:18px;font-weight:700;font-size:15px}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__aside_container .sm-unit__activities__aside .sm-unit__activity_aside>a .sm-unit__activity_aside__progress{padding-top:8px}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__aside_container .sm-unit__activities__aside .sm-unit__activity_aside>a .sm-unit__activity_aside__progress{padding-top:16px}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__aside_container .sm-unit__activities__aside .sm-unit__activity_aside>a .sm-unit__activity_aside__progress .sm-unit__activity_aside__progress__title{font-size:12px}@media only screen and (min-width: 768px){#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__aside_container .sm-unit__activities__aside .sm-unit__activity_aside>a .sm-unit__activity_aside__progress .sm-unit__activity_aside__progress__title{text-align:right}}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__aside_container .sm-unit__activities__aside .sm-unit__activity_aside>a .sm-unit__activity_aside__progress .sm-unit__activity_aside__progress__bar{position:relative;height:1px;margin-top:4px;background-color:rgba(41,73,94,0.2)}#sm-unit .sm-content .sm-content--scrolled .sm-unit__activities_container .sm-unit__activities_container__content .sm-unit__activities__aside_container .sm-unit__activities__aside .sm-unit__activity_aside>a .sm-unit__activity_aside__progress .sm-unit__activity_aside__progress__bar div{position:absolute;top:0;bottom:0;left:0;width:70%}body.content_type_curso_santillana-microcontenidos-dev .navbar-bottom,body.content_type_curso_santillana-microcontenidos .navbar-bottom{position:fixed;height:44px;background-color:#fff;border-top:1px solid rgba(41,73,94,0.2)}body.content_type_curso_santillana-microcontenidos-dev .navbar-bottom ol.slider-indicators li.slider-indicator,body.content_type_curso_santillana-microcontenidos .navbar-bottom ol.slider-indicators li.slider-indicator{width:17px;height:17px;text-indent:initial;line-height:15px;font-weight:700;font-size:12px;text-transform:uppercase;border:1px solid rgba(41,73,94,0.2);background-color:#fff}body.content_type_curso_santillana-microcontenidos-dev .navbar-bottom ol.slider-indicators li.slider-indicator.sm-big,body.content_type_curso_santillana-microcontenidos .navbar-bottom ol.slider-indicators li.slider-indicator.sm-big{width:auto;padding-left:12px;padding-right:12px}@media only screen and (min-width: 1024px){body.content_type_curso_santillana-microcontenidos-dev .navbar-bottom ol.slider-indicators li.slider-indicator.sm-big,body.content_type_curso_santillana-microcontenidos .navbar-bottom ol.slider-indicators li.slider-indicator.sm-big{width:100%}}body.content_type_curso_santillana-microcontenidos-dev .navbar-bottom ol.slider-indicators li.slider-indicator:hover,body.content_type_curso_santillana-microcontenidos .navbar-bottom ol.slider-indicators li.slider-indicator:hover{background-color:rgba(41,73,94,0.04)}body.content_type_curso_santillana-microcontenidos-dev .navbar-bottom ol.slider-indicators li.slider-indicator.active,body.content_type_curso_santillana-microcontenidos .navbar-bottom ol.slider-indicators li.slider-indicator.active{color:#fff}\n", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(29);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(30);var _app=__webpack_require__(27);var _app2=_interopRequireDefault(_app);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var SantillanaMicrocontenidosApp=new _app2.default();module.exports={init:function init(data){SantillanaMicrocontenidosApp.init(data);}};

/***/ })
/******/ ]);
});