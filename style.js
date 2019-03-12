(function (blink) {
    'use strict';
 
    var SantillanaMicrocontenidosDevStyle = function () {
        blink.theme.styles['santillana-microcontenidos'].apply(this, arguments);
    };

    SantillanaMicrocontenidosDevStyle.prototype = {
        parent: blink.theme.styles['santillana-microcontenidos'].prototype,
        bodyClassName: 'content_type_clase_santillana_microcontenidos_dev',
        ckEditorStyles: {
			name: 'santillana-microcontenidos-dev',
			styles: [
				{ name: 'Enunciado actividad', element: 'h2', attributes: { 'class': 'h_bold'} },
				{ name: 'Párrafos cortos', element: 'h2', attributes: {} },
				{ name: 'Párrafo título', element: 'h3', attributes: { 'class': 'h_bold'} },
				{ name: 'Párrafo normal', element: 'h3', attributes: { } },
				{ name: 'Pie de foto', element: 'h4', attributes: { } },
				{ name: 'Caja enlace',  type: 'widget', widget: 'blink_box', attributes: { 'class': 'sm__caja-enlace'} },
				{ name: 'Caja destacada',  type: 'widget', widget: 'blink_box', attributes: { 'class': 'sm__caja-destacada'} },
				{ name: 'Caja Think',  type: 'widget', widget: 'blink_box', attributes: { 'class': 'sm__caja-think'} },
				{ name: 'Icono Sonido', element: 'span', attributes: { 'class': 'sm-icon sm-icon--sonido' } },
				{ name: 'Icono Vídeo', element: 'span', attributes: { 'class': 'sm-icon sm-icon--video' } },
				{ name: 'Audio como icono', type: 'widget', widget: 'blink_sound', attributes: { 'class': 'sm-audio-as-icon' } },
			]
		},
		configEditor: function (editor) {
			editor.dtd.$removeEmpty['span'] = false;
		},

		getEditorStyles: function () {
			return this.ckEditorStyles;
		},

        init: function () {
            this.parent.init.call(this.parent, this);
            
            blink.getCourse(idcurso).done((function(data) {
				this.onCourseDataLoaded(data);
			}).bind(this));
		},
		
		onCourseDataLoaded: function(data) {
			SantillanaMicrocontenidosStyleUI.init(data);
		},

        removeFinalSlide: function () {
            this.parent.removeFinalSlide.call(this.parent, this, true);
        },
        
        allocateCanvas: function (sectionIndex) {
			if (sectionIndex !== 0) return;
			//BK-15873 Utilizamos this.parent declarada al inicio de la clase
			this.parent.allocateCanvas.call(this.parent, this, sectionIndex);
		}
    
    };

    SantillanaMicrocontenidosDevStyle.prototype = _.extend({}, new blink.theme.styles['santillana-microcontenidos'](), SantillanaMicrocontenidosDevStyle.prototype);

    blink.theme.styles['santillana-microcontenidos-dev'] = SantillanaMicrocontenidosDevStyle;
 
})( blink );

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["_"], factory);
	else if(typeof exports === 'object')
		exports["SantillanaMicrocontenidosStyleUI"] = factory(require("lodash"));
	else
		root["SantillanaMicrocontenidosStyleUI"] = factory(root["_"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__49__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ({

/***/ 49:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__49__;

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(49);


/***/ })

/******/ });
});(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SantillanaMicrocontenidosStyleUI"] = factory();
	else
		root["SantillanaMicrocontenidosStyleUI"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var config={dev:true,//window.location.hash == '#dev',
// velocityFast: 100,
velocity:200,velocitySlow:400,velocityTransitions:600,easingTransitionOut:'easeOutCubic',easingTransitionLinear:'linear',slideTypes:[{name:'Respuesta múltiple',number:2},{name:'Verdadero / Falso',number:4},{name:'Arrastrar',number:5},{name:'Rellenar espacios',number:6},{name:'Redacción',number:8},{name:'Cálculo numérico',number:9},{name:'Relacionar',number:10},{name:'Respuestas cortas',number:11},{name:'Ordenar',number:12},{name:'Clasificar',number:13},{name:'Dictado',number:14},{name:'Análisis sintáctico',//-------
number:17},{name:'Señalar respuesta',number:18},{name:'Test',number:19},{name:'Velocidad de lectura',number:20},{name:'Palabras cruzadas',number:21},{name:'Sopa de letras',number:22},{name:'Crucigrama',//-------
number:23},{name:'Grabación de sonido',number:25},{name:'Rellenar espacios y Señalar respuesta (mixed)',//-------
number:26},{name:'Archivo entregable',//-------
number:27},{name:'Memory',number:28},{name:'Dibujo',number:29},{name:'Arrastrar imágenes',number:31},{name:'Marcar palabras',number:32}]};exports.default=config;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.cl=cl;//DEbug function for console logs. 
window.smDebugTime=new Date();function cl(){var timeDiferrence=new Date()-window.smDebugTime;window.smDebugTime=new Date();console.log('%c SM Debug | Time: '+timeDiferrence+'ms.','background: #29495e; color: white');if(arguments.length==1){console.log(arguments[0]);}else{console.log(arguments);}}

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var responsiveStatus=function(){function responsiveStatus(sizeChangedFunction){_classCallCheck(this,responsiveStatus);this.state={size:null};if(typeof sizeChangedFunction==='function'){this.sizeChanged=sizeChangedFunction;}else{this.sizeChanged=function(){};}window.addEventListener('resize',this.check.bind(this),false);this.check();}_createClass(responsiveStatus,[{key:'check',value:function check(){// if(config.dev)
//     console.log("responsiveStatus.check");
var width=window.innerWidth;var size=void 0;if(width<768){size='mobile';}else if(width<1024){size='tablet-portrait';}else if(width<=1168){size='tablet-landscape';}else{size='desktop';}if(size!=this.state.size){this.state.size=size;this.sizeChanged(size);}}},{key:'getSize',value:function getSize(){return this.state.size;}}]);return responsiveStatus;}();exports.default=responsiveStatus;

/***/ }),
/* 4 */
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/tiny-slider/src/helpers/keys.js
var keys = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/tiny-slider/src/helpers/childNode.remove.js
var childNode_remove = __webpack_require__(2);

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
/* 6 */
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

