function registerAll(route)
{
	route.map({
		method:'get',

	    url: "/",

	    controller: 'index',

	    action: 'home'
	});


}

exports.staticFileDir = "bower_components";
exports.staticPicDir = "static/image"

exports.registerAll = registerAll;

