var urlParser = require('url');

var routes = {get:[], post:[], head:[], put:[], delete:[]};

/*
map example:

route.map({
	method:'post',

    url: /\/blog\/post\/(\d+)\/?$/i,

    controller: 'blog',

    action: 'showBlogPost'
})
*/

function map(dict){
	if(dict && dict.url && dict.controller){
		var method = dict.method ? dict.method.toLowerCase() : 'get';

		routes[method].push({
			url : dict.url,
			ctl : dict.controller,
			act : dict.action || 'index'
		});	
	}
}

function getActionInfo(url, method){
	var r = {controller:null, action:null, args:null};

	method = method ? method.toLowerCase() : 'get';

	var pathname = urlParser.parse(url).pathname;
	// console.log("Request for " + pathname + " received.");

	var m_routers = routes[method];

	for(var i in m_routers){
		var str = m_routers[i].url + '$';
		// console.log("THe str is " + str + "  the router url is " + m_routers[i].url);
		var patt = new RegExp(str);
		r.args = patt.exec(pathname);

		// r.args = m_routers[i].url.exec(pathname);
		// if(pathname == m_routers[i].url){
		if(r.args == null){
			continue;
		}else if(r.args.index == 0){
			r.controller = m_routers[i].ctl;
			r.action = m_routers[i].act;
			r.args.shift();
			// console.log("In routes, getActionInfo(), the r.args is : " + r.args);
			break;
		}
	}
	return r;
}

exports.map = map;
exports.getActionInfo = getActionInfo;