var	fixUrls = __webpack_require__(34);

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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(35);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(6)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20170427
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 *//*global self, document, DOMException *//*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */if("document"in window.self){// Full polyfill for browsers with no classList support
// Including IE < Edge missing SVGElement.classList
if(!("classList"in document.createElement("_"))||document.createElementNS&&!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))){(function(view){"use strict";if(!('Element'in view))return;var classListProp="classList",protoProp="prototype",elemCtrProto=view.Element[protoProp],objCtr=Object,strTrim=String[protoProp].trim||function(){return this.replace(/^\s+|\s+$/g,"");},arrIndexOf=Array[protoProp].indexOf||function(item){var i=0,len=this.length;for(;i<len;i++){if(i in this&&this[i]===item){return i;}}return-1;}// Vendors: please allow content code to instantiate DOMExceptions
,DOMEx=function DOMEx(type,message){this.name=type;this.code=DOMException[type];this.message=message;},checkTokenAndGetIndex=function checkTokenAndGetIndex(classList,token){if(token===""){throw new DOMEx("SYNTAX_ERR","An invalid or illegal string was specified");}if(/\s/.test(token)){throw new DOMEx("INVALID_CHARACTER_ERR","String contains an invalid character");}return arrIndexOf.call(classList,token);},ClassList=function ClassList(elem){var trimmedClasses=strTrim.call(elem.getAttribute("class")||""),classes=trimmedClasses?trimmedClasses.split(/\s+/):[],i=0,len=classes.length;for(;i<len;i++){this.push(classes[i]);}this._updateClassName=function(){elem.setAttribute("class",this.toString());};},classListProto=ClassList[protoProp]=[],classListGetter=function classListGetter(){return new ClassList(this);};// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp]=Error[protoProp];classListProto.item=function(i){return this[i]||null;};classListProto.contains=function(token){token+="";return checkTokenAndGetIndex(this,token)!==-1;};classListProto.add=function(){var tokens=arguments,i=0,l=tokens.length,token,updated=false;do{token=tokens[i]+"";if(checkTokenAndGetIndex(this,token)===-1){this.push(token);updated=true;}}while(++i<l);if(updated){this._updateClassName();}};classListProto.remove=function(){var tokens=arguments,i=0,l=tokens.length,token,updated=false,index;do{token=tokens[i]+"";index=checkTokenAndGetIndex(this,token);while(index!==-1){this.splice(index,1);updated=true;index=checkTokenAndGetIndex(this,token);}}while(++i<l);if(updated){this._updateClassName();}};classListProto.toggle=function(token,force){token+="";var result=this.contains(token),method=result?force!==true&&"remove":force!==false&&"add";if(method){this[method](token);}if(force===true||force===false){return force;}else{return!result;}};classListProto.toString=function(){return this.join(" ");};if(objCtr.defineProperty){var classListPropDesc={get:classListGetter,enumerable:true,configurable:true};try{objCtr.defineProperty(elemCtrProto,classListProp,classListPropDesc);}catch(ex){// IE 8 doesn't support enumerable:true
// adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
// modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
if(ex.number===undefined||ex.number===-0x7FF5EC54){classListPropDesc.enumerable=false;objCtr.defineProperty(elemCtrProto,classListProp,classListPropDesc);}}}else if(objCtr[protoProp].__defineGetter__){elemCtrProto.__defineGetter__(classListProp,classListGetter);}})(window.self);}// There is full or partial native classList support, so just check if we need
// to normalize the add/remove and toggle APIs.
(function(){"use strict";var testElement=document.createElement("_");testElement.classList.add("c1","c2");// Polyfill for IE 10/11 and Firefox <26, where classList.add and
// classList.remove exist but support only one argument at a time.
if(!testElement.classList.contains("c2")){var createMethod=function createMethod(method){var original=DOMTokenList.prototype[method];DOMTokenList.prototype[method]=function(token){var i,len=arguments.length;for(i=0;i<len;i++){token=arguments[i];original.call(this,token);}};};createMethod('add');createMethod('remove');}testElement.classList.toggle("c3",false);// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
// support the second argument.
if(testElement.classList.contains("c3")){var _toggle=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(token,force){if(1 in arguments&&!this.contains(token)===!force){return force;}else{return _toggle.call(this,token);}};}testElement=null;})();}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<div id=santillana_microcontenidos_menu class=sm-base> <div id=sm-home> <div class=sm-content> <div class=sm-content--content> <h2><strong class=sm-color-color>3º</strong><span>ESO</span></h2> <h1></h1> <svg xmlns=http://www.w3.org/2000/svg width=134 height=31 viewBox=\"0 0 134 31\"> <g fill=none fill-rule=evenodd> <path fill=#2A495D d=\"M96.3812058 27.7092308L91.9857635 27.6955192 91.9857635 24.1716538 91.9857635 18.7102885C91.9857635 17.0315192 88.9113981 17.5996538 88.9113981 17.5996538L88.9113981 28.7065962C88.9113981 29.8935385 89.9230712 30.6482692 92.9956481 30.3191923 96.7061096 29.9245385 96.5344173 28.7065962 96.3812058 27.7092308M28.1075808 29.4703288C28.1075808 29.4703288 28.3317346 27.1363865 30.4331769 27.4910981 32.7647346 27.8839635 35.5237346 28.2273481 35.4366962 26.6952327 35.3448885 25.0862135 28.6864462 25.2102135 28.6453115 20.9375788 28.5922538 15.3569827 38.2469654 18.101675 38.2469654 18.101675 38.2469654 18.101675 38.3101577 20.4439635 36.2677346 20.3092327 34.7052154 20.2049058 31.7912154 19.7232135 31.7172923 20.8845212 31.6225038 22.3570212 38.6946769 22.5644827 38.5080808 26.6242904 38.2129846 33.0609635 28.1075808 29.4703288 28.1075808 29.4703288M59.5552923 17.6008462L59.5552923 25.3234231 55.4567346 18.7126731C55.0447923 18.0479615 54.3699462 17.7361731 53.7046385 17.6008462 53.4017923 17.5305 53.0727154 17.5078462 52.7692731 17.5090385 52.1552346 17.5054615 51.6950038 17.6008462 51.6950038 17.6008462L51.6950038 29.1680192C51.6950038 30.8479808 54.7675808 30.2804423 54.7675808 30.2804423L54.7675808 30.2798462 54.7675808 22.5566731 58.8661385 29.1680192C59.2780808 29.8333269 59.9529269 30.1451154 60.6182346 30.2804423 60.9204846 30.3507885 61.2495615 30.3740385 61.5536 30.37225 62.1676385 30.3764231 62.6278692 30.2804423 62.6278692 30.2804423L62.6278692 30.2798462 62.6278692 18.7126731C62.6278692 17.0339038 59.5552923 17.6008462 59.5552923 17.6008462M117.406062 17.6008462L117.406062 25.3234231 113.3081 18.7126731C112.896158 18.0479615 112.220715 17.7361731 111.555408 17.6008462 111.253158 17.5305 110.924081 17.5078462 110.620638 17.5090385 110.0066 17.5054615 109.545773 17.6008462 109.545773 17.6008462L109.545773 29.1680192C109.545773 30.8479808 112.61835 30.2804423 112.61835 30.2804423L112.61835 30.2798462 112.61835 22.5566731 116.717504 29.1680192C117.12885 29.8333269 117.803696 30.1451154 118.469004 30.2804423 118.771254 30.3507885 119.100927 30.3740385 119.404965 30.37225 120.019004 30.3764231 120.478042 30.2804423 120.478042 30.2804423L120.478042 30.2798462 120.478042 18.7126731C120.478042 17.0339038 117.406062 17.6008462 117.406062 17.6008462M46.4713846 18.3134288C45.8680769 16.8045635 43.3004423 17.601025 43.3004423 17.601025L38.6391154 29.1926404C38.0364038 30.8261019 41.48575 30.280025 41.48575 30.280025L42.4324423 27.7517365 46.9310192 27.7517365 47.4311923 29.171775C48.1084231 30.9447365 51.1237692 30.280025 51.1237692 30.280025L46.4713846 18.3134288zM43.4625962 24.9986981L44.7473077 21.5642558 45.9592885 24.9986981 43.4625962 24.9986981zM129.046204 18.3134288C128.4423 16.8045635 125.875262 17.601025 125.875262 17.601025L121.213935 29.1926404C120.611223 30.8261019 124.059973 30.280025 124.059973 30.280025L125.006665 27.7517365 129.505838 27.7517365 130.005415 29.171775C130.682646 30.9447365 133.699185 30.280025 133.699185 30.280025L129.046204 18.3134288zM126.037415 24.9986981L127.321531 21.5642558 128.533512 24.9986981 126.037415 24.9986981z\"/> <path fill=#2A495D d=\"M104.47465 18.3134288C103.871342 16.8045635 101.304304 17.601025 101.304304 17.601025L96.6423808 29.1926404C96.0402654 30.8261019 99.4890154 30.280025 99.4890154 30.280025L100.435708 27.7517365 104.934285 27.7517365 105.433862 29.171775C106.112285 30.9447365 109.127035 30.280025 109.127035 30.280025L104.47465 18.3134288zM101.466458 24.9986981L102.751169 21.5642558 103.96315 24.9986981 101.466458 24.9986981zM73.4030519 17.5606654L65.137975 17.5606654C63.2189558 17.5606654 63.7179365 20.3256269 63.7179365 20.3256269L63.7185327 20.3256269 67.0218212 20.3256269 67.0218212 29.1683769C67.0218212 30.8477423 70.1051288 30.2802038 70.1051288 30.2802038L70.1051288 30.2796077 70.1051288 20.3256269 71.9830135 20.3256269C74.0170904 20.3256269 73.4030519 17.5606654 73.4030519 17.5606654M74.6868096 17.6008462L74.6868096 29.1680192C74.6868096 30.8479808 77.7593865 30.2804423 77.7593865 30.2804423L77.7593865 30.2798462 77.7593865 18.7126731C77.7593865 17.0339038 74.6868096 17.6008462 74.6868096 17.6008462M88.104325 27.7033885L82.9148058 27.7033885 82.9148058 18.7121962C82.9148058 17.0328308 79.842825 17.5997731 79.842825 17.5997731L79.842825 28.7067154C79.842825 30.1470231 81.3010173 30.6835615 84.7199596 30.3187154 88.4286327 29.9240615 88.2581327 28.7025423 88.104325 27.7033885M10.5327269 28.7857058C7.69741923 27.6619558 3.8874 26.2335712 1.99580385 23.4537058 1.68103462 22.9893019 1.69057308 23.163975 1.92843846 23.7118404L1.93499615 23.7136288 1.93618846 23.7195904C3.71391923 27.6786481 6.7859 30.6141096 10.1100538 30.6141096 11.0036885 30.6141096 12.1471115 30.3058981 12.1471115 29.8879942 12.1471115 29.5601096 11.5455923 29.1648596 10.5327269 28.7857058\"/> <path fill=#2A495D d=\"M14.5931308,25.4264981 C10.4307846,24.5972481 2.59732308,22.3318635 0.6169,17.7229981 C0.494688462,17.432075 0.418976923,17.4392288 0.472630769,17.7355173 L0.472630769,17.742075 C0.871457692,19.8846519 1.10634231,20.4343058 1.3299,21.1139212 C2.36243846,24.0839596 5.63711154,25.8980558 8.22322692,27.0021327 L8.22084231,26.9967673 L8.22322692,27.0021327 C9.35353462,27.3955942 10.5100731,27.6108058 11.5819577,27.6108058 C13.1414962,27.6108058 14.5251692,27.1529596 15.39615,26.1460558 C15.4641115,26.0697481 15.48915,25.9964212 15.48915,25.9344212 C15.48915,25.6017673 14.7195154,25.4509404 14.5931308,25.4264981\"/> <path fill=#2A495D d=\"M35.9091481,10.3398712 C35.8954365,8.44589038 31.0004173,7.04850577 22.4712442,6.50540962 C22.2238404,6.40764038 21.9561673,6.30689038 21.660475,6.20435192 C20.3990135,5.77154423 17.6447827,5.13544808 14.5203404,4.83617885 C19.3229558,4.02600577 24.8969942,4.03435192 30.7184365,4.04687115 L31.9471096,4.04806346 C32.3197058,4.04806346 32.417475,3.82987115 32.4425135,3.73746731 C32.4490712,3.70885192 32.4532442,3.674275 32.4532442,3.643275 C32.4532442,3.31121731 32.006725,3.06142885 31.8970327,3.00658269 C28.2271096,1.04583269 22.0414173,-0.157205769 16.4936096,0.0168711538 C9.68255192,0.226717308 4.61405192,2.403275 2.17935962,6.14533269 C0.292532692,8.57048654 -0.627332692,12.1587365 0.474359615,14.9052173 C1.47053269,16.9357173 4.52582115,18.7384865 7.21864808,19.3316596 C7.82732115,19.5039481 8.83243654,19.8687942 9.84232115,20.2467558 C6.58732115,20.127525 3.42055192,19.0001981 1.42403269,17.1962365 C1.03057115,16.8385442 0.990628846,16.973275 1.21001346,17.446025 C3.362725,22.0578712 11.9628404,24.1229481 14.700975,24.6714096 C14.8678981,24.7047942 15.0151481,24.7435442 15.1528596,24.7858712 C16.6331096,24.3786981 19.3652827,24.8091212 19.7426481,22.9038135 L19.7426481,22.8024673 C19.7426481,21.7872173 18.6403596,21.7538327 18.1008404,21.7371404 C17.7228788,21.7216404 16.537725,21.5642558 14.9507635,21.1666212 C16.3231096,20.6187558 18.2021865,20.2133712 20.4103404,19.9993519 C24.5595712,19.6011212 25.403725,18.9680058 25.6976288,18.3390635 C25.8579942,18.004025 25.8603788,17.5908904 25.535475,17.1574865 C24.5726865,15.8560827 22.086725,15.0131212 19.8398212,14.5528904 C21.4703019,14.2357365 23.2373019,14.005025 25.1348596,13.8649288 C31.8898788,13.3665442 35.9180904,12.0484481 35.9091481,10.3398712 M3.09266731,8.75887115 C2.44762885,6.72121731 4.09182115,4.85764038 5.05162885,4.03435192 C8.51051346,1.36656346 13.4633596,0.764448077 16.5138788,0.670851923 C21.7659942,0.505121154 27.5862442,1.597275 31.1953596,3.39348654 L30.7184365,3.39348654 C22.8098596,3.37440962 15.3346865,3.36248654 9.56510962,5.40490962 C6.80551346,6.38200577 4.63610962,7.50814038 3.09266731,8.75887115 M3.35855192,9.38960192 C4.85430192,8.13767885 7.01357115,7.00558269 9.79939808,6.01835192 C10.5213404,5.76319808 11.2653404,5.54142885 12.0409365,5.35006346 C16.0363596,5.46512115 19.939975,6.30689038 21.4255904,6.82137115 C23.7809942,7.63333269 23.8197442,8.07985192 23.8197442,8.09058269 C23.8197442,8.09356346 23.6879942,8.41846731 22.0956673,8.64142885 L21.9949173,8.65215962 C19.6091096,8.87154423 11.5550712,9.76219808 6.40310962,11.9071596 C5.21020577,11.2811981 3.88912885,10.3225827 3.35855192,9.38960192 M24.9822442,17.5360442 C25.1551288,17.7685442 25.1491673,17.9312942 25.0764365,18.0701981 C24.8111481,18.6407173 23.2170327,19.0705442 20.3388019,19.3483519 C17.6602827,19.6070827 15.421725,20.1561404 13.9438596,20.8995442 L13.8812635,20.8816596 C12.8672058,20.5829865 11.2575904,19.9510635 10.2685712,19.569525 C11.8662635,19.4133327 13.4287827,18.9036212 14.7695327,17.9736212 L14.7731096,17.9694481 L14.7808596,17.9616981 C15.3633019,17.5563135 16.0584173,16.8689481 16.0584173,16.4820442 C16.0530519,16.0939481 15.7358981,15.7279096 15.1111288,15.407775 C14.8005327,15.2521788 14.4118404,15.1031404 13.9498212,14.9684096 C14.7921865,14.8456019 15.5969942,14.7782365 16.3231096,14.7782365 C18.3035327,14.7782365 23.6385135,15.717775 24.9822442,17.5360442 M18.1008404,14.2583904 C17.382475,14.1701596 16.7630712,14.1230635 16.3243019,14.1230635 C15.2226096,14.1230635 13.9617442,14.2661404 12.6746481,14.5338135 C12.6353019,14.5409673 12.5971481,14.5528904 12.5560135,14.5677942 C11.1389558,14.1171019 9.06135962,13.3343519 7.13995577,12.3167173 C12.2084558,10.3434481 19.7706673,9.51419808 22.0622827,9.30375577 L22.1928404,9.28885192 C23.7052827,9.07840962 24.434975,8.719525 24.4945904,8.15794808 C24.5261865,7.85271731 24.3521096,7.56358269 23.9568596,7.27087115 C32.8079558,7.98029423 35.2205904,9.56546731 35.2283404,10.3434481 L35.2283404,10.3476212 C35.2283404,11.1965442 32.5289558,12.6630827 25.0835904,13.214525 C22.5159558,13.4011212 20.1855904,13.7552365 18.1008404,14.2583904\"/> </g> </svg> <a href=#units class=\"sm-button-next-screen sm-color-background-color\"> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> <span>Unidades</span> </a> </div> <div class=sm-home-touchable-area></div> </div> </div> <div id=sm-units-menu> <div id=sm-units-menu__unit--template class=\"sm-units-menu__unit sm-color-background-color_after\"> <div class=sm-units-menu__unit__image></div> <a> <div class=sm-units-menu__unit__number></div> <div class=sm-units-menu__unit__title></div> <div class=sm-units-menu__unit__progress> <div class=sm-units-menu__unit__progress__title></div> <div class=sm-units-menu__unit__progress__bar> <div class=sm-color-background-color></div> </div> </div> </a> </div> <div class=sm-content> <div id=sm-units-menu-slider__controls> <div class=\"sm-units-menu-slider__controls__prev sm-button-slide-left\"> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> </div> <div class=\"sm-units-menu-slider__controls__next sm-button-slide-right\"> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> </div> </div> <div class=sm-units-menu-slider></div> <a href=# class=\"sm-button-back-screen sm-color-background-color\"> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> <span>Portada</span> </a> </div> </div> <div id=sm-unit> <div id=sm-unit__activity_main--template class=sm-unit__activity_main> <a class=sm-unit__activity_main__link> <div class=sm-unit__activity_main__number></div> <div class=sm-unit__activity_main__texts> <div class=sm-unit__activity_main__title></div> <div class=sm-unit__activity_main__type></div> <div class=sm-unit__activity_main__progress> <div class=sm-unit__activity_main__progress__title></div> <div class=sm-unit__activity_main__progress__bar> <div class=sm-color-background-color></div> </div> </div> </div> <div class=sm-unit__activity_main__image></div> </a> <div class=sm-unit__activity_main__send_link> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=14 viewBox=\"0 0 16 14\"> <path fill=red id=folder-action-a d=\"M13.4122915,1.13076588 C14.6339038,1.13076588 15.6316299,2.07195626 15.7090789,3.24796695 C15.1233298,2.65359791 14.2004495,2.26159435 13.4122915,2.26159435 L5.55414155,2.26159435 L2.31364722,2.26159435 C1.52418756,2.26159435 0.602608935,2.65423428 0.0155581432,3.24796695 C0.0103514843,3.25305791 0.00514482538,3.25751249 -6.18335273e-05,3.26260345 L-6.18335273e-05,0.565033469 C-6.18335273e-05,0.254485191 0.260271112,-6.25777779e-05 0.578528137,-6.25777779e-05 L4.05006796,-6.25777779e-05 C4.36767415,-6.25777779e-05 4.72498112,0.236666847 4.84278178,0.524942195 L5.09074891,1.13076588 L13.4122915,1.13076588 Z M13.4121613,3.3929319 C14.6845386,3.3929319 15.7245687,4.41048661 15.7245687,5.65458883 L15.7245687,9.4759872 L15.7245687,10.607452 L15.7245687,11.7382805 C15.7245687,12.9823827 14.6845386,13.9999374 13.4121613,13.9999374 L2.31351705,13.9999374 C1.04113978,13.9999374 -0.000192,12.9823827 -0.000192,11.7382805 L-0.000192,10.607452 L-0.000192,9.4759872 L-0.000192,5.65458883 C-0.000192,5.52540584 0.0180313062,5.4013138 0.0395087741,5.2784945 C0.224995998,4.21257572 1.17325875,3.3929319 2.31351705,3.3929319 L6.0167532,3.3929319 L13.4121613,3.3929319 Z M9.26831168,12.3116493 L9.98162395,11.7376441 L12.3467488,9.83299045 C12.4730102,9.70635294 12.4678036,9.51926033 12.3395896,9.39580466 L9.20583177,7.00687385 C9.06980781,6.87705449 8.73853414,6.91587302 8.73462914,7.17805722 C8.73332748,7.403332 8.72681915,8.56534256 8.72681915,8.56534256 C6.7066355,8.56534256 4.68449935,7.50387837 4.26861747,5.65586157 C4.25560082,5.59795195 4.23802835,5.5406787 4.22891669,5.48085998 C4.19247008,5.26258526 4.10721104,4.97303718 3.78960485,4.96858259 C3.35484883,4.96158253 3.29236892,5.31222208 3.28976559,5.54513329 C3.28846393,5.58267908 3.29236892,5.61831577 3.29236892,5.65586157 C3.2656848,8.52016033 5.7915652,10.7907264 8.73723247,10.7907264 C8.73723247,10.7907264 8.73462914,11.2578216 8.73853414,11.7376441 C8.7398358,11.8967365 8.74048663,12.0577379 8.74308996,12.2028302 C8.74569329,12.3791045 9.01904289,12.5420151 9.26831168,12.3116493 Z\"/> </svg> Enviar </div> </div> <div id=sm-unit__activity_aside--template class=sm-unit__activity_aside> <a> <div class=sm-unit__activity_aside__header> <div class=sm-unit__activity_aside__icon> <svg class=flipped-icon width=84px height=84px viewBox=\"0 0 84 84\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <path d=\"M83.5083091,41.5247926 C83.5083091,64.453462 64.8145033,83.0407093 41.7543865,83.0407093 C18.6938057,83.0407093 0,64.453462 0,41.5247926 C0,18.5961232 18.6938057,0.00887594401 41.7543865,0.00887594401 C64.8145033,0.00887594401 83.5083091,18.5961232 83.5083091,41.5247926\" fill-opacity=0.521824049 fill=#031023></path> <path d=\"M45.3279684,9.62285559 C44.1548639,9.49413878 42.9560372,9.42328164 41.7648006,9.42328164 L41.7466685,9.42328164 L41.7466685,8.16546259 L41.7648006,8.16546259 C43.0011566,8.16546259 44.2455244,8.25099429 45.4629049,8.38432311 L45.3279684,9.62285559 Z M34.5351543,10.2429604 L34.2602211,9.04551665 C35.4750715,8.76921573 36.7207044,8.55832141 37.9629638,8.41870349 L38.1021171,9.63878797 C36.9053988,9.77337461 35.7057287,9.97672202 34.5351543,10.2429604 Z M52.3754504,11.2093847 C51.2398751,10.8165259 50.068879,10.4840424 48.8957746,10.2207389 L49.1673343,9.02245664 C50.3859799,9.29582264 51.6016737,9.64130361 52.781525,10.0492563 L52.3754504,11.2093847 Z M27.7200161,12.6244311 L27.1823784,11.5188082 C28.3090984,10.9766882 29.4758777,10.4936856 30.6510906,10.0836366 L31.0605386,11.242088 C29.9287584,11.6374624 28.8049902,12.1024362 27.7200161,12.6244311 Z M58.8903547,14.3208097 C57.8703189,13.6847726 56.8043203,13.0994674 55.7214547,12.5825038 L56.2565623,11.4752038 C57.3807523,12.0122925 58.4880752,12.6193998 59.5469053,13.2801741 L58.8903547,14.3208097 Z M21.6124514,16.4586828 L20.8407831,15.4998055 C21.8144345,14.7241504 22.8437472,13.9950346 23.8992039,13.3330025 L24.5587062,14.3711225 C23.5420438,15.0096753 22.5506819,15.7115383 21.6124514,16.4586828 Z M64.5450387,18.7944528 C63.6919869,17.9487791 62.782852,17.1433557 61.8433564,16.4004039 L62.6124946,15.4390109 C63.5878327,16.2104732 64.5311234,17.0465036 65.4174878,17.924042 L64.5450387,18.7944528 Z M16.5088988,21.5448838 L15.5428375,20.7797105 C16.319566,19.8099321 17.1608109,18.8720183 18.0433801,17.9928028 L18.9179375,18.8598594 C18.0682591,19.7072102 17.2577965,20.6107435 16.5088988,21.5448838 Z M69.0628825,24.4005523 C68.4210906,23.3909429 67.7139388,22.4056513 66.9620894,21.4723496 L67.9256205,20.7042414 C68.7065657,21.6731813 69.4407048,22.6957882 70.1073756,23.7439708 L69.0628825,24.4005523 Z M12.6661594,27.6302124 L11.5525113,27.0981549 C12.0935225,25.9799538 12.7049536,24.8797814 13.3699377,23.8269868 L14.4156958,24.4806335 C13.7755907,25.4940163 13.1865084,26.5539385 12.6661594,27.6302124 Z M72.2136505,30.8636459 C71.8147443,29.7374785 71.3462616,28.6201159 70.8212741,27.5430036 L71.9332355,27.0075919 C72.4784634,28.1257931 72.9646566,29.2855022 73.3787431,30.4556932 L72.2136505,30.8636459 Z M10.2870597,34.4157268 L9.08232945,34.1444572 C9.35810599,32.9323389 9.70598923,31.7235748 10.117124,30.5517067 L11.2834816,30.9563052 C10.8879489,32.0841496 10.552716,33.2480515 10.2870597,34.4157268 Z M73.8295154,37.8642474 C73.6937355,36.6756084 73.488379,35.4827767 73.2201927,34.3180362 L74.4240795,34.0438317 C74.7028078,35.2530151 74.9157545,36.4919668 75.0565945,37.7258873 L73.8295154,37.8642474 Z M8.52655961,41.5488187 L8.25837326,41.5433681 C8.25795158,40.2909996 8.3262632,39.0486937 8.46119973,37.8286092 L9.68912216,37.9631958 C9.55924575,39.1379988 9.49346419,40.3358618 9.49346419,41.5224045 L8.52655961,41.5488187 Z M75.1687605,45.2505801 L73.9779456,45.1143164 C74.1111954,43.9302894 74.2157712,42.7215253 74.2157712,41.5224045 L74.2157712,41.2880309 L75.4808012,41.2880309 L75.4808012,41.5224045 C75.4808012,42.7672261 75.3062271,44.0212716 75.1687605,45.2505801 Z M9.09793149,48.9678547 C8.82004657,47.7586713 8.60878656,46.5197195 8.46878991,45.2853798 L9.69671234,45.147439 C9.83080552,46.3369165 10.034897,47.5301675 10.30224,48.6940694 L9.09793149,48.9678547 Z M73.4010919,52.5258055 L72.235156,52.1203685 C72.6319537,50.9925241 72.9684517,49.8290415 73.2349513,48.6617854 L74.4396815,48.9338936 C74.16264,50.1460119 73.81307,51.3543567 73.4010919,52.5258055 Z M11.5820287,56.0066101 C11.0380658,54.8879897 10.552716,53.7270227 10.1398945,52.5564124 L11.3049871,52.1497176 C11.7034716,53.2771427 12.1702676,54.3949246 12.6935684,55.472037 L11.5820287,56.0066101 Z M70.1411097,59.2471712 L69.0957732,58.5931053 C69.7371434,57.5797224 70.3270691,56.5202195 70.8486831,55.444365 L71.9614878,55.9785188 C71.4196333,57.0954621 70.8073588,58.1956345 70.1411097,59.2471712 Z M15.5820535,62.3137341 C14.8019517,61.3439556 14.0694993,60.3209294 13.4040935,59.271489 L14.4490083,58.6165846 C15.0899568,59.6270326 15.7958435,60.6127434 16.546428,61.5464644 L15.5820535,62.3137341 Z M65.4617638,65.076324 L64.5880498,64.2080095 C65.4381499,63.3623359 66.2494558,62.4600603 67.0000403,61.5255008 L67.9652581,62.2919319 C67.1864213,63.2617103 66.344333,64.1983663 65.4617638,65.076324 Z M20.8896976,67.5844151 C19.9135161,66.8104371 18.9710688,65.9731489 18.0876562,65.0964491 L18.9609485,64.2272961 C19.8114704,65.0721312 20.7201836,65.8788125 21.6596792,66.6238607 L20.8896976,67.5844151 Z M59.6008799,69.7306737 L58.9426427,68.6917152 C59.9593051,68.0548395 60.9510886,67.3533957 61.8905842,66.6070897 L62.6614091,67.5668057 C61.6864927,68.3416222 60.6567583,69.0698994 59.6008799,69.7306737 Z M27.2418348,71.5545113 C26.1172231,71.0161648 25.0107436,70.4077996 23.9531785,69.7461868 L24.6105724,68.7063897 C25.6293432,69.3432654 26.6949201,69.9294091 27.7782075,70.4480498 L27.2418348,71.5545113 Z M52.8464632,72.9733312 L52.4378585,71.813622 C53.5709037,71.4195054 54.6950937,70.9553702 55.7792244,70.4346331 L56.3164404,71.5410946 C55.1905637,72.0815375 54.0229411,72.5632822 52.8464632,72.9733312 Z M34.3276894,74.0143861 C33.1086221,73.7397623 31.89335,73.3930235 30.7143421,72.9833938 L31.1221034,71.8236846 C32.2568353,72.2182205 33.426988,72.5519618 34.6005142,72.8165231 L34.3276894,74.0143861 Z M45.5316382,74.6302982 L45.3941716,73.4093751 C46.5913116,73.2756271 47.7914034,73.0739567 48.9611345,72.8089762 L49.235646,74.0072585 C48.0207955,74.2818823 46.774741,74.4915188 45.5316382,74.6302982 Z M41.7816677,74.8298721 L41.7648006,74.8298721 C40.5179027,74.8298721 39.2621496,74.7653041 38.0325405,74.6298789 L38.1683204,73.4110522 C39.3532318,73.5414461 40.5630221,73.6089491 41.7648006,73.6089491 L41.8120284,73.6068527 L41.7816677,74.8298721 Z\" fill-opacity=0.56 fill=#FFFFFF></path> <path d=\"M50.9232765,37.6128283 C50.9232765,43.044906 46.5177195,47.4492429 41.0820493,47.4492429 C35.6473138,47.4492429 31.240822,43.044906 31.240822,37.6128283 C31.240822,32.1807506 35.6473138,27.7764137 41.0820493,27.7764137 C46.5177195,27.7764137 50.9232765,32.1807506 50.9232765,37.6128283\" fill-opacity=0.18 fill=#000000></path> <polygon fill=#FFFFFF points=\"41.4046019 37.3097957 38.4820985 34.6809759 54.0494924 20.6770261 56.9719957 23.3067754\"></polygon> <path d=\"M81.9810609,18.8689674 C81.9810609,28.8729698 73.6643051,36.9829099 63.4051857,36.9829099 C53.1451417,36.9829099 44.828386,28.8729698 44.828386,18.8689674 C44.828386,8.86496504 53.1451417,0.755024922 63.4051857,0.755024922 C73.6643051,0.755024922 81.9810609,8.86496504 81.9810609,18.8689674\" fill=#FF1D25></path> <path d=\"M69.3273149,9.24368734 C69.3273149,10.8384499 68.0015892,12.1312083 66.3661578,12.1312083 C64.7307264,12.1312083 63.4050008,10.8384499 63.4050008,9.24368734 C63.4050008,7.64892477 64.7307264,6.35616642 66.3661578,6.35616642 C68.0015892,6.35616642 69.3273149,7.64892477 69.3273149,9.24368734\" fill=#FFFFFF></path> </svg> <svg class=refuerzo-icon width=84px height=84px viewBox=\"0 0 84 84\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g stroke=none stroke-width=1 fill=none fill-rule=evenodd> <path d=\"M42,0 C65.1959766,0 84,18.8040234 84,42 C84,65.1959766 65.1959766,84 42,84 C18.8040234,84 0,65.1959766 0,42 C0,18.8040234 18.8040234,0 42,0\" fill-opacity=0.521824049 fill=#031023></path> <path d=\"M45.3279684,9.62285559 C44.1548639,9.49413878 42.9560372,9.42328164 41.7648006,9.42328164 L41.7466685,9.42328164 L41.7466685,8.16546259 L41.7648006,8.16546259 C43.0011566,8.16546259 44.2455244,8.25099429 45.4629049,8.38432311 L45.3279684,9.62285559 Z M34.5351543,10.2429604 L34.2602211,9.04551665 C35.4750715,8.76921573 36.7207044,8.55832141 37.9629638,8.41870349 L38.1021171,9.63878797 C36.9053988,9.77337461 35.7057287,9.97672202 34.5351543,10.2429604 Z M52.3754504,11.2093847 C51.2398751,10.8165259 50.068879,10.4840424 48.8957746,10.2207389 L49.1673343,9.02245664 C50.3859799,9.29582264 51.6016737,9.64130361 52.781525,10.0492563 L52.3754504,11.2093847 Z M27.7200161,12.6244311 L27.1823784,11.5188082 C28.3090984,10.9766882 29.4758777,10.4936856 30.6510906,10.0836366 L31.0605386,11.242088 C29.9287584,11.6374624 28.8049902,12.1024362 27.7200161,12.6244311 Z M58.8903547,14.3208097 C57.8703189,13.6847726 56.8043203,13.0994674 55.7214547,12.5825038 L56.2565623,11.4752038 C57.3807523,12.0122925 58.4880752,12.6193998 59.5469053,13.2801741 L58.8903547,14.3208097 Z M21.6124514,16.4586828 L20.8407831,15.4998055 C21.8144345,14.7241504 22.8437472,13.9950346 23.8992039,13.3330025 L24.5587062,14.3711225 C23.5420438,15.0096753 22.5506819,15.7115383 21.6124514,16.4586828 Z M64.5450387,18.7944528 C63.6919869,17.9487791 62.782852,17.1433557 61.8433564,16.4004039 L62.6124946,15.4390109 C63.5878327,16.2104732 64.5311234,17.0465036 65.4174878,17.924042 L64.5450387,18.7944528 Z M16.5088988,21.5448838 L15.5428375,20.7797105 C16.319566,19.8099321 17.1608109,18.8720183 18.0433801,17.9928028 L18.9179375,18.8598594 C18.0682591,19.7072102 17.2577965,20.6107435 16.5088988,21.5448838 Z M69.0628825,24.4005523 C68.4210906,23.3909429 67.7139388,22.4056513 66.9620894,21.4723496 L67.9256205,20.7042414 C68.7065657,21.6731813 69.4407048,22.6957882 70.1073756,23.7439708 L69.0628825,24.4005523 Z M12.6661594,27.6302124 L11.5525113,27.0981549 C12.0935225,25.9799538 12.7049536,24.8797814 13.3699377,23.8269868 L14.4156958,24.4806335 C13.7755907,25.4940163 13.1865084,26.5539385 12.6661594,27.6302124 Z M72.2136505,30.8636459 C71.8147443,29.7374785 71.3462616,28.6201159 70.8212741,27.5430036 L71.9332355,27.0075919 C72.4784634,28.1257931 72.9646566,29.2855022 73.3787431,30.4556932 L72.2136505,30.8636459 Z M10.2870597,34.4157268 L9.08232945,34.1444572 C9.35810599,32.9323389 9.70598923,31.7235748 10.117124,30.5517067 L11.2834816,30.9563052 C10.8879489,32.0841496 10.552716,33.2480515 10.2870597,34.4157268 Z M73.8295154,37.8642474 C73.6937355,36.6756084 73.488379,35.4827767 73.2201927,34.3180362 L74.4240795,34.0438317 C74.7028078,35.2530151 74.9157545,36.4919668 75.0565945,37.7258873 L73.8295154,37.8642474 Z M8.52655961,41.5488187 L8.25837326,41.5433681 C8.25795158,40.2909996 8.3262632,39.0486937 8.46119973,37.8286092 L9.68912216,37.9631958 C9.55924575,39.1379988 9.49346419,40.3358618 9.49346419,41.5224045 L8.52655961,41.5488187 Z M75.1687605,45.2505801 L73.9779456,45.1143164 C74.1111954,43.9302894 74.2157712,42.7215253 74.2157712,41.5224045 L74.2157712,41.2880309 L75.4808012,41.2880309 L75.4808012,41.5224045 C75.4808012,42.7672261 75.3062271,44.0212716 75.1687605,45.2505801 Z M9.09793149,48.9678547 C8.82004657,47.7586713 8.60878656,46.5197195 8.46878991,45.2853798 L9.69671234,45.147439 C9.83080552,46.3369165 10.034897,47.5301675 10.30224,48.6940694 L9.09793149,48.9678547 Z M73.4010919,52.5258055 L72.235156,52.1203685 C72.6319537,50.9925241 72.9684517,49.8290415 73.2349513,48.6617854 L74.4396815,48.9338936 C74.16264,50.1460119 73.81307,51.3543567 73.4010919,52.5258055 Z M11.5820287,56.0066101 C11.0380658,54.8879897 10.552716,53.7270227 10.1398945,52.5564124 L11.3049871,52.1497176 C11.7034716,53.2771427 12.1702676,54.3949246 12.6935684,55.472037 L11.5820287,56.0066101 Z M70.1411097,59.2471712 L69.0957732,58.5931053 C69.7371434,57.5797224 70.3270691,56.5202195 70.8486831,55.444365 L71.9614878,55.9785188 C71.4196333,57.0954621 70.8073588,58.1956345 70.1411097,59.2471712 Z M15.5820535,62.3137341 C14.8019517,61.3439556 14.0694993,60.3209294 13.4040935,59.271489 L14.4490083,58.6165846 C15.0899568,59.6270326 15.7958435,60.6127434 16.546428,61.5464644 L15.5820535,62.3137341 Z M65.4617638,65.076324 L64.5880498,64.2080095 C65.4381499,63.3623359 66.2494558,62.4600603 67.0000403,61.5255008 L67.9652581,62.2919319 C67.1864213,63.2617103 66.344333,64.1983663 65.4617638,65.076324 Z M20.8896976,67.5844151 C19.9135161,66.8104371 18.9710688,65.9731489 18.0876562,65.0964491 L18.9609485,64.2272961 C19.8114704,65.0721312 20.7201836,65.8788125 21.6596792,66.6238607 L20.8896976,67.5844151 Z M59.6008799,69.7306737 L58.9426427,68.6917152 C59.9593051,68.0548395 60.9510886,67.3533957 61.8905842,66.6070897 L62.6614091,67.5668057 C61.6864927,68.3416222 60.6567583,69.0698994 59.6008799,69.7306737 Z M27.2418348,71.5545113 C26.1172231,71.0161648 25.0107436,70.4077996 23.9531785,69.7461868 L24.6105724,68.7063897 C25.6293432,69.3432654 26.6949201,69.9294091 27.7782075,70.4480498 L27.2418348,71.5545113 Z M52.8464632,72.9733312 L52.4378585,71.813622 C53.5709037,71.4195054 54.6950937,70.9553702 55.7792244,70.4346331 L56.3164404,71.5410946 C55.1905637,72.0815375 54.0229411,72.5632822 52.8464632,72.9733312 Z M34.3276894,74.0143861 C33.1086221,73.7397623 31.89335,73.3930235 30.7143421,72.9833938 L31.1221034,71.8236846 C32.2568353,72.2182205 33.426988,72.5519618 34.6005142,72.8165231 L34.3276894,74.0143861 Z M45.5316382,74.6302982 L45.3941716,73.4093751 C46.5913116,73.2756271 47.7914034,73.0739567 48.9611345,72.8089762 L49.235646,74.0072585 C48.0207955,74.2818823 46.774741,74.4915188 45.5316382,74.6302982 Z M41.7816677,74.8298721 L41.7648006,74.8298721 C40.5179027,74.8298721 39.2621496,74.7653041 38.0325405,74.6298789 L38.1683204,73.4110522 C39.3532318,73.5414461 40.5630221,73.6089491 41.7648006,73.6089491 L41.8120284,73.6068527 L41.7816677,74.8298721 Z\" fill-opacity=0.56 fill=#FFFFFF></path> <path d=\"M84,45.604152 C82.1344116,67.118918 64.1272356,84 42.1725376,84 C41.6588201,84 41.1451026,84 40.6313851,83.9728774 L20.7586207,64.0568631 L56.8000364,18.3448276 L84,45.604152 Z\" fill-opacity=0.521824049 fill=#031023></path> <path d=\"M22.4413222,17.3793103 L54.3172985,17.3793103 C56.044723,17.3793103 57.4482759,18.7891636 57.4482759,20.5243422 L57.4482759,39.2858174 L57.4482759,43.732151 L57.4482759,59.5112571 L57.4482759,60.8668346 C57.4482759,62.9816144 55.7478679,64.6896552 53.6425386,64.6896552 L22.4413222,64.6896552 C20.7138977,64.6896552 19.3103448,63.279802 19.3103448,61.5446233 L19.3103448,20.5243422 C19.3103448,18.7891636 20.7140614,17.3793103 22.4413222,17.3793103\" fill=#FF1D25></path> <polygon points=\"0 84 84 84 84 0 0 0\"></polygon> <polygon fill=#F7F7F8 points=\"21.2413793 63.2413793 55.5172414 63.2413793 55.5172414 19.7931034 21.2413793 19.7931034\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 37.3198466 28.4827586 37.3198466 28.4827586 32.2440863 24.137931 32.2440863\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 46.418544 28.4827586 46.418544 28.4827586 41.3427837 24.137931 41.3427837\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 55.5172414 28.4827586 55.5172414 28.4827586 50.4414811 24.137931 50.4414811\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 28.248174 28.4827586 28.248174 28.4827586 23.1724138 24.137931 23.1724138\"></polygon> <polygon fill=#999999 points=\"30.4137931 34.9756684 45.3793103 34.9756684 45.3793103 33.6576581 30.4137931 33.6576581\"></polygon> <polygon fill=#999999 points=\"30.4137931 44.0395583 45.3793103 44.0395583 45.3793103 42.7215481 30.4137931 42.7215481\"></polygon> <polygon fill=#999999 points=\"30.4137931 53.1034483 45.3793103 53.1034483 45.3793103 51.7854381 30.4137931 51.7854381\"></polygon> <polygon fill=#999999 points=\"30.4137931 25.9386999 45.3793103 25.9386999 45.3793103 24.6206897 30.4137931 24.6206897\"></polygon> <path d=\"M52.5,35 C61.6128223,35 69,42.3871777 69,51.5 C69,60.6128223 61.6128223,68 52.5,68 C43.3871777,68 36,60.6128223 36,51.5 C36,42.3871777 43.3871777,35 52.5,35\" fill=#FF1D25></path> <path d=\"M41,52.310695 L45.3513529,51.8070473 L50.068546,56.1303198 C50.068546,56.1303198 52.3459818,46.308682 63,44 C57.7948554,46.8961011 54.5824671,52.6465449 52.4271426,60.5793769 C51.8984873,62.5939673 50.4753367,62.0483066 50.0278423,61.4606329 C49.295915,60.4950961 44.4161537,54.7449069 41.0002467,52.2684273 L41.0002467,52.310695 L41,52.310695 Z\" fill=#FFFFFF></path> <path d=\"M35.5814898,15.1979342 L36.0743196,15.1979342 C35.9374501,14.9767286 35.8553948,14.6999698 35.8553948,14.4233788 L35.8553948,12.7633296 C35.8553948,11.850311 36.6769439,11.1034483 37.6898444,11.1034483 L39.5791081,11.1034483 C40.5921748,11.1034483 41.4135577,11.8504788 41.4135577,12.7633296 L41.4135577,14.423211 C41.4135577,14.6999698 41.3315024,14.9488681 41.1944669,15.1977664 L41.6872966,15.1977664 C45.0552158,15.1977664 47.7931034,17.7154489 47.7931034,20.7586207 L29.4482759,20.7586207 C29.4482759,17.6877562 32.2137368,15.1977664 35.5540827,15.1977664 L35.5814898,15.1977664 L35.5814898,15.1979342 Z\" fill=#FF1D25></path> <path d=\"M38.6210219,11.1034483 L39.5792569,11.1034483 C40.5923052,11.1034483 41.4136732,11.8504788 41.4136732,12.7633296 L41.4136732,14.423211 C41.4136732,14.6999698 41.3316195,14.9488681 41.1945864,15.1977664 L41.6874072,15.1977664 C45.0552653,15.1977664 47.7931034,17.7154489 47.7931034,20.7586207 L38.6206897,20.7586207 L38.6210219,11.1034483 Z\" fill=#C7090F></path> </g> </svg> <svg class=ampliacion-icon width=84px height=84px viewBox=\"0 0 84 84\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g stroke=none stroke-width=1 fill=none fill-rule=evenodd> <path d=\"M42,0 C65.1959766,0 84,18.8040234 84,42 C84,65.1959766 65.1959766,84 42,84 C18.8040234,84 0,65.1959766 0,42 C0,18.8040234 18.8040234,0 42,0\" fill-opacity=0.521824049 fill=#031023></path> <path d=\"M45.3279684,9.62285559 C44.1548639,9.49413878 42.9560372,9.42328164 41.7648006,9.42328164 L41.7466685,9.42328164 L41.7466685,8.16546259 L41.7648006,8.16546259 C43.0011566,8.16546259 44.2455244,8.25099429 45.4629049,8.38432311 L45.3279684,9.62285559 Z M34.5351543,10.2429604 L34.2602211,9.04551665 C35.4750715,8.76921573 36.7207044,8.55832141 37.9629638,8.41870349 L38.1021171,9.63878797 C36.9053988,9.77337461 35.7057287,9.97672202 34.5351543,10.2429604 Z M52.3754504,11.2093847 C51.2398751,10.8165259 50.068879,10.4840424 48.8957746,10.2207389 L49.1673343,9.02245664 C50.3859799,9.29582264 51.6016737,9.64130361 52.781525,10.0492563 L52.3754504,11.2093847 Z M27.7200161,12.6244311 L27.1823784,11.5188082 C28.3090984,10.9766882 29.4758777,10.4936856 30.6510906,10.0836366 L31.0605386,11.242088 C29.9287584,11.6374624 28.8049902,12.1024362 27.7200161,12.6244311 Z M58.8903547,14.3208097 C57.8703189,13.6847726 56.8043203,13.0994674 55.7214547,12.5825038 L56.2565623,11.4752038 C57.3807523,12.0122925 58.4880752,12.6193998 59.5469053,13.2801741 L58.8903547,14.3208097 Z M21.6124514,16.4586828 L20.8407831,15.4998055 C21.8144345,14.7241504 22.8437472,13.9950346 23.8992039,13.3330025 L24.5587062,14.3711225 C23.5420438,15.0096753 22.5506819,15.7115383 21.6124514,16.4586828 Z M64.5450387,18.7944528 C63.6919869,17.9487791 62.782852,17.1433557 61.8433564,16.4004039 L62.6124946,15.4390109 C63.5878327,16.2104732 64.5311234,17.0465036 65.4174878,17.924042 L64.5450387,18.7944528 Z M16.5088988,21.5448838 L15.5428375,20.7797105 C16.319566,19.8099321 17.1608109,18.8720183 18.0433801,17.9928028 L18.9179375,18.8598594 C18.0682591,19.7072102 17.2577965,20.6107435 16.5088988,21.5448838 Z M69.0628825,24.4005523 C68.4210906,23.3909429 67.7139388,22.4056513 66.9620894,21.4723496 L67.9256205,20.7042414 C68.7065657,21.6731813 69.4407048,22.6957882 70.1073756,23.7439708 L69.0628825,24.4005523 Z M12.6661594,27.6302124 L11.5525113,27.0981549 C12.0935225,25.9799538 12.7049536,24.8797814 13.3699377,23.8269868 L14.4156958,24.4806335 C13.7755907,25.4940163 13.1865084,26.5539385 12.6661594,27.6302124 Z M72.2136505,30.8636459 C71.8147443,29.7374785 71.3462616,28.6201159 70.8212741,27.5430036 L71.9332355,27.0075919 C72.4784634,28.1257931 72.9646566,29.2855022 73.3787431,30.4556932 L72.2136505,30.8636459 Z M10.2870597,34.4157268 L9.08232945,34.1444572 C9.35810599,32.9323389 9.70598923,31.7235748 10.117124,30.5517067 L11.2834816,30.9563052 C10.8879489,32.0841496 10.552716,33.2480515 10.2870597,34.4157268 Z M73.8295154,37.8642474 C73.6937355,36.6756084 73.488379,35.4827767 73.2201927,34.3180362 L74.4240795,34.0438317 C74.7028078,35.2530151 74.9157545,36.4919668 75.0565945,37.7258873 L73.8295154,37.8642474 Z M8.52655961,41.5488187 L8.25837326,41.5433681 C8.25795158,40.2909996 8.3262632,39.0486937 8.46119973,37.8286092 L9.68912216,37.9631958 C9.55924575,39.1379988 9.49346419,40.3358618 9.49346419,41.5224045 L8.52655961,41.5488187 Z M75.1687605,45.2505801 L73.9779456,45.1143164 C74.1111954,43.9302894 74.2157712,42.7215253 74.2157712,41.5224045 L74.2157712,41.2880309 L75.4808012,41.2880309 L75.4808012,41.5224045 C75.4808012,42.7672261 75.3062271,44.0212716 75.1687605,45.2505801 Z M9.09793149,48.9678547 C8.82004657,47.7586713 8.60878656,46.5197195 8.46878991,45.2853798 L9.69671234,45.147439 C9.83080552,46.3369165 10.034897,47.5301675 10.30224,48.6940694 L9.09793149,48.9678547 Z M73.4010919,52.5258055 L72.235156,52.1203685 C72.6319537,50.9925241 72.9684517,49.8290415 73.2349513,48.6617854 L74.4396815,48.9338936 C74.16264,50.1460119 73.81307,51.3543567 73.4010919,52.5258055 Z M11.5820287,56.0066101 C11.0380658,54.8879897 10.552716,53.7270227 10.1398945,52.5564124 L11.3049871,52.1497176 C11.7034716,53.2771427 12.1702676,54.3949246 12.6935684,55.472037 L11.5820287,56.0066101 Z M70.1411097,59.2471712 L69.0957732,58.5931053 C69.7371434,57.5797224 70.3270691,56.5202195 70.8486831,55.444365 L71.9614878,55.9785188 C71.4196333,57.0954621 70.8073588,58.1956345 70.1411097,59.2471712 Z M15.5820535,62.3137341 C14.8019517,61.3439556 14.0694993,60.3209294 13.4040935,59.271489 L14.4490083,58.6165846 C15.0899568,59.6270326 15.7958435,60.6127434 16.546428,61.5464644 L15.5820535,62.3137341 Z M65.4617638,65.076324 L64.5880498,64.2080095 C65.4381499,63.3623359 66.2494558,62.4600603 67.0000403,61.5255008 L67.9652581,62.2919319 C67.1864213,63.2617103 66.344333,64.1983663 65.4617638,65.076324 Z M20.8896976,67.5844151 C19.9135161,66.8104371 18.9710688,65.9731489 18.0876562,65.0964491 L18.9609485,64.2272961 C19.8114704,65.0721312 20.7201836,65.8788125 21.6596792,66.6238607 L20.8896976,67.5844151 Z M59.6008799,69.7306737 L58.9426427,68.6917152 C59.9593051,68.0548395 60.9510886,67.3533957 61.8905842,66.6070897 L62.6614091,67.5668057 C61.6864927,68.3416222 60.6567583,69.0698994 59.6008799,69.7306737 Z M27.2418348,71.5545113 C26.1172231,71.0161648 25.0107436,70.4077996 23.9531785,69.7461868 L24.6105724,68.7063897 C25.6293432,69.3432654 26.6949201,69.9294091 27.7782075,70.4480498 L27.2418348,71.5545113 Z M52.8464632,72.9733312 L52.4378585,71.813622 C53.5709037,71.4195054 54.6950937,70.9553702 55.7792244,70.4346331 L56.3164404,71.5410946 C55.1905637,72.0815375 54.0229411,72.5632822 52.8464632,72.9733312 Z M34.3276894,74.0143861 C33.1086221,73.7397623 31.89335,73.3930235 30.7143421,72.9833938 L31.1221034,71.8236846 C32.2568353,72.2182205 33.426988,72.5519618 34.6005142,72.8165231 L34.3276894,74.0143861 Z M45.5316382,74.6302982 L45.3941716,73.4093751 C46.5913116,73.2756271 47.7914034,73.0739567 48.9611345,72.8089762 L49.235646,74.0072585 C48.0207955,74.2818823 46.774741,74.4915188 45.5316382,74.6302982 Z M41.7816677,74.8298721 L41.7648006,74.8298721 C40.5179027,74.8298721 39.2621496,74.7653041 38.0325405,74.6298789 L38.1683204,73.4110522 C39.3532318,73.5414461 40.5630221,73.6089491 41.7648006,73.6089491 L41.8120284,73.6068527 L41.7816677,74.8298721 Z\" fill-opacity=0.56 fill=#FFFFFF></path> <path d=\"M84,45.604152 C82.1344116,67.118918 64.1272356,84 42.1725376,84 C41.6588201,84 41.1451026,84 40.6313851,83.9728774 L20.7586207,64.0568631 L56.8000364,18.3448276 L84,45.604152 Z\" fill-opacity=0.521824049 fill=#031023></path> <path d=\"M22.4413222,17.3793103 L54.3172985,17.3793103 C56.044723,17.3793103 57.4482759,18.7891636 57.4482759,20.5243422 L57.4482759,39.2858174 L57.4482759,43.732151 L57.4482759,59.5112571 L57.4482759,60.8668346 C57.4482759,62.9816144 55.7478679,64.6896552 53.6425386,64.6896552 L22.4413222,64.6896552 C20.7138977,64.6896552 19.3103448,63.279802 19.3103448,61.5446233 L19.3103448,20.5243422 C19.3103448,18.7891636 20.7140614,17.3793103 22.4413222,17.3793103\" fill=#FF1D25></path> <polygon points=\"0 84 84 84 84 0 0 0\"></polygon> <polygon fill=#F7F7F8 points=\"21.2413793 63.2413793 55.5172414 63.2413793 55.5172414 19.7931034 21.2413793 19.7931034\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 37.3198466 28.4827586 37.3198466 28.4827586 32.2440863 24.137931 32.2440863\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 46.418544 28.4827586 46.418544 28.4827586 41.3427837 24.137931 41.3427837\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 55.5172414 28.4827586 55.5172414 28.4827586 50.4414811 24.137931 50.4414811\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 28.248174 28.4827586 28.248174 28.4827586 23.1724138 24.137931 23.1724138\"></polygon> <polygon fill=#999999 points=\"30.4137931 34.9756684 45.3793103 34.9756684 45.3793103 33.6576581 30.4137931 33.6576581\"></polygon> <polygon fill=#999999 points=\"30.4137931 44.0395583 45.3793103 44.0395583 45.3793103 42.7215481 30.4137931 42.7215481\"></polygon> <polygon fill=#999999 points=\"30.4137931 53.1034483 45.3793103 53.1034483 45.3793103 51.7854381 30.4137931 51.7854381\"></polygon> <polygon fill=#999999 points=\"30.4137931 25.9386999 45.3793103 25.9386999 45.3793103 24.6206897 30.4137931 24.6206897\"></polygon> <path d=\"M52.5,35 C61.6128223,35 69,42.3871777 69,51.5 C69,60.6128223 61.6128223,68 52.5,68 C43.3871777,68 36,60.6128223 36,51.5 C36,42.3871777 43.3871777,35 52.5,35\" fill=#FF1D25></path> <polygon fill=#FFFFFF points=\"50.3 53.66 45.02 53.66 45.02 50.54 50.3 50.54 50.3 45.02 53.54 45.02 53.54 50.54 58.82 50.54 58.82 53.66 53.54 53.66 53.54 59.18 50.3 59.18\"></polygon> <path d=\"M35.5814898,15.1979342 L36.0743196,15.1979342 C35.9374501,14.9767286 35.8553948,14.6999698 35.8553948,14.4233788 L35.8553948,12.7633296 C35.8553948,11.850311 36.6769439,11.1034483 37.6898444,11.1034483 L39.5791081,11.1034483 C40.5921748,11.1034483 41.4135577,11.8504788 41.4135577,12.7633296 L41.4135577,14.423211 C41.4135577,14.6999698 41.3315024,14.9488681 41.1944669,15.1977664 L41.6872966,15.1977664 C45.0552158,15.1977664 47.7931034,17.7154489 47.7931034,20.7586207 L29.4482759,20.7586207 C29.4482759,17.6877562 32.2137368,15.1977664 35.5540827,15.1977664 L35.5814898,15.1977664 L35.5814898,15.1979342 Z\" fill=#FF1D25></path> <path d=\"M38.6210219,11.1034483 L39.5792569,11.1034483 C40.5923052,11.1034483 41.4136732,11.8504788 41.4136732,12.7633296 L41.4136732,14.423211 C41.4136732,14.6999698 41.3316195,14.9488681 41.1945864,15.1977664 L41.6874072,15.1977664 C45.0552653,15.1977664 47.7931034,17.7154489 47.7931034,20.7586207 L38.6206897,20.7586207 L38.6210219,11.1034483 Z\" fill=#C7090F></path> </g> </svg> <svg class=microproyecto-icon width=83px height=84px viewBox=\"0 0 83 84\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g stroke=none stroke-width=1 fill=none fill-rule=evenodd> <path d=\"M41.321275,0 C64.1423319,0 82.64255,18.8040945 82.64255,42 C82.64255,65.1959055 64.1423319,84 41.321275,84 C18.5002181,84 0,65.1959055 0,42 C0,18.8040945 18.5002181,0 41.321275,0\" fill-opacity=0.521824049 fill=#031023></path> <path d=\"M33.6174482,54.0235294 L48.9495273,54.0235294 C49.4253505,48.6239303 51.3286431,43.491638 54.4479281,39.0543437 C56.3512207,36.3812748 57.4614747,33.1201308 57.4614747,29.5382185 C57.4614747,20.3963229 50.1126506,13.0186528 41.0191416,13.1790369 C32.242848,13.2859597 25.1583701,20.556707 25.0526316,29.4312957 C25.0526316,33.0666694 26.1628856,36.4881975 28.1719166,39.2147278 C31.344071,43.5450994 33.1944943,48.6773916 33.6174482,54.0235294\" fill=#FFFFFF></path> <path d=\"M48.6400303,54.0235294 L33.8740761,54.0235294 C32.5742561,54.0235294 31.5344002,55.1947712 31.5344002,56.6588235 C31.5344002,58.1228758 32.5742561,59.2941176 33.8740761,59.2941176 L48.6400303,59.2941176 C49.9398502,59.2941176 50.9797061,58.1228758 50.9797061,56.6588235 C50.9797061,55.1947712 49.9398502,54.0235294 48.6400303,54.0235294\" fill=#FF0000></path> <path d=\"M48.6400303,60.6117647 L33.8740761,60.6117647 C32.5742561,60.6117647 31.5344002,61.7830065 31.5344002,63.2470588 C31.5344002,64.7111111 32.5742561,65.8823529 33.8740761,65.8823529 L48.6400303,65.8823529 C49.9398502,65.8823529 50.9797061,64.7111111 50.9797061,63.2470588 C50.9797061,61.7830065 49.9398502,60.6117647 48.6400303,60.6117647\" fill=#FF0000></path> <path d=\"M34.1271077,67.2 C34.1271077,68.6374332 35.4137144,69.8352941 37.0755814,69.8352941 L45.4385249,69.8352941 C47.0467833,69.8352941 48.3869986,68.6853476 48.3869986,67.2 L34.1271077,67.2 Z\" fill=#FF0000></path> </g> </svg> <svg class=teacher-icon xmlns=http://www.w3.org/2000/svg width=84 height=85 viewBox=\"0 0 84 85\"> <g fill=none fill-rule=evenodd transform=\"translate(.713 .849)\"> <path fill=#031023 fill-opacity=.522 d=\"M41.321275,0 C64.1423319,0 82.64255,18.8040945 82.64255,42 C82.64255,65.1959055 64.1423319,84 41.321275,84 C18.5002181,84 0,65.1959055 0,42 C0,18.8040945 18.5002181,0 41.321275,0\"/> <g transform=\"translate(26.88 11.76)\"> <path fill=#FFF d=\"M9.504 0C13.8783879 0 17.424 3.54561209 17.424 7.92 17.424 12.2943879 13.8783879 15.84 9.504 15.84 5.12961209 15.84 1.584 12.2943879 1.584 7.92 1.584 3.54561209 5.12961209 0 9.504 0M16.9022149 51.9348699L16.9022149 38.2723638 16.9022149 36.9852173 16.9022149 35.2360619 17.4009288 35.2360619 18.1280745 21.3689762 18.5378569 21.5036577 18.5378569 17.4751449 17.5107853 17.424 13.0938545 17.424 10.1015713 20.8166113 7.20693844 17.424 7.20693844 17.424C3.54686386 17.9075373.777511433 20.9738845.66805246 24.6641382L.4394262 32.3719478 3.13701482 32.3719478 3.28000271 35.2360619 3.69327259 35.2360619 3.69327259 36.9852173 3.69327259 38.2723638 3.69327259 51.9348699 3.15096486 51.9348699 0 52.5980487 0 55.44 2.68189483 55.44 5.81367838 54.9404849 5.84157846 55.44 9.30816293 55.44 9.30816293 52.2758359 9.30816293 51.9348699 9.30816293 38.2723638 11.2855808 38.2723638 11.2855808 51.9348699 11.2855808 52.2758359 11.2855808 55.44 14.7521653 55.44 14.7800654 54.9404849 17.9101052 55.44 20.592 55.44 20.592 52.5980487 17.4427789 51.9348699 16.9022149 51.9348699z\"/> <g transform=\"translate(14.256 4.752)\"> <path fill=red d=\"M0,41.1720783 L27.3872766,41.1720783 L27.3872766,4.40960589 L0,4.40960589 L0,41.1720783 Z M2.25094737,38.9233819 L25.1363293,38.9233819 L25.1363293,6.66055326 L2.25094737,6.66055326 L2.25094737,38.9233819 Z\"/> <polygon fill=#D6D6D6 points=\"2.251 38.923 25.136 38.923 25.136 6.661 2.251 6.661\"/> <path fill=#FFF d=\"M26.4698352,20.268948 L26.4698352,20.268948 C27.9664359,20.268948 29.1796704,19.0557134 29.1796704,17.5591127 L29.1796704,16.9658352 C29.1796704,15.4692345 27.9664359,14.256 26.4698352,14.256 L26.4698352,14.256 C24.9732345,14.256 23.76,15.4692345 23.76,16.9658352 L23.76,17.5591127 C23.76,19.0557134 24.9732345,20.268948 26.4698352,20.268948 Z\"/> <polygon fill=red points=\"4.275 34.597 9.182 34.597 9.182 22.696 4.275 22.696\"/> <polygon fill=red points=\"10.336 34.597 15.239 34.597 15.239 19.428 10.336 19.428\"/> <polygon fill=red points=\"16.313 34.597 21.217 34.597 21.217 12.662 16.313 12.662\"/> <path fill=red d=\"M14.2102307,3.45970611 C13.6700034,3.45970611 13.2243158,3.02077137 13.2243158,2.47379116 C13.2243158,1.92681095 13.6655015,1.48787621 14.2102307,1.48787621 C14.75496,1.48787621 15.1961457,1.92681095 15.1961457,2.47379116 C15.1961457,3.02077137 14.75496,3.45970611 14.2102307,3.45970611 Z M16.6502577,2.34323621 C16.6502577,1.05119242 15.5585482,0 14.2102307,0 C12.8641642,0 11.7747057,1.05119242 11.7747057,2.34323621 L7.69373811,2.34323621 L7.69373811,8.254224 L20.7312253,8.254224 L20.7312253,2.34323621 L16.6502577,2.34323621 Z\"/> </g> </g> <path fill=#FFF fill-opacity=.56 d=\"M45.0216044,8.26255698 C43.8095119,8.12631849 42.5708421,8.05132075 41.3400149,8.05132075 L41.3212801,8.05132075 L41.3212801,6.72 L41.3400149,6.72 C42.6174611,6.72 43.9031854,6.81052981 45.1610256,6.95164981 L45.0216044,8.26255698 Z M33.8700914,8.91889811 L33.5860208,7.65148075 C34.8412468,7.35903396 36.1282782,7.13581585 37.4118241,6.98803925 L37.5556022,8.27942038 C36.3191109,8.4218717 35.0795698,8.63710189 33.8700914,8.91889811 Z M52.3033094,9.94179623 C51.1299933,9.52598038 49.9200792,9.17406792 48.7079866,8.89537811 L48.9885717,7.62707321 C50.2477189,7.91641358 51.5038163,8.28208302 52.7228799,8.71387472 L52.3033094,9.94179623 Z M26.8284522,11.4395321 L26.2729461,10.2693011 C27.4371126,9.69550189 28.6426698,9.18427472 29.8569409,8.75026415 L30.2799969,9.97641057 C29.1106021,10.3948891 27.9494853,10.887034 26.8284522,11.4395321 Z M59.0347365,13.23504 C57.9807998,12.5618355 56.8793727,11.9423275 55.7605181,11.3951547 L56.31341,10.2231487 C57.4749624,10.7916226 58.6190872,11.4342068 59.7131075,12.133594 L59.0347365,13.23504 Z M20.5179027,15.4978415 L19.720588,14.4829313 C20.7265987,13.6619502 21.7901206,12.8902279 22.8806554,12.1895094 L23.5620762,13.2882928 C22.511625,13.96416 21.4873153,14.707037 20.5179027,15.4978415 Z M64.8773538,17.9701042 C63.9959508,17.0750128 63.0566008,16.2225238 62.0858811,15.436157 L62.8805816,14.4185842 C63.8883351,15.2351275 64.862976,16.1200121 65.7787987,17.0488302 L64.8773538,17.9701042 Z M15.2447336,20.8812589 L14.2465653,20.0713721 C15.0491083,19.0449238 15.918312,18.0522023 16.8302134,17.1216091 L17.7338367,18.0393328 C16.8559192,18.9361992 16.0185209,19.8925313 15.2447336,20.8812589 Z M69.545348,23.9038008 C68.8822262,22.835194 68.1515722,21.792326 67.3747351,20.804486 L68.3702892,19.9914928 C69.177189,21.0170536 69.9357272,22.0994174 70.6245548,23.2088513 L69.545348,23.9038008 Z M11.2742808,27.3221887 L10.1236207,26.75904 C10.6826123,25.5754958 11.3143644,24.411034 12.0014492,23.2967185 L13.0819631,23.9885615 C12.420584,25.0611623 11.8119236,26.1830219 11.2742808,27.3221887 Z M72.8008317,30.7445706 C72.388668,29.5525947 71.9046152,28.3699381 71.3621798,27.2298838 L72.5110971,26.6631849 C73.0744457,27.8467291 73.5767975,29.0742068 74.0046462,30.3127789 L72.8008317,30.7445706 Z M8.81611177,34.5042204 L7.57134237,34.2170989 C7.85628433,32.9341494 8.21572947,31.6547502 8.64052826,30.414403 L9.84564978,30.8426445 C9.43697155,32.0363955 9.09059715,33.2683109 8.81611177,34.5042204 Z M74.4703999,38.1542581 C74.3301074,36.89616 74.1179258,35.6336242 73.8408263,34.4008211 L75.0847243,34.1105932 C75.3727161,35.3904362 75.5927401,36.7017872 75.7382609,38.0078128 L74.4703999,38.1542581 Z M6.99710153,42.0541404 L6.720002,42.0483713 C6.71956631,40.7228196 6.79014827,39.4079185 6.92956941,38.1165374 L8.19830182,38.2589887 C8.06410897,39.5024423 7.99614116,40.7703034 7.99614116,42.0261826 L6.99710153,42.0541404 Z M75.8541548,45.9722174 L74.6237632,45.8279909 C74.7614416,44.5747743 74.8694929,43.2953751 74.8694929,42.0261826 L74.8694929,41.7781132 L76.1765662,41.7781132 L76.1765662,42.0261826 C76.1765662,43.3437464 75.9961901,44.6710732 75.8541548,45.9722174 Z M7.58746294,49.906714 C7.30034252,48.6268709 7.08206129,47.31552 6.93741185,46.0090506 L8.20614426,45.8630491 C8.34469402,47.1220347 8.55556851,48.3850143 8.83179665,49.6169298 L7.58746294,49.906714 Z M74.0277378,53.6725766 L72.823052,53.2434475 C73.2330373,52.0496966 73.5807187,50.8182249 73.8560755,49.5827592 L75.1008449,49.8707683 C74.8145959,51.1537177 74.453408,52.4326732 74.0277378,53.6725766 Z M10.1541191,57.3567849 C9.59207757,56.172797 9.09059715,54.9439879 8.66405558,53.7049721 L9.86787002,53.2745117 C10.2795981,54.4678189 10.7619081,55.6509192 11.3026007,56.7909736 L10.1541191,57.3567849 Z M70.6594101,60.7867109 L69.5793319,60.0944242 C70.242018,59.0218234 70.8515498,57.9004075 71.3904997,56.7616845 L72.5402884,57.3270521 C71.9804254,58.5092649 71.347802,59.6737268 70.6594101,60.7867109 Z M14.2870846,64.0324709 C13.4810561,63.0060226 12.7242607,61.9232151 12.0367402,60.8124498 L13.1163827,60.1192755 C13.7786331,61.1887698 14.50798,62.2320815 15.2835101,63.2203653 L14.2870846,64.0324709 Z M65.8245462,66.9564951 L64.9217943,66.03744 C65.8001475,65.1423487 66.6384171,64.1873479 67.4139473,63.1981766 L68.4112441,64.0093947 C67.6065227,65.035843 66.7364476,66.0272332 65.8245462,66.9564951 Z M19.7711282,69.6111487 C18.7625033,68.7919426 17.7887338,67.9057268 16.875961,66.9777962 L17.7782772,66.0578536 C18.6570661,66.9520574 19.5959804,67.8058777 20.5667001,68.5944634 L19.7711282,69.6111487 Z M59.768876,71.8828257 L59.0887622,70.7831547 C60.1392134,70.1090626 61.1639588,69.3666294 62.1346785,68.5767125 L62.9311218,69.5925102 C61.923804,70.4126038 60.8598464,71.1834385 59.768876,71.8828257 Z M26.3343785,73.8132408 C25.1723904,73.2434355 24.029137,72.59952 22.9364238,71.8992453 L23.6156662,70.7986868 C24.6682959,71.4727789 25.7692872,72.0931743 26.8885776,72.6421223 L26.3343785,73.8132408 Z M52.7899763,75.3149706 L52.3677917,74.0874928 C53.5384936,73.6703457 54.700046,73.1790883 55.8202077,72.6279215 L56.3752782,73.79904 C55.211983,74.3710642 54.0055544,74.88096 52.7899763,75.3149706 Z M33.6557314,76.4168604 C32.3961485,76.1261887 31.1404868,75.7591879 29.9222945,75.3256211 L30.3436078,74.0981434 C31.5160525,74.5157343 32.7250952,74.8689781 33.9376235,75.1489992 L33.6557314,76.4168604 Z M45.2320432,77.0687638 L45.0900079,75.7764951 C46.3269349,75.6349313 47.5669117,75.4214762 48.7755187,75.1410113 L49.0591536,76.4093162 C47.8039276,76.6999879 46.5164605,76.9218747 45.2320432,77.0687638 Z M41.3574425,77.28 L41.3400149,77.28 C40.0516763,77.28 38.7541883,77.2116589 37.4837131,77.06832 L37.6240057,75.7782702 C38.8482976,75.9162838 40.0982953,75.9877313 41.3400149,75.9877313 L41.3888123,75.9855125 L41.3574425,77.28 Z\"/> </g> </svg> <svg class=discover-icon xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=83 height=85 viewBox=\"0 0 83 85\"> <defs> <polygon id=discover-icon-a points=\".056 .107 42.076 .107 42.076 43.589 .056 43.589\"/> </defs> <g fill=none fill-rule=evenodd transform=\"translate(.28 .849)\"> <path fill=#031023 fill-opacity=.522 d=\"M41.321275,0 C64.1423319,0 82.64255,18.8040945 82.64255,42 C82.64255,65.1959055 64.1423319,84 41.321275,84 C18.5002181,84 0,65.1959055 0,42 C0,18.8040945 18.5002181,0 41.321275,0\"/> <path fill=#FFF fill-opacity=.56 d=\"M45.0216044,8.26255698 C43.8095119,8.12631849 42.5708421,8.05132075 41.3400149,8.05132075 L41.3212801,8.05132075 L41.3212801,6.72 L41.3400149,6.72 C42.6174611,6.72 43.9031854,6.81052981 45.1610256,6.95164981 L45.0216044,8.26255698 Z M33.8700914,8.91889811 L33.5860208,7.65148075 C34.8412468,7.35903396 36.1282782,7.13581585 37.4118241,6.98803925 L37.5556022,8.27942038 C36.3191109,8.4218717 35.0795698,8.63710189 33.8700914,8.91889811 Z M52.3033094,9.94179623 C51.1299933,9.52598038 49.9200792,9.17406792 48.7079866,8.89537811 L48.9885717,7.62707321 C50.2477189,7.91641358 51.5038163,8.28208302 52.7228799,8.71387472 L52.3033094,9.94179623 Z M26.8284522,11.4395321 L26.2729461,10.2693011 C27.4371126,9.69550189 28.6426698,9.18427472 29.8569409,8.75026415 L30.2799969,9.97641057 C29.1106021,10.3948891 27.9494853,10.887034 26.8284522,11.4395321 Z M59.0347365,13.23504 C57.9807998,12.5618355 56.8793727,11.9423275 55.7605181,11.3951547 L56.31341,10.2231487 C57.4749624,10.7916226 58.6190872,11.4342068 59.7131075,12.133594 L59.0347365,13.23504 Z M20.5179027,15.4978415 L19.720588,14.4829313 C20.7265987,13.6619502 21.7901206,12.8902279 22.8806554,12.1895094 L23.5620762,13.2882928 C22.511625,13.96416 21.4873153,14.707037 20.5179027,15.4978415 Z M64.8773538,17.9701042 C63.9959508,17.0750128 63.0566008,16.2225238 62.0858811,15.436157 L62.8805816,14.4185842 C63.8883351,15.2351275 64.862976,16.1200121 65.7787987,17.0488302 L64.8773538,17.9701042 Z M15.2447336,20.8812589 L14.2465653,20.0713721 C15.0491083,19.0449238 15.918312,18.0522023 16.8302134,17.1216091 L17.7338367,18.0393328 C16.8559192,18.9361992 16.0185209,19.8925313 15.2447336,20.8812589 Z M69.545348,23.9038008 C68.8822262,22.835194 68.1515722,21.792326 67.3747351,20.804486 L68.3702892,19.9914928 C69.177189,21.0170536 69.9357272,22.0994174 70.6245548,23.2088513 L69.545348,23.9038008 Z M11.2742808,27.3221887 L10.1236207,26.75904 C10.6826123,25.5754958 11.3143644,24.411034 12.0014492,23.2967185 L13.0819631,23.9885615 C12.420584,25.0611623 11.8119236,26.1830219 11.2742808,27.3221887 Z M72.8008317,30.7445706 C72.388668,29.5525947 71.9046152,28.3699381 71.3621798,27.2298838 L72.5110971,26.6631849 C73.0744457,27.8467291 73.5767975,29.0742068 74.0046462,30.3127789 L72.8008317,30.7445706 Z M8.81611177,34.5042204 L7.57134237,34.2170989 C7.85628433,32.9341494 8.21572947,31.6547502 8.64052826,30.414403 L9.84564978,30.8426445 C9.43697155,32.0363955 9.09059715,33.2683109 8.81611177,34.5042204 Z M74.4703999,38.1542581 C74.3301074,36.89616 74.1179258,35.6336242 73.8408263,34.4008211 L75.0847243,34.1105932 C75.3727161,35.3904362 75.5927401,36.7017872 75.7382609,38.0078128 L74.4703999,38.1542581 Z M6.99710153,42.0541404 L6.720002,42.0483713 C6.71956631,40.7228196 6.79014827,39.4079185 6.92956941,38.1165374 L8.19830182,38.2589887 C8.06410897,39.5024423 7.99614116,40.7703034 7.99614116,42.0261826 L6.99710153,42.0541404 Z M75.8541548,45.9722174 L74.6237632,45.8279909 C74.7614416,44.5747743 74.8694929,43.2953751 74.8694929,42.0261826 L74.8694929,41.7781132 L76.1765662,41.7781132 L76.1765662,42.0261826 C76.1765662,43.3437464 75.9961901,44.6710732 75.8541548,45.9722174 Z M7.58746294,49.906714 C7.30034252,48.6268709 7.08206129,47.31552 6.93741185,46.0090506 L8.20614426,45.8630491 C8.34469402,47.1220347 8.55556851,48.3850143 8.83179665,49.6169298 L7.58746294,49.906714 Z M74.0277378,53.6725766 L72.823052,53.2434475 C73.2330373,52.0496966 73.5807187,50.8182249 73.8560755,49.5827592 L75.1008449,49.8707683 C74.8145959,51.1537177 74.453408,52.4326732 74.0277378,53.6725766 Z M10.1541191,57.3567849 C9.59207757,56.172797 9.09059715,54.9439879 8.66405558,53.7049721 L9.86787002,53.2745117 C10.2795981,54.4678189 10.7619081,55.6509192 11.3026007,56.7909736 L10.1541191,57.3567849 Z M70.6594101,60.7867109 L69.5793319,60.0944242 C70.242018,59.0218234 70.8515498,57.9004075 71.3904997,56.7616845 L72.5402884,57.3270521 C71.9804254,58.5092649 71.347802,59.6737268 70.6594101,60.7867109 Z M14.2870846,64.0324709 C13.4810561,63.0060226 12.7242607,61.9232151 12.0367402,60.8124498 L13.1163827,60.1192755 C13.7786331,61.1887698 14.50798,62.2320815 15.2835101,63.2203653 L14.2870846,64.0324709 Z M65.8245462,66.9564951 L64.9217943,66.03744 C65.8001475,65.1423487 66.6384171,64.1873479 67.4139473,63.1981766 L68.4112441,64.0093947 C67.6065227,65.035843 66.7364476,66.0272332 65.8245462,66.9564951 Z M19.7711282,69.6111487 C18.7625033,68.7919426 17.7887338,67.9057268 16.875961,66.9777962 L17.7782772,66.0578536 C18.6570661,66.9520574 19.5959804,67.8058777 20.5667001,68.5944634 L19.7711282,69.6111487 Z M59.768876,71.8828257 L59.0887622,70.7831547 C60.1392134,70.1090626 61.1639588,69.3666294 62.1346785,68.5767125 L62.9311218,69.5925102 C61.923804,70.4126038 60.8598464,71.1834385 59.768876,71.8828257 Z M26.3343785,73.8132408 C25.1723904,73.2434355 24.029137,72.59952 22.9364238,71.8992453 L23.6156662,70.7986868 C24.6682959,71.4727789 25.7692872,72.0931743 26.8885776,72.6421223 L26.3343785,73.8132408 Z M52.7899763,75.3149706 L52.3677917,74.0874928 C53.5384936,73.6703457 54.700046,73.1790883 55.8202077,72.6279215 L56.3752782,73.79904 C55.211983,74.3710642 54.0055544,74.88096 52.7899763,75.3149706 Z M33.6557314,76.4168604 C32.3961485,76.1261887 31.1404868,75.7591879 29.9222945,75.3256211 L30.3436078,74.0981434 C31.5160525,74.5157343 32.7250952,74.8689781 33.9376235,75.1489992 L33.6557314,76.4168604 Z M45.2320432,77.0687638 L45.0900079,75.7764951 C46.3269349,75.6349313 47.5669117,75.4214762 48.7755187,75.1410113 L49.0591536,76.4093162 C47.8039276,76.6999879 46.5164605,76.9218747 45.2320432,77.0687638 Z M41.3574425,77.28 L41.3400149,77.28 C40.0516763,77.28 38.7541883,77.2116589 37.4837131,77.06832 L37.6240057,75.7782702 C38.8482976,75.9162838 40.0982953,75.9877313 41.3400149,75.9877313 L41.3888123,75.9855125 L41.3574425,77.28 Z\"/> <g transform=\"translate(8.4 16.8)\"> <g transform=\"translate(10.74 .04)\"> <mask id=discover-icon-b fill=#fff> <use xlink:href=#discover-icon-a /> </mask> <path fill=red d=\"M36.3012063,34.95844 C29.3035828,42.207 18.3566803,42.8681733 10.6308209,36.9272933 L4.54530612,43.2305867 C4.1077551,43.68364 3.39011338,43.71972 2.95270748,43.2668133 L0.379501134,40.601 C-0.0579047619,40.1480933 -0.0491972789,39.3778 0.388063492,38.9246 L6.4792381,32.6151467 C0.826485261,24.6636133 1.44152381,13.3182133 8.42550567,6.08402667 C16.1226304,-1.88877333 28.6071293,-1.88393333 36.3043991,6.08916 C44.0016689,14.0622533 43.9984762,26.98564 36.3012063,34.95844 Z M12.5373243,30.7147867 C17.9593288,36.33124 26.7818957,36.33124 32.2040454,30.7149333 C37.6260499,25.0983333 37.6260499,15.9598267 32.2040454,10.3433733 C26.7818957,4.72692 17.9593288,4.72706667 12.5373243,10.3436667 C7.11531973,15.9598267 7.11531973,25.0981867 12.5373243,30.7147867 Z\" mask=url(#discover-icon-b) /> </g> <path fill=#000 fill-opacity=.177 d=\"M11.2203175,38.9643467 C10.7829116,39.4175467 10.7280544,40.18784 11.1650249,40.6407467 L13.7153016,43.30656 C14.1527075,43.7594667 14.9517642,43.7233867 15.3893152,43.2703333 L16.5700499,42.13132 L16.5700499,33.5190533 L11.2203175,38.9643467 Z\"/> <path fill=#FFF fill-opacity=.729 d=\"M43.6031565,31.4378533 C37.8078912,37.44092 28.4119365,37.44092 22.6166712,31.4378533 C16.821551,25.4349333 16.821551,15.7024267 22.6169615,9.6998 C28.4120816,3.69688 37.8078912,3.69688 43.6031565,9.6998 C49.3982766,15.70228 49.3982766,25.4349333 43.6031565,31.4378533\"/> <path fill=#FFF fill-opacity=.073 d=\"M23.2765533,30.7545333 C17.8545488,25.1379333 17.8545488,15.9995733 23.2765533,10.3834133 C28.6985578,4.76681333 37.5211247,4.76666667 42.9432744,10.38312 C48.3652789,15.9995733 48.3652789,25.13808 42.9432744,30.75468 C37.5211247,36.3709867 28.6985578,36.3709867 23.2765533,30.7545333\"/> <path fill=#FBFFFF d=\"M45.6740862,6.76118667 C42.5446168,3.97452 38.6488889,2.34226667 34.5299592,2.08384 C30.4596463,1.82834667 26.32722,3.04670667 22.9757098,5.44294667 C22.2376054,5.97050667 22.9249161,7.23462667 23.6670839,6.70398667 C26.7861043,4.47406667 30.4921542,3.36570667 34.2780227,3.52058667 C38.085805,3.67634667 41.7986757,5.21664 44.6843356,7.78638667 C45.3646803,8.39197333 46.35922,7.37117333 45.6740862,6.76118667\"/> <path fill=#FFF d=\"M43.0402177 28.29508C40.7810612 30.6351467 37.1181134 30.6351467 34.8589569 28.29508 32.5998005 25.9548667 32.5998005 22.1611867 34.8589569 19.8209733 37.1181134 17.4806133 40.7810612 17.4806133 43.0402177 19.8209733 45.2993741 22.1611867 45.2993741 25.9548667 43.0402177 28.29508M42.7776871 15.4494267C42.1575692 16.0915333 41.1524354 16.0915333 40.5324626 15.4491333 39.9124898 14.8070267 39.9124898 13.7659867 40.5324626 13.1237333 41.1524354 12.48148 42.1575692 12.48148 42.777542 13.1240267 43.3973696 13.7661333 43.3976599 14.8071733 42.7776871 15.4494267M12.1614512 37.0727867L0 49.6701333C1.50581406 51.73476 3.21262585 53.63292 5.09097506 55.33308L17.4403628 42.5412533C18.8921905 41.03748 13.613424 35.5693067 12.1614512 37.0727867\"/> <path fill=#FFF d=\"M17.3783946,42.5414 C18.8300771,41.03748 13.5906395,35.5693067 12.1388118,37.0729333 L8.1526712,41.2431067 L8.1526712,52.1793067 L17.3783946,42.5414 Z\"/> <path fill=#CACACA d=\"M18.2321633,43.7714933 C17.8679002,44.1490133 17.2769524,44.1490133 16.9125442,43.7714933 L10.9077188,37.55136 C10.5433107,37.1739867 10.5433107,36.5618 10.9077188,36.1844267 L12.4254331,34.6123067 C12.7898413,34.2349333 13.3807891,34.2349333 13.7450522,34.6123067 L19.7498776,40.83244 C20.114576,41.20996 20.114576,41.8218533 19.7498776,42.19952 L18.2321633,43.7714933 Z\"/> </g> </g> </svg> </div> <div class=sm-unit__activity_aside__type></div> </div> <div class=sm-unit__activity_aside__title></div> <div class=sm-unit__activity_aside__progress> <div class=sm-unit__activity_aside__progress__title></div> <div class=sm-unit__activity_aside__progress__bar> <div class=sm-color-background-color></div> </div> </div> </a> </div> <div class=sm-content> <div class=sm-unit__header_background> <div class=sm-unit__header_background__content> </div> </div> <a href=#units class=\"sm-button-back-screen sm-color-background-color\"> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> <span>Unidades</span> </a> <div class=sm-content--scrolled> <div class=sm-unit__header> <div class=sm-unit__header__content> <div class=sm-unit__header__number></div> <div class=sm-unit__header__title></div> <div class=sm-unit__header__progress> <div class=sm-unit__header__progress__title></div> <div class=sm-unit__header__progress__bar> <div class=sm-color-background-color></div> </div> </div> </div> </div> <div class=sm-unit__activities_container> <div class=sm-unit__activities_container__content> <div class=sm-unit__activities__main_container> <div class=sm-unit__activities__main> </div> </div> <div class=sm-unit__activities__aside_container> <h4>Contenidos<br>complementarios</h4> <div class=sm-unit__activities__aside> </div> </div> </div> </div> </div> </div> </div> </div>";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<div class=\"sm-subunit-backbutton sm-color-background-color--hover sm-color-border-color--hover\"> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> <span>Volver</span> </div>";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.getTextOfNode=getTextOfNode;function getTextOfNode(node){// crossbrowser version
var text='';if(node.nodeType==Node.TEXT_NODE){text=node.nodeValue.trim().replace(/(\r\n\t|\n|\r\t)/gm,"");}else{text=node.innerText.trim().replace(/(\r\n\t|\n|\r\t)/gm,"");}return text;}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _getTextOfNode=__webpack_require__(12);var _debug=__webpack_require__(1);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Activities=function(){function Activities(){_classCallCheck(this,Activities);(0,_debug.cl)("Ativities.contructor()");this.state={//isVisible: true,
};document.querySelector('.content-wrapper.actividad').classList.add('sm-actividades');//Remain attemps
var remainBoxes=document.querySelectorAll('.attemps>*');remainBoxes.forEach(function(remainBox){var htmlText='';remainBox.childNodes.forEach(function(node){if(node.nodeType==3){//#text
htmlText+='<em>'+node.data+'</em>';}else{htmlText+=node.outerHTML;}});remainBox.innerHTML=htmlText;});//JS fixes for styling
//Fillblankimages
var fillBlankImagesWorkspaces=document.querySelectorAll('.workspace.fillblankimages-draggable');fillBlankImagesWorkspaces.forEach(function(fillBlankImagesWorkspace){var fbiDraggableZones=fillBlankImagesWorkspace.querySelectorAll('.droppable-container');var fbiDraggableDivsElement=document.createElement('div');fbiDraggableDivsElement.className="sm-draggable-images";fbiDraggableZones.forEach(function(elemento){//find text
var text='';if(elemento.nextSibling){// console.log("elemento.nextSibling");
// console.log(elemento.nextSibling);
text=(0,_getTextOfNode.getTextOfNode)(elemento.nextSibling);}if(!text&&elemento.previousSibling){// console.log("elemento.previousSibling");
// console.log(elemento.previousSibling);
text=(0,_getTextOfNode.getTextOfNode)(elemento.previousSibling);}if(!text&&elemento.nextElementSibling){// console.log("elemento.nextElementSibling");
// console.log(elemento.nextElementSibling);
text=(0,_getTextOfNode.getTextOfNode)(elemento.nextElementSibling);}if(!text&&elemento.previousElementSibling){// console.log("elemento.previousElementSibling");
// console.log(elemento.previousElementSibling);
text=(0,_getTextOfNode.getTextOfNode)(elemento.previousElementSibling);}if(!text&&elemento.parentElement.nextElementSibling){// console.log("elemento.parentElement.nextElementSibling");
// console.log(elemento.parentElement.nextElementSibling);
text=(0,_getTextOfNode.getTextOfNode)(elemento.parentElement.nextElementSibling);}if(!text&&elemento.parentElement.previousElementSibling){// console.log("elemento.parentElement.previousElementSibling");
// console.log(elemento.parentElement.previousElementSibling);
text=(0,_getTextOfNode.getTextOfNode)(elemento.parentElement.previousElementSibling);}// console.log('---' + text + '---');
var fbiDraggableDiv=document.createElement('div');fbiDraggableDiv.appendChild(elemento);var textElement=document.createElement('p');textElement.innerText=text;fbiDraggableDiv.appendChild(elemento);fbiDraggableDiv.appendChild(textElement);fbiDraggableDivsElement.appendChild(fbiDraggableDiv);});fillBlankImagesWorkspace.innerHTML='';fillBlankImagesWorkspace.appendChild(fbiDraggableDivsElement);});//Calculo
var calculoTrCifras=document.querySelectorAll('.workspace.calculo tr');calculoTrCifras.forEach(function(tr){var tds=tr.querySelectorAll('td.cifra');var lastTd=document.createElement('td');tds.forEach(function(td){if(td.querySelectorAll('input').length){td.classList.add('cifra_con_input');if(lastTd.querySelectorAll('input').length){lastTd.classList.remove('cifra_con_input--fin');}else{td.classList.add('cifra_con_input--inicio');}td.classList.add('cifra_con_input--fin');}lastTd=td;});});// Respuesta multimple con imagen
var multipleChoiceWorkspaceImages=document.querySelectorAll('.workspace.multiple-choice ul li.opcion img');multipleChoiceWorkspaceImages.forEach(function(img){var ul=null;var elem=img;for(;elem&&elem!==document;elem=elem.parentNode){if(elem.tagName=='UL'){ul=elem;break;}}ul.classList.add('sm-multiple-choice-images-list');});var multipleChoiceWorkspaceLi=document.querySelectorAll('.workspace.multiple-choice ul.sm-multiple-choice-images-list li.opcion');multipleChoiceWorkspaceLi.forEach(function(li){var texto=li.innerText||li.textContent;var textDiv=document.createElement('div');textDiv.setAttribute('class','sm-multiple-choice-images-list__text');textDiv.innerHTML=texto.trim();li.appendChild(textDiv);});//Multimedia. Change img to div background
var multimediaSlides=document.querySelectorAll('.class_slide.slide_content_type_7');multimediaSlides.forEach(function(slide){var img=slide.querySelector('.multimedia-container img');if(img){var src=img.src;var slideMain=slide.querySelector('.slide_main');slideMain.style.backgroundImage='url('+src+')';}});//HTML Content
//File download
var fileDownloadElements=document.querySelectorAll('a.bck-file-attach');fileDownloadElements.forEach(function(el){var wrapper=document.createElement('div');var fileName=el.innerText.trim();var label=document.createElement('div');wrapper.classList.add('sm__bck-file-attach__container');label.classList.add('sm__bck-file-attach__label');label.innerText=fileName;el.innerText='Descargar archivo';el.parentNode.insertBefore(wrapper,el);wrapper.appendChild(label);wrapper.appendChild(el);});//Memory
var memoryElements=document.querySelectorAll('.workspace.memory .flip-container .flipper .back p');memoryElements.forEach(function(el){var htmlText='';if(el.childNodes.length>1){el.classList.add('sm-multiple_nodes');el.childNodes.forEach(function(node){if(node.nodeType==3){//#text
htmlText+='<em>'+node.data+'</em>';}else{htmlText+=node.outerHTML;}});el.innerHTML=htmlText;}});//Audio as icon
var audioAsIconElements=document.querySelectorAll('.bck-audio-container.sm-audio-as-icon');audioAsIconElements.forEach(function(audioAsIconElement){var audioAsIconButton=document.createElement('div');audioAsIconButton.classList.add('sm-icon');audioAsIconButton.classList.add('sm-icon--sonido');audioAsIconElement.appendChild(audioAsIconButton);audioAsIconButton.addEventListener('click',function(e){var targetElement=e.target||e.srcElement;targetElement.parentElement.classList.add('sm-active');});});//Tabs active
var tabsBoxes=document.querySelectorAll('.bck-tabs-box');tabsBoxes.forEach(function(tabsBox){var tabsButtons=tabsBox.querySelectorAll('.bck-tabslists .bck-tabtitles');var tabsBottonFirst=tabsButtons[0];tabsBottonFirst.classList.add('sm-active');tabsButtons.forEach(function(tabsButton){tabsButton.addEventListener('click',function(e){tabsButtons.forEach(function(tabsButtonToDisable){tabsButtonToDisable.classList.remove('sm-active');tabsButton.classList.add('sm-active');});});});});// Tolltip
var tooltips=document.querySelectorAll('.sm-actividades .bck-tooltip');tooltips.forEach(function(tooltip){tooltip.classList.add('sm-color-color');});//Button correct
var correctBtns=document.querySelectorAll('.sm-actividades .btn-correct');correctBtns.forEach(function(correctBtn){correctBtn.classList.add('sm-color-background-color');correctBtn.classList.add('sm-color-border-color');correctBtn.classList.add('sm-color-border-color--hover');correctBtn.classList.add('sm-color-border-color--pressed');correctBtn.classList.add('sm-color-color--hover');correctBtn.classList.add('sm-color-color--pressed');});this.update();}_createClass(Activities,[{key:'update',value:function update(){//Activitie header book color small block
var activityHeaderSmallBlockElement=document.createElement('div');activityHeaderSmallBlockElement.classList.add('header_small_block');activityHeaderSmallBlockElement.classList.add('sm-color-background-color');var allTitles=document.querySelectorAll('#actividad .class_slide .header .title');//onsole.log("HEADERS");
_.forEach(allTitles,function(header){//onsole.log(header);
if(!header.querySelector('.header_small_block')){header.appendChild(activityHeaderSmallBlockElement.cloneNode(true));}});}}]);return Activities;}();exports.default=Activities;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<div class=\"sm-subunit-end sm-base\"> <div class=sm-subunit-end_completed> <div class=sm-subunit-end_completed__content> <div class=sm-subunit-end__title>Fin de la lección</div> <div class=sm-subunit-end__progress> <div class=sm-subunit-end__progress__title></div> <div class=sm-subunit-end__progress__bar> <div class=sm-color-background-color></div> </div> </div> <div class=sm-subunit-end__start_button_container> <div class=\"sm-subunit-end__start_button sm-button-general--big--arrow sm-color-background-color sm-color-border-color\"> <svg width=16px height=16px viewBox=\"0 0 16 16\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> </g> </svg> <span>Volver a inicio</span> </div> </div> </div> </div> </div>";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();//Templates
var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _subUnitEnd=__webpack_require__(14);var _subUnitEnd2=_interopRequireDefault(_subUnitEnd);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ScreenSubUnitEnd=function(){function ScreenSubUnitEnd(){_classCallCheck(this,ScreenSubUnitEnd);this.state={isVisible:true};this.subUnitObject={};}_createClass(ScreenSubUnitEnd,[{key:'init',value:function init(subUnitObject){var _this=this;this.subUnitObject=subUnitObject;document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend',_subUnitEnd2.default);document.querySelector('.sm-subunit-end').style.backgroundImage='url('+this.subUnitObject.image+')';this.updateCompleted();document.querySelector('.sm-subunit-end_completed .sm-subunit-end__start_button_container .sm-subunit-end__start_button').addEventListener('click',function(){return _this.onStartButtonClick();});}},{key:'show',value:function show(){this.updateCompleted();document.querySelector('.sm-subunit-end').classList.add('active');this.state.isVisible=true;}},{key:'hide',value:function hide(){document.querySelector('.sm-subunit-end').classList.remove('active');this.state.isVisible=false;}},{key:'updateCompleted',value:function updateCompleted(){//Update copmpletado
if(_config2.default.dev)console.log("updateCompleted()");var urlSeguimiento='/include/javascript/seguimientoCurso.js.php?idcurso='+idcurso;if(typeof loadScript==='function'){//If is blink enviroment
loadScript(urlSeguimiento,true,function(){if(window.actividades[this.subUnitObject.id]){if(window.actividades[this.subUnitObject.id].hasOwnProperty('avance')){this.subUnitObject.completado=parseInt(window.actividades[this.subUnitObject.id].avance);}}this.updateCompletedFillData();}.bind(this));}else{this.updateCompletedFillData();}this.updateCompletedFillData();}},{key:'updateCompletedFillData',value:function updateCompletedFillData(){var completedSecuencia=this.subUnitObject.completado||0;document.querySelector('.sm-subunit-end_completed .sm-subunit-end__progress__title').innerHTML=completedSecuencia+'% completado';document.querySelector('.sm-subunit-end_completed .sm-subunit-end__progress__bar .sm-color-background-color').style.width=completedSecuencia+'%';}}]);return ScreenSubUnitEnd;}();exports.default=ScreenSubUnitEnd;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<div class=sm-subunit-start__actividades__item> <div class=sm-subunit-start__actividades__item__icon></div> <div class=sm-subunit-start__actividades__item__type>Tipo de recurso</div> <div class=sm-subunit-start__actividades__item__title>Nombre de la actividad</div> </div>";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<div class=\"sm-subunit-start sm-base\"> <div class=sm-subunit-start__secuencia> <div class=sm-subunit-start__secuencia__content> <div class=\"sm-subunit-start__number sm-color-color\"></div> <div class=sm-subunit-start__title></div> <div class=sm-subunit-start__type> <div class=sm-subunit-start__type__content> <svg class=flipped-icon width=84px height=84px viewBox=\"0 0 84 84\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <path d=\"M83.5083091,41.5247926 C83.5083091,64.453462 64.8145033,83.0407093 41.7543865,83.0407093 C18.6938057,83.0407093 0,64.453462 0,41.5247926 C0,18.5961232 18.6938057,0.00887594401 41.7543865,0.00887594401 C64.8145033,0.00887594401 83.5083091,18.5961232 83.5083091,41.5247926\" fill-opacity=0.521824049 fill=#031023></path> <path d=\"M45.3279684,9.62285559 C44.1548639,9.49413878 42.9560372,9.42328164 41.7648006,9.42328164 L41.7466685,9.42328164 L41.7466685,8.16546259 L41.7648006,8.16546259 C43.0011566,8.16546259 44.2455244,8.25099429 45.4629049,8.38432311 L45.3279684,9.62285559 Z M34.5351543,10.2429604 L34.2602211,9.04551665 C35.4750715,8.76921573 36.7207044,8.55832141 37.9629638,8.41870349 L38.1021171,9.63878797 C36.9053988,9.77337461 35.7057287,9.97672202 34.5351543,10.2429604 Z M52.3754504,11.2093847 C51.2398751,10.8165259 50.068879,10.4840424 48.8957746,10.2207389 L49.1673343,9.02245664 C50.3859799,9.29582264 51.6016737,9.64130361 52.781525,10.0492563 L52.3754504,11.2093847 Z M27.7200161,12.6244311 L27.1823784,11.5188082 C28.3090984,10.9766882 29.4758777,10.4936856 30.6510906,10.0836366 L31.0605386,11.242088 C29.9287584,11.6374624 28.8049902,12.1024362 27.7200161,12.6244311 Z M58.8903547,14.3208097 C57.8703189,13.6847726 56.8043203,13.0994674 55.7214547,12.5825038 L56.2565623,11.4752038 C57.3807523,12.0122925 58.4880752,12.6193998 59.5469053,13.2801741 L58.8903547,14.3208097 Z M21.6124514,16.4586828 L20.8407831,15.4998055 C21.8144345,14.7241504 22.8437472,13.9950346 23.8992039,13.3330025 L24.5587062,14.3711225 C23.5420438,15.0096753 22.5506819,15.7115383 21.6124514,16.4586828 Z M64.5450387,18.7944528 C63.6919869,17.9487791 62.782852,17.1433557 61.8433564,16.4004039 L62.6124946,15.4390109 C63.5878327,16.2104732 64.5311234,17.0465036 65.4174878,17.924042 L64.5450387,18.7944528 Z M16.5088988,21.5448838 L15.5428375,20.7797105 C16.319566,19.8099321 17.1608109,18.8720183 18.0433801,17.9928028 L18.9179375,18.8598594 C18.0682591,19.7072102 17.2577965,20.6107435 16.5088988,21.5448838 Z M69.0628825,24.4005523 C68.4210906,23.3909429 67.7139388,22.4056513 66.9620894,21.4723496 L67.9256205,20.7042414 C68.7065657,21.6731813 69.4407048,22.6957882 70.1073756,23.7439708 L69.0628825,24.4005523 Z M12.6661594,27.6302124 L11.5525113,27.0981549 C12.0935225,25.9799538 12.7049536,24.8797814 13.3699377,23.8269868 L14.4156958,24.4806335 C13.7755907,25.4940163 13.1865084,26.5539385 12.6661594,27.6302124 Z M72.2136505,30.8636459 C71.8147443,29.7374785 71.3462616,28.6201159 70.8212741,27.5430036 L71.9332355,27.0075919 C72.4784634,28.1257931 72.9646566,29.2855022 73.3787431,30.4556932 L72.2136505,30.8636459 Z M10.2870597,34.4157268 L9.08232945,34.1444572 C9.35810599,32.9323389 9.70598923,31.7235748 10.117124,30.5517067 L11.2834816,30.9563052 C10.8879489,32.0841496 10.552716,33.2480515 10.2870597,34.4157268 Z M73.8295154,37.8642474 C73.6937355,36.6756084 73.488379,35.4827767 73.2201927,34.3180362 L74.4240795,34.0438317 C74.7028078,35.2530151 74.9157545,36.4919668 75.0565945,37.7258873 L73.8295154,37.8642474 Z M8.52655961,41.5488187 L8.25837326,41.5433681 C8.25795158,40.2909996 8.3262632,39.0486937 8.46119973,37.8286092 L9.68912216,37.9631958 C9.55924575,39.1379988 9.49346419,40.3358618 9.49346419,41.5224045 L8.52655961,41.5488187 Z M75.1687605,45.2505801 L73.9779456,45.1143164 C74.1111954,43.9302894 74.2157712,42.7215253 74.2157712,41.5224045 L74.2157712,41.2880309 L75.4808012,41.2880309 L75.4808012,41.5224045 C75.4808012,42.7672261 75.3062271,44.0212716 75.1687605,45.2505801 Z M9.09793149,48.9678547 C8.82004657,47.7586713 8.60878656,46.5197195 8.46878991,45.2853798 L9.69671234,45.147439 C9.83080552,46.3369165 10.034897,47.5301675 10.30224,48.6940694 L9.09793149,48.9678547 Z M73.4010919,52.5258055 L72.235156,52.1203685 C72.6319537,50.9925241 72.9684517,49.8290415 73.2349513,48.6617854 L74.4396815,48.9338936 C74.16264,50.1460119 73.81307,51.3543567 73.4010919,52.5258055 Z M11.5820287,56.0066101 C11.0380658,54.8879897 10.552716,53.7270227 10.1398945,52.5564124 L11.3049871,52.1497176 C11.7034716,53.2771427 12.1702676,54.3949246 12.6935684,55.472037 L11.5820287,56.0066101 Z M70.1411097,59.2471712 L69.0957732,58.5931053 C69.7371434,57.5797224 70.3270691,56.5202195 70.8486831,55.444365 L71.9614878,55.9785188 C71.4196333,57.0954621 70.8073588,58.1956345 70.1411097,59.2471712 Z M15.5820535,62.3137341 C14.8019517,61.3439556 14.0694993,60.3209294 13.4040935,59.271489 L14.4490083,58.6165846 C15.0899568,59.6270326 15.7958435,60.6127434 16.546428,61.5464644 L15.5820535,62.3137341 Z M65.4617638,65.076324 L64.5880498,64.2080095 C65.4381499,63.3623359 66.2494558,62.4600603 67.0000403,61.5255008 L67.9652581,62.2919319 C67.1864213,63.2617103 66.344333,64.1983663 65.4617638,65.076324 Z M20.8896976,67.5844151 C19.9135161,66.8104371 18.9710688,65.9731489 18.0876562,65.0964491 L18.9609485,64.2272961 C19.8114704,65.0721312 20.7201836,65.8788125 21.6596792,66.6238607 L20.8896976,67.5844151 Z M59.6008799,69.7306737 L58.9426427,68.6917152 C59.9593051,68.0548395 60.9510886,67.3533957 61.8905842,66.6070897 L62.6614091,67.5668057 C61.6864927,68.3416222 60.6567583,69.0698994 59.6008799,69.7306737 Z M27.2418348,71.5545113 C26.1172231,71.0161648 25.0107436,70.4077996 23.9531785,69.7461868 L24.6105724,68.7063897 C25.6293432,69.3432654 26.6949201,69.9294091 27.7782075,70.4480498 L27.2418348,71.5545113 Z M52.8464632,72.9733312 L52.4378585,71.813622 C53.5709037,71.4195054 54.6950937,70.9553702 55.7792244,70.4346331 L56.3164404,71.5410946 C55.1905637,72.0815375 54.0229411,72.5632822 52.8464632,72.9733312 Z M34.3276894,74.0143861 C33.1086221,73.7397623 31.89335,73.3930235 30.7143421,72.9833938 L31.1221034,71.8236846 C32.2568353,72.2182205 33.426988,72.5519618 34.6005142,72.8165231 L34.3276894,74.0143861 Z M45.5316382,74.6302982 L45.3941716,73.4093751 C46.5913116,73.2756271 47.7914034,73.0739567 48.9611345,72.8089762 L49.235646,74.0072585 C48.0207955,74.2818823 46.774741,74.4915188 45.5316382,74.6302982 Z M41.7816677,74.8298721 L41.7648006,74.8298721 C40.5179027,74.8298721 39.2621496,74.7653041 38.0325405,74.6298789 L38.1683204,73.4110522 C39.3532318,73.5414461 40.5630221,73.6089491 41.7648006,73.6089491 L41.8120284,73.6068527 L41.7816677,74.8298721 Z\" fill-opacity=0.56 fill=#FFFFFF></path> <path d=\"M50.9232765,37.6128283 C50.9232765,43.044906 46.5177195,47.4492429 41.0820493,47.4492429 C35.6473138,47.4492429 31.240822,43.044906 31.240822,37.6128283 C31.240822,32.1807506 35.6473138,27.7764137 41.0820493,27.7764137 C46.5177195,27.7764137 50.9232765,32.1807506 50.9232765,37.6128283\" fill-opacity=0.18 fill=#000000></path> <polygon fill=#FFFFFF points=\"41.4046019 37.3097957 38.4820985 34.6809759 54.0494924 20.6770261 56.9719957 23.3067754\"></polygon> <path d=\"M81.9810609,18.8689674 C81.9810609,28.8729698 73.6643051,36.9829099 63.4051857,36.9829099 C53.1451417,36.9829099 44.828386,28.8729698 44.828386,18.8689674 C44.828386,8.86496504 53.1451417,0.755024922 63.4051857,0.755024922 C73.6643051,0.755024922 81.9810609,8.86496504 81.9810609,18.8689674\" fill=#FF1D25></path> <path d=\"M69.3273149,9.24368734 C69.3273149,10.8384499 68.0015892,12.1312083 66.3661578,12.1312083 C64.7307264,12.1312083 63.4050008,10.8384499 63.4050008,9.24368734 C63.4050008,7.64892477 64.7307264,6.35616642 66.3661578,6.35616642 C68.0015892,6.35616642 69.3273149,7.64892477 69.3273149,9.24368734\" fill=#FFFFFF></path> </svg> <svg class=refuerzo-icon width=84px height=84px viewBox=\"0 0 84 84\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g stroke=none stroke-width=1 fill=none fill-rule=evenodd> <path d=\"M42,0 C65.1959766,0 84,18.8040234 84,42 C84,65.1959766 65.1959766,84 42,84 C18.8040234,84 0,65.1959766 0,42 C0,18.8040234 18.8040234,0 42,0\" fill-opacity=0.521824049 fill=#031023></path> <path d=\"M45.3279684,9.62285559 C44.1548639,9.49413878 42.9560372,9.42328164 41.7648006,9.42328164 L41.7466685,9.42328164 L41.7466685,8.16546259 L41.7648006,8.16546259 C43.0011566,8.16546259 44.2455244,8.25099429 45.4629049,8.38432311 L45.3279684,9.62285559 Z M34.5351543,10.2429604 L34.2602211,9.04551665 C35.4750715,8.76921573 36.7207044,8.55832141 37.9629638,8.41870349 L38.1021171,9.63878797 C36.9053988,9.77337461 35.7057287,9.97672202 34.5351543,10.2429604 Z M52.3754504,11.2093847 C51.2398751,10.8165259 50.068879,10.4840424 48.8957746,10.2207389 L49.1673343,9.02245664 C50.3859799,9.29582264 51.6016737,9.64130361 52.781525,10.0492563 L52.3754504,11.2093847 Z M27.7200161,12.6244311 L27.1823784,11.5188082 C28.3090984,10.9766882 29.4758777,10.4936856 30.6510906,10.0836366 L31.0605386,11.242088 C29.9287584,11.6374624 28.8049902,12.1024362 27.7200161,12.6244311 Z M58.8903547,14.3208097 C57.8703189,13.6847726 56.8043203,13.0994674 55.7214547,12.5825038 L56.2565623,11.4752038 C57.3807523,12.0122925 58.4880752,12.6193998 59.5469053,13.2801741 L58.8903547,14.3208097 Z M21.6124514,16.4586828 L20.8407831,15.4998055 C21.8144345,14.7241504 22.8437472,13.9950346 23.8992039,13.3330025 L24.5587062,14.3711225 C23.5420438,15.0096753 22.5506819,15.7115383 21.6124514,16.4586828 Z M64.5450387,18.7944528 C63.6919869,17.9487791 62.782852,17.1433557 61.8433564,16.4004039 L62.6124946,15.4390109 C63.5878327,16.2104732 64.5311234,17.0465036 65.4174878,17.924042 L64.5450387,18.7944528 Z M16.5088988,21.5448838 L15.5428375,20.7797105 C16.319566,19.8099321 17.1608109,18.8720183 18.0433801,17.9928028 L18.9179375,18.8598594 C18.0682591,19.7072102 17.2577965,20.6107435 16.5088988,21.5448838 Z M69.0628825,24.4005523 C68.4210906,23.3909429 67.7139388,22.4056513 66.9620894,21.4723496 L67.9256205,20.7042414 C68.7065657,21.6731813 69.4407048,22.6957882 70.1073756,23.7439708 L69.0628825,24.4005523 Z M12.6661594,27.6302124 L11.5525113,27.0981549 C12.0935225,25.9799538 12.7049536,24.8797814 13.3699377,23.8269868 L14.4156958,24.4806335 C13.7755907,25.4940163 13.1865084,26.5539385 12.6661594,27.6302124 Z M72.2136505,30.8636459 C71.8147443,29.7374785 71.3462616,28.6201159 70.8212741,27.5430036 L71.9332355,27.0075919 C72.4784634,28.1257931 72.9646566,29.2855022 73.3787431,30.4556932 L72.2136505,30.8636459 Z M10.2870597,34.4157268 L9.08232945,34.1444572 C9.35810599,32.9323389 9.70598923,31.7235748 10.117124,30.5517067 L11.2834816,30.9563052 C10.8879489,32.0841496 10.552716,33.2480515 10.2870597,34.4157268 Z M73.8295154,37.8642474 C73.6937355,36.6756084 73.488379,35.4827767 73.2201927,34.3180362 L74.4240795,34.0438317 C74.7028078,35.2530151 74.9157545,36.4919668 75.0565945,37.7258873 L73.8295154,37.8642474 Z M8.52655961,41.5488187 L8.25837326,41.5433681 C8.25795158,40.2909996 8.3262632,39.0486937 8.46119973,37.8286092 L9.68912216,37.9631958 C9.55924575,39.1379988 9.49346419,40.3358618 9.49346419,41.5224045 L8.52655961,41.5488187 Z M75.1687605,45.2505801 L73.9779456,45.1143164 C74.1111954,43.9302894 74.2157712,42.7215253 74.2157712,41.5224045 L74.2157712,41.2880309 L75.4808012,41.2880309 L75.4808012,41.5224045 C75.4808012,42.7672261 75.3062271,44.0212716 75.1687605,45.2505801 Z M9.09793149,48.9678547 C8.82004657,47.7586713 8.60878656,46.5197195 8.46878991,45.2853798 L9.69671234,45.147439 C9.83080552,46.3369165 10.034897,47.5301675 10.30224,48.6940694 L9.09793149,48.9678547 Z M73.4010919,52.5258055 L72.235156,52.1203685 C72.6319537,50.9925241 72.9684517,49.8290415 73.2349513,48.6617854 L74.4396815,48.9338936 C74.16264,50.1460119 73.81307,51.3543567 73.4010919,52.5258055 Z M11.5820287,56.0066101 C11.0380658,54.8879897 10.552716,53.7270227 10.1398945,52.5564124 L11.3049871,52.1497176 C11.7034716,53.2771427 12.1702676,54.3949246 12.6935684,55.472037 L11.5820287,56.0066101 Z M70.1411097,59.2471712 L69.0957732,58.5931053 C69.7371434,57.5797224 70.3270691,56.5202195 70.8486831,55.444365 L71.9614878,55.9785188 C71.4196333,57.0954621 70.8073588,58.1956345 70.1411097,59.2471712 Z M15.5820535,62.3137341 C14.8019517,61.3439556 14.0694993,60.3209294 13.4040935,59.271489 L14.4490083,58.6165846 C15.0899568,59.6270326 15.7958435,60.6127434 16.546428,61.5464644 L15.5820535,62.3137341 Z M65.4617638,65.076324 L64.5880498,64.2080095 C65.4381499,63.3623359 66.2494558,62.4600603 67.0000403,61.5255008 L67.9652581,62.2919319 C67.1864213,63.2617103 66.344333,64.1983663 65.4617638,65.076324 Z M20.8896976,67.5844151 C19.9135161,66.8104371 18.9710688,65.9731489 18.0876562,65.0964491 L18.9609485,64.2272961 C19.8114704,65.0721312 20.7201836,65.8788125 21.6596792,66.6238607 L20.8896976,67.5844151 Z M59.6008799,69.7306737 L58.9426427,68.6917152 C59.9593051,68.0548395 60.9510886,67.3533957 61.8905842,66.6070897 L62.6614091,67.5668057 C61.6864927,68.3416222 60.6567583,69.0698994 59.6008799,69.7306737 Z M27.2418348,71.5545113 C26.1172231,71.0161648 25.0107436,70.4077996 23.9531785,69.7461868 L24.6105724,68.7063897 C25.6293432,69.3432654 26.6949201,69.9294091 27.7782075,70.4480498 L27.2418348,71.5545113 Z M52.8464632,72.9733312 L52.4378585,71.813622 C53.5709037,71.4195054 54.6950937,70.9553702 55.7792244,70.4346331 L56.3164404,71.5410946 C55.1905637,72.0815375 54.0229411,72.5632822 52.8464632,72.9733312 Z M34.3276894,74.0143861 C33.1086221,73.7397623 31.89335,73.3930235 30.7143421,72.9833938 L31.1221034,71.8236846 C32.2568353,72.2182205 33.426988,72.5519618 34.6005142,72.8165231 L34.3276894,74.0143861 Z M45.5316382,74.6302982 L45.3941716,73.4093751 C46.5913116,73.2756271 47.7914034,73.0739567 48.9611345,72.8089762 L49.235646,74.0072585 C48.0207955,74.2818823 46.774741,74.4915188 45.5316382,74.6302982 Z M41.7816677,74.8298721 L41.7648006,74.8298721 C40.5179027,74.8298721 39.2621496,74.7653041 38.0325405,74.6298789 L38.1683204,73.4110522 C39.3532318,73.5414461 40.5630221,73.6089491 41.7648006,73.6089491 L41.8120284,73.6068527 L41.7816677,74.8298721 Z\" fill-opacity=0.56 fill=#FFFFFF></path> <path d=\"M84,45.604152 C82.1344116,67.118918 64.1272356,84 42.1725376,84 C41.6588201,84 41.1451026,84 40.6313851,83.9728774 L20.7586207,64.0568631 L56.8000364,18.3448276 L84,45.604152 Z\" fill-opacity=0.521824049 fill=#031023></path> <path d=\"M22.4413222,17.3793103 L54.3172985,17.3793103 C56.044723,17.3793103 57.4482759,18.7891636 57.4482759,20.5243422 L57.4482759,39.2858174 L57.4482759,43.732151 L57.4482759,59.5112571 L57.4482759,60.8668346 C57.4482759,62.9816144 55.7478679,64.6896552 53.6425386,64.6896552 L22.4413222,64.6896552 C20.7138977,64.6896552 19.3103448,63.279802 19.3103448,61.5446233 L19.3103448,20.5243422 C19.3103448,18.7891636 20.7140614,17.3793103 22.4413222,17.3793103\" fill=#FF1D25></path> <polygon points=\"0 84 84 84 84 0 0 0\"></polygon> <polygon fill=#F7F7F8 points=\"21.2413793 63.2413793 55.5172414 63.2413793 55.5172414 19.7931034 21.2413793 19.7931034\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 37.3198466 28.4827586 37.3198466 28.4827586 32.2440863 24.137931 32.2440863\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 46.418544 28.4827586 46.418544 28.4827586 41.3427837 24.137931 41.3427837\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 55.5172414 28.4827586 55.5172414 28.4827586 50.4414811 24.137931 50.4414811\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 28.248174 28.4827586 28.248174 28.4827586 23.1724138 24.137931 23.1724138\"></polygon> <polygon fill=#999999 points=\"30.4137931 34.9756684 45.3793103 34.9756684 45.3793103 33.6576581 30.4137931 33.6576581\"></polygon> <polygon fill=#999999 points=\"30.4137931 44.0395583 45.3793103 44.0395583 45.3793103 42.7215481 30.4137931 42.7215481\"></polygon> <polygon fill=#999999 points=\"30.4137931 53.1034483 45.3793103 53.1034483 45.3793103 51.7854381 30.4137931 51.7854381\"></polygon> <polygon fill=#999999 points=\"30.4137931 25.9386999 45.3793103 25.9386999 45.3793103 24.6206897 30.4137931 24.6206897\"></polygon> <path d=\"M52.5,35 C61.6128223,35 69,42.3871777 69,51.5 C69,60.6128223 61.6128223,68 52.5,68 C43.3871777,68 36,60.6128223 36,51.5 C36,42.3871777 43.3871777,35 52.5,35\" fill=#FF1D25></path> <path d=\"M41,52.310695 L45.3513529,51.8070473 L50.068546,56.1303198 C50.068546,56.1303198 52.3459818,46.308682 63,44 C57.7948554,46.8961011 54.5824671,52.6465449 52.4271426,60.5793769 C51.8984873,62.5939673 50.4753367,62.0483066 50.0278423,61.4606329 C49.295915,60.4950961 44.4161537,54.7449069 41.0002467,52.2684273 L41.0002467,52.310695 L41,52.310695 Z\" fill=#FFFFFF></path> <path d=\"M35.5814898,15.1979342 L36.0743196,15.1979342 C35.9374501,14.9767286 35.8553948,14.6999698 35.8553948,14.4233788 L35.8553948,12.7633296 C35.8553948,11.850311 36.6769439,11.1034483 37.6898444,11.1034483 L39.5791081,11.1034483 C40.5921748,11.1034483 41.4135577,11.8504788 41.4135577,12.7633296 L41.4135577,14.423211 C41.4135577,14.6999698 41.3315024,14.9488681 41.1944669,15.1977664 L41.6872966,15.1977664 C45.0552158,15.1977664 47.7931034,17.7154489 47.7931034,20.7586207 L29.4482759,20.7586207 C29.4482759,17.6877562 32.2137368,15.1977664 35.5540827,15.1977664 L35.5814898,15.1977664 L35.5814898,15.1979342 Z\" fill=#FF1D25></path> <path d=\"M38.6210219,11.1034483 L39.5792569,11.1034483 C40.5923052,11.1034483 41.4136732,11.8504788 41.4136732,12.7633296 L41.4136732,14.423211 C41.4136732,14.6999698 41.3316195,14.9488681 41.1945864,15.1977664 L41.6874072,15.1977664 C45.0552653,15.1977664 47.7931034,17.7154489 47.7931034,20.7586207 L38.6206897,20.7586207 L38.6210219,11.1034483 Z\" fill=#C7090F></path> </g> </svg> <svg class=ampliacion-icon width=84px height=84px viewBox=\"0 0 84 84\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g stroke=none stroke-width=1 fill=none fill-rule=evenodd> <path d=\"M42,0 C65.1959766,0 84,18.8040234 84,42 C84,65.1959766 65.1959766,84 42,84 C18.8040234,84 0,65.1959766 0,42 C0,18.8040234 18.8040234,0 42,0\" fill-opacity=0.521824049 fill=#031023></path> <path d=\"M45.3279684,9.62285559 C44.1548639,9.49413878 42.9560372,9.42328164 41.7648006,9.42328164 L41.7466685,9.42328164 L41.7466685,8.16546259 L41.7648006,8.16546259 C43.0011566,8.16546259 44.2455244,8.25099429 45.4629049,8.38432311 L45.3279684,9.62285559 Z M34.5351543,10.2429604 L34.2602211,9.04551665 C35.4750715,8.76921573 36.7207044,8.55832141 37.9629638,8.41870349 L38.1021171,9.63878797 C36.9053988,9.77337461 35.7057287,9.97672202 34.5351543,10.2429604 Z M52.3754504,11.2093847 C51.2398751,10.8165259 50.068879,10.4840424 48.8957746,10.2207389 L49.1673343,9.02245664 C50.3859799,9.29582264 51.6016737,9.64130361 52.781525,10.0492563 L52.3754504,11.2093847 Z M27.7200161,12.6244311 L27.1823784,11.5188082 C28.3090984,10.9766882 29.4758777,10.4936856 30.6510906,10.0836366 L31.0605386,11.242088 C29.9287584,11.6374624 28.8049902,12.1024362 27.7200161,12.6244311 Z M58.8903547,14.3208097 C57.8703189,13.6847726 56.8043203,13.0994674 55.7214547,12.5825038 L56.2565623,11.4752038 C57.3807523,12.0122925 58.4880752,12.6193998 59.5469053,13.2801741 L58.8903547,14.3208097 Z M21.6124514,16.4586828 L20.8407831,15.4998055 C21.8144345,14.7241504 22.8437472,13.9950346 23.8992039,13.3330025 L24.5587062,14.3711225 C23.5420438,15.0096753 22.5506819,15.7115383 21.6124514,16.4586828 Z M64.5450387,18.7944528 C63.6919869,17.9487791 62.782852,17.1433557 61.8433564,16.4004039 L62.6124946,15.4390109 C63.5878327,16.2104732 64.5311234,17.0465036 65.4174878,17.924042 L64.5450387,18.7944528 Z M16.5088988,21.5448838 L15.5428375,20.7797105 C16.319566,19.8099321 17.1608109,18.8720183 18.0433801,17.9928028 L18.9179375,18.8598594 C18.0682591,19.7072102 17.2577965,20.6107435 16.5088988,21.5448838 Z M69.0628825,24.4005523 C68.4210906,23.3909429 67.7139388,22.4056513 66.9620894,21.4723496 L67.9256205,20.7042414 C68.7065657,21.6731813 69.4407048,22.6957882 70.1073756,23.7439708 L69.0628825,24.4005523 Z M12.6661594,27.6302124 L11.5525113,27.0981549 C12.0935225,25.9799538 12.7049536,24.8797814 13.3699377,23.8269868 L14.4156958,24.4806335 C13.7755907,25.4940163 13.1865084,26.5539385 12.6661594,27.6302124 Z M72.2136505,30.8636459 C71.8147443,29.7374785 71.3462616,28.6201159 70.8212741,27.5430036 L71.9332355,27.0075919 C72.4784634,28.1257931 72.9646566,29.2855022 73.3787431,30.4556932 L72.2136505,30.8636459 Z M10.2870597,34.4157268 L9.08232945,34.1444572 C9.35810599,32.9323389 9.70598923,31.7235748 10.117124,30.5517067 L11.2834816,30.9563052 C10.8879489,32.0841496 10.552716,33.2480515 10.2870597,34.4157268 Z M73.8295154,37.8642474 C73.6937355,36.6756084 73.488379,35.4827767 73.2201927,34.3180362 L74.4240795,34.0438317 C74.7028078,35.2530151 74.9157545,36.4919668 75.0565945,37.7258873 L73.8295154,37.8642474 Z M8.52655961,41.5488187 L8.25837326,41.5433681 C8.25795158,40.2909996 8.3262632,39.0486937 8.46119973,37.8286092 L9.68912216,37.9631958 C9.55924575,39.1379988 9.49346419,40.3358618 9.49346419,41.5224045 L8.52655961,41.5488187 Z M75.1687605,45.2505801 L73.9779456,45.1143164 C74.1111954,43.9302894 74.2157712,42.7215253 74.2157712,41.5224045 L74.2157712,41.2880309 L75.4808012,41.2880309 L75.4808012,41.5224045 C75.4808012,42.7672261 75.3062271,44.0212716 75.1687605,45.2505801 Z M9.09793149,48.9678547 C8.82004657,47.7586713 8.60878656,46.5197195 8.46878991,45.2853798 L9.69671234,45.147439 C9.83080552,46.3369165 10.034897,47.5301675 10.30224,48.6940694 L9.09793149,48.9678547 Z M73.4010919,52.5258055 L72.235156,52.1203685 C72.6319537,50.9925241 72.9684517,49.8290415 73.2349513,48.6617854 L74.4396815,48.9338936 C74.16264,50.1460119 73.81307,51.3543567 73.4010919,52.5258055 Z M11.5820287,56.0066101 C11.0380658,54.8879897 10.552716,53.7270227 10.1398945,52.5564124 L11.3049871,52.1497176 C11.7034716,53.2771427 12.1702676,54.3949246 12.6935684,55.472037 L11.5820287,56.0066101 Z M70.1411097,59.2471712 L69.0957732,58.5931053 C69.7371434,57.5797224 70.3270691,56.5202195 70.8486831,55.444365 L71.9614878,55.9785188 C71.4196333,57.0954621 70.8073588,58.1956345 70.1411097,59.2471712 Z M15.5820535,62.3137341 C14.8019517,61.3439556 14.0694993,60.3209294 13.4040935,59.271489 L14.4490083,58.6165846 C15.0899568,59.6270326 15.7958435,60.6127434 16.546428,61.5464644 L15.5820535,62.3137341 Z M65.4617638,65.076324 L64.5880498,64.2080095 C65.4381499,63.3623359 66.2494558,62.4600603 67.0000403,61.5255008 L67.9652581,62.2919319 C67.1864213,63.2617103 66.344333,64.1983663 65.4617638,65.076324 Z M20.8896976,67.5844151 C19.9135161,66.8104371 18.9710688,65.9731489 18.0876562,65.0964491 L18.9609485,64.2272961 C19.8114704,65.0721312 20.7201836,65.8788125 21.6596792,66.6238607 L20.8896976,67.5844151 Z M59.6008799,69.7306737 L58.9426427,68.6917152 C59.9593051,68.0548395 60.9510886,67.3533957 61.8905842,66.6070897 L62.6614091,67.5668057 C61.6864927,68.3416222 60.6567583,69.0698994 59.6008799,69.7306737 Z M27.2418348,71.5545113 C26.1172231,71.0161648 25.0107436,70.4077996 23.9531785,69.7461868 L24.6105724,68.7063897 C25.6293432,69.3432654 26.6949201,69.9294091 27.7782075,70.4480498 L27.2418348,71.5545113 Z M52.8464632,72.9733312 L52.4378585,71.813622 C53.5709037,71.4195054 54.6950937,70.9553702 55.7792244,70.4346331 L56.3164404,71.5410946 C55.1905637,72.0815375 54.0229411,72.5632822 52.8464632,72.9733312 Z M34.3276894,74.0143861 C33.1086221,73.7397623 31.89335,73.3930235 30.7143421,72.9833938 L31.1221034,71.8236846 C32.2568353,72.2182205 33.426988,72.5519618 34.6005142,72.8165231 L34.3276894,74.0143861 Z M45.5316382,74.6302982 L45.3941716,73.4093751 C46.5913116,73.2756271 47.7914034,73.0739567 48.9611345,72.8089762 L49.235646,74.0072585 C48.0207955,74.2818823 46.774741,74.4915188 45.5316382,74.6302982 Z M41.7816677,74.8298721 L41.7648006,74.8298721 C40.5179027,74.8298721 39.2621496,74.7653041 38.0325405,74.6298789 L38.1683204,73.4110522 C39.3532318,73.5414461 40.5630221,73.6089491 41.7648006,73.6089491 L41.8120284,73.6068527 L41.7816677,74.8298721 Z\" fill-opacity=0.56 fill=#FFFFFF></path> <path d=\"M84,45.604152 C82.1344116,67.118918 64.1272356,84 42.1725376,84 C41.6588201,84 41.1451026,84 40.6313851,83.9728774 L20.7586207,64.0568631 L56.8000364,18.3448276 L84,45.604152 Z\" fill-opacity=0.521824049 fill=#031023></path> <path d=\"M22.4413222,17.3793103 L54.3172985,17.3793103 C56.044723,17.3793103 57.4482759,18.7891636 57.4482759,20.5243422 L57.4482759,39.2858174 L57.4482759,43.732151 L57.4482759,59.5112571 L57.4482759,60.8668346 C57.4482759,62.9816144 55.7478679,64.6896552 53.6425386,64.6896552 L22.4413222,64.6896552 C20.7138977,64.6896552 19.3103448,63.279802 19.3103448,61.5446233 L19.3103448,20.5243422 C19.3103448,18.7891636 20.7140614,17.3793103 22.4413222,17.3793103\" fill=#FF1D25></path> <polygon points=\"0 84 84 84 84 0 0 0\"></polygon> <polygon fill=#F7F7F8 points=\"21.2413793 63.2413793 55.5172414 63.2413793 55.5172414 19.7931034 21.2413793 19.7931034\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 37.3198466 28.4827586 37.3198466 28.4827586 32.2440863 24.137931 32.2440863\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 46.418544 28.4827586 46.418544 28.4827586 41.3427837 24.137931 41.3427837\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 55.5172414 28.4827586 55.5172414 28.4827586 50.4414811 24.137931 50.4414811\"></polygon> <polygon fill=#FF1D25 points=\"24.137931 28.248174 28.4827586 28.248174 28.4827586 23.1724138 24.137931 23.1724138\"></polygon> <polygon fill=#999999 points=\"30.4137931 34.9756684 45.3793103 34.9756684 45.3793103 33.6576581 30.4137931 33.6576581\"></polygon> <polygon fill=#999999 points=\"30.4137931 44.0395583 45.3793103 44.0395583 45.3793103 42.7215481 30.4137931 42.7215481\"></polygon> <polygon fill=#999999 points=\"30.4137931 53.1034483 45.3793103 53.1034483 45.3793103 51.7854381 30.4137931 51.7854381\"></polygon> <polygon fill=#999999 points=\"30.4137931 25.9386999 45.3793103 25.9386999 45.3793103 24.6206897 30.4137931 24.6206897\"></polygon> <path d=\"M52.5,35 C61.6128223,35 69,42.3871777 69,51.5 C69,60.6128223 61.6128223,68 52.5,68 C43.3871777,68 36,60.6128223 36,51.5 C36,42.3871777 43.3871777,35 52.5,35\" fill=#FF1D25></path> <polygon fill=#FFFFFF points=\"50.3 53.66 45.02 53.66 45.02 50.54 50.3 50.54 50.3 45.02 53.54 45.02 53.54 50.54 58.82 50.54 58.82 53.66 53.54 53.66 53.54 59.18 50.3 59.18\"></polygon> <path d=\"M35.5814898,15.1979342 L36.0743196,15.1979342 C35.9374501,14.9767286 35.8553948,14.6999698 35.8553948,14.4233788 L35.8553948,12.7633296 C35.8553948,11.850311 36.6769439,11.1034483 37.6898444,11.1034483 L39.5791081,11.1034483 C40.5921748,11.1034483 41.4135577,11.8504788 41.4135577,12.7633296 L41.4135577,14.423211 C41.4135577,14.6999698 41.3315024,14.9488681 41.1944669,15.1977664 L41.6872966,15.1977664 C45.0552158,15.1977664 47.7931034,17.7154489 47.7931034,20.7586207 L29.4482759,20.7586207 C29.4482759,17.6877562 32.2137368,15.1977664 35.5540827,15.1977664 L35.5814898,15.1977664 L35.5814898,15.1979342 Z\" fill=#FF1D25></path> <path d=\"M38.6210219,11.1034483 L39.5792569,11.1034483 C40.5923052,11.1034483 41.4136732,11.8504788 41.4136732,12.7633296 L41.4136732,14.423211 C41.4136732,14.6999698 41.3316195,14.9488681 41.1945864,15.1977664 L41.6874072,15.1977664 C45.0552653,15.1977664 47.7931034,17.7154489 47.7931034,20.7586207 L38.6206897,20.7586207 L38.6210219,11.1034483 Z\" fill=#C7090F></path> </g> </svg> <svg class=microproyecto-icon width=83px height=84px viewBox=\"0 0 83 84\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g stroke=none stroke-width=1 fill=none fill-rule=evenodd> <path d=\"M41.321275,0 C64.1423319,0 82.64255,18.8040945 82.64255,42 C82.64255,65.1959055 64.1423319,84 41.321275,84 C18.5002181,84 0,65.1959055 0,42 C0,18.8040945 18.5002181,0 41.321275,0\" fill-opacity=0.521824049 fill=#031023></path> <path d=\"M33.6174482,54.0235294 L48.9495273,54.0235294 C49.4253505,48.6239303 51.3286431,43.491638 54.4479281,39.0543437 C56.3512207,36.3812748 57.4614747,33.1201308 57.4614747,29.5382185 C57.4614747,20.3963229 50.1126506,13.0186528 41.0191416,13.1790369 C32.242848,13.2859597 25.1583701,20.556707 25.0526316,29.4312957 C25.0526316,33.0666694 26.1628856,36.4881975 28.1719166,39.2147278 C31.344071,43.5450994 33.1944943,48.6773916 33.6174482,54.0235294\" fill=#FFFFFF></path> <path d=\"M48.6400303,54.0235294 L33.8740761,54.0235294 C32.5742561,54.0235294 31.5344002,55.1947712 31.5344002,56.6588235 C31.5344002,58.1228758 32.5742561,59.2941176 33.8740761,59.2941176 L48.6400303,59.2941176 C49.9398502,59.2941176 50.9797061,58.1228758 50.9797061,56.6588235 C50.9797061,55.1947712 49.9398502,54.0235294 48.6400303,54.0235294\" fill=#FF0000></path> <path d=\"M48.6400303,60.6117647 L33.8740761,60.6117647 C32.5742561,60.6117647 31.5344002,61.7830065 31.5344002,63.2470588 C31.5344002,64.7111111 32.5742561,65.8823529 33.8740761,65.8823529 L48.6400303,65.8823529 C49.9398502,65.8823529 50.9797061,64.7111111 50.9797061,63.2470588 C50.9797061,61.7830065 49.9398502,60.6117647 48.6400303,60.6117647\" fill=#FF0000></path> <path d=\"M34.1271077,67.2 C34.1271077,68.6374332 35.4137144,69.8352941 37.0755814,69.8352941 L45.4385249,69.8352941 C47.0467833,69.8352941 48.3869986,68.6853476 48.3869986,67.2 L34.1271077,67.2 Z\" fill=#FF0000></path> </g> </svg> <svg class=teacher-icon xmlns=http://www.w3.org/2000/svg width=84 height=85 viewBox=\"0 0 84 85\"> <g fill=none fill-rule=evenodd transform=\"translate(.713 .849)\"> <path fill=#031023 fill-opacity=.522 d=\"M41.321275,0 C64.1423319,0 82.64255,18.8040945 82.64255,42 C82.64255,65.1959055 64.1423319,84 41.321275,84 C18.5002181,84 0,65.1959055 0,42 C0,18.8040945 18.5002181,0 41.321275,0\"/> <g transform=\"translate(26.88 11.76)\"> <path fill=#FFF d=\"M9.504 0C13.8783879 0 17.424 3.54561209 17.424 7.92 17.424 12.2943879 13.8783879 15.84 9.504 15.84 5.12961209 15.84 1.584 12.2943879 1.584 7.92 1.584 3.54561209 5.12961209 0 9.504 0M16.9022149 51.9348699L16.9022149 38.2723638 16.9022149 36.9852173 16.9022149 35.2360619 17.4009288 35.2360619 18.1280745 21.3689762 18.5378569 21.5036577 18.5378569 17.4751449 17.5107853 17.424 13.0938545 17.424 10.1015713 20.8166113 7.20693844 17.424 7.20693844 17.424C3.54686386 17.9075373.777511433 20.9738845.66805246 24.6641382L.4394262 32.3719478 3.13701482 32.3719478 3.28000271 35.2360619 3.69327259 35.2360619 3.69327259 36.9852173 3.69327259 38.2723638 3.69327259 51.9348699 3.15096486 51.9348699 0 52.5980487 0 55.44 2.68189483 55.44 5.81367838 54.9404849 5.84157846 55.44 9.30816293 55.44 9.30816293 52.2758359 9.30816293 51.9348699 9.30816293 38.2723638 11.2855808 38.2723638 11.2855808 51.9348699 11.2855808 52.2758359 11.2855808 55.44 14.7521653 55.44 14.7800654 54.9404849 17.9101052 55.44 20.592 55.44 20.592 52.5980487 17.4427789 51.9348699 16.9022149 51.9348699z\"/> <g transform=\"translate(14.256 4.752)\"> <path fill=red d=\"M0,41.1720783 L27.3872766,41.1720783 L27.3872766,4.40960589 L0,4.40960589 L0,41.1720783 Z M2.25094737,38.9233819 L25.1363293,38.9233819 L25.1363293,6.66055326 L2.25094737,6.66055326 L2.25094737,38.9233819 Z\"/> <polygon fill=#D6D6D6 points=\"2.251 38.923 25.136 38.923 25.136 6.661 2.251 6.661\"/> <path fill=#FFF d=\"M26.4698352,20.268948 L26.4698352,20.268948 C27.9664359,20.268948 29.1796704,19.0557134 29.1796704,17.5591127 L29.1796704,16.9658352 C29.1796704,15.4692345 27.9664359,14.256 26.4698352,14.256 L26.4698352,14.256 C24.9732345,14.256 23.76,15.4692345 23.76,16.9658352 L23.76,17.5591127 C23.76,19.0557134 24.9732345,20.268948 26.4698352,20.268948 Z\"/> <polygon fill=red points=\"4.275 34.597 9.182 34.597 9.182 22.696 4.275 22.696\"/> <polygon fill=red points=\"10.336 34.597 15.239 34.597 15.239 19.428 10.336 19.428\"/> <polygon fill=red points=\"16.313 34.597 21.217 34.597 21.217 12.662 16.313 12.662\"/> <path fill=red d=\"M14.2102307,3.45970611 C13.6700034,3.45970611 13.2243158,3.02077137 13.2243158,2.47379116 C13.2243158,1.92681095 13.6655015,1.48787621 14.2102307,1.48787621 C14.75496,1.48787621 15.1961457,1.92681095 15.1961457,2.47379116 C15.1961457,3.02077137 14.75496,3.45970611 14.2102307,3.45970611 Z M16.6502577,2.34323621 C16.6502577,1.05119242 15.5585482,0 14.2102307,0 C12.8641642,0 11.7747057,1.05119242 11.7747057,2.34323621 L7.69373811,2.34323621 L7.69373811,8.254224 L20.7312253,8.254224 L20.7312253,2.34323621 L16.6502577,2.34323621 Z\"/> </g> </g> <path fill=#FFF fill-opacity=.56 d=\"M45.0216044,8.26255698 C43.8095119,8.12631849 42.5708421,8.05132075 41.3400149,8.05132075 L41.3212801,8.05132075 L41.3212801,6.72 L41.3400149,6.72 C42.6174611,6.72 43.9031854,6.81052981 45.1610256,6.95164981 L45.0216044,8.26255698 Z M33.8700914,8.91889811 L33.5860208,7.65148075 C34.8412468,7.35903396 36.1282782,7.13581585 37.4118241,6.98803925 L37.5556022,8.27942038 C36.3191109,8.4218717 35.0795698,8.63710189 33.8700914,8.91889811 Z M52.3033094,9.94179623 C51.1299933,9.52598038 49.9200792,9.17406792 48.7079866,8.89537811 L48.9885717,7.62707321 C50.2477189,7.91641358 51.5038163,8.28208302 52.7228799,8.71387472 L52.3033094,9.94179623 Z M26.8284522,11.4395321 L26.2729461,10.2693011 C27.4371126,9.69550189 28.6426698,9.18427472 29.8569409,8.75026415 L30.2799969,9.97641057 C29.1106021,10.3948891 27.9494853,10.887034 26.8284522,11.4395321 Z M59.0347365,13.23504 C57.9807998,12.5618355 56.8793727,11.9423275 55.7605181,11.3951547 L56.31341,10.2231487 C57.4749624,10.7916226 58.6190872,11.4342068 59.7131075,12.133594 L59.0347365,13.23504 Z M20.5179027,15.4978415 L19.720588,14.4829313 C20.7265987,13.6619502 21.7901206,12.8902279 22.8806554,12.1895094 L23.5620762,13.2882928 C22.511625,13.96416 21.4873153,14.707037 20.5179027,15.4978415 Z M64.8773538,17.9701042 C63.9959508,17.0750128 63.0566008,16.2225238 62.0858811,15.436157 L62.8805816,14.4185842 C63.8883351,15.2351275 64.862976,16.1200121 65.7787987,17.0488302 L64.8773538,17.9701042 Z M15.2447336,20.8812589 L14.2465653,20.0713721 C15.0491083,19.0449238 15.918312,18.0522023 16.8302134,17.1216091 L17.7338367,18.0393328 C16.8559192,18.9361992 16.0185209,19.8925313 15.2447336,20.8812589 Z M69.545348,23.9038008 C68.8822262,22.835194 68.1515722,21.792326 67.3747351,20.804486 L68.3702892,19.9914928 C69.177189,21.0170536 69.9357272,22.0994174 70.6245548,23.2088513 L69.545348,23.9038008 Z M11.2742808,27.3221887 L10.1236207,26.75904 C10.6826123,25.5754958 11.3143644,24.411034 12.0014492,23.2967185 L13.0819631,23.9885615 C12.420584,25.0611623 11.8119236,26.1830219 11.2742808,27.3221887 Z M72.8008317,30.7445706 C72.388668,29.5525947 71.9046152,28.3699381 71.3621798,27.2298838 L72.5110971,26.6631849 C73.0744457,27.8467291 73.5767975,29.0742068 74.0046462,30.3127789 L72.8008317,30.7445706 Z M8.81611177,34.5042204 L7.57134237,34.2170989 C7.85628433,32.9341494 8.21572947,31.6547502 8.64052826,30.414403 L9.84564978,30.8426445 C9.43697155,32.0363955 9.09059715,33.2683109 8.81611177,34.5042204 Z M74.4703999,38.1542581 C74.3301074,36.89616 74.1179258,35.6336242 73.8408263,34.4008211 L75.0847243,34.1105932 C75.3727161,35.3904362 75.5927401,36.7017872 75.7382609,38.0078128 L74.4703999,38.1542581 Z M6.99710153,42.0541404 L6.720002,42.0483713 C6.71956631,40.7228196 6.79014827,39.4079185 6.92956941,38.1165374 L8.19830182,38.2589887 C8.06410897,39.5024423 7.99614116,40.7703034 7.99614116,42.0261826 L6.99710153,42.0541404 Z M75.8541548,45.9722174 L74.6237632,45.8279909 C74.7614416,44.5747743 74.8694929,43.2953751 74.8694929,42.0261826 L74.8694929,41.7781132 L76.1765662,41.7781132 L76.1765662,42.0261826 C76.1765662,43.3437464 75.9961901,44.6710732 75.8541548,45.9722174 Z M7.58746294,49.906714 C7.30034252,48.6268709 7.08206129,47.31552 6.93741185,46.0090506 L8.20614426,45.8630491 C8.34469402,47.1220347 8.55556851,48.3850143 8.83179665,49.6169298 L7.58746294,49.906714 Z M74.0277378,53.6725766 L72.823052,53.2434475 C73.2330373,52.0496966 73.5807187,50.8182249 73.8560755,49.5827592 L75.1008449,49.8707683 C74.8145959,51.1537177 74.453408,52.4326732 74.0277378,53.6725766 Z M10.1541191,57.3567849 C9.59207757,56.172797 9.09059715,54.9439879 8.66405558,53.7049721 L9.86787002,53.2745117 C10.2795981,54.4678189 10.7619081,55.6509192 11.3026007,56.7909736 L10.1541191,57.3567849 Z M70.6594101,60.7867109 L69.5793319,60.0944242 C70.242018,59.0218234 70.8515498,57.9004075 71.3904997,56.7616845 L72.5402884,57.3270521 C71.9804254,58.5092649 71.347802,59.6737268 70.6594101,60.7867109 Z M14.2870846,64.0324709 C13.4810561,63.0060226 12.7242607,61.9232151 12.0367402,60.8124498 L13.1163827,60.1192755 C13.7786331,61.1887698 14.50798,62.2320815 15.2835101,63.2203653 L14.2870846,64.0324709 Z M65.8245462,66.9564951 L64.9217943,66.03744 C65.8001475,65.1423487 66.6384171,64.1873479 67.4139473,63.1981766 L68.4112441,64.0093947 C67.6065227,65.035843 66.7364476,66.0272332 65.8245462,66.9564951 Z M19.7711282,69.6111487 C18.7625033,68.7919426 17.7887338,67.9057268 16.875961,66.9777962 L17.7782772,66.0578536 C18.6570661,66.9520574 19.5959804,67.8058777 20.5667001,68.5944634 L19.7711282,69.6111487 Z M59.768876,71.8828257 L59.0887622,70.7831547 C60.1392134,70.1090626 61.1639588,69.3666294 62.1346785,68.5767125 L62.9311218,69.5925102 C61.923804,70.4126038 60.8598464,71.1834385 59.768876,71.8828257 Z M26.3343785,73.8132408 C25.1723904,73.2434355 24.029137,72.59952 22.9364238,71.8992453 L23.6156662,70.7986868 C24.6682959,71.4727789 25.7692872,72.0931743 26.8885776,72.6421223 L26.3343785,73.8132408 Z M52.7899763,75.3149706 L52.3677917,74.0874928 C53.5384936,73.6703457 54.700046,73.1790883 55.8202077,72.6279215 L56.3752782,73.79904 C55.211983,74.3710642 54.0055544,74.88096 52.7899763,75.3149706 Z M33.6557314,76.4168604 C32.3961485,76.1261887 31.1404868,75.7591879 29.9222945,75.3256211 L30.3436078,74.0981434 C31.5160525,74.5157343 32.7250952,74.8689781 33.9376235,75.1489992 L33.6557314,76.4168604 Z M45.2320432,77.0687638 L45.0900079,75.7764951 C46.3269349,75.6349313 47.5669117,75.4214762 48.7755187,75.1410113 L49.0591536,76.4093162 C47.8039276,76.6999879 46.5164605,76.9218747 45.2320432,77.0687638 Z M41.3574425,77.28 L41.3400149,77.28 C40.0516763,77.28 38.7541883,77.2116589 37.4837131,77.06832 L37.6240057,75.7782702 C38.8482976,75.9162838 40.0982953,75.9877313 41.3400149,75.9877313 L41.3888123,75.9855125 L41.3574425,77.28 Z\"/> </g> </svg> <svg class=discover-icon xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=83 height=85 viewBox=\"0 0 83 85\"> <defs> <polygon id=discover-icon-a points=\".056 .107 42.076 .107 42.076 43.589 .056 43.589\"/> </defs> <g fill=none fill-rule=evenodd transform=\"translate(.28 .849)\"> <path fill=#031023 fill-opacity=.522 d=\"M41.321275,0 C64.1423319,0 82.64255,18.8040945 82.64255,42 C82.64255,65.1959055 64.1423319,84 41.321275,84 C18.5002181,84 0,65.1959055 0,42 C0,18.8040945 18.5002181,0 41.321275,0\"/> <path fill=#FFF fill-opacity=.56 d=\"M45.0216044,8.26255698 C43.8095119,8.12631849 42.5708421,8.05132075 41.3400149,8.05132075 L41.3212801,8.05132075 L41.3212801,6.72 L41.3400149,6.72 C42.6174611,6.72 43.9031854,6.81052981 45.1610256,6.95164981 L45.0216044,8.26255698 Z M33.8700914,8.91889811 L33.5860208,7.65148075 C34.8412468,7.35903396 36.1282782,7.13581585 37.4118241,6.98803925 L37.5556022,8.27942038 C36.3191109,8.4218717 35.0795698,8.63710189 33.8700914,8.91889811 Z M52.3033094,9.94179623 C51.1299933,9.52598038 49.9200792,9.17406792 48.7079866,8.89537811 L48.9885717,7.62707321 C50.2477189,7.91641358 51.5038163,8.28208302 52.7228799,8.71387472 L52.3033094,9.94179623 Z M26.8284522,11.4395321 L26.2729461,10.2693011 C27.4371126,9.69550189 28.6426698,9.18427472 29.8569409,8.75026415 L30.2799969,9.97641057 C29.1106021,10.3948891 27.9494853,10.887034 26.8284522,11.4395321 Z M59.0347365,13.23504 C57.9807998,12.5618355 56.8793727,11.9423275 55.7605181,11.3951547 L56.31341,10.2231487 C57.4749624,10.7916226 58.6190872,11.4342068 59.7131075,12.133594 L59.0347365,13.23504 Z M20.5179027,15.4978415 L19.720588,14.4829313 C20.7265987,13.6619502 21.7901206,12.8902279 22.8806554,12.1895094 L23.5620762,13.2882928 C22.511625,13.96416 21.4873153,14.707037 20.5179027,15.4978415 Z M64.8773538,17.9701042 C63.9959508,17.0750128 63.0566008,16.2225238 62.0858811,15.436157 L62.8805816,14.4185842 C63.8883351,15.2351275 64.862976,16.1200121 65.7787987,17.0488302 L64.8773538,17.9701042 Z M15.2447336,20.8812589 L14.2465653,20.0713721 C15.0491083,19.0449238 15.918312,18.0522023 16.8302134,17.1216091 L17.7338367,18.0393328 C16.8559192,18.9361992 16.0185209,19.8925313 15.2447336,20.8812589 Z M69.545348,23.9038008 C68.8822262,22.835194 68.1515722,21.792326 67.3747351,20.804486 L68.3702892,19.9914928 C69.177189,21.0170536 69.9357272,22.0994174 70.6245548,23.2088513 L69.545348,23.9038008 Z M11.2742808,27.3221887 L10.1236207,26.75904 C10.6826123,25.5754958 11.3143644,24.411034 12.0014492,23.2967185 L13.0819631,23.9885615 C12.420584,25.0611623 11.8119236,26.1830219 11.2742808,27.3221887 Z M72.8008317,30.7445706 C72.388668,29.5525947 71.9046152,28.3699381 71.3621798,27.2298838 L72.5110971,26.6631849 C73.0744457,27.8467291 73.5767975,29.0742068 74.0046462,30.3127789 L72.8008317,30.7445706 Z M8.81611177,34.5042204 L7.57134237,34.2170989 C7.85628433,32.9341494 8.21572947,31.6547502 8.64052826,30.414403 L9.84564978,30.8426445 C9.43697155,32.0363955 9.09059715,33.2683109 8.81611177,34.5042204 Z M74.4703999,38.1542581 C74.3301074,36.89616 74.1179258,35.6336242 73.8408263,34.4008211 L75.0847243,34.1105932 C75.3727161,35.3904362 75.5927401,36.7017872 75.7382609,38.0078128 L74.4703999,38.1542581 Z M6.99710153,42.0541404 L6.720002,42.0483713 C6.71956631,40.7228196 6.79014827,39.4079185 6.92956941,38.1165374 L8.19830182,38.2589887 C8.06410897,39.5024423 7.99614116,40.7703034 7.99614116,42.0261826 L6.99710153,42.0541404 Z M75.8541548,45.9722174 L74.6237632,45.8279909 C74.7614416,44.5747743 74.8694929,43.2953751 74.8694929,42.0261826 L74.8694929,41.7781132 L76.1765662,41.7781132 L76.1765662,42.0261826 C76.1765662,43.3437464 75.9961901,44.6710732 75.8541548,45.9722174 Z M7.58746294,49.906714 C7.30034252,48.6268709 7.08206129,47.31552 6.93741185,46.0090506 L8.20614426,45.8630491 C8.34469402,47.1220347 8.55556851,48.3850143 8.83179665,49.6169298 L7.58746294,49.906714 Z M74.0277378,53.6725766 L72.823052,53.2434475 C73.2330373,52.0496966 73.5807187,50.8182249 73.8560755,49.5827592 L75.1008449,49.8707683 C74.8145959,51.1537177 74.453408,52.4326732 74.0277378,53.6725766 Z M10.1541191,57.3567849 C9.59207757,56.172797 9.09059715,54.9439879 8.66405558,53.7049721 L9.86787002,53.2745117 C10.2795981,54.4678189 10.7619081,55.6509192 11.3026007,56.7909736 L10.1541191,57.3567849 Z M70.6594101,60.7867109 L69.5793319,60.0944242 C70.242018,59.0218234 70.8515498,57.9004075 71.3904997,56.7616845 L72.5402884,57.3270521 C71.9804254,58.5092649 71.347802,59.6737268 70.6594101,60.7867109 Z M14.2870846,64.0324709 C13.4810561,63.0060226 12.7242607,61.9232151 12.0367402,60.8124498 L13.1163827,60.1192755 C13.7786331,61.1887698 14.50798,62.2320815 15.2835101,63.2203653 L14.2870846,64.0324709 Z M65.8245462,66.9564951 L64.9217943,66.03744 C65.8001475,65.1423487 66.6384171,64.1873479 67.4139473,63.1981766 L68.4112441,64.0093947 C67.6065227,65.035843 66.7364476,66.0272332 65.8245462,66.9564951 Z M19.7711282,69.6111487 C18.7625033,68.7919426 17.7887338,67.9057268 16.875961,66.9777962 L17.7782772,66.0578536 C18.6570661,66.9520574 19.5959804,67.8058777 20.5667001,68.5944634 L19.7711282,69.6111487 Z M59.768876,71.8828257 L59.0887622,70.7831547 C60.1392134,70.1090626 61.1639588,69.3666294 62.1346785,68.5767125 L62.9311218,69.5925102 C61.923804,70.4126038 60.8598464,71.1834385 59.768876,71.8828257 Z M26.3343785,73.8132408 C25.1723904,73.2434355 24.029137,72.59952 22.9364238,71.8992453 L23.6156662,70.7986868 C24.6682959,71.4727789 25.7692872,72.0931743 26.8885776,72.6421223 L26.3343785,73.8132408 Z M52.7899763,75.3149706 L52.3677917,74.0874928 C53.5384936,73.6703457 54.700046,73.1790883 55.8202077,72.6279215 L56.3752782,73.79904 C55.211983,74.3710642 54.0055544,74.88096 52.7899763,75.3149706 Z M33.6557314,76.4168604 C32.3961485,76.1261887 31.1404868,75.7591879 29.9222945,75.3256211 L30.3436078,74.0981434 C31.5160525,74.5157343 32.7250952,74.8689781 33.9376235,75.1489992 L33.6557314,76.4168604 Z M45.2320432,77.0687638 L45.0900079,75.7764951 C46.3269349,75.6349313 47.5669117,75.4214762 48.7755187,75.1410113 L49.0591536,76.4093162 C47.8039276,76.6999879 46.5164605,76.9218747 45.2320432,77.0687638 Z M41.3574425,77.28 L41.3400149,77.28 C40.0516763,77.28 38.7541883,77.2116589 37.4837131,77.06832 L37.6240057,75.7782702 C38.8482976,75.9162838 40.0982953,75.9877313 41.3400149,75.9877313 L41.3888123,75.9855125 L41.3574425,77.28 Z\"/> <g transform=\"translate(8.4 16.8)\"> <g transform=\"translate(10.74 .04)\"> <mask id=discover-icon-b fill=#fff> <use xlink:href=#discover-icon-a /> </mask> <path fill=red d=\"M36.3012063,34.95844 C29.3035828,42.207 18.3566803,42.8681733 10.6308209,36.9272933 L4.54530612,43.2305867 C4.1077551,43.68364 3.39011338,43.71972 2.95270748,43.2668133 L0.379501134,40.601 C-0.0579047619,40.1480933 -0.0491972789,39.3778 0.388063492,38.9246 L6.4792381,32.6151467 C0.826485261,24.6636133 1.44152381,13.3182133 8.42550567,6.08402667 C16.1226304,-1.88877333 28.6071293,-1.88393333 36.3043991,6.08916 C44.0016689,14.0622533 43.9984762,26.98564 36.3012063,34.95844 Z M12.5373243,30.7147867 C17.9593288,36.33124 26.7818957,36.33124 32.2040454,30.7149333 C37.6260499,25.0983333 37.6260499,15.9598267 32.2040454,10.3433733 C26.7818957,4.72692 17.9593288,4.72706667 12.5373243,10.3436667 C7.11531973,15.9598267 7.11531973,25.0981867 12.5373243,30.7147867 Z\" mask=url(#discover-icon-b) /> </g> <path fill=#000 fill-opacity=.177 d=\"M11.2203175,38.9643467 C10.7829116,39.4175467 10.7280544,40.18784 11.1650249,40.6407467 L13.7153016,43.30656 C14.1527075,43.7594667 14.9517642,43.7233867 15.3893152,43.2703333 L16.5700499,42.13132 L16.5700499,33.5190533 L11.2203175,38.9643467 Z\"/> <path fill=#FFF fill-opacity=.729 d=\"M43.6031565,31.4378533 C37.8078912,37.44092 28.4119365,37.44092 22.6166712,31.4378533 C16.821551,25.4349333 16.821551,15.7024267 22.6169615,9.6998 C28.4120816,3.69688 37.8078912,3.69688 43.6031565,9.6998 C49.3982766,15.70228 49.3982766,25.4349333 43.6031565,31.4378533\"/> <path fill=#FFF fill-opacity=.073 d=\"M23.2765533,30.7545333 C17.8545488,25.1379333 17.8545488,15.9995733 23.2765533,10.3834133 C28.6985578,4.76681333 37.5211247,4.76666667 42.9432744,10.38312 C48.3652789,15.9995733 48.3652789,25.13808 42.9432744,30.75468 C37.5211247,36.3709867 28.6985578,36.3709867 23.2765533,30.7545333\"/> <path fill=#FBFFFF d=\"M45.6740862,6.76118667 C42.5446168,3.97452 38.6488889,2.34226667 34.5299592,2.08384 C30.4596463,1.82834667 26.32722,3.04670667 22.9757098,5.44294667 C22.2376054,5.97050667 22.9249161,7.23462667 23.6670839,6.70398667 C26.7861043,4.47406667 30.4921542,3.36570667 34.2780227,3.52058667 C38.085805,3.67634667 41.7986757,5.21664 44.6843356,7.78638667 C45.3646803,8.39197333 46.35922,7.37117333 45.6740862,6.76118667\"/> <path fill=#FFF d=\"M43.0402177 28.29508C40.7810612 30.6351467 37.1181134 30.6351467 34.8589569 28.29508 32.5998005 25.9548667 32.5998005 22.1611867 34.8589569 19.8209733 37.1181134 17.4806133 40.7810612 17.4806133 43.0402177 19.8209733 45.2993741 22.1611867 45.2993741 25.9548667 43.0402177 28.29508M42.7776871 15.4494267C42.1575692 16.0915333 41.1524354 16.0915333 40.5324626 15.4491333 39.9124898 14.8070267 39.9124898 13.7659867 40.5324626 13.1237333 41.1524354 12.48148 42.1575692 12.48148 42.777542 13.1240267 43.3973696 13.7661333 43.3976599 14.8071733 42.7776871 15.4494267M12.1614512 37.0727867L0 49.6701333C1.50581406 51.73476 3.21262585 53.63292 5.09097506 55.33308L17.4403628 42.5412533C18.8921905 41.03748 13.613424 35.5693067 12.1614512 37.0727867\"/> <path fill=#FFF d=\"M17.3783946,42.5414 C18.8300771,41.03748 13.5906395,35.5693067 12.1388118,37.0729333 L8.1526712,41.2431067 L8.1526712,52.1793067 L17.3783946,42.5414 Z\"/> <path fill=#CACACA d=\"M18.2321633,43.7714933 C17.8679002,44.1490133 17.2769524,44.1490133 16.9125442,43.7714933 L10.9077188,37.55136 C10.5433107,37.1739867 10.5433107,36.5618 10.9077188,36.1844267 L12.4254331,34.6123067 C12.7898413,34.2349333 13.3807891,34.2349333 13.7450522,34.6123067 L19.7498776,40.83244 C20.114576,41.20996 20.114576,41.8218533 19.7498776,42.19952 L18.2321633,43.7714933 Z\"/> </g> </g> </svg> <span></span> </div> </div> <div class=sm-subunit-start__progress> <div class=sm-subunit-start__progress__title></div> <div class=sm-subunit-start__progress__bar> <div class=sm-color-background-color></div> </div> </div> <div class=sm-subunit-start__start_button_container> <div class=sm-subunit-start__start_button_content--general> <div class=\"sm-subunit-start__start_button sm-button-general--big--arrow sm-color-background-color sm-color-border-color\"> <span>Comenzar</span> <svg width=16px height=16px viewBox=\"0 0 16 16\" version=1.1 style=transform:scaleX(-1) xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> </g> </svg> </div> </div> <div class=sm-subunit-start__start_button_content--flipped> <div class=\"sm-subunit-start__start_button--flipped-casa sm-subunit-start__start_button sm-button-general--big--arrow sm-color-background-color sm-color-border-color\"> <span>Tareas de casa</span> <svg width=16px height=16px viewBox=\"0 0 16 16\" version=1.1 style=transform:scaleX(-1) xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> </g> </svg> </div> <div class=\"sm-subunit-start__start_button--flipped-clase sm-subunit-start__start_button sm-button-general--big--arrow sm-color-background-color sm-color-border-color\"> <span>Tareas de clase</span> <svg width=16px height=16px viewBox=\"0 0 16 16\" version=1.1 style=transform:scaleX(-1) xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> </g> </svg> </div> </div> </div> </div> </div> <div class=sm-subunit-start__actividades style=display:none> <div class=sm-subunit-start__actividades__container> <div class=sm-subunit-start__actividades__content> <div class=sm-subunit-start__actividades__header> <div class=sm-subunit-start__title__actividades>Actividades</div> <div class=\"sm-subunit-start__hr sm-color-background-color\"></div> <div class=\"sm-subunit-start__number sm-color-color\"></div> <div class=sm-subunit-start__title></div> <div class=sm-subunit-start__progress> <div class=sm-subunit-start__progress__title></div> <div class=sm-subunit-start__progress__bar> <div class=sm-color-background-color></div> </div> </div> </div> <div class=sm-subunit-start__actividades__list__container> <div class=sm-subunit-start__actividades__list> </div> </div> </div> </div> </div> <div class=sm-subunit-start__evaluacion> <div class=sm-subunit-start__evaluacion__background></div> <div class=sm-subunit-start__evaluacion__content> <div class=sm-subunit-start__title__evaluacion>Evaluación final</div> <div class=\"sm-subunit-start__hr sm-color-background-color\"></div> <div class=sm-subunit-start__image></div> <div class=\"sm-subunit-start__number sm-color-color\"></div> <div class=sm-subunit-start__title></div> <div class=sm-subunit-start__progress> <div class=sm-subunit-start__progress__title></div> <div class=sm-subunit-start__progress__bar> <div class=sm-color-background-color></div> </div> </div> <div class=sm-subunit-start__start_button_container> <div class=sm-subunit-start__start_button_content--general> <div class=\"sm-subunit-start__start_button sm-button-general--big--arrow sm-color-child-color--hover sm-color-child-color--pressed sm-color-background-color sm-color-border-color sm-color-border-color--hover sm-color-border-color--pressed sm-color-svg-fill--hover sm-color-svg-fill--pressed\"> <span>Comienza evaluación final</span> <svg width=16px height=16px viewBox=\"0 0 16 16\" version=1.1 style=transform:scaleX(-1) xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> </g> </svg> </div> </div> </div> </div> </div> <div class=sm-subunit-start__nav> <div class=sm-subunit-start__nav__actions> <div id=subunit-boton-actividades class=sm-button-subunitnav><span>Actividades</span></div> <div id=subunit-boton-evaluacion-final class=sm-button-subunitnav><span>Evaluación final</span></div> </div> </div> </div>";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();//Templates
var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _debug=__webpack_require__(1);var _subUnitStart=__webpack_require__(17);var _subUnitStart2=_interopRequireDefault(_subUnitStart);var _subUnitStartActivitiesItem=__webpack_require__(16);var _subUnitStartActivitiesItem2=_interopRequireDefault(_subUnitStartActivitiesItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ScreenSubUnitStart=function(){function ScreenSubUnitStart(){_classCallCheck(this,ScreenSubUnitStart);this.state={isVisible:true,tab:'secuencia'//actividades, evaluacion
};this.number={};this.subUnitObject={};this.isEvaluacion=false;}_createClass(ScreenSubUnitStart,[{key:'init',value:function init(subUnitObject,number,isEvaluacion){var _this=this;(0,_debug.cl)("ScreenSubUnitStart.Init");(0,_debug.cl)(subUnitObject,number,isEvaluacion);this.number=number;this.subUnitObject=subUnitObject;this.isEvaluacion=isEvaluacion;document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend',_subUnitStart2.default);var numberString=this.number.toString();while(numberString.length<2){numberString='0'+numberString;}if(!this.isEvaluacion){document.querySelector('.sm-subunit-start').style.backgroundImage='url('+this.subUnitObject.image+')';//Secuencia didáctica
document.querySelector('.sm-subunit-start__secuencia .sm-subunit-start__number').innerHTML=numberString;document.querySelector('.sm-subunit-start__secuencia .sm-subunit-start__title').innerHTML=this.subUnitObject.title;this.updateCompleted();document.querySelector('.sm-subunit-start__secuencia .sm-subunit-start__start_button_content--general .sm-subunit-start__start_button').addEventListener('click',function(){return _this.goFirstBlinkSlide();});//Flipped, and other types
if(subUnitObject.smtype){//Show type
document.querySelector('.sm-subunit-start__type').classList.add('active');//Hide number
document.querySelector('.sm-subunit-start__number').style.display='none';}// Flipped buttons
if(subUnitObject.smtype=='flipped'){document.querySelector('.sm-subunit-start__secuencia__content').classList.add('flipped');document.querySelector('.sm-subunit-start__secuencia .sm-subunit-start__start_button_content--flipped .sm-subunit-start__start_button--flipped-casa').addEventListener('click',function(){return _this.goFirstBlinkSlide();});document.querySelector('.sm-subunit-start__secuencia .sm-subunit-start__start_button_content--flipped .sm-subunit-start__start_button--flipped-clase').addEventListener('click',function(){return _this.goBlinkSlideWithTag('clase');});}var tipoTexto='';switch(subUnitObject.smtype){case'flipped':tipoTexto='Flipped Classroom';break;case'refuerzo':tipoTexto='Refuerzo';break;case'microproyecto':tipoTexto='Microproyecto';break;case'ampliacion':tipoTexto='Ampliación';break;case'teacher':tipoTexto='Teacher Resources';break;case'discover':tipoTexto='Discover';break;default:break;}document.querySelector('.sm-subunit-start__secuencia__content span').innerHTML=tipoTexto;if(document.querySelector('.sm-subunit-start__secuencia__content svg.'+subUnitObject.smtype+'-icon')){document.querySelector('.sm-subunit-start__secuencia__content svg.'+subUnitObject.smtype+'-icon').style.display='inline-block';}// //Flipped, etc
// if(subUnitObject.smtype == 'ampliacion'){
//     document.querySelector('.sm-subunit-start__secuencia__content').classList.add('flipped');
//     document.querySelector('.sm-subunit-start__secuencia .sm-subunit-start__start_button_content--flipped .sm-subunit-start__start_button--flipped-casa').addEventListener('click', () => this.goFirstBlinkSlide());
//     document.querySelector('.sm-subunit-start__secuencia .sm-subunit-start__start_button_content--flipped .sm-subunit-start__start_button--flipped-clase').addEventListener('click', () => this.goBlinkSlideWithTag('clase'));
// }
//Actividades
document.querySelector('.sm-subunit-start__actividades .sm-subunit-start__number').innerHTML=numberString;document.querySelector('.sm-subunit-start__actividades .sm-subunit-start__title').innerHTML=this.subUnitObject.title;//this.updateCompleted(); //it's allready called
_.forEach(subUnitObject.activitiesInTab,function(activity,index){// console.log(activity);
document.querySelector('.sm-subunit-start__actividades__list').insertAdjacentHTML('beforeend',_subUnitStartActivitiesItem2.default);var activityDomElement=document.querySelectorAll('.sm-subunit-start__actividades__list .sm-subunit-start__actividades__item')[index];activityDomElement.querySelector('.sm-subunit-start__actividades__item__icon').classList.add('activity_type_'+activity.type);activityDomElement.querySelector('.sm-subunit-start__actividades__item__type').innerHTML=activity.typeName;activityDomElement.querySelector('.sm-subunit-start__actividades__item__title').innerHTML=activity.titulo;(0,_debug.cl)(activity);activityDomElement.addEventListener('click',function(){_this.onGoToActivityById(activity.ID);});});}else{//Evaluación final
if(this.subUnitObject.image.length>3){(0,_debug.cl)("Tiene imagen");document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__image').style.backgroundImage='url('+this.subUnitObject.image+')';document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__evaluacion__background').style.backgroundImage='url('+this.subUnitObject.image+')';}else{(0,_debug.cl)("No tiene imagen");document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__image').style.backgroundImage='url('+this.subUnitObject.parentSubUnit.image+')';document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__evaluacion__background').style.backgroundImage='url('+this.subUnitObject.parentSubUnit.image+')';}document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__number').innerHTML=numberString;document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__title').innerHTML=this.subUnitObject.title;this.updateCompleted();document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__start_button_content--general .sm-subunit-start__start_button').addEventListener('click',function(){return _this.goFirstBlinkSlide();});}//Añade acciones a los botones tabs
if(subUnitObject.activitiesInTab.length>0){document.getElementById('subunit-boton-actividades').addEventListener('click',this.goTabActividades.bind(this));}else{document.getElementById('subunit-boton-actividades').remove();}//Hide Evaluación final if this subunit has no evaluation inside
if(this.subUnitObject.hasOwnProperty('evaluationSubUnit')){document.getElementById('subunit-boton-evaluacion-final').addEventListener('click',this.goTabEvaluacionFinal.bind(this));}else{document.getElementById('subunit-boton-evaluacion-final').remove();}this.state.isVisible=true;if(this.isEvaluacion){this.showEvaluacion();}}},{key:'show',value:function show(){this.updateCompleted();document.querySelector('.sm-subunit-start').classList.add('active');this.state.isVisible=true;}},{key:'hide',value:function hide(){document.querySelector('.sm-subunit-start').classList.remove('active');this.state.isVisible=false;}},{key:'goTabSecuenciaDidactica',value:function goTabSecuenciaDidactica(){// console.log('goTabSecuenciaDidactica');
document.querySelector('.sm-subunit-start__secuencia').style.display='block';document.querySelector('.sm-subunit-start__actividades').style.display='none';document.querySelector('.navbar-bottom').style.display='block';//Tabs
// document.getElementById('subunit-boton-secuencia-didactica').classList.add('active');
document.querySelector('.sm-subunit-start__nav__actions').style.display='block';// document.getElementById('subunit-boton-evaluacion-final').classList.remove('active');
this.state.tab='secuencia';}},{key:'goTabActividades',value:function goTabActividades(){(0,_debug.cl)("goTabActividades");this.updateCompleted();// console.log('goTabSecuenciaDidactica');
document.querySelector('.sm-subunit-start__secuencia').style.display='none';document.querySelector('.sm-subunit-start__actividades').style.display='block';document.querySelector('.navbar-bottom').style.display='none';//Tabs
// document.getElementById('subunit-boton-secuencia-didactica').classList.remove('active');
document.querySelector('.sm-subunit-start__nav__actions').style.display='none';this.state.tab='actividades';}},{key:'goTabEvaluacionFinal',value:function goTabEvaluacionFinal(){document.location.href=this.subUnitObject.evaluationSubUnit.url;}//FROM EVALUACION
},{key:'showEvaluacion',value:function showEvaluacion(){(0,_debug.cl)("Mostrando evaluación");document.querySelector('.sm-subunit-start__secuencia').style.display='none';document.querySelector('.sm-subunit-start__evaluacion').style.display='block';document.querySelector('.sm-subunit-start__nav__actions').style.display='none';this.state.tab='evaluacion';}},{key:'updateCompleted',value:function updateCompleted(){//Update copmpletado
(0,_debug.cl)("updateCompleted()");var urlSeguimiento='/include/javascript/seguimientoCurso.js.php?idcurso='+idcurso;if(typeof loadScript==='function'){//If is blink enviroment
loadScript(urlSeguimiento,true,function(){if(window.actividades[this.subUnitObject.id]){if(window.actividades[this.subUnitObject.id].hasOwnProperty('avance')){this.subUnitObject.completado=parseInt(window.actividades[this.subUnitObject.id].avance);}}this.updateCompletedFillData();}.bind(this));}else{this.updateCompletedFillData();}this.updateCompletedFillData();}},{key:'updateCompletedFillData',value:function updateCompletedFillData(){//Secuencia
var completedSecuencia=this.subUnitObject.completado||0;document.querySelector('.sm-subunit-start__secuencia .sm-subunit-start__progress__title').innerHTML=completedSecuencia+'% completado';document.querySelector('.sm-subunit-start__secuencia .sm-subunit-start__progress__bar .sm-color-background-color').style.width=completedSecuencia+'%';//ACtividades
document.querySelector('.sm-subunit-start__actividades .sm-subunit-start__progress__title').innerHTML=completedSecuencia+'% completado';document.querySelector('.sm-subunit-start__actividades .sm-subunit-start__progress__bar .sm-color-background-color').style.width=completedSecuencia+'%';//Evaluacion
document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__progress__title').innerHTML=completedSecuencia+'% completado';document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__progress__bar .sm-color-background-color').style.width=completedSecuencia+'%';}}]);return ScreenSubUnitStart;}();exports.default=ScreenSubUnitStart;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<li class=\"slider-indicator sm-color-background-color--active sm-color-border-color--active sm-big sm-end\">Fin</li>";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<li class=\"slider-indicator sm-color-background-color--active sm-color-border-color--active sm-big sm-start\">Inicio</li>";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<div class=sm-slider-indicator-arrow-right> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> </div>";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<div class=sm-slider-indicator-arrow-left> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> </div>";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.getCoords=getCoords;function getCoords(elem){// crossbrowser version
var box=elem.getBoundingClientRect();var body=document.body;var docEl=document.documentElement;var scrollTop=window.pageYOffset||docEl.scrollTop||body.scrollTop;var scrollLeft=window.pageXOffset||docEl.scrollLeft||body.scrollLeft;var clientTop=docEl.clientTop||body.clientTop||0;var clientLeft=docEl.clientLeft||body.clientLeft||0;var top=box.top+scrollTop-clientTop;var left=box.left+scrollLeft-clientLeft;return{top:Math.round(top),left:Math.round(left)};}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();//Templates
var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _animejs=__webpack_require__(4);var _animejs2=_interopRequireDefault(_animejs);var _responsiveStatus=__webpack_require__(3);var _responsiveStatus2=_interopRequireDefault(_responsiveStatus);var _getCoords=__webpack_require__(23);var _sliderIndicatorArrowLeft=__webpack_require__(22);var _sliderIndicatorArrowLeft2=_interopRequireDefault(_sliderIndicatorArrowLeft);var _sliderIndicatorArrowRight=__webpack_require__(21);var _sliderIndicatorArrowRight2=_interopRequireDefault(_sliderIndicatorArrowRight);var _sliderIndicatorStartButton=__webpack_require__(20);var _sliderIndicatorStartButton2=_interopRequireDefault(_sliderIndicatorStartButton);var _sliderIndicatorEndButton=__webpack_require__(19);var _sliderIndicatorEndButton2=_interopRequireDefault(_sliderIndicatorEndButton);var _debug=__webpack_require__(1);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ScreenSubUnitIndicators=function(){function ScreenSubUnitIndicators(){_classCallCheck(this,ScreenSubUnitIndicators);this.state={started:false,contentLeft:0,//tablet y mobile
contentTop:0,//desktop
isStartSlide:false,isEndSlide:false,blinkSlidesLength:0};this.subunit={};this.line=null;this.lines=null;}_createClass(ScreenSubUnitIndicators,[{key:'init',value:function init(subunit){var _this2=this;// if(config.dev)
//     console.log("ScreenSubUnitIndicators.Init");
if(!this.started){var _this=this;this.responsiveStatus=new _responsiveStatus2.default();this.subunit=subunit;//Apply book colors with class
var slidesNavbarButtons=document.querySelectorAll('.navbar-bottom ol.slider-indicators li.slider-indicator');this.state.blinkSlidesLength=slidesNavbarButtons.length;slidesNavbarButtons.forEach(function(slideButton,index){slideButton.classList.add('sm-color-background-color--active');slideButton.classList.add('sm-color-border-color--active');// Add id to buttons (for launching activities)
var indexNumber=slideButton.getAttribute('data-go-to');(0,_debug.cl)(_this2.subunit.sections);(0,_debug.cl)(_this2.subunit.sections[parseInt(indexNumber)]);if(indexNumber!=null){if(_this2.subunit.hasOwnProperty('sections')){if(_this2.subunit.sections.hasOwnProperty(parseInt(indexNumber))){slideButton.setAttribute('data-sm-slide-id',_this2.subunit.sections[parseInt(indexNumber)].ID);}}}});// Add start and end buttons
document.querySelector('.navbar-bottom .slider-indicators').insertAdjacentHTML('afterbegin',_sliderIndicatorStartButton2.default);document.querySelector('.navbar-bottom .slider-indicators').insertAdjacentHTML('beforeend',_sliderIndicatorEndButton2.default);document.querySelector('.navbar-bottom .slider-indicators .sm-start').addEventListener('click',this.onStartButtonClick.bind(this),false);document.querySelector('.navbar-bottom .slider-indicators .sm-end').addEventListener('click',this.onEndButtonClick.bind(this),false);// Add arrows
document.querySelector('.navbar-bottom').insertAdjacentHTML('afterbegin',_sliderIndicatorArrowLeft2.default);document.querySelector('.navbar-bottom').insertAdjacentHTML('beforeend',_sliderIndicatorArrowRight2.default);document.querySelector('.navbar-bottom .sm-slider-indicator-arrow-left').addEventListener('click',this.onArrowLeftClick.bind(this),false);document.querySelector('.navbar-bottom .sm-slider-indicator-arrow-right').addEventListener('click',this.onArrowRightClick.bind(this),false);$('#swipeview-slider').on('swipe',function(event,data){if(data.direction=='right'){_this.onArrowLeftClick(true);}else if(data.direction=='left'){_this.onArrowRightClick(true);}});//Add event to buttons to center focused
var sliderIndicatorButtons=document.querySelectorAll('.navbar-bottom .slider-indicators .slider-indicator');_.forEach(sliderIndicatorButtons,function(button){if(!button.classList.contains('sm-big')){//Si no es botón de inicio o final
button.addEventListener('click',function(e){_this.onSliderIndicatorClick(e.currentTarget);});}});//Left and right slider (blink) buttons
// const leftSliderControlButton = document.querySelector('.left.slider-control');
// const rightSliderControlButton = document.querySelector('.right.slider-control');
// leftSliderControlButton.addEventListener('click', (e) => {
//     const activeSliderIndicatorButton = document.querySelector('.navbar-bottom ol.slider-indicators .slider-indicator.active');
//     const prevButton = activeSliderIndicatorButton.previousElementSibling;
//     if(prevButton){
//         _this.onSliderIndicatorClick(prevButton);
//     }
// });
// rightSliderControlButton.addEventListener('click', (e) => {
//     const activeSliderIndicatorButton = document.querySelector('.navbar-bottom ol.slider-indicators .slider-indicator.active');
//     const nextButton = activeSliderIndicatorButton.nextElementSibling;
//     if(nextButton){
//         _this.onSliderIndicatorClick(nextButton);
//     }
// });
//Inctercept blink slide arrow buttons
// $('.left.slider-control').on('click', function() {
//     console.log("Left");
//     console.log(blink.activity.currentSection);
//     // comprobar si es la primera y mostrar la slide inicio
// })
// $('.right.slider-control').on('click', function() {
//     console.log("right");
//     console.log(blink.activity.currentSection);
//     // comprobar si es la última y mostrar la slide fin
// });
//Create line
this.linesContainer=document.createElement('div');this.linesContainer.setAttribute('class','slider-indicators__lines_container');document.querySelector('.navbar-bottom').insertBefore(this.linesContainer,document.querySelector('.navbar-bottom').firstChild);this.lines={};var buttons=document.querySelectorAll('.navbar-bottom ol.slider-indicators li');// for (let index =  0; index < buttons.length; index++) {
_.forEach(buttons,function(button,index){var indexNumber=button.getAttribute('data-go-to');if(indexNumber!=null){if(_this2.subunit.hasOwnProperty('sections')){if(_this2.subunit.sections.hasOwnProperty(parseInt(indexNumber))){var isMultimedia=_this2.subunit.sections[parseInt(indexNumber)].type==7;if(isMultimedia){_this2.lines[index]=document.createElement('div');_this2.lines[index].setAttribute('class','slider-indicators__lines__line');document.querySelector('.navbar-bottom .slider-indicators__lines_container').appendChild(_this2.lines[index]);}}}}});//Create lines
this.line=document.createElement('div');this.line.setAttribute('class','slider-indicators__line');document.querySelector('.navbar-bottom').insertBefore(this.line,document.querySelector('.navbar-bottom').firstChild);//Refresh on resize
window.addEventListener('resize',this.update.bind(this),false);//Start start page
this.onStartButtonClick();// this.removeActivitiesSlides();
this.started=true;}this.update();}// removeActivitiesSlides(){
// //Remove Buttons
// const buttons = document.querySelectorAll('.slider-indicators .slider-indicator');
// const itemsToRemove = [];
// if(buttons.length>0){
//     for (let indexButton = 0; indexButton < buttons.length; indexButton++) {
//         const button = buttons[indexButton];
//         for (let indexActivity = 0; indexActivity < this.subunit.activitiesInTab.length; indexActivity++) {
//             const activity = this.subunit.activitiesInTab[indexActivity];
//             if(parseInt(button.getAttribute('data-go-to')) + 1 == activity.page){
//                 itemsToRemove.push(button);
//             }
//         }
//     }
// }
// for (let indexButton = 0; indexButton < itemsToRemove.length; indexButton++) {
//     const button = itemsToRemove[indexButton];
//     // button.remove();
//     button.style.display = 'none';
// }
// const buttonsCleaned = document.querySelectorAll('.slider-indicators .slider-indicator');
// if(buttonsCleaned.length>0){
//     let counter = 0;
//     for (let indexButton = 0; indexButton < buttonsCleaned.length; indexButton++) {
//         const button = buttonsCleaned[indexButton];
//         if(button.getAttribute('data-go-to')){
//             counter++;
//             button.innerHTML = counter;
//         }
//     }
// }
// }
},{key:'update',value:function update(){var navBar=document.querySelector('.navbar-bottom');var olList=document.querySelector('.navbar-bottom ol.slider-indicators');var buttons=document.querySelectorAll('.navbar-bottom ol.slider-indicators li');var activeButton=document.querySelector('.navbar-bottom ol.slider-indicators li.active');var activeButtonIndex=parseInt(activeButton.getAttribute('data-go-to'));if(activeButton.classList.contains('sm-start')){activeButtonIndex=-1;}if(activeButton.classList.contains('sm-end')){activeButtonIndex=buttons.length-2;}var windowSize=this.responsiveStatus.getSize();var buttonsInMiddle=1;// mobile
if(windowSize!='desktop'){if(windowSize=='mobile'){}else if(windowSize=='tablet-portrait'){buttonsInMiddle=5;}else if(windowSize=='tablet-landscape'){buttonsInMiddle=6;}}else{var huecoHeight=document.querySelector('ol.slider-indicators').offsetHeight-80;if(huecoHeight>450){buttonsInMiddle=2;}if(huecoHeight>600){buttonsInMiddle=4;}if(huecoHeight>800){buttonsInMiddle=6;}}for(var index=-1;index<buttons.length-1;index++){var button=buttons[index+1];//If is not start or end
if(!button.classList.contains('sm-big')){//If active is on 4 first numbers
if(activeButtonIndex<=1+buttonsInMiddle){if(index<=2*buttonsInMiddle+1){//número 4
button.style.display='inline-block';}else{button.style.display='none';}}else if(activeButtonIndex<buttons.length-2-(buttonsInMiddle+2)){if(index>=activeButtonIndex-buttonsInMiddle&&index<=activeButtonIndex+buttonsInMiddle){button.style.display='inline-block';}else{button.style.display='none';}}else{if(index>=buttons.length-(5+2*buttonsInMiddle)){//número 4
button.style.display='inline-block';}else{button.style.display='none';}}if(index==0||index==buttons.length-3){button.style.display='inline-block';}}}//Add spaces
var marginRight=6+8*2;//mobile
var marginBottom=0;//mobile
if(windowSize=='tablet-portrait'){marginRight=10+8*3;}else if(windowSize=='tablet-landscape'){marginRight=10+8*3;}else if(windowSize=='desktop'){marginRight=0;marginBottom=48;}for(var _index=0;_index<buttons.length-3;_index++){var _button=buttons[_index];var buttonNext=buttons[_index+1];if(!(_button.classList.contains('sm-start')||_button.classList.contains('sm-end'))){if(_button.style.display=='inline-block'&&buttonNext.style.display=='none'){_button.style.marginRight=marginRight+'px';_button.style.marginBottom=marginBottom+'px';}else{_button.style.marginRight=null;_button.style.marginBottom=null;}}}//Linea
var startButton=document.querySelector('.navbar-bottom ol.slider-indicators li.sm-start');var endButton=document.querySelector('.navbar-bottom ol.slider-indicators li.sm-end');if(windowSize!='desktop'){this.line.style.top=null;this.line.style.bottom=null;this.line.style.left=startButton.offsetLeft+olList.offsetLeft+buttons[0].offsetWidth+'px';this.line.style.right=navBar.offsetWidth-endButton.offsetLeft-olList.offsetLeft+'px';}else{this.line.style.top=startButton.offsetTop+olList.offsetTop+buttons[0].offsetHeight+'px';this.line.style.bottom=navBar.offsetHeight-endButton.offsetTop-olList.offsetTop+'px';this.line.style.left=null;this.line.style.right=null;}//Lineas
_.forEach(this.lines,function(o,i){if(windowSize!='desktop'){var posLeft=buttons[i].offsetLeft;if(buttons[i].style.display=='inline-block'){o.style.display='block';o.style.left=posLeft+buttons[i].offsetWidth*0.5-1+'px';o.style.top=null;}else{o.style.display='none';}}else{var posTop=buttons[i].offsetTop;if(buttons[i].style.display=='inline-block'){o.style.display='block';o.style.top=posTop+buttons[i].offsetHeight*0.5-1+'px';o.style.left=null;}else{o.style.display='none';}}});//Update activities content
if(typeof this.activitiContentUpdate=='function'){this.activitiContentUpdate();}//Check arrows state
//Left arrow
if(this.state.isStartSlide){document.querySelector('.sm-slider-indicator-arrow-left').classList.add('disabled');}else{document.querySelector('.sm-slider-indicator-arrow-left').classList.remove('disabled');}//Right arrow
if(this.state.isEndSlide){document.querySelector('.sm-slider-indicator-arrow-right').classList.add('disabled');}else{document.querySelector('.sm-slider-indicator-arrow-right').classList.remove('disabled');}}},{key:'onArrowLeftClick',value:function onArrowLeftClick(dontExecuteActionInSlide){var executeActionInSlide=!(dontExecuteActionInSlide===true);// document.querySelectorAll('.slider-indicators li').forEach((element) => {
//         element.classList.remove('active');
// });
if(this.state.isEndSlide){blink.activity.currentSection=this.state.blinkSlidesLength-1;}if(!this.state.isStartSlide){//If is the first slide (0)
if(blink.activity.currentSection==0&&!this.state.isEndSlide){this.onStartButtonClick();}else{// document.querySelector(`.slider-indicators li[data-go-to="${blink.activity.currentSection-1}"]`).classList.add('active');
if(this.state.isEndSlide){//If is in start button, goes to slide 0
document.querySelector('.slider-indicators li[data-go-to="'+(this.state.blinkSlidesLength-1)+'"]').classList.add('active');this.onSliderIndicatorClick(document.querySelector('.slider-indicators li[data-go-to="'+(this.state.blinkSlidesLength-1)+'"]'));document.querySelector('.slider-indicators li[data-go-to="'+(this.state.blinkSlidesLength-1)+'"]').click();}else{document.querySelector('.slider-indicators li[data-go-to="'+(blink.activity.currentSection-1)+'"]').classList.add('active');this.onSliderIndicatorClick(document.querySelector('.slider-indicators li[data-go-to="'+(blink.activity.currentSection-1)+'"]'));if(executeActionInSlide){document.querySelector('.left.slider-control').click();}}}this.state.isEndSlide=false;this.onEndHide();this.update();}}},{key:'onArrowRightClick',value:function onArrowRightClick(dontExecuteActionInSlide){var executeActionInSlide=!(dontExecuteActionInSlide===true);// document.querySelectorAll('.slider-indicators li').forEach((element) => {
//     element.classList.remove('active');
// });
if(this.state.isStartSlide){blink.activity.currentSection=0;}if(!this.state.isEndSlide){//If is the last slide
if(blink.activity.currentSection==this.state.blinkSlidesLength-1&&!this.state.isStartSlide){this.onEndButtonClick();}else{// document.querySelector(`.slider-indicators li[data-go-to="${blink.activity.currentSection+1}"]`).classList.add('active');
if(this.state.isStartSlide){//If is in start button, goes to slide 0
document.querySelector('.slider-indicators li[data-go-to="0"]').classList.add('active');this.onSliderIndicatorClick(document.querySelector('.slider-indicators li[data-go-to="0"]'));document.querySelector('.slider-indicators li[data-go-to="0"]').click();}else{document.querySelector('.slider-indicators li[data-go-to="'+(blink.activity.currentSection+1)+'"]').classList.add('active');this.onSliderIndicatorClick(document.querySelector('.slider-indicators li[data-go-to="'+(blink.activity.currentSection+1)+'"]'));if(executeActionInSlide){document.querySelector('.right.slider-control').click();}}}this.state.isStartSlide=false;this.onStartHide();this.update();}}},{key:'onStartButtonClick',value:function onStartButtonClick(){if(!this.state.isStartSlide){document.querySelectorAll('.slider-indicators li').forEach(function(element){element.classList.remove('active');});document.querySelector('.slider-indicators .sm-start').classList.add('active');this.state.isEndSlide=false;this.state.isStartSlide=true;blink.activity.currentSection=0;//External function
this.onStartShow();this.onEndHide();this.update();}}},{key:'onEndButtonClick',value:function onEndButtonClick(){if(!this.state.isEndSlide){document.querySelectorAll('.slider-indicators li').forEach(function(element){element.classList.remove('active');});document.querySelector('.slider-indicators .sm-end').classList.add('active');this.state.isStartSlide=false;this.state.isEndSlide=true;blink.activity.currentSection=this.state.blinkSlidesLength-1;//External function
this.onEndShow();this.onStartHide();this.update();}}// jumpTo(nextContentPoint){
//     const windowSize = this.responsiveStatus.getSize();
//     if(windowSize == 'desktop'){
//         var nextContentTop = this.contentTopLimit(nextContentPoint);
//         const _this = this;
//         anime(
//             {
//                 targets: _this.state,
//                 contentTop: nextContentTop,
//                 duration: config.velocityTransitions,
//                 easing: config.easingTransitionOut,
//                 round: 1,
//                 update: function() {
//                     _this.update();
//                 }
//             }
//         );
//     } else {
//         var nextContentLeft = this.contentLeftLimit(nextContentPoint);
//         const _this = this;
//         anime(
//             {
//                 targets: _this.state,
//                 contentLeft: nextContentLeft,
//                 duration: config.velocityTransitions,
//                 easing: config.easingTransitionOut,
//                 round: 1,
//                 update: function() {
//                     _this.update();
//                 }
//             }
//         );
//     }
// }
},{key:'onSliderIndicatorClick',value:function onSliderIndicatorClick(activeButton){(0,_debug.cl)("onSliderIndicatorClick");document.querySelectorAll('.slider-indicators li').forEach(function(element){if(activeButton!=element){element.classList.remove('active');}else{element.classList.add('active');}});this.state.isStartSlide=false;this.onStartHide();this.onEndHide();this.state.isEndSlide=false;this.update();//Check if active is not visible
// if(this.isOutside(activeButton)){
//     const windowSize = this.responsiveStatus.getSize();
//     if(windowSize == 'desktop'){
//         const activeButtonHeight = activeButton.clientHeight;
//         const activeButtonOffsetCenter = activeButton.offsetTop + (activeButtonHeight * 0.5);
//         const container = document.querySelector('.navbar-bottom');
//         const containerHeight = container.clientHeight;
//         const containerHeightCenter = containerHeight*0.5;
//         const nextContentTop = containerHeightCenter - activeButtonOffsetCenter;
//         this.jumpTo(nextContentTop);
//     } else {
//         const activeButtonWidth = activeButton.clientWidth;
//         const activeButtonOffsetCenter = activeButton.offsetLeft + (activeButtonWidth * 0.5);
//         const container = document.querySelector('.navbar-bottom');
//         const containerWidth = container.clientWidth;
//         const containerWidthCenter = containerWidth*0.5;
//         const nextContentLeft = containerWidthCenter - activeButtonOffsetCenter;
//         this.jumpTo(nextContentLeft);
//     }
// }
}// isOutside(activeButton){
//     const windowSize = this.responsiveStatus.getSize();
//     if(windowSize == 'desktop'){
//         let navbarHeight = 0;
//         if(document.querySelectorAll('.navbar').length){
//             navbarHeight = document.querySelector('.navbar').clientHeight;
//         }
//         const activeButtonHeight = activeButton.clientHeight;
//         const topPos = getCoords(activeButton).top - navbarHeight;
//         const container = document.querySelector('.navbar-bottom');
//         const containerHeight = container.clientHeight;
//         return (topPos < 50 || topPos + activeButtonHeight > containerHeight - 50 );
//     } else {
//         const activeButtonWidth = activeButton.clientWidth;
//         const leftPos = getCoords(activeButton).left;
//         const container = document.querySelector('.navbar-bottom');
//         const containerWidth = container.clientWidth;
//         return (leftPos < 20 || leftPos + activeButtonWidth > containerWidth - 20 );
//     }
// }
//Be sure this.state.contentLeft is not ouuside limit
// contentLeftLimit(nextContentLeft){
//     const container = document.querySelector('.navbar-bottom');
//     const content = document.querySelector('.navbar-bottom ol.slider-indicators');
//     const containerWidth = container.clientWidth;
//     const contentWidth = content.clientWidth;
//     //Be sure this.state.contentLeft is not ouuside limit
//     nextContentLeft = nextContentLeft <= 0 ? nextContentLeft : 0;
//     nextContentLeft = contentWidth + nextContentLeft > containerWidth ? nextContentLeft : containerWidth - contentWidth;
//     return nextContentLeft;
// }
// contentTopLimit(nextContentTop){
//     const container = document.querySelector('.navbar-bottom');
//     const content = document.querySelector('.navbar-bottom ol.slider-indicators');
//     const containerHeight = container.clientHeight;
//     const contentHeight = content.clientHeight;
//     //Be sure this.state.contentTop is not outside limit
//     nextContentTop = nextContentTop <= 0 ? nextContentTop : 0;
//     nextContentTop = contentHeight + nextContentTop > containerHeight ? nextContentTop : containerHeight - contentHeight;
//     return nextContentTop;
// }
},{key:'goFirstBlinkSlide',value:function goFirstBlinkSlide(){document.querySelector('.slider-indicators li[data-go-to="0"]').click();this.onSliderIndicatorClick(document.querySelector('.slider-indicators li[data-go-to="0"]'));}},{key:'goBlinkSlideWithTag',value:function goBlinkSlideWithTag(tag){(0,_debug.cl)(tag);}}]);return ScreenSubUnitIndicators;}();exports.default=ScreenSubUnitIndicators;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _ScreenSubUnitSliderIndicators=__webpack_require__(24);var _ScreenSubUnitSliderIndicators2=_interopRequireDefault(_ScreenSubUnitSliderIndicators);var _ScreenSubUnitStart=__webpack_require__(18);var _ScreenSubUnitStart2=_interopRequireDefault(_ScreenSubUnitStart);var _ScreenSubUnitEnd=__webpack_require__(15);var _ScreenSubUnitEnd2=_interopRequireDefault(_ScreenSubUnitEnd);var _Activities=__webpack_require__(13);var _Activities2=_interopRequireDefault(_Activities);var _subUnitBackButton=__webpack_require__(11);var _subUnitBackButton2=_interopRequireDefault(_subUnitBackButton);var _debug=__webpack_require__(1);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ScreenSubUnit=function(){function ScreenSubUnit(){_classCallCheck(this,ScreenSubUnit);this.state={started:false,inActivity:false};this.number={};this.subUnitObject={};this.unit={};this.book={};this.isEvaluacion=false;}_createClass(ScreenSubUnit,[{key:'init',value:function init(subUnitObject,number,unit,book,isEvaluacion){var _this=this;if(_config2.default.dev)console.log("ScreenSubUnit.Init");if(_config2.default.dev)console.log(subUnitObject,number,unit,book,isEvaluacion);if(_config2.default.dev)console.log("¿Es evaluación? "+(isEvaluacion?"Sí":"No"));if(!this.started){this.number=number;this.subUnitObject=subUnitObject;this.unit=unit;this.book=book;this.isEvaluacion=isEvaluacion;this.screenSubUnitStart=new _ScreenSubUnitStart2.default();this.screenSubUnitEnd=new _ScreenSubUnitEnd2.default();this.screenSubUnitIndicators=new _ScreenSubUnitSliderIndicators2.default();//StartPage
this.screenSubUnitStart.init(this.subUnitObject,this.number,this.isEvaluacion);this.screenSubUnitStart.goFirstBlinkSlide=function(){return _this.screenSubUnitIndicators.goFirstBlinkSlide();};// this.screenSubUnitStart.goBlinkSlideWithTag = ()  => this.screenSubUnitIndicators.goBlinkSlideWithTag();
this.screenSubUnitStart.goBlinkSlideWithTag=function(tag){return _this.screenSubUnitIndicators.goBlinkSlideWithTag(tag);};this.screenSubUnitStart.onGoToActivity=this.onGoToActivity.bind(this);this.screenSubUnitStart.onGoToActivityById=this.onGoToActivityById.bind(this);//EndPage
this.screenSubUnitEnd.init(this.subUnitObject);this.screenSubUnitEnd.onStartButtonClick=function(){return _this.screenSubUnitIndicators.onStartButtonClick();};// this.screenSubUnitEnd.goLastBlinkSlide = ()  => this.screenSubUnitIndicators.goLastBlinkSlide();
//Navigation
this.screenSubUnitIndicators.onStartShow=function(){return _this.screenSubUnitStart.show();};this.screenSubUnitIndicators.onStartHide=function(){return _this.screenSubUnitStart.hide();};this.screenSubUnitIndicators.onEndShow=function(){return _this.screenSubUnitEnd.show();};this.screenSubUnitIndicators.onEndHide=function(){return _this.screenSubUnitEnd.hide();};this.screenSubUnitIndicators.init(this.subUnitObject);//backButton
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend',_subUnitBackButton2.default);document.querySelector('.sm-subunit-backbutton').addEventListener('click',this.onBackButtonClick.bind(this));//Activities
this.activities=new _Activities2.default();this.screenSubUnitIndicators.activitiContentUpdate=this.activities.update;//If numSec exists, go to this page.
if(numSec>0){this.goTopSlide(numSec);}}this.started=true;}},{key:'onGoToActivity',value:function onGoToActivity(page){this.state.inActivity=true;document.querySelector('.slider-indicators li[data-go-to="'+(parseInt(page)-1)+'"]').click();}},{key:'onGoToActivityById',value:function onGoToActivityById(ID){this.state.inActivity=true;document.querySelector('.slider-indicators li[data-sm-slide-id="'+ID+'"]').click();}},{key:'goTopSlide',value:function goTopSlide(slideNumber){document.querySelector('.slider-indicators li[data-go-to="'+(parseInt(slideNumber)-1)+'"]').click();}},{key:'onBackButtonClick',value:function onBackButtonClick(){if(!this.isEvaluacion){// Chec if we are in secuencia o actividades
if(this.state.inActivity){this.state.inActivity=false;this.screenSubUnitStart.show();this.screenSubUnitStart.goTabActividades();}else if(this.screenSubUnitStart.state.tab=='actividades'){this.screenSubUnitIndicators.onStartButtonClick();this.screenSubUnitStart.goTabSecuenciaDidactica();}else if(!this.screenSubUnitStart.state.isVisible){this.screenSubUnitIndicators.onStartButtonClick();}else{document.location.href=this.book.url+'#unit_'+this.unit.id;}}else{if(!this.screenSubUnitStart.state.isVisible){this.screenSubUnitIndicators.onStartButtonClick();}else{document.location.href=''+this.subUnitObject.parentSubUnit.url;}}}}]);return ScreenSubUnit;}();exports.default=ScreenSubUnit;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "<div id=sm-left-menu__background></div> <div id=sm-left-menu> <div class=\"sm-left-menu--level1 sm-color-background-color_before\"> <div class=sm-left-menu--image></div> <div class=sm-left-menu--title></div> <div class=sm-left-menu--arrow> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=10 height=16 viewBox=\"0 0 10 16\"> <path d=\"M0.413623017,0.411885438 C0.968407485,-0.137295146 1.8619621,-0.137295146 2.41674657,0.411885438 L10,7.91854035 L2.41674657,15.4251953 C1.8619621,15.9743759 0.968407485,15.9743759 0.413623017,15.4251953 C0.410269289,15.4218754 0.406932428,15.4185386 0.403612562,15.4151849 C-0.138421122,14.8676249 -0.13394118,13.9843347 0.413618791,13.442301 L5.99369679,7.91854035 L0.413618791,2.39477968 C0.410265077,2.39145982 0.40692823,2.38812296 0.403608378,2.38476923 C-0.138422971,1.83720695 -0.133939265,0.953916788 0.413623017,0.411885438 Z\"/> </svg> </div> </div> <a class=\"sm-left-menu--level2 sm-color-background-color_before sm-color-child-color--hover sm-color-child-color--active\"> <div class=sm-left-menu--image></div> <div class=sm-left-menu--title></div> <div class=sm-left-menu--arrow> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=10 height=16 viewBox=\"0 0 10 16\"> <path d=\"M0.413623017,0.411885438 C0.968407485,-0.137295146 1.8619621,-0.137295146 2.41674657,0.411885438 L10,7.91854035 L2.41674657,15.4251953 C1.8619621,15.9743759 0.968407485,15.9743759 0.413623017,15.4251953 C0.410269289,15.4218754 0.406932428,15.4185386 0.403612562,15.4151849 C-0.138421122,14.8676249 -0.13394118,13.9843347 0.413618791,13.442301 L5.99369679,7.91854035 L0.413618791,2.39477968 C0.410265077,2.39145982 0.40692823,2.38812296 0.403608378,2.38476923 C-0.138422971,1.83720695 -0.133939265,0.953916788 0.413623017,0.411885438 Z\"/> </svg> </div> </a> </div>";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(27);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(6)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
    var this$1 = this;

  for (var name in this$1.handlers) {
    this$1.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

var processScrollDiff = function(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
};

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

var updateGeometry = function(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);

  i.containerWidth = element.clientWidth;
  i.containerHeight = element.clientHeight;
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt(i.railXWidth * i.containerWidth / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      (i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt(i.railYHeight * i.containerHeight / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      roundedScrollTop *
        (i.railYHeight - i.scrollbarYHeight) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
};

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

var clickRail = function(i) {
  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
};

var dragThumb = function(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
};

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    startingScrollTop = element[scrollTop];
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
    e.preventDefault();
  });
}

