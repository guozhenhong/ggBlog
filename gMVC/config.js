function registerAll(route)
{
	route.map({
		method:'get',

	    url: "/",

	    controller: 'home',

	    action: 'home'
	});

	route.map({
		method : 'get',

		url : '/article',

		controller : 'article',

		action : 'list'
		
	});


	route.map({
		method : 'get',

		url : '/article/(\\d+)',

		controller : 'article',

		action : 'show'
		
	});
}

exports.staticFileDir = "bower_components";
exports.staticPicDir = "static/image"

exports.registerAll = registerAll;

