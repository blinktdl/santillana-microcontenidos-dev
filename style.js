(function (blink) {
	'use strict';

	var SantillanaMicrocontenidosDevStyle = function () {
			blink.theme.styles['santillana-microcontenidos'].apply(this, arguments);
	};

	SantillanaMicrocontenidosDevStyle.prototype = {
			parent: blink.theme.styles['santillana-microcontenidos'].prototype,
      esPortada: false, //BK-18213 - 4: MODO EDITAR DESDE ACTIVIDAD PORTADA
			bodyClassName: 'content_type_clase_santillana_microcontenidos_dev',
      defaultBackground: '/themes/responsive/assets/styles/santillana-microcontenidos/images/cover.png',
      ckEditorStyles: {
		name: 'santillana-microcontenidos-dev',
		styles: [
			{ name: 'Enunciado actividad', element: 'h2', attributes: { 'class': 'h_bold'} },
			{ name: 'Párrafos cortos', element: 'h2', attributes: { 'class': 'h_no_bold'} },
			{ name: 'Párrafo título', element: 'h3', attributes: { 'class': 'h_bold'} },
			{ name: 'Párrafo normal', element: 'h3', attributes: { 'class': 'h_no_bold'} },
			{ name: 'Pie de foto', element: 'h4', attributes: { 'class': 'h_no_bold'} },
			{ name: 'Caja enlace',  type: 'widget', widget: 'blink_box', attributes: { 'class': 'sm__caja-enlace'} },
			{ name: 'Caja destacada',  type: 'widget', widget: 'blink_box', attributes: { 'class': 'sm__caja-destacada'} },
			{ name: 'Caja Think',  type: 'widget', widget: 'blink_box', attributes: { 'class': 'sm__caja-think'} },
			{ name: 'Icono Sonido', element: 'span', attributes: { 'class': 'sm-icon sm-icon--sonido' } },
			{ name: 'Icono Vídeo', element: 'span', attributes: { 'class': 'sm-icon sm-icon--video' } },
			{ name: 'Audio como icono', type: 'widget', widget: 'blink_sound', attributes: { 'class': 'sm-audio-as-icon' } },
			{ name: 'Versalitas', element: 'span', attributes: { 'class': 'bck-versalitas'} },
			{name :'Lista numerada en color',element:'ol',attributes:{ 'class': 'sm-list-colored'}}
		]
	},
	configEditor: function (editor) {
		editor.dtd.$removeEmpty['span'] = false;
	},

	getEditorStyles: function () {
		return this.parent.ckEditorStyles;
	},
	getPluginsByEditorMode: function (editorMode) {
		var editorPlugins = {
			'standard': ['blink_nextbutton']
		}
		return editorPlugins[editorMode] ? editorPlugins[editorMode] : false;
	},
  init: function (scope) {
		var _this = this;
    this.parent.init.call(this.parent, this);
    // this.addActivityTitle();
    this.getCourseStyleUI();
    this.overrideLateralToc();
    this.preventTouchCarousel();
    blink.getCourse(idcurso).done((function (data) {
      _this.onCourseDataLoaded(data);
      _this.toogleInfo();
    }).bind(this));
  },

		toogleInfo: function() {
			$('.item-container').scroll(function() {
				blink.activity.currentStyle.infoToggle();
			});
		},

		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				if (blink.courseInfo.unit === "Portada") {
					return blink.courseInfo.book;
				}
				return '<span class="ellipsis">' + blink.courseInfo.unit + '</span>&nbsp;>&nbsp;<span class="ellipsis">' + $(this).html() + '<span>';
			})
		},

		customTriggerScrollCocatenate: function() {
			return 'santimicro:toconcatenate';
		},

        onCourseDataLoaded: function (data) {
                SantillanaMicrocontenidosStyleUI.init(data);
                blink.events.trigger(this.customTriggerScrollCocatenate());
        },


		//BK-18213 - 4: MODO EDITAR DESDE ACTIVIDAD PORTADA
		getCourseStyleUI: function () {
			blink.getCourse(idcurso).done((function (data) {
				this.configInit(data);
				// SantillanaMicrocontenidosStyleUI.init(data);
			}).bind(this));
		},

		configInit: function (data) {
			if (blink.activity.id != data.indexId) {
				this.removeCloseButton();
			}else{ //BK-18213 - 4: MODO EDITAR DESDE ACTIVIDAD PORTADA
				this.esPortada = true;
				this.defaultBackground = SantillanaMicrocontenidosDevStyle.prototype.defaultBackground;
			}
		},

		overrideLateralToc: function () {
			blink.lateralToc.toggle = function () {
				window.SantillanaMicrocontenidosMenuToggle();
			}
		},

		isEmbeddedAudio: function () {
			return true;
		},

		removeFinalSlide: function () {
			if (!checkModoCorreccion() && !checkModoRevision()) {
				(typeof this.Slider !== 'undefined' && this.Slider.removeLastItem) && this.Slider.removeLastItem();
			}
		},

		allocateCanvas: function (scope, sectionIndex) {
			var that = scope || this;
			if (sectionIndex !== 0) return;
			this.parent.allocateCanvas.call(that, sectionIndex);
		},

		showBookIndexInClass: function () {
			return true;
		},

		showPluginsByStyleUser: function (editorMode) {
			return editorMode == 'admin' && blink.user.esEditorial();
		},

		// removeCloseButton: function () {
		// 	$('.close-back-wrapper').remove();
		// },

		preventTouchCarousel: function () {
			$('#swipeview-slider')
				.on('touchstart', function (event) {
					event.stopPropagation();
					event.stopImmediatePropagation();
					return;
				});
		},

		//BK-18213 - 4: MODO EDITAR DESDE ACTIVIDAD PORTADA
		isIndexActivity: function(params, code) {
			this.getCourseStyleUI();
			var navigationCode;
			if(this.esPortada){
				navigationCode = 2;
			}else{
				navigationCode = code;
			}
			cambiarVisualizacion(true, params, navigationCode);
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
})(window, function(__WEBPACK_EXTERNAL_MODULE__70__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
/******/ })
/************************************************************************/
/******/ ({

/***/ 70:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__70__;

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);


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
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
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
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var replaceStringInTemplates=function(){function replaceStringInTemplates(){_classCallCheck(this,replaceStringInTemplates);}_createClass(replaceStringInTemplates,[{key:'replace',value:function replace(string){var stringReplacements={};stringReplacements['--Unidades--']=textweb('santillana_microcontenidos_unidades');stringReplacements['--Portada--']=textweb('santillana_microcontenidos_portada');stringReplacements['--Completado--']=textweb('santillana_microcontenidos_completado');stringReplacements['--Contenidos complementarios--']=textweb('santillana_microcontenidos_contenido_complementario');stringReplacements['--Microcontenido--']=textweb('santillana_microcontenidos_microcontenido');stringReplacements['--Ampliación--']=textweb('santillana_microcontenidos_ampliacion');stringReplacements['--Microproyecto--']=textweb('santillana_microcontenidos_microproyecto');stringReplacements['--Refuerzo--']=textweb('santillana_microcontenidos_refuerzo');stringReplacements['--Flipped Classroom--']=textweb('santillana_microcontenidos_flipped');stringReplacements['--Comienza secuencia didáctica--']=textweb('santillana_microcontenidos_comienza_secuencia');stringReplacements['--Actividades--']=textweb('santillana_microcontenidos_actividades');stringReplacements['--Evaluación final--']=textweb('santillana_microcontenidos_evaluacion');stringReplacements['--Fin de la lección--']=textweb('santillana_microcontenidos_fin_leccion');stringReplacements['--Volver a inicio--']=textweb('santillana_microcontenidos_volver_inicio');stringReplacements['--Créditos--']=textweb('santillana_microcontenidos_volver_creditos');stringReplacements['--Volver--']=textweb('santillana_microcontenidos_volver');stringReplacements['--Comienza evaluación final--']=textweb('santillana_microcontenidos_comienza_evaluacion');stringReplacements['--Inicio--']=textweb('santillana_microcontenidos_inicio');stringReplacements['--Fin--']=textweb('santillana_microcontenidos_fin');stringReplacements['--pag--']=textweb('course_abrev_pag');stringReplacements['--santillana_microcontenidos_microproyecto--']=textweb('santillana_microcontenidos_microproyecto');stringReplacements['--santillana_microcontenidos_flipped--']=textweb('santillana_microcontenidos_flipped');stringReplacements['--santillana_microcontenidos_esencial--']=textweb('santillana_microcontenidos_basica');stringReplacements['--santillana_microcontenidos_reto--']=textweb('santillana_microcontenidos_reto');stringReplacements['--santillana_microcontenidos_basica--']=textweb('santillana_microcontenidos_basica');stringReplacements['--santillana_microcontenidos_estandar--']=textweb('santillana_microcontenidos_estandar');stringReplacements['--santillana_microcontenidos_ninguna--']='';stringReplacements['--santillana_microcontenidos_añadir_secuencia--']=textweb('santillana_microcontenidos_añadir_secuencia');stringReplacements['--santillana_microcontenidos_tareas_casa--']=textweb('santillana_microcontenidos_tareas_casa');stringReplacements['--santillana_microcontenidos_tareas_clase--']=textweb('santillana_microcontenidos_tareas_clase');stringReplacements['--santillana_microcontenidos_combinar_aviso--']=textweb('santillana_microcontenidos_combinar_aviso');stringReplacements['--select_examen_1--']=textweb('select_examen_1');stringReplacements['--santillana_microcontenidos_unidad_combinar--']=textweb('santillana_microcontenidos_unidad_combinar');//Is string is not defined in textweb(), returns the same string, not undefined.
for(var key in stringReplacements){// skip loop if the property is from prototype
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

module.exports = "<div id=sm-subunit-backbutton role=menuitem></div>";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.removeSlash=removeSlash;exports.hasSlash=hasSlash;function removeSlash(string){if(string.substr(0,2)==='##'){return string.substr(2);}return string;}function hasSlash(string){return string.substr(0,2)==='##';}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};exports.esAlumno=esAlumno;exports.esProfesor=esProfesor;exports.esEditorOMas=esEditorOMas;function esAlumno(){if((typeof blink==='undefined'?'undefined':_typeof(blink))=='object'){return blink.user.esAlumno()||blink.user.esPadre();}return false;}function esProfesor(){if((typeof blink==='undefined'?'undefined':_typeof(blink))=='object'){return blink.user.esProfesor();}return false;}function esEditorOMas(){if((typeof blink==='undefined'?'undefined':_typeof(blink))=='object'){return blink.user.esEditor()||blink.user.esAdmin()||blink.user.esSAdmin()||blink.user.esEditorial();}return false;}

/***/ }),
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var responsiveStatus=function(){function responsiveStatus(sizeChangedFunction){_classCallCheck(this,responsiveStatus);this.state={size:null};if(typeof sizeChangedFunction==='function'){this.sizeChanged=sizeChangedFunction;}else{this.sizeChanged=function(){};}window.addEventListener('resize',this.check.bind(this),false);this.check();}_createClass(responsiveStatus,[{key:'check',value:function check(){// if(config.dev)
//onsole.log("responsiveStatus.check");
var width=window.innerWidth;var size=void 0;if(width<768){size='mobile';}else if(width<1024){size='tablet-portrait';}else if(width<=1168){size='tablet-landscape';}else if(width<=1600){size='desktop';}else{size='desktop-hd';}if(size!=this.state.size){this.state.size=size;this.sizeChanged(size);}}},{key:'getSize',value:function getSize(){return this.state.size;}}]);return responsiveStatus;}();exports.default=responsiveStatus;

/***/ }),
/* 8 */
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.setBookColor=setBookColor;function setBookColor(){// document.write('<div id="getbookcolor" class="bookcolor" style="display: none"></div>');
var divElement=document.createElement("div");divElement.className='bookcolor';divElement.id='getbookcolor';document.body.appendChild(divElement);var bookColor=window.getComputedStyle(divElement,null).getPropertyValue('color');var style=document.createElement('style');style.type='text/css';style.innerHTML='\n        .sm-color-color,\n        .sm-color-color--pressed:active,\n        .sm-color-color--focus:focus,\n        .sm-color-color--hover:hover{\n            color: '+bookColor+'!important;\n        }\n        .sm-color-background-color,\n        .sm-color-background-color--active.active,\n        .sm-color-background-color--hover:hover,\n        .sm-color-background-color_before:before,\n        .sm-color-background-color_after:after{\n            background-color: '+bookColor+'!important;\n        }\n        .sm-color-border-color,\n        .sm-color-border-color--pressed:active,\n        .sm-color-border-color--hover:hover,\n        .sm-color-border-color--active.active{\n            border-color: '+bookColor+'!important;\n        }\n        \n        .sm-color-svg-fill svg,\n        .sm-color-svg-fill--hover:hover svg,\n        .sm-color-svg-fill--pressed:active > svg{\n            fill: '+bookColor+'!important;\n        }\n        .sm-color-svg-stroke,\n        .sm-color-svg-stroke svg,\n        .sm-color-svg-stroke--hover:hover svg,\n        .sm-color-svg-stroke--pressed:active > svg{\n            stroke: '+bookColor+'!important;\n        }\n\n        .sm-color-child-color > *,\n        .sm-color-child-color--hover:hover > *,\n        .sm-color-child-color--active.active > *,\n        .sm-color-child-color--pressed:active > *{\n            color: '+bookColor+'!important;\n        }\n\n        .info-template .info-icon{\n            background-color: '+bookColor+'!important;\n        }\n        .info-template .info-title,\n        ol.sm-list-colored li:before{\n            color: '+bookColor+'!important;\n        }\n        body.view-mode #actividad .texto_curso .info-button,\n        .cke_contents .info-button{\n            background-color: '+bookColor+'!important;\n        }\n        \n        .sm-nota-budget-background svg path#background,\n        .sm-nota-budget-background--title svg path{\n            fill: '+bookColor+'!important;\n        }\n        .libro-right ul li a.edit-mode{\n            background-color: '+bookColor+'!important;\n        }\n        .libro-right ul li a.edit-mode,\n        .libro-right ul li a.edit-mode:hover,\n        .libro-right ul li a.edit-mode:active{\n            background-color: '+bookColor+'!important;\n        }\n        body.view-mode #actividad .texto_curso ul[style*="list-style-type: disc;"]>li:before,\n        .cke_contents ul[style*="list-style-type: disc;"]>li:before,\n        body.view-mode #actividad .texto_curso ul[style*="list-style-type: square;"]>li:before,\n        .cke_contents ul[style*="list-style-type: square;"]>li:before{\n            background-color: '+bookColor+'!important;\n        }\n        body.view-mode #actividad .texto_curso ol[style*="list-style-type:"]>li:before,\n        .cke_contents ol[style*="list-style-type:"]>li:before{\n            color: '+bookColor+'!important;\n        }\n\n        body.view-mode #actividad .texto_curso table th.level_1_course,\n        body.view-mode #actividad .texto_curso table td.level_1_course,\n        .cke_contents table th.level_1_course,\n        .cke_contents table td.level_1_course{\n            background-color: '+bookColor+'!important;\n        }\n        body.view-mode #actividad .texto_curso table th.level_2_course,\n        body.view-mode #actividad .texto_curso table td.level_2_course,\n        .cke_contents table th.level_2_course,\n        .cke_contents table td.level_2_course{\n            color: '+bookColor+'!important;\n            background-color: '+rgb2rgba(bookColor,0.3)+'!important;\n        }\n        body.view-mode #actividad .texto_curso table th.level_3_course,\n        body.view-mode #actividad .texto_curso table td.level_3_course,\n        body.view-mode #actividad .workspace.matching.lineas th.level_3_course,\n        body.view-mode #actividad .workspace.matching.lineas td.level_3_course,\n        .sm-modal__content__text table th.level_3_course,\n        .sm-modal__content__text table td.level_3_course,\n        .cke_contents table th.level_3_course,\n        .cke_contents table td.level_3_course{\n            color: '+bookColor+'!important;\n            background-color: '+rgb2rgba(bookColor,0.1)+'!important;\n        }\n\n        body.view-mode #actividad .texto_curso .bck-dropdown.dd-color-asig .bck-dropdown-button,\n        .cke_contents .bck-dropdown.dd-color-asig .bck-dropdown-button,\n        body.view-mode #actividad .texto_curso .bck-dropdown.dd-color-asig .bck-dropdown-content,\n        .cke_contents .bck-dropdown.dd-color-asig .bck-dropdown-content{\n            background-color: '+bookColor+'!important;\n        }\n\n\n        /*editar*/\n        #indice .unit-content .content .actividades .add .menu-left>a,\n        .edit .slider-indicators li.concat.active,\n        .slider-indicators li.active{\n            background-color: '+bookColor+'!important;;\n            border-color: '+bookColor+'!important;;\n        }\n        #indice .unit-content .content .actividades .item input[type="checkbox"]:before{\n            border-color: '+bookColor+'!important;;\n        }\n        #indice .unit-content .content .actividades .item a.edit::before,\n        #indice .unit-content .content .material ul li.item a.edit::before,\n        #indice .unit-content .content .actividades .item input[type="checkbox"]:checked:before,\n        .nextbutton-warp .nextbutton-content,\n        .nextbutton-warp .nextbutton-content:hover,\n        #close-edit-mode-button,\n        #close-edit-mode-button:hover,\n        #close-edit-mode-button:active,\n        #indice .units ul#list-units li a.delete,\n        #indice .unit-content .content .actividades .item a.delete,\n        #indice .unit-content .content .material ul li.item a.delete,\n        #indice .unit-content .content .actividades>ul li.item-block-container .sm-editar-block__header .sm-editar-block__delete-icon a.delete,\n        #blinkTransp.lista_actividades_examen .tit_tema{\n            background-color: '+bookColor+'!important;;\n        }\n        #indice .units ul li.add:focus:not(.disabled) a .title,\n        #indice .units ul li.add:focus:not(.disabled) a #crearIndice.plusBlink,\n        #indice .unit-content .content .actividades .add .menu-left>a:hover .plusBlink,\n        #indice .unit-content .content .actividades .add .menu-left>a:hover .title,\n        #indice .unit-content .content .actividades .item a.js-title span.text,\n        #indice .unit-content .content .actividades .item.edit_activitytag_microproyecto .js-title::after,\n        #indice .unit-content .content .actividades .item.edit_activitytag_flipped .js-title::after,\n        #indice .unit-content .content .actividades .item.edit_activitytag_basica .js-title::after,\n        #indice .unit-content .content .material ul li.item a.js-title span.text,\n        .edit .slider-indicators li.concat.active,\n        .sm-modal-combinar-actividad #pagina1 .modal-inner-title p strong,\n        .sm-modal-combinar-actividad #pagina2 .modal-inner-title p strong{\n            color: '+bookColor+';\n        }\n    ';document.getElementsByTagName('head')[0].appendChild(style);window.smBookColor=bookColor;}function rgb2rgba(rgb,alpha){rgb=rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return'rgba('+rgb[1]+','+rgb[2]+','+rgb[3]+','+alpha+')';}// function getStyleRuleValue(style, selector) {
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}// import config from '../config';
// import anime from 'animejs';
var Dropdown=function(){function Dropdown(){_classCallCheck(this,Dropdown);this.state={lodaded:false};this.domElement;}_createClass(Dropdown,[{key:'init',value:function init(domElement){if(!this.state.loaded){this.state.loaded=true;this.domElement=domElement;if(!this.domElement.classList.contains('js-dropdown-enabled')){this.domElement.firstElementChild.addEventListener('click',this.onButtonClick.bind(this));//If click outside
var _this=this;document.addEventListener('click',function(e){var isClickInside=_this.domElement.contains(e.target);if(!isClickInside){_this.onClose();}});this.domElement.classList.add('js-dropdown-enabled');}}}},{key:'onButtonClick',value:function onButtonClick(){if(this.domElement.classList.contains('active')){this.onClose();}else{this.onOpen();}}},{key:'onClose',value:function onClose(){this.domElement.classList.remove('active');}},{key:'onOpen',value:function onOpen(){this.domElement.classList.add('active');}}]);return Dropdown;}();exports.default=Dropdown;

/***/ }),
/* 11 */
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

var	fixUrls = __webpack_require__(55);

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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(56);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(11)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/tiny-slider/src/helpers/Object.keys.js
var Object_keys = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/tiny-slider/src/helpers/childNode.remove.js
var childNode_remove = __webpack_require__(57);

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
  if (access) {
    try { storage.setItem(key, value); } catch (e) {}
  }
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
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/forEach.js
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function forEach (arr, callback, scope) {
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
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js
function arrayFromNodeList (nl) {
  var arr = [];
  for (var i = 0, l = nl.length; i < l; i++) {
    arr.push(nl[i]);
  }
  return arr;
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/hideElement.js
function hideElement(el, forceHide) {
  if (el.style.display !== 'none') { el.style.display = 'none'; }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/showElement.js
function showElement(el, forceHide) {
  if (el.style.display === 'none') { el.style.display = ''; }
}
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/isVisible.js
function isVisible(el) {
  return window.getComputedStyle(el).display !== 'none';
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

// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/has3DTransforms.js




function has3DTransforms(tf){
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
  var passiveOption_opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, passiveOption_opts);
} catch (e) {}
var passiveOption = supportsPassive ? { passive: true } : false;
// CONCATENATED MODULE: ./node_modules/tiny-slider/src/helpers/addEvents.js


function addEvents(el, obj, preventScrolling) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? passiveOption : false;
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
      data.type = eventName;
      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function(fn) {
          fn(data, eventName);
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
    center: false,
    controls: true,
    controlsPosition: 'top',
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    prevButton: false,
    nextButton: false,
    nav: true,
    navPosition: 'top',
    navContainer: false,
    navAsThumbnails: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayPosition: 'top',
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    animateIn: 'tns-fadeIn',
    animateOut: 'tns-fadeOut',
    animateNormal: 'tns-normal',
    animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    lazyloadSelector: '.tns-lazy-img',
    touch: true,
    mouseDrag: false,
    swipeAngle: 15,
    nested: false,
    preventActionWhenRunning: false,
    preventScrollOnTouch: false,
    freezable: true,
    onInit: false,
    useLocalStorage: true
  }, options || {});
  
  var doc = document,
      win = window,
      KEYS = {
        ENTER: 13,
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39
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

  var CALC = tnsStorage['tC'] ? checkStorageValue(tnsStorage['tC']) : setLocalStorage(tnsStorage, 'tC', calc(), localStorageAccess),
      PERCENTAGELAYOUT = tnsStorage['tPL'] ? checkStorageValue(tnsStorage['tPL']) : setLocalStorage(tnsStorage, 'tPL', percentageLayout(), localStorageAccess),
      CSSMQ = tnsStorage['tMQ'] ? checkStorageValue(tnsStorage['tMQ']) : setLocalStorage(tnsStorage, 'tMQ', mediaquerySupport(), localStorageAccess),
      TRANSFORM = tnsStorage['tTf'] ? checkStorageValue(tnsStorage['tTf']) : setLocalStorage(tnsStorage, 'tTf', whichProperty('transform'), localStorageAccess),
      HAS3DTRANSFORMS = tnsStorage['t3D'] ? checkStorageValue(tnsStorage['t3D']) : setLocalStorage(tnsStorage, 't3D', has3DTransforms(TRANSFORM), localStorageAccess),
      TRANSITIONDURATION = tnsStorage['tTDu'] ? checkStorageValue(tnsStorage['tTDu']) : setLocalStorage(tnsStorage, 'tTDu', whichProperty('transitionDuration'), localStorageAccess),
      TRANSITIONDELAY = tnsStorage['tTDe'] ? checkStorageValue(tnsStorage['tTDe']) : setLocalStorage(tnsStorage, 'tTDe', whichProperty('transitionDelay'), localStorageAccess),
      ANIMATIONDURATION = tnsStorage['tADu'] ? checkStorageValue(tnsStorage['tADu']) : setLocalStorage(tnsStorage, 'tADu', whichProperty('animationDuration'), localStorageAccess),
      ANIMATIONDELAY = tnsStorage['tADe'] ? checkStorageValue(tnsStorage['tADe']) : setLocalStorage(tnsStorage, 'tADe', whichProperty('animationDelay'), localStorageAccess),
      TRANSITIONEND = tnsStorage['tTE'] ? checkStorageValue(tnsStorage['tTE']) : setLocalStorage(tnsStorage, 'tTE', getEndProperty(TRANSITIONDURATION, 'Transition'), localStorageAccess),
      ANIMATIONEND = tnsStorage['tAE'] ? checkStorageValue(tnsStorage['tAE']) : setLocalStorage(tnsStorage, 'tAE', getEndProperty(ANIMATIONDURATION, 'Animation'), localStorageAccess);

  // get element nodes from selectors
  var supportConsoleWarn = win.console && typeof win.console.warn === "function",
      tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'], 
      optionsElements = {};
      
  tnsList.forEach(function(item) {
    if (typeof options[item] === 'string') {
      var str = options[item],
          el = doc.querySelector(str);
      optionsElements[item] = str;

      if (el && el.nodeName) {
        options[item] = el;
      } else {
        if (supportConsoleWarn) { console.warn('Can\'t find', options[item]); }
        return;
      }
    }
  });

  // make sure at least 1 slide
  if (options.container.children.length < 1) {
    if (supportConsoleWarn) { console.warn('No slides found in', options.container); }
    return;
   }

  // update options
  var responsive = options.responsive,
      nested = options.nested,
      carousel = options.mode === 'carousel' ? true : false;

  if (responsive) {
    // apply responsive[0] to options and remove it
    if (0 in responsive) {
      options = extend(options, responsive[0]);
      delete responsive[0];
    }

    var responsiveTem = {};
    for (var key in responsive) {
      var val = responsive[key];
      // update responsive
      // from: 300: 2
      // to: 
      //   300: { 
      //     items: 2 
      //   } 
      val = typeof val === 'number' ? {items: val} : val;
      responsiveTem[key] = val;
    }
    responsive = responsiveTem;
    responsiveTem = null;
  }

  // update options
  function updateOptions (obj) {
    for (var key in obj) {
      if (!carousel) {
        if (key === 'slideBy') { obj[key] = 'page'; }
        if (key === 'edgePadding') { obj[key] = false; }
        if (key === 'autoHeight') { obj[key] = false; }
      }

      // update responsive options
      if (key === 'responsive') { updateOptions(obj[key]); }
    }
  }
  if (!carousel) { updateOptions(options); }


  // === define and set variables ===
  if (!carousel) {
    options.axis = 'horizontal';
    options.slideBy = 'page';
    options.edgePadding = false;

    var animateIn = options.animateIn,
        animateOut = options.animateOut,
        animateDelay = options.animateDelay,
        animateNormal = options.animateNormal;
  }

  var horizontal = options.axis === 'horizontal' ? true : false,
      outerWrapper = doc.createElement('div'),
      innerWrapper = doc.createElement('div'),
      middleWrapper,
      container = options.container,
      containerParent = container.parentNode,
      containerHTML = container.outerHTML,
      slideItems = container.children,
      slideCount = slideItems.length,
      breakpointZone,
      windowWidth = getWindowWidth(),
      isOn = false;
  if (responsive) { setBreakpointZone(); }
  if (carousel) { container.className += ' tns-vpfix'; }

  // fixedWidth: viewport > rightBoundary > indexMax
  var autoWidth = options.autoWidth,
      fixedWidth = getOption('fixedWidth'),
      edgePadding = getOption('edgePadding'),
      gutter = getOption('gutter'),
      viewport = getViewportWidth(),
      center = getOption('center'),
      items = !autoWidth ? Math.floor(getOption('items')) : 1,
      slideBy = getOption('slideBy'),
      viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
      arrowKeys = getOption('arrowKeys'),
      speed = getOption('speed'),
      rewind = options.rewind,
      loop = rewind ? false : options.loop,
      autoHeight = getOption('autoHeight'),
      controls = getOption('controls'),
      controlsText = getOption('controlsText'),
      nav = getOption('nav'),
      touch = getOption('touch'),
      mouseDrag = getOption('mouseDrag'),
      autoplay = getOption('autoplay'),
      autoplayTimeout = getOption('autoplayTimeout'),
      autoplayText = getOption('autoplayText'),
      autoplayHoverPause = getOption('autoplayHoverPause'),
      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
      sheet = createStyleSheet(),
      lazyload = options.lazyload,
      lazyloadSelector = options.lazyloadSelector,
      slidePositions, // collection of slide positions
      slideItemsOut = [],
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
      getIndexMax = (function () {
        if (fixedWidth) {
          return function() { return center && !loop ? slideCount - 1 : Math.ceil(- rightBoundary / (fixedWidth + gutter)); };
        } else if (autoWidth) {
          return function() {
            for (var i = slideCountNew; i--;) {
              if (slidePositions[i] >= - rightBoundary) { return i; }
            }
          };
        } else {
          return function() {
            if (center && carousel && !loop) {
              return slideCount - 1;
            } else {
              return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
            }
          };
        }
      })(),
      index = getStartIndex(getOption('startIndex')),
      indexCached = index,
      displayIndex = getCurrentSlide(),
      indexMin = 0,
      indexMax = !autoWidth ? getIndexMax() : null,
      // resize
      resizeTimer,
      preventActionWhenRunning = options.preventActionWhenRunning,
      swipeAngle = options.swipeAngle,
      moveDirectionExpected = swipeAngle ? '?' : true,
      running = false,
      onInit = options.onInit,
      events = new Events(),
      // id, class
      newContainerClasses = ' tns-slider tns-' + options.mode,
      slideId = container.id || getSlideId(),
      disable = getOption('disable'),
      disabled = false,
      freezable = options.freezable,
      freeze = freezable && !autoWidth ? getFreeze() : false,
      frozen = false,
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
      hasControls = hasOption('controls'),
      hasNav = hasOption('nav'),
      navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
      hasAutoplay = hasOption('autoplay'),
      hasTouch = hasOption('touch'),
      hasMouseDrag = hasOption('mouseDrag'),
      slideActiveClass = 'tns-slide-active',
      imgCompleteClass = 'tns-complete',
      imgEvents = {
        'load': onImgLoaded,
        'error': onImgFailed
      },
      imgsComplete,
      liveregionCurrent,
      preventScroll = options.preventScrollOnTouch === 'force' ? true : false;

  // controls
  if (hasControls) {
    var controlsContainer = options.controlsContainer,
        controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
        prevButton = options.prevButton,
        nextButton = options.nextButton,
        prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
        nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
        prevIsButton,
        nextIsButton;
  }

  // nav
  if (hasNav) {
    var navContainer = options.navContainer,
        navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
        navItems,
        pages = autoWidth ? slideCount : getPages(),
        pagesCached = 0,
        navClicked = -1,
        navCurrentIndex = getCurrentNavIndex(),
        navCurrentIndexCached = navCurrentIndex,
        navActiveClass = 'tns-nav-active',
        navStr = 'Carousel Page ',
        navStrCurrent = ' (Current Slide)';
  }

  // autoplay
  if (hasAutoplay) {
    var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
        autoplayButton = options.autoplayButton,
        autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
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
        rafIndex,
        getDist = horizontal ? 
          function(a, b) { return a.x - b.x; } :
          function(a, b) { return a.y - b.y; };
  }
  
  // disable slider when slidecount <= items
  if (!autoWidth) { resetVariblesWhenDisable(disable || freeze); }

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = 'translate';

    if (HAS3DTRANSFORMS) {
      transformPrefix += horizontal ? '3d(' : '3d(0px, ';
      transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
    } else {
      transformPrefix += horizontal ? 'X(' : 'Y(';
      transformPostfix = ')';
    }

  }

  if (carousel) { container.className = container.className.replace('tns-vpfix', ''); }
  initStructure();
  initSheet();
  initSliderTransform();

  // === COMMON FUNCTIONS === //
  function resetVariblesWhenDisable (condition) {
    if (condition) {
      controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
  }

  function getCurrentSlide () {
    var tem = carousel ? index - cloneCount : index;
    while (tem < 0) { tem += slideCount; }
    return tem%slideCount + 1;
  }

  function getStartIndex (ind) {
    ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
    return carousel ? ind + cloneCount : ind;
  }

  function getAbsIndex (i) {
    if (i == null) { i = index; }

    if (carousel) { i -= cloneCount; }
    while (i < 0) { i += slideCount; }

    return Math.floor(i%slideCount);
  }

  function getCurrentNavIndex () {
    var absIndex = getAbsIndex(),
        result;

    result = navAsThumbnails ? absIndex : 
      fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : 
          Math.floor(absIndex / items);

    // set active nav to the last one when reaches the right edge
    if (!loop && carousel && index === indexMax) { result = pages - 1; }

    return result;
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

      if (responsive) {
        for (var bp in responsive) {
          var tem = responsive[bp][str];
          if (tem && (fixedWidth || tem < slideCount)) { arr.push(tem); }
        }
      }

      if (!arr.length) { arr.push(0); }

      return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
    }
  }

  function getCloneCountForLoop () {
    var itemsMax = getItemsMax(),
        result = carousel ? Math.ceil((itemsMax * 5 - slideCount)/2) : (itemsMax * 4 - slideCount);
    result = Math.max(itemsMax, result);

    return hasOption('edgePadding') ? result + 1 : result;
  }

  function getWindowWidth () {
    return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
  }

  function getInsertPosition (pos) {
    return pos === 'top' ? 'afterbegin' : 'beforeend';
  }

  function getClientWidth (el) {
    var div = doc.createElement('div'), rect, width;
    el.appendChild(div);
    rect = div.getBoundingClientRect();
    width = rect.right - rect.left;
    div.remove();
    return width || getClientWidth(el.parentNode);
  }

  function getViewportWidth () {
    var gap = edgePadding ? edgePadding * 2 - gutter : 0;
    return getClientWidth(containerParent) - gap;
  }

  function hasOption (item) {
    if (options[item]) {
      return true;
    } else {
      if (responsive) {
        for (var bp in responsive) {
          if (responsive[bp][item]) { return true; }
        }
      }
      return false;
    }
  }

  // get option:
  // fixed width: viewport, fixedWidth, gutter => items
  // others: window width => all variables
  // all: items => slideBy
  function getOption (item, ww) {
    if (ww == null) { ww = windowWidth; }

    if (item === 'items' && fixedWidth) {
      return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;

    } else {
      var result = options[item];

      if (responsive) {
        for (var bp in responsive) {
          // bp: convert string to number
          if (ww >= parseInt(bp)) {
            if (item in responsive[bp]) { result = responsive[bp][item]; }
          }
        }
      }

      if (item === 'slideBy' && result === 'page') { result = getOption('items'); }
      if (!carousel && (item === 'slideBy' || item === 'items')) { result = Math.floor(result); }

      return result;
    }
  }

  function getSlideMarginLeft (i) {
    return CALC ? 
      CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' : 
      i * 100 / slideCountNew + '%';
  }

  function getInnerWrapperStyles (edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
    var str = '';

    if (edgePaddingTem !== undefined) {
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

    if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) { str += getTransitionDurationStyle(speedTem); }
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

    width = 'width:' + width;

    // inner slider: overwrite outer slider styles
    return nested !== 'inner' ? width + ';' : width + ' !important;';
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

  function getTransitionDurationStyle (speed) {
    return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
  }

  function getAnimationDurationStyle (speed) {
    return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
  }

  function initStructure () {
    var classOuter = 'tns-outer',
        classInner = 'tns-inner',
        hasGutter = hasOption('gutter');

    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    outerWrapper.id = slideId + '-ow';
    innerWrapper.id = slideId + '-iw';

    // set container properties
    if (container.id === '') { container.id = slideId; }
    newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
    newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';
    if (autoWidth) { newContainerClasses += ' tns-autowidth'; }
    newContainerClasses += ' tns-' + options.axis;
    container.className += newContainerClasses;

    // add constrain layer for carousel
    if (carousel) {
      middleWrapper = doc.createElement('div');
      middleWrapper.id = slideId + '-mw';
      middleWrapper.className = 'tns-ovh';

      outerWrapper.appendChild(middleWrapper);
      middleWrapper.appendChild(innerWrapper);
    } else {
      outerWrapper.appendChild(innerWrapper);
    }

    if (autoHeight) {
      var wp = middleWrapper ? middleWrapper : innerWrapper;
      wp.className += ' tns-ah';
    }

    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container);

    // add id, class, aria attributes 
    // before clone slides
    forEach(slideItems, function(item, i) {
      addClass(item, 'tns-item');
      if (!item.id) { item.id = slideId + '-item' + i; }
      if (!carousel && animateNormal) { addClass(item, animateNormal); }
      setAttrs(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    });

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

  }

  function initSliderTransform () {
    // ## images loaded/failed
    if (hasOption('autoHeight') || autoWidth || !horizontal) {
      var imgs = container.querySelectorAll('img');

      // add complete class if all images are loaded/failed
      forEach(imgs, function(img) {
        var src = img.src;
        
        if (src && src.indexOf('data:image') < 0) {
          addEvents(img, imgEvents);
          img.src = '';
          img.src = src;
          addClass(img, 'loading');
        } else if (!lazyload) {
          imgLoaded(img);
        }
      });

      // All imgs are completed
      raf(function(){ imgsLoadedCheck(arrayFromNodeList(imgs), function() { imgsComplete = true; }); });

      // Check imgs in window only for auto height
      if (!autoWidth && horizontal) { imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1)); }

      lazyload ? initSliderTransformStyleCheck() : raf(function(){ imgsLoadedCheck(arrayFromNodeList(imgs), initSliderTransformStyleCheck); });

    } else {
      // set container transform property
      if (carousel) { doContainerTransformSilent(); }

      // update slider tools and events
      initTools();
      initEvents();
    }
  }

  function initSliderTransformStyleCheck () {
    if (autoWidth) {
      // check styles application
      var num = loop ? index : slideCount - 1;
      (function stylesApplicationCheck() {
        slideItems[num - 1].getBoundingClientRect().right.toFixed(2) === slideItems[num].getBoundingClientRect().left.toFixed(2) ?
        initSliderTransformCore() :
        setTimeout(function(){ stylesApplicationCheck() }, 16);
      })();
    } else {
      initSliderTransformCore();
    }
  }


  function initSliderTransformCore () {
    // run Fn()s which are rely on image loading
    if (!horizontal || autoWidth) {
      setSlidePositions();

      if (autoWidth) {
        rightBoundary = getRightBoundary();
        if (freezable) { freeze = getFreeze(); }
        indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=
        resetVariblesWhenDisable(disable || freeze);
      } else {
        updateContentWrapperHeight();
      }
    }

    // set container transform property
    if (carousel) { doContainerTransformSilent(); }

    // update slider tools and events
    initTools();
    initEvents();
  }

  function initSheet () {
    // gallery:
    // set animation classes and left value for gallery slider
    if (!carousel) { 
      for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
        var item = slideItems[i];
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
    if (horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        addCSSRule(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', getCssRulesLength(sheet));
        addCSSRule(sheet, '#' + slideId, 'font-size:0;', getCssRulesLength(sheet));
      } else if (carousel) {
        forEach(slideItems, function (slide, i) {
          slide.style.marginLeft = getSlideMarginLeft(i);
        });
      }
    }


    // ## BASIC STYLES
    if (CSSMQ) {
      // middle wrapper style
      if (TRANSITIONDURATION) {
        var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
        addCSSRule(sheet, '#' + slideId + '-mw', str, getCssRulesLength(sheet));
      }

      // inner wrapper styles
      str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
      addCSSRule(sheet, '#' + slideId + '-iw', str, getCssRulesLength(sheet));

      // container styles
      if (carousel) {
        str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        addCSSRule(sheet, '#' + slideId, str, getCssRulesLength(sheet));
      }

      // slide styles
      str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';
      if (options.gutter) { str += getSlideGutterStyle(options.gutter); }
      // set gallery items transition-duration
      if (!carousel) {
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        if (ANIMATIONDURATION) { str += getAnimationDurationStyle(speed); }
      }
      if (str) { addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet)); }

    // non CSS mediaqueries: IE8
    // ## update inner wrapper, container, slides if needed
    // set inline styles for inner wrapper & container
    // insert stylesheet (one line) for slides only (since slides are many)
    } else {
      // middle wrapper styles
      update_carousel_transition_duration();

      // inner wrapper styles
      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);

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
      for (var bp in responsive) {
        // bp: convert string to number
        bp = parseInt(bp);

        var opts = responsive[bp],
            str = '',
            middleWrapperStr = '',
            innerWrapperStr = '',
            containerStr = '',
            slideStr = '',
            itemsBP = !autoWidth ? getOption('items', bp) : null,
            fixedWidthBP = getOption('fixedWidth', bp),
            speedBP = getOption('speed', bp),
            edgePaddingBP = getOption('edgePadding', bp),
            autoHeightBP = getOption('autoHeight', bp),
            gutterBP = getOption('gutter', bp);

        // middle wrapper string
        if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
          middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
        }

        // inner wrapper string
        if ('edgePadding' in opts || 'gutter' in opts) {
          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
        }

        // container string
        if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || (fixedWidth && 'gutter' in opts))) {
          containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
        }
        if (TRANSITIONDURATION && 'speed' in opts) {
          containerStr += getTransitionDurationStyle(speedBP);
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
          if (TRANSITIONDURATION) { slideStr += getTransitionDurationStyle(speedBP); }
          if (ANIMATIONDURATION) { slideStr += getAnimationDurationStyle(speedBP); }
        }
        if (slideStr) { slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}'; }

        // add up
        str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;

        if (str) {
          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
        }
      }
    }
  }

  function initTools () {
    // == slides ==
    updateSlideStatus();

    // == live region ==
    outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
    liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current');

    // == autoplayInit ==
    if (hasAutoplay) {
      var txt = autoplay ? 'stop' : 'start';
      if (autoplayButton) {
        setAttrs(autoplayButton, {'data-action': txt});
      } else if (options.autoplayButtonOutput) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
        autoplayButton = outerWrapper.querySelector('[data-action]');
      }

      // add event
      if (autoplayButton) {
        addEvents(autoplayButton, {'click': toggleAutoplay});
      }

      if (autoplay) {
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
        forEach(navItems, function(item, i) {
          setAttrs(item, {
            'data-nav': i,
            'tabindex': '-1',
            'aria-label': navStr + (i + 1),
            'aria-controls': slideId,
          });
        });

      // generated nav 
      } else {
        var navHtml = '',
            hiddenStr = navAsThumbnails ? '' : 'style="display:none"';
        for (var i = 0; i < slideCount; i++) {
          // hide nav items by default
          navHtml += '<button data-nav="' + i +'" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) +'"></button>';
        }
        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);

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

      setAttrs(navItems[navCurrentIndex], {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
      removeAttrs(navItems[navCurrentIndex], 'tabindex');
      addClass(navItems[navCurrentIndex], navActiveClass);

      // add events
      addEvents(navContainer, navEvents);
    }



    // == controlsInit ==
    if (hasControls) {
      if (!controlsContainer && (!prevButton || !nextButton)) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[1] + '</button></div>');

        controlsContainer = outerWrapper.querySelector('.tns-controls');
      }

      if (!prevButton || !nextButton) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }

      if (options.controlsContainer) {
        setAttrs(controlsContainer, {
          'aria-label': 'Carousel Navigation',
          'tabindex': '0'
        });
      }

      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        setAttrs([prevButton, nextButton], {
          'aria-controls': slideId,
          'tabindex': '-1',
        });
      }
      
      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        setAttrs(prevButton, {'data-controls' : 'prev'});
        setAttrs(nextButton, {'data-controls' : 'next'});
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
    }

    // hide tools if needed
    disableUI();
  }

  function initEvents () {
    // add events
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      addEvents(container, eve);
    }

    if (touch) { addEvents(container, touchEvents, options.preventScrollOnTouch); }
    if (mouseDrag) { addEvents(container, dragEvents); }
    if (arrowKeys) { addEvents(doc, docmentKeydownEvent); }

    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
      addEvents(win, {'resize': onResize});
    }

    if (autoHeight) {
      if (nested === 'outer') {
        events.on('innerLoaded', doAutoHeight);
      } else if (!disable) { doAutoHeight(); }
    }

    doLazyLoad();
    if (disable) { disableSlider(); } else if (freeze) { freezeSlider(); }

    events.on('indexChanged', additionalUpdates);
    if (nested === 'inner') { events.emit('innerLoaded', info()); }
    if (typeof onInit === 'function') { onInit(info()); }
    isOn = true;
  }

  function destroy () {
    // sheet
    sheet.disabled = true;
    if (sheet.ownerNode) { sheet.ownerNode.remove(); }

    // remove win event listeners
    removeEvents(win, {'resize': onResize});

    // arrowKeys, controls, nav
    if (arrowKeys) { removeEvents(doc, docmentKeydownEvent); }
    if (controlsContainer) { removeEvents(controlsContainer, controlsEvents); }
    if (navContainer) { removeEvents(navContainer, navEvents); }

    // autoplay
    removeEvents(container, hoverEvents);
    removeEvents(container, visibilityEvent);
    if (autoplayButton) { removeEvents(autoplayButton, {'click': toggleAutoplay}); }
    if (autoplay) { clearInterval(autoplayTimer); }

    // container
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      removeEvents(container, eve);
    }
    if (touch) { removeEvents(container, touchEvents); }
    if (mouseDrag) { removeEvents(container, dragEvents); }

    // cache Object values in options && reset HTML
    var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];

    tnsList.forEach(function(item, i) {
      var el = item === 'container' ? outerWrapper : options[item];

      if (typeof el === 'object') {
        var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
            parentEl = el.parentNode;
        el.outerHTML = htmlList[i];
        options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
      }
    });


    // reset variables
    tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
    // check variables
    // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });

    for (var a in this) {
      if (a !== 'rebuild') { this[a] = null; }
    }
    isOn = false;
  }