var keyboard = function(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
};

var wheel = function(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
};

var touch = function(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
};

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this$1.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
          ? 'end'
          : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
          ? 'end'
          : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (PerfectScrollbar);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();//Scroll for left menu
//Templates
var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _animejs=__webpack_require__(4);var _animejs2=_interopRequireDefault(_animejs);var _perfectScrollbar=__webpack_require__(29);var _perfectScrollbar2=_interopRequireDefault(_perfectScrollbar);__webpack_require__(28);var _leftMenu=__webpack_require__(26);var _leftMenu2=_interopRequireDefault(_leftMenu);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var LeftMenu=function(){function LeftMenu(data,subunitIdLoaded){_classCallCheck(this,LeftMenu);this.state={unitSelected:null,subunitSelected:null};this.data=data;this.perfectScrollbar=null;this.subunitIdLoaded=subunitIdLoaded;this.fillData();}_createClass(LeftMenu,[{key:'fillData',value:function fillData(){var _this=this;document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend',_leftMenu2.default);var level1DomElement=document.querySelector('#sm-left-menu .sm-left-menu--level1');var level2DomElement=document.querySelector('#sm-left-menu .sm-left-menu--level2');document.querySelector('#sm-left-menu .sm-left-menu--level1').remove();document.querySelector('#sm-left-menu .sm-left-menu--level2').remove();var ulLevel1DomElement=document.createElement('ul');//Units
this.data.units.forEach(function(unit){var unitElement=level1DomElement.cloneNode(true);unitElement.querySelector('.sm-left-menu--image').style.backgroundImage='url('+unit.image+')';unitElement.querySelector('.sm-left-menu--title').innerHTML='<span>'+('0'+unit.numberformenu).slice(-2)+'</span> '+unit.title;unitElement.addEventListener('click',_this.toggleUnit.bind(_this));var liElement=document.createElement('li');liElement.appendChild(unitElement);//Subunits
var suUlElement=document.createElement('ul');//Is we are in subunit page
var isLoadedSubunitIncluded=false;unit.subunitsmain.forEach(function(subunit,index){var subUnitElement=level2DomElement.cloneNode(true);if(subunit.image){subUnitElement.querySelector('.sm-left-menu--image').style.backgroundImage='url('+subunit.image+')';}subUnitElement.querySelector('.sm-left-menu--title').innerHTML='<span>'+('0'+(index+1)).slice(-2)+'</span> '+subunit.title;subUnitElement.setAttribute('href',subunit.url);if(_this.subunitIdLoaded==subunit.id){subUnitElement.classList.add('active');isLoadedSubunitIncluded=true;}var suLiElement=document.createElement('li');suLiElement.appendChild(subUnitElement);suUlElement.appendChild(suLiElement);});liElement.appendChild(suUlElement);if(isLoadedSubunitIncluded){unitElement.classList.add('active');}ulLevel1DomElement.appendChild(liElement);});document.querySelector('#sm-left-menu').appendChild(ulLevel1DomElement);document.querySelector('#sm-left-menu__background').addEventListener('click',this.closeMenu);this.perfectScrollbar=new _perfectScrollbar2.default('#sm-left-menu',{// wheelSpeed: 2,
// wheelPropagation: true,
minScrollbarLength:20});}},{key:'toggleUnit',value:function toggleUnit(e){var _this2=this;//If is active
var target=e.currentTarget;if(target.classList.contains('active')){target.classList.remove('active');var ulElement=target.parentNode.getElementsByTagName('ul')[0];ulElement.style.height='0px';}else{target.classList.add('active');var _ulElement=target.parentNode.getElementsByTagName('ul')[0];var ulChildrenNumber=_ulElement.children.length;var heightMax=ulChildrenNumber*80;_ulElement.style.height=heightMax+'px';}setTimeout(function(){_this2.perfectScrollbar.update();},200);}},{key:'openMenu',value:function openMenu(){document.querySelector('#sm-left-menu').classList.add('active');(0,_animejs2.default)({targets:'#sm-left-menu__background',opacity:[0,1],duration:200,easing:_config2.default.easingTransitionOut,begin:function begin(anim){document.getElementById('sm-left-menu__background').style.display='block';}});}},{key:'closeMenu',value:function closeMenu(){document.querySelector('#sm-left-menu').classList.remove('active');(0,_animejs2.default)({targets:'#sm-left-menu__background',opacity:[1,0],duration:200,easing:_config2.default.easingTransitionOut,complete:function complete(anim){document.getElementById('sm-left-menu__background').style.display='none';}});}},{key:'toggleMenu',value:function toggleMenu(){var active=document.querySelector('#sm-left-menu').classList.contains('active');if(active){document.querySelector('#sm-left-menu').classList.remove('active');(0,_animejs2.default)({targets:'#sm-left-menu__background',opacity:[1,0],duration:200,easing:_config2.default.easingTransitionOut,complete:function complete(anim){document.getElementById('sm-left-menu__background').style.display='none';}});}else{document.querySelector('#sm-left-menu').classList.add('active');(0,_animejs2.default)({targets:'#sm-left-menu__background',opacity:[0,1],duration:200,easing:_config2.default.easingTransitionOut,begin:function begin(anim){document.getElementById('sm-left-menu__background').style.display='block';}});}return!active;}}]);return LeftMenu;}();exports.default=LeftMenu;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ImagesPreload=function(){function ImagesPreload(){_classCallCheck(this,ImagesPreload);this.image=[];}_createClass(ImagesPreload,[{key:'add',value:function add(imagesToLoad){if(typeof imagesToLoad=='string'){imagesToLoad=[imagesToLoad];}imagesToLoad.forEach(function(imageToLoad){var newImage=new Image();newImage.src=imageToLoad;});}}]);return ImagesPreload;}();exports.default=ImagesPreload;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.setBookColor=setBookColor;function setBookColor(){// document.write('<div id="getbookcolor" class="bookcolor" style="display: none"></div>');
var divElement=document.createElement("div");divElement.className='bookcolor';divElement.id='getbookcolor';document.body.appendChild(divElement);var bookColor=window.getComputedStyle(divElement,null).getPropertyValue('color');var style=document.createElement('style');style.type='text/css';style.innerHTML='\n        .sm-color-color,\n        .sm-color-color--pressed:active,\n        .sm-color-color--hover:hover{\n            color: '+bookColor+'!important;\n        }\n        .sm-color-background-color,\n        .sm-color-background-color--active.active,\n        .sm-color-background-color--hover:hover,\n        .sm-color-background-color_before:before,\n        .sm-color-background-color_after:after{\n            background-color: '+bookColor+'!important;\n        }\n        .sm-color-border-color,\n        .sm-color-border-color--pressed:active,\n        .sm-color-border-color--hover:hover,\n        .sm-color-border-color--active.active{\n            border-color: '+bookColor+'!important;\n        }\n        \n        .sm-color-svg-fill svg,\n        .sm-color-svg-fill--hover:hover svg,\n        .sm-color-svg-fill--pressed:active > svg{\n            fill: '+bookColor+'!important;\n        }\n\n        .sm-color-child-color > *,\n        .sm-color-child-color--hover:hover > *,\n        .sm-color-child-color--active.active > *,\n        .sm-color-child-color--pressed:active > *{\n            color: '+bookColor+'!important;\n        }\n\n        \n    ';document.getElementsByTagName('head')[0].appendChild(style);}// function getStyleRuleValue(style, selector) {
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _responsiveStatus=__webpack_require__(3);var _responsiveStatus2=_interopRequireDefault(_responsiveStatus);var _tinySlider=__webpack_require__(5);__webpack_require__(8);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ScreenUnit=function(){function ScreenUnit(){_classCallCheck(this,ScreenUnit);this.state={started:false};this.goto=null;this.unit=null;this.responsiveStatus=null;}_createClass(ScreenUnit,[{key:'init',value:function init(_ref){var data=_ref.data,goTo=_ref.goTo;//onsole.log("Units menu init");
if(!this.started){this.goTo=goTo;// this.responsiveStatus = new responsiveStatus(this.updateSlider.bind(this));
}this.started=true;this.unit=data.unit;console.log(data.unit);var unitElement=document.getElementById('sm-unit');// Background
document.querySelector('.sm-unit__header_background__content').style.backgroundImage='url('+this.unit.image+')';// Header
var headerElement=unitElement.getElementsByClassName('sm-unit__header')[0];headerElement.querySelector('.sm-unit__header__number').innerHTML=this.unit.numberformenu;headerElement.querySelector('.sm-unit__header__title').innerHTML=this.unit.title;var completed=this.unit.completado||0;headerElement.querySelector('.sm-unit__header__progress__title').innerHTML=completed+'% completado';headerElement.querySelector('.sm-color-background-color').style.width=completed+'%';// Main activities
var mainActivitiesContainer=unitElement.querySelector('.sm-unit__activities__main');while(mainActivitiesContainer.firstChild){mainActivitiesContainer.removeChild(mainActivitiesContainer.firstChild);}var mainActivityTemplate=document.querySelector('#sm-unit__activity_main--template');this.unit.subunitsmain.forEach(function(subunit,index){var activityElement=mainActivityTemplate.cloneNode(true);activityElement.removeAttribute('id');if((typeof blink==='undefined'?'undefined':_typeof(blink))=='object'&&blink.isApp){activityElement.getElementsByTagName('a')[0].addEventListener('click',function(){eval(subunit.onclickTitle);});activityElement.getElementsByTagName('a')[0].setAttribute('href','javascript:void()');}else{activityElement.getElementsByTagName('a')[0].setAttribute('href',''+subunit.url);}activityElement.querySelector('.sm-unit__activity_main__image').style.backgroundImage='url('+subunit.image+')';activityElement.querySelector('.sm-unit__activity_main__number').innerHTML=index+1;activityElement.querySelector('.sm-unit__activity_main__title').innerHTML=subunit.title;activityElement.querySelector('.sm-unit__activity_main__type').innerHTML='Microcontenido';if((typeof blink==='undefined'?'undefined':_typeof(blink))=='object'){if(!blink.user.esAlumno()){activityElement.querySelector('.sm-unit__activity_main__send_link').classList.add('visible');activityElement.querySelector('.sm-unit__activity_main__send_link').addEventListener('click',function(){openSendActivityHomework(subunit.id,1);});}}var completed=subunit.completado||0;activityElement.querySelector('.sm-unit__activity_main__progress__title').innerHTML=completed+'% completado';activityElement.querySelector('.sm-color-background-color').style.width=completed+'%';mainActivitiesContainer.appendChild(activityElement);});// Aside activities
var asideActivitiesContainer=unitElement.querySelector('.sm-unit__activities__aside');while(asideActivitiesContainer.firstChild){asideActivitiesContainer.removeChild(asideActivitiesContainer.firstChild);}var asideActivityTemplate=document.querySelector('#sm-unit__activity_aside--template');this.unit.resourcesmain.forEach(function(subunit,index){var activityElement=asideActivityTemplate.cloneNode(true);activityElement.removeAttribute('id');var svgElements=activityElement.querySelectorAll('.sm-unit__activity_aside__icon svg');_.forEach(svgElements,function(svgElement){if(!svgElement.classList.contains(subunit.smtype+'-icon')){svgElement.remove();}});if((typeof blink==='undefined'?'undefined':_typeof(blink))=='object'&&blink.isApp){activityElement.getElementsByTagName('a')[0].addEventListener('click',function(){eval(subunit.onclickTitle);});activityElement.getElementsByTagName('a')[0].setAttribute('href','javascript:void()');}else{activityElement.getElementsByTagName('a')[0].setAttribute('href',''+subunit.url);}activityElement.querySelector('.sm-unit__activity_aside__title').innerHTML=subunit.title;var tipoTexto='';switch(subunit.smtype){case'flipped':tipoTexto='Flipped Classroom';break;case'refuerzo':tipoTexto='Refuerzo';break;case'microproyecto':tipoTexto='Microproyecto';break;case'ampliacion':tipoTexto='Ampliación';break;case'teacher':tipoTexto='Teacher Resources';break;case'discover':tipoTexto='Discover';break;default:break;}activityElement.querySelector('.sm-unit__activity_aside__type').innerHTML=tipoTexto;var completed=subunit.completado||0;activityElement.querySelector('.sm-unit__activity_aside__progress__title').innerHTML=completed+'% completado';activityElement.querySelector('.sm-color-background-color').style.width=completed+'%';asideActivitiesContainer.appendChild(activityElement);});}},{key:'processHash',value:function processHash(hashParts){return{is:hashParts[0]=='#unit'&&parseInt(hashParts[1])>0&&hashParts.length==2,data:{id:hashParts[1]}};}},{key:'transformInputData',value:function transformInputData(inputData,data){var screenData={unit:_.find(data.units,{id:inputData.id})};return screenData;}},{key:'onBackButton',value:function onBackButton(){this.disable();this.goTo('#');}},{key:'disable',value:function disable(){//document.querySelector('#sm-units-menu').classList.remove('active');
}}]);return ScreenUnit;}();exports.default=ScreenUnit;

