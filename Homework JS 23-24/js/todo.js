requirejs.config({
	paths: {
		'jquery': ['https://code.jquery.com/jquery-1.12.3.min','lib/jquery.min'],
		'tmpl': 'lib/tmpl',
	},
	shim:{
// this is not necessary cause jQuery has got AMD support by now
//		'jquery': {
//			exports: 'jQuery'
//		},
		'tmpl': {
			exports: 'tmpl'
		}
	}
});

require([
	'jquery',
	'tmpl',
	'todo/model',
	'todo/view',
	'todo/controller'
	], 
function( $, tmpl, Model, View, Controller ) {

	$(function() {

    	var firstTODOList = [
        	'learn Bootstrap',
	        'learn Angular',
	        'learn Coffee'
	        ];

	    var modelTODO = new Model(firstTODOList);
	    var viewTODO = new View(modelTODO);
	    var controllerTODO = new Controller(modelTODO, viewTODO);

	}) // domReady

});
