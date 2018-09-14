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
				{ name: 'Título 1', element: 'h4', attributes: { 'class': 'bck-title1'} },
				{ name: 'Título 2', element: 'h4', attributes: { 'class': 'bck-title2'} },
				{ name: 'Título 3', element: 'h4', attributes: { 'class': 'bck-title3'} },

				{ name: 'Énfasis', element: 'span', attributes: { 'class': 'bck-enfasis' }},
				{ name: 'Enunciado actividad', element: 'h4', attributes: { 'class': 'bck-title-activity' }},

				{ name: 'Tabla centrada', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-center'} },
				{ name: 'Celda encabezado', element: 'td', attributes: { 'class': 'bck-td' } },

				{ name: 'Caja 1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-1' } },
				{ name: 'Caja 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-2' } },
				{ name: 'Caja 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-3' } }
			]
		},

        init: function () {
            this.parent.init.call(this.parent, this);
            
            blink.getCourse(idcurso).done((function(data) {
				SantillanaMicrocontenidosStyleUI.init(data);
			}).bind(this));
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