/***/ }),
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".tns-outer{padding:0 !important}.tns-outer [hidden]{display:none !important}.tns-outer [aria-controls],.tns-outer [data-action]{cursor:pointer}.ms-touch{overflow-x:scroll;overflow-y:hidden;-ms-overflow-style:none;-ms-scroll-chaining:none;-ms-scroll-snap-type:mandatory;-ms-scroll-snap-points-x:snapInterval(0%, 100%)}.tns-slider{-webkit-transition:all 0s;-moz-transition:all 0s;transition:all 0s}.tns-slider>div,.tns-slider>li{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.tns-horizontal.tns-subpixel{white-space:nowrap}.tns-horizontal.tns-subpixel>div,.tns-horizontal.tns-subpixel>li{display:inline-block;vertical-align:top;white-space:normal}.tns-horizontal.tns-no-subpixel:after{content:'';display:table;clear:both}.tns-horizontal.tns-no-subpixel>div,.tns-horizontal.tns-no-subpixel>li{float:left;margin-right:-100%}.tns-no-calc{position:relative;left:0}.tns-gallery{position:relative;left:0;min-height:1px}.tns-gallery>div,.tns-gallery>li{position:absolute;left:-100%;-webkit-transition:transform 0s, opacity 0s;-moz-transition:transform 0s, opacity 0s;transition:transform 0s, opacity 0s}.tns-gallery>.tns-moving{-webkit-transition:all 0.25s;-moz-transition:all 0.25s;transition:all 0.25s}.tns-lazy-img{-webkit-transition:opacity 0.6s;-moz-transition:opacity 0.6s;transition:opacity 0.6s;opacity:0.6}.tns-lazy-img.loaded{opacity:1}.tns-ah{-webkit-transition:height 0s;-moz-transition:height 0s;transition:height 0s}.tns-ovh{overflow:hidden}.tns-hdx{overflow-x:hidden}.tns-hdy{overflow-y:hidden}.tns-visually-hidden{position:absolute;left:-10000em}.tns-transparent{opacity:0;visibility:hidden}.tns-fadeIn{opacity:1;filter:alpha(opacity=100);z-index:0}.tns-normal,.tns-fadeOut{opacity:0;filter:alpha(opacity=0);z-index:-1}.tns-t-subp2{margin:0 auto;width:310px;position:relative;height:10px;overflow:hidden}.tns-t-ct{width:2333.3333333%;width:-webkit-calc(100% * 70 / 3);width:-moz-calc(100% * 70 / 3);width:calc(100% * 70 / 3);position:absolute;right:0}.tns-t-ct:after{content:'';display:table;clear:both}.tns-t-ct>div{width:1.4285714%;width:-webkit-calc(100% / 70);width:-moz-calc(100% / 70);width:calc(100% / 70);height:10px;float:left}\n", ""]);

