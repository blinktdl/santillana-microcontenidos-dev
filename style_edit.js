(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["_"], factory);
	else if(typeof exports === 'object')
		exports["SantillanaMicrocontenidosStyleUI"] = factory(require("lodash"));
	else
		root["SantillanaMicrocontenidosStyleUI"] = factory(root["_"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__7__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var replaceStringInTemplates=function(){function replaceStringInTemplates(){_classCallCheck(this,replaceStringInTemplates);}_createClass(replaceStringInTemplates,[{key:'replace',value:function replace(string){var stringReplacements={};stringReplacements['--Unidades--']=textweb('santillana_microcontenidos_unidades');stringReplacements['--Portada--']=textweb('santillana_microcontenidos_portada');stringReplacements['--Completado--']=textweb('santillana_microcontenidos_completado');stringReplacements['--Contenidos complementarios--']=textweb('santillana_microcontenidos_contenido_complementario');stringReplacements['--Microcontenido--']=textweb('santillana_microcontenidos_microcontenido');stringReplacements['--Ampliación--']=textweb('santillana_microcontenidos_ampliacion');stringReplacements['--Microproyecto--']=textweb('santillana_microcontenidos_microproyecto');stringReplacements['--Refuerzo--']=textweb('santillana_microcontenidos_refuerzo');stringReplacements['--Flipped Classroom--']=textweb('santillana_microcontenidos_flipped');stringReplacements['--Comienza secuencia didáctica--']=textweb('santillana_microcontenidos_comienza_secuencia');stringReplacements['--Actividades--']=textweb('santillana_microcontenidos_actividades');stringReplacements['--Evaluación final--']=textweb('santillana_microcontenidos_evaluacion');stringReplacements['--Fin de la lección--']=textweb('santillana_microcontenidos_fin_leccion');stringReplacements['--Volver a inicio--']=textweb('santillana_microcontenidos_volver_inicio');stringReplacements['--Créditos--']=textweb('santillana_microcontenidos_volver_creditos');stringReplacements['--Volver--']=textweb('santillana_microcontenidos_volver');stringReplacements['--Comienza evaluación final--']=textweb('santillana_microcontenidos_comienza_evaluacion');stringReplacements['--Inicio--']=textweb('santillana_microcontenidos_inicio');stringReplacements['--Fin--']=textweb('santillana_microcontenidos_fin');stringReplacements['--pag--']=textweb('course_abrev_pag');stringReplacements['--santillana_microcontenidos_microproyecto--']=textweb('santillana_microcontenidos_microproyecto');stringReplacements['--santillana_microcontenidos_flipped--']=textweb('santillana_microcontenidos_flipped');stringReplacements['--santillana_microcontenidos_esencial--']=textweb('santillana_microcontenidos_basica');stringReplacements['--santillana_microcontenidos_reto--']=textweb('santillana_microcontenidos_reto');stringReplacements['--santillana_microcontenidos_estandar--']=textweb('santillana_microcontenidos_estandar');for(var key in stringReplacements){// skip loop if the property is from prototype
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};exports.esAlumno=esAlumno;exports.esProfesor=esProfesor;exports.esEditorOMas=esEditorOMas;function esAlumno(){if((typeof blink==='undefined'?'undefined':_typeof(blink))=='object'){return blink.user.esAlumno()||blink.user.esPadre();}return false;}function esProfesor(){if((typeof blink==='undefined'?'undefined':_typeof(blink))=='object'){return blink.user.esProfesor();}return false;}function esEditorOMas(){if((typeof blink==='undefined'?'undefined':_typeof(blink))=='object'){return blink.user.esEditor()||blink.user.esAdmin()||blink.user.esSAdmin()||blink.user.esEditorial();}return false;}

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports = "<div class=\"sm-editar-block__header js-item\"> <div class=sm-editar-block__number></div> <div class=sm-editar-block__title><h4>--TITULO--</h4><svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=8 height=8 viewBox=\"0 0 8 8\"> <defs> <path id=checkbox-ok-a d=\"M131.93864,522.576849 L127.328004,529.804322 C127.269615,529.892674 127.179996,529.951695 127.079514,529.962558 C127.065935,529.966179 127.056091,529.966179 127.042173,529.966179 C126.955948,529.966179 126.869045,529.929245 126.804206,529.862982 L124.107483,527.137471 C124.037892,527.071569 124.000211,526.975976 124.000211,526.876399 C123.996817,526.777184 124.034497,526.681228 124.100354,526.611705 L124.986702,525.666268 C125.055613,525.592762 125.148627,525.548948 125.245375,525.559449 C125.342123,525.563432 125.431742,525.607246 125.493186,525.684735 L126.772975,527.269999 L131.40432,522.113002 C131.528225,521.973232 131.731905,521.962731 131.873123,522.083672 C132.010947,522.201354 132.042178,522.418612 131.93864,522.576849\"/> </defs> <use fill=#FFF fill-rule=evenodd transform=\"translate(-124 -522)\" xlink:href=#checkbox-ok-a /> </svg></div> <div class=sm-editar-block__plegar-icon><span class=sm-block-toggle><svg width=32px height=20px viewBox=\"0 0 32 20\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g id=Page-1 stroke=none stroke-width=1 fill=none fill-rule=evenodd> <path d=\"M7.36753443,-4.63316247 C6.30189532,-3.5782874 6.29316935,-1.85927101 7.34804442,-0.793631906 C7.35450536,-0.787105043 7.36099937,-0.780611006 7.3675262,-0.774150044 L18.2272028,9.97592454 L18.2272028,9.97592454 L7.3675262,20.7259991 C6.30189159,21.7808787 6.29317295,23.4998952 7.34805256,24.5655298 C7.35451353,24.5720566 7.36100756,24.5785506 7.36753443,24.5850115 C8.447229,25.6538001 10.1862216,25.6538001 11.2659161,24.5850115 L26.0240755,9.97592454 L26.0240755,9.97592454 L11.2659161,-4.63316247 C10.1862216,-5.70195103 8.447229,-5.70195103 7.36753443,-4.63316247 Z\" id=arrow fill=#FF0000 transform=\"translate(16.000000, 9.975925) rotate(-270.000000) translate(-16.000000, -9.975925) \"></path> </g> </svg></span></div> <div class=sm-editar-block__delete-icon> </div> </div> ";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _lodash=__webpack_require__(7);var _lodash2=_interopRequireDefault(_lodash);var _jsCookie=__webpack_require__(6);var _jsCookie2=_interopRequireDefault(_jsCookie);var _replaceStringInTemplates=__webpack_require__(1);var _replaceStringInTemplates2=_interopRequireDefault(_replaceStringInTemplates);var _debug=__webpack_require__(2);var _editarBlockHeader=__webpack_require__(12);var _editarBlockHeader2=_interopRequireDefault(_editarBlockHeader);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var replaceStringInTemplates=new _replaceStringInTemplates2.default();//Templates
var EditarBloques=function(){function EditarBloques(){_classCallCheck(this,EditarBloques);}_createClass(EditarBloques,[{key:'init',value:function init(units){var _this=this;//First of all, create an array with blocks info with
//-block container dom element
//-block header subunit (with data and domElement)
//-block subunits (with data and domElement)
var blocks=[];//First, we search blocks
_lodash2.default.forEach(units,function(unit){_lodash2.default.forEach(unit.subunits,function(subunit){var tags=subunit.tags.split(' ');var isBlock=_lodash2.default.includes(tags,'sm_metodologia_titulo_bloque');var metodologiaBlockTag=_lodash2.default.find(tags,function(tag){// :D sorry...
return tag.substr(0,15)==='sm_metodologia_'&&tag!=='sm_metodologia_titulo_bloque';});var metodologiaBlockId=metodologiaBlockTag?metodologiaBlockTag.replace('sm_metodologia_',''):null;if(isBlock){//l(subunit);
var newBlock={id:metodologiaBlockId,containerDomElement:null,headerSubUnit:{data:subunit,domElement:document.querySelector('li.item[data-id=\''+subunit.id+'\']')},subUnits:[]};blocks.push(newBlock);}});});//Then we search subunits
_lodash2.default.forEach(units,function(unit){_lodash2.default.forEach(unit.subunits,function(subunit){var tags=subunit.tags.split(' ');var isBlock=_lodash2.default.includes(tags,'sm_metodologia_titulo_bloque');var metodologiaBlockTag=_lodash2.default.find(tags,function(tag){// :D sorry...
return tag.substr(0,15)==='sm_metodologia_'&&tag!=='sm_metodologia_titulo_bloque';});var metodologiaBlockId=metodologiaBlockTag?metodologiaBlockTag.replace('sm_metodologia_',''):null;var isNewKidOnTheBlock=!isBlock&&metodologiaBlockTag?true:false;if(isNewKidOnTheBlock){var currentBlock=_lodash2.default.find(blocks,{id:metodologiaBlockId});if(currentBlock){var newKidOnTheBlock={data:subunit,domElement:document.querySelector('li.item[data-id=\''+subunit.id+'\']')};currentBlock.subUnits.push(newKidOnTheBlock);}}});});//Now lets create block containers
_lodash2.default.forEach(blocks,function(block,index){//Create container before header item
var container=document.createElement('li');container.classList.add('item-block-container');container.dataset['id']=block.id;block.containerDomElement=container;//Insert Container
block.headerSubUnit.domElement.parentElement.insertBefore(block.containerDomElement,block.headerSubUnit.domElement);//Add header from template
var headerDomHtml=_editarBlockHeader2.default;//.replace(`--NUMBER--`, index + 1);
headerDomHtml=headerDomHtml.replace('--TITULO--',block.headerSubUnit.data.title);block.containerDomElement.insertAdjacentHTML('afterbegin',headerDomHtml);//Insert edit link into title
block.containerDomElement.querySelector('.sm-editar-block__title').insertBefore(block.headerSubUnit.domElement.querySelector('a.edit'),block.containerDomElement.querySelector('.sm-editar-block__title h4'));//Add id to header. Needed for Blink rename function.
block.containerDomElement.querySelector('.sm-editar-block__header').dataset['id']=block.headerSubUnit.data.id;//Insert delete element
block.containerDomElement.querySelector('.sm-editar-block__header .sm-editar-block__delete-icon').appendChild(block.headerSubUnit.domElement.querySelector('a.delete'));console.log(block.headerSubUnit.domElement);console.log(block.headerSubUnit.domElement.querySelector('a.delete'));//remove headerSubunit. We don't need it
block.headerSubUnit.domElement.remove();// block.containerDomElement.appendChild(block.headerSubUnit.domElement)
//Create Content (subunit list and button)
var containerContent=document.createElement('div');containerContent.classList.add('sm-editar-block__content');//Create subunit list element
var containerList=document.createElement('ul');containerList.classList.add('sm-editar-block__subunits');containerContent.appendChild(containerList);//Create actions element
var containerActions=document.createElement('div');containerActions.classList.add('sm-editar-block__actions');containerActions.innerHTML='<a><span>'+replaceStringInTemplates.replace('--santillana_microcontenidos_add_activity--')+'</span></a>';containerActions.querySelector('a').addEventListener('click',function(){var url=new URL(window.location.href),idgrupo=url.searchParams.get('idgrupo')||'',idtema=$(containerActions).parents('.js-unit-content').data('id'),isResource=false,type='',blocktag='sm_metodologia_'+block.id;dlgCreateNewEditClass(idcurso,idtema,null,null,null,isResource,type,idgrupo,blocktag);});containerContent.appendChild(containerActions);//Insert content element in block
block.containerDomElement.appendChild(containerContent);//Move subunit elements
_lodash2.default.forEach(block.subUnits,function(subUnit){containerList.appendChild(subUnit.domElement);});//Add eventes
block.containerDomElement.querySelector('.sm-block-toggle').addEventListener('click',_this.toggle.bind(_this,block));if(_jsCookie2.default.get('block_editar_'+block.id+'_closed')){block.containerDomElement.classList.add('item-block-container--closed');$(block.containerDomElement.querySelector('.sm-editar-block__content')).slideUp(0);}});//l(blocks);
}},{key:'toggle',value:function toggle(block,e){if(block.containerDomElement.classList.contains('item-block-container--closed')){block.containerDomElement.classList.remove('item-block-container--closed');_jsCookie2.default.remove('block_editar_'+block.id+'_closed');$(block.containerDomElement.querySelector('.sm-editar-block__content')).slideDown(300);}else{block.containerDomElement.classList.add('item-block-container--closed');_jsCookie2.default.set('block_editar_'+block.id+'_closed','true',{expires:1});$(block.containerDomElement.querySelector('.sm-editar-block__content')).slideUp(300);}}}]);return EditarBloques;}();exports.default=EditarBloques;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _elementClosest=__webpack_require__(15);var _elementClosest2=_interopRequireDefault(_elementClosest);var _replaceStringInTemplates=__webpack_require__(1);var _replaceStringInTemplates2=_interopRequireDefault(_replaceStringInTemplates);__webpack_require__(14);var _blinkFunctions=__webpack_require__(3);var _editar_bloques=__webpack_require__(13);var _editar_bloques2=_interopRequireDefault(_editar_bloques);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}(0,_elementClosest2.default)(window);var replaceStringInTemplates=new _replaceStringInTemplates2.default();//Event example
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
});var smStylesEditInit=function smStylesEditInit(data){console.log("Datos cargados.");//indow.losdatos = data;
console.log(data.units);//Activities list
var subunitsItemsDom=document.querySelectorAll('.actividades ul li.item');if(subunitsItemsDom.length){subunitsItemsDom.forEach(function(item){var unitId=item.closest('.unit-content').dataset.id;var subUnitId=item.dataset.id;var unitObject=_.find(data.units,{id:unitId});if(unitObject){var subUnitObject=_.find(unitObject.subunits,{id:subUnitId});var isEvaluacion=subUnitObject.tag.indexOf('evaluacion')>=0||subUnitObject.tags.indexOf('evaluacion')>=0;var classesNames=['microproyecto','flipped','esencial','reto'];//Tags
var tipoTexto='';classesNames.forEach(function(className){var tagString='';if(subUnitObject.tag){tagString=subUnitObject.tag;}var tagsString='';if(subUnitObject.tags&&subUnitObject.tags.indexOf(className)>-1){tagsString=subUnitObject.tags;}var tagAndTags=tagString+' '+tagsString;if(tagAndTags.indexOf(className)>-1){tipoTexto=replaceStringInTemplates.replace('--santillana_microcontenidos_'+className+'--');}});if(tipoTexto===''){tipoTexto=replaceStringInTemplates.replace('--santillana_microcontenidos_estandar--');}if(isEvaluacion){item.classList.add('item--is-evaluation');}var descriptionSpanItem=item.querySelector('.item-containment span.text');var titleItem=item.querySelector('.js-title');if(descriptionSpanItem&&titleItem){titleItem.insertBefore(descriptionSpanItem,titleItem.firstElementChild);}var tagItem=document.createElement('span');tagItem.classList.add('tags');tagItem.innerHTML=tipoTexto;titleItem.appendChild(tagItem);}});}var editarBloques=new _editar_bloques2.default();editarBloques.init(data.units);//Remove cover page unit for teachers
if(!(0,_blinkFunctions.esEditorOMas)()){//onsole.log("Borrando...")
var unitsItemDom=document.querySelectorAll('#list-units li.litema');if(unitsItemDom.length>1){//If cover page unit is active
var intervalo=setInterval(function(){if(document.querySelectorAll('#list-units li.litema.active').length){var unitItemSecondLinkDom=unitsItemDom[1].querySelector('a.js-tema');if(unitItemSecondLinkDom){if(unitsItemDom[0].classList.contains('active')){unitItemSecondLinkDom.click();}unitsItemDom[0].remove();}clearInterval(intervalo);}},20);}}//Remove al kind of activities from popover menu, except blink activity (resource). This script dont hide it, only add a text to button.
var iconActividadAdd=document.querySelector('.icon-actividad-add');iconActividadAdd.innerHTML=replaceStringInTemplates.replace('--santillana_anadir_evaluacion--');};

/***/ })
/******/ ]);
});