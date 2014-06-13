var invalidHandler = require("./invalidHandler");
var jade = require("jade");
var path = require("path");

var templateCache = {};

function render(req, res, viewName, context){
	var filename = path.join(__dirname, 'views/pages', viewName);
	try{
		// console.log("In viewEngin.render, filename is " + filename);
		var output = jade.renderFile(filename, context);
		// console.log("In viewEngin.render, render output is " + output);
	}catch(err){
		invalidHandler.handle500(req, res, err);
		return;
	}

	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end(output);
}

exports.render = render;

// function renderJson(req, res, json){
// 		//todo
// 	}
// };

// var MyJade = {
// 	readView : function (viewPath, context){
// 		var template = templateCache[viewPath];
// 		if(!template)
// 		{
// 			template = MyJade.getTemplateStr(viewPath);
// 			templateCache[viewPath] = template;
// 		}

// 		var output = 
// 	}
// }