// exports


/***/ }),
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _responsiveStatus=__webpack_require__(3);var _responsiveStatus2=_interopRequireDefault(_responsiveStatus);var _tinySlider=__webpack_require__(5);__webpack_require__(8);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ScreenUnitsMenu=function(){function ScreenUnitsMenu(){_classCallCheck(this,ScreenUnitsMenu);this.state={started:false};this.slider=null;this.goto=null;this.units=[];this.responsiveStatus=null;}_createClass(ScreenUnitsMenu,[{key:'init',value:function init(_ref){var data=_ref.data,goTo=_ref.goTo;if(!this.started){this.goTo=goTo;this.units=data.units;document.querySelector('#sm-units-menu').classList.add('active');// document.querySelector('#sm-home h1').innerHTML = title;
// // document.querySelector('#sm-home h2').innerHTML = type;
// document.querySelector('#sm-home').style.backgroundImage = `url(${homeBackgroundImageUrl})`;
// document.querySelector('#sm-home .sm-button-next-screen').addEventListener('click', this.onNextButton.bind(this));
this.responsiveStatus=new _responsiveStatus2.default(this.updateSlider.bind(this));//Scroll event for no-touch
var _this=this;document.getElementById("sm-units-menu").addEventListener("wheel",function(e){var windowSize=_this.responsiveStatus.getSize();if(windowSize=='tablet-landscape'||windowSize=='desktop'){if(e.deltaY<0){//Check if we are here
var hashName=window.location.hash;var hashParts=hashName.split('_',3);if(_this.processHash(hashParts).is){_this.onBackButton();}}}});//Scroll event for touch
// const containerElement = document.getElementById('sm-units-menu');
// const activeRegion = ZingTouch.Region(containerElement);
// const childElement = document.querySelector('#sm-units-menu .sm-content');
// activeRegion.bind(childElement, 'swipe', function(event){
// 	console.log("Swipe");
// 	//If only one touch
// 	const touchEvents = event.detail.data;
// 	if(touchEvents.length==1){
// 		const direction = touchEvents[0].currentDirection;
// 		//If direction is down
// 		if(direction > 225 && direction < 315){
// 			_this.onBackButton();
// 		}
// 	}
// });
}this.started=true;// this.updateSlider(this.responsiveStatus.getSize());
//document.querySelector('#sm-units-menu').classList.add('active');
}},{key:'processHash',value:function processHash(hashParts){return{is:hashParts[0]=='#units'&&hashParts.length==1,data:{}};}},{key:'transformInputData',value:function transformInputData(inputData,data){var screenData={units:data.units};return screenData;}},{key:'updateSlider',value:function updateSlider(size){if(this.slider!=null){this.slider.destroy();//onsole.log('this.slider.destroy');
this.slider=null;//onsole.log(document.querySelector('#sm-units-menu .sm-content'));
// document.querySelector('#sm-units-menu .sm-content').remove();
// document.querySelector('#sm-units-menu').appendChild(this.mainDomStructure);
//onsole.log(document.querySelector('#sm-units-menu .sm-content'));
}//Vacía el slide
var sliderElement=document.querySelector('#sm-units-menu .sm-units-menu-slider');while(sliderElement.firstChild){sliderElement.removeChild(sliderElement.firstChild);}var unitTemplate=document.querySelector('#sm-units-menu__unit--template');this.units.forEach(function(unit){var unitElement=unitTemplate.cloneNode(true);unitElement.removeAttribute('id');unitElement.getElementsByTagName('a')[0].setAttribute('href','#unit_'+unit.id);unitElement.querySelector('.sm-units-menu__unit__image').style.backgroundImage='url('+unit.image+')';unitElement.querySelector('.sm-units-menu__unit__number').innerHTML=unit.numberformenu;unitElement.querySelector('.sm-units-menu__unit__title').innerHTML=unit.title;var completed=unit.completado||0;unitElement.querySelector('.sm-units-menu__unit__progress__title').innerHTML=completed+'% completado';unitElement.querySelector('.sm-color-background-color').style.width=completed+'%';// unitElement.querySelector('.sm-left-menu--title').innerHTML = `<span>${('0' + unit.numberformenu).slice(-2)}</span> ${unit.title}`;
// unitElement.addEventListener('click', this.toggleUnit);
// document.querySelector('#sm-units-menu .sm-button-back-screen').addEventListener('click', this.onBackButton.bind(this));
sliderElement.appendChild(unitElement);});//onsole.log(document.querySelector('.sm-units-menu-slider'));
if(size=='mobile'||size=='tablet-portrait'){}else{this.slider=(0,_tinySlider.tns)({container:'#sm-units-menu .sm-units-menu-slider',fixedWidth:352,loop:false,slideBy:'page',mouseDrag:true,controlsContainer:'#sm-units-menu-slider__controls',nav:false,swipeAngle:90});var _this=this;//two functions to detech touch down, to return main screen
this.slider.events.on('touchStart',function(e){_this.onTouchStart({x:e.event.touches[0].pageX,y:e.event.touches[0].pageY});});this.slider.events.on('touchEnd',function(e){_this.onTouchEnd({x:e.event.changedTouches[0].pageX,y:e.event.changedTouches[0].pageY});});}}//two functions to detech touch down, to return main screen
},{key:'onTouchStart',value:function onTouchStart(position){this.state.touchPositionStart=position;}},{key:'onTouchEnd',value:function onTouchEnd(position){var p1=this.state.touchPositionStart;var p2=position;var direction=Math.atan2(p2.y-p1.y,p2.x-p1.x)*180/Math.PI;if(direction>45&&direction<135){this.onBackButton();}this.state.touchPositionStart=null;}},{key:'onBackButton',value:function onBackButton(){this.disable();this.goTo('#');}},{key:'disable',value:function disable(){//document.querySelector('#sm-units-menu').classList.remove('active');
}}]);return ScreenUnitsMenu;}();exports.default=ScreenUnitsMenu;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