// === ON RESIZE ===
  // responsive || fixedWidth || autoWidth || !horizontal
  function onResize (e) {
    raf(function(){ resizeTasks(getEvent(e)); });
  }

  function resizeTasks (e) {
    if (!isOn) { return; }
    if (nested === 'outer') { events.emit('outerResized', info(e)); }
    windowWidth = getWindowWidth();
    var bpChanged,
        breakpointZoneTem = breakpointZone,
        needContainerTransform = false;

    if (responsive) {
      setBreakpointZone();
      bpChanged = breakpointZoneTem !== breakpointZone;
      // if (hasRightDeadZone) { needContainerTransform = true; } // *?
      if (bpChanged) { events.emit('newBreakpointStart', info(e)); }
    }

    var indChanged,
        itemsChanged,
        itemsTem = items,
        disableTem = disable,
        freezeTem = freeze,
        arrowKeysTem = arrowKeys,
        controlsTem = controls,
        navTem = nav,
        touchTem = touch,
        mouseDragTem = mouseDrag,
        autoplayTem = autoplay,
        autoplayHoverPauseTem = autoplayHoverPause,
        autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
        indexTem = index;

    if (bpChanged) {
      var fixedWidthTem = fixedWidth,
          autoHeightTem = autoHeight,
          controlsTextTem = controlsText,
          centerTem = center,
          autoplayTextTem = autoplayText;

      if (!CSSMQ) {
        var gutterTem = gutter,
            edgePaddingTem = edgePadding;
      }
    }

    // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy
    arrowKeys = getOption('arrowKeys');
    controls = getOption('controls');
    nav = getOption('nav');
    touch = getOption('touch');
    center = getOption('center');
    mouseDrag = getOption('mouseDrag');
    autoplay = getOption('autoplay');
    autoplayHoverPause = getOption('autoplayHoverPause');
    autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');

    if (bpChanged) {
      disable = getOption('disable');
      fixedWidth = getOption('fixedWidth');
      speed = getOption('speed');
      autoHeight = getOption('autoHeight');
      controlsText = getOption('controlsText');
      autoplayText = getOption('autoplayText');
      autoplayTimeout = getOption('autoplayTimeout');

      if (!CSSMQ) {
        edgePadding = getOption('edgePadding');
        gutter = getOption('gutter');
      }
    }
    // update options
    resetVariblesWhenDisable(disable);

    viewport = getViewportWidth(); // <= edgePadding, gutter
    if ((!horizontal || autoWidth) && !disable) {
      setSlidePositions();
      if (!horizontal) {
        updateContentWrapperHeight(); // <= setSlidePositions
        needContainerTransform = true;
      }
    }
    if (fixedWidth || autoWidth) {
      rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
                                          // fixedWidth: <= viewport, fixedWidth, gutter
      indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
                                // fixedWidth: <= rightBoundary, fixedWidth, gutter
    }

    if (bpChanged || fixedWidth) {
      items = getOption('items');
      slideBy = getOption('slideBy');
      itemsChanged = items !== itemsTem;

      if (itemsChanged) {
        if (!fixedWidth && !autoWidth) { indexMax = getIndexMax(); } // <= items
        // check index before transform in case
        // slider reach the right edge then items become bigger
        updateIndex();
      }
    }
    
    if (bpChanged) {
      if (disable !== disableTem) {
        if (disable) {
          disableSlider();
        } else {
          enableSlider(); // <= slidePositions, rightBoundary, indexMax
        }
      }
    }

    if (freezable && (bpChanged || fixedWidth || autoWidth)) {
      freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
                            // <= fixedWidth: fixedWidth, gutter, rightBoundary
                            // <= others: items

      if (freeze !== freezeTem) {
        if (freeze) {
          doContainerTransform(getContainerTransformValue(getStartIndex(0)));
          freezeSlider();
        } else {
          unfreezeSlider();
          needContainerTransform = true;
        }
      }
    }

    resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility
    if (!autoplay) { autoplayHoverPause = autoplayResetOnVisibility = false; }

    if (arrowKeys !== arrowKeysTem) {
      arrowKeys ?
        addEvents(doc, docmentKeydownEvent) :
        removeEvents(doc, docmentKeydownEvent);
    }
    if (controls !== controlsTem) {
      if (controls) {
        if (controlsContainer) {
          showElement(controlsContainer);
        } else {
          if (prevButton) { showElement(prevButton); }
          if (nextButton) { showElement(nextButton); }
        }
      } else {
        if (controlsContainer) {
          hideElement(controlsContainer);
        } else {
          if (prevButton) { hideElement(prevButton); }
          if (nextButton) { hideElement(nextButton); }
        }
      }
    }
    if (nav !== navTem) {
      nav ?
        showElement(navContainer) :
        hideElement(navContainer);
    }
    if (touch !== touchTem) {
      touch ?
        addEvents(container, touchEvents, options.preventScrollOnTouch) :
        removeEvents(container, touchEvents);
    }
    if (mouseDrag !== mouseDragTem) {
      mouseDrag ?
        addEvents(container, dragEvents) :
        removeEvents(container, dragEvents);
    }
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

    if (bpChanged) {
      if (fixedWidth !== fixedWidthTem || center !== centerTem) { needContainerTransform = true; }

      if (autoHeight !== autoHeightTem) {
        if (!autoHeight) { innerWrapper.style.height = ''; }
      }

      if (controls && controlsText !== controlsTextTem) {
        prevButton.innerHTML = controlsText[0];
        nextButton.innerHTML = controlsText[1];
      }

      if (autoplayButton && autoplayText !== autoplayTextTem) {
        var i = autoplay ? 1 : 0,
            html = autoplayButton.innerHTML,
            len = html.length - autoplayTextTem[i].length;
        if (html.substring(len) === autoplayTextTem[i]) {
          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
        }
      }
    } else {
      if (center && (fixedWidth || autoWidth)) { needContainerTransform = true; }
    }

    if (itemsChanged || fixedWidth && !autoWidth) {
      pages = getPages();
      updateNavVisibility();
    }

    indChanged = index !== indexTem;
    if (indChanged) { 
      events.emit('indexChanged', info());
      needContainerTransform = true;
    } else if (itemsChanged) {
      if (!indChanged) { additionalUpdates(); }
    } else if (fixedWidth || autoWidth) {
      doLazyLoad(); 
      updateSlideStatus();
      updateLiveRegion();
    }

    if (itemsChanged && !carousel) { updateGallerySlidePositions(); }

    if (!disable && !freeze) {
      // non-meduaqueries: IE8
      if (bpChanged && !CSSMQ) {
        // middle wrapper styles
        if (autoHeight !== autoheightTem || speed !== speedTem) {
          update_carousel_transition_duration();
        }

        // inner wrapper styles
        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
        }

        if (horizontal) {
          // container styles
          if (carousel) {
            container.style.width = getContainerWidth(fixedWidth, gutter, items);
          }

          // slide styles
          var str = getSlideWidthStyle(fixedWidth, gutter, items) + 
                    getSlideGutterStyle(gutter);

          // remove the last line and
          // add new styles
          removeCSSRule(sheet, getCssRulesLength(sheet) - 1);
          addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet));
        }
      }

      // auto height
      if (autoHeight) { doAutoHeight(); }

      if (needContainerTransform) {
        doContainerTransformSilent();
        indexCached = index;
      }
    }

    if (bpChanged) { events.emit('newBreakpointEnd', info(e)); }
  }





  // === INITIALIZATION FUNCTIONS === //
  function getFreeze () {
    if (!fixedWidth && !autoWidth) {
      var a = center ? items - (items - 1) / 2 : items;
      return  slideCount <= a;
    }

    var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
        vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;

    if (center) {
      vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
    }

    return width <= vp;
  }

  function setBreakpointZone () {
    breakpointZone = 0;
    for (var bp in responsive) {
      bp = parseInt(bp); // convert string to number
      if (windowWidth >= bp) { breakpointZone = bp; }
    }
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

          // adjust edges when has edge paddings
          // or fixed-width slider with extra space on the right side
          if (edgePadding) {
            leftEdge += 1;
            rightEdge -= 1;
          } else if (fixedWidth) {
            if ((viewport + gutter)%(fixedWidth + gutter)) { rightEdge -= 1; }
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

  function disableUI () {
    if (!autoplay && autoplayButton) { hideElement(autoplayButton); }
    if (!nav && navContainer) { hideElement(navContainer); }
    if (!controls) {
      if (controlsContainer) {
        hideElement(controlsContainer);
      } else {
        if (prevButton) { hideElement(prevButton); }
        if (nextButton) { hideElement(nextButton); }
      }
    }
  }

  function enableUI () {
    if (autoplay && autoplayButton) { showElement(autoplayButton); }
    if (nav && navContainer) { showElement(navContainer); }
    if (controls) {
      if (controlsContainer) {
        showElement(controlsContainer);
      } else {
        if (prevButton) { showElement(prevButton); }
        if (nextButton) { showElement(nextButton); }
      }
    }
  }

  function freezeSlider () {
    if (frozen) { return; }

    // remove edge padding from inner wrapper
    if (edgePadding) { innerWrapper.style.margin = '0px'; }

    // add class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { addClass(slideItems[i], str); }
        addClass(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    disableUI();

    frozen = true;
  }

  function unfreezeSlider () {
    if (!frozen) { return; }

    // restore edge padding for inner wrapper
    // for mordern browsers
    if (edgePadding && CSSMQ) { innerWrapper.style.margin = ''; }

    // remove class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { removeClass(slideItems[i], str); }
        removeClass(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    enableUI();

    frozen = false;
  }

  function disableSlider () {
    if (disabled) { return; }

    sheet.disabled = true;
    container.className = container.className.replace(newContainerClasses.substring(1), '');
    removeAttrs(container, ['style']);
    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { hideElement(slideItems[j]); }
        hideElement(slideItems[slideCountNew - j - 1]);
      }
    }

    // vertical slider
    if (!horizontal || !carousel) { removeAttrs(innerWrapper, ['style']); }

    // gallery
    if (!carousel) { 
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i];
        removeAttrs(item, ['style']);
        removeClass(item, animateIn);
        removeClass(item, animateNormal);
      }
    }

    // update tools
    disableUI();

    disabled = true;
  }

  function enableSlider () {
    if (!disabled) { return; }

    sheet.disabled = false;
    container.className += newContainerClasses;
    doContainerTransformSilent();

    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { showElement(slideItems[j]); }
        showElement(slideItems[slideCountNew - j - 1]);
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

    // update tools
    enableUI();

    disabled = false;
  }

  function updateLiveRegion () {
    var str = getLiveRegionStr();
    if (liveregionCurrent.innerHTML !== str) { liveregionCurrent.innerHTML = str; }
  }

  function getLiveRegionStr () {
    var arr = getVisibleSlideRange(),
        start = arr[0] + 1,
        end = arr[1] + 1;
    return start === end ? start + '' : start + ' to ' + end; 
  }

  function getVisibleSlideRange (val) {
    if (val == null) { val = getContainerTransformValue(); }
    var start = index, end, rangestart, rangeend;

    // get range start, range end for autoWidth and fixedWidth
    if (center || edgePadding) {
      if (autoWidth || fixedWidth) {
        rangestart = - (parseFloat(val) + edgePadding);
        rangeend = rangestart + viewport + edgePadding * 2;
      }
    } else {
      if (autoWidth) {
        rangestart = slidePositions[index];
        rangeend = rangestart + viewport;
      }
    }

    // get start, end
    // - check auto width
    if (autoWidth) {
      slidePositions.forEach(function(point, i) {
        if (i < slideCountNew) {
          if ((center || edgePadding) && point <= rangestart + 0.5) { start = i; }
          if (rangeend - point >= 0.5) { end = i; }
        }
      });

    // - check percentage width, fixed width
    } else {

      if (fixedWidth) {
        var cell = fixedWidth + gutter;
        if (center || edgePadding) {
          start = Math.floor(rangestart/cell);
          end = Math.ceil(rangeend/cell - 1);
        } else {
          end = start + Math.ceil(viewport/cell) - 1;
        }

      } else {
        if (center || edgePadding) {
          var a = items - 1;
          if (center) {
            start -= a / 2;
            end = index + a / 2;
          } else {
            end = index + a;
          }

          if (edgePadding) {
            var b = edgePadding * items / viewport;
            start -= b;
            end += b;
          }

          start = Math.floor(start);
          end = Math.ceil(end);
        } else {
          end = start + items - 1;
        }
      }

      start = Math.max(start, 0);
      end = Math.min(end, slideCountNew - 1);
    }

    return [start, end];
  }

  function doLazyLoad () {
    if (lazyload && !disable) {
      getImageArray.apply(null, getVisibleSlideRange()).forEach(function (img) {
        if (!hasClass(img, imgCompleteClass)) {
          // stop propagation transitionend event to container
          var eve = {};
          eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };
          addEvents(img, eve);

          addEvents(img, imgEvents);

          // update src
          img.src = getAttr(img, 'data-src');

          // update srcset
          var srcset = getAttr(img, 'data-srcset');
          if (srcset) { img.srcset = srcset; }

          addClass(img, 'loading');
        }
      });
    }
  }

  function onImgLoaded (e) {
    imgLoaded(getTarget(e));
  }

  function onImgFailed (e) {
    imgFailed(getTarget(e));
  }

  function imgLoaded (img) {
    addClass(img, 'loaded');
    imgCompleted(img);
  }

  function imgFailed (img) {
    addClass(img, 'failed');
    imgCompleted(img);
  }

  function imgCompleted (img) {
    addClass(img, 'tns-complete');
    removeClass(img, 'loading');
    removeEvents(img, imgEvents);
  }

  function getImageArray (start, end) {
    var imgs = [];
    while (start <= end) {
      forEach(slideItems[start].querySelectorAll('img'), function (img) { imgs.push(img); });
      start++;
    }

    return imgs;
  }

  // check if all visible images are loaded
  // and update container height if it's done
  function doAutoHeight () {
    var imgs = getImageArray.apply(null, getVisibleSlideRange());
    raf(function(){ imgsLoadedCheck(imgs, updateInnerWrapperHeight); });
  }

  function imgsLoadedCheck (imgs, cb) {
    // directly execute callback function if all images are complete
    if (imgsComplete) { return cb(); }

    // check selected image classes otherwise
    imgs.forEach(function (img, index) {
      if (hasClass(img, imgCompleteClass)) { imgs.splice(index, 1); }
    });

    // execute callback function if selected images are all complete
    if (!imgs.length) { return cb(); }

    // otherwise execute this functiona again
    raf(function(){ imgsLoadedCheck(imgs, cb); });
  } 

  function additionalUpdates () {
    doLazyLoad(); 
    updateSlideStatus();
    updateLiveRegion();
    updateControlsStatus();
    updateNavStatus();
  }


  function update_carousel_transition_duration () {
    if (carousel && autoHeight) {
      middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
    }
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
    var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
        wp = middleWrapper ? middleWrapper : innerWrapper;

    if (wp.style.height !== maxHeight) { wp.style.height = maxHeight + 'px'; }
  }

  // get the distance from the top edge of the first slide to each slide
  // (init) => slidePositions
  function setSlidePositions () {
    slidePositions = [0];
    var attr = horizontal ? 'left' : 'top',
        attr2 = horizontal ? 'right' : 'bottom',
        base = slideItems[0].getBoundingClientRect()[attr];

    forEach(slideItems, function(item, i) {
      // skip the first slide
      if (i) { slidePositions.push(item.getBoundingClientRect()[attr] - base); }
      // add the end edge
      if (i === slideCountNew - 1) { slidePositions.push(item.getBoundingClientRect()[attr2] - base); }
    });
  }

  // update slide
  function updateSlideStatus () {
    var range = getVisibleSlideRange(),
        start = range[0],
        end = range[1];

    forEach(slideItems, function(item, i) {
      // show slides
      if (i >= start && i <= end) {
        if (hasAttr(item, 'aria-hidden')) {
          removeAttrs(item, ['aria-hidden', 'tabindex']);
          addClass(item, slideActiveClass);
        }
      // hide slides
      } else {
        if (!hasAttr(item, 'aria-hidden')) {
          setAttrs(item, {
            'aria-hidden': 'true',
            'tabindex': '-1'
          });
          removeClass(item, slideActiveClass);
        }
      }
    });
  }

  // gallery: update slide position
  function updateGallerySlidePositions () {
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
      forEach(slideItems, function(el) {
        removeClass(el, 'tns-moving');
      });
    }, 300);
  }

  // set tabindex on Nav
  function updateNavStatus () {
    // get current nav
    if (nav) {
      navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
      navClicked = -1;

      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached],
            navCurrent = navItems[navCurrentIndex];

        setAttrs(navPrev, {
          'tabindex': '-1',
          'aria-label': navStr + (navCurrentIndexCached + 1)
        });
        removeClass(navPrev, navActiveClass);
        
        setAttrs(navCurrent, {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
        removeAttrs(navCurrent, 'tabindex');
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
        disablePrev = (index <= indexMin) ? true : false,
        disableNext = (!rewind && index >= indexMax) ? true : false;

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

  function getSliderWidth () {
    return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
  }

  function getCenterGap (num) {
    if (num == null) { num = index; }

    var gap = edgePadding ? gutter : 0;
    return autoWidth ? ((viewport - gap) - (slidePositions[num + 1] - slidePositions[num] - gutter))/2 :
      fixedWidth ? (viewport - fixedWidth) / 2 :
        (items - 1) / 2;
  }

  function getRightBoundary () {
    var gap = edgePadding ? gutter : 0,
        result = (viewport + gap) - getSliderWidth();

    if (center && !loop) {
      result = fixedWidth ? - (fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() :
        getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
    }
    if (result > 0) { result = 0; }

    return result;
  }

  function getContainerTransformValue (num) {
    if (num == null) { num = index; }

    var val;
    if (horizontal && !autoWidth) {
      if (fixedWidth) {
        val = - (fixedWidth + gutter) * num;
        if (center) { val += getCenterGap(); }
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;
        if (center) { num -= getCenterGap(); }
        val = - num * 100 / denominator;
      }
    } else {
      val = - slidePositions[num];
      if (center && autoWidth) {
        val += getCenterGap();
      }
    }

    if (hasRightDeadZone) { val = Math.max(val, rightBoundary); }

    val += (horizontal && !autoWidth && !fixedWidth) ? '%' : 'px';

    return val;
  }

  function doContainerTransformSilent (val) {
    resetDuration(container, '0s');
    doContainerTransform(val);
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
      function () {
        resetDuration(container, '');
        if (TRANSITIONDURATION || !speed) {
          // for morden browsers with non-zero duration or 
          // zero duration for all browsers
          doContainerTransform();
          // run fallback function manually 
          // when duration is 0 / container is hidden
          if (!speed || !isVisible(container)) { onTransitionEnd(); }

        } else {
          // for old browser with non-zero duration
          jsTransform(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
        }

        if (!horizontal) { updateContentWrapperHeight(); }
      } :
      function () {
        slideItemsOut = [];

        var eve = {};
        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
        removeEvents(slideItems[indexCached], eve);
        addEvents(slideItems[index], eve);

        animateSlide(indexCached, animateIn, animateOut, true);
        animateSlide(index, animateNormal, animateIn);

        // run fallback function manually 
        // when transition or animation not supported / duration is 0
        if (!TRANSITIONEND || !ANIMATIONEND || !speed || !isVisible(container)) { onTransitionEnd(); }
      };
  })();

  function render (e, sliderMoved) {
    if (updateIndexBeforeTransform) { updateIndex(); }

    // render when slider was moved (touch or drag) even though index may not change
    if (index !== indexCached || sliderMoved) {
      // events
      events.emit('indexChanged', info());
      events.emit('transitionStart', info());
      if (autoHeight) { doAutoHeight(); }

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
      if (running) {
        if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
      }

      var absIndex = getAbsIndex(), 
          indexGap = 0;

      if (targetIndex === 'first') {
        indexGap = - absIndex;
      } else if (targetIndex === 'last') {
        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
      } else {
        if (typeof targetIndex !== 'number') { targetIndex = parseInt(targetIndex); }

        if (!isNaN(targetIndex)) {
          // from directly called goTo function
          if (!e) { targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex)); }

          indexGap = targetIndex - absIndex;
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
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }
    var passEventObject;

    if (!dir) {
      e = getEvent(e);
      var target = getTarget(e);

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
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }
    
    e = getEvent(e);
    var target = getTarget(e), navIndex;

    // find the clicked nav item
    while (target !== navContainer && !hasAttr(target, 'data-nav')) { target = target.parentNode; }
    if (hasAttr(target, 'data-nav')) {
      var navIndex = navClicked = Number(getAttr(target, 'data-nav')),
          targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
          targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
      goTo(targetIndex, e);

      if (navCurrentIndex === navIndex) {
        if (animating) { stopAutoplay(); }
        navClicked = -1; // reset navClicked
      }
    }
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
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      onControlsClick(e, keyIndex === 0 ? -1 : 1);
    }
  }

  // on key control
  function onControlsKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (!prevButton.disabled) { onControlsClick(e, -1); }
      } else if (!nextButton.disabled) {
        onControlsClick(e, 1);
      }
    }
  }

  // set focus
  function setFocus (el) {
    el.focus();
  }

  // on key nav
  function onNavKeydown (e) {
    e = getEvent(e);
    var curElement = doc.activeElement;
    if (!hasAttr(curElement, 'data-nav')) { return; }

    // var code = e.keyCode,
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
        navIndex = Number(getAttr(curElement, 'data-nav'));

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (navIndex > 0) { setFocus(navItems[navIndex - 1]); }
      } else if (keyIndex === 1) {
        if (navIndex < pages - 1) { setFocus(navItems[navIndex + 1]); }
      } else {
        navClicked = navIndex;
        goTo(navIndex, e);
      }
    }
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

  function getMoveDirectionExpected () {
    return getTouchDirection(toDegree(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
  }

  function onPanStart (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }

    if (autoplay && animating) { stopAutoplayTimer(); }
    
    panStart = true;
    if (rafIndex) {
      caf(rafIndex);
      rafIndex = null;
    }

    var $ = getEvent(e);
    events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

    if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
      preventDefaultBehavior(e);
    }

    lastPosition.x = initPosition.x = $.clientX;
    lastPosition.y = initPosition.y = $.clientY;
    if (carousel) {
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
      resetDuration(container, '0s');
    }
  }

  function onPanMove (e) {
    if (panStart) {
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;

      if (carousel) {
        if (!rafIndex) { rafIndex = raf(function(){ panUpdate(e); }); }
      } else {
        if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
        if (moveDirectionExpected) { preventScroll = true; }
      }

      if (preventScroll) { e.preventDefault(); }
    }
  }

  function panUpdate (e) {
    if (!moveDirectionExpected) {
      panStart = false;
      return;
    }
    caf(rafIndex);
    if (panStart) { rafIndex = raf(function(){ panUpdate(e); }); }

    if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
    if (moveDirectionExpected) {
      if (!preventScroll && isTouchEvent(e)) { preventScroll = true; }

      try {
        if (e.type) { events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e)); }
      } catch(err) {}

      var x = translateInit,
          dist = getDist(lastPosition, initPosition);
      if (!horizontal || fixedWidth || autoWidth) {
        x += dist;
        x += 'px';
      } else {
        var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew): dist * 100 / (viewport + gutter);
        x += percentageX;
        x += '%';
      }

      container.style[transformAttr] = transformPrefix + x + transformPostfix;
    }
  }

  function onPanEnd (e) {
    if (panStart) {
      if (rafIndex) {
        caf(rafIndex);
        rafIndex = null;
      }
      if (carousel) { resetDuration(container, ''); }
      panStart = false;

      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;
      var dist = getDist(lastPosition, initPosition);

      if (Math.abs(dist)) {
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
              var indexMoved = - dist * items / (viewport + gutter);
              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
              index += indexMoved;
            } else {
              var moved = - (translateInit + dist);
              if (moved <= 0) {
                index = indexMin;
              } else if (moved >= slidePositions[slideCountNew - 1]) {
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
          if (moveDirectionExpected) {
            onControlsClick(e, dist > 0 ? -1 : 1);
          }
        }
      }
    }

    // reset
    if (options.preventScrollOnTouch === 'auto') { preventScroll = false; }
    if (swipeAngle) { moveDirectionExpected = '?'; } 
    if (autoplay && !animating) { setAutoplayTimer(); }
  }

  // === RESIZE FUNCTIONS === //
  // (slidePositions, index, items) => vertical_conentWrapper.height
  function updateContentWrapperHeight () {
    var wp = middleWrapper ? middleWrapper : innerWrapper;
    wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
  }

  function getPages () {
    var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
    return Math.min(Math.ceil(rough), slideCount);
  }

  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */
  function updateNavVisibility () {
    if (!nav || navAsThumbnails) { return; }

    if (pages !== pagesCached) {
      var min = pagesCached,
          max = pages,
          fn = showElement;

      if (pagesCached > pages) {
        min = pages;
        max = pagesCached;
        fn = hideElement;
      }

      while (min < max) {
        fn(navItems[min]);
        min++;
      }

      // cache pages
      pagesCached = pages;
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
      displayIndex: getCurrentSlide(),
      navCurrentIndex: navCurrentIndex,
      navCurrentIndexCached: navCurrentIndexCached,
      pages: pages,
      pagesCached: pagesCached,
      sheet: sheet,
      isOn: isOn,
      event: e || {},
    };
  }

  return {
    version: '2.9.2',
    getInfo: info,
    events: events,
    goTo: goTo,
    play: play,
    pause: pause,
    isOn: isOn,
    updateSliderHeight: updateInnerWrapperHeight,
    refresh: initSliderTransform,
    destroy: destroy,
    rebuild: function() {
      return tns(extend(options, optionsElements));
    }
  };
};


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(global) {
  /**
   * Polyfill URLSearchParams
   *
   * Inspired from : https://github.com/WebReflection/url-search-params/blob/master/src/url-search-params.js
   */

  var checkIfIteratorIsSupported = function() {
    try {
      return !!Symbol.iterator;
    } catch (error) {
      return false;
    }
  };


  var iteratorSupported = checkIfIteratorIsSupported();

  var createIterator = function(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return { done: value === void 0, value: value };
      }
    };

    if (iteratorSupported) {
      iterator[Symbol.iterator] = function() {
        return iterator;
      };
    }

    return iterator;
  };

  /**
   * Search param name and values should be encoded according to https://url.spec.whatwg.org/#urlencoded-serializing
   * encodeURIComponent() produces the same result except encoding spaces as `%20` instead of `+`.
   */
  var serializeParam = function(value) {
    return encodeURIComponent(value).replace(/%20/g, '+');
  };

  var deserializeParam = function(value) {
    return decodeURIComponent(String(value).replace(/\+/g, ' '));
  };

  var polyfillURLSearchParams = function() {

    var URLSearchParams = function(searchString) {
      Object.defineProperty(this, '_entries', { writable: true, value: {} });
      var typeofSearchString = typeof searchString;

      if (typeofSearchString === 'undefined') {
        // do nothing
      } else if (typeofSearchString === 'string') {
        if (searchString !== '') {
          this._fromString(searchString);
        }
      } else if (searchString instanceof URLSearchParams) {
        var _this = this;
        searchString.forEach(function(value, name) {
          _this.append(name, value);
        });
      } else if ((searchString !== null) && (typeofSearchString === 'object')) {
        if (Object.prototype.toString.call(searchString) === '[object Array]') {
          for (var i = 0; i < searchString.length; i++) {
            var entry = searchString[i];
            if ((Object.prototype.toString.call(entry) === '[object Array]') || (entry.length !== 2)) {
              this.append(entry[0], entry[1]);
            } else {
              throw new TypeError('Expected [string, any] as entry at index ' + i + ' of URLSearchParams\'s input');
            }
          }
        } else {
          for (var key in searchString) {
            if (searchString.hasOwnProperty(key)) {
              this.append(key, searchString[key]);
            }
          }
        }
      } else {
        throw new TypeError('Unsupported input\'s type for URLSearchParams');
      }
    };

    var proto = URLSearchParams.prototype;

    proto.append = function(name, value) {
      if (name in this._entries) {
        this._entries[name].push(String(value));
      } else {
        this._entries[name] = [String(value)];
      }
    };

    proto.delete = function(name) {
      delete this._entries[name];
    };

    proto.get = function(name) {
      return (name in this._entries) ? this._entries[name][0] : null;
    };

    proto.getAll = function(name) {
      return (name in this._entries) ? this._entries[name].slice(0) : [];
    };

    proto.has = function(name) {
      return (name in this._entries);
    };

    proto.set = function(name, value) {
      this._entries[name] = [String(value)];
    };

    proto.forEach = function(callback, thisArg) {
      var entries;
      for (var name in this._entries) {
        if (this._entries.hasOwnProperty(name)) {
          entries = this._entries[name];
          for (var i = 0; i < entries.length; i++) {
            callback.call(thisArg, entries[i], name, this);
          }
        }
      }
    };

    proto.keys = function() {
      var items = [];
      this.forEach(function(value, name) {
        items.push(name);
      });
      return createIterator(items);
    };

    proto.values = function() {
      var items = [];
      this.forEach(function(value) {
        items.push(value);
      });
      return createIterator(items);
    };

    proto.entries = function() {
      var items = [];
      this.forEach(function(value, name) {
        items.push([name, value]);
      });
      return createIterator(items);
    };

    if (iteratorSupported) {
      proto[Symbol.iterator] = proto.entries;
    }

    proto.toString = function() {
      var searchArray = [];
      this.forEach(function(value, name) {
        searchArray.push(serializeParam(name) + '=' + serializeParam(value));
      });
      return searchArray.join('&');
    };


    global.URLSearchParams = URLSearchParams;
  };

  var checkIfURLSearchParamsSupported = function() {
    try {
      var URLSearchParams = global.URLSearchParams;

      return (new URLSearchParams('?a=1').toString() === 'a=1') && (typeof URLSearchParams.prototype.set === 'function');
    } catch (e) {
      return false;
    }
  };

  if (!checkIfURLSearchParamsSupported()) {
    polyfillURLSearchParams();
  }

  var proto = global.URLSearchParams.prototype;

  if (typeof proto.sort !== 'function') {
    proto.sort = function() {
      var _this = this;
      var items = [];
      this.forEach(function(value, name) {
        items.push([name, value]);
        if (!_this._entries) {
          _this.delete(name);
        }
      });
      items.sort(function(a, b) {
        if (a[0] < b[0]) {
          return -1;
        } else if (a[0] > b[0]) {
          return +1;
        } else {
          return 0;
        }
      });
      if (_this._entries) { // force reset because IE keeps keys index
        _this._entries = {};
      }
      for (var i = 0; i < items.length; i++) {
        this.append(items[i][0], items[i][1]);
      }
    };
  }

  if (typeof proto._fromString !== 'function') {
    Object.defineProperty(proto, '_fromString', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: function(searchString) {
        if (this._entries) {
          this._entries = {};
        } else {
          var keys = [];
          this.forEach(function(value, name) {
            keys.push(name);
          });
          for (var i = 0; i < keys.length; i++) {
            this.delete(keys[i]);
          }
        }

        searchString = searchString.replace(/^\?/, '');
        var attributes = searchString.split('&');
        var attribute;
        for (var i = 0; i < attributes.length; i++) {
          attribute = attributes[i].split('=');
          this.append(
            deserializeParam(attribute[0]),
            (attribute.length > 1) ? deserializeParam(attribute[1]) : ''
          );
        }
      }
    });
  }

  // HTMLAnchorElement

})(
  (typeof global !== 'undefined') ? global
    : ((typeof window !== 'undefined') ? window
    : ((typeof self !== 'undefined') ? self : this))
);

