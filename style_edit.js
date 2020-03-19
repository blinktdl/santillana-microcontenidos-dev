(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["_"], factory);
	else if(typeof exports === 'object')
		exports["SantillanaMicrocontenidosStyleUI"] = factory(require("lodash"));
	else
		root["SantillanaMicrocontenidosStyleUI"] = factory(root["_"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__3__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
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
number:27},{name:'Memory',number:28},{name:'Dibujo',number:29},{name:'Arrastrar imágenes',number:31},{name:'Marcar palabras',number:32},{name:'Arrastrar imagen sobre imagen',number:34}]};exports.default=config;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var replaceStringInTemplates=function(){function replaceStringInTemplates(){_classCallCheck(this,replaceStringInTemplates);}_createClass(replaceStringInTemplates,[{key:'replace',value:function replace(string){var stringReplacements={};stringReplacements['--Unidades--']=textweb('santillana_microcontenidos_unidades');stringReplacements['--Portada--']=textweb('santillana_microcontenidos_portada');stringReplacements['--Completado--']=textweb('santillana_microcontenidos_completado');stringReplacements['--Contenidos complementarios--']=textweb('santillana_microcontenidos_contenido_complementario');stringReplacements['--Microcontenido--']=textweb('santillana_microcontenidos_microcontenido');stringReplacements['--Ampliación--']=textweb('santillana_microcontenidos_ampliacion');stringReplacements['--Microproyecto--']=textweb('santillana_microcontenidos_microproyecto');stringReplacements['--Refuerzo--']=textweb('santillana_microcontenidos_refuerzo');stringReplacements['--Flipped Classroom--']=textweb('santillana_microcontenidos_flipped');stringReplacements['--Comienza secuencia didáctica--']=textweb('santillana_microcontenidos_comienza_secuencia');stringReplacements['--Actividades--']=textweb('santillana_microcontenidos_actividades');stringReplacements['--Evaluación final--']=textweb('santillana_microcontenidos_evaluacion');stringReplacements['--Fin de la lección--']=textweb('santillana_microcontenidos_fin_leccion');stringReplacements['--Volver a inicio--']=textweb('santillana_microcontenidos_volver_inicio');stringReplacements['--Créditos--']=textweb('santillana_microcontenidos_volver_creditos');stringReplacements['--Volver--']=textweb('santillana_microcontenidos_volver');stringReplacements['--Comienza evaluación final--']=textweb('santillana_microcontenidos_comienza_evaluacion');stringReplacements['--Inicio--']=textweb('santillana_microcontenidos_inicio');stringReplacements['--Fin--']=textweb('santillana_microcontenidos_fin');stringReplacements['--pag--']=textweb('course_abrev_pag');stringReplacements['--santillana_microcontenidos_microproyecto--']=textweb('santillana_microcontenidos_microproyecto');stringReplacements['--santillana_microcontenidos_flipped--']=textweb('santillana_microcontenidos_flipped');stringReplacements['--santillana_microcontenidos_esencial--']=textweb('santillana_microcontenidos_basica');stringReplacements['--santillana_microcontenidos_reto--']=textweb('santillana_microcontenidos_reto');stringReplacements['--santillana_microcontenidos_estandar--']=textweb('santillana_microcontenidos_estandar');stringReplacements['--santillana_microcontenidos_añadir_secuencia--']=textweb('santillana_microcontenidos_añadir_secuencia');stringReplacements['--santillana_microcontenidos_tareas_casa--']=textweb('santillana_microcontenidos_tareas_casa');stringReplacements['--santillana_microcontenidos_tareas_clase--']=textweb('santillana_microcontenidos_tareas_clase');for(var key in stringReplacements){// skip loop if the property is from prototype
if(!stringReplacements.hasOwnProperty(key))continue;if(key!=stringReplacements[key]&&typeof stringReplacements[key]!='undefined'){while(string.search(key)>-1){string=string.replace(key,stringReplacements[key]);}}}return string;}}]);return replaceStringInTemplates;}();exports.default=replaceStringInTemplates;//NOTA: Todos los valoes están en el array global text_web[]

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.cl=cl;//DEbug function for console logs. 
window.smDebugTime=new Date();function cl(){var timeDiferrence=new Date()-window.smDebugTime;window.smDebugTime=new Date();console.log('%c SM Debug | Time: '+timeDiferrence+'ms.','background: #29495e; color: white');if(arguments.length==1){console.log(arguments[0]);}else{console.log(arguments);}}//Teclas para cambiar entre editor-profesor-alumno
// document.onkeydown = smkeydown;
// function smkeydown(evt) {
// 	let msg = '';
// 	if (!evt) evt = event;
// 	if (evt.altKey) {
// 		const actualClassName = 
// 			document.body.classList.contains('sm-es-alumno') ? 'sm-es-alumno' :
// 			document.body.classList.contains('sm-es-profesor') ? 'sm-es-profesor' :
// 			'sm-es-editor';
// 		switch (actualClassName) {
// 			case 'sm-es-alumno':
// 				document.body.classList.remove('sm-es-alumno');
// 				document.body.classList.add('sm-es-profesor');
// 				msg = "Cambiado a Profesor";
// 				break;
// 			case 'sm-es-profesor':
// 				document.body.classList.remove('sm-es-profesor');
// 				document.body.classList.add('sm-es-editor');
// 				msg = "Cambiado a Editor";
// 				break;
// 			case 'sm-es-editor':
// 				document.body.classList.remove('sm-es-editor');
// 				document.body.classList.add('sm-es-alumno');
// 				msg = "Cambiado a Alumno";
// 				break;
// 			default:
// 				break;
// 		}
// 		const newAlert = document.createElement('DIV');
// 		newAlert.style.position = 'fixed';
// 		newAlert.style.padding = '20px';
// 		newAlert.style.top = '67px';
// 		newAlert.style.right = '20px';
// 		newAlert.style.backgroundColor = 'rgba(255,255,255,0.9)';
// 		newAlert.style.fontSize = '20px';
// 		newAlert.style.color = 'black';
// 		newAlert.innerHTML = msg;
// 		document.body.appendChild(newAlert);
// 		setTimeout(() => {
// 			newAlert.remove();
// 		}, 2000);
// 	}
// }

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<div id=sm-subunit-backbutton role=menuitem></div>";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.removeSlash=removeSlash;exports.hasSlash=hasSlash;function removeSlash(string){if(string.substr(0,2)==='##'){return string.substr(2);}return string;}function hasSlash(string){return string.substr(0,2)==='##';}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};exports.esAlumno=esAlumno;exports.esProfesor=esProfesor;exports.esEditorOMas=esEditorOMas;function esAlumno(){if((typeof blink==='undefined'?'undefined':_typeof(blink))=='object'){return blink.user.esAlumno()||blink.user.esPadre();}return false;}function esProfesor(){if((typeof blink==='undefined'?'undefined':_typeof(blink))=='object'){return blink.user.esProfesor();}return false;}function esEditorOMas(){if((typeof blink==='undefined'?'undefined':_typeof(blink))=='object'){return blink.user.esEditor()||blink.user.esAdmin()||blink.user.esSAdmin()||blink.user.esEditorial();}return false;}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.setBookColor=setBookColor;function setBookColor(){// document.write('<div id="getbookcolor" class="bookcolor" style="display: none"></div>');
var divElement=document.createElement("div");divElement.className='bookcolor';divElement.id='getbookcolor';document.body.appendChild(divElement);var bookColor=window.getComputedStyle(divElement,null).getPropertyValue('color');var style=document.createElement('style');style.type='text/css';style.innerHTML='\n        .sm-color-color,\n        .sm-color-color--pressed:active,\n        .sm-color-color--focus:focus,\n        .sm-color-color--hover:hover{\n            color: '+bookColor+'!important;\n        }\n        .sm-color-background-color,\n        .sm-color-background-color--active.active,\n        .sm-color-background-color--hover:hover,\n        .sm-color-background-color_before:before,\n        .sm-color-background-color_after:after{\n            background-color: '+bookColor+'!important;\n        }\n        .sm-color-border-color,\n        .sm-color-border-color--pressed:active,\n        .sm-color-border-color--hover:hover,\n        .sm-color-border-color--active.active{\n            border-color: '+bookColor+'!important;\n        }\n        \n        .sm-color-svg-fill svg,\n        .sm-color-svg-fill--hover:hover svg,\n        .sm-color-svg-fill--pressed:active > svg{\n            fill: '+bookColor+'!important;\n        }\n        .sm-color-svg-stroke,\n        .sm-color-svg-stroke svg,\n        .sm-color-svg-stroke--hover:hover svg,\n        .sm-color-svg-stroke--pressed:active > svg{\n            stroke: '+bookColor+'!important;\n        }\n\n        .sm-color-child-color > *,\n        .sm-color-child-color--hover:hover > *,\n        .sm-color-child-color--active.active > *,\n        .sm-color-child-color--pressed:active > *{\n            color: '+bookColor+'!important;\n        }\n\n        .info-template .info-icon{\n            background-color: '+bookColor+'!important;\n        }\n        .info-template .info-title,\n        ol.sm-list-colored li:before{\n            color: '+bookColor+'!important;\n        }\n        body.view-mode #actividad .texto_curso .info-button,\n        .cke_contents .info-button{\n            background-color: '+bookColor+'!important;\n        }\n        \n        .sm-nota-budget-background svg path#background,\n        .sm-nota-budget-background--title svg path{\n            fill: '+bookColor+'!important;\n        }\n        .libro-right ul li a.edit-mode{\n            background-color: '+bookColor+'!important;\n        }\n        .libro-right ul li a.edit-mode,\n        .libro-right ul li a.edit-mode:hover,\n        .libro-right ul li a.edit-mode:active{\n            background-color: '+bookColor+'!important;\n        }\n        body.view-mode #actividad .texto_curso ul[style*="list-style-type: disc;"]>li:before,\n        .cke_contents ul[style*="list-style-type: disc;"]>li:before,\n        body.view-mode #actividad .texto_curso ul[style*="list-style-type: square;"]>li:before,\n        .cke_contents ul[style*="list-style-type: square;"]>li:before{\n            background-color: '+bookColor+'!important;\n        }\n\n\n        body.view-mode #actividad .texto_curso table th.level_1_course,\n        body.view-mode #actividad .texto_curso table td.level_1_course,\n        .cke_contents table th.level_1_course,\n        .cke_contents table td.level_1_course{\n            background-color: '+bookColor+'!important;\n        }\n        body.view-mode #actividad .texto_curso table th.level_2_course,\n        body.view-mode #actividad .texto_curso table td.level_2_course,\n        .cke_contents table th.level_2_course,\n        .cke_contents table td.level_2_course{\n            color: '+bookColor+'!important;\n            background-color: '+rgb2rgba(bookColor,0.3)+'!important;\n        }\n        body.view-mode #actividad .texto_curso table th.level_3_course,\n        body.view-mode #actividad .texto_curso table td.level_3_course,\n        body.view-mode #actividad .workspace.matching.lineas th.level_3_course,\n        body.view-mode #actividad .workspace.matching.lineas td.level_3_course,\n        .sm-modal__content__text table th.level_3_course,\n        .sm-modal__content__text table td.level_3_course,\n        .cke_contents table th.level_3_course,\n        .cke_contents table td.level_3_course{\n            color: '+bookColor+'!important;\n            background-color: '+rgb2rgba(bookColor,0.1)+'!important;\n        }\n\n        body.view-mode #actividad .texto_curso .bck-dropdown.dd-color-asig .bck-dropdown-button,\n        .cke_contents .bck-dropdown.dd-color-asig .bck-dropdown-button,\n        body.view-mode #actividad .texto_curso .bck-dropdown.dd-color-asig .bck-dropdown-content,\n        .cke_contents .bck-dropdown.dd-color-asig .bck-dropdown-content{\n            background-color: '+bookColor+'!important;\n        }\n\n\n        /*editar*/\n        #indice .unit-content .content .actividades .add .menu-left>a,\n        .edit .slider-indicators li.concat.active,\n        .slider-indicators li.active{\n            background-color: '+bookColor+'!important;;\n            border-color: '+bookColor+'!important;;\n        }\n        #indice .unit-content .content .actividades .item input[type="checkbox"]:before{\n            border-color: '+bookColor+'!important;;\n        }\n        #indice .unit-content .content .actividades .item a.edit::before,\n        #indice .unit-content .content .material ul li.item a.edit::before,\n        #indice .unit-content .content .actividades .item input[type="checkbox"]:checked:before,\n        .nextbutton-warp .nextbutton-content,\n        .nextbutton-warp .nextbutton-content:hover,\n        #close-edit-mode-button,\n        #close-edit-mode-button:hover,\n        #close-edit-mode-button:active,\n        #indice .units ul#list-units li a.delete,\n        #indice .unit-content .content .actividades .item a.delete,\n        #indice .unit-content .content .material ul li.item a.delete,\n        #indice .unit-content .content .actividades>ul li.item-block-container .sm-editar-block__header .sm-editar-block__delete-icon a.delete,\n        #blinkTransp.lista_actividades_examen .tit_tema{\n            background-color: '+bookColor+'!important;;\n        }\n        #indice .units ul li.add:focus:not(.disabled) a .title,\n        #indice .units ul li.add:focus:not(.disabled) a #crearIndice.plusBlink,\n        #indice .unit-content .content .actividades .add .menu-left>a:hover .plusBlink,\n        #indice .unit-content .content .actividades .add .menu-left>a:hover .title,\n        #indice .unit-content .content .actividades .item a.js-title span.text,\n        #indice .unit-content .content .actividades .item.edit_activitytag_microproyecto .js-title::after,\n        #indice .unit-content .content .actividades .item.edit_activitytag_flipped .js-title::after,\n        #indice .unit-content .content .actividades .item.edit_activitytag_basica .js-title::after,\n        #indice .unit-content .content .material ul li.item a.js-title span.text,\n        .edit .slider-indicators li.concat.active,\n        .sm-modal-combinar-actividad #pagina1 .modal-inner-title p strong,\n        .sm-modal-combinar-actividad #pagina2 .modal-inner-title p strong{\n            color: '+bookColor+';\n        }\n    ';document.getElementsByTagName('head')[0].appendChild(style);window.smBookColor=bookColor;}function rgb2rgba(rgb,alpha){rgb=rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return'rgba('+rgb[1]+','+rgb[2]+','+rgb[3]+','+alpha+')';}// function getStyleRuleValue(style, selector) {
//onsole.log(document.styleSheets);
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}// import config from '../config';
// import anime from 'animejs';
var Dropdown=function(){function Dropdown(){_classCallCheck(this,Dropdown);this.state={lodaded:false};this.domElement;}_createClass(Dropdown,[{key:'init',value:function init(domElement){if(!this.state.loaded){this.state.loaded=true;this.domElement=domElement;if(!this.domElement.classList.contains('js-dropdown-enabled')){this.domElement.firstElementChild.addEventListener('click',this.onButtonClick.bind(this));//If click outside
var _this=this;document.addEventListener('click',function(e){var isClickInside=_this.domElement.contains(e.target);if(!isClickInside){_this.onClose();}});this.domElement.classList.add('js-dropdown-enabled');}}}},{key:'onButtonClick',value:function onButtonClick(){if(this.domElement.classList.contains('active')){this.onClose();}else{this.onOpen();}}},{key:'onClose',value:function onClose(){this.domElement.classList.remove('active');}},{key:'onOpen',value:function onOpen(){this.domElement.classList.add('active');}}]);return Dropdown;}();exports.default=Dropdown;

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _replaceStringInTemplates=__webpack_require__(1);var _replaceStringInTemplates2=_interopRequireDefault(_replaceStringInTemplates);var _slashSlash=__webpack_require__(5);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var replaceStringInTemplates=new _replaceStringInTemplates2.default();var CombinarActividadEstilos=function(){function CombinarActividadEstilos(){_classCallCheck(this,CombinarActividadEstilos);}_createClass(CombinarActividadEstilos,[{key:'init',value:function init(){var _this=this;$('.icon-merge-add').on('click',function(){$('#remote-modal').one('shown.bs.modal',function(e){setTimeout(function(){var modalElement=document.querySelector('#remote-modal');if(modalElement){modalElement.classList.add('sm-modal-combinar-actividad');var lastParraph=modalElement.querySelector('#pagina1 .modal-inner-title p:last-child');var lastParraphSpan=document.createElement('small');lastParraphSpan.innerText=replaceStringInTemplates.replace('* Aquellas unidades que estén vacías de contenido no se mostrarán en este listado');lastParraph.appendChild(lastParraphSpan);// Create an observer instance linked to the callback function
_this.blinkTranspObserver=new MutationObserver(_this.removeSlashSlash);// Start observing the target node for configured mutations
_this.blinkTranspObserver.observe(modalElement.querySelector('#blinkTransp'),{// attributes: true,
childList:true// subtree: true
});}},100);});});}},{key:'removeSlashSlash',value:function removeSlashSlash(mutationsList,observer){//onsole.log("algo ha cambiado");
var modalElement=document.querySelector('#remote-modal');var titles=modalElement.querySelectorAll('.deberes-item-right-title strong');titles.forEach(function(title){var text=title.innerText;title.innerText=(0,_slashSlash.removeSlash)(text);});}}]);return CombinarActividadEstilos;}();exports.default=CombinarActividadEstilos;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _lodash=__webpack_require__(3);var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var EditarActivitiesNavbar=function(){function EditarActivitiesNavbar(){_classCallCheck(this,EditarActivitiesNavbar);}_createClass(EditarActivitiesNavbar,[{key:'init',value:function init(data){// this.sections = this.findActivitySectionsFromData();
this.updateNavBar();this.navbarObserver=new MutationObserver(this.checkIfHasChanged.bind(this));this.navbarObserver.observe(document.querySelector('.edit .navbar-bottom .slider-indicators'),{childList:true});}// //Selecciona las secciones (slides) de la actividad actual
// findActivitySectionsFromData(){
// 	// const unit = _.find(data.units, {id: idtema.toString()});
// 	// const subunit = _.find(unit.subunits, {id: idclase.toString()});
// 	// return subunit.sections;
// 	const sections = [];
// 	const sliders = document.querySelectorAll('.js-slider-item');
// 	sliders.forEach(slide => {
// 		const slideObj = {}
// 		slideObj.isMultimedia = slide.querySelector('input[name*="_type"][value="7"]');
// 		sections.push(slideObj);
// 	});
// 	return sections;
// }
//Chequea si el contenido ha cambiado de verdad, y no es un tooltip
},{key:'checkIfHasChanged',value:function checkIfHasChanged(mutationsList,observer){var _this=this;var needsUpdate=false;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=mutationsList[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var mutation=_step.value;if(mutation.type==='childList'){mutation.addedNodes.forEach(function(node){if(node.classList.contains('slider-indicator')){needsUpdate=true;}});mutation.removedNodes.forEach(function(node){if(node.classList.contains('slider-indicator')){needsUpdate=true;}});}}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}if(needsUpdate){//onsole.log("SE ACTUALIZA")
// this.loadActivityData();
this.updateNavBar();setTimeout(function(){_this.updateNavBar();},400);}}//Actualiza los datos (se ejecuta cuando se cambia .slide-indicators)
// loadActivityData(){
// 	//onsole.log("LOAD");
// 	// const _this = this;
// 	// blink.getCourse(idcurso).done(function (data) {
// 	// 	console.log("LOADED")
// 	// 	_this.sections = _this.findActivitySectionsFromData(data);
// 	// 	console.log(_this)
// 	// 	console.log(_this.sections)
// 	// 	_this.updateNavBar();
// 	// })
// 	this.sections = this.findActivitySectionsFromData();
// 	this.updateNavBar();
// }
},{key:'updateNavBar',value:function updateNavBar(){var slideIndicatorsElements=document.querySelectorAll('.edit .navbar-bottom .slider-indicators .slider-indicator');_lodash2.default.forEach(slideIndicatorsElements,function(slideElement,i){var number=parseInt(slideElement.dataset.goTo);// if(this.sections[i] && this.sections[i].isMultimedia){
if(document.querySelector('.js-slider-item .js-slide-wrapper[data-slide-index="'+number+'"] input[name*="_type"][value="7"]')){slideElement.classList.add('sm-multimedia');}else{slideElement.classList.remove('sm-multimedia');}});}}]);return EditarActivitiesNavbar;}();exports.default=EditarActivitiesNavbar;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<div class=sm-editar__aside__dropdown__container> <div class=sm-editar__aside__dropdown> <div> <span>--Todos los contenidos--</span> <svg xmlns=http://www.w3.org/2000/svg width=8 height=5 viewBox=\"0 0 8 5\"> <path fill=#2A495D fill-rule=evenodd d=\"M634.619385,490.476172 C634.863488,490.229578 635.261277,490.227559 635.507871,490.471662 L635.512379,490.47617 L638,492.989153 L640.487621,490.47617 C640.731725,490.229577 641.129514,490.22756 641.376107,490.471664 L641.380615,490.476172 C641.627938,490.726019 641.627938,491.128431 641.380615,491.378277 L638,494.793388 L634.619385,491.378277 C634.372062,491.128431 634.372062,490.726019 634.619385,490.476172 Z\" transform=\"translate(-634 -490)\"/> </svg> </div> <ul> <li data-name=all>--Todos los contenidos--</li> <li data-name=elementos_basicos>--Elementos básicos--</li> <li data-name=elementos_avanzados>--Elementos avanzados--</li> <li data-name=recursos_profesor>--Recursos del profesor--</li> </ul> </div> </div>";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _lodash=__webpack_require__(3);var _lodash2=_interopRequireDefault(_lodash);var _jsCookie=__webpack_require__(7);var _jsCookie2=_interopRequireDefault(_jsCookie);var _replaceStringInTemplates=__webpack_require__(1);var _replaceStringInTemplates2=_interopRequireDefault(_replaceStringInTemplates);var _debug=__webpack_require__(2);var _editarFiltro=__webpack_require__(18);var _editarFiltro2=_interopRequireDefault(_editarFiltro);var _dropdown=__webpack_require__(11);var _dropdown2=_interopRequireDefault(_dropdown);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var replaceStringInTemplates=new _replaceStringInTemplates2.default();//Templates
var EditarFiltroMaterialApoyo=function(){function EditarFiltroMaterialApoyo(){_classCallCheck(this,EditarFiltroMaterialApoyo);}_createClass(EditarFiltroMaterialApoyo,[{key:'init',value:function init(units){//onsole.log(units)
_lodash2.default.forEach(units,function(unit){var unitContentElement=document.querySelector('.unit-content[data-id="'+unit.id+'"]');// const unitMaterialActionsContainer = unitContentElement.querySelector(`.material .add`)
// unitMaterialActionsContainer.insertAdjacentHTML('beforeend',editarFiltroTemplate);
//onsole.log(unitContentElement)
// const asideDropdown = new Dropdown();
// const dropdownElement = unitContentElement.querySelector('.sm-editar__aside__dropdown')
// asideDropdown.init(dropdownElement);
// _.forEach(dropdownElement.querySelectorAll('li'), opcion => {
// 	if(!opcion.classList.contains('js-option-enabled')){
// 		opcion.addEventListener('click', this.filterResources.bind(this, opcion.dataset.name, dropdownElement));
// 		opcion.classList.add('js-option-enabled');
// 	}
// });
// const dropDownDefaultText = dropdownElement.querySelector('ul li:first-child').innerHTML;
// dropdownElement.querySelector('div:first-child>span').innerHTML = dropDownDefaultText;
_lodash2.default.forEach(unit.resources,function(resource){var resourceElement=unitContentElement.querySelector('.material .item[data-id="'+resource.id+'"');resourceElement.dataset.tags=resource.tag+' '+resource.tags;});});}},{key:'filterResources',value:function filterResources(){var filterTag=arguments[0];var dropdownElement=arguments[1];//onsole.log(arguments)
//hide dropdown
dropdownElement.classList.remove('active');//change dropdown selected label
var liOptionElement=dropdownElement.querySelector(' ul li[data-name="'+filterTag+'"]');dropdownElement.querySelector('div:first-child>span').innerHTML=liOptionElement.innerHTML;var resourcesContainer=dropdownElement.parentElement.parentElement.parentElement;// filter
_lodash2.default.forEach(resourcesContainer.querySelectorAll('li.item'),function(resourceElement){//onsole.log(resourceElement)
var tags=resourceElement.dataset.tags||'';if(filterTag=='all'||tags.search(filterTag)>-1){resourceElement.classList.remove('filter-hidden');}else{resourceElement.classList.add('filter-hidden');}});}}]);return EditarFiltroMaterialApoyo;}();exports.default=EditarFiltroMaterialApoyo;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<div class=\"sm-editar-block__header js-item\"> <div class=sm-editar-block__number></div> <div class=sm-editar-block__title><h4>--TITULO--</h4><svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=8 height=8 viewBox=\"0 0 8 8\"> <defs> <path id=checkbox-ok-a d=\"M131.93864,522.576849 L127.328004,529.804322 C127.269615,529.892674 127.179996,529.951695 127.079514,529.962558 C127.065935,529.966179 127.056091,529.966179 127.042173,529.966179 C126.955948,529.966179 126.869045,529.929245 126.804206,529.862982 L124.107483,527.137471 C124.037892,527.071569 124.000211,526.975976 124.000211,526.876399 C123.996817,526.777184 124.034497,526.681228 124.100354,526.611705 L124.986702,525.666268 C125.055613,525.592762 125.148627,525.548948 125.245375,525.559449 C125.342123,525.563432 125.431742,525.607246 125.493186,525.684735 L126.772975,527.269999 L131.40432,522.113002 C131.528225,521.973232 131.731905,521.962731 131.873123,522.083672 C132.010947,522.201354 132.042178,522.418612 131.93864,522.576849\"/> </defs> <use fill=#FFF fill-rule=evenodd transform=\"translate(-124 -522)\" xlink:href=#checkbox-ok-a /> </svg></div> <div class=sm-editar-block__lock_and_link-icons> </div> <div class=sm-editar-block__plegar-icon><span class=sm-block-toggle><svg width=32px height=20px viewBox=\"0 0 32 20\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g id=Page-1 stroke=none stroke-width=1 fill=none fill-rule=evenodd> <path d=\"M7.36753443,-4.63316247 C6.30189532,-3.5782874 6.29316935,-1.85927101 7.34804442,-0.793631906 C7.35450536,-0.787105043 7.36099937,-0.780611006 7.3675262,-0.774150044 L18.2272028,9.97592454 L18.2272028,9.97592454 L7.3675262,20.7259991 C6.30189159,21.7808787 6.29317295,23.4998952 7.34805256,24.5655298 C7.35451353,24.5720566 7.36100756,24.5785506 7.36753443,24.5850115 C8.447229,25.6538001 10.1862216,25.6538001 11.2659161,24.5850115 L26.0240755,9.97592454 L26.0240755,9.97592454 L11.2659161,-4.63316247 C10.1862216,-5.70195103 8.447229,-5.70195103 7.36753443,-4.63316247 Z\" id=arrow fill=#FF0000 transform=\"translate(16.000000, 9.975925) rotate(-270.000000) translate(-16.000000, -9.975925) \"></path> </g> </svg></span></div> <div class=sm-editar-block__delete-icon> </div> </div> ";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _lodash=__webpack_require__(3);var _lodash2=_interopRequireDefault(_lodash);var _jsCookie=__webpack_require__(7);var _jsCookie2=_interopRequireDefault(_jsCookie);var _replaceStringInTemplates=__webpack_require__(1);var _replaceStringInTemplates2=_interopRequireDefault(_replaceStringInTemplates);var _debug=__webpack_require__(2);var _editarBlockHeader=__webpack_require__(20);var _editarBlockHeader2=_interopRequireDefault(_editarBlockHeader);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var replaceStringInTemplates=new _replaceStringInTemplates2.default();var ACTIVITY_BLOCK="activity_block_";var ACTIVITY_BLOCK_TITLE="activity_block_title";//Templates
var EditarBloques=function(){function EditarBloques(){_classCallCheck(this,EditarBloques);}_createClass(EditarBloques,[{key:'init',value:function init(units){var _this=this;//First of all, create an array with blocks info with
//-block container dom element
//-block header subunit (with data and domElement)
//-block subunits (with data and domElement)
var blocks=[];//First, we search blocks
_lodash2.default.forEach(units,function(unit){_lodash2.default.forEach(unit.subunits,function(subunit){var tags=subunit.tags.split(' ');var isBlock=_lodash2.default.includes(tags,ACTIVITY_BLOCK_TITLE);var metodologiaBlockTag=_lodash2.default.find(tags,function(tag){// :D sorry...
return tag.substr(0,15)===ACTIVITY_BLOCK&&tag!==ACTIVITY_BLOCK_TITLE;});var metodologiaBlockId=metodologiaBlockTag?metodologiaBlockTag.replace(ACTIVITY_BLOCK,''):null;if(isBlock){//l(subunit);
var newBlock={id:metodologiaBlockId,containerDomElement:null,headerSubUnit:{data:subunit,domElement:document.querySelector('li.item[data-id=\''+subunit.id+'\']')},subUnits:[]};blocks.push(newBlock);}});});//Then we search subunits
_lodash2.default.forEach(units,function(unit){_lodash2.default.forEach(unit.subunits,function(subunit){var tags=subunit.tags.split(' ');var isBlock=_lodash2.default.includes(tags,ACTIVITY_BLOCK_TITLE);var metodologiaBlockTag=_lodash2.default.find(tags,function(tag){// :D sorry...
return tag.substr(0,15)===ACTIVITY_BLOCK&&tag!==ACTIVITY_BLOCK_TITLE;});var metodologiaBlockId=metodologiaBlockTag?metodologiaBlockTag.replace(ACTIVITY_BLOCK,''):null;var isNewKidOnTheBlock=!isBlock&&metodologiaBlockTag?true:false;if(isNewKidOnTheBlock){var currentBlock=_lodash2.default.find(blocks,{id:metodologiaBlockId});if(currentBlock){var newKidOnTheBlock={data:subunit,domElement:document.querySelector('li.item[data-id=\''+subunit.id+'\']')};currentBlock.subUnits.push(newKidOnTheBlock);}}});});//Now lets create block containers
_lodash2.default.forEach(blocks,function(block,index){//Create container before header item
var container=document.createElement('li');container.classList.add('item-block-container');container.dataset['id']=block.id;block.containerDomElement=container;//Insert Container
block.headerSubUnit.domElement.parentElement.insertBefore(block.containerDomElement,block.headerSubUnit.domElement);//Add header from template
var headerDomHtml=_editarBlockHeader2.default;//.replace(`--NUMBER--`, index + 1);
headerDomHtml=headerDomHtml.replace('--TITULO--',block.headerSubUnit.data.title);block.containerDomElement.insertAdjacentHTML('afterbegin',headerDomHtml);//Insert edit link into title
block.containerDomElement.querySelector('.sm-editar-block__title').insertBefore(block.headerSubUnit.domElement.querySelector('a.edit'),block.containerDomElement.querySelector('.sm-editar-block__title h4'));//Add id to header. Needed for Blink rename function.
block.containerDomElement.querySelector('.sm-editar-block__header').dataset['id']=block.headerSubUnit.data.id;//Insert delete element
block.containerDomElement.querySelector('.sm-editar-block__header .sm-editar-block__lock_and_link-icons').appendChild(block.headerSubUnit.domElement.querySelector('.item-containment'));//Insert link and lock
block.containerDomElement.querySelector('.sm-editar-block__header .sm-editar-block__delete-icon').appendChild(block.headerSubUnit.domElement.querySelector('a.delete'));console.log(block.headerSubUnit.domElement);//remove headerSubunit. We don't need it
block.headerSubUnit.domElement.remove();// block.containerDomElement.appendChild(block.headerSubUnit.domElement)
//Create Content (subunit list and button)
var containerContent=document.createElement('div');containerContent.classList.add('sm-editar-block__content');//Create subunit list element
var containerList=document.createElement('ul');containerList.classList.add('sm-editar-block__subunits');containerContent.appendChild(containerList);//Create actions element
var containerActions=document.createElement('div');containerActions.classList.add('sm-editar-block__actions');containerActions.innerHTML='<a><span>'+replaceStringInTemplates.replace('--santillana_microcontenidos_a\xF1adir_secuencia--')+'</span></a>';containerActions.querySelector('a').addEventListener('click',function(){var url=new URL(window.location.href),idgrupo=url.searchParams.get('idgrupo')||'',idtema=$(containerActions).parents('.js-unit-content').data('id'),isResource=false,type='',blocktag=''+ACTIVITY_BLOCK+block.id;dlgCreateNewEditClass(idcurso,idtema,null,null,null,isResource,type,idgrupo,blocktag);});containerContent.appendChild(containerActions);//Insert content element in block
block.containerDomElement.appendChild(containerContent);//Move subunit elements
_lodash2.default.forEach(block.subUnits,function(subUnit){containerList.appendChild(subUnit.domElement);});//Add eventes
block.containerDomElement.querySelector('.sm-block-toggle').addEventListener('click',_this.toggle.bind(_this,block));if(_jsCookie2.default.get('block_editar_'+block.id+'_closed')){block.containerDomElement.classList.add('item-block-container--closed');$(block.containerDomElement.querySelector('.sm-editar-block__content')).slideUp(0);}});//l(blocks);
}},{key:'toggle',value:function toggle(block,e){if(block.containerDomElement.classList.contains('item-block-container--closed')){block.containerDomElement.classList.remove('item-block-container--closed');_jsCookie2.default.remove('block_editar_'+block.id+'_closed');$(block.containerDomElement.querySelector('.sm-editar-block__content')).slideDown(300);}else{block.containerDomElement.classList.add('item-block-container--closed');_jsCookie2.default.set('block_editar_'+block.id+'_closed','true',{expires:1});$(block.containerDomElement.querySelector('.sm-editar-block__content')).slideUp(300);}}}]);return EditarBloques;}();exports.default=EditarBloques;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.editarAddColorClasses=undefined;var _bookColors=__webpack_require__(10);var editarAddColorClasses=exports.editarAddColorClasses=function editarAddColorClasses(){(0,_bookColors.setBookColor)();};