/*!
 * 
 * ZingTouch v1.0.6
 * Author: ZingChart http://zingchart.com
 * License: MIT
 */
!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(1),u=r(i);window.ZingTouch=u.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),u=r(i),o=n(4),a=r(o),s=n(10),c=r(s),f=n(12),l=r(f),d=n(13),p=r(d),h=n(14),y=r(h),v=n(15),g=r(v),m=n(16),b=r(m),w={_regions:[],Gesture:a.default,Expand:c.default,Pan:l.default,Pinch:p.default,Rotate:y.default,Swipe:g.default,Tap:b.default,Region:function(e,t,n){var r=w._regions.length,i=new u.default(e,t,n,r);return w._regions.push(i),i}};t.default=w},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(3),a=r(o),s=n(4),c=r(s),f=n(6),l=r(f),d=n(9),p=r(d),h=function(){function e(t,n,r,u){var o=this;i(this,e),this.id=u,this.element=t,this.capture="undefined"!=typeof n&&n,this.preventDefault="undefined"==typeof r||r,this.state=new p.default(u);var a=[];a=window.PointerEvent&&!window.TouchEvent?["pointerdown","pointermove","pointerup"]:["mousedown","mousemove","mouseup","touchstart","touchmove","touchend"],a.map(function(e){t.addEventListener(e,function(e){(0,l.default)(e,o)},o.capture)})}return u(e,[{key:"bind",value:function(e,t,n,r,i){if(!e||e&&!e.tagName)throw"Bind must contain an element";return i="undefined"!=typeof i&&i,t?void this.state.addBinding(e,t,n,r,i):new a.default(e,i,this.state)}},{key:"bindOnce",value:function(e,t,n,r){this.bind(e,t,n,r,!0)}},{key:"unbind",value:function(e,t){var n=this,r=this.state.retrieveBindingsByElement(e),i=[];return r.forEach(function(r){if(t){if("string"==typeof t&&n.state.registeredGestures[t]){var u=n.state.registeredGestures[t];u.id===r.gesture.id&&(e.removeEventListener(r.gesture.getId(),r.handler,r.capture),i.push(r))}}else e.removeEventListener(r.gesture.getId(),r.handler,r.capture),i.push(r)}),i}},{key:"register",value:function(e,t){if("string"!=typeof e)throw new Error("Parameter key is an invalid string");if(!t instanceof c.default)throw new Error("Parameter gesture is an invalid Gesture object");t.setType(e),this.state.registerGesture(t,e)}},{key:"unregister",value:function(e){this.state.bindings.forEach(function(t){t.gesture.getType()===e&&t.element.removeEventListener(t.gesture.getId(),t.handler,t.capture)});var t=this.state.registeredGestures[e];return delete this.state.registeredGestures[e],t}}]),e}();t.default=h},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function e(t,r,i){var u=this;n(this,e),this.element=t,Object.keys(i.registeredGestures).forEach(function(e){u[e]=function(t,n){return i.addBinding(u.element,e,t,n,r),u}})};t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(5),a=r(o),s=function(){function e(){i(this,e),this.type=null,this.id=null}return u(e,[{key:"setType",value:function(e){this.type=e}},{key:"getType",value:function(){return this.type}},{key:"setId",value:function(e){this.id=e}},{key:"getId",value:function(){return null!==this.id?this.id:this.type}},{key:"update",value:function(e){for(var t in e)this[t]&&(this[t]=e[t])}},{key:"start",value:function(e,t,n){return null}},{key:"move",value:function(e,t,n){return null}},{key:"end",value:function(e){return null}},{key:"isValid",value:function(e,t,n){var r=!0;return e.length>1&&e.forEach(function(e){a.default.isInside(e.initial.x,e.initial.y,n)||(r=!1)}),r}}]),e}();t.default=s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=360,r=180,i={normalizeEvent:function(e){switch(e){case"mousedown":case"touchstart":case"pointerdown":return"start";case"mousemove":case"touchmove":case"pointermove":return"move";case"mouseup":case"touchend":case"pointerup":return"end";default:return null}},isWithin:function(e,t,n,r,i){return Math.abs(t-r)<=i&&Math.abs(e-n)<=i},distanceBetweenTwoPoints:function(e,t,n,r){var i=Math.sqrt((t-e)*(t-e)+(r-n)*(r-n));return Math.round(100*i)/100},getMidpoint:function(e,t,n,r){return{x:(e+t)/2,y:(n+r)/2}},getAngle:function(e,t,i,u){var o=Math.atan2(u-t,i-e)*(r/Math.PI);return n-(o<0?n+o:o)},getAngularDistance:function(e,t){var i=(t-e)%n,u=i<0?1:-1;return i=Math.abs(i),i>r?u*(n-i):u*i},getVelocity:function(e,t,n,r,i,u){var o=this.distanceBetweenTwoPoints(e,r,t,i);return o/(u-n)},getRightMostInput:function(e){var t=null,n=Number.MIN_VALUE;return e.forEach(function(e){e.initial.x>n&&(t=e)}),t},isInteger:function(e){return"number"==typeof e&&e%1===0},isInside:function(e,t,n){var r=n.getBoundingClientRect();return e>r.left&&e<r.left+r.width&&t>r.top&&t<r.top+r.height},getPropagationPath:function(e){if(e.path)return e.path;for(var t=[],n=e.target;n!=document;)t.push(n),n=n.parentNode;return t},getPathIndex:function(e,t){var n=e.length;return e.forEach(function(e,r){e===t&&(n=r)}),n},setMSPreventDefault:function(e){e.style["-ms-content-zooming"]="none",e.style["touch-action"]="none"},removeMSPreventDefault:function(e){e.style["-ms-content-zooming"]="",e.style["touch-action"]=""}};t.default=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=t.state;if(0!==n.inputs.length||"start"===f.default.normalizeEvent(e.type)){if("undefined"!=typeof e.buttons&&"end"!==f.default.normalizeEvent(e.type)&&0===e.buttons)return void n.resetInputs();if(n.updateInputs(e,t.element)){var r=n.retrieveBindingsByInitialPos();r.length>0&&!function(){t.preventDefault?(f.default.setMSPreventDefault(t.element),e.preventDefault?e.preventDefault():e.returnValue=!1):f.default.removeMSPreventDefault(t.element);var i={},u=(0,s.default)(r,e,n);u.forEach(function(t){var n=t.binding.gesture.id;if(i[n]){var r=f.default.getPropagationPath(e);f.default.getPathIndex(r,t.binding.element)<f.default.getPathIndex(r,i[n].binding.element)&&(i[n]=t)}else i[n]=t}),Object.keys(i).forEach(function(e){var t=i[e];(0,o.default)(t.binding,t.data,t.events)})}();var i=0;n.inputs.forEach(function(e){"end"===e.getCurrentEventType()&&i++}),i===n.inputs.length&&n.resetInputs()}}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(7),o=r(u),a=n(8),s=r(a),c=n(5),f=r(c);t.default=i},function(e,t){"use strict";function n(e,t,n){t.events=n;var i=new CustomEvent(e.gesture.getId(),{detail:t,bubbles:!0,cancelable:!0});r(e.element,i,e)}function r(e,t,n){e.dispatchEvent(t),n.bindOnce&&ZingTouch.unbind(n.element,n.gesture.getType())}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){var r=o.default.normalizeEvent(t.type),i=[];return e.forEach(function(e){var t=e.gesture[r](n.inputs,n,e.element);t&&!function(){var r=[];n.inputs.forEach(function(e){r.push(e.current)}),i.push({binding:e,data:t,events:r})}()}),i}Object.defineProperty(t,"__esModule",{value:!0});var u=n(5),o=r(u);t.default=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<e.length;n++)if(e[n].identifier===t)return e[n];return null}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),c=r(s),f=n(10),l=r(f),d=n(12),p=r(d),h=n(13),y=r(h),v=n(14),g=r(v),m=n(15),b=r(m),w=n(16),_=r(w),P=n(17),E=r(P),O=n(18),x=r(O),j=n(5),I=r(j),T=0,k=function(){function e(t){i(this,e),this.regionId=t,this.inputs=[],this.bindings=[],this.numGestures=0,this.registeredGestures={},this.registerGesture(new l.default,"expand"),this.registerGesture(new p.default,"pan"),this.registerGesture(new g.default,"rotate"),this.registerGesture(new y.default,"pinch"),this.registerGesture(new b.default,"swipe"),this.registerGesture(new _.default,"tap")}return a(e,[{key:"addBinding",value:function(e,t,n,r,i){var u=void 0;if(e&&"undefined"==typeof e.tagName)throw new Error("Parameter element is an invalid object.");if("function"!=typeof n)throw new Error("Parameter handler is invalid.");if("string"==typeof t&&Object.keys(this.registeredGestures).indexOf(t)===-1)throw new Error("Parameter "+t+" is not a registered gesture");if("object"===("undefined"==typeof t?"undefined":o(t))&&!(t instanceof c.default))throw new Error("Parameter for the gesture is not of a Gesture type");"string"==typeof t?u=this.registeredGestures[t]:(u=t,""===u.id&&this.assignGestureId(u)),this.bindings.push(new E.default(e,u,n,r,i)),e.addEventListener(u.getId(),n,r)}},{key:"retrieveBindingsByElement",value:function(e){var t=[];return this.bindings.map(function(n){n.element===e&&t.push(n)}),t}},{key:"retrieveBindingsByInitialPos",value:function(){var e=this,t=[];return this.bindings.forEach(function(n){var r=e.inputs.filter(function(e){return I.default.isInside(e.initial.x,e.initial.y,n.element)});r.length>0&&t.push(n)}),t}},{key:"updateInputs",value:function(e,t){function n(e,t,n,r){var i=I.default.normalizeEvent(e.type),o=u(t.inputs,n);return"start"===i&&o?void t.resetInputs():"start"!==i&&o&&!I.default.isInside(o.current.x,o.current.y,r)?void t.resetInputs():"start"===i||o?void("start"===i?t.inputs.push(new x.default(e,n)):o.update(e,n)):void t.resetInputs()}var r=T,i=e.touches?"TouchEvent":e.pointerType?"PointerEvent":"MouseEvent";switch(i){case"TouchEvent":for(var o in e.changedTouches)e.changedTouches.hasOwnProperty(o)&&I.default.isInteger(parseInt(o))&&(r=e.changedTouches[o].identifier,n(e,this,r,t));break;case"PointerEvent":r=e.pointerId,n(e,this,r,t);break;case"MouseEvent":default:n(e,this,T,t)}return!0}},{key:"resetInputs",value:function(){this.inputs=[]}},{key:"numActiveInputs",value:function(){var e=this.inputs.filter(function(e){return"end"!==e.current.type});return e.length}},{key:"registerGesture",value:function(e,t){this.assignGestureId(e),this.registeredGestures[t]=e}},{key:"assignGestureId",value:function(e){e.setId(this.regionId+"-"+this.numGestures++)}}]),e}();t.default=k},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(11),s=r(a),c=function(e){function t(e){i(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.type="expand",n}return o(t,e),t}(s.default);t.default=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),c=r(s),f=n(5),l=r(f),d=2,p=1,h=function(e){function t(e){i(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.type="distance",n.threshold=e&&e.threshold?e.threshold:p,n}return o(t,e),a(t,[{key:"start",value:function(e,t,n){if(!this.isValid(e,t,n))return null;if(e.length===d){var r=e[0].getGestureProgress(this.type);r.lastEmittedDistance=l.default.distanceBetweenTwoPoints(e[0].current.x,e[1].current.x,e[0].current.y,e[1].current.y)}}},{key:"move",value:function(e,t,n){if(t.numActiveInputs()===d){var r=l.default.distanceBetweenTwoPoints(e[0].current.x,e[1].current.x,e[0].current.y,e[1].current.y),i=l.default.distanceBetweenTwoPoints(e[0].previous.x,e[1].previous.x,e[0].previous.y,e[1].previous.y),u=l.default.getMidpoint(e[0].current.x,e[1].current.x,e[0].current.y,e[1].current.y),o=e[0].getGestureProgress(this.type);if("Expand"===this.constructor.name){if(r<i)o.lastEmittedDistance=r;else if(r-o.lastEmittedDistance>=this.threshold)return o.lastEmittedDistance=r,{distance:r,center:u}}else if(r>i)o.lastEmittedDistance=r;else if(r<i&&o.lastEmittedDistance-r>=this.threshold)return o.lastEmittedDistance=r,{distance:r,center:u};return null}}}]),t}(c.default);t.default=h},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),c=r(s),f=n(5),l=r(f),d=1,p=1,h=function(e){function t(e){i(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.type="pan",n.numInputs=e&&e.numInputs?e.numInputs:d,n.threshold=e&&e.threshold?e.threshold:p,n}return o(t,e),a(t,[{key:"start",value:function(e){var t=this;e.forEach(function(e){var n=e.getGestureProgress(t.getId());n.active=!0,n.lastEmitted={x:e.current.x,y:e.current.y}})}},{key:"move",value:function(e,t,n){if(this.numInputs===e.length)for(var r={data:[]},i=0;i<e.length;i++){var u=e[i].getGestureProgress(this.getId()),o=!1,a=Math.abs(e[i].current.y-u.lastEmitted.y)>this.threshold,s=Math.abs(e[i].current.x-u.lastEmitted.x)>this.threshold;if(o=a||s,!u.active||!o)return null;r.data[i]={distanceFromOrigin:l.default.distanceBetweenTwoPoints(e[i].initial.x,e[i].current.x,e[i].initial.y,e[i].current.y),directionFromOrigin:l.default.getAngle(e[i].initial.x,e[i].initial.y,e[i].current.x,e[i].current.y),currentDirection:l.default.getAngle(u.lastEmitted.x,u.lastEmitted.y,e[i].current.x,e[i].current.y)},u.lastEmitted.x=e[i].current.x,u.lastEmitted.y=e[i].current.y}return r}},{key:"end",value:function(e){var t=this;return e.forEach(function(e){var n=e.getGestureProgress(t.getId());n.active=!1}),null}}]),t}(c.default);t.default=h},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(11),s=r(a),c=n(5),f=(r(c),function(e){function t(e){i(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.type="pinch",n}return o(t,e),t}(s.default));t.default=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),c=r(s),f=n(5),l=r(f),d=2,p=function(e){function t(){i(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.type="rotate",e}return o(t,e),a(t,[{key:"move",value:function(e,t,n){if(t.numActiveInputs()<=d){var r=void 0,i=void 0,u=void 0,o=void 0;if(1===t.numActiveInputs()){var a=n.getBoundingClientRect();r={x:a.left+a.width/2,y:a.top+a.height/2},o=e[0],i=u=0}else{r=l.default.getMidpoint(e[0].initial.x,e[1].initial.x,e[0].initial.y,e[1].initial.y);var s=l.default.getMidpoint(e[0].current.x,e[1].current.x,e[0].current.y,e[1].current.y);i=r.x-s.x,u=r.y-s.y,o=l.default.getRightMostInput(e)}var c=l.default.getAngle(r.x,r.y,o.current.x+i,o.current.y+u),f=o.getGestureProgress(this.getId());return f.initialAngle?(f.change=l.default.getAngularDistance(f.previousAngle,c),f.distance=f.distance+f.change):(f.initialAngle=f.previousAngle=c,f.distance=f.change=0),f.previousAngle=c,{angle:c,distanceFromOrigin:f.distance,distanceFromLast:f.change}}return null}}]),t}(c.default);t.default=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),c=r(s),f=n(5),l=r(f),d=1,p=100,h=.2,y=100,v=10,g=function(e){function t(e){i(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.type="swipe",n.numInputs=e&&e.numInputs?e.numInputs:d,n.maxRestTime=e&&e.maxRestTime?e.maxRestTime:p,n.escapeVelocity=e&&e.escapeVelocity?e.escapeVelocity:h,n.timeDistortion=e&&e.timeDistortion?e.timeDistortion:y,n.maxProgressStack=e&&e.maxProgressStack?e.maxProgressStack:v,n}return o(t,e),a(t,[{key:"move",value:function(e,t,n){if(this.numInputs===e.length)for(var r=0;r<e.length;r++){var i=e[r].getGestureProgress(this.getId());i.moves||(i.moves=[]),i.moves.push({time:(new Date).getTime(),x:e[r].current.x,y:e[r].current.y}),i.length>this.maxProgressStack&&i.moves.shift()}return null}},{key:"end",value:function(e){if(this.numInputs===e.length){for(var t={data:[]},n=0;n<e.length;n++){if("end"!==e[n].current.type)return;var r=e[n].getGestureProgress(this.getId());if(r.moves&&r.moves.length>2){var i=r.moves.pop();if((new Date).getTime()-i.time>this.maxRestTime)return null;for(var u=void 0,o=r.moves.length-1;o!==-1;){if(r.moves[o].time!==i.time){u=r.moves[o];break}o--}u||(u=r.moves.pop(),u.time+=this.timeDistortion);var a=l.default.getVelocity(u.x,u.y,u.time,i.x,i.y,i.time);t.data[n]={velocity:a,distance:l.default.distanceBetweenTwoPoints(u.x,i.x,u.y,i.y),duration:i.time-u.time,currentDirection:l.default.getAngle(u.x,u.y,i.x,i.y)}}}for(var n=0;n<t.data.length;n++)if(a<this.escapeVelocity)return null;if(t.data.length>0)return t}return null}}]),t}(c.default);t.default=g},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),f=r(c),l=n(5),d=r(l),p=0,h=300,y=1,v=10,g=function(e){function t(e){i(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.type="tap",n.minDelay=e&&e.minDelay?e.minDelay:p,n.maxDelay=e&&e.maxDelay?e.maxDelay:h,n.numInputs=e&&e.numInputs?e.numInputs:y,n.tolerance=e&&e.tolerance?e.tolerance:v,n}return o(t,e),s(t,[{key:"start",value:function(e){var t=this;return e.length===this.numInputs&&e.forEach(function(e){var n=e.getGestureProgress(t.type);n.start=(new Date).getTime()}),null}},{key:"move",value:function(e,t,n){for(var r=this,i=0;i<e.length;i++)if("move"===e[i].getCurrentEventType()){var u=e[i].current,o=e[i].previous;if(!d.default.isWithin(u.x,u.y,o.x,o.y,this.tolerance)){var s=function(){var t=r.type;return e.forEach(function(e){e.resetProgress(t)}),{v:null}}();if("object"===("undefined"==typeof s?"undefined":a(s)))return s.v}}return null}},{key:"end",value:function(e){var t=this;if(e.length!==this.numInputs)return null;for(var n=Number.MAX_VALUE,r=0;r<e.length;r++){if("end"!==e[r].getCurrentEventType())return null;var i=e[r].getGestureProgress(this.type);if(!i.start)return null;i.start<n&&(n=i.start)}var u=(new Date).getTime()-n;if(this.minDelay<=u&&this.maxDelay>=u)return{interval:u};var o=function(){var n=t.type;return e.forEach(function(e){e.resetProgress(n)}),{v:null}}();return"object"===("undefined"==typeof o?"undefined":a(o))?o.v:void 0}}]),t}(f.default);t.default=g},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function e(t,r,i,u,o){n(this,e),this.element=t,this.gesture=r,this.handler=i,this.capture="undefined"!=typeof u&&u,this.bindOnce="undefined"!=typeof o&&o};t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(19),a=r(o),s=function(){function e(t,n){i(this,e);var r=new a.default(t,n);this.initial=r,this.current=r,this.previous=r,this.identifier="undefined"!=typeof n?n:0,this.progress={}}return u(e,[{key:"update",value:function(e,t){this.previous=this.current,this.current=new a.default(e,t)}},{key:"getGestureProgress",value:function(e){return this.progress[e]||(this.progress[e]={}),this.progress[e]}},{key:"getCurrentEventType",value:function(){return this.current.type}},{key:"resetProgress",value:function(e){this.progress[e]={}}}]),e}();t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=n(5),o=r(u),a=0,s=function e(t,n){i(this,e),this.originalEvent=t,this.type=o.default.normalizeEvent(t.type),this.x=a,this.y=a;var r=void 0;if(t.touches&&t.changedTouches){for(var u=0;u<t.changedTouches.length;u++)if(t.changedTouches[u].identifier===n){r=t.changedTouches[u];break}}else r=t;this.x=this.clientX=r.clientX,this.y=this.clientY=r.clientY,this.pageX=r.pageX,this.pageY=r.pageY,this.screenX=r.screenX,this.screenY=r.screenY};t.default=s}]);
//# sourceMappingURL=zingtouch.min.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
module.exports = ZingTouch;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();// import config from './config';
var _zingtouch=__webpack_require__(39);var _zingtouch2=_interopRequireDefault(_zingtouch);var _debug=__webpack_require__(1);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ScreenHome=function(){function ScreenHome(){_classCallCheck(this,ScreenHome);this.state={started:false};this.goto=null;}_createClass(ScreenHome,[{key:'init',value:function init(_ref){var data=_ref.data,goTo=_ref.goTo;if(!this.started){this.goTo=goTo;var title=data.title,type=data.type,homeBackgroundImageUrl=data.homeBackgroundImageUrl,nivel=data.nivel;document.querySelector('#sm-home h1').innerHTML=title;//Nivel
if(nivel){var nivelParts=nivel.split(" ");if(nivelParts.length>=2){document.querySelector('#sm-home h2 strong').innerHTML=nivelParts[0];document.querySelector('#sm-home h2 span').innerHTML=nivelParts[1];}else{document.querySelector('#sm-home h2').style.display='none';}}else{document.querySelector('#sm-home h2').style.display='none';}document.querySelector('#sm-home').style.backgroundImage='url('+homeBackgroundImageUrl+')';// document.querySelector('#sm-home .sm-button-next-screen').addEventListener('click', this.onNextButton.bind(this));
//Scroll event for no-touch
var _this=this;document.getElementById("sm-home").addEventListener("wheel",function(e){if(e.deltaY>0){//Check if we are here
var hashName=window.location.hash;var hashParts=hashName.split('_',3);if(_this.processHash(hashParts).is){_this.onNextButton();}}});//Scroll event for touch
var containerElement=document.getElementById('sm-home');var activeRegion=_zingtouch2.default.Region(containerElement);var childElement=document.querySelector('#sm-home .sm-home-touchable-area');activeRegion.bind(childElement,'swipe',function(event){//If only one touch
var touchEvents=event.detail.data;if(touchEvents.length==1){var direction=touchEvents[0].currentDirection;//If direction is up
if(direction>45&&direction<135){_this.onNextButton();}}});}this.started=true;//document.querySelector('#sm-home').classList.add('active');
}},{key:'processHash',value:function processHash(hashParts){return{is:(hashParts[0]=='#'||hashParts[0]=='')&&hashParts.length==1,data:{}};}},{key:'transformInputData',value:function transformInputData(inputData,data){var screenData={homeBackgroundImageUrl:data.homeBackgroundImageUrl,title:data.title,//¿?
type:data.type,nivel:data.nivel};return screenData;}},{key:'onNextButton',value:function onNextButton(){this.disable();this.goTo('#units');}},{key:'disable',value:function disable(){//document.querySelector('#sm-home').classList.remove('active');
}}]);return ScreenHome;}();exports.default=ScreenHome;