(function(global) {
  /**
   * Polyfill URL
   *
   * Inspired from : https://github.com/arv/DOM-URL-Polyfill/blob/master/src/url.js
   */

  var checkIfURLIsSupported = function() {
    try {
      var u = new global.URL('b', 'http://a');
      u.pathname = 'c d';
      return (u.href === 'http://a/c%20d') && u.searchParams;
    } catch (e) {
      return false;
    }
  };


  var polyfillURL = function() {
    var _URL = global.URL;

    var URL = function(url, base) {
      if (typeof url !== 'string') url = String(url);

      // Only create another document if the base is different from current location.
      var doc = document, baseElement;
      if (base && (global.location === void 0 || base !== global.location.href)) {
        doc = document.implementation.createHTMLDocument('');
        baseElement = doc.createElement('base');
        baseElement.href = base;
        doc.head.appendChild(baseElement);
        try {
          if (baseElement.href.indexOf(base) !== 0) throw new Error(baseElement.href);
        } catch (err) {
          throw new Error('URL unable to set base ' + base + ' due to ' + err);
        }
      }

      var anchorElement = doc.createElement('a');
      anchorElement.href = url;
      if (baseElement) {
        doc.body.appendChild(anchorElement);
        anchorElement.href = anchorElement.href; // force href to refresh
      }

      if (anchorElement.protocol === ':' || !/:/.test(anchorElement.href)) {
        throw new TypeError('Invalid URL');
      }

      Object.defineProperty(this, '_anchorElement', {
        value: anchorElement
      });


      // create a linked searchParams which reflect its changes on URL
      var searchParams = new global.URLSearchParams(this.search);
      var enableSearchUpdate = true;
      var enableSearchParamsUpdate = true;
      var _this = this;
      ['append', 'delete', 'set'].forEach(function(methodName) {
        var method = searchParams[methodName];
        searchParams[methodName] = function() {
          method.apply(searchParams, arguments);
          if (enableSearchUpdate) {
            enableSearchParamsUpdate = false;
            _this.search = searchParams.toString();
            enableSearchParamsUpdate = true;
          }
        };
      });

      Object.defineProperty(this, 'searchParams', {
        value: searchParams,
        enumerable: true
      });

      var search = void 0;
      Object.defineProperty(this, '_updateSearchParams', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function() {
          if (this.search !== search) {
            search = this.search;
            if (enableSearchParamsUpdate) {
              enableSearchUpdate = false;
              this.searchParams._fromString(this.search);
              enableSearchUpdate = true;
            }
          }
        }
      });
    };

    var proto = URL.prototype;

    var linkURLWithAnchorAttribute = function(attributeName) {
      Object.defineProperty(proto, attributeName, {
        get: function() {
          return this._anchorElement[attributeName];
        },
        set: function(value) {
          this._anchorElement[attributeName] = value;
        },
        enumerable: true
      });
    };

    ['hash', 'host', 'hostname', 'port', 'protocol']
      .forEach(function(attributeName) {
        linkURLWithAnchorAttribute(attributeName);
      });

    Object.defineProperty(proto, 'search', {
      get: function() {
        return this._anchorElement['search'];
      },
      set: function(value) {
        this._anchorElement['search'] = value;
        this._updateSearchParams();
      },
      enumerable: true
    });

    Object.defineProperties(proto, {

      'toString': {
        get: function() {
          var _this = this;
          return function() {
            return _this.href;
          };
        }
      },

      'href': {
        get: function() {
          return this._anchorElement.href.replace(/\?$/, '');
        },
        set: function(value) {
          this._anchorElement.href = value;
          this._updateSearchParams();
        },
        enumerable: true
      },

      'pathname': {
        get: function() {
          return this._anchorElement.pathname.replace(/(^\/?)/, '/');
        },
        set: function(value) {
          this._anchorElement.pathname = value;
        },
        enumerable: true
      },

      'origin': {
        get: function() {
          // get expected port from protocol
          var expectedPort = { 'http:': 80, 'https:': 443, 'ftp:': 21 }[this._anchorElement.protocol];
          // add port to origin if, expected port is different than actual port
          // and it is not empty f.e http://foo:8080
          // 8080 != 80 && 8080 != ''
          var addPortToOrigin = this._anchorElement.port != expectedPort &&
            this._anchorElement.port !== '';

          return this._anchorElement.protocol +
            '//' +
            this._anchorElement.hostname +
            (addPortToOrigin ? (':' + this._anchorElement.port) : '');
        },
        enumerable: true
      },

      'password': { // TODO
        get: function() {
          return '';
        },
        set: function(value) {
        },
        enumerable: true
      },

      'username': { // TODO
        get: function() {
          return '';
        },
        set: function(value) {
        },
        enumerable: true
      },
    });

    URL.createObjectURL = function(blob) {
      return _URL.createObjectURL.apply(_URL, arguments);
    };

    URL.revokeObjectURL = function(url) {
      return _URL.revokeObjectURL.apply(_URL, arguments);
    };

    global.URL = URL;

  };

  if (!checkIfURLIsSupported()) {
    polyfillURL();
  }

  if ((global.location !== void 0) && !('origin' in global.location)) {
    var getOrigin = function() {
      return global.location.protocol + '//' + global.location.hostname + (global.location.port ? (':' + global.location.port) : '');
    };

    try {
      Object.defineProperty(global.location, 'origin', {
        get: getOrigin,
        enumerable: true
      });
    } catch (e) {
      setInterval(function() {
        global.location.origin = getOrigin();
      }, 100);
    }
  }

})(
  (typeof global !== 'undefined') ? global
    : ((typeof window !== 'undefined') ? window
    : ((typeof self !== 'undefined') ? self : this))
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
if(!Array.prototype.forEach){Array.prototype.forEach=function(fn,scope){'use strict';var i,len;for(i=0,len=this.length;i<len;++i){if(i in this){fn.call(scope,this[i],i,this);}}};}

/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, exports) {

module.exports = "<div id=santillana_microcontenidos_menu class=sm-base> <div id=sm-home> <div class=sm-content> <div class=sm-content--content> <h2><strong class=sm-color-color>3º</strong><span>ESO</span></h2> <h1></h1> <div class=sm-content-logosantillana></div> <a href=#units class=\"sm-button-next-screen sm-color-background-color\"> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> <span>--Unidades--</span> </a> </div> <div class=sm-home-touchable-area></div> </div> </div> <div id=sm-units-menu> <div id=sm-units-menu__unit--template class=\"sm-units-menu__unit sm-color-background-color_after\"> <div class=sm-units-menu__unit__image> <div class=sm-units-menu__unit__image__image> <div class=sm-units-menu__unit__image__image--proyecto-container> <div class=sm-units-menu__unit__image__image--proyecto></div> </div> </div> </div> <a> <div class=sm-units-menu__unit__number></div> <div class=\"sm-units-menu__unit__proyect_description sm-color-color\"></div> <div class=sm-units-menu__unit__title></div> <div class=sm-units-menu__unit__progress> <div class=sm-units-menu__unit__progress__title></div> <div class=sm-units-menu__unit__progress__bar> <div class=sm-color-background-color></div> </div> </div> </a> </div> <div class=sm-content> <div id=sm-units-menu-slider__controls> <div class=\"sm-units-menu-slider__controls__prev sm-button-slide-left\"> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> </div> <div class=\"sm-units-menu-slider__controls__next sm-button-slide-right\"> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> </div> </div> <div class=sm-units-menu-slider></div> <a href=# class=\"sm-button-back-screen sm-color-background-color\"> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> <span>--Portada--</span> </a> </div> </div> <div id=sm-unit> <div id=sm-unit__block--template class=sm-unit__block> <div class=sm-unit__block__header> <div class=sm-unit__block__number></div> <div class=sm-unit__block__title></div> <div class=sm-unit__block__send_link> <svg xmlns=http://www.w3.org/2000/svg width=17 height=14 viewBox=\"0 0 17 14\"> <path d=\"M1.12941176 13.1388235C1.12941176 12.8752941 7.49176471 7.19058824 7.79294118 7.19058824 8.11294118 7.19058824 8.96 7.92470588 13.3458824 12.0282353L14.5882353 13.1952941 7.86823529 13.2141176C4.16 13.2141176 1.12941176 13.1764706 1.12941176 13.1388235zM0 8.28235294L0 4.08470588 2.16470588 6.24941176C3.35058824 7.43529412 4.32941176 8.41411765 4.32941176 8.41411765 4.32941176 8.41411765 3.35058824 9.33647059 2.16470588 10.4470588L0 12.48 0 8.28235294zM13.5717647 10.5976471L11.8023529 8.94117647 12.7435294 8.80941176C13.2705882 8.75294118 14.0988235 8.48941176 14.6070588 8.22588235 15.1152941 7.96235294 15.5482353 7.75529412 15.5858824 7.75529412 15.6047059 7.75529412 15.6235294 8.77176471 15.6235294 10.0141176 15.6235294 11.2564706 15.5670588 12.2729412 15.4917647 12.2729412 15.3976471 12.2541176 14.5505882 11.5011765 13.5717647 10.5976471zM3.01176471 5.40235294L.847058824 3.23764706 4.00941176 3.23764706 7.15294118 3.23764706 7.15294118 3.76470588C7.15294118 4.06588235 7.26588235 4.70588235 7.41647059 5.17647059 7.66117647 6.00470588 7.66117647 6.06117647 7.32235294 6.06117647 7.13411765 6.06117647 6.70117647 6.28705882 6.36235294 6.58823529 6.02352941 6.87058824 5.60941176 7.20941176 5.44 7.32235294 5.19529412 7.51058824 4.81882353 7.20941176 3.01176471 5.40235294zM10.6352941 7.24705882C9.24235294 6.51294118 8.47058824 5.28941176 8.47058824 3.80235294 8.47058824 2.54117647 8.80941176 1.78823529 9.75058824.941176471 11.52-.658823529 14.5882353-.112941176 15.6047059 1.95764706 16.0376471 2.88 16.1317647 4.36705882 15.7929412 5.25176471 15.5294118 5.96705882 14.5317647 6.98352941 13.7976471 7.30352941 12.9882353 7.66117647 11.3317647 7.62352941 10.6352941 7.24705882zM13.4023529 2.63529412L12.2352941 1.44941176 12.2352941 2.33411765 12.2352941 3.21882353 11.1623529 3.27529412C10.1458824 3.33176471 10.0705882 3.36941176 10.0705882 3.80235294 10.0705882 4.23529412 10.1458824 4.27294118 11.1623529 4.32941176L12.2352941 4.38588235 12.2352941 5.27058824 12.2352941 6.15529412 13.4023529 4.96941176 14.5882353 3.80235294 13.4023529 2.63529412z\" transform=\"matrix(1 0 0 -1 .766 13.83)\"/> </svg> </div> <div class=sm-unit__block__plegar-icon> <span class=sm-block-toggle><svg width=32px height=20px viewBox=\"0 0 32 20\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g id=Page-1 stroke=none stroke-width=1 fill=none fill-rule=evenodd> <path d=\"M7.36753443,-4.63316247 C6.30189532,-3.5782874 6.29316935,-1.85927101 7.34804442,-0.793631906 C7.35450536,-0.787105043 7.36099937,-0.780611006 7.3675262,-0.774150044 L18.2272028,9.97592454 L18.2272028,9.97592454 L7.3675262,20.7259991 C6.30189159,21.7808787 6.29317295,23.4998952 7.34805256,24.5655298 C7.35451353,24.5720566 7.36100756,24.5785506 7.36753443,24.5850115 C8.447229,25.6538001 10.1862216,25.6538001 11.2659161,24.5850115 L26.0240755,9.97592454 L26.0240755,9.97592454 L11.2659161,-4.63316247 C10.1862216,-5.70195103 8.447229,-5.70195103 7.36753443,-4.63316247 Z\" id=arrow fill=#FF0000 transform=\"translate(16.000000, 9.975925) rotate(-270.000000) translate(-16.000000, -9.975925) \"></path> </g> </svg></span> </div> </div> <div class=sm-unit__block__subunits></div> </div> <div id=sm-unit__activity_main--template class=sm-unit__activity_main> <a class=sm-unit__activity_main__link> <div class=sm-unit__activity_main__texts> <div class=\"sm-unit__activity_main__checkbox sm-color-border-color sm-color-background-color\"></div> <div class=sm-unit__activity_main__indent> <svg xmlns=http://www.w3.org/2000/svg width=22 height=49 viewBox=\"0 0 22 49\"> <g fill=none fill-rule=evenodd stroke=#FF1D25 transform=translate(.727) class=sm-color-svg-stroke> <polyline stroke-linejoin=round points=\"0 0 0 40 20 40 12 30\"/> <path d=\"M12,49 L20,40\"/> </g> </svg> </div> <div class=sm-unit__activity_main__texts__content> <div class=\"sm-unit__activity_main__description sm-color-color\"></div> <div class=sm-unit__activity_main__title></div> <div class=sm-unit__activity_main__type></div> </div> </div> <div class=sm-unit__activity_main__progress> <div class=sm-unit__activity_main__progress__title></div> <div class=sm-unit__activity_main__progress__bar> <div class=sm-color-background-color></div> </div> </div> <div class=sm-unit__activity_main__image></div> </a> <div class=sm-unit__activity_main__actions> <div class=sm-unit__activity_main__actions__pages></div> <div class=sm-unit__activity_main__actions__send_link> <svg xmlns=http://www.w3.org/2000/svg width=17 height=14 viewBox=\"0 0 17 14\"> <path d=\"M1.12941176 13.1388235C1.12941176 12.8752941 7.49176471 7.19058824 7.79294118 7.19058824 8.11294118 7.19058824 8.96 7.92470588 13.3458824 12.0282353L14.5882353 13.1952941 7.86823529 13.2141176C4.16 13.2141176 1.12941176 13.1764706 1.12941176 13.1388235zM0 8.28235294L0 4.08470588 2.16470588 6.24941176C3.35058824 7.43529412 4.32941176 8.41411765 4.32941176 8.41411765 4.32941176 8.41411765 3.35058824 9.33647059 2.16470588 10.4470588L0 12.48 0 8.28235294zM13.5717647 10.5976471L11.8023529 8.94117647 12.7435294 8.80941176C13.2705882 8.75294118 14.0988235 8.48941176 14.6070588 8.22588235 15.1152941 7.96235294 15.5482353 7.75529412 15.5858824 7.75529412 15.6047059 7.75529412 15.6235294 8.77176471 15.6235294 10.0141176 15.6235294 11.2564706 15.5670588 12.2729412 15.4917647 12.2729412 15.3976471 12.2541176 14.5505882 11.5011765 13.5717647 10.5976471zM3.01176471 5.40235294L.847058824 3.23764706 4.00941176 3.23764706 7.15294118 3.23764706 7.15294118 3.76470588C7.15294118 4.06588235 7.26588235 4.70588235 7.41647059 5.17647059 7.66117647 6.00470588 7.66117647 6.06117647 7.32235294 6.06117647 7.13411765 6.06117647 6.70117647 6.28705882 6.36235294 6.58823529 6.02352941 6.87058824 5.60941176 7.20941176 5.44 7.32235294 5.19529412 7.51058824 4.81882353 7.20941176 3.01176471 5.40235294zM10.6352941 7.24705882C9.24235294 6.51294118 8.47058824 5.28941176 8.47058824 3.80235294 8.47058824 2.54117647 8.80941176 1.78823529 9.75058824.941176471 11.52-.658823529 14.5882353-.112941176 15.6047059 1.95764706 16.0376471 2.88 16.1317647 4.36705882 15.7929412 5.25176471 15.5294118 5.96705882 14.5317647 6.98352941 13.7976471 7.30352941 12.9882353 7.66117647 11.3317647 7.62352941 10.6352941 7.24705882zM13.4023529 2.63529412L12.2352941 1.44941176 12.2352941 2.33411765 12.2352941 3.21882353 11.1623529 3.27529412C10.1458824 3.33176471 10.0705882 3.36941176 10.0705882 3.80235294 10.0705882 4.23529412 10.1458824 4.27294118 11.1623529 4.32941176L12.2352941 4.38588235 12.2352941 5.27058824 12.2352941 6.15529412 13.4023529 4.96941176 14.5882353 3.80235294 13.4023529 2.63529412z\" transform=\"matrix(1 0 0 -1 .766 13.83)\"/> </svg> </div> <div class=sm-unit__activity_main__actions__candado> <svg xmlns=http://www.w3.org/2000/svg width=17 height=16 viewBox=\"0 0 17 16\"> <path fill=#234054 fill-rule=evenodd d=\"M688.91131,587.192276 L688.91131,585.034483 C688.91131,584.240414 688.630345,583.562345 688.068552,583.000552 C687.506759,582.438621 686.828828,582.157793 686.034621,582.157793 C685.240414,582.157793 684.562483,582.438621 684.000552,583.000552 C683.438621,583.562345 683.157655,584.240414 683.157655,585.034483 L683.157655,587.192276 L687.487151,587.192276 C687.537204,587.22806 687.585117,587.268842 687.630897,587.314621 C687.840828,587.524414 687.945931,587.779172 687.945793,588.078759 L687.945793,594.551862 C687.945793,594.851448 687.840828,595.106207 687.631172,595.316 C687.421379,595.525793 687.166759,595.630621 686.866897,595.630621 L676.078759,595.630621 C675.779172,595.630621 675.524414,595.525655 675.314621,595.316 C675.104828,595.106207 675,594.851448 675,594.551862 L675,588.078897 C675,587.779034 675.104828,587.524276 675.314621,587.314621 C675.524414,587.104828 675.779172,587 676.078759,587 L676.438345,587 L681,587 L681,585.034483 C681,583.656 681.494345,582.472414 682.48331,581.483448 C683.472138,580.494483 684.655862,580 686.034483,580 C687.413103,580 688.59669,580.494483 689.585655,581.483448 C690.574483,582.472414 691.068966,583.656 691.068966,585.034483 L691.068966,587.192276 L688.91131,587.192276 Z\" transform=\"translate(-675 -580)\"/> </svg> <svg xmlns=http://www.w3.org/2000/svg width=14 height=16 viewBox=\"0 0 14 16\"> <path fill=#234054 fill-rule=evenodd d=\"M698.098962,587 L698.098962,585.034483 C698.098962,583.656 698.593307,582.472414 699.582273,581.483448 C700.5711,580.494483 701.754824,580 703.133445,580 C704.512066,580 705.695652,580.494483 706.684617,581.483448 C707.673445,582.472414 708.167928,583.656 708.167928,585.034483 L708.167928,587 L708.527169,587 C708.827031,587 709.081652,587.104828 709.291445,587.314621 C709.501376,587.524414 709.606479,587.779172 709.606342,588.078759 L709.606342,594.551862 C709.606342,594.851448 709.501376,595.106207 709.291721,595.316 C709.081928,595.525793 708.827307,595.630621 708.527445,595.630621 L697.739307,595.630621 C697.439721,595.630621 697.184962,595.525655 696.975169,595.316 C696.765376,595.106207 696.660548,594.851448 696.660548,594.551862 L696.660548,588.078897 C696.660548,587.779034 696.765376,587.524276 696.975169,587.314621 C697.184962,587.104828 697.439721,587 697.739307,587 L698.098893,587 Z M706.010273,587.192276 L706.010273,585.034483 C706.010273,584.240414 705.729307,583.562345 705.167514,583.000552 C704.605721,582.438621 703.92779,582.157793 703.133583,582.157793 C702.339376,582.157793 701.661445,582.438621 701.099514,583.000552 C700.537583,583.562345 700.256617,584.240414 700.256617,585.034483 L700.256617,587.192276 L706.010273,587.192276 Z\" transform=\"translate(-696 -580)\"/> </svg> </div> <div class=sm-unit__activity_main__actions__nota>0</div> </div> </div> <div id=sm-unit__activity_aside--template class=sm-unit__activity_aside> <a> <div class=sm-unit__activity_aside__header> <div class=sm-unit__activity_aside__header__texts> <div class=\"sm-unit__activity_aside__type--con-tag sm-color-color\"></div> <div class=\"sm-unit__activity_aside__description--sin-tag sm-color-color\"></div> </div> <div class=sm-unit__activity_aside__image></div> </div> <div class=sm-unit__activity_aside__content> <div class=sm-unit__activity_aside__title--con-tag></div> <div class=sm-unit__activity_aside__title--sin-tag></div> </div> <div class=sm-unit__activity_aside__progress> <div class=sm-unit__activity_aside__progress__title></div> <div class=sm-unit__activity_aside__progress__bar> <div class=sm-color-background-color></div> </div> </div> </a> </div> <div class=sm-content> <div class=sm-unit__header_background> <div class=sm-unit__header_background__content> </div> </div> <a href=#units class=\"sm-button-back-screen sm-color-background-color\"> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> <span>--Unidades--</span> </a> <div class=sm-content--scrolled> <div class=sm-unit__header> <div class=sm-unit__header__content> <div class=sm-unit__header__part1> <div class=sm-unit__header__number></div> <div class=sm-unit__header__resources_button>--Contenidos complementarios--</div> <div class=sm-unit__header__proyecto_imagen></div> <div class=\"sm-unit__header__description sm-color-background-color\"></div> <div class=sm-unit__header__title></div> </div> <div class=sm-unit__header__progress> <div class=sm-unit__header__progress__title></div> <div class=sm-unit__header__progress__bar> <div class=sm-color-background-color></div> </div> </div> </div> </div> <div class=sm-unit__activities_container> <div class=sm-unit__activities_container__content> <div class=sm-unit__activities__main_container> <div class=sm-unit__activities__main> </div> </div> <div class=sm-unit__activities__aside_container> <h4>--Contenidos complementarios--</h4> <div class=sm-unit__activities__aside> </div> </div> </div> </div> </div> </div> </div> </div>";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var getUrlParameters=exports.getUrlParameters=function getUrlParameters(){var vars={};var parts=window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(m,key,value){vars[key]=value;});return vars;};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.getTextOfNode=getTextOfNode;function getTextOfNode(node){// crossbrowser version
var text='';if(node.nodeType==Node.TEXT_NODE){text=node.nodeValue.trim().replace(/(\r\n\t|\n|\r\t)/gm,"");}else{text=node.innerText.trim().replace(/(\r\n\t|\n|\r\t)/gm,"");}return text;}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _getTextOfNode=__webpack_require__(31);var _debug=__webpack_require__(2);var _slashSlash=__webpack_require__(4);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Activities=function(){function Activities(){_classCallCheck(this,Activities);////l("Ativities.contructor()");
this.state={//isVisible: true,
};document.querySelector('.content-wrapper.actividad').classList.add('sm-actividades');//Remain attemps
var remainBoxes=document.querySelectorAll('.attemps>*');_.forEach(remainBoxes,function(remainBox){var htmlText='';_.forEach(remainBox.childNodes,function(node){if(node.nodeType==3){//#text
htmlText+='<em>'+node.data+'</em>';}else{htmlText+=node.outerHTML;}});remainBox.innerHTML=htmlText;});//JS fixes for styling
//Fillblankimages elementos dragabls
var fbiDragableZones=document.querySelectorAll('.fillblankimages-draggable-wrapper .ui-draggable p');_.forEach(fbiDragableZones,function(pElement){var imgElement=pElement.querySelector('img');if(imgElement){var imageUrl=imgElement.getAttribute('src');pElement.style.backgroundImage='url('+encodeURI(imageUrl)+')';}});// Fillblankimages huecos
var fillBlankImagesWorkspaces=document.querySelectorAll('.workspace.fillblankimages-draggable');_.forEach(fillBlankImagesWorkspaces,function(fillBlankImagesWorkspace){var fbiDroppableZones=fillBlankImagesWorkspace.querySelectorAll('.droppable-container');var fbiDroppableDivsElement=document.createElement('div');fbiDroppableDivsElement.className="sm-draggable-images";_.forEach(fbiDroppableZones,function(elemento){//find text
var text='';if(elemento.nextSibling){//onsole.log("elemento.nextSibling");
//onsole.log(elemento.nextSibling);
text=(0,_getTextOfNode.getTextOfNode)(elemento.nextSibling);}if(elemento.previousSibling){//!text && 
//onsole.log("elemento.previousSibling");
//onsole.log(elemento.previousSibling);
text+=(0,_getTextOfNode.getTextOfNode)(elemento.previousSibling);}if(!text&&elemento.nextElementSibling){//onsole.log("elemento.nextElementSibling");
//onsole.log(elemento.nextElementSibling);
text=(0,_getTextOfNode.getTextOfNode)(elemento.nextElementSibling);}if(!text&&elemento.previousElementSibling){//!text && 
//onsole.log("elemento.previousElementSibling");
//onsole.log(elemento.previousElementSibling);
text=(0,_getTextOfNode.getTextOfNode)(elemento.previousElementSibling);}if(!text&&elemento.parentElement.nextElementSibling){//onsole.log("elemento.parentElement.nextElementSibling");
//onsole.log(elemento.parentElement.nextElementSibling);
text=(0,_getTextOfNode.getTextOfNode)(elemento.parentElement.nextElementSibling);}if(!text&&elemento.parentElement.previousElementSibling){//!text && 
//onsole.log("elemento.parentElement.previousElementSibling");
//onsole.log(elemento.parentElement.previousElementSibling);
text=(0,_getTextOfNode.getTextOfNode)(elemento.parentElement.previousElementSibling);}//onsole.log('---' + text + '---');
var fbiDroppableDiv=document.createElement('div');fbiDroppableDiv.appendChild(elemento);var textElement=document.createElement('p');textElement.innerText=text;fbiDroppableDiv.appendChild(elemento);fbiDroppableDiv.appendChild(textElement);fbiDroppableDivsElement.appendChild(fbiDroppableDiv);});fillBlankImagesWorkspace.innerHTML='';fillBlankImagesWorkspace.appendChild(fbiDroppableDivsElement);});//Calculo
var calculoTrCifras=document.querySelectorAll('.workspace.calculo tr');_.forEach(calculoTrCifras,function(tr){var tds=tr.querySelectorAll('td.cifra');var lastTd=document.createElement('td');_.forEach(tds,function(td){if(td.querySelectorAll('input').length){td.classList.add('cifra_con_input');if(lastTd.querySelectorAll('input').length){lastTd.classList.remove('cifra_con_input--fin');}else{td.classList.add('cifra_con_input--inicio');}td.classList.add('cifra_con_input--fin');}lastTd=td;});});// Respuesta multimple con imagen
var multipleChoiceWorkspaceImages=document.querySelectorAll('.workspace.multiple-choice ul li.opcion img:not(.Wirisformula)');//Busca padre para ponerle clase a la lista
_.forEach(multipleChoiceWorkspaceImages,function(img){var ul=null;var elem=img;for(;elem&&elem!==document;elem=elem.parentNode){if(elem.tagName=='UL'){ul=elem;break;}}ul.classList.add('sm-multiple-choice-images-list');});var multipleChoiceWorkspaceLi=document.querySelectorAll('.workspace.multiple-choice ul.sm-multiple-choice-images-list li.opcion');_.forEach(multipleChoiceWorkspaceLi,function(li){var texto=li.innerText||li.textContent;//borra párrafos vacíos
var imagen=li.querySelector('img');li.innerHTML='';var imageDiv=document.createElement('div');if(imageDiv&&imagen){imageDiv.classList.add('sm-multiple-choice-images-list__img');imageDiv.appendChild(imagen);li.appendChild(imageDiv);}var textDiv=document.createElement('div');textDiv.classList.add('sm-multiple-choice-images-list__text');textDiv.innerHTML=texto.trim();li.appendChild(textDiv);});//Multimedia. Change img to div background and add tag sm-video if contains video
var multimediaSlides=document.querySelectorAll('.class_slide.slide_content_type_7');_.forEach(multimediaSlides,function(slide){var img=slide.querySelector('.multimedia-container img');var slideMain=slide.querySelector('.slide_main');if(img){var src=img.src;slideMain.style.backgroundImage='url('+src+')';}var video=slide.querySelector('.multimedia-container.video');if(video){//slide.classList.add('sm-video');
var videofile=slide.querySelector('.multimedia-container.video video').src;var videoContainerElement=document.createElement("DIV");videoContainerElement.classList.add('sm-multimedia-video');videoContainerElement.innerHTML='\n                    <video  muted loop autoplay oncanplay="this.muted=true">\n                        <source src="'+videofile+'" type="video/mp4">\n                    </video>\n                ';slideMain.insertBefore(videoContainerElement,slideMain.firstChild);}});//HTML Content
//File download
var fileDownloadElements=document.querySelectorAll('a.bck-file-attach');_.forEach(fileDownloadElements,function(el){var wrapper=document.createElement('div');var fileName=el.innerText.trim();var label=document.createElement('div');wrapper.classList.add('sm__bck-file-attach__container');label.classList.add('sm__bck-file-attach__label');label.innerText=fileName;el.innerHTML='Descargar<strong> archivo</strong>';el.parentNode.insertBefore(wrapper,el);wrapper.appendChild(label);wrapper.appendChild(el);});//Memory
var memoryElements=document.querySelectorAll('.workspace.memory .flip-container .flipper .back p');_.forEach(memoryElements,function(el){var htmlText='';if(el.childNodes.length>1){el.classList.add('sm-multiple_nodes');_.forEach(el.childNodes,function(node){if(node.nodeType==3){//#text
htmlText+='<em>'+node.data+'</em>';}else{htmlText+=node.outerHTML;}});el.innerHTML=htmlText;}});//Audio as icon
var audioAsIconElements=document.querySelectorAll('.bck-audio-container.sm-audio-as-icon');_.forEach(audioAsIconElements,function(audioAsIconElement){var audioAsIconButton=document.createElement('div');audioAsIconButton.classList.add('sm-icon');audioAsIconButton.classList.add('sm-icon--sonido');audioAsIconElement.appendChild(audioAsIconButton);audioAsIconButton.addEventListener('click',function(e){var targetElement=e.target||e.srcElement;targetElement.parentElement.classList.add('sm-active');});});//Tabs active
var tabsBoxes=document.querySelectorAll('.bck-tabs-box');_.forEach(tabsBoxes,function(tabsBox){var tabsButtons=tabsBox.querySelectorAll('.bck-tabslists .bck-tabtitles');var tabsBottonFirst=tabsButtons[0];tabsBottonFirst.classList.add('sm-active');_.forEach(tabsButtons,function(tabsButton){tabsButton.addEventListener('click',function(e){_.forEach(tabsButtons,function(tabsButtonToDisable){tabsButtonToDisable.classList.remove('sm-active');tabsButton.classList.add('sm-active');});});});});// Tolltip //Desactivado, ahora va con color claro.
// const tooltips = document.querySelectorAll('.sm-actividades .bck-tooltip');
// _.forEach(tooltips, tooltip => {
//     tooltip.classList.add('sm-color-color');
// });
//Button correct
var correctBtns=document.querySelectorAll('.sm-actividades .btn-correct, .sm-actividades .btn-save, .sm-actividades .btn-danger');_.forEach(correctBtns,function(correctBtn){correctBtn.classList.add('sm-color-background-color');correctBtn.classList.add('sm-color-border-color');correctBtn.classList.add('sm-color-border-color--hover');correctBtn.classList.add('sm-color-color--focus');correctBtn.classList.add('sm-color-border-color--pressed');correctBtn.classList.add('sm-color-color--hover');correctBtn.classList.add('sm-color-color--pressed');});//True false with feedbacks
_.forEach(document.querySelectorAll('.sm-actividades #actividad .workspace.true-false ul li'),function(trueFalseLi){var trueFalseLiNextSibling=trueFalseLi.nextElementSibling;//onsole.log(trueFalseLiNextSibling.nodeName)
if(trueFalseLiNextSibling){if(trueFalseLiNextSibling.classList.contains('fb_right')||trueFalseLiNextSibling.classList.contains('fb_wrong')){trueFalseLi.classList.add('true-false-li-item--no-border');}}});//Add sm-no-evaluable class to revision-buget element of each slide if is not evaluable
_.forEach(document.querySelectorAll('.revision-budget'),function(el){var elementId=el.id;var elementIdStringParts=elementId.split('_');if(elementIdStringParts.length>0){var slideId=elementIdStringParts[0]+'_slide';var isNotEvaluable=window[slideId]&&window[slideId].esEjercicioNoEvaluable;if(isNotEvaluable){el.classList.add('sm-no-evaluable');var notaElement=el.querySelector('.nota-budget');// notaElement.dataset.title="Actividad no evaluable";
var smNotaNudgetBackground=document.createElement('div');smNotaNudgetBackground.classList.add('sm-nota-budget-background-no-eval');smNotaNudgetBackground.innerHTML='\n                    <svg class="svg-normal" xmlns="http://www.w3.org/2000/svg" width="124" height="40" viewBox="0 0 124 40">\n                        <g fill="none" fill-rule="evenodd">\n                            <path fill="#FFF" stroke="#2A495D" stroke-opacity=".1" d="M123.5,20 C123.5,25.3847763 121.317388,30.2597763 117.788582,33.7885822 C114.259776,37.3173882 109.384776,39.5 104,39.5 L33.1329233,39.5 C27.7481469,39.5 22.8731469,37.3173882 19.344341,33.7885822 C15.8155351,30.2597763 13.6329233,25.3847763 13.6329233,19.9999141 L13.6319578,14.3825679 L1.47060098,4.97760932 C0.906246961,4.5411619 0.557544735,3.88645588 0.506516413,3.18045295 C0.507505096,2.41147045 0.777224314,1.74416639 1.22408982,1.26675131 C1.6749904,0.78502529 2.30430985,0.5 3,0.5 L104,0.5 C109.384776,0.5 114.259776,2.68261184 117.788582,6.21141777 C121.317388,9.74022369 123.5,14.6152237 123.5,20 Z"/>\n                            <path fill="#1F7B9E" d="M110.254667,11.1708571 C109.794476,10.2864762 109.189333,9.55180952 108.439429,8.9672381 C107.689333,8.38285714 106.840762,7.92247619 105.894476,7.58609524 C104.947619,7.25009524 103.982857,7.08190476 103,7.08190476 C102.017143,7.08190476 101.052381,7.24990476 100.105714,7.58609524 C99.1590476,7.92247619 98.3106667,8.38285714 97.5605714,8.9672381 C96.8106667,9.55180952 96.2053333,10.2862857 95.7449524,11.1708571 C95.2845714,12.0554286 95.0544762,13.0097143 95.0544762,14.0340952 C95.0544762,15.6377143 95.5874286,17.024 96.6529524,18.1931429 C97.1186667,18.7 97.504,19.1500952 97.8091429,19.5432381 C98.1144762,19.9361905 98.4222857,20.4302857 98.7325714,21.0251429 C99.0428571,21.62 99.2188571,22.1761905 99.2601905,22.6935238 C98.7739048,22.9832381 98.5308571,23.4074286 98.5308571,23.9662857 C98.5308571,24.3491429 98.6601905,24.6801905 98.9188571,24.9594286 C98.6601905,25.2388571 98.5308571,25.5699048 98.5308571,25.9527619 C98.5308571,26.4908571 98.7638095,26.9097143 99.2293333,27.2100952 C99.0946667,27.4478095 99.0274286,27.6908571 99.0274286,27.9392381 C99.0274286,28.4150476 99.1902857,28.7826667 99.5161905,29.0409524 C99.8419048,29.299619 100.242857,29.4289524 100.718857,29.4289524 C100.925714,29.8841905 101.23619,30.2462857 101.649905,30.5152381 C102.063619,30.7841905 102.513714,30.9186667 103,30.9186667 C103.486286,30.9186667 103.936381,30.7841905 104.350095,30.5152381 C104.764,30.2462857 105.074476,29.8841905 105.281333,29.4289524 C105.757143,29.4289524 106.158286,29.299619 106.484,29.0409524 C106.809905,28.7826667 106.972762,28.4150476 106.972762,27.9392381 C106.972762,27.6908571 106.905333,27.4478095 106.770667,27.2100952 C107.23619,26.9099048 107.469143,26.4908571 107.469143,25.9527619 C107.469143,25.5699048 107.339619,25.2388571 107.081143,24.9594286 C107.339619,24.6801905 107.469143,24.3491429 107.469143,23.9662857 C107.469143,23.4074286 107.226095,22.9834286 106.739619,22.6935238 C106.781143,22.1761905 106.957143,21.62 107.267429,21.0251429 C107.578095,20.4302857 107.885714,19.9361905 108.191048,19.5432381 C108.496381,19.1500952 108.881714,18.7 109.347048,18.1931429 C110.412571,17.024 110.945714,15.6377143 110.945714,14.0340952 C110.945714,13.0097143 110.715429,12.0554286 110.254667,11.1708571 L110.254667,11.1708571 Z M107.90381,16.8274286 C107.80019,16.9411429 107.642476,17.1118095 107.430476,17.3394286 C107.218476,17.5670476 107.060762,17.7375238 106.957333,17.8514286 C105.633143,19.4344762 104.90381,20.9758095 104.769333,22.476 L101.230857,22.476 C101.096381,20.9758095 100.367048,19.4344762 99.0426667,17.8514286 C98.9392381,17.7377143 98.7815238,17.5670476 98.5693333,17.3394286 C98.3573333,17.1118095 98.1994286,16.9413333 98.096,16.8274286 C97.3925714,16.0100952 97.0407619,15.0788571 97.0407619,14.0340952 C97.0407619,13.2891429 97.2192381,12.596 97.5761905,11.9544762 C97.9333333,11.3129524 98.3988571,10.788 98.9729524,10.3792381 C99.5470476,9.97047619 100.183238,9.64990476 100.881714,9.41714286 C101.58,9.18419048 102.286095,9.068 103,9.068 C103.713905,9.068 104.42,9.18419048 105.118286,9.41714286 C105.816571,9.64990476 106.452762,9.97047619 107.027048,10.3792381 C107.601143,10.788 108.066857,11.3131429 108.423619,11.9544762 C108.780381,12.596 108.959048,13.2891429 108.959048,14.0340952 C108.959048,15.0788571 108.607429,16.0100952 107.90381,16.8274286 L107.90381,16.8274286 Z"/>\n                            <path fill="#1F7B9E" d="M104.54419,11.799619 C104.03219,11.6340952 103.517333,11.5512381 103.00019,11.5512381 C102.865714,11.5512381 102.749333,11.6001905 102.651048,11.6986667 C102.552762,11.7969524 102.503619,11.9133333 102.503619,12.0478095 C102.503619,12.1822857 102.552762,12.2986667 102.651048,12.3969524 C102.749333,12.4950476 102.865714,12.544381 103.00019,12.544381 C103.538286,12.544381 104.086476,12.6737143 104.645524,12.9321905 C105.204,13.1908571 105.483048,13.5580952 105.483048,14.0340952 C105.483048,14.1685714 105.532,14.2851429 105.630476,14.3832381 C105.728952,14.4813333 105.845143,14.5304762 105.979429,14.5304762 C106.114095,14.5304762 106.230286,14.4815238 106.328762,14.3832381 C106.427048,14.2849524 106.476,14.1685714 106.476,14.0340952 C106.476,13.496 106.281714,13.0304762 105.894095,12.6375238 C105.506476,12.2445714 105.05619,11.9649524 104.54419,11.799619 L104.54419,11.799619 Z"/>\n                            <text fill="#1F7B9E" font-family="SourceSansPro-BoldItalic, Source Sans Pro" font-size="12" font-style="italic" font-weight="bold">\n                            <tspan x="19.804" y="17.416">PRACTICA LO </tspan> <tspan x="29.74" y="29.416">QUE SABES</tspan>\n                            </text>\n                        </g>\n                        </svg>\n                        <svg class="svg-ko" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="125" height="40" viewBox="0 0 125 40">\n                        <defs>\n                            <path id="budget-no-eval-ko-a" d="M75.2558335,30.2592144 C74.2710721,31.2439758 72.6661721,31.2505036 71.6748829,30.2592144 L64.996037,23.5803684 L58.3181236,30.2582818 C57.3342947,31.2421107 55.7303272,31.249571 54.7381055,30.2573493 C53.7524115,29.2716553 53.7552091,27.6630251 54.739038,26.6791963 L61.4169514,20.0012829 L54.7464983,13.3308298 C53.7524115,12.336743 53.7617369,10.7346406 54.7464983,9.74987914 C55.7396526,8.75672486 57.3333621,8.75579232 58.3274489,9.74987914 L64.997902,16.4203322 L71.6748829,9.74335136 C72.6689697,8.74926454 74.2682745,8.75579232 75.2539685,9.74148628 C76.2461902,10.733708 76.2480553,12.3283501 75.2539685,13.3224369 L68.5769876,19.9994178 L75.2558335,26.6782637 C76.2471227,27.6695529 76.2489878,29.2660601 75.2558335,30.2592144 Z"/>\n                        </defs>\n                        <g fill="none" fill-rule="evenodd" transform="translate(.5)">\n                            <path fill="#FA334A" d="M104,0 C115.045695,-2.02906125e-15 124,8.954305 124,20 C124,31.045695 115.045695,40 104,40 L33.1329233,40 C22.0872283,40 13.1329233,31.045695 13.1329233,20 L13.132,14.628 L1.16472117,5.37313119 C0.482568237,4.84558309 0.0629958646,4.05229623 0.00653732639,3.19810817 L9.9475983e-14,3 C9.9475983e-14,1.34314575 1.34314575,7.85387576e-15 3,0 L3,0 L104,0 Z"/>\n                            <use fill="#FFF" xlink:href="#budget-no-eval-ko-a"/>\n                        </g>\n                        </svg>\n                        <svg class="svg-ok" xmlns="http://www.w3.org/2000/svg" width="124" height="40" viewBox="0 0 124 40">\n                            <g fill="none" fill-rule="evenodd">\n                                <path fill="#4BD8B8" d="M104,0 C115.045695,-2.02906125e-15 124,8.954305 124,20 C124,31.045695 115.045695,40 104,40 L33.1329233,40 C22.0872283,40 13.1329233,31.045695 13.1329233,20 L13.132,14.628 L1.16472117,5.37313119 C0.482568237,4.84558309 0.0629958646,4.05229623 0.00653732639,3.19810817 L9.9475983e-14,3 C9.9475983e-14,1.34314575 1.34314575,7.85387576e-15 3,0 L3,0 L104,0 Z"/>\n                                <path fill="#FFF" d="M79.8159212,10.622388 L65.9840105,30.9496547 C65.8088457,31.1981443 65.5399881,31.3641435 65.2385416,31.3946956 C65.1978056,31.4048796 65.168272,31.4048796 65.1265176,31.4048796 C64.867844,31.4048796 64.6071335,31.3010027 64.4126191,31.1146355 L56.3224484,23.4491377 C56.1136764,23.2637889 56.000634,22.9949312 56.000634,22.7148712 C55.99045,22.4358296 56.1034924,22.1659535 56.301062,21.9704207 L58.9601048,19.3113779 C59.16684,19.1046427 59.4458817,18.9814163 59.7361257,19.0109499 C60.0263697,19.0221523 60.2952274,19.1453787 60.4795578,19.3633163 L64.3189263,23.8218721 L78.2129594,9.31781741 C78.5846754,8.92471496 79.1957155,8.89518136 79.6193699,9.235327 C80.0328404,9.56630705 80.1265332,10.1773471 79.8159212,10.622388"/>\n                            </g>\n                            </svg>\n';notaElement.appendChild(smNotaNudgetBackground);}}});_.forEach(document.querySelectorAll('.nota-budget'),function(el){var smNotaNudgetBackground=document.createElement('div');smNotaNudgetBackground.classList.add('sm-nota-budget-background');smNotaNudgetBackground.innerHTML='\n                <svg width="92px" height="41px" viewBox="0 0 92 41" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                        <path id="background" d="M3,0 L71.1329233,0 C82.1786183,0 91.1329233,8.954305 91.1329233,20 C91.1329233,31.045695 82.1786183,40 71.1329233,40 L33.1329233,40 C22.0872283,40 13.1329233,31.045695 13.1329233,20 L13.1329233,14.6288302 L1.16472117,5.37313119 C0.430094935,4.80500247 1.27897692e-13,3.92867968 1.27897692e-13,3 C1.27897692e-13,1.34314575 1.34314575,0 3,0 Z" id="Path" fill="#00FF00"></path>\n                        <path id="lines" d="M61.2354134,16.4708268 C60.5531134,16.4708268 60,15.9177134 60,15.2354134 C60,14.5531134 60.5531134,14 61.2354134,14 L74.7645866,14 C75.4468866,14 76,14.5531134 76,15.2354134 C76,15.9177134 75.4468866,16.4708268 74.7645866,16.4708268 L61.2354134,16.4708268 Z M65.7260342,20.941638 C65.0437342,20.941638 64.4906207,20.3885246 64.4906207,19.7062246 C64.4906207,19.0239246 65.0437342,18.4708112 65.7260342,18.4708112 L74.7551293,18.4708112 C75.4374293,18.4708112 75.9905427,19.0239246 75.9905427,19.7062246 C75.9905427,20.3885246 75.4374293,20.941638 74.7551293,20.941638 L65.7260342,20.941638 Z M61.2353257,25.6476074 C60.5530742,25.6476074 60,25.0945332 60,24.4122817 C60,23.7300301 60.5530742,23.1769559 61.2353257,23.1769559 L74.7646743,23.1769559 C75.4469258,23.1769559 76,23.7300301 76,24.4122817 C76,25.0945332 75.4469258,25.6476074 74.7646743,25.6476074 L61.2353257,25.6476074 Z" id="Mask" fill="#FFFFFF" transform="translate(68.000000, 19.823804) scale(-1, 1) translate(-68.000000, -19.823804) "></path>\n                    </g>\n                </svg>\n            ';el.appendChild(smNotaNudgetBackground);// const smNotaNudgetBackgroundTitle = document.createElement('div');
// smNotaNudgetBackgroundTitle.classList.add('sm-nota-budget-background--title');
// smNotaNudgetBackgroundTitle.innerHTML = `
//     <svg width="92px" height="40px" viewBox="0 0 92 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//         <path d="M3.25243012,0.184689655 L71.3853534,0.184689655 C82.4310484,0.184689655 91.3853534,9.13899466 91.3853534,20.1846897 C91.3853534,31.2303847 82.4310484,40.1846897 71.3853534,40.1846897 L33.3853534,40.1846897 C22.3396584,40.1846897 13.3853534,31.2303847 13.3853534,20.1846897 L13.3853534,14.8135198 L1.4171513,5.55782084 C0.682525058,4.98969212 0.252430124,4.11336934 0.252430124,3.18468966 C0.252430124,1.52783541 1.59557587,0.184689655 3.25243012,0.184689655 Z" fill="#00FF00"></path>
//     </svg>
// `;
// el.appendChild(smNotaNudgetBackgroundTitle);
});//move .revision-budget to parent
_.forEach(document.querySelectorAll('.revision-budget'),function(el){el.parentElement.parentElement.insertBefore(el,el.parentElement.parentElement.firstChild);});//flipbox
//Este fix es porque el script de blink no calcula bien el tamaño si el height está al 100%, por lo que se añade el atributo después. Se intercepta la función de blink flipboxPositions.
var originalFlipboxPositions=flipboxPositions;window.flipboxPositions=function(e){_.forEach(document.querySelectorAll('.bck-flipbox .bck-flipbox-face .bck-flipbox-section'),function(el){el.classList.remove('sm-height-fix');});originalFlipboxPositions(e);_.forEach(document.querySelectorAll('.bck-flipbox .bck-flipbox-face .bck-flipbox-section'),function(el){el.classList.add('sm-height-fix');});};//Remove title when starts with ##
_.forEach(document.querySelectorAll('#slider .item-container .header'),function(headerDomElement){var titleString=headerDomElement.querySelector('.title h3').innerText;if((0,_slashSlash.hasSlash)(titleString)){headerDomElement.classList.add('header--no-title');}});//Next button when has more than one line
var nextButtonsUpdate=function nextButtonsUpdate(){_.forEach(document.querySelectorAll('#slider .nextbutton-warp .nextbutton-content'),function(nextButton){nextButton.classList.remove('nextbutton-content--two-lines');var pHeight=nextButton.clientHeight;if(pHeight>81){nextButton.classList.add('nextbutton-content--two-lines');}});};window.addEventListener('resize',function(){nextButtonsUpdate();},false);nextButtonsUpdate();//Resivion mode (iframe from Gradebook)
var revisionModeBarUpdate=function revisionModeBarUpdate(){var labelEl=document.querySelector('.modo_revision .nota_revision>label');var inputEl=document.querySelector('.modo_revision .nota_revision .revision_container input');if(inputEl.classList.contains('r_suspenso')){labelEl.classList.add('sm-r_suspenso');inputEl.parentElement.classList.add('sm-r_suspenso');inputEl.parentElement.classList.remove('sm-no_suspenso');}else{labelEl.classList.remove('sm-r_suspenso');inputEl.parentElement.classList.remove('sm-r_suspenso');inputEl.parentElement.classList.add('sm-no_suspenso');}};var revisionModeBarObserver=new MutationObserver(function(mutationsList,observer){revisionModeBarUpdate();});revisionModeBarObserver.observe(document.querySelector('.modo_revision .nota_revision .revision_container input'),{attributes:true});revisionModeBarUpdate();this.update();}_createClass(Activities,[{key:'update',value:function update(){(0,_debug.cl)('Activities.update()');//Activitie header book color small block
var activityHeaderSmallBlockElement=document.createElement('div');activityHeaderSmallBlockElement.classList.add('header_small_block');activityHeaderSmallBlockElement.classList.add('sm-color-background-color');var allTitles=document.querySelectorAll('#actividad .class_slide .header .title');//onsole.log("HEADERS");
_.forEach(allTitles,function(header){//onsole.log(header);
if(!header.querySelector('.header_small_block')){header.appendChild(activityHeaderSmallBlockElement.cloneNode(true));}});// const infoButtonsFloating = document.querySelectorAll('.info-template');
// _.forEach(infoButtonsFloating, infoButton => {
//     infoButton.querySelector('.info-icon').classList.add('sm-color-background-color');
//     infoButton.querySelector('.info-title').classList.add('sm-color-color');
//     infoButton.querySelector('.info-title').classList.add('sm-color-color--hover');
//     infoButton.querySelector('.info-title').classList.add('sm-color-color--pressed');
// });
var infopopopUpdate=function infopopopUpdate(){//Info popup
var infoButtonsInline=document.querySelectorAll('.info-button');_.forEach(infoButtonsInline,function(infoButton){// infoButton.classList.add('sm-color-background-color');
var infoButtonPopover=infoButton.previousElementSibling;if(infoButtonPopover&&infoButtonPopover.classList.contains('info-popover')&&infoButtonPopover.querySelectorAll('.popover-title').length>0){infoButtonPopover.classList.add('sm-info-popover--with-title');infoButton.classList.add('sm-info-button--with-title');// const titleString = infoButton.dataset['title'];
// infoButton.innerText = titleString; //Todo translate
// const accion1 = () => {
//     infoButtonPopover.classList.add('sm-info-popover--with-title');
//     infoButtonPopover.parentNode.appendChild(infoButtonPopover);
//     infoButton.parentNode.appendChild(infoButton);
// }
// const accion2 = () => {
//     infoButton.innerText = 'Solucionario'; //Todo translate
//     infoButton.classList.add('sm-info-button--with-title');
// }
}});};//Como esto se ejecuta con javascript por parte de blink, lo ejecutamos con algo de retraso de forma consecutiva para asegurarnos de que se ha reproducido bien.
setTimeout(infopopopUpdate,0);setTimeout(infopopopUpdate,200);setTimeout(infopopopUpdate,600);setTimeout(infopopopUpdate,1200);setTimeout(infopopopUpdate,2400);setTimeout(infopopopUpdate,3600);//Lo sé, no es lo más limpio del mundo, lo ideal sería tener un callback o un evento.
//Los flotantes se actualizan al cambiar de slide
}}]);return Activities;}();exports.default=Activities;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "<div id=sm-modal--credits class=\"sm-modal sm-modal--big\"> <div class=sm-modal__background></div> <div class=sm-modal__modal> <div class=sm-modal__header> <span class=sm-credits-icon> <svg width=13px height=18px viewBox=\"0 0 13 18\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g fill=#29495e fill-rule=nonzero> <path d=\"M12.5252525,5.75127421 C11.5609776,5.07712881 10.5864591,4.74006116 9.60166778,4.74006116 C9.06823913,4.74006116 8.57072179,4.83486144 8.10910084,5.02446483 C7.64747988,5.21406823 7.24228535,5.48266901 6.89350508,5.83027523 C6.5447248,6.17788145 6.27288543,6.58868265 6.07797881,7.06269113 C5.88307218,7.53669962 5.78562033,8.0686345 5.78562033,8.65851172 C5.78562033,9.22732191 5.88307218,9.74872342 6.07797881,10.2227319 C6.27288543,10.6967404 6.53959576,11.1075416 6.87811779,11.4551478 C7.21663982,11.802754 7.62183435,12.0713548 8.09371355,12.2609582 C8.56559274,12.4505616 9.06823913,12.5453619 9.60166778,12.5453619 C10.6480086,12.5453619 11.6225271,12.1766941 12.5252525,11.4393476 L12.5252525,16.3058104 C11.1506479,16.9167547 9.84787055,17.2222222 8.61688134,17.2222222 C7.46795809,17.2222222 6.37547156,17.0220883 5.33938898,16.6218145 C4.3033064,16.2215406 3.39033643,15.6474723 2.60045169,14.8995923 C1.81056695,14.1517122 1.17969445,13.2563763 0.707815253,12.2135576 C0.235936058,11.1707389 0,10.0068022 0,8.72171254 C0,7.43662286 0.225677969,6.26215279 0.677040677,5.19826707 C1.12840339,4.13438136 1.74388875,3.2179787 2.52351525,2.4490316 C3.30314175,1.6800845 4.23149885,1.07968276 5.3086144,0.647808359 C6.38572995,0.21593396 7.53976502,0 8.77075423,0 C10.1248423,0 11.3763293,0.29493419 12.5252525,0.884811417 L12.5252525,5.75127421 Z\" id=c></path> </g> </svg> </span>  <h5>--Créditos--</h5> <span class=close></span> </div> <div class=sm-modal__content> <div class=sm-modal__content__text> </div> </div> </div> </div>";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "<div class=\"sm-subunit-end sm-base\"> <div class=sm-subunit-end_completed> <div class=sm-subunit-end_completed__content> <div class=sm-subunit-end__title>--Fin de la lección--</div> <div class=sm-subunit-end__progress> <div class=sm-subunit-end__progress__title></div> <div class=sm-subunit-end__progress__bar> <div class=sm-color-background-color></div> </div> </div> <div class=sm-subunit-end__start_button_container> <div class=\"sm-subunit-end__start_button sm-button-general--big--arrow sm-color-background-color sm-color-border-color\"> <svg width=16px height=16px viewBox=\"0 0 16 16\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> </g> </svg> <span>--Volver a inicio--</span> </div> </div> <div class=sm-subunit-end__credits_button_container> <div class=\"sm-subunit-end__credits_button sm-button-subunitnav\"> <span class=sm-subunit-end__credits_button_icon> <svg width=13px height=18px viewBox=\"0 0 13 18\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g fill=#FFFFFF fill-rule=nonzero> <path d=\"M12.5252525,5.75127421 C11.5609776,5.07712881 10.5864591,4.74006116 9.60166778,4.74006116 C9.06823913,4.74006116 8.57072179,4.83486144 8.10910084,5.02446483 C7.64747988,5.21406823 7.24228535,5.48266901 6.89350508,5.83027523 C6.5447248,6.17788145 6.27288543,6.58868265 6.07797881,7.06269113 C5.88307218,7.53669962 5.78562033,8.0686345 5.78562033,8.65851172 C5.78562033,9.22732191 5.88307218,9.74872342 6.07797881,10.2227319 C6.27288543,10.6967404 6.53959576,11.1075416 6.87811779,11.4551478 C7.21663982,11.802754 7.62183435,12.0713548 8.09371355,12.2609582 C8.56559274,12.4505616 9.06823913,12.5453619 9.60166778,12.5453619 C10.6480086,12.5453619 11.6225271,12.1766941 12.5252525,11.4393476 L12.5252525,16.3058104 C11.1506479,16.9167547 9.84787055,17.2222222 8.61688134,17.2222222 C7.46795809,17.2222222 6.37547156,17.0220883 5.33938898,16.6218145 C4.3033064,16.2215406 3.39033643,15.6474723 2.60045169,14.8995923 C1.81056695,14.1517122 1.17969445,13.2563763 0.707815253,12.2135576 C0.235936058,11.1707389 0,10.0068022 0,8.72171254 C0,7.43662286 0.225677969,6.26215279 0.677040677,5.19826707 C1.12840339,4.13438136 1.74388875,3.2179787 2.52351525,2.4490316 C3.30314175,1.6800845 4.23149885,1.07968276 5.3086144,0.647808359 C6.38572995,0.21593396 7.53976502,0 8.77075423,0 C10.1248423,0 11.3763293,0.29493419 12.5252525,0.884811417 L12.5252525,5.75127421 Z\" id=c></path> </g> </svg> </span> </div> </div> </div> </div> </div>";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();//Templates
var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _subUnitEnd=__webpack_require__(34);var _subUnitEnd2=_interopRequireDefault(_subUnitEnd);var _modalCredits=__webpack_require__(33);var _modalCredits2=_interopRequireDefault(_modalCredits);var _replaceStringInTemplates=__webpack_require__(1);var _replaceStringInTemplates2=_interopRequireDefault(_replaceStringInTemplates);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var replaceStringInTemplates=new _replaceStringInTemplates2.default();var ScreenSubUnitEnd=function(){function ScreenSubUnitEnd(){_classCallCheck(this,ScreenSubUnitEnd);this.state={isVisible:true};this.subUnitObject={};}_createClass(ScreenSubUnitEnd,[{key:'init',value:function init(subUnitObject){var _this=this;this.subUnitObject=subUnitObject;// onsole.log(this.subUnitObject);
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend',replaceStringInTemplates.replace(_subUnitEnd2.default));var subunitImageImage=this.subUnitObject.image?this.subUnitObject.image:'';var subunitImage=subunitImageImage.search('../themes/responsive/images')>-1?window.smDefaultBackgroundImage:subunitImageImage.length<3?window.smDefaultBackgroundImage:subunitImageImage;document.querySelector('.sm-subunit-end').style.backgroundImage='url('+subunitImage+')';this.updateCompleted();document.querySelector('.sm-subunit-end_completed .sm-subunit-end__start_button_container .sm-subunit-end__start_button').addEventListener('click',function(){return _this.onStartButtonClick();});//Credits button
if(this.creditsHtml){document.querySelector('.sm-subunit-end__credits_button_container .sm-subunit-end__credits_button').addEventListener('click',this.showCreditsModal.bind(this));}else{document.querySelector('.sm-subunit-end__credits_button_container').remove();}}},{key:'show',value:function show(){this.updateCompleted();document.querySelector('.sm-subunit-end').classList.add('active');this.state.isVisible=true;}},{key:'hide',value:function hide(){document.querySelector('.sm-subunit-end').classList.remove('active');this.state.isVisible=false;}},{key:'updateCompleted',value:function updateCompleted(){//Update copmpletado
//if(config.dev)
//onsole.log("updateCompleted()");
//get idalumno from url
var currentUrl=new URL(window.location.href);var idAlumno=currentUrl.searchParams.get('idalumno');var idAlumnoUrlParamString=idAlumno?'&idalumno='+idAlumno:'';var urlSeguimiento='/include/javascript/seguimientoCurso.js.php?idcurso='+idcurso+idAlumnoUrlParamString;if(typeof loadScript==='function'){//If is blink enviroment
loadScript(urlSeguimiento,true,function(){if(window.actividades[this.subUnitObject.id]){if(window.actividades[this.subUnitObject.id].hasOwnProperty('avance')){this.subUnitObject.completado=parseInt(window.actividades[this.subUnitObject.id].avance);}}this.updateCompletedFillData();}.bind(this));}else{this.updateCompletedFillData();}this.updateCompletedFillData();}},{key:'updateCompletedFillData',value:function updateCompletedFillData(){var completedSecuencia=this.subUnitObject.completado||0;document.querySelector('.sm-subunit-end_completed .sm-subunit-end__progress__title').innerHTML=completedSecuencia+'% '+replaceStringInTemplates.replace('--Completado--');document.querySelector('.sm-subunit-end_completed .sm-subunit-end__progress__bar .sm-color-background-color').style.width=completedSecuencia+'%';}},{key:'showCreditsModal',value:function showCreditsModal(){//Insert in html
document.body.insertAdjacentHTML('beforeend',replaceStringInTemplates.replace(_modalCredits2.default));//AddActions
document.querySelector('#sm-modal--credits .close').addEventListener('click',this.hideCreditsModal.bind(this));document.querySelector('#sm-modal--credits .sm-modal__content__text').innerHTML=this.creditsHtml;//animate
setTimeout(function(){document.querySelector('#sm-modal--credits').classList.add('active');},1);}},{key:'hideCreditsModal',value:function hideCreditsModal(){document.querySelector('#sm-modal--credits').classList.remove('active');setTimeout(function(){document.querySelector('#sm-modal--credits').remove();},400);}}]);return ScreenSubUnitEnd;}();exports.default=ScreenSubUnitEnd;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<div class=sm-subunit-start__actividades__item> <div class=sm-subunit-start__actividades__item__icon></div> <div class=sm-subunit-start__actividades__item__type>Tipo de recurso</div> <div class=sm-subunit-start__actividades__item__title>Nombre de la actividad</div> </div>";

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "<div class=\"sm-subunit-start sm-base\"> <div class=sm-subunit-start__secuencia> <div class=sm-subunit-start__secuencia__content> <div class=\"sm-subunit-start__description sm-color-color\"><strong></strong></div> <div class=sm-subunit-start__title></div> <div class=sm-subunit-start__type> <div class=sm-subunit-start__type__content> <span class=sm-color-color></span> </div> </div> <div class=sm-subunit-start__progress> <div class=sm-subunit-start__progress__title></div> <div class=sm-subunit-start__progress__bar> <div class=sm-color-background-color></div> </div> </div> <div class=sm-subunit-start__start_button_container> <div class=sm-subunit-start__start_button_content--general> <div class=\"sm-subunit-start__start_button sm-button-general--big--arrow sm-color-background-color sm-color-border-color\"> <span>--Comienza secuencia didáctica--</span> <svg width=16px height=16px viewBox=\"0 0 16 16\" version=1.1 style=transform:scaleX(-1) xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> </g> </svg> </div> </div> <div class=sm-subunit-start__start_button_content--flipped> <div class=\"sm-subunit-start__start_button--flipped-casa sm-subunit-start__start_button sm-button-general--big--arrow sm-color-background-color sm-color-border-color\"> <span>--santillana_microcontenidos_tareas_casa--</span> <svg width=16px height=16px viewBox=\"0 0 16 16\" version=1.1 style=transform:scaleX(-1) xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> </g> </svg> </div> <div class=\"sm-subunit-start__start_button--flipped-clase sm-subunit-start__start_button sm-button-general--big--arrow sm-color-background-color sm-color-border-color\"> <span>--santillana_microcontenidos_tareas_clase--</span> <svg width=16px height=16px viewBox=\"0 0 16 16\" version=1.1 style=transform:scaleX(-1) xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> </g> </svg> </div> </div> </div> </div> </div> <div class=sm-subunit-start__actividades style=display:none> <div class=sm-subunit-start__actividades__container> <div class=sm-subunit-start__actividades__content> <div class=sm-subunit-start__actividades__header> <div class=sm-subunit-start__title__actividades>Actividades</div> <div class=\"sm-subunit-start__hr sm-color-background-color\"></div> <div class=sm-color-color></div> <div class=\"sm-subunit-start__description sm-color-color\"><strong></strong></div> <div class=sm-subunit-start__title></div> <div class=sm-subunit-start__progress> <div class=sm-subunit-start__progress__title></div> <div class=sm-subunit-start__progress__bar> <div class=sm-color-background-color></div> </div> </div> </div> <div class=sm-subunit-start__actividades__list__container> <div class=sm-subunit-start__actividades__list> </div> </div> </div> </div> </div> <div class=sm-subunit-start__evaluacion> <div class=sm-subunit-start__evaluacion__background></div> <div class=sm-subunit-start__evaluacion__content> <div class=sm-subunit-start__title__evaluacion>--Evaluación final--</div> <div class=\"sm-subunit-start__hr sm-color-background-color\"></div> <div class=sm-subunit-start__image></div> <div class=\"sm-subunit-start__description sm-color-color\"><strong></strong></div> <div class=sm-subunit-start__title></div> <div class=sm-subunit-start__progress> <div class=sm-subunit-start__progress__title></div> <div class=sm-subunit-start__progress__bar> <div class=sm-color-background-color></div> </div> </div> <div class=sm-subunit-start__start_button_container> <div class=sm-subunit-start__start_button_content--general> <div class=\"sm-subunit-start__start_button sm-button-general--big--arrow sm-color-child-color--hover sm-color-child-color--pressed sm-color-background-color sm-color-border-color sm-color-border-color--hover sm-color-border-color--pressed sm-color-svg-fill--hover sm-color-svg-fill--pressed\"> <span>--Comienza evaluación final--</span> <svg width=16px height=16px viewBox=\"0 0 16 16\" version=1.1 style=transform:scaleX(-1) xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> <path d=\"M15.4253622,15.0459617 C14.8855149,15.580356 14.0160186,15.580356 13.4761713,15.0459617 L6.09709168,7.74141817 L13.4761713,0.436874665 C14.0160186,-0.0975196173 14.8855149,-0.0975196173 15.4253622,0.436874665 C15.4286256,0.440105132 15.4318726,0.443352137 15.4351031,0.446615555 C15.9625429,0.979432858 15.9581836,1.83894107 15.4253663,2.36638088 L9.99552799,7.74141817 L15.4253663,13.1164555 C15.4286297,13.1196859 15.4318767,13.122933 15.4351072,13.1261964 C15.9625447,13.6590159 15.9581817,14.5185241 15.4253622,15.0459617 Z M9.42536219,15.0459617 C8.88551491,15.580356 8.01601863,15.580356 7.47617134,15.0459617 L0.0970916783,7.74141817 L7.47617134,0.436874665 C8.01601863,-0.0975196173 8.88551491,-0.0975196173 9.42536219,0.436874665 C9.42862563,0.440105132 9.43187264,0.443352137 9.43510313,0.446615555 C9.96254293,0.979432858 9.95818361,1.83894107 9.42536631,2.36638088 L3.99552799,7.74141817 L9.42536631,13.1164555 C9.42862972,13.1196859 9.43187673,13.122933 9.4351072,13.1261964 C9.96254473,13.6590159 9.95818175,14.5185241 9.42536219,15.0459617 Z\"></path> </g> </svg> </div> </div> </div> </div> </div> <div class=sm-subunit-start__nav> <div class=sm-subunit-start__nav__actions> <div id=subunit-boton-actividades class=sm-button-subunitnav><span>--Actividades--</span></div> <div id=subunit-boton-evaluacion-final class=sm-button-subunitnav><span>--Evaluación final--</span></div> </div> </div> </div>";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.removeParam=removeParam;function removeParam(key,sourceURL){var rtn=sourceURL.split("?")[0],param,params_arr=[],queryString=sourceURL.indexOf("?")!==-1?sourceURL.split("?")[1]:"";if(queryString!==""){params_arr=queryString.split("&");for(var i=params_arr.length-1;i>=0;i-=1){param=params_arr[i].split("=")[0];if(param===key){params_arr.splice(i,1);}}rtn=rtn+"?"+params_arr.join("&");}return rtn;}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();// import config from './config';
//Templates
var _debug=__webpack_require__(2);var _removeParam=__webpack_require__(38);var _slashSlash=__webpack_require__(4);var _subUnitStart=__webpack_require__(37);var _subUnitStart2=_interopRequireDefault(_subUnitStart);var _subUnitStartActivitiesItem=__webpack_require__(36);var _subUnitStartActivitiesItem2=_interopRequireDefault(_subUnitStartActivitiesItem);var _replaceStringInTemplates=__webpack_require__(1);var _replaceStringInTemplates2=_interopRequireDefault(_replaceStringInTemplates);var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var replaceStringInTemplates=new _replaceStringInTemplates2.default();var ScreenSubUnitStart=function(){function ScreenSubUnitStart(){_classCallCheck(this,ScreenSubUnitStart);this.state={isVisible:true,tab:'secuencia'//actividades, evaluacion
};this.number={};this.subUnitObject={sections:blink.activity.sections.map(function(e){return e[0];}),activitiesInTab:[]};this.isEvaluacion=false;}_createClass(ScreenSubUnitStart,[{key:'init',value:function init(subUnitObject,number,isEvaluacion){var _this=this;var activitiesInTab=[];blink.activity.sections.forEach(function(e){e.forEach(function(section){// let included = false;
_config2.default.slideTypes.forEach(function(type){if(section.tipo==type.number){section.typeName=type.name;activitiesInTab.push(section);// included = true;
}});// if(!included){
// 	subunitObject.activitiesNotInTab.push(section);
// }
});});this.subUnitObject.activitiesInTab=activitiesInTab;//l("ScreenSubUnitStart.Init");
//l(subUnitObject, number, isEvaluacion);
this.number=number;this.subUnitObject=Object.assign(subUnitObject,this.subUnitObject);this.isEvaluacion=isEvaluacion;document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend',replaceStringInTemplates.replace(_subUnitStart2.default));var numberString=this.number.toString();while(numberString.length<2){numberString='0'+numberString;}(0,_debug.cl)(this.subUnitObject);if(!this.isEvaluacion){var subunitImageImage=this.subUnitObject.image?this.subUnitObject.image:'';var subunitImage=subunitImageImage.search('../themes/responsive/images')>-1?window.smDefaultBackgroundImage:subunitImageImage.length<3?window.smDefaultBackgroundImage:subunitImageImage;if(this.subUnitObject.hasOwnProperty('video')&&this.subUnitObject.video.length>3){//l("Tiene video");
var videoContainerElement=document.createElement("DIV");videoContainerElement.classList.add('sm-subunit-start__video');videoContainerElement.innerHTML='\n                    <video  muted loop autoplay oncanplay="this.muted=true">\n                        <source src="'+this.subUnitObject.video+'" type="video/mp4">\n                        <div style="background-image: url('+subunitImage+'))"></div>\n                    </video>\n                ';document.querySelector('.sm-subunit-start').insertBefore(videoContainerElement,document.querySelector('.sm-subunit-start').firstChild);// const imageElement = document.createElement("DIV");
// imageElement.style.backgroundImage = `url(${subunitImage})`;
// videoElement.setAttribute('autoplay', '');
// videoElement.setAttribute('muted', '');
// videoElement.setAttribute('loop', '');
// videoElement.setAttribute('webkit-playsinline', '');
// videoElement.setAttribute('playsinline', '');
// videoElement.setAttribute('oncanplay', 'this.muted=true');
// videoElement.setAttribute('src', this.subUnitObject.video);
// videoElement.appendChild(imageElement);
// document.querySelector('.sm-subunit-start').appendChild(videoElement);
}else{//l("Tiene imagen");
document.querySelector('.sm-subunit-start').style.backgroundImage='url('+subunitImage+')';}//Secuencia didáctica
// document.querySelector('.sm-subunit-start__secuencia .sm-subunit-start__number').innerHTML = numberString;
document.querySelector('.sm-subunit-start__secuencia .sm-subunit-start__title').innerHTML=this.subUnitObject.title;if(this.subUnitObject.hasOwnProperty('description')&&this.subUnitObject.description.length){document.querySelector('.sm-subunit-start__secuencia .sm-subunit-start__description strong').innerHTML=this.subUnitObject.description;}else{document.querySelector('.sm-subunit-start__secuencia .sm-subunit-start__description').remove();}this.updateCompleted();document.querySelector('.sm-subunit-start__secuencia .sm-subunit-start__start_button_content--general .sm-subunit-start__start_button').addEventListener('click',function(){return _this.goFirstBlinkSlide();});//Flipped, and other types
// if(subUnitObject.smtype){
//     //Hide number
//     document.querySelector('.sm-subunit-start__number').style.display = 'none';
// }
// Flipped buttons
if(subUnitObject.smtype=='flipped'){document.querySelector('.sm-subunit-start__secuencia__content').classList.add('flipped');document.querySelector('.sm-subunit-start__secuencia .sm-subunit-start__start_button_content--flipped .sm-subunit-start__start_button--flipped-casa').addEventListener('click',function(){return _this.goFirstBlinkSlide();});//Check if has clase section
if(this.hasBlinkSlideWithSection('clase')){document.querySelector('.sm-subunit-start__secuencia .sm-subunit-start__start_button_content--flipped .sm-subunit-start__start_button--flipped-clase').addEventListener('click',function(){return _this.goBlinkSlideWithSection('clase');});}else{document.querySelector('.sm-subunit-start__secuencia .sm-subunit-start__start_button_content--flipped .sm-subunit-start__start_button--flipped-clase').remove();}}if(subUnitObject.smtype){var tipoTexto='';switch(subUnitObject.smtype){case'flipped':tipoTexto='--santillana_microcontenidos_flipped--';break;// case 'refuerzo':
// 	tipoTexto = 'Refuerzo';
// 	break;
case'microproyecto':tipoTexto='--santillana_microcontenidos_microproyecto--';break;// case 'ampliacion':
// 	tipoTexto = 'Ampliación';
// 	break;
// case 'teacher':
// 	tipoTexto = 'Teacher Resources';
// 	break;
// case 'discover':
// 	tipoTexto = 'Discover';
// 	break;
// case 'laboratorio':
// 	tipoTexto = 'Laboratorio';
// 	break;
case'reto':tipoTexto='--santillana_microcontenidos_reto--';break;case'esencial':tipoTexto='--santillana_microcontenidos_esencial--';break;case'ninguna':tipoTexto='--santillana_microcontenidos_ninguna--';break;case'basica':tipoTexto='--santillana_microcontenidos_basica--';break;default:break;}tipoTexto=replaceStringInTemplates.replace(tipoTexto);document.querySelector('.sm-subunit-start__secuencia__content span').innerHTML=''+tipoTexto;}else{document.querySelector('.sm-subunit-start__secuencia__content span').innerHTML=subUnitObject.description;}// if(document.querySelector(`.sm-subunit-start__secuencia__content svg.${subUnitObject.smtype}-icon`)){
//     document.querySelector(`.sm-subunit-start__secuencia__content svg.${subUnitObject.smtype}-icon`).style.display = 'inline-block';
// }
//Actividades
// document.querySelector('.sm-subunit-start__actividades .sm-subunit-start__number').innerHTML = numberString;
document.querySelector('.sm-subunit-start__actividades .sm-subunit-start__title').innerHTML=this.subUnitObject.title;if(this.subUnitObject.hasOwnProperty('description')&&this.subUnitObject.description.length){document.querySelector('.sm-subunit-start__actividades .sm-subunit-start__description strong').innerHTML=this.subUnitObject.description;}else{document.querySelector('.sm-subunit-start__actividades .sm-subunit-start__description').remove();}//this.updateCompleted(); //it's allready called
var lastActivityId=-1;_.forEach(subUnitObject.activitiesInTab,function(activity,index){document.querySelector('.sm-subunit-start__actividades__list').insertAdjacentHTML('beforeend',replaceStringInTemplates.replace(_subUnitStartActivitiesItem2.default));var activityDomElement=document.querySelectorAll('.sm-subunit-start__actividades__list .sm-subunit-start__actividades__item')[index];activityDomElement.querySelector('.sm-subunit-start__actividades__item__icon').classList.add('activity_type_'+activity.tipo);activityDomElement.querySelector('.sm-subunit-start__actividades__item__type').innerHTML=activity.typeName;activityDomElement.querySelector('.sm-subunit-start__actividades__item__title').innerHTML=(0,_slashSlash.removeSlash)(activity.title);if(activity.concatenada!="1"){lastActivityId=activity.ID;}var activityId=lastActivityId;activityDomElement.addEventListener('click',function(){_this.onGoToActivityById(activityId);});});}else{//Evaluación final
var _subunitImageImage=this.subUnitObject.image?this.subUnitObject.image:'';var _subunitImage=_subunitImageImage.search('../themes/responsive/images')>-1?window.smDefaultBackgroundImage:_subunitImageImage.length<3?window.smDefaultBackgroundImage:_subunitImageImage;if(this.subUnitObject.hasOwnProperty('video')&&this.subUnitObject.video.length>3){var _videoContainerElement=document.createElement("DIV");_videoContainerElement.classList.add('sm-subunit-start__video');_videoContainerElement.innerHTML='\n                    <video  muted loop autoplay oncanplay="this.muted=true">\n                        <source src="'+this.subUnitObject.video+'" type="video/mp4">\n                        <div style="background-image: url('+_subunitImage+'))"></div>\n                    </video>\n                ';document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__image').insertBefore(_videoContainerElement,document.querySelector('.sm-subunit-start').firstChild);}else{//l("Tiene imagen");
document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__image').style.backgroundImage='url('+_subunitImage+')';document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__evaluacion__background').style.backgroundImage='url('+_subunitImage+')';// } else { Necesitaría pasar por todos as unidades un AJAX para saber su padre, por eso quito esta alternativa.
//     //l("No tiene imagen");
//     document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__image').style.backgroundImage = `url(${this.subUnitObject.parentSubUnit.image})`;
//     document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__evaluacion__background').style.backgroundImage = `url(${this.subUnitObject.parentSubUnit.image})`;
}// document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__number').innerHTML = numberString;
document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__title').innerHTML=this.subUnitObject.title;if(this.subUnitObject.hasOwnProperty('description')&&this.subUnitObject.description.length){document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__description strong').innerHTML=this.subUnitObject.description;}else{document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__description').remove();}this.updateCompleted();document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__start_button_content--general .sm-subunit-start__start_button').addEventListener('click',function(){return _this.goFirstBlinkSlide();});}//Añade acciones a los botones tabs
if(subUnitObject.activitiesInTab.length>0){document.getElementById('subunit-boton-actividades').addEventListener('click',this.goTabActividades.bind(this));}else{document.getElementById('subunit-boton-actividades').remove();}//Hide Evaluación final if this subunit has no evaluation inside
if(this.subUnitObject.hasOwnProperty('evaluationSubUnit')){document.getElementById('subunit-boton-evaluacion-final').addEventListener('click',this.goTabEvaluacionFinal.bind(this));}else{document.getElementById('subunit-boton-evaluacion-final').remove();}this.state.isVisible=true;if(this.isEvaluacion){this.showEvaluacion();}}},{key:'show',value:function show(){this.updateCompleted();document.querySelector('.sm-subunit-start').classList.add('active');this.state.isVisible=true;}},{key:'hide',value:function hide(){document.querySelector('.sm-subunit-start').classList.remove('active');this.state.isVisible=false;}},{key:'goTabSecuenciaDidactica',value:function goTabSecuenciaDidactica(){//onsole.log('goTabSecuenciaDidactica');
document.querySelector('.sm-subunit-start__secuencia').style.display='block';document.querySelector('.sm-subunit-start__actividades').style.display='none';document.querySelector('.navbar-bottom').style.display='block';//Tabs
// document.getElementById('subunit-boton-secuencia-didactica').classList.add('active');
document.querySelector('.sm-subunit-start__nav__actions').style.display='block';// document.getElementById('subunit-boton-evaluacion-final').classList.remove('active');
this.state.tab='secuencia';}},{key:'goTabActividades',value:function goTabActividades(){//l("goTabActividades");
this.updateCompleted();//onsole.log('goTabSecuenciaDidactica');
document.querySelector('.sm-subunit-start__secuencia').style.display='none';document.querySelector('.sm-subunit-start__actividades').style.display='block';document.querySelector('.navbar-bottom').style.display='none';//Tabs
// document.getElementById('subunit-boton-secuencia-didactica').classList.remove('active');
document.querySelector('.sm-subunit-start__nav__actions').style.display='none';this.state.tab='actividades';}},{key:'goTabEvaluacionFinal',value:function goTabEvaluacionFinal(){var urlRaw=this.subUnitObject.evaluationSubUnit.url;var parentUrl=document.location.href;var parentUrlWithNoNumSec=(0,_removeParam.removeParam)('numSec',parentUrl);var parentUrlEncoded=encodeURIComponent(parentUrlWithNoNumSec);var urlWithEvalCode=this.subUnitObject.evaluationSubUnit.url.search('.php?')?urlRaw+'&smparenturl='+parentUrlEncoded:urlRaw+'?smparenturl='+parentUrlEncoded;document.location.href=urlWithEvalCode;}//FROM EVALUACION
},{key:'showEvaluacion',value:function showEvaluacion(){//l("Mostrando evaluación");
document.querySelector('.sm-subunit-start__secuencia').style.display='none';document.querySelector('.sm-subunit-start__evaluacion').style.display='block';document.querySelector('.sm-subunit-start__nav__actions').style.display='none';this.state.tab='evaluacion';}},{key:'updateCompleted',value:function updateCompleted(){//Update copmpletado
//l("updateCompleted()");
//get idalumno from url
var currentUrl=new URL(window.location.href);var idAlumno=currentUrl.searchParams.get('idalumno');var idAlumnoUrlParamString=idAlumno?'&idalumno='+idAlumno:'';var urlSeguimiento='/include/javascript/seguimientoCurso.js.php?idcurso='+idcurso+idAlumnoUrlParamString;if(typeof loadScript==='function'){//If is blink enviroment
loadScript(urlSeguimiento,true,function(){if(window.actividades[this.subUnitObject.id]){if(window.actividades[this.subUnitObject.id].hasOwnProperty('avance')){this.subUnitObject.completado=parseInt(window.actividades[this.subUnitObject.id].avance);}}this.updateCompletedFillData();}.bind(this));}else{this.updateCompletedFillData();}this.updateCompletedFillData();}},{key:'updateCompletedFillData',value:function updateCompletedFillData(){//Secuencia
var completedSecuencia=this.subUnitObject.completado||0;document.querySelector('.sm-subunit-start__secuencia .sm-subunit-start__progress__title').innerHTML=completedSecuencia+'% '+replaceStringInTemplates.replace('--Completado--');document.querySelector('.sm-subunit-start__secuencia .sm-subunit-start__progress__bar .sm-color-background-color').style.width=completedSecuencia+'%';//ACtividades
document.querySelector('.sm-subunit-start__actividades .sm-subunit-start__progress__title').innerHTML=completedSecuencia+'% '+replaceStringInTemplates.replace('--Completado--');document.querySelector('.sm-subunit-start__actividades .sm-subunit-start__progress__bar .sm-color-background-color').style.width=completedSecuencia+'%';//Evaluacion
document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__progress__title').innerHTML=completedSecuencia+'% '+replaceStringInTemplates.replace('--Completado--');document.querySelector('.sm-subunit-start__evaluacion .sm-subunit-start__progress__bar .sm-color-background-color').style.width=completedSecuencia+'%';}},{key:'checkForEvaluation',value:function checkForEvaluation(){var url='../coursePlayer/librodigital_json.php?type=json&xdevice=ipadapp&idclase='+idclase+'&idcurso='+idcurso;loadScript(url,true,function(data){//onsole.log(JSON.parse(data.responseText));
}.bind(this));}}]);return ScreenSubUnitStart;}();exports.default=ScreenSubUnitStart;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<li class=\"slider-indicator sm-color-background-color--active sm-color-border-color--active sm-big sm-end\">--Fin--</li>";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<li class=\"slider-indicator sm-color-background-color--active sm-color-border-color--active sm-big sm-start\">--Inicio--</li>";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<div class=sm-slider-indicator-arrow-right> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> </div>";

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<div class=sm-slider-indicator-arrow-left> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=16 height=10 viewBox=\"0 0 16 10\"> <path d=\"M15.4251953,0.413623017 C15.9743759,0.968407485 15.9743759,1.8619621 15.4251953,2.41674657 L7.91854035,10 L0.411885438,2.41674657 C-0.137295146,1.8619621 -0.137295146,0.968407485 0.411885438,0.413623017 C0.41520529,0.410269289 0.418542137,0.406932428 0.421895851,0.403612562 C0.969455822,-0.138421122 1.852746,-0.13394118 2.39477968,0.413618791 L7.91854035,5.99369679 L13.442301,0.413618791 C13.4456209,0.410265077 13.4489577,0.40692823 13.4523115,0.403608378 C13.9998738,-0.138422971 14.8831639,-0.133939265 15.4251953,0.413623017 Z\"/> </svg> </div>";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.getCoords=getCoords;function getCoords(elem){// crossbrowser version
var box=elem.getBoundingClientRect();var body=document.body;var docEl=document.documentElement;var scrollTop=window.pageYOffset||docEl.scrollTop||body.scrollTop;var scrollLeft=window.pageXOffset||docEl.scrollLeft||body.scrollLeft;var clientTop=docEl.clientTop||body.clientTop||0;var clientLeft=docEl.clientLeft||body.clientLeft||0;var top=box.top+scrollTop-clientTop;var left=box.left+scrollLeft-clientLeft;return{top:Math.round(top),left:Math.round(left)};}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();// import _ from 'lodash';
//Templates
var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _animejs=__webpack_require__(8);var _animejs2=_interopRequireDefault(_animejs);var _responsiveStatus=__webpack_require__(7);var _responsiveStatus2=_interopRequireDefault(_responsiveStatus);var _getCoords=__webpack_require__(44);var _sliderIndicatorArrowLeft=__webpack_require__(43);var _sliderIndicatorArrowLeft2=_interopRequireDefault(_sliderIndicatorArrowLeft);var _sliderIndicatorArrowRight=__webpack_require__(42);var _sliderIndicatorArrowRight2=_interopRequireDefault(_sliderIndicatorArrowRight);var _sliderIndicatorStartButton=__webpack_require__(41);var _sliderIndicatorStartButton2=_interopRequireDefault(_sliderIndicatorStartButton);var _sliderIndicatorEndButton=__webpack_require__(40);var _sliderIndicatorEndButton2=_interopRequireDefault(_sliderIndicatorEndButton);var _replaceStringInTemplates=__webpack_require__(1);var _replaceStringInTemplates2=_interopRequireDefault(_replaceStringInTemplates);var _debug=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var replaceStringInTemplates=new _replaceStringInTemplates2.default();var ScreenSubUnitIndicators=function(){function ScreenSubUnitIndicators(){_classCallCheck(this,ScreenSubUnitIndicators);this.state={started:false,contentLeft:0,//tablet y mobile
contentTop:0,//desktop
isStartSlide:false,isEndSlide:false,blinkSlidesLength:0};this.subunit={sections:blink.activity.sections.map(function(e){return e[0];})};this.line=null;this.lines=null;}_createClass(ScreenSubUnitIndicators,[{key:'init',value:function init(subunit){var _this2=this;//l("ScreenSubUnitIndicators.Init");
if(!blink.activity.slidePreview){//Si no está en modo preview
if(!this.started&&document.querySelector('.navbar-bottom .slider-indicators')){//comprueba que haya navegador de slide
var _this=this;this.responsiveStatus=new _responsiveStatus2.default();this.subunit=Object.assign(subunit,this.subunit);//Apply book colors with class
var slidesNavbarButtons=document.querySelectorAll('.navbar-bottom ol.slider-indicators li.slider-indicator');this.state.blinkSlidesLength=slidesNavbarButtons.length;_.forEach(slidesNavbarButtons,function(slideButton,index){slideButton.classList.add('sm-color-background-color--active');slideButton.classList.add('sm-color-border-color--active');});//Add id to elements without concatenated sections
var notConcatenatedCounter=0;_.forEach(this.subunit.sections,function(section){if(section.concatenate!="1"){var allButtons=document.querySelectorAll('.navbar-bottom ol.slider-indicators li.slider-indicator');var currentButton=_.find(allButtons,function(button){return button.dataset.goTo==notConcatenatedCounter;});if(currentButton){currentButton.setAttribute('data-sm-slide-id',section.ID);}notConcatenatedCounter++;}});// Add start and end buttons
document.querySelector('.navbar-bottom .slider-indicators').insertAdjacentHTML('afterbegin',replaceStringInTemplates.replace(_sliderIndicatorStartButton2.default));document.querySelector('.navbar-bottom .slider-indicators').insertAdjacentHTML('beforeend',replaceStringInTemplates.replace(_sliderIndicatorEndButton2.default));document.querySelector('.navbar-bottom .slider-indicators .sm-start').addEventListener('click',this.onStartButtonClick.bind(this),false);document.querySelector('.navbar-bottom .slider-indicators .sm-end').addEventListener('click',this.onEndButtonClick.bind(this),false);// Add arrows
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
//onsole.log("Left");
//onsole.log(blink.activity.currentSection);
//     // comprobar si es la primera y mostrar la slide inicio
// })
// $('.right.slider-control').on('click', function() {
//onsole.log("right");
//onsole.log(blink.activity.currentSection);
//     // comprobar si es la última y mostrar la slide fin
// });
//Create line
this.linesContainer=document.createElement('div');this.linesContainer.setAttribute('class','slider-indicators__lines_container');document.querySelector('.navbar-bottom').insertBefore(this.linesContainer,document.querySelector('.navbar-bottom').firstChild);this.lines={};var buttons=document.querySelectorAll('.navbar-bottom ol.slider-indicators li');// for (let index =  0; index < buttons.length; index++) {
_.forEach(buttons,function(button,index){var indexNumber=button.getAttribute('data-go-to');if(indexNumber!=null){if(_this2.subunit.hasOwnProperty('sections')){if(_this2.subunit.sections.hasOwnProperty(parseInt(indexNumber))){var currentSection=_.find(blink.activity.sections.map(function(e){return e[0];}),{ID:button.dataset.smSlideId});var isMultimedia=currentSection!=undefined?currentSection.hasOwnProperty('type')&&currentSection.type==7:false;// const isMultimedia = this.subunit.sections[parseInt(indexNumber)].type == 7;
if(isMultimedia){_this2.lines[index]=document.createElement('div');_this2.lines[index].setAttribute('class','slider-indicators__lines__line');document.querySelector('.navbar-bottom .slider-indicators__lines_container').appendChild(_this2.lines[index]);}}}}});//Create lines
this.line=document.createElement('div');this.line.setAttribute('class','slider-indicators__line');document.querySelector('.navbar-bottom').insertBefore(this.line,document.querySelector('.navbar-bottom').firstChild);//Refresh on resize
window.addEventListener('resize',this.update.bind(this),false);//this.update
if(!numSec){if(window.esPopup||blink.activity.esdeber===1){//
}else{this.onStartButtonClick();}}// this.removeActivitiesSlides();
document.querySelector('.slider-control.left').setAttribute('onclick','void(0);');document.querySelector('.slider-control.right').setAttribute('onclick','void(0);');this.started=true;//If is on Popup, remove Start and End Buttons
if(window.esPopup||blink.activity.esdeber===1){var startButtonEl=document.querySelector('.navbar-bottom .slider-indicators .sm-start');if(startButtonEl)startButtonEl.style.display='none';var endButtonEl=document.querySelector('.navbar-bottom .slider-indicators .sm-end');if(endButtonEl)endButtonEl.style.display='none';}}if(document.querySelector('.navbar-bottom .slider-indicators')){this.update();}}else{var navbarBottomEl=document.querySelector('.navbar-bottom');if(navbarBottomEl){navbarBottomEl.remove();}(0,_debug.cl)("No se muestra la navegación porque está en modo Preview");}}// removeActivitiesSlides(){
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
},{key:'update',value:function update(){//l("ScreenSubUnitIndicators.update()");
var navBar=document.querySelector('.navbar-bottom');var olList=document.querySelector('.navbar-bottom ol.slider-indicators');var buttons=document.querySelectorAll('.navbar-bottom ol.slider-indicators li');var activeButton=document.querySelector('.navbar-bottom ol.slider-indicators li.active');var activeButtonIndex=parseInt(activeButton.getAttribute('data-go-to'));if(activeButton.classList.contains('sm-start')){activeButtonIndex=-1;}if(activeButton.classList.contains('sm-end')){activeButtonIndex=buttons.length-2;}var windowSize=this.responsiveStatus.getSize();var buttonsInMiddle=1;// mobile
if(windowSize!='desktop'&&windowSize!='desktop-hd'){if(windowSize=='mobile'){}else if(windowSize=='tablet-portrait'){buttonsInMiddle=5;}else if(windowSize=='tablet-landscape'){buttonsInMiddle=6;}}else{var huecoHeight=document.querySelector('ol.slider-indicators').offsetHeight-80;if(huecoHeight>450){buttonsInMiddle=2;}if(huecoHeight>600){buttonsInMiddle=4;}if(huecoHeight>800){buttonsInMiddle=6;}}for(var index=-1;index<buttons.length-1;index++){var button=buttons[index+1];//If is not start or end
if(!button.classList.contains('sm-big')){//If active is on 4 first numbers
if(activeButtonIndex<=1+buttonsInMiddle){if(index<=2*buttonsInMiddle+1){//número 4
button.style.display='inline-block';}else{button.style.display='none';}}else if(activeButtonIndex<buttons.length-2-(buttonsInMiddle+2)){if(index>=activeButtonIndex-buttonsInMiddle&&index<=activeButtonIndex+buttonsInMiddle){button.style.display='inline-block';}else{button.style.display='none';}}else{if(index>=buttons.length-(5+2*buttonsInMiddle)){//número 4
button.style.display='inline-block';}else{button.style.display='none';}}if(index==0||index==buttons.length-3){button.style.display='inline-block';}}}//Add spaces
var marginRight=6+8*2;//mobile
var marginBottom=0;//mobile
if(windowSize=='tablet-portrait'){marginRight=10+8*3;}else if(windowSize=='tablet-landscape'){marginRight=10+8*3;}else if(windowSize=='desktop'||windowSize=='desktop-hd'){marginRight=0;marginBottom=48;}for(var _index=0;_index<buttons.length-3;_index++){var _button=buttons[_index];var buttonNext=buttons[_index+1];if(!(_button.classList.contains('sm-start')||_button.classList.contains('sm-end'))){if(_button.style.display=='inline-block'&&buttonNext.style.display=='none'){_button.style.marginRight=marginRight+'px';_button.style.marginBottom=marginBottom+'px';}else{_button.style.marginRight=null;_button.style.marginBottom=null;}}}//Linea
var startButton=document.querySelector('.navbar-bottom ol.slider-indicators li.sm-start');var endButton=document.querySelector('.navbar-bottom ol.slider-indicators li.sm-end');if(startButton.style.display=='none'){startButton=buttons[1];endButton=buttons[buttons.length-2];}if(startButton&&endButton){if(windowSize!='desktop'&&windowSize!='desktop-hd'){this.line.style.top=null;this.line.style.bottom=null;this.line.style.left=startButton.offsetLeft+olList.offsetLeft+buttons[0].offsetWidth+'px';this.line.style.right=navBar.offsetWidth-endButton.offsetLeft-olList.offsetLeft+'px';}else{this.line.style.top=startButton.offsetTop+olList.offsetTop+buttons[0].offsetHeight+'px';this.line.style.bottom=navBar.offsetHeight-endButton.offsetTop-olList.offsetTop+'px';this.line.style.left=null;this.line.style.right=null;}}//Lineas
_.forEach(this.lines,function(o,i){if(windowSize!='desktop'&&windowSize!='desktop-hd'){var posLeft=buttons[i].offsetLeft;if(buttons[i].style.display=='inline-block'){o.style.display='block';o.style.left=posLeft+buttons[i].offsetWidth*0.5-1+'px';o.style.top=null;}else{o.style.display='none';}}else{var posTop=buttons[i].offsetTop;if(buttons[i].style.display=='inline-block'){o.style.display='block';o.style.top=posTop+buttons[i].offsetHeight*0.5-1+'px';o.style.left=null;}else{o.style.display='none';}}});//Update activities content
if(typeof this.activitiContentUpdate=='function'){this.activitiContentUpdate();}//Check arrows state
//Left arrow
if(this.state.isStartSlide||(window.esPopup||blink.activity.esdeber===1)&&activeButtonIndex==0){document.querySelector('.sm-slider-indicator-arrow-left').classList.add('disabled');}else{document.querySelector('.sm-slider-indicator-arrow-left').classList.remove('disabled');}//Right arrow
if(this.state.isEndSlide||(window.esPopup||blink.activity.esdeber===1)&&activeButtonIndex==buttons.length-3){document.querySelector('.sm-slider-indicator-arrow-right').classList.add('disabled');}else{document.querySelector('.sm-slider-indicator-arrow-right').classList.remove('disabled');}}},{key:'onArrowLeftClick',value:function onArrowLeftClick(dontExecuteActionInSlide){var executeActionInSlide=!(dontExecuteActionInSlide===true);// document.querySelectorAll('.slider-indicators li').forEach((element) => {
//         element.classList.remove('active');
// });
if(this.state.isEndSlide){blink.activity.currentSection=this.state.blinkSlidesLength-1;}if(!this.state.isStartSlide){if(blink.activity.currentSection==0&&!this.state.isEndSlide){this.onStartButtonClick();}else{// document.querySelector(`.slider-indicators li[data-go-to="${blink.activity.currentSection-1}"]`).classList.add('active');
if(this.state.isEndSlide){//If is in start button, goes to slide 0
document.querySelector('.slider-indicators li[data-go-to="'+(this.state.blinkSlidesLength-1)+'"]').classList.add('active');this.onSliderIndicatorClick(document.querySelector('.slider-indicators li[data-go-to="'+(this.state.blinkSlidesLength-1)+'"]'));// document.querySelector(`.slider-indicators li[data-go-to="${this.state.blinkSlidesLength-1}"]`).click();
$('.slider-indicators li[data-go-to="'+(this.state.blinkSlidesLength-1)+'"]').trigger('click');}else{document.querySelector('.slider-indicators li[data-go-to="'+(blink.activity.currentSection-1)+'"]').classList.add('active');this.onSliderIndicatorClick(document.querySelector('.slider-indicators li[data-go-to="'+(blink.activity.currentSection-1)+'"]'));if(executeActionInSlide){// document.querySelector('.left.slider-control').click();
$('.left.slider-control').trigger('click');}}}this.state.isEndSlide=false;this.onEndHide();this.update();}if(this.state.isStartSlide||this.state.isEndSlide){$('.info-template.shown').removeClass('shown');}}},{key:'onArrowRightClick',value:function onArrowRightClick(dontExecuteActionInSlide){var executeActionInSlide=!(dontExecuteActionInSlide===true);// document.querySelectorAll('.slider-indicators li').forEach((element) => {
//     element.classList.remove('active');
// });
if(this.state.isStartSlide||this.state.isEndSlide){$('.info-template.shown').removeClass('shown');}if(this.state.isStartSlide){blink.activity.currentSection=0;}if(!this.state.isEndSlide){//If is the last slide
if(blink.activity.currentSection==this.state.blinkSlidesLength-1&&!this.state.isStartSlide){this.onEndButtonClick();}else{// document.querySelector(`.slider-indicators li[data-go-to="${blink.activity.currentSection+1}"]`).classList.add('active');
if(this.state.isStartSlide){//If is in start button, goes to slide 0
document.querySelector('.slider-indicators li[data-go-to="0"]').classList.add('active');this.onSliderIndicatorClick(document.querySelector('.slider-indicators li[data-go-to="0"]'));// document.querySelector(`.slider-indicators li[data-go-to="0"]`).click();
$('.slider-indicators li[data-go-to="0"]').trigger('click');}else{document.querySelector('.slider-indicators li[data-go-to="'+(blink.activity.currentSection+1)+'"]').classList.add('active');this.onSliderIndicatorClick(document.querySelector('.slider-indicators li[data-go-to="'+(blink.activity.currentSection+1)+'"]'));if(executeActionInSlide){// cl("Ejecutando document.querySelector('.right.slider-control').click();")
// document.querySelector('.right.slider-control').click();
$('.right.slider-control').trigger('click');}}}this.state.isStartSlide=false;this.onStartHide();this.update();}}},{key:'onStartButtonClick',value:function onStartButtonClick(){if(!this.state.isStartSlide){_.forEach(document.querySelectorAll('.slider-indicators li'),function(element){element.classList.remove('active');});document.querySelector('.slider-indicators .sm-start').classList.add('active');this.state.isEndSlide=false;this.state.isStartSlide=true;blink.activity.currentSection=0;//External function
this.onStartShow();this.onEndHide();this.update();// //l('----INIQuita popup float')
//Quita popup float
//document.querySelector('.info-template.shown').classList.remove('shown');
}if(this.state.isStartSlide||this.state.isEndSlide){$('.info-template.shown').removeClass('shown');}}},{key:'onEndButtonClick',value:function onEndButtonClick(){if(!this.state.isEndSlide){_.forEach(document.querySelectorAll('.slider-indicators li'),function(element){element.classList.remove('active');});document.querySelector('.slider-indicators .sm-end').classList.add('active');this.state.isStartSlide=false;this.state.isEndSlide=true;blink.activity.currentSection=this.state.blinkSlidesLength-1;//External function
this.onEndShow();this.onStartHide();this.update();////l('---Quita popup float')
//Quita popup float
//document.querySelector('.info-template.shown').classList.remove('shown');
}if(this.state.isStartSlide||this.state.isEndSlide){$('.info-template.shown').removeClass('shown');}}// jumpTo(nextContentPoint){
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
},{key:'onSliderIndicatorClick',value:function onSliderIndicatorClick(activeButton){//l("onSliderIndicatorClick");
_.forEach(document.querySelectorAll('.slider-indicators li'),function(element){if(activeButton!=element){element.classList.remove('active');}else{element.classList.add('active');}});this.state.isStartSlide=false;this.onStartHide();this.onEndHide();this.state.isEndSlide=false;this.update();//Check if active is not visible
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
},{key:'goFirstBlinkSlide',value:function goFirstBlinkSlide(){// document.querySelector(`.slider-indicators li[data-go-to="0"]`).click();
$('.slider-indicators li[data-go-to="0"]').trigger('click');this.onSliderIndicatorClick(document.querySelector('.slider-indicators li[data-go-to="0"]'));}},{key:'goBlinkSlideWithSection',value:function goBlinkSlideWithSection(section){_.forEach(this.subunit.sections,function(sectionObj,idx){if(sectionObj.hasOwnProperty('seccion')&&sectionObj.seccion==section){// document.querySelector(`.navbar-bottom ol.slider-indicators li.slider-indicator[data-sm-slide-id="${sectionObj.ID}"]`).click();
if(section=='clase'){$('.navbar-bottom ol.slider-indicators li.slider-indicator[data-go-to="'+idx+'"]').trigger('click');}else{$('.navbar-bottom ol.slider-indicators li.slider-indicator[data-sm-slide-id="'+sectionObj.ID+'"]').trigger('click');}}});}}]);return ScreenSubUnitIndicators;}();exports.default=ScreenSubUnitIndicators;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _ScreenSubUnitSliderIndicators=__webpack_require__(45);var _ScreenSubUnitSliderIndicators2=_interopRequireDefault(_ScreenSubUnitSliderIndicators);var _ScreenSubUnitStart=__webpack_require__(39);var _ScreenSubUnitStart2=_interopRequireDefault(_ScreenSubUnitStart);var _ScreenSubUnitEnd=__webpack_require__(35);var _ScreenSubUnitEnd2=_interopRequireDefault(_ScreenSubUnitEnd);var _Activities=__webpack_require__(32);var _Activities2=_interopRequireDefault(_Activities);var _subUnitBackButton=__webpack_require__(3);var _subUnitBackButton2=_interopRequireDefault(_subUnitBackButton);var _replaceStringInTemplates=__webpack_require__(1);var _replaceStringInTemplates2=_interopRequireDefault(_replaceStringInTemplates);var _getUrlParameters=__webpack_require__(30);var _debug=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var replaceStringInTemplates=new _replaceStringInTemplates2.default();var ScreenSubUnit=function(){function ScreenSubUnit(){_classCallCheck(this,ScreenSubUnit);this.state={started:false,inActivity:false};this.number={};this.subUnitObject={sections:blink.activity.sections.map(function(e){return e[0];})};this.unit={};this.book={};this.isEvaluacion=false;}_createClass(ScreenSubUnit,[{key:'init',value:function init(subUnitObject,number,unit,book,isEvaluacion){var _this=this;// blink.activity.sections.map(e=>e[0]).forEach(l=>subUnitObject.sections.push(l))
////l("ScreenSubUnit.Init");
////l(subUnitObject, number, unit, book, isEvaluacion);
////l("¿Es evaluación? " + (isEvaluacion ? "Sí" : "No"));
if(!this.started){this.number=number;this.subUnitObject=Object.assign(subUnitObject,this.subUnitObject);this.unit=unit;this.book=book;this.isEvaluacion=isEvaluacion;this.screenSubUnitStart=new _ScreenSubUnitStart2.default();this.screenSubUnitEnd=new _ScreenSubUnitEnd2.default();this.screenSubUnitIndicators=new _ScreenSubUnitSliderIndicators2.default();//StartPage
this.screenSubUnitStart.hasBlinkSlideWithSection=function(section){return _this.hasBlinkSlideWithSection(section);};this.screenSubUnitStart.goBlinkSlideWithSection=function(section){return _this.screenSubUnitIndicators.goBlinkSlideWithSection(section);};this.screenSubUnitStart.onGoToActivity=this.onGoToActivity.bind(this);this.screenSubUnitStart.onGoToActivityById=this.onGoToActivityById.bind(this);this.screenSubUnitStart.init(this.subUnitObject,this.number,this.isEvaluacion);this.screenSubUnitStart.goFirstBlinkSlide=function(){return _this.screenSubUnitIndicators.goFirstBlinkSlide();};//EndPage
this.screenSubUnitEnd.creditsHtml=this.book.creditsHtml;this.screenSubUnitEnd.init(this.subUnitObject);this.screenSubUnitEnd.onStartButtonClick=function(){return _this.screenSubUnitIndicators.onStartButtonClick();};// this.screenSubUnitEnd.goLastBlinkSlide = ()  => this.screenSubUnitIndicators.goLastBlinkSlide();
//Navigation
this.screenSubUnitIndicators.onStartShow=function(){return _this.screenSubUnitStart.show();};this.screenSubUnitIndicators.onStartHide=function(){return _this.screenSubUnitStart.hide();};this.screenSubUnitIndicators.onEndShow=function(){return _this.screenSubUnitEnd.show();};this.screenSubUnitIndicators.onEndHide=function(){return _this.screenSubUnitEnd.hide();};this.screenSubUnitIndicators.init(this.subUnitObject);//backButton
// document.querySelector('.navbar.libro .libro-left>ul').insertAdjacentHTML( 'afterbegin', replaceStringInTemplates.replace(htmlSubUnitBackButton) );
document.querySelector('.navbar.libro').insertAdjacentHTML('afterbegin',replaceStringInTemplates.replace(_subUnitBackButton2.default));document.querySelector('#sm-subunit-backbutton').addEventListener('click',this.onBackButtonClick.bind(this));//If preview or review or tarea
if(blink.activity.slidePreview||window.esPopup||blink.activity.esdeber===1){//Hide back button and TOC button with a class
document.querySelector('.navbar.libro').classList.add('sm-is-preview');}if(window.esPopup){//Hide back button and TOC button with a class
document.querySelector('.navbar.libro').classList.add('sm-is-popup');}//If preview
if(blink.activity.slidePreview){//Hide review buttons
var reviewElements=document.querySelectorAll('.review');_.forEach(reviewElements,function(reviewEl){return reviewEl.style.display='none';});}//if is tarea
// if(blink.activity.esdeber===1){
//     cl("Es una tarea")
// }
//Activities
this.activities=new _Activities2.default();this.screenSubUnitIndicators.activitiContentUpdate=this.activities.update;//If numSec exists, go to this page.
if(numSec>0){this.goTopSlide(numSec);}}this.started=true;}},{key:'onGoToActivity',value:function onGoToActivity(page){this.state.inActivity=true;$('.slider-indicators li[data-go-to="'+(parseInt(page)-1)+'"]').trigger('click');}},{key:'onGoToActivityById',value:function onGoToActivityById(ID){this.state.inActivity=true;$('.slider-indicators li[data-sm-slide-id="'+ID+'"]').trigger('click');}},{key:'goTopSlide',value:function goTopSlide(slideNumber){$('.slider-indicators li[data-go-to="'+(parseInt(slideNumber)-1)+'"]').trigger('click');}},{key:'onBackButtonClick',value:function onBackButtonClick(){var rtmm=blink.getReqParam(location.href,'rtmm');if(blink.activity.esdeber===1&&rtmm==='1'){goPage('mensajes');}else{if(!this.isEvaluacion){// Chec if we are in secuencia o actividades
if(this.state.inActivity){this.state.inActivity=false;this.screenSubUnitStart.show();this.screenSubUnitStart.goTabActividades();}else if(this.screenSubUnitStart.state.tab=='actividades'){this.screenSubUnitIndicators.onStartButtonClick();this.screenSubUnitStart.goTabSecuenciaDidactica();}else if(!this.screenSubUnitStart.state.isVisible){this.screenSubUnitIndicators.onStartButtonClick();}else{//Si es tá en modo pseudo editar (navega en editar pero no tiene permisos para ciertas actividades). Miramos en la url si está en editar.
var isInPseudoeditar=(0,_getUrlParameters.getUrlParameters)()['editar']=='1';if(isInPseudoeditar){document.location.href=this.book.url.replace('editar=0','editar=1');}else{document.location.href=this.book.url+'#unit_'+this.unit.id;}}}else{if(!this.screenSubUnitStart.state.isVisible){this.screenSubUnitIndicators.onStartButtonClick();}else{//Si es tá en modo pseudo editar (navega en editar pero no tiene permisos para ciertas actividades). Miramos en la url si está en editar.
var _isInPseudoeditar=(0,_getUrlParameters.getUrlParameters)()['editar']=='1';if(_isInPseudoeditar){document.location.href=this.book.url.replace('editar=0','editar=1');}else{//Get url from url
var url=new URL(window.location.href);var smParentUrl=url.searchParams.get("smparenturl");document.location.href=''+decodeURIComponent(smParentUrl);}}}}}},{key:'hasBlinkSlideWithSection',value:function hasBlinkSlideWithSection(section){var result=false;//l('hasBlinkSlideWithSection('+section+')');
//l(this.subUnitObject);
this.subUnitObject.sections.forEach(function(sectionObj){//l(section);
//l(sectionObj.seccion);
//l(sectionObj.seccion == section);
//l(sectionObj.hasOwnProperty('seccion'));
if(sectionObj.hasOwnProperty('seccion')&&sectionObj.seccion==section){result=true;}});return result;}}]);return ScreenSubUnit;}();exports.default=ScreenSubUnit;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<div id=sm-left-menu__background></div> <div id=sm-left-menu> <a class=sm-left-menu--book-image><strong></strong></a> <div class=\"sm-left-menu--level1 sm-color-background-color_before\"> <div class=sm-left-menu--image></div> <div class=sm-left-menu--title></div> <div class=sm-left-menu--arrow> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=10 height=16 viewBox=\"0 0 10 16\"> <path d=\"M0.413623017,0.411885438 C0.968407485,-0.137295146 1.8619621,-0.137295146 2.41674657,0.411885438 L10,7.91854035 L2.41674657,15.4251953 C1.8619621,15.9743759 0.968407485,15.9743759 0.413623017,15.4251953 C0.410269289,15.4218754 0.406932428,15.4185386 0.403612562,15.4151849 C-0.138421122,14.8676249 -0.13394118,13.9843347 0.413618791,13.442301 L5.99369679,7.91854035 L0.413618791,2.39477968 C0.410265077,2.39145982 0.40692823,2.38812296 0.403608378,2.38476923 C-0.138422971,1.83720695 -0.133939265,0.953916788 0.413623017,0.411885438 Z\"/> </svg> </div> </div> <div class=\"sm-left-menu--block sm-color-background-color_before sm-color-child-color--hover sm-color-child-color--active\"> <div class=sm-left-menu--block__header> <strong></strong> </div> <div class=sm-left-menu--block__subunits></div> </div> <a class=\"sm-left-menu--level2 sm-color-background-color--active sm-color-background-color--hover\"> <div class=sm-left-menu--image></div> <div class=sm-left-menu--title><em class=sm-color-color></em><strong></strong><small></small></div> <div class=sm-left-menu--arrow> <svg xmlns=http://www.w3.org/2000/svg width=16 height=16 viewBox=\"0 0 16 16\"> <path fill=#FFF fill-rule=evenodd d=\"M14.8256508,3.95720635 C14.1151746,2.73993651 13.1513651,1.77612698 11.9340952,1.06565079 C10.7165714,0.355174603 9.38742857,0 7.94577778,0 C6.50425397,0 5.17473016,0.355174603 3.95746032,1.06565079 C2.74006349,1.776 1.77625397,2.73980952 1.06577778,3.95720635 C0.355174603,5.17460317 0,6.50412698 0,7.94552381 C0,9.38704762 0.355301587,10.7163175 1.06565079,11.9338413 C1.77612698,13.1509841 2.73993651,14.1149206 3.95733333,14.8253968 C5.17473016,15.535873 6.50412698,15.8910476 7.94565079,15.8910476 C9.3871746,15.8910476 10.7166984,15.535873 11.9339683,14.8253968 C13.1512381,14.1150476 14.1150476,13.1511111 14.8255238,11.9338413 C15.535873,10.7164444 15.8910476,9.38692063 15.8910476,7.94552381 C15.8910476,6.504 15.535873,5.17447619 14.8256508,3.95720635 L14.8256508,3.95720635 Z M10.4596825,11.1215238 C10.5907302,11.2525714 10.6565079,11.407873 10.6565079,11.5871746 C10.6565079,11.7664762 10.5907302,11.9217778 10.4596825,12.0526984 L9.40419048,13.1081905 C9.27339683,13.2392381 9.11822222,13.3047619 8.93892063,13.3046349 C8.75949206,13.3046349 8.60431746,13.2389841 8.47314286,13.1080635 L3.77625397,8.41092063 C3.64520635,8.27987302 3.57968254,8.12469841 3.57968254,7.94539683 C3.57968254,7.76609524 3.64520635,7.61079365 3.77625397,7.47987302 L8.47314286,2.78285714 C8.60431746,2.65180952 8.75949206,2.58628571 8.93892063,2.58628571 C9.11822222,2.58628571 9.27339683,2.65180952 9.40419048,2.78285714 L10.4596825,3.83834921 C10.5907302,3.96939683 10.6565079,4.12457143 10.6565079,4.30387302 C10.6565079,4.4831746 10.5907302,4.63847619 10.4596825,4.76939683 L7.28355556,7.94552381 L10.4596825,11.1215238 L10.4596825,11.1215238 Z\" transform=\"matrix(-1 0 0 1 15.891 0)\"/> </svg> </div> </a> </div>";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(48);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(11)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 50 */
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _animejs=__webpack_require__(8);var _animejs2=_interopRequireDefault(_animejs);var _replaceStringInTemplates=__webpack_require__(1);var _replaceStringInTemplates2=_interopRequireDefault(_replaceStringInTemplates);var _perfectScrollbar=__webpack_require__(50);var _perfectScrollbar2=_interopRequireDefault(_perfectScrollbar);__webpack_require__(49);var _leftMenu=__webpack_require__(47);var _leftMenu2=_interopRequireDefault(_leftMenu);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var replaceStringInTemplates=new _replaceStringInTemplates2.default();//Scroll for left menu
//Templates
var LeftMenu=function(){function LeftMenu(data,subunitIdLoaded){_classCallCheck(this,LeftMenu);this.state={unitSelected:null,subunitSelected:null};this.data=data;this.perfectScrollbar=null;this.subunitIdLoaded=subunitIdLoaded;this.fillData();//fix para boton de blink, que cargar # y hacer que la navegación falle
var menuButton=document.querySelector('.libro-left-button a');if(menuButton)menuButton.addEventListener('click',function(e){e.preventDefault();});}_createClass(LeftMenu,[{key:'fillData',value:function fillData(){var _this=this;document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend',_leftMenu2.default);var bookImageDomElement=document.querySelector('#sm-left-menu .sm-left-menu--book-image');var level1DomElement=document.querySelector('#sm-left-menu .sm-left-menu--level1');var level2BlockDomElement=document.querySelector('#sm-left-menu .sm-left-menu--block');var level2DomElement=document.querySelector('#sm-left-menu .sm-left-menu--level2');document.querySelector('#sm-left-menu .sm-left-menu--level1').remove();document.querySelector('#sm-left-menu .sm-left-menu--block').remove();document.querySelector('#sm-left-menu .sm-left-menu--level2').remove();var ulLevel1DomElement=document.createElement('ul');//onsole.log(window.smBookBackgroundImage);
//Image an title
bookImageDomElement.style.backgroundImage='url('+window.smBookBackgroundImage+')';bookImageDomElement.querySelector('strong').innerText=this.data.title;bookImageDomElement.setAttribute('href',this.data.url);//Units
this.data.units.forEach(function(unit){var unitElement=level1DomElement.cloneNode(true);if(unit.smIsProyect){unitElement.classList.add('sm-left-menu--level1--proyecto');}var unitImage=unit.image.search('../themes/responsive/images')>-1?window.smDefaultBackgroundImage:unit.image;unitElement.querySelector('.sm-left-menu--image').style.backgroundImage='url('+unitImage+')';var numberformenu=unit.numberformenu==''?'':('0'+unit.numberformenu).slice(-2);unitElement.querySelector('.sm-left-menu--title').innerHTML='<div class="sm-left-menu--proyect_description sm-color-color">'+unit.description+'</div><span>'+numberformenu+'</span> '+unit.title;unitElement.addEventListener('click',_this.toggleUnit.bind(_this));var liElement=document.createElement('li');liElement.appendChild(unitElement);//Subunits
var suUlElement=document.createElement('ul');//Is we are in subunit page
var isLoadedSubunitIncluded=false;unit.blocks.forEach(function(block){var blockElement=level2BlockDomElement.cloneNode(true);if(block.headerSubUnit.data.title){blockElement.querySelector('.sm-left-menu--block__header strong').innerText=block.headerSubUnit.data.title;}else{blockElement.classList.add('sm-left-menu--block--no-title');}block.subUnits.forEach(function(subunit,index){var subUnitElement=level2DomElement.cloneNode(true);subUnitElement.setAttribute('id','leftmenu-subunit-'+subunit.data.id);if(subunit.data.image){subUnitElement.querySelector('.sm-left-menu--image').style.backgroundImage='url('+subunit.data.image+')';}//subUnitElement.querySelector('.sm-left-menu--title').innerHTML = `<span>${('0' + (index + 1)).slice(-2)}</span> ${subunit.data.title}`;
subUnitElement.setAttribute('href',subunit.data.url);if(_this.subunitIdLoaded==subunit.data.id){subUnitElement.classList.add('active');isLoadedSubunitIncluded=true;}blockElement.querySelector('.sm-left-menu--block__subunits').appendChild(subUnitElement);});var suLiElement=document.createElement('li');suLiElement.appendChild(blockElement);suUlElement.appendChild(suLiElement);});liElement.appendChild(suUlElement);if(isLoadedSubunitIncluded){unitElement.classList.add('active');}ulLevel1DomElement.appendChild(liElement);});document.querySelector('#sm-left-menu').appendChild(ulLevel1DomElement);document.querySelector('#sm-left-menu__background').addEventListener('click',this.closeMenu);this.updateSubUnitsNumbers();this.perfectScrollbar=new _perfectScrollbar2.default('#sm-left-menu',{// wheelSpeed: 2,
// wheelPropagation: true,
minScrollbarLength:20});}},{key:'toggleUnit',value:function toggleUnit(e){var _this2=this;//If is active
var target=e.currentTarget;if(target.classList.contains('active')){target.classList.remove('active');var ulElement=target.parentNode.getElementsByTagName('ul')[0];ulElement.style.height='0px';}else{var _ulElement=target.parentNode.getElementsByTagName('ul')[0];// let ulChildrenNumber = 0;
var heightMax=0;_.forEach(_ulElement.children,function(child){if(!child.querySelector('a').classList.contains('sm-ocultar')){// ulChildrenNumber++;
heightMax+=child.offsetHeight+16;}});// var heightMax = ulChildrenNumber * 80;
_ulElement.style.height=heightMax+'px';target.classList.add('active');setTimeout(function(){_ulElement.style.height='auto';},300);}setTimeout(function(){_this2.perfectScrollbar.update();},500);}},{key:'openMenu',value:function openMenu(){document.querySelector('#sm-left-menu').classList.add('active');(0,_animejs2.default)({targets:'#sm-left-menu__background',opacity:[0,1],duration:200,easing:_config2.default.easingTransitionOut,begin:function begin(anim){var _this3=this;document.getElementById('sm-left-menu__background').style.display='block';setTimeout(function(){_this3.perfectScrollbar.update();},300);}});}},{key:'closeMenu',value:function closeMenu(){document.querySelector('#sm-left-menu').classList.remove('active');(0,_animejs2.default)({targets:'#sm-left-menu__background',opacity:[1,0],duration:200,easing:_config2.default.easingTransitionOut,complete:function complete(anim){document.getElementById('sm-left-menu__background').style.display='none';}});}},{key:'toggleMenu',value:function toggleMenu(){var active=document.querySelector('#sm-left-menu').classList.contains('active');if(active){document.querySelector('#sm-left-menu').classList.remove('active');(0,_animejs2.default)({targets:'#sm-left-menu__background',opacity:[1,0],duration:200,easing:_config2.default.easingTransitionOut,complete:function complete(anim){document.getElementById('sm-left-menu__background').style.display='none';}});}else{this.updateSubUnitsNumbers();document.querySelector('#sm-left-menu').classList.add('active');(0,_animejs2.default)({targets:'#sm-left-menu__background',opacity:[0,1],duration:200,easing:_config2.default.easingTransitionOut,begin:function begin(anim){document.getElementById('sm-left-menu__background').style.display='block';}});}return!active;}},{key:'updateSubUnitsNumbers',value:function updateSubUnitsNumbers(){this.data.units.forEach(function(unit){unit.blocks.forEach(function(block){block.subUnits.forEach(function(subunit){var subUnitElement=document.getElementById('leftmenu-subunit-'+subunit.data.id);// const number = subunit.data.numberformenu == '' ? '' : ('0' + subunit.data.numberformenu).slice(-2);
subUnitElement.querySelector('.sm-left-menu--title em').innerHTML=''+subunit.data.description;subUnitElement.querySelector('.sm-left-menu--title strong').innerHTML=''+subunit.data.title;var tipoTexto='';switch(subunit.data.smtype){case'flipped':tipoTexto=replaceStringInTemplates.replace('--santillana_microcontenidos_flipped--');break;case'microproyecto':tipoTexto=replaceStringInTemplates.replace('--santillana_microcontenidos_microproyecto--');break;case'esencial':tipoTexto=replaceStringInTemplates.replace('--santillana_microcontenidos_esencial--');//Es básica, pero se deja esencial por retrocompatibilidad
break;case'basica':tipoTexto=replaceStringInTemplates.replace('--santillana_microcontenidos_basica--');break;case'ninguna':tipoTexto=replaceStringInTemplates.replace('--santillana_microcontenidos_ninguna--');break;case'reto':tipoTexto=replaceStringInTemplates.replace('--santillana_microcontenidos_reto--');break;case'reto':tipoTexto=replaceStringInTemplates.replace('--santillana_microcontenidos_reto--');break;default:tipoTexto=replaceStringInTemplates.replace('--santillana_microcontenidos_estandar--');}subUnitElement.querySelector('.sm-left-menu--title small').innerHTML=''+tipoTexto.toLowerCase();});});});}}]);return LeftMenu;}();exports.default=LeftMenu;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ImagesPreload=function(){function ImagesPreload(){_classCallCheck(this,ImagesPreload);this.image=[];}_createClass(ImagesPreload,[{key:'add',value:function add(imagesToLoad){if(typeof imagesToLoad=='string'){imagesToLoad=[imagesToLoad];}imagesToLoad.forEach(function(imageToLoad){var newImage=new Image();newImage.src=imageToLoad;});}}]);return ImagesPreload;}();exports.default=ImagesPreload;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "<div id=sm-modal--student-no--access class=sm-modal> <div class=sm-modal__background></div> <div class=sm-modal__modal> <div class=sm-modal__content> <div class=sm-modal__content__icon> <svg width=64px height=64px viewBox=\"0 0 64 64\" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g id=MODO-VER stroke=none stroke-width=1 fill=none fill-rule=evenodd> <g id=3_alumno-alerta transform=\"translate(-628.000000, -99.000000)\"> <rect fill=#FFFFFF x=0 y=0 width=1600 height=900></rect> <g id=Group-4 transform=\"translate(582.000000, 53.000000)\"> <g id=i-/-candado transform=\"translate(46.000000, 46.000000)\"> <g id=Group-20> <g id=Group-19> <path d=\"M24.3810786,0 C12.9080572,0 3.55555556,9.27100006 3.55555556,20.6443193 L3.55555556,32.1550239 C3.55555556,33.2061835 4.38849065,34.031746 5.4487505,34.031746 L13.0216565,34.031746 C14.0820426,34.031746 14.9148514,33.2060583 14.9148514,32.1550239 L14.9148514,20.6443193 C14.9148514,15.464471 19.1556384,11.2605833 24.3809524,11.2605833 C29.6062664,11.2605833 33.8470533,15.464471 33.8470533,20.6443193 L33.8470533,24.3977637 C33.8470533,25.4489233 34.6799884,26.2744859 35.7402483,26.2744859 L43.3131543,26.2744859 C44.3735403,26.2744859 45.2063492,25.4487982 45.2063492,24.3977637 L45.2063492,20.6443193 C45.2066016,9.27100006 35.8541,0 24.3810786,0\" id=Fill-1 fill=#C8C6CD></path> <path d=\"M43.1353821,29.968254 L5.62639767,29.968254 C2.51298592,29.968254 0,32.5017243 0,35.6402326 L0,58.3280213 C0,61.4666557 2.51298592,64 5.62639767,64 L43.1355071,64 C46.2489188,64 48.7619048,61.4666557 48.7619048,58.3280213 L48.7619048,35.6402326 C48.7617797,32.5017243 46.2487938,29.968254 43.1353821,29.968254\" id=Fill-3 fill=#FEA832></path> <path d=\"M45.2063492,20.7529153 L45.2063492,24.5261041 C45.2063492,25.5827931 44.3734141,26.4126984 43.3131543,26.4126984 L35.7402483,26.4126984 C34.6798622,26.4126984 33.8470533,25.5826673 33.8470533,24.5261041 L33.8470533,20.7529153 C33.8470533,15.5458193 29.6062664,11.3198177 24.3809524,11.3198177 L24.3809524,0 C35.8538475,0 45.2063492,9.3197686 45.2063492,20.7529153\" id=Fill-5 fill=#AEADB3></path> <path d=\"M53.8583417,19.247522 L61.3031294,15.4614141 C63.5117362,14.3425447 65.1568683,17.7349973 62.9679913,18.8483134 L55.5232036,22.6344213 C53.3123633,23.7512714 51.668472,20.361343 53.8583417,19.247522\" id=Fill-7 fill=#159CE4></path> <path d=\"M61.3038134,41.4250067 L53.8587881,37.6402663 C51.6681039,36.5266324 53.31242,33.1372844 55.5237031,34.2547032 L62.9687284,38.0393174 C65.143405,39.1450031 63.5375568,42.5528969 61.3038134,41.4250067\" id=Fill-9 fill=#159CE4></path> <path d=\"M62.1491797,29.968254 L54.6762172,29.968254 C52.2135038,29.968254 52.2034148,26.4126984 54.6762172,26.4126984 L62.1491797,26.4126984 C64.611893,26.4125799 64.621982,29.968254 62.1491797,29.968254\" id=Fill-11 fill=#159CE4></path> <path d=\"M48.7619048,35.6402326 L48.7619048,58.3280213 C48.7619048,61.4666557 46.2489124,64 43.1354927,64 L24.3809524,64 L24.3809524,29.968254 L43.1354927,29.968254 C46.2489124,29.968254 48.7619048,32.5017243 48.7619048,35.6402326\" id=Fill-13 fill=#FE8821></path> <path d=\"M29.968254,43.2254094 C29.968254,45.668698 28.4039536,47.7358455 26.2433862,48.5250903 L26.2433862,54.5016249 C26.2433862,55.742189 25.3121072,56.3809524 24.3809524,56.3809524 C23.4497975,56.3809524 22.5185185,55.7420637 22.5185185,54.5016249 L22.5185185,48.5250903 C20.3579512,47.7358455 18.7936508,45.668698 18.7936508,43.2254094 C18.7936508,40.1055177 21.2892302,37.5873016 24.3810766,37.5873016 C27.4729229,37.5873016 29.968254,40.105643 29.968254,43.2254094\" id=Fill-15 fill=#787780></path> <path d=\"M29.968254,43.2254094 C29.968254,45.668698 28.4039536,47.7358455 26.2433862,48.5250903 L26.2433862,54.5016249 C26.2433862,55.742189 25.3121072,56.3809524 24.3809524,56.3809524 L24.3809524,37.5873016 C27.4726745,37.5873016 29.968254,40.105643 29.968254,43.2254094\" id=Fill-17 fill=#57555C></path> </g> </g> </g> </g> </g> </g> </svg> </div> <div class=sm-modal__content__text> <p>--Tu profesor no ha dado permisos de acceso a este contenido--</p> </div> </div> <div class=sm-modal__actions> <div class=sm-modal__button>--Aceptar--</div> </div> </div> </div>";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _responsiveStatus=__webpack_require__(7);var _responsiveStatus2=_interopRequireDefault(_responsiveStatus);var _animejs=__webpack_require__(8);var _animejs2=_interopRequireDefault(_animejs);var _jsCookie=__webpack_require__(6);var _jsCookie2=_interopRequireDefault(_jsCookie);__webpack_require__(13);var _debug=__webpack_require__(2);var _dropdown=__webpack_require__(10);var _dropdown2=_interopRequireDefault(_dropdown);var _modalStudentNoAccess=__webpack_require__(53);var _modalStudentNoAccess2=_interopRequireDefault(_modalStudentNoAccess);var _replaceStringInTemplates=__webpack_require__(1);var _replaceStringInTemplates2=_interopRequireDefault(_replaceStringInTemplates);var _blinkFunctions=__webpack_require__(5);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var replaceStringInTemplates=new _replaceStringInTemplates2.default();var ScreenUnit=function(){function ScreenUnit(){_classCallCheck(this,ScreenUnit);this.state={started:false};this.goto=null;this.unit=null;this.responsiveStatus=null;}_createClass(ScreenUnit,[{key:'init',value:function init(_ref){var _this=this;var data=_ref.data,goTo=_ref.goTo;//onsole.log("Units menu init");
if(!this.started){this.goTo=goTo;// this.responsiveStatus = new responsiveStatus(this.updateSlider.bind(this));
}this.started=true;this.unit=data.unit;this.actionUpdateSubunitOcultar=data.actionUpdateSubunitOcultar;var unitElement=document.getElementById('sm-unit');// Background
var unitImage=this.unit.image.search('../themes/responsive/images')>-1?window.smDefaultBackgroundImage:this.unit.image;document.querySelector('.sm-unit__header_background__content').style.backgroundImage='url('+unitImage+')';document.querySelector('.sm-unit__header__proyecto_imagen').style.backgroundImage='url('+unitImage+')';// Header
var headerElement=unitElement.getElementsByClassName('sm-unit__header')[0];if(this.unit.smIsProyect){headerElement.querySelector('.sm-unit__header__content').classList.add('sm-unit__header__content--proyecto');unitElement.querySelector('.sm-unit__header_background__content').classList.add('sm-unit__header_background__content--proyecto');}else{headerElement.querySelector('.sm-unit__header__content').classList.remove('sm-unit__header__content--proyecto');unitElement.querySelector('.sm-unit__header_background__content').classList.remove('sm-unit__header_background__content--proyecto');}headerElement.querySelector('.sm-unit__header__number').innerHTML=this.unit.numberformenu;if(this.unit.description){headerElement.querySelector('.sm-unit__header__description').innerHTML=this.unit.description;}headerElement.querySelector('.sm-unit__header__title').innerHTML=this.unit.title;var completed=this.unit.completado||0;headerElement.querySelector('.sm-unit__header__progress__title').innerHTML=completed+'% '+replaceStringInTemplates.replace('--Completado--');headerElement.querySelector('.sm-unit__header__progress .sm-color-background-color').style.width=completed+'%';//Resources button
if(this.unit.resourcesmain.length>0){headerElement.querySelector('.sm-unit__header__resources_button').style.display='';headerElement.querySelector('.sm-unit__header__resources_button').removeEventListener('click',this.scrollToResources);headerElement.querySelector('.sm-unit__header__resources_button').addEventListener('click',this.scrollToResources);}else{headerElement.querySelector('.sm-unit__header__resources_button').style.display='none';}// Main activities
var mainActivitiesContainer=unitElement.querySelector('.sm-unit__activities__main');while(mainActivitiesContainer.firstChild){mainActivitiesContainer.removeChild(mainActivitiesContainer.firstChild);}var blockTemplate=document.querySelector('#sm-unit__block--template');var mainActivityTemplate=document.querySelector('#sm-unit__activity_main--template');// this.unit.subunitsmain.forEach((subunit, index) => {
_.forEach(this.unit.blocks,function(block){//l('block')
//l(block)
// 
var blockElement=blockTemplate.cloneNode(true);blockElement.removeAttribute('id');blockElement.setAttribute('id','block-'+block.id);if(!block.id){blockElement.querySelector('.sm-unit__block__send_link').style.display='none';}blockElement.querySelector('.sm-unit__block__title').innerText=block.headerSubUnit.data.title;blockElement.querySelector('.sm-unit__block__send_link').addEventListener('click',function(){openSendActivityHomework(block.headerSubUnit.data.id,1);});if(block.headerSubUnit.data.title.trim().length===0){blockElement.classList.add('sm-unit__block--no-title');}_.forEach(block.subUnits,function(subunitData){var subunit=subunitData.data;//l("subunit")
//l(subunit)
var activityElement=mainActivityTemplate.cloneNode(true);activityElement.removeAttribute('id');activityElement.setAttribute('id','subunit-'+subunit.id);//Si es alumno y el candado está bloqueado
////l(subunit.lock);
if(subunit.lock==8&&(0,_blinkFunctions.esAlumno)()){activityElement.getElementsByTagName('a')[0].setAttribute('href','#');activityElement.getElementsByTagName('a')[0].addEventListener('click',function(e){e.preventDefault();_this.showStudentNoAccessModal();});}else{if((typeof blink==='undefined'?'undefined':_typeof(blink))=='object'&&blink.isApp){activityElement.getElementsByTagName('a')[0].addEventListener('click',function(e){//eval(subunit.onclickTitle);
e.preventDefault();blink.goToActivity(idcurso,subunit.id);});activityElement.getElementsByTagName('a')[0].setAttribute('href','#');}else{activityElement.getElementsByTagName('a')[0].setAttribute('href',''+subunit.url);}}if(subunit.ocultar){activityElement.classList.add('sm-ocultar');}//add action to checkbox
activityElement.querySelector('.sm-unit__activity_main__checkbox').addEventListener('click',function(e){if(typeof blink.theme.updateVisibleActivity!='undefined'){//l(`Lanzando función blink.theme.updateVisibleActivity(${subunit.id})`);
blink.theme.updateVisibleActivity(subunit.id,activityElement.classList.contains('sm-ocultar')?1:0);}if(activityElement.classList.contains('sm-ocultar')){activityElement.classList.remove('sm-ocultar');_this.actionUpdateSubunitOcultar(subunit.id,false);}else{activityElement.classList.add('sm-ocultar');_this.actionUpdateSubunitOcultar(subunit.id,true);}//this.updateSubUnitsNumbers();
e.preventDefault();});// if(parseInt(subunit.level)>1){
// 	activityElement.classList.add('sm-unit__activity_main--indent');
// }
var subunitImage=subunit.image.search('../themes/responsive/images')>-1?window.smDefaultBackgroundImage:subunit.image.length<3?window.smDefaultBackgroundImage:subunit.image;activityElement.querySelector('.sm-unit__activity_main__image').style.backgroundImage='url('+subunitImage+')';// if(subunit.smtype){
activityElement.querySelector('.sm-unit__activity_main__title').innerHTML=subunit.title;var tipoTexto='';tipoTexto=replaceStringInTemplates.replace('--santillana_microcontenidos_'+subunit.smtype+'--');activityElement.querySelector('.sm-unit__activity_main__type').innerHTML=tipoTexto;activityElement.querySelector('.sm-unit__activity_main__description').innerHTML=subunit.description;// } else {
// 	activityElement.querySelector('.sm-unit__activity_main__title').innerHTML = subunit.title;
// 	activityElement.querySelector('.sm-unit__activity_main__description').innerHTML = subunit.description;
// }
// activityElement.querySelector('.sm-unit__activity_main__title--sin-tag').innerHTML = subunit.title;
// activityElement.querySelector('.sm-unit__activity_main__type--con-tag').innerHTML = replaceStringInTemplates.replace('--Microcontenido--');
// paginas de cada subunidad
activityElement.querySelector('.sm-unit__activity_main__actions__pages').innerText=subunit.pags+' '+replaceStringInTemplates.replace('--pag--');activityElement.querySelector('.sm-unit__activity_main__actions__send_link').addEventListener('click',function(){openSendActivityHomework(subunit.id,1);});var colorCandado='azul';switch(subunit.lock){case 8:activityElement.querySelector('.sm-unit__activity_main__actions__candado').classList.add('sm-unit__activity_main__actions__candado--cerrado');break;case 16:activityElement.querySelector('.sm-unit__activity_main__actions__candado').classList.add('sm-unit__activity_main__actions__candado--abierto');break;case 2:activityElement.querySelector('.sm-unit__activity_main__actions__candado').classList.add('sm-unit__activity_main__actions__candado--cerrado');activityElement.querySelector('.sm-unit__activity_main__actions__candado').classList.add('sm-unit__activity_main__actions__candado--amarillo');colorCandado='amarillo';break;case 4:activityElement.querySelector('.sm-unit__activity_main__actions__candado').classList.add('sm-unit__activity_main__actions__candado--abierto');activityElement.querySelector('.sm-unit__activity_main__actions__candado').classList.add('sm-unit__activity_main__actions__candado--amarillo');colorCandado='amarillo';break;default:break;}activityElement.querySelector('.sm-unit__activity_main__actions__candado').dataset.idActividad=subunit.id;if((0,_blinkFunctions.esProfesor)()||(0,_blinkFunctions.esEditorOMas)()){switch(colorCandado){case'azul':activityElement.querySelector('.sm-unit__activity_main__actions__candado').addEventListener('click',_this.onCandadoAzulClick.bind(_this));break;case'amarillo':activityElement.querySelector('.sm-unit__activity_main__actions__candado').addEventListener('click',_this.onCandadoAmarilloClick.bind(_this));break;default:break;}}var completed=subunit.completado||0;activityElement.querySelector('.sm-unit__activity_main__progress__title').innerHTML=completed+'%';activityElement.querySelector('.sm-unit__activity_main__progress__bar .sm-color-background-color').style.width=completed+'%';//onsole.log(blockElement)
//onsole.log(blockElement.querySelector('.sm-unit__block__subunits'))
blockElement.querySelector('.sm-unit__block__subunits').appendChild(activityElement);});mainActivitiesContainer.appendChild(blockElement);block.containerDomElement=blockElement;//Add eventes
blockElement.querySelector('.sm-block-toggle').addEventListener('click',_this.toggle.bind(_this,block));if(_jsCookie2.default.get('block_ver_'+block.id+'_closed')){blockElement.classList.add('sm-unit__block--closed');$(blockElement.querySelector('.sm-unit__block__subunits')).slideUp(0);}//Change block title opacity when all activities are not visible. 
var updateBlockTitleVisibility=function updateBlockTitleVisibility(target){//onsole.log(target)
if(target.parentElement){var isVisible=false;var blockDom=target.parentElement.parentElement;var blockItemsDom=blockDom.querySelectorAll('.sm-unit__activity_main');_.forEach(blockItemsDom,function(blockItemDom){if(!blockItemDom.classList.contains('sm-ocultar')){isVisible=true;}});if(isVisible){blockDom.classList.remove('sm-ocultar');}else{blockDom.classList.add('sm-ocultar');}}};var unitsToObserve=document.querySelectorAll('.sm-unit__activities__main .sm-unit__block .sm-unit__block__subunits .sm-unit__activity_main');_.forEach(unitsToObserve,function(unitDom){var blockVisibilityObserver=new MutationObserver(function(mutationsList,observer){var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=mutationsList[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var mutation=_step.value;updateBlockTitleVisibility(mutation.target);}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}});blockVisibilityObserver.observe(unitDom,{attributes:true,childList:false,subtree:false});updateBlockTitleVisibility(unitDom);});});// Aside activities
//Dropdown
// const asideDropdown = new Dropdown();
// asideDropdown.init(document.querySelector('.sm-unit__activities__aside__dropdown'));
// _.forEach(document.querySelectorAll('.sm-unit__activities__aside__dropdown ul li'), opcion => {
// 	if(!opcion.classList.contains('js-option-enabled')){
// 		opcion.addEventListener('click', this.filterResources.bind(this, opcion.dataset.name));
// 		opcion.classList.add('js-option-enabled');
// 	}
// });
// const dropDownDefaultText = document.querySelector('.sm-unit__activities__aside__dropdown ul li:first-child').innerHTML;
// document.querySelector('.sm-unit__activities__aside__dropdown>div>span').innerHTML = dropDownDefaultText;
var asideActivitiesContainer=unitElement.querySelector('.sm-unit__activities__aside');while(asideActivitiesContainer.firstChild){asideActivitiesContainer.removeChild(asideActivitiesContainer.firstChild);}var asideActivityTemplate=document.querySelector('#sm-unit__activity_aside--template');//onsole.log(this.unit.resourcesmain)
//onsole.log(this.unit.resourcesmain.length)
if(this.unit.resourcesmain.length===0){unitElement.querySelector('.sm-unit__activities__aside_container').classList.add('sm-ocultar');}else{unitElement.querySelector('.sm-unit__activities__aside_container').classList.remove('sm-ocultar');}_.forEach(this.unit.resourcesmain,function(subunit,index){var activityElement=asideActivityTemplate.cloneNode(true);activityElement.removeAttribute('id');if(subunit.lock==8&&(0,_blinkFunctions.esAlumno)()){activityElement.getElementsByTagName('a')[0].setAttribute('href','#');activityElement.getElementsByTagName('a')[0].addEventListener('click',function(e){e.preventDefault();_this.showStudentNoAccessModal();});}else{if((typeof blink==='undefined'?'undefined':_typeof(blink))=='object'&&blink.isApp){activityElement.getElementsByTagName('a')[0].addEventListener('click',function(e){//eval(subunit.onclickTitle);
e.preventDefault();blink.goToActivity(idcurso,subunit.id);});activityElement.getElementsByTagName('a')[0].setAttribute('href','#');}else{activityElement.getElementsByTagName('a')[0].setAttribute('href',''+subunit.url);}}var subunitImage=subunit.image.search('../themes/responsive/images')>-1?window.smDefaultBackgroundImage:subunit.image.length<3?window.smDefaultBackgroundImage:subunit.image;activityElement.querySelector('.sm-unit__activity_aside__image').style.backgroundImage='url('+subunitImage+')';activityElement.dataset.tags=subunit.tag+' '+subunit.tags;if(subunit.smtype){activityElement.querySelector('.sm-unit__activity_aside__title--con-tag').innerHTML=subunit.title;var tipoTexto='';switch(subunit.smtype){case'flipped':tipoTexto=replaceStringInTemplates.replace('--santillana_microcontenidos_flipped--');break;case'microproyecto':tipoTexto=replaceStringInTemplates.replace('--santillana_microcontenidos_microproyecto--');break;case'basica':tipoTexto=replaceStringInTemplates.replace('--santillana_microcontenidos_basica--');break;case'reto':tipoTexto=replaceStringInTemplates.replace('--santillana_microcontenidos_reto--');break;default:break;}activityElement.querySelector('.sm-unit__activity_aside__type--con-tag').innerHTML=tipoTexto;// activityElement.querySelector('.sm-unit__activity_aside__description--con-tag').innerHTML = subunit.description;
}else{activityElement.querySelector('.sm-unit__activity_aside__title--sin-tag').innerHTML=subunit.title;activityElement.querySelector('.sm-unit__activity_aside__description--sin-tag').innerHTML=subunit.description;}// activityElement.querySelector('.sm-unit__activity_aside__title').innerHTML = subunit.title;
// activityElement.querySelector('.sm-unit__activity_aside__type').innerHTML = tipoTexto;
var completed=subunit.completado||0;activityElement.querySelector('.sm-unit__activity_aside__progress__title').innerHTML=completed+'% '+replaceStringInTemplates.replace('Completado');activityElement.querySelector('.sm-unit__activity_aside__progress .sm-color-background-color').style.width=completed+'%';asideActivitiesContainer.appendChild(activityElement);});}// updateSubUnitsNumbers(){
// 	// let subUnitNumber = 0;
// 	this.unit.subunitsmain.forEach(subunit => {
// 		const activityElement = document.getElementById(`subunit-${subunit.id}`);
// 		activityElement.querySelector('.sm-unit__activity_main__number').innerHTML = subunit.numberformenu;
// 	});
// }
},{key:'processHash',value:function processHash(hashParts){return{is:hashParts[0]=='#unit'&&parseInt(hashParts[1])>0&&hashParts.length==2,data:{id:hashParts[1]}};}},{key:'transformInputData',value:function transformInputData(inputData,data){var screenData={unit:_.find(data.units,{id:inputData.id}),actionUpdateSubunitOcultar:data.actionUpdateSubunitOcultar};return screenData;}},{key:'onBackButton',value:function onBackButton(){this.disable();this.goTo('#');}},{key:'disable',value:function disable(){//document.querySelector('#sm-units-menu').classList.remove('active');
}},{key:'scrollToResources',value:function scrollToResources(){var scrollElement=document.querySelector('.sm-content--scrolled');var resourcesContent=scrollElement.querySelector('.sm-unit__activities__aside_container');var resourcesContentRect=resourcesContent.getBoundingClientRect();var scrollTop=window.pageYOffset||document.documentElement.scrollTop;var resourcesContentTop=resourcesContentRect.top+scrollTop-64;(0,_animejs2.default)({targets:scrollElement,scrollTop:resourcesContentTop,duration:500,easing:'easeInOutQuad'});}},{key:'filterResources',value:function filterResources(){var filterTag=arguments[0];//hide dropdown
document.querySelector('.sm-unit__activities__aside__dropdown').classList.remove('active');//change dropdown selected label
var liOptionElement=document.querySelector('.sm-unit__activities__aside__dropdown ul li[data-name="'+filterTag+'"]');document.querySelector('.sm-unit__activities__aside__dropdown>div>span').innerHTML=liOptionElement.innerHTML;// filter
_.forEach(document.querySelectorAll('.sm-unit__activities__aside .sm-unit__activity_aside'),function(resourceElement){var tags=resourceElement.dataset.tags||'';if(filterTag=='all'||tags.search(filterTag)>-1){resourceElement.classList.remove('filter-hidden');}else{resourceElement.classList.add('filter-hidden');}});}},{key:'onCandadoAzulClick',value:function onCandadoAzulClick(e){var _this2=this;e.preventDefault();var idActividad=e.currentTarget.dataset.idActividad;e.currentTarget.classList.add('sm-unit__activity_main__actions__candado--loading');blink.theme.onCursoCambiarBloqueado(idActividad,idcurso,function(data){_this2.updateCandandoAzul(data,idActividad);});}},{key:'onCandadoAmarilloClick',value:function onCandadoAmarilloClick(e){e.preventDefault();var idActividad=e.currentTarget.dataset.idActividad;blink.theme.onCursoCambiarTipoAcceso(idActividad);this.updateCandandoAmarillo(idActividad);}},{key:'updateCandandoAzul',value:function updateCandandoAzul(data,idActividad){var elementCandado=document.querySelector('.sm-unit__activity_main__actions__candado[data-id-actividad="'+idActividad+'"]');switch(data){case'lock':elementCandado.classList.remove('sm-unit__activity_main__actions__candado--abierto');elementCandado.classList.add('sm-unit__activity_main__actions__candado--cerrado');break;case'unlock':elementCandado.classList.remove('sm-unit__activity_main__actions__candado--cerrado');elementCandado.classList.add('sm-unit__activity_main__actions__candado--abierto');break;default:break;}elementCandado.classList.remove('sm-unit__activity_main__actions__candado--loading');}},{key:'updateCandandoAmarillo',value:function updateCandandoAmarillo(idActividad){var elementCandado=document.querySelector('.sm-unit__activity_main__actions__candado[data-id-actividad="'+idActividad+'"]');if(elementCandado.classList.contains('sm-unit__activity_main__actions__candado--abierto')){elementCandado.classList.remove('sm-unit__activity_main__actions__candado--abierto');elementCandado.classList.add('sm-unit__activity_main__actions__candado--cerrado');}else{elementCandado.classList.remove('sm-unit__activity_main__actions__candado--cerrado');elementCandado.classList.add('sm-unit__activity_main__actions__candado--abierto');}}},{key:'showStudentNoAccessModal',value:function showStudentNoAccessModal(){//Insert in html
document.getElementById('santillana_microcontenidos_menu').insertAdjacentHTML('beforeend',replaceStringInTemplates.replace(_modalStudentNoAccess2.default));//AddActions
document.querySelector('#sm-modal--student-no--access .sm-modal__button').addEventListener('click',this.hideStudentNoAccessModal.bind(this));//animate
setTimeout(function(){document.querySelector('#sm-modal--student-no--access').classList.add('active');},1);}},{key:'hideStudentNoAccessModal',value:function hideStudentNoAccessModal(){document.querySelector('#sm-modal--student-no--access').classList.remove('active');setTimeout(function(){document.querySelector('#sm-modal--student-no--access').remove();},400);}},{key:'toggle',value:function toggle(block,e){if(block.containerDomElement.classList.contains('sm-unit__block--closed')){block.containerDomElement.classList.remove('sm-unit__block--closed');_jsCookie2.default.remove('block_ver_'+block.id+'_closed');$(block.containerDomElement.querySelector('.sm-unit__block__subunits')).slideDown(300);}else{block.containerDomElement.classList.add('sm-unit__block--closed');_jsCookie2.default.set('block_ver_'+block.id+'_closed','true',{expires:1});$(block.containerDomElement.querySelector('.sm-unit__block__subunits')).slideUp(300);}}}]);return ScreenUnit;}();exports.default=ScreenUnit;

