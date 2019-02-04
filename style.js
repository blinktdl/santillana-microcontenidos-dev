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
				{ name: 'Título H2 (bold)', element: 'h2', attributes: { 'class': 'h_bold'} },
				{ name: 'Título H2', element: 'h2', attributes: {} },
				{ name: 'Título H3 (bold)', element: 'h3', attributes: { } },
				{ name: 'Título H4', element: 'h4', attributes: { } },
				{ name: 'Caja enlace',  type: 'widget', widget: 'blink_box', attributes: { 'class': 'sm__caja-enlace'} },
				{ name: 'Caja destacada',  type: 'widget', widget: 'blink_box', attributes: { 'class': 'sm__caja-destacada'} },
				{ name: 'Icono Sonido', element: 'span', attributes: { 'class': 'sm-icon sm-icon--sonido' } },
				
				// { name: 'Énfasis', element: 'span', attributes: { 'class': 'bck-enfasis' }},
				// { name: 'Enunciado actividad', element: 'h4', attributes: { 'class': 'bck-title-activity' }},

				// { name: 'Tabla centrada', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-center'} },
				// { name: 'Celda encabezado', element: 'td', attributes: { 'class': 'bck-td' } },

				// { name: 'Caja 1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-1' } },
				// { name: 'Caja 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-2' } },
				// { name: 'Caja 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-3' } }
			]
		},
		configEditor: function (editor) {
			editor.dtd.$removeEmpty['span'] = false;
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

