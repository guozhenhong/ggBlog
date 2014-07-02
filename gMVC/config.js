function registerAll(route)
{
	route.map({
		method:'get',

	    url: "/",

	    controller: 'index',

	    action: 'home'
	});

	route.map({
		method : 'get',

		url : '/blogs',

		controller : 'blog',

		action : 'list'
		
	});


	route.map({
		method : 'get',

		url : '/blogs/(\\d+)',

		controller : 'blog',

		action : 'show'
		
	});
}

exports.staticFileDir = "bower_components";
exports.staticPicDir = "static/image"

exports.registerAll = registerAll;