/***/ }),
/* 55 */
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, ".tns-outer{padding:0 !important}.tns-outer [hidden]{display:none !important}.tns-outer [aria-controls],.tns-outer [data-action]{cursor:pointer}.tns-slider{-webkit-transition:all 0s;-moz-transition:all 0s;transition:all 0s}.tns-slider>.tns-item{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.tns-horizontal.tns-subpixel{white-space:nowrap}.tns-horizontal.tns-subpixel>.tns-item{display:inline-block;vertical-align:top;white-space:normal}.tns-horizontal.tns-no-subpixel:after{content:'';display:table;clear:both}.tns-horizontal.tns-no-subpixel>.tns-item{float:left}.tns-horizontal.tns-carousel.tns-no-subpixel>.tns-item{margin-right:-100%}.tns-no-calc{position:relative;left:0}.tns-gallery{position:relative;left:0;min-height:1px}.tns-gallery>.tns-item{position:absolute;left:-100%;-webkit-transition:transform 0s, opacity 0s;-moz-transition:transform 0s, opacity 0s;transition:transform 0s, opacity 0s}.tns-gallery>.tns-slide-active{position:relative;left:auto !important}.tns-gallery>.tns-moving{-webkit-transition:all 0.25s;-moz-transition:all 0.25s;transition:all 0.25s}.tns-autowidth{display:inline-block}.tns-lazy-img{-webkit-transition:opacity 0.6s;-moz-transition:opacity 0.6s;transition:opacity 0.6s;opacity:0.6}.tns-lazy-img.tns-complete{opacity:1}.tns-ah{-webkit-transition:height 0s;-moz-transition:height 0s;transition:height 0s}.tns-ovh{overflow:hidden}.tns-visually-hidden{position:absolute;left:-10000em}.tns-transparent{opacity:0;visibility:hidden}.tns-fadeIn{opacity:1;filter:alpha(opacity=100);z-index:0}.tns-normal,.tns-fadeOut{opacity:0;filter:alpha(opacity=0);z-index:-1}.tns-vpfix{white-space:nowrap}.tns-vpfix>div,.tns-vpfix>li{display:inline-block}.tns-t-subp2{margin:0 auto;width:310px;position:relative;height:10px;overflow:hidden}.tns-t-ct{width:2333.3333333%;width:-webkit-calc(100% * 70 / 3);width:-moz-calc(100% * 70 / 3);width:calc(100% * 70 / 3);position:absolute;right:0}.tns-t-ct:after{content:'';display:table;clear:both}.tns-t-ct>div{width:1.4285714%;width:-webkit-calc(100% / 70);width:-moz-calc(100% / 70);width:calc(100% / 70);height:10px;float:left}\n", ""]);