/***/ }),
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _animejs=__webpack_require__(4);var _animejs2=_interopRequireDefault(_animejs);var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _responsiveStatus=__webpack_require__(3);var _responsiveStatus2=_interopRequireDefault(_responsiveStatus);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var responsiveStatusTool=new _responsiveStatus2.default(function(){return null;});// config.velocityTransitions = 2000;
var routeTransitions={'null__to__home':{to:{targets:'#sm-home',scale:[1.1,1],opacity:[0,1],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,update:function update(anim){document.getElementById('sm-home').style.display='block';}}},'null__to__units-menu':{to:{targets:'#sm-units-menu',scale:[1.1,1],opacity:[0,1],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,update:function update(anim){document.getElementById('sm-units-menu').style.display='block';}}},'null__to__unit':{to:{targets:'#sm-unit',scale:[1.1,1],opacity:[0,1],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,update:function update(anim){document.getElementById('sm-unit').style.display='block';}}},'home__to__units-menu':{from:[{targets:'#sm-home .sm-content',translateY:['0%','-100%'],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,complete:function complete(anim){document.getElementById('sm-home').style.display='none';}},{targets:'#sm-home .sm-button-next-screen',opacity:[1,0],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionLinear}],to:[{targets:'#sm-units-menu',translateY:['100%','0%'],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,begin:function begin(anim){document.getElementById('sm-units-menu').style.display='block';}},{targets:'#sm-units-menu .sm-button-back-screen',opacity:[0,1],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionLinear}]},'units-menu__to__home':{from:[{targets:'#sm-units-menu',translateY:['0%','100%'],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut},{targets:'#sm-units-menu .sm-button-back-screen',opacity:[1,0],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionLinear}],to:[{targets:'#sm-home .sm-content',translateY:['-100%','0%'],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,update:function update(anim){document.getElementById('sm-home').style.display='block';}},{targets:'#sm-home .sm-button-next-screen',opacity:[0,1],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionLinear}]},'units-menu__to__unit':{from:[],to:[{targets:'#sm-unit .sm-content--scrolled',translateY:['100%','0%'],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,begin:function begin(anim){document.getElementById('sm-unit').style.display='block';if(typeof document.querySelector('#sm-unit .sm-content--scrolled').scrollTo==="function"){document.querySelector('#sm-unit .sm-content--scrolled').scrollTo(0,0);}}},{targets:'#sm-unit .sm-unit__header_background',opacity:[0,1],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut},{targets:'#sm-unit .sm-unit__header_background__content',height:function height(){var backgroundHeight=0;switch(responsiveStatusTool.getSize()){case'tablet-portrait':backgroundHeight=8*73+'px';break;case'tablet-landscape':backgroundHeight=8*67+'px';break;case'desktop':backgroundHeight=8*67+'px';break;default:backgroundHeight='362px';break;}return[window.innerHeight+'px',backgroundHeight];},duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,complete:function complete(){document.querySelector('#sm-unit .sm-unit__header_background__content').style.removeProperty('height');}}]},'unit__to__units-menu':{from:[{targets:'#sm-unit .sm-content--scrolled',translateY:['0%','100%'],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,complete:function complete(anim){document.getElementById('sm-unit').style.display='none';}},{targets:'#sm-unit .sm-unit__header_background',opacity:[1,0],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut},{targets:'#sm-unit .sm-unit__header_background__content',height:function height(){var backgroundHeight=0;switch(responsiveStatusTool.getSize()){case'tablet-portrait':backgroundHeight=8*73+'px';break;case'tablet-landscape':backgroundHeight=8*67+'px';break;case'desktop':backgroundHeight=8*67+'px';break;default:backgroundHeight='362px';break;}return[backgroundHeight,window.innerHeight+'px'];},duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut}],to:{targets:'#sm-units-menu',duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,begin:function begin(anim){document.getElementById('sm-units-menu').style.display='block';}}}};var Transitions=function(){function Transitions(){_classCallCheck(this,Transitions);}_createClass(Transitions,[{key:'start',value:function start(toRoute,fromRoute){//onsole.log(`de ${fromRoute} a ${toRoute}`);
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
if(Array.isArray(routeTransitions[fromRoute+'__to__'+toRoute].from)){routeTransitions[fromRoute+'__to__'+toRoute].from.forEach(function(animationObject){(0,_animejs2.default)(animationObject);});}else{(0,_animejs2.default)(routeTransitions[fromRoute+'__to__'+toRoute].from);}if(Array.isArray(routeTransitions[fromRoute+'__to__'+toRoute].to)){routeTransitions[fromRoute+'__to__'+toRoute].to.forEach(function(animationObject){(0,_animejs2.default)(animationObject);});}else{(0,_animejs2.default)(routeTransitions[fromRoute+'__to__'+toRoute].to);}}else{//onsole.log("NO EXISTE ESA RUTA");
}}}]);return Transitions;}();exports.default=Transitions;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var UrlHelper=function(){function UrlHelper(routes,updateRouter){_classCallCheck(this,UrlHelper);this.updateRouter=updateRouter;//Functión para actualizar el router
this.routes=routes;this.state={route:null,routeData:{}};var _this=this;window.onhashchange=function(){_this.goToState();};this.goToState();}_createClass(UrlHelper,[{key:'updateCurrentState',value:function updateCurrentState(){var _this2=this;var urlState={};var hashName=window.location.hash;var hashParts=hashName.split('_',3);//Para dividir las partes del hash con un máximo de 3 partes
var routeFound=false;this.routes.forEach(function(route){if(!routeFound){var hashProcessed=route.object.processHash(hashParts);if(hashProcessed.is){routeFound=true;_this2.state.route=route;_this2.state.routeData=hashProcessed.data;}}});if(!routeFound){this.state.route=this.routes[0];this.state.routeData={};}}},{key:'goToState',value:function goToState(){this.updateCurrentState();this.updateRouter(this.state.route,this.state.routeData);}},{key:'updateUrlHash',value:function updateUrlHash(urlHash){window.location.hash=urlHash;}}]);return UrlHelper;}();exports.default=UrlHelper;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();//Screens
var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _urlHelper=__webpack_require__(43);var _urlHelper2=_interopRequireDefault(_urlHelper);var _Transitions=__webpack_require__(42);var _Transitions2=_interopRequireDefault(_Transitions);var _debug=__webpack_require__(1);var _1ScreenHome=__webpack_require__(40);var _1ScreenHome2=_interopRequireDefault(_1ScreenHome);var _2ScreenUnitsMenu=__webpack_require__(37);var _2ScreenUnitsMenu2=_interopRequireDefault(_2ScreenUnitsMenu);var _3ScreenUnit=__webpack_require__(33);var _3ScreenUnit2=_interopRequireDefault(_3ScreenUnit);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}//El hash puede ser
// "#" o "#" => Home
// "#units" => Menú de unidades
// "#unit_X" => Unidad X
// "#pluszone_X" => Pluszone de unidad X
// "#pluscategory_X_CATEGORY" => Pluszone en categoría CATEGORY y unidad X
var screens=[{id:'home',object:new _1ScreenHome2.default()},{id:'units-menu',object:new _2ScreenUnitsMenu2.default()},{id:'unit',object:new _3ScreenUnit2.default()}];var transitions=new _Transitions2.default();var Router=function(){function Router(data){_classCallCheck(this,Router);this.state={data:data,lastRoute:null};(0,_debug.cl)('Router.constructor(data)');(0,_debug.cl)(data);this.urlHelper=new _urlHelper2.default(screens,this.update.bind(this));}_createClass(Router,[{key:'update',value:function update(route,inputData){(0,_debug.cl)("Update router");//This function change from one screen to another (or only data)
route.object.init({data:route.object.transformInputData(inputData,this.state.data),goTo:this.goTo.bind(this)});//Transisions
var lastRouteId=this.state.lastRoute?this.state.lastRoute.id:null;transitions.start(route.id,lastRouteId);this.state.lastRoute=route;}},{key:'goTo',value:function goTo(hash){//Go from link
this.urlHelper.updateUrlHash(hash);}}]);return Router;}();exports.default=Router;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Source: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
if(!("nextElementSibling"in document.documentElement)){Object.defineProperty(Element.prototype,"nextElementSibling",{get:function get(){var e=this.nextSibling;while(e&&1!==e.nodeType){e=e.nextSibling;}return e;}});}if(!("previousElementSibling"in document.documentElement)){Object.defineProperty(Element.prototype,"previousElementSibling",{get:function get(){var e=this.previousSibling;while(e&&1!==e.nodeType){e=e.previousSibling;}return e;}});}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();//Helpers
//Left Menu
//SubUnit
//Templates
// import { equal } from 'assert';
//Polyfils
__webpack_require__(45);var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _router=__webpack_require__(44);var _router2=_interopRequireDefault(_router);var _bookColors=__webpack_require__(32);var _ImagesPreload=__webpack_require__(31);var _ImagesPreload2=_interopRequireDefault(_ImagesPreload);var _debug=__webpack_require__(1);var _0LeftMenu=__webpack_require__(30);var _0LeftMenu2=_interopRequireDefault(_0LeftMenu);var _ScreenSubUnit=__webpack_require__(25);var _ScreenSubUnit2=_interopRequireDefault(_ScreenSubUnit);var _main=__webpack_require__(10);var _main2=_interopRequireDefault(_main);__webpack_require__(9);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var SantillanaMicrocontenidos=function(){function SantillanaMicrocontenidos(){_classCallCheck(this,SantillanaMicrocontenidos);this.state={isLaunched:false};this.leftMenu=null;}_createClass(SantillanaMicrocontenidos,[{key:'init',value:function init(dataraw){var data=JSON.parse(JSON.stringify(dataraw));(0,_debug.cl)("app.init()");(0,_debug.cl)(data);if(!this.state.isLaunched){this.state.isLaunched=true;(0,_debug.cl)('Iniciando estilos Santillana ');(0,_debug.cl)('Unidades: '+data.units.length+' ');var urlSeguimiento='/include/javascript/seguimientoCurso.js.php?idcurso='+idcurso;if(typeof loadScript==='function'){//If is blink enviroment
loadScript(urlSeguimiento,true,function(){this.initAfertLoadsActivities(data,window.actividades);}.bind(this));}else{this.initAfertLoadsActivities(data,[]);}//Add body class if theres is no navbar (app)
if((typeof blink==='undefined'?'undefined':_typeof(blink))=='object'){if(blink.isApp&&!blink.isOfflinePC){document.body.classList.add('sm-no-navbar');}}//Redefine blink function for resizing window
window.setPanelResultsHeight=function(){$('.search-side-panel-results').css('height',$(window).height()-$('.search-side-panel-results').offset().top);};window.setPanelStyle=function(){$('.side-panel').css({'top':$('.navbar').height(),'height':$(window).height()-$('.navbar').height()});};}}},{key:'initAfertLoadsActivities',value:function initAfertLoadsActivities(data,activities){(0,_debug.cl)('initAfertLoadsActivities');(0,_debug.cl)(data,activities);var isFirstSubunit=false;if(data.units[0].subunits.length){if(idclase==data.units[0].subunits[0].id){isFirstSubunit=true;}}(0,_debug.cl)('Activities loaded. ');//Get home image
var homeBackgroundImageUrl='';if(data.units[0].subunits.length>=1){if(data.units[0].subunits[0].image){homeBackgroundImageUrl=data.units[0].subunits[0].image;}}//Remove first unit
data.units.shift();data.homeBackgroundImageUrl=homeBackgroundImageUrl;//If user is student, remove subunits and resources not visible for her
if((typeof blink==='undefined'?'undefined':_typeof(blink))=='object'){if(blink.user.esAlumno()){data.units.forEach(function(unit){var i=unit.subunits.length;while(i--){if(unit.subunits[i].onlyVisibleTeachers){unit.subunits.splice(i,1);}}i=unit.resources.length;while(i--){if(unit.resources[i].onlyVisibleTeachers){unit.resources.splice(i,1);}}});}}//If ocultar == true, remove it
data.units.forEach(function(unit){var i=unit.subunits.length;while(i--){if(unit.subunits[i].ocultar){unit.subunits.splice(i,1);//Check if next subunit is an evaluacion
if(unit.subunits[i]){if(unit.subunits[i].hasOwnProperty('tag')){if(unit.subunits[i].tag.indexOf('evaluacion')>=0){//if exists, delete it
unit.subunits.splice(i,1);}}}}}i=unit.resources.length;while(i--){if(unit.resources[i].ocultar){unit.resources.splice(i,1);}}});//Regenerate units number with new property
data.units.forEach(function(unit,index){unit.numberformenu=index+1;});//Divide subunits in main, aside and evaluation
//TODO QUEDA POR ENTENDER COMO SE GESTIONA EVALUACION, PERO POR AHORA LO SEPARO
var asideClassesName=['flipped','refuerzo','microproyecto','ampliacion','teacher','discover','laboratorio'];var evaluationClassesName=['evaluacion'];data.units.forEach(function(unit){unit.subunitsmain=[];unit.subunitsevaluation=[];unit.resourcesmain=[];unit.resourcesevaluation=[];unit.subunits.forEach(function(subunit){var added=false;if(subunit.tag){evaluationClassesName.forEach(function(tagName){if(subunit.tag.indexOf(tagName)>=0){if(!added){//Search if parent SubUnit exists
unit.subunitsevaluation.push(subunit);unit.subunitsmain[unit.subunitsmain.length-1].evaluationSubUnit=subunit;unit.subunitsevaluation[unit.subunitsevaluation.length-1].parentSubUnit=unit.subunitsmain[unit.subunitsmain.length-1];added=true;}}});}if(!added){unit.subunitsmain.push(subunit);}});unit.resources.forEach(function(resource){var added=false;if(resource.tag){// asideClassesName.forEach(tagName => {
// 	if(resource.tag.indexOf(tagName)>=0){
// 		if(!added){
// 			resource.smtype=tagName;
// 			unit.resourcesmain.push(resource);
// 			added = true;
// 		}
// 	}
// });
asideClassesName.forEach(function(tagName){if(resource.tag.indexOf(tagName)>=0){resource.smtype=tagName;}});evaluationClassesName.forEach(function(tagName){if(resource.tag.indexOf(tagName)>=0){if(!added){unit.resourcesevaluation.push(resource);unit.resourcesmain[unit.resourcesmain.length-1].evaluationSubUnit=resource;unit.resourcesevaluation[unit.resourcesevaluation.length-1].parentSubUnit=unit.resourcesmain[unit.resourcesmain.length-1];added=true;}}});}// if(resource.evalType==2){
// 	unit.resourcesevaluation.push(resource);
// 	added = true;
// }
if(!added){unit.resourcesmain.push(resource);}});});//Add activities progress
data.units.forEach(function(unit){var unitCompletedTotal=0;unit.subunits.forEach(function(subunit){//If exists into window.actividades
if(activities[subunit.id]){// subunit.activity = activities[subunit.id];
if(activities[subunit.id].hasOwnProperty('avance')){//Borja me dijo completado, pero no encuentro esa propiedad
subunit.completado=parseInt(activities[subunit.id].avance);}else{subunit.completado=0;}}else{subunit.completado=0;//No sé si es necesario
}unitCompletedTotal+=subunit.completado;});unit.resources.forEach(function(resource){if(activities[resource.id]){if(activities[resource.id].hasOwnProperty('avance')){//Borja me dijo completado, pero no encuentro esa propiedad
resource.completado=parseInt(activities[resource.id].avance);}else{resource.completado=0;}}else{resource.completado=0;}unitCompletedTotal+=resource.completado;});var unitCompleted=Math.round(unitCompletedTotal/(unit.subunits.length+unit.resources.length));unit.completado=unitCompleted;});// If this page is the first subunit of first unit, show menu.
if(isFirstSubunit){//Hide navbar bottom
if(document.getElementsByClassName('navbar-bottom').length){document.getElementsByClassName('navbar-bottom')[0].style.display='none';}// Generate HTML Structure
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend',_main2.default);//Add class to hide all elemens in body except #santillana_microcontenidos_menu
document.getElementsByTagName('body')[0].classList.add('santillana_microcontenidos_menu');//PreloadImages
var preloadImages=new _ImagesPreload2.default();preloadImages.add(data.homeBackgroundImageUrl);//Start menu navigation
//Router links url hash with screen
new _router2.default(data);//Menú
this.leftMenu=new _0LeftMenu2.default(data);//Else show content of subunit
}else{(0,_debug.cl)('NO es la actividad Portada');(0,_debug.cl)(data);//Get subunit object from data
var subunitObject={};var subunitIndex=-1;var unit={};var isEvaluacion=false;data.units.forEach(function(unitData){//Check Main
unitData.subunitsmain.forEach(function(subunit,index){if(subunit.id==''+idclase){subunitObject=subunit;subunitIndex=index;unit=unitData;}});//Check Evaluation
unitData.subunitsevaluation.forEach(function(subunit,index){if(subunit.id==''+idclase){subunitObject=subunit;subunitIndex=index;unit=unitData;isEvaluacion=true;}});//Check ResourcesMain
unitData.resourcesmain.forEach(function(subunit,index){if(subunit.id==''+idclase){subunitObject=subunit;subunitIndex=index;unit=unitData;}});//Check ResourcesEvaluation
unitData.resourcesevaluation.forEach(function(subunit,index){if(subunit.id==''+idclase){subunitObject=subunit;subunitIndex=index;unit=unitData;isEvaluacion=true;}});});//Copy slides (sections) of this types to Activities Tab
// subunitObject.activitiesNotInTab = [];
subunitObject.activitiesInTab=[];_.forEach(subunitObject.sections,function(section){// let included = false;
_.forEach(_config2.default.slideTypes,function(type){if(section.type==type.number){section.typeName=type.name;subunitObject.activitiesInTab.push(section);// included = true;
}});// if(!included){
// 	subunitObject.activitiesNotInTab.push(section);
// }
});if(subunitObject==={}){alert("Error:\nNinguna lección con esta id.");}this.ScreenSubUnit=new _ScreenSubUnit2.default();this.ScreenSubUnit.init(subunitObject,subunitIndex+1,unit,data,isEvaluacion);//Menú
this.leftMenu=new _0LeftMenu2.default(data,subunitObject.id);}(0,_bookColors.setBookColor)();document.getElementById('mainform').style.opacity=1;while(document.getElementById('sm-spinner')){document.getElementById('sm-spinner').remove();}//Global commands to open menú
window.SantillanaMicrocontenidosMenuToggle=this.leftMenu.toggleMenu;window.SantillanaMicrocontenidosMenuOpen=this.leftMenu.openMenu;window.SantillanaMicrocontenidosMenuClose=this.leftMenu.closeMenu;(0,_debug.cl)("Inicio terminado");}}]);return SantillanaMicrocontenidos;}();exports.default=SantillanaMicrocontenidos;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(47);var _app=__webpack_require__(46);var _app2=_interopRequireDefault(_app);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var SantillanaMicrocontenidosApp=new _app2.default();module.exports={init:function init(data){SantillanaMicrocontenidosApp.init(data);}};//Show loading
// const smLoadingSpinner = document.createElement("div");
// smLoadingSpinner.className='spinner';
// smLoadingSpinner.id='sm-spinner';
// document.body.appendChild(smLoadingSpinner);
if(document.querySelectorAll('#sm-spinner').length==0){document.write('<div id="sm-spinner" class="spinner"><div class="dot dot1"></div><div class="dot dot2"></div></div>');}

/***/ })
/******/ ]);
});