/***/ }),
/* 24 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function polyfill(window) {
  const ElementPrototype = window.Element.prototype;

  if (typeof ElementPrototype.matches !== 'function') {
    ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.mozMatchesSelector || ElementPrototype.webkitMatchesSelector || function matches(selector) {
      let element = this;
      const elements = (element.document || element.ownerDocument).querySelectorAll(selector);
      let index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }

      return Boolean(elements[index]);
    };
  }

  if (typeof ElementPrototype.closest !== 'function') {
    ElementPrototype.closest = function closest(selector) {
      let element = this;

      while (element && element.nodeType === 1) {
        if (element.matches(selector)) {
          return element;
        }

        element = element.parentNode;
      }

      return null;
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (polyfill);
//# sourceMappingURL=index.mjs.map


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _elementClosest=__webpack_require__(24);var _elementClosest2=_interopRequireDefault(_elementClosest);var _editar_add_color_classes=__webpack_require__(23);var _replaceStringInTemplates=__webpack_require__(1);var _replaceStringInTemplates2=_interopRequireDefault(_replaceStringInTemplates);__webpack_require__(22);var _blinkFunctions=__webpack_require__(6);var _editar_bloques=__webpack_require__(21);var _editar_bloques2=_interopRequireDefault(_editar_bloques);var _editar_filtro_material_apoyo=__webpack_require__(19);var _editar_filtro_material_apoyo2=_interopRequireDefault(_editar_filtro_material_apoyo);var _editar_activities_navbar=__webpack_require__(17);var _editar_activities_navbar2=_interopRequireDefault(_editar_activities_navbar);var _editar_combinar_actividad=__webpack_require__(16);var _editar_combinar_actividad2=_interopRequireDefault(_editar_combinar_actividad);var _subUnitBackButton=__webpack_require__(4);var _subUnitBackButton2=_interopRequireDefault(_subUnitBackButton);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}(0,_elementClosest2.default)(window);var replaceStringInTemplates=new _replaceStringInTemplates2.default();//Event example
// document.addEventListener('blocksCreated', function (e) { console.log("HOLA 👋")}, false);
$(document).ready(function(){// const smStylesEditLoadData = () =>{
console.log("Iniciando ajustes JS del modo editar.");if(!window.smStylesEditExecuted){var eventBlocksCreated=new Event('blocksCreated');window.smStylesEditExecuted=true;//to no execute this more than once
blink.getCourse(idcurso).done(function(data){smStylesEditInit(data);document.dispatchEvent(eventBlocksCreated);});}// }
// function smStylesCheckIfBlinkObjectExists() {
// 	if (blink && blink.getCourse) {
// 			// Here is your next action
// 			console.log("existe");
// 			smStylesEditLoadData();
// 	} else {
// 		setTimeout(smStylesCheckIfBlinkObjectExists, 50);
// 		console.log("no existe");
// 	}
// }
// setTimeout(smStylesCheckIfBlinkObjectExists, 0);
});var smStylesEditInit=function smStylesEditInit(data){console.log('%c Santillana Microcontenidos ','font-size: 40px; font-weight: 700; color: white; background-color: #2a495d;');console.log('Fecha de compilación: 2020-3-19 1:11:35 PM.');console.log("Iniciando...");console.log("Datos cargados.");(0,_editar_add_color_classes.editarAddColorClasses)();var isInTocPage=document.querySelector('.content-wrapper.libro')?true:false;//Disable contextual menu (right click)
var imagesVideosAndAudios=document.querySelectorAll('img, video, video, svg');_.forEach(imagesVideosAndAudios,function(elem){elem.addEventListener('contextmenu',function(event){return event.preventDefault();});});//Activities list
if(isInTocPage){console.log("Is in TOC page");var subunitsItemsDom=document.querySelectorAll('.actividades ul li.item');if(subunitsItemsDom.length){subunitsItemsDom.forEach(function(item){var unitId=item.closest('.unit-content').dataset.id;var subUnitId=item.dataset.id;var unitObject=_.find(data.units,{id:unitId});if(unitObject){var subUnitObject=_.find(unitObject.subunits,{id:subUnitId});//Fix to avoid error if tag or tags doesn't exist
if(typeof subUnitObject.tag==='undefined')subUnitObject.tag='';if(typeof subUnitObject.tags==='undefined')subUnitObject.tags='';var isEvaluacion=subUnitObject.tag.indexOf('evaluacion')>=0||subUnitObject.tags.indexOf('evaluacion')>=0;var classesNames=['microproyecto','flipped','esencial','reto'];//Tags
var tipoTexto='';classesNames.forEach(function(className){var tagString='';if(subUnitObject.tag){tagString=subUnitObject.tag;}var tagsString='';if(subUnitObject.tags&&subUnitObject.tags.indexOf(className)>-1){tagsString=subUnitObject.tags;}var tagAndTags=tagString+' '+tagsString;if(tagAndTags.indexOf(className)>-1){tipoTexto=replaceStringInTemplates.replace('--santillana_microcontenidos_'+className+'--');}});if(tipoTexto===''){tipoTexto=replaceStringInTemplates.replace('--santillana_microcontenidos_estandar--');}if(isEvaluacion){item.classList.add('item--is-evaluation');}var descriptionSpanItem=item.querySelector('.item-containment span.text');var titleItem=item.querySelector('.js-title');if(descriptionSpanItem&&titleItem){titleItem.insertBefore(descriptionSpanItem,titleItem.firstElementChild);}var tagItem=document.createElement('span');tagItem.classList.add('tags');tagItem.innerHTML=tipoTexto;titleItem.appendChild(tagItem);}});}var editarBloques=new _editar_bloques2.default();editarBloques.init(data.units);var editarFiltroMaterialApoyo=new _editar_filtro_material_apoyo2.default();editarFiltroMaterialApoyo.init(data.units);var combinarActividadEstilos=new _editar_combinar_actividad2.default();combinarActividadEstilos.init();//Remove cover page unit for teachers
if(!(0,_blinkFunctions.esEditorOMas)()){//onsole.log("Borrando...")
var unitsItemDom=document.querySelectorAll('#list-units li.litema');if(unitsItemDom.length>1){//If cover page unit is active
var intervalo=setInterval(function(){if(document.querySelectorAll('#list-units li.litema.active').length){var unitItemSecondLinkDom=unitsItemDom[1].querySelector('a.js-tema');if(unitItemSecondLinkDom){if(unitsItemDom[0].classList.contains('active')){// unitItemSecondLinkDom.click();
$(unitItemSecondLinkDom).trigger('click');}unitsItemDom[0].remove();}clearInterval(intervalo);}},20);}}//Remove al kind of activities from popover menu, except blink activity (resource). This script dont hide it, only add a text to button.
var iconActividadAdd=document.querySelector('.icon-actividad-add');iconActividadAdd.innerHTML=replaceStringInTemplates.replace('--santillana_anadir_evaluacion--');//Change block title opacity when all activities are not visible. We detect when it changes, because it's blink who change de item className.
var unitsToObserve=document.querySelectorAll('.unit-content ul.js-list-activities li.item-block-container .sm-editar-block__content .item');unitsToObserve.forEach(function(unitDom){var blockVisibilityObserver=new MutationObserver(function(mutationsList,observer){var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=mutationsList[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var mutation=_step.value;updateBlickTitleVisibility(mutation.target);}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}});blockVisibilityObserver.observe(unitDom,{attributes:true,childList:false,subtree:false});});var updateBlickTitleVisibility=function updateBlickTitleVisibility(target){if(target.parentElement){var isVisible=false;var blockDom=target.parentElement.parentElement.parentElement;var blockItemsDom=blockDom.querySelectorAll('.sm-editar-block__content .sm-editar-block__subunits li.item');blockItemsDom.forEach(function(blockItemDom){if(blockItemDom.classList.contains('visible')){isVisible=true;}});if(isVisible){blockDom.classList.remove('item-block-container--no_visible');}else{blockDom.classList.add('item-block-container--no_visible');}}};//Select colors main
var selectElements=document.querySelectorAll('select.publication-status');selectElements.forEach(function(selectElement){selectElement.dataset.valueForCss=selectElement.value;selectElement.addEventListener('change',function(e){selectElement.dataset.valueForCss=selectElement.value;});});//Change texto "Material de apoyo" with "Contenidos complementarios"
var contenidosComplementariosButtons=document.querySelectorAll('#indice .unit-content .content .material .title-buttons .btn-group button');_.forEach(contenidosComplementariosButtons,function(elem){elem.innerHTML=replaceStringInTemplates.replace('--Contenidos complementarios--');});//Add pencil icons
var actividadesEditButtons=document.querySelectorAll('#indice .unit-content .content .actividades li.item a.edit');var pencilIcon='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">\n\t\t\t<path fill="'+window.smBookColor+'" fill-rule="evenodd" d="M55.3233657,593.038292 C55.6680511,593.038292 55.9502986,593.173143 56.1916514,593.379487 C57.7830011,594.392892 59.2080899,595.328077 59.559992,595.62634 C60.0637248,596.052077 60.2440229,596.713157 59.7411849,597.572911 C59.6710829,597.690291 58.4231937,599.285898 53.4012282,605.677539 C53.3453007,605.749969 53.2746356,605.81103 53.1945045,605.856311 L47.8628213,608.942857 C47.630718,609.078855 47.3219327,609.068894 47.0970013,608.916865 C46.8646125,608.760756 46.7427091,608.491233 46.7809063,608.215859 L47.5524441,602.60952 C47.6087101,602.31774 47.8391431,602.009516 54.2533764,593.617747 C54.5693482,593.204844 54.9506539,593.038292 55.3233657,593.038292 Z M55.3233657,593.378719 C55.0513575,593.378719 54.7713734,593.501014 54.5237859,593.824555 C48.4351171,601.790386 47.9257074,602.471766 47.888204,602.664948 L47.1181312,608.262444 C47.097866,608.408542 47.1620533,608.550457 47.2872322,608.634548 C47.4039892,608.713463 47.5717027,608.718873 47.6914916,608.648687 L53.0254708,605.560819 C53.0677216,605.536938 53.1036904,605.505858 53.1326605,605.46835 C58.0328773,599.231653 59.3915911,597.494341 59.4481193,597.399703 C59.858881,596.69737 59.726721,596.212927 59.340164,595.886275 C59.0068327,595.603703 57.5718314,594.66201 55.9902473,593.652978 C55.7861418,593.480204 55.5737315,593.378719 55.3233657,593.378719 Z M55.514005,594.466044 L56.3487331,595.001196 C56.4086483,595.039324 56.4501805,595.102644 56.461755,595.172772 C56.4740104,595.2429 56.4556273,595.315751 56.4113717,595.372262 L50.2503161,603.285838 C50.0610384,603.526861 50.105294,603.87682 50.3469975,604.065417 C50.5798499,604.247886 50.9434263,604.20295 51.1252146,603.968055 L57.3700154,595.948265 C57.4523988,595.843414 57.6001443,595.818903 57.7118045,595.893116 C58.1026152,596.153203 58.4328298,596.376523 58.6118946,596.510652 C58.7147037,596.586226 58.7453422,596.727163 58.6827035,596.839504 L58.6438948,596.90759 C58.3048291,597.358316 54.843363,601.768894 52.4910094,604.762612 C52.4712647,604.788485 52.4474347,604.810272 52.4195197,604.825932 L49.5054609,606.512409 C49.3910773,606.591389 49.2583106,606.64858 49.1064799,606.64858 C48.7061373,606.64858 48.3834121,606.324494 48.3834121,605.925513 C48.3834121,605.890108 48.3990717,605.85947 48.4045186,605.824746 C48.4045186,605.823384 48.4031569,605.822023 48.4031569,605.820661 L48.7953293,602.974007 C48.8007761,602.932475 48.8164358,602.892304 48.8416274,602.858261 C49.4326094,602.048044 52.4487964,598.089554 55.1749393,594.52596 C55.255961,594.420427 55.4037065,594.395236 55.514005,594.466044 Z" transform="translate(-46.774 -593.038)"/>\n\t\t</svg>';_.forEach(actividadesEditButtons,function(elem){elem.innerHTML=pencilIcon;});//Add alert text to items outside blocks
var allItems=document.querySelectorAll('#indice .unit-content .content .actividades>ul li.item');_.forEach(allItems,function(elem){var text=replaceStringInTemplates.replace('Esta secuencia debe ser insertada en uno de los bloques para que pueda ser visible para el alumno');var alertElement=document.createElement('div');alertElement.classList.add('item-out-of-block-alert');alertElement.classList.add('sm-color-color');alertElement.innerHTML='\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17">\n\t\t\t\t<path fill="'+window.smBookColor+'" fill-rule="evenodd" d="M35.6874463,556.893029 C35.8773886,556.893029 36.0418886,556.96545 36.1809463,557.110292 C36.3197348,557.255134 36.3891963,557.426643 36.3891963,557.624818 L36.3891963,557.624818 L36.3891963,564.211344 L37.0912155,564.211344 C37.2812925,564.211344 37.4459271,564.283765 37.5847155,564.428608 C37.7239078,564.57345 37.7929655,564.744958 37.7929655,564.943134 L37.7929655,564.943134 L37.7929655,566.406853 C37.7929655,566.605029 37.723504,566.776678 37.5847155,566.92166 C37.4457925,567.066222 37.2812925,567.138783 37.0912155,567.138783 L37.0912155,567.138783 L31.4758694,567.138783 C31.2857925,567.138783 31.1212925,567.066222 30.9823694,566.92166 C30.8434463,566.776678 30.7739848,566.605029 30.7739848,566.406853 L30.7739848,566.406853 L30.7739848,564.943134 C30.7739848,564.744958 30.8434463,564.57345 30.9823694,564.428608 C31.1212925,564.283765 31.2857925,564.211344 31.4758694,564.211344 L31.4758694,564.211344 L32.1778886,564.211344 L32.1778886,559.820327 L31.4758694,559.820327 C31.2857925,559.820327 31.1212925,559.747906 30.9823694,559.603064 C30.8434463,559.458362 30.7739848,559.286713 30.7739848,559.088537 L30.7739848,559.088537 L30.7739848,557.624818 C30.7739848,557.426643 30.8434463,557.255134 30.9823694,557.110292 C31.1212925,556.96545 31.2857925,556.893029 31.4758694,556.893029 L31.4758694,556.893029 Z M35.6873117,551.038292 C35.8773886,551.038292 36.0420232,551.110853 36.1808117,551.255555 C36.3198694,551.400537 36.3893309,551.572046 36.3893309,551.770222 L36.3893309,551.770222 L36.3893309,553.96573 C36.3893309,554.163906 36.3198694,554.335555 36.1810809,554.480257 C36.0420232,554.625099 35.8775232,554.69752 35.6875809,554.69752 L35.6875809,554.69752 L32.8796386,554.69752 C32.6895617,554.69752 32.5250617,554.625099 32.3861386,554.480257 C32.2472155,554.335555 32.177754,554.163906 32.177754,553.96573 L32.177754,553.96573 L32.177754,551.770222 C32.177754,551.572046 32.2472155,551.400397 32.3861386,551.255555 C32.5250617,551.110853 32.6895617,551.038292 32.8796386,551.038292 L32.8796386,551.038292 Z" transform="translate(-30.774 -551.038)"/>\n\t\t\t</svg>\n\t\t\t<div>'+text+'</div>\n\t\t\t';elem.appendChild(alertElement);});//Ad eye yo left menu unit when is only for teacher
var menuLeftTitlesForEyes=document.querySelectorAll('#indice .units ul#list-units>li>a.js-tema');menuLeftTitlesForEyes.forEach(function(titleItem){var titleString=titleItem.querySelector('.title').innerHTML.trim();if(titleString.slice(-3)==='(P)'){titleItem.querySelector('.title').innerHTML=titleString.slice(0,-3);titleItem.classList.add('sm-unit--only-teacher');var svgContainer=document.createElement('div');svgContainer.classList.add('sm-unit--only-teacher__svg');svgContainer.innerHTML='\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="33" height="24" viewBox="0 0 33 24">\n\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t<path id="teacher-eye-a" d="M107.046016,592.041005 C107.105414,592.041005 107.212592,592.076569 107.367551,592.147696 C107.522071,592.218823 107.7064,592.310678 107.920756,592.42326 C108.135331,592.535842 108.331496,592.645369 108.509907,592.75206 C108.688318,592.858751 108.875934,592.968496 109.072318,593.08086 C109.268921,593.19366 109.384866,593.261951 109.420373,593.285514 C109.611277,593.404642 109.7064,593.564351 109.7064,593.765951 C109.7064,593.84886 109.700921,593.902314 109.688866,593.925878 C108.438893,596.153732 106.563825,599.507623 104.063879,603.987114 L103.788632,604.480228 C101.425248,608.713941 99.6362062,611.909337 98.4209205,614.066023 L98.4209205,614.066023 L97.5459616,615.647842 C97.4269479,615.837442 97.2601534,615.932569 97.0460164,615.932569 C96.9031123,615.932569 96.1055233,615.518023 94.6532493,614.688278 C94.4627835,614.569805 94.3674411,614.403987 94.3674411,614.190605 C94.3674411,614.048351 94.6293589,613.532787 95.1531945,612.644132 C93.4508383,611.873514 91.8824,610.848714 90.4478794,609.568642 C89.0133589,608.289005 87.7721534,606.837005 86.7247013,605.213514 C86.4864548,604.846314 86.3674411,604.437442 86.3674411,603.987114 C86.3674411,603.536787 86.4864548,603.127914 86.7247013,602.760278 C88.5462904,599.975405 90.807989,597.777223 93.5104548,596.165296 C96.2129205,594.553587 99.1652493,593.747623 102.36766,593.747623 C103.427167,593.747623 104.498729,593.848423 105.581907,594.049805 L105.581907,594.049805 L106.546071,592.325514 C106.665085,592.135914 106.83166,592.041005 107.046016,592.041005 Z M112.171058,596.769878 C113.302016,597.528496 114.388701,598.434823 115.430016,599.489514 C116.471331,600.544205 117.331386,601.634678 118.010181,602.760278 C118.248427,603.163478 118.367441,603.572351 118.367441,603.987114 C118.367441,604.40166 118.248427,604.810751 118.0104,605.213732 C117.545962,605.972132 116.897194,606.831332 116.063879,607.791332 C114.278236,609.829587 112.209633,611.411842 109.85851,612.537223 C107.507386,613.663042 105.01051,614.225951 102.367441,614.225951 L102.367441,614.225951 L103.689085,611.879405 C106.212921,611.666242 108.54914,610.854823 110.698181,609.44406 C112.846564,608.033951 114.641414,606.214751 116.081633,603.986896 C114.712647,601.865732 113.033962,600.123551 111.046016,598.760787 L111.046016,598.760787 Z M95.4567561,597.712423 C92.7306191,599.098751 90.4627835,601.19046 88.6532493,603.987332 C90.6411945,607.044714 93.1830027,609.266678 96.2782356,610.653223 L96.2782356,610.653223 L97.6711123,608.146532 C96.6352767,607.399914 95.825852,606.458023 95.2424,605.320423 C94.6589479,604.182605 94.3674411,602.979987 94.3674411,601.711914 C94.3674411,600.278023 94.7306191,598.944714 95.4567561,597.712423 Z M110.224537,600.218678 C110.319879,600.752132 110.367441,601.249805 110.367441,601.711914 C110.367441,603.358969 109.896866,604.861151 108.956373,606.218023 C108.015879,607.574678 106.772044,608.549732 105.224647,609.142096 L105.224647,609.142096 Z M102.367003,596.307769 C100.878784,596.307769 99.6020712,596.838169 98.5366465,597.898751 C97.4712219,598.959332 96.9384,600.23046 96.9384,601.711696 C96.9384,601.948642 97.0216876,602.150242 97.1884822,602.316278 C97.3552767,602.482096 97.557578,602.565223 97.7958246,602.565223 C98.033852,602.565223 98.2361534,602.482314 98.4029479,602.316278 C98.5695233,602.150242 98.6530301,601.94886 98.6530301,601.711696 C98.6530301,600.692569 99.015989,599.821587 99.7423452,599.098532 C100.468482,598.375696 101.34366,598.014169 102.367441,598.014169 C102.605468,598.014169 102.808208,597.93126 102.974784,597.765223 C103.140921,597.599623 103.224427,597.398242 103.224427,597.161078 C103.224427,596.924132 103.140921,596.722532 102.974345,596.556714 C102.807551,596.390896 102.60503,596.307769 102.367003,596.307769 Z"/>\n\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t<use fill-rule="evenodd" transform="translate(-85.774 -592.038)" xlink:href="#teacher-eye-a"/>\n\t\t\t\t\t</svg>\n\t\t\t\t\t';titleItem.appendChild(svgContainer);}});//Remove this (P) in ubit header titles
var menuLeftTitlesForEyesRemovePOnUnit=document.querySelectorAll('#indice .unit-content .header span.title');menuLeftTitlesForEyesRemovePOnUnit.forEach(function(titleItem){var titleString=titleItem.innerHTML.trim();if(titleString.slice(-3)==='(P)'){titleItem.innerHTML=titleString.slice(0,-3);}});//BackButton
// document.querySelector('.navbar.libro .libro-left>ul').insertAdjacentHTML( 'afterbegin', replaceStringInTemplates.replace(htmlSubUnitBackButton) );
document.querySelector('.navbar.libro').insertAdjacentHTML('afterbegin',replaceStringInTemplates.replace(_subUnitBackButton2.default));if(blink.isIosApp||blink.isAndroidApp){document.querySelector('#sm-subunit-backbutton').innerHTML='<a href="javascript:blink.rest.closeWindow()"></a>';}else{document.querySelector('#sm-subunit-backbutton').innerHTML='<a href="javascript:closeActivity()"></a>';}}else{//if not in TOC page
var editarActivitiesNavbar=new _editar_activities_navbar2.default();editarActivitiesNavbar.init(data);//BackButton
// document.querySelector('.navbar.libro .libro-left>ul').insertAdjacentHTML( 'afterbegin', replaceStringInTemplates.replace(htmlSubUnitBackButton) );
document.querySelector('.navbar.libro').insertAdjacentHTML('afterbegin',replaceStringInTemplates.replace(_subUnitBackButton2.default));var bookUrlEditar=data.url.replace('editar=0','editar=1');document.querySelector('#sm-subunit-backbutton').innerHTML='<a href="'+bookUrlEditar+'"></a>';}//Activities
//Multimedia lines in numbers
// navbar-bottom
};

/***/ })
/******/ ]);
});