// exports


/***/ }),
/* 57 */
/***/ (function(module, exports) {

// ChildNode.remove
if(!("remove" in Element.prototype)){
  Element.prototype.remove = function(){
    if(this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// Object.keys
if (!Object.keys) {
  Object.keys = function(object) {
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _responsiveStatus=__webpack_require__(7);var _responsiveStatus2=_interopRequireDefault(_responsiveStatus);var _tinySlider=__webpack_require__(15);__webpack_require__(13);var _replaceStringInTemplates=__webpack_require__(1);var _replaceStringInTemplates2=_interopRequireDefault(_replaceStringInTemplates);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var replaceStringInTemplates=new _replaceStringInTemplates2.default();var ScreenUnitsMenu=function(){function ScreenUnitsMenu(){_classCallCheck(this,ScreenUnitsMenu);this.state={started:false};this.slider=null;this.goto=null;this.units=[];this.responsiveStatus=null;}_createClass(ScreenUnitsMenu,[{key:'init',value:function init(_ref){var data=_ref.data,goTo=_ref.goTo;if(!this.started){this.goTo=goTo;this.units=data.units;document.querySelector('#sm-units-menu').classList.add('active');// document.querySelector('#sm-home h1').innerHTML = title;
// // document.querySelector('#sm-home h2').innerHTML = type;
// document.querySelector('#sm-home').style.backgroundImage = `url(${homeBackgroundImageUrl})`;
// document.querySelector('#sm-home .sm-button-next-screen').addEventListener('click', this.onNextButton.bind(this));
this.responsiveStatus=new _responsiveStatus2.default();window.addEventListener('resize',this.updateSlider.bind(this));this.updateSlider();//Scroll event for no-touch
var _this=this;document.getElementById("sm-units-menu").addEventListener("wheel",function(e){var windowSize=_this.responsiveStatus.getSize();if(windowSize=='tablet-landscape'||windowSize=='desktop'){if(e.deltaY<0){//Check if we are here
var hashName=window.location.hash;var hashParts=hashName.split('_',3);if(_this.processHash(hashParts).is){_this.onBackButton();}}}});//Scroll event for touch
// const containerElement = document.getElementById('sm-units-menu');
// const activeRegion = ZingTouch.Region(containerElement);
// const childElement = document.querySelector('#sm-units-menu .sm-content');
// activeRegion.bind(childElement, 'swipe', function(event){
//onsole.log("Swipe");
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
}},{key:'processHash',value:function processHash(hashParts){return{is:hashParts[0]=='#units'&&hashParts.length==1,data:{}};}},{key:'transformInputData',value:function transformInputData(inputData,data){var screenData={units:data.units};return screenData;}},{key:'updateSlider',value:function updateSlider(){var _this2=this;if(this.slider!=null){this.slider.destroy();//onsole.log('this.slider.destroy');
this.slider=null;//onsole.log(document.querySelector('#sm-units-menu .sm-content'));
// document.querySelector('#sm-units-menu .sm-content').remove();
// document.querySelector('#sm-units-menu').appendChild(this.mainDomStructure);
//onsole.log(document.querySelector('#sm-units-menu .sm-content'));
}//Vacía el slide
var sliderElement=document.querySelector('#sm-units-menu .sm-units-menu-slider');while(sliderElement.firstChild){sliderElement.removeChild(sliderElement.firstChild);}var unitTemplate=document.querySelector('#sm-units-menu__unit--template');this.units.forEach(function(unit){var unitElement=unitTemplate.cloneNode(true);unitElement.removeAttribute('id');if(_this2.getUnitsLengh()<5){unitElement.classList.add('sm-units-menu__unit--contains'+_this2.getUnitsLengh());}if(unit.smIsProyect){unitElement.classList.add('sm-units-menu__unit--proyecto');}var unitImage=unit.image.search('../themes/responsive/images')>-1?window.smDefaultBackgroundImage:unit.image;//onsole.log(unit.image);
//onsole.log(unit.image.search('../themes/responsive/images'));
//onsole.log(unit.image.search('../themes/responsive/images') > -1);
unitElement.getElementsByTagName('a')[0].setAttribute('href','#unit_'+unit.id);unitElement.querySelector('.sm-units-menu__unit__image__image').style.backgroundImage='url('+unitImage+')';unitElement.querySelector('.sm-units-menu__unit__image__image--proyecto').style.backgroundImage='url('+unitImage+')';unitElement.querySelector('.sm-units-menu__unit__number').innerHTML=unit.numberformenu;unitElement.querySelector('.sm-units-menu__unit__proyect_description').innerHTML=unit.description;unitElement.querySelector('.sm-units-menu__unit__title').innerHTML=unit.title;var completed=unit.completado||0;unitElement.querySelector('.sm-units-menu__unit__progress__title').innerHTML=completed+'% '+replaceStringInTemplates.replace('--Completado--');unitElement.querySelector('.sm-color-background-color').style.width=completed+'%';// unitElement.querySelector('.sm-left-menu--title').innerHTML = `<span>${('0' + unit.numberformenu).slice(-2)}</span> ${unit.title}`;
// unitElement.addEventListener('click', this.toggleUnit);
// document.querySelector('#sm-units-menu .sm-button-back-screen').addEventListener('click', this.onBackButton.bind(this));
sliderElement.appendChild(unitElement);});//onsole.log(document.querySelector('.sm-units-menu-slider'));
var size=this.responsiveStatus.getSize();var sizes={tabletLandscape:null,mediaDesktopHd:null// if(size == 'tablet-portrait' || size == 'desktop'){
// 	sizes.tabletLandscape = Math.floor(window.innerWidth / 3.5);
// 	sizes.mediaDesktopHd = Math.floor(window.innerWidth / 3.5);
// } else { //desktop-hd
// 	sizes.tabletLandscape = Math.floor(window.innerWidth / 3.5);
// 	sizes.mediaDesktopHd = Math.floor(window.innerWidth / 3.5);
// }
};var needToActivateSlider=false;if(size!='mobile'&&size!='tablet-portrait'){if(this.getUnitsLengh()>=5){sizes.tabletLandscape=Math.floor(window.innerWidth/3.5);sizes.mediaDesktopHd=Math.floor(window.innerWidth/4.5);needToActivateSlider=true;}else if(this.getUnitsLengh()==4){sizes.tabletLandscape=Math.floor(window.innerWidth/3.5);sizes.mediaDesktopHd=Math.floor(window.innerWidth/3.5);needToActivateSlider=true;}else if(this.getUnitsLengh()==3){sizes.tabletLandscape=Math.floor(window.innerWidth/3);sizes.mediaDesktopHd=Math.floor(window.innerWidth/3);}else if(this.getUnitsLengh()<=2){sizes.tabletLandscape=Math.floor(window.innerWidth/2);sizes.mediaDesktopHd=Math.floor(window.innerWidth/2);}}if(needToActivateSlider){this.slider=(0,_tinySlider.tns)({container:'#sm-units-menu .sm-units-menu-slider',fixedWidth:sizes.tabletLandscape,// autoWidth: true,
loop:false,slideBy:'page',mouseDrag:true,controlsContainer:'#sm-units-menu-slider__controls',nav:false,swipeAngle:90,responsive:{1600:{fixedWidth:sizes.mediaDesktopHd}}});var _this=this;//Hide slider control if there are less han 4 items
//two functions to detech touch down, to return main screen
this.slider.events.on('touchStart',function(e){_this.onTouchStart({x:e.event.touches[0].pageX,y:e.event.touches[0].pageY});});this.slider.events.on('touchEnd',function(e){_this.onTouchEnd({x:e.event.changedTouches[0].pageX,y:e.event.changedTouches[0].pageY});});document.querySelector('#sm-units-menu-slider__controls').style.display='';}else{document.querySelector('#sm-units-menu-slider__controls').style.display='none';}}//two functions to detech touch down, to return main screen
},{key:'onTouchStart',value:function onTouchStart(position){this.state.touchPositionStart=position;}},{key:'onTouchEnd',value:function onTouchEnd(position){var p1=this.state.touchPositionStart;var p2=position;var direction=Math.atan2(p2.y-p1.y,p2.x-p1.x)*180/Math.PI;if(direction>45&&direction<135){this.onBackButton();}this.state.touchPositionStart=null;}},{key:'onBackButton',value:function onBackButton(){this.disable();this.goTo('#');}},{key:'disable',value:function disable(){//document.querySelector('#sm-units-menu').classList.remove('active');
}},{key:'getUnitsLengh',value:function getUnitsLengh(){// this.units.length returns more than expected, so we need this function
var counter=0;_.forEach(this.units,function(unit){if(unit){counter++;}});return counter;}}]);return ScreenUnitsMenu;}();exports.default=ScreenUnitsMenu;

/***/ }),
/* 60 */
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
module.exports = ZingTouch;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();// import config from './config';
var _zingtouch=__webpack_require__(61);var _zingtouch2=_interopRequireDefault(_zingtouch);var _debug=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ScreenHome=function(){function ScreenHome(){_classCallCheck(this,ScreenHome);this.state={started:false};this.goto=null;}_createClass(ScreenHome,[{key:'init',value:function init(_ref){var data=_ref.data,goTo=_ref.goTo;if(!this.started){this.goTo=goTo;var title=data.title,type=data.type,nivel=data.nivel,courseTags=data.courseTags;console.log(data);document.querySelector('#sm-home h1').innerHTML=title;//Nivel
if(nivel){var nivelParts=nivel.split(" ");if(nivelParts.length>=2){document.querySelector('#sm-home h2 strong').innerHTML=nivelParts[0].replace('º',' ').replace('ª',' ');// document.querySelector('#sm-home h2 span').innerHTML = nivel.substr(nivelParts[0].length + 1);
document.querySelector('#sm-home h2 span').innerHTML=' '+nivel.substr(nivelParts[0].length+1).replace('BACHILLERATO','BTO').replace('bachillerato','BTO').replace('Bachillerato','BTO').replace('º',' ').replace('ª',' ');//Is text is more than 5 chars lengh, we add a class to add padding.
setTimeout(function(){if(document.querySelector('#sm-home h2').innerText.length>5){document.querySelector('#sm-home h2').classList.add('sm-long-text');}},100);}else{document.querySelector('#sm-home h2').style.display='none';}}else{document.querySelector('#sm-home h2').style.display='none';}// **andalucia** >> Grazalema
// **cataluña** >> Grup Promotor
// **galicia** >> Obradoiro
// **valencia** >> Voramar
// **paisvasco** >> Zubia
// **baleares** >> Illes Balears
// **canarias** >> Santillana Canarias
//Logo
var courseTagAndLogoRelation=[{tag:'andalucia',logo:'grazalema'},{tag:'catalu_a',logo:'gruppromotor'},{tag:'galicia',logo:'obradoiro'},{tag:'valencia',logo:'voramar'},{tag:'paisvasco',logo:'zubia'},{tag:'baleares',logo:'illes_balears'},{tag:'canarias',logo:'santillana_canarias'}];if(courseTags){_.forEach(courseTagAndLogoRelation,function(item){if(typeof courseTags==='string'){if(courseTags.indexOf(item.tag)>-1){var logoElement=document.querySelector('#sm-home .sm-content .sm-content-logosantillana');if(logoElement){logoElement.classList.add(item.logo);}}}if((typeof courseTags==='undefined'?'undefined':_typeof(courseTags))==='object'||typeof courseTags==='array'){_.each(courseTags,function(tag){if(tag==item.tag){var _logoElement=document.querySelector('#sm-home .sm-content .sm-content-logosantillana');if(_logoElement){_logoElement.classList.add(item.logo);}}});}});}document.querySelector('#sm-home').style.backgroundImage='url('+window.smBookBackgroundImage+')';// document.querySelector('#sm-home .sm-button-next-screen').addEventListener('click', this.onNextButton.bind(this));
//Scroll event for no-touch
var _this=this;document.getElementById("sm-home").addEventListener("wheel",function(e){if(e.deltaY>0){//Check if we are here
var hashName=window.location.hash;var hashParts=hashName.split('_',3);if(_this.processHash(hashParts).is){_this.onNextButton();}}});//Scroll event for touch
var containerElement=document.getElementById('sm-home');var activeRegion=_zingtouch2.default.Region(containerElement);var childElement=document.querySelector('#sm-home .sm-home-touchable-area');activeRegion.bind(childElement,'swipe',function(event){//If only one touch
var touchEvents=event.detail.data;if(touchEvents.length==1){var direction=touchEvents[0].currentDirection;//If direction is up
if(direction>45&&direction<135){_this.onNextButton();}}});}this.started=true;//document.querySelector('#sm-home').classList.add('active');
}},{key:'processHash',value:function processHash(hashParts){return{is:(hashParts[0]=='#'||hashParts[0]=='')&&hashParts.length==1,data:{}};}},{key:'transformInputData',value:function transformInputData(inputData,data){var screenData={title:data.title,//¿?
type:data.type,nivel:data.nivel,courseTags:data.courseTags};return screenData;}},{key:'onNextButton',value:function onNextButton(){this.disable();this.goTo('#units');}},{key:'disable',value:function disable(){//document.querySelector('#sm-home').classList.remove('active');
}}]);return ScreenHome;}();exports.default=ScreenHome;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _animejs=__webpack_require__(8);var _animejs2=_interopRequireDefault(_animejs);var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _responsiveStatus=__webpack_require__(7);var _responsiveStatus2=_interopRequireDefault(_responsiveStatus);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var responsiveStatusTool=new _responsiveStatus2.default(function(){return null;});// config.velocityTransitions = 2000;
var updateBackLink=function updateBackLink(where){var backElement=document.querySelector('#sm-subunit-backbutton a');if(backElement){switch(where){case'home':if(blink.isIosApp||blink.isAndroidApp){backElement.setAttribute('href','javascript:blink.rest.closeWindow()');}else{backElement.setAttribute('href','javascript:closeActivity()');}break;case'units-menu':backElement.setAttribute('href','#');break;case'unit':backElement.setAttribute('href','#units');break;default:break;}}};var routeTransitions={'null__to__home':{to:{targets:'#sm-home',scale:[1.1,1],opacity:[0,1],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,update:function update(anim){document.getElementById('sm-home').style.display='block';updateBackLink('home');}}},'null__to__units-menu':{to:{targets:'#sm-units-menu',scale:[1.1,1],opacity:[0,1],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,update:function update(anim){document.getElementById('sm-units-menu').style.display='block';updateBackLink('units-menu');}}},'null__to__unit':{to:{targets:'#sm-unit',scale:[1.1,1],opacity:[0,1],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,update:function update(anim){document.getElementById('sm-unit').style.display='block';updateBackLink('unit');}}},'home__to__units-menu':{from:[{targets:'#sm-home .sm-content',translateY:['0%','-100%'],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,complete:function complete(anim){document.getElementById('sm-home').style.display='none';updateBackLink('units-menu');}},{targets:'#sm-home .sm-button-next-screen',opacity:[1,0],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionLinear}],to:[{targets:'#sm-units-menu',translateY:['100%','0%'],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,begin:function begin(anim){document.getElementById('sm-units-menu').style.display='block';}},{targets:'#sm-units-menu .sm-button-back-screen',opacity:[0,1],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionLinear}]},'units-menu__to__home':{from:[{targets:'#sm-units-menu',translateY:['0%','100%'],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut},{targets:'#sm-units-menu .sm-button-back-screen',opacity:[1,0],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionLinear}],to:[{targets:'#sm-home .sm-content',translateY:['-100%','0%'],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,update:function update(anim){document.getElementById('sm-home').style.display='block';updateBackLink('home');}},{targets:'#sm-home .sm-button-next-screen',opacity:[0,1],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionLinear}]},'units-menu__to__unit':{from:[],to:[{targets:'#sm-unit .sm-content--scrolled',translateY:['100%','0%'],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,begin:function begin(anim){document.getElementById('sm-unit').style.display='block';if(typeof document.querySelector('#sm-unit .sm-content--scrolled').scrollTo==="function"){document.querySelector('#sm-unit .sm-content--scrolled').scrollTo(0,0);}}},{targets:'#sm-unit .sm-unit__header_background',opacity:[0,1],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut},{targets:'#sm-unit .sm-unit__header_background__content',height:function height(){var backgroundHeight=0;switch(responsiveStatusTool.getSize()){case'tablet-portrait':backgroundHeight=8*73+'px';break;case'tablet-landscape':backgroundHeight=8*67+'px';break;case'desktop':backgroundHeight=8*67+'px';break;case'desktop-hd':backgroundHeight=8*67+'px';break;default:backgroundHeight='362px';break;}return[window.innerHeight+'px',backgroundHeight];},duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,complete:function complete(){document.querySelector('#sm-unit .sm-unit__header_background__content').style.removeProperty('height');updateBackLink('unit');}}]},'unit__to__units-menu':{from:[{targets:'#sm-unit .sm-content--scrolled',translateY:['0%','100%'],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,complete:function complete(anim){document.getElementById('sm-unit').style.display='none';updateBackLink('units-menu');}},{targets:'#sm-unit .sm-unit__header_background',opacity:[1,0],duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut},{targets:'#sm-unit .sm-unit__header_background__content',height:function height(){var backgroundHeight=0;switch(responsiveStatusTool.getSize()){case'tablet-portrait':backgroundHeight=8*73+'px';break;case'tablet-landscape':backgroundHeight=8*67+'px';break;case'desktop':backgroundHeight=8*67+'px';break;case'desktop-hd':backgroundHeight=8*67+'px';break;default:backgroundHeight='362px';break;}return[backgroundHeight,window.innerHeight+'px'];},duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut}],to:{targets:'#sm-units-menu',duration:_config2.default.velocityTransitions,easing:_config2.default.easingTransitionOut,begin:function begin(anim){document.getElementById('sm-units-menu').style.display='block';}}}};var Transitions=function(){function Transitions(){_classCallCheck(this,Transitions);}_createClass(Transitions,[{key:'start',value:function start(toRoute,fromRoute){//onsole.log(`de ${fromRoute} a ${toRoute}`);
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var UrlHelper=function(){function UrlHelper(routes,updateRouter){_classCallCheck(this,UrlHelper);this.updateRouter=updateRouter;//Functión para actualizar el router
this.routes=routes;this.state={route:null,routeData:{}};var _this=this;window.onhashchange=function(){_this.goToState();};this.goToState();}_createClass(UrlHelper,[{key:'updateCurrentState',value:function updateCurrentState(){var _this2=this;var urlState={};var hashName=window.location.hash;var hashParts=hashName.split('_',3);//Para dividir las partes del hash con un máximo de 3 partes
var routeFound=false;this.routes.forEach(function(route){if(!routeFound){var hashProcessed=route.object.processHash(hashParts);if(hashProcessed.is){routeFound=true;_this2.state.route=route;_this2.state.routeData=hashProcessed.data;}}});if(!routeFound){this.state.route=this.routes[0];this.state.routeData={};}}},{key:'goToState',value:function goToState(){this.updateCurrentState();this.updateRouter(this.state.route,this.state.routeData);}},{key:'updateUrlHash',value:function updateUrlHash(urlHash){window.location.hash=urlHash;}}]);return UrlHelper;}();exports.default=UrlHelper;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();//Screens
var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _urlHelper=__webpack_require__(64);var _urlHelper2=_interopRequireDefault(_urlHelper);var _Transitions=__webpack_require__(63);var _Transitions2=_interopRequireDefault(_Transitions);var _debug=__webpack_require__(2);var _1ScreenHome=__webpack_require__(62);var _1ScreenHome2=_interopRequireDefault(_1ScreenHome);var _2ScreenUnitsMenu=__webpack_require__(59);var _2ScreenUnitsMenu2=_interopRequireDefault(_2ScreenUnitsMenu);var _3ScreenUnit=__webpack_require__(54);var _3ScreenUnit2=_interopRequireDefault(_3ScreenUnit);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}//El hash puede ser
// "#" o "#" => Home
// "#units" => Menú de unidades
// "#unit_X" => Unidad X
// "#pluszone_X" => Pluszone de unidad X
// "#pluscategory_X_CATEGORY" => Pluszone en categoría CATEGORY y unidad X
var screens=[{id:'home',object:new _1ScreenHome2.default()},{id:'units-menu',object:new _2ScreenUnitsMenu2.default()},{id:'unit',object:new _3ScreenUnit2.default()}];var transitions=new _Transitions2.default();var Router=function(){function Router(args){_classCallCheck(this,Router);var data=args.data,actionUpdateSubunitOcultar=args.actionUpdateSubunitOcultar;data.actionUpdateSubunitOcultar=actionUpdateSubunitOcultar;this.state={data:data,lastRoute:null};//l('Router.constructor(data)');
//l(data);
this.urlHelper=new _urlHelper2.default(screens,this.update.bind(this));}_createClass(Router,[{key:'update',value:function update(route,inputData){//l("Update router");
//This function change from one screen to another (or only data)
route.object.init({data:route.object.transformInputData(inputData,this.state.data),goTo:this.goTo.bind(this)});//Transisions
var lastRouteId=this.state.lastRoute?this.state.lastRoute.id:null;transitions.start(route.id,lastRouteId);this.state.lastRoute=route;}},{key:'goTo',value:function goTo(hash){//Go from link
this.urlHelper.updateUrlHash(hash);}}]);return Router;}();exports.default=Router;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Source: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
if(!("nextElementSibling"in document.documentElement)){Object.defineProperty(Element.prototype,"nextElementSibling",{get:function get(){var e=this.nextSibling;while(e&&1!==e.nodeType){e=e.nextSibling;}return e;}});}if(!("previousElementSibling"in document.documentElement)){Object.defineProperty(Element.prototype,"previousElementSibling",{get:function get(){var e=this.previousSibling;while(e&&1!==e.nodeType){e=e.previousSibling;}return e;}});}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();//Helpers
//Left Menu
//SubUnit
//Templates
// import { equal } from 'assert';
//Polyfils
__webpack_require__(66);var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _router=__webpack_require__(65);var _router2=_interopRequireDefault(_router);var _bookColors=__webpack_require__(9);var _ImagesPreload=__webpack_require__(52);var _ImagesPreload2=_interopRequireDefault(_ImagesPreload);var _debug=__webpack_require__(2);var _blinkFunctions=__webpack_require__(5);var _0LeftMenu=__webpack_require__(51);var _0LeftMenu2=_interopRequireDefault(_0LeftMenu);var _ScreenSubUnit=__webpack_require__(46);var _ScreenSubUnit2=_interopRequireDefault(_ScreenSubUnit);var _main=__webpack_require__(29);var _main2=_interopRequireDefault(_main);var _subUnitBackButton=__webpack_require__(3);var _subUnitBackButton2=_interopRequireDefault(_subUnitBackButton);var _replaceStringInTemplates=__webpack_require__(1);var _replaceStringInTemplates2=_interopRequireDefault(_replaceStringInTemplates);__webpack_require__(28);__webpack_require__(27);__webpack_require__(26);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var PORTADASPORTAG=true;var ACTIVITY_BLOCK="activity_block_";var ACTIVITY_BLOCK_TITLE="activity_block_title";var SantillanaMicrocontenidos=function(){function SantillanaMicrocontenidos(){_classCallCheck(this,SantillanaMicrocontenidos);this.state={isLaunched:false};this.data={};this.leftMenu=null;}_createClass(SantillanaMicrocontenidos,[{key:'init',value:function init(dataraw){var _this=this;this.data=JSON.parse(JSON.stringify(dataraw));//l("app.init()");
// cl(JSON.parse(JSON.stringify(dataraw)));
// cl(this.data);
if(!this.state.isLaunched){this.state.isLaunched=true;//l('Iniciando estilos Santillana ');
//Disable contextual menu (right click)
var imagesVideosAndAudios=document.querySelectorAll('img, video, video, svg');_.forEach(imagesVideosAndAudios,function(elem){elem.addEventListener('contextmenu',function(event){return event.preventDefault();});});var portadaSubunit=false;if(PORTADASPORTAG){if(typeof this.data.portada==='undefined'){console.log("ERROR: Portada no definida en JSON");}if(dataraw.portada){_.forEach(dataraw.units,function(unit){_.forEach(unit.subunits,function(subunit){if(''+subunit.id===''+_this.data.portada){portadaSubunit=subunit;}});});}if(!portadaSubunit){portadaSubunit=dataraw.units[0].subunits[0];}//Background
window.smDefaultBackgroundImage=this.getDefaultBackgroundUrl();if(dataraw.units.length&&dataraw.units[0].subunits.length&&portadaSubunit.image&&portadaSubunit.image.length>3){window.smBookBackgroundImage=portadaSubunit.image;}else{window.smBookBackgroundImage=window.smDefaultBackgroundImage;}}else{//Background
window.smDefaultBackgroundImage=this.getDefaultBackgroundUrl();if(dataraw.units.length&&dataraw.units[0].subunits.length&&dataraw.units[0].subunits[0].image.length>3){window.smBookBackgroundImage=dataraw.units[0].subunits[0].image;}else{window.smBookBackgroundImage=window.smDefaultBackgroundImage;}}//Credits
_.forEach(dataraw.units[0].subunits,function(subunit){if(subunit.tags){if(subunit.tags.search('creditos')>-1&&subunit.sections.length>0){// cl("Tiene créditos...")
_this.data.creditsHtml=subunit.sections[0].texto;}}});//get idalumno from url
var currentUrl=new URL(window.location.href);var idAlumno=currentUrl.searchParams.get('idalumno');var idAlumnoUrlParamString=idAlumno?'&idalumno='+idAlumno:'';var urlSeguimiento='/include/javascript/seguimientoCurso.js.php?idcurso='+idcurso+idAlumnoUrlParamString;if(typeof loadScript==='function'){//If is blink enviroment
loadScript(urlSeguimiento,true,function(){this.initAfertLoadsActivities(window.actividades);}.bind(this));}else{this.initAfertLoadsActivities([]);}//Add body class if theres is no navbar (app)
if((typeof blink==='undefined'?'undefined':_typeof(blink))=='object'){if(blink.isApp&&!blink.isOfflinePC){document.body.classList.add('sm-no-navbar');}}//Redefine blink function for resizing window
window.setPanelResultsHeight=function(){$('.search-side-panel-results').css('height',$(window).height()-$('.search-side-panel-results').offset().top);};window.setPanelStyle=function(){$('.side-panel').css({'top':$('.navbar').height(),'height':$(window).height()-$('.navbar').height()});};//añadir etiquetas de tipo de usuario
if((0,_blinkFunctions.esAlumno)()){document.body.classList.add('sm-es-alumno');}if((0,_blinkFunctions.esProfesor)()){document.body.classList.add('sm-es-profesor');}if((0,_blinkFunctions.esEditorOMas)()){document.body.classList.add('sm-es-editor');}}}},{key:'getDefaultBackgroundUrl',value:function getDefaultBackgroundUrl(){var tempElement=document.createElement('div');tempElement.classList.add('sm-js-default-background');document.body.appendChild(tempElement);var tempElementInBody=document.querySelector('.sm-js-default-background');var tempStyle=tempElement.currentStyle||window.getComputedStyle(tempElementInBody,false);return tempStyle.backgroundImage.slice(4,-1).replace(/"/g,"");}},{key:'initAfertLoadsActivities',value:function initAfertLoadsActivities(activities){var _this2=this;//l('initAfertLoadsActivities');
//l(data, activities);
var isFrontPage=false;if(PORTADASPORTAG){if(this.data.portada){isFrontPage=this.data.portada==idclase;}}else{if(this.data.units[0].subunits.length){if(idclase==this.data.units[0].subunits[0].id){isFrontPage=true;}}}//l('Activities loaded. ');
//Get home image
//Remove first unit
this.data.units.shift();//If user is student, remove subunits and resources not visible for her
if((0,_blinkFunctions.esAlumno)()){this.data.units.forEach(function(unit){var i=unit.subunits.length;while(i--){if(unit.subunits[i].onlyVisibleTeachers){unit.subunits.splice(i,1);}}i=unit.resources.length;while(i--){if(unit.resources[i].onlyVisibleTeachers){unit.resources.splice(i,1);}}});}//Regenerate units number with new property
var unitCounter=0;this.data.units.forEach(function(unit,index){//chech if is projects
if(unit.tags&&unit.tags.search('proyecto')>-1){unit.smIsProyect=true;unit.numberformenu='';}else{unitCounter++;unit.numberformenu=unitCounter;}});//Divide subunits in main, aside and evaluation
var asideClassesName=['microproyecto','flipped','ninguna','basica','reto'];var evaluationClassesName=['evaluacion'];this.data.units.forEach(function(unit){unit.subunitsmain=[];unit.subunitsevaluation=[];unit.resourcesmain=[];unit.resourcesevaluation=[];unit.subunits.forEach(function(subunit){var added=false;var tags=subunit.tag+' '+subunit.tags;// if(tags){
asideClassesName.forEach(function(tagName){if(tags.indexOf(tagName)>=0){subunit.smtype=tagName;//.replace('activitytag_', '');
}});if(!subunit.smtype){subunit.smtype='estandar';}evaluationClassesName.forEach(function(tagName){if(tags.indexOf(tagName)>=0){if(!added){unit.subunitsevaluation.push(subunit);added=true;}}});// }
if(!added){unit.subunitsmain.push(subunit);}});unit.resources.forEach(function(resource){var added=false;var tags=resource.tag+' '+resource.tags;if(tags){// asideClassesName.forEach(tagName => {
// 	if(tags.indexOf(tagName)>=0){
// 		if(!added){
// 			resource.smtype=tagName;
// 			unit.resourcesmain.push(resource);
// 			added = true;
// 		}
// 	}
// });
asideClassesName.forEach(function(tagName){if(tags.indexOf(tagName)>=0){resource.smtype=tagName;}});evaluationClassesName.forEach(function(tagName){if(tags.indexOf(tagName)>=0){if(!added){unit.resourcesevaluation.push(resource);// unit.resourcesmain[unit.resourcesmain.length-1].evaluationSubUnit = resource;
// unit.resourcesevaluation[unit.resourcesevaluation.length-1].parentSubUnit = unit.resourcesmain[unit.resourcesmain.length-1];
added=true;}}});}// if(resource.evalType==2){
// 	unit.resourcesevaluation.push(resource);
// 	added = true;
// }
if(!added){unit.resourcesmain.push(resource);}});});//Add activity<-->evaluation relation
this.data.units.forEach(function(unit){unit.subunitsmain.forEach(function(subunit){if(typeof blink.activity.resourcesList!='undefined'){if(blink.activity.resourcesList&&blink.activity.resourcesList.length>0){_.forEach(blink.activity.resourcesList,function(resource){var evaluationSubunitID=resource.idactivity;if(subunit.id==evaluationSubunitID){var relatedSubUnit=_.find(unit.subunitsevaluation,{id:idclase.toString()});if(relatedSubUnit){subunit.evaluationSubUnit=relatedSubUnit;// relatedSubUnit.parentSubUnit = subunit;
}}});}}});unit.subunitsevaluation.forEach(function(subunitevaluation){if(typeof blink.activity.resourcesList!='undefined'){if(blink.activity.resourcesList&&blink.activity.resourcesList.length>0){_.forEach(blink.activity.resourcesList,function(resource){var evaluationSubunitID=resource.idactivity;if(subunitevaluation.id==evaluationSubunitID){var relatedSubUnit=_.find(unit.subunitsmain,{id:idclase.toString()});if(relatedSubUnit){// subunitevaluation.parentSubUnit = relatedSubUnit;
relatedSubUnit.evaluationSubUnit=subunitevaluation;}}});}}});unit.resourcesmain.forEach(function(subunit){if(typeof blink.activity.resourcesList!='undefined'){if(blink.activity.resourcesList&&blink.activity.resourcesList.length>0){_.forEach(blink.activity.resourcesList,function(resource){var evaluationSubunitID=resource.idactivity;if(subunit.id==evaluationSubunitID){var relatedSubUnit=_.find(unit.resourcesevaluation,{id:idclase.toString()});if(relatedSubUnit){subunit.evaluationSubUnit=relatedSubUnit;relatedSubUnit.parentSubUnit=subunit;}}});}}});unit.resourcesevaluation.forEach(function(subunitevaluation){if(typeof blink.activity.resourcesList!='undefined'){if(blink.activity.resourcesList&&blink.activity.resourcesList.length>0){_.forEach(blink.activity.resourcesList,function(resource){var evaluationSubunitID=resource.idactivity;if(subunitevaluation.id==evaluationSubunitID){var relatedSubUnit=_.find(unit.resourcesmain,{id:idclase.toString()});if(relatedSubUnit){subunitevaluation.parentSubUnit=relatedSubUnit;relatedSubUnit.evaluationSubUnit=subunitevaluation;}}});}}});});//Add activities progress
this.data.units.forEach(function(unit){var unitCompletedTotal=0;unit.subunits.forEach(function(subunit){//If exists into window.actividades
if(activities[subunit.id]){// subunit.activity = activities[subunit.id];
if(activities[subunit.id].hasOwnProperty('avance')){//Borja me dijo completado, pero no encuentro esa propiedad
subunit.completado=parseInt(activities[subunit.id].avance);}else{subunit.completado=0;}}else{subunit.completado=0;//No sé si es necesario
}unitCompletedTotal+=subunit.completado;});unit.resources.forEach(function(resource){if(activities[resource.id]){if(activities[resource.id].hasOwnProperty('avance')){//Borja me dijo completado, pero no encuentro esa propiedad
resource.completado=parseInt(activities[resource.id].avance);}else{resource.completado=0;}}else{resource.completado=0;}unitCompletedTotal+=resource.completado;});var unitCompleted=Math.round(unitCompletedTotal/(unit.subunits.length+unit.resources.length));unit.completado=unitCompleted;});//Blocks!
//First, we search blocks
_.forEach(this.data.units,function(unit){unit.blocks=[];_.forEach(unit.subunitsmain,function(subunit){var tags=subunit.tags?subunit.tags.split(' '):[];var isBlock=_.includes(tags,ACTIVITY_BLOCK_TITLE);var metodologiaBlockTag=_.find(tags,function(tag){// :D sorry...
return tag.substr(0,15)===ACTIVITY_BLOCK&&tag!==ACTIVITY_BLOCK_TITLE;});var metodologiaBlockId=metodologiaBlockTag?metodologiaBlockTag.replace(ACTIVITY_BLOCK,''):null;if(isBlock){//l(subunit);
var newBlock={id:metodologiaBlockId,headerSubUnit:{data:subunit},subUnits:[]};unit.blocks.push(newBlock);}});});//Then we search subunits. 
_.forEach(this.data.units,function(unit){_.forEach(unit.subunitsmain,function(subunit){var tags=typeof subunit.tags==='string'?subunit.tags.split(' '):[];var isBlock=_.includes(tags,ACTIVITY_BLOCK_TITLE);var metodologiaBlockTag=_.find(tags,function(tag){// :D sorry...
return tag.substr(0,15)===ACTIVITY_BLOCK&&tag!==ACTIVITY_BLOCK_TITLE;});var metodologiaBlockId=metodologiaBlockTag?metodologiaBlockTag.replace(ACTIVITY_BLOCK,''):null;var isNewKidOnTheBlock=!isBlock&&metodologiaBlockTag?true:false;if(isNewKidOnTheBlock){var currentBlock=_.find(unit.blocks,{id:metodologiaBlockId});if(currentBlock){var newKidOnTheBlock={data:subunit};currentBlock.subUnits.push(newKidOnTheBlock);}}});});//And, if there is no 'ACTIVITY_BLOCK...' tag, we create a new block
//UPDATE: We remove orphaned subunits.
_.forEach(this.data.units,function(unit){unit.subunitsmain=_.filter(unit.subunitsmain,function(subunit){var tags=typeof subunit.tags==='string'?subunit.tags.split(' '):[];var isBlock=_.includes(tags,ACTIVITY_BLOCK_TITLE);var metodologiaBlockTag=_.find(tags,function(tag){// :D sorry...
return tag.substr(0,15)===ACTIVITY_BLOCK&&tag!==ACTIVITY_BLOCK_TITLE;});var isNewKidOnTheBlock=!isBlock&&metodologiaBlockTag?true:false;if(!isBlock&&!isNewKidOnTheBlock){return false;}return true;});// _.forEach(unit.subunitsmain, subunit => {
// 	const tags = typeof subunit.tags === 'string' ? subunit.tags.split(' ') : [];
// 	const isBlock = _.includes(tags, ACTIVITY_BLOCK_TITLE);
// 	const metodologiaBlockTag = _.find(tags, (tag) => { // :D sorry...
// 		return tag.substr(0,15)===ACTIVITY_BLOCK && tag!==ACTIVITY_BLOCK_TITLE;
// 	});
// 	const metodologiaBlockId = metodologiaBlockTag ? metodologiaBlockTag.replace(ACTIVITY_BLOCK, ``) : null;
// 	const isNewKidOnTheBlock = !isBlock && metodologiaBlockTag ? true : false;
// 	if(!isBlock && !isNewKidOnTheBlock){
// 		const newBlock = {
// 			id: metodologiaBlockId,
// 			headerSubUnit: {
// 				data: {
// 					title: '',
// 				}
// 			},
// 			subUnits: [{
// 				data: subunit,
// 			}],
// 		}
// 		unit.blocks.push(newBlock)
// 	}
// });
});//Delete blocks without units
_.forEach(this.data.units,function(unit){unit.blocks=_.filter(unit.blocks,function(block){return block.subUnits.length>0;});});//Regenerate subunints numbers depending of ocultar
this.regenerateSubunitsNumbers();// If this page is the first subunit of first unit, show menu.
if(isFrontPage){//Hide navbar bottom
if(document.getElementsByClassName('navbar-bottom').length){document.getElementsByClassName('navbar-bottom')[0].style.display='none';}// Generate HTML Structure
var replaceStringInTemplates=new _replaceStringInTemplates2.default();var htmlMainWithStrings=replaceStringInTemplates.replace(_main2.default);document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend',htmlMainWithStrings);//Add class to hide all elemens in body except #santillana_microcontenidos_menu
document.getElementsByTagName('body')[0].classList.add('santillana_microcontenidos_menu');//Backbutton
// document.querySelector('.navbar.libro .libro-left>ul').insertAdjacentHTML( 'afterbegin', replaceStringInTemplates.replace(htmlSubUnitBackButton) );
document.querySelector('.navbar.libro').insertAdjacentHTML('afterbegin',replaceStringInTemplates.replace(_subUnitBackButton2.default));document.querySelector('#sm-subunit-backbutton').innerHTML='<a href="#"></a>';//PreloadImages
var preloadImages=new _ImagesPreload2.default();preloadImages.add(window.smBookBackgroundImage);//Start menu navigation
//Router links url hash with screen
new _router2.default({data:this.data,actionUpdateSubunitOcultar:this.actionUpdateSubunitOcultar.bind(this)});//Menú
this.leftMenu=new _0LeftMenu2.default(this.data);//Else show content of subunit
}else{//l('NO es la actividad Portada');
//l(this.data);
//Get subunit object from data
var subunitObject={};var subunitIndex=-1;var unit={};var isEvaluacion=false;this.data.units.forEach(function(unitData){//Check Main
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
});if(subunitObject==={}){alert("Error:\nNinguna lección con esta id.");}this.ScreenSubUnit=new _ScreenSubUnit2.default();this.ScreenSubUnit.init(subunitObject,subunitIndex+1,unit,this.data,isEvaluacion);//Menú
this.leftMenu=new _0LeftMenu2.default(this.data,subunitObject.id);}(0,_bookColors.setBookColor)();document.getElementById('mainform').style.opacity=1;while(document.getElementById('sm-spinner')){document.getElementById('sm-spinner').remove();}//Global commands to open menú
window.SantillanaMicrocontenidosMenuToggle=function(){return _this2.leftMenu.toggleMenu();};window.SantillanaMicrocontenidosMenuOpen=function(){return _this2.leftMenu.openMenu();};window.SantillanaMicrocontenidosMenuClose=function(){return _this2.leftMenu.closeMenu();};//l("Inicio terminado");
}},{key:'regenerateSubunitsNumbers',value:function regenerateSubunitsNumbers(){this.data.units.forEach(function(unit){var subunitCounter=0;unit.subunitsmain.forEach(function(subunit){if(!subunit.ocultar){subunitCounter++;subunit.numberformenu=subunitCounter;}else{subunit.numberformenu='';}});});}//actions
},{key:'actionUpdateSubunitOcultar',value:function actionUpdateSubunitOcultar(subunitid,ocultar){this.data.units.forEach(function(unit){unit.subunitsmain.forEach(function(subunit){if(subunit.id==subunitid){subunit.ocultar=ocultar;}});});this.regenerateSubunitsNumbers();}}]);return SantillanaMicrocontenidos;}();exports.default=SantillanaMicrocontenidos;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(68);var _app=__webpack_require__(67);var _app2=_interopRequireDefault(_app);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var SantillanaMicrocontenidosApp=new _app2.default();module.exports={init:function init(data){// console.log('%c Santillana Microcontenidos ', `font-size: 40px; font-weight: 700; color: white; background-color: #2a495d;`);
// console.log(compiledDate);
// console.log("Iniciando...");
if(!window.smStylesExecuted){window.smStylesExecuted=true;//to no execute this more than once
SantillanaMicrocontenidosApp.init(data);}}};//Show loading
// const smLoadingSpinner = document.createElement("div");
// smLoadingSpinner.className='spinner';
// smLoadingSpinner.id='sm-spinner';
// document.body.appendChild(smLoadingSpinner);
if(document.querySelectorAll('#sm-spinner').length==0){document.write('<div id="sm-spinner" class="spinner"><div class="dot dot1"></div><div class="dot dot2"></div></div>');}

/***/ })
/******/ ]);
});