var path = require("path");
var route = require("./route");
var invalidHandler = require("./invalidHandler");
var staticFileServer = require("./staticFileServer");
var viewEngine = require("./viewEngine");

function handle(request, response){
	var method = request.method.toLowerCase();

	var actioninfo = route.getActionInfo(request.url, method);

	if(actioninfo.action){
		var controller = require('./controllers/' + actioninfo.controller);
		console.log("In requestHandler.handle(), request for ./controllers/" + actioninfo.controller + ", the action is " + actioninfo.action);

		if(controller[actioninfo.action]){
			var ct = new controllerContext(request, response);

			controller[actioninfo.action].apply(ct, actioninfo.args);

		}else{
			invalidHandler.handle500(request, response);
		}
	}else{
		console.log("In request for static file.");
		staticFileServer.handlerStaticFile(request, response);
	}
}

var controllerContext = function(request, response){
	this.req = request;
	this.res = response;

	this.handle500 = invalidHandler.handle500;
	this.handle404 = invalidHandler.handle404;
};

controllerContext.prototype.render = function(viewName, context){
	viewEngine.render(this.req, this.res, viewName, context);
};

controllerContext.prototype.renderJson = function(json){
	viewEngine.	renderJson(this.req, this.res, json);
};

exports.handle = handle;