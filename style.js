

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


