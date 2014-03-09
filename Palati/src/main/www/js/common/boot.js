/*
 * @author: Angad Salaria
 * This javascript pulls up scripts dynamically by leveraging the application js folder structure.
 */
//Document ready
(function() {
	loadScripts(document.getElementsByName('application-name')[0].content);
})();

function loadScripts(appName){
	var scripts = [
	              'lib/jquery.js',
	              'lib/angular.min.js',
	              'lib/bootstrap.min.js',
	              'lib/underscore.min.js',
	              'lib/ui-bootstrap-custom-tpls-0.6.0.min.js',
	              appName + '/' + appName + '.app.js',
	              appName + '/' + appName + '.controllers.js',
	              appName + '/' + appName + '.directives.js',
	              appName + '/' + appName + '.filters.js',
	              appName + '/' + appName + '.services.js',
	              'common/common.services.js',
	              'common/common.directives.js',
	              'common/common.filters.js'
	               ];
	
	var getScript = function (path) {
		document.write('<script type="text/javascript" src="js/' + path + '"></script>');	
	};
	
	var i, ln;
	
	for(i = 0, ln = scripts.length; i < ln; i++) {
		getScript(scripts[i]);
	}

    

}
