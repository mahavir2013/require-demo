console.info('main.js loading...');
// var requirejs = require('requirejs');

//requirejs.config({});

requirejs(['scripts/helper/util.js'], function(util) {
	console.info('main.js still loading...');
});

console.info('main.js end');

/*define(['require'], function(require) {



	require(['scripts/helper/util.js'], function(util) {
		console.info('main.js loaded');
	});
});*/