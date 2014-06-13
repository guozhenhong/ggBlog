var http = require("http");
var querystring = require("querystring");
var requestHandler = require("./requestHandler");


function start(port){
	port = port || 8080;

	var server = http.createServer(function(request, response){
		request.setEncoding('utf8');

		var _postData = [];

		request.on('data', function(chunk){
			postData += chunk;
		});

		request.on('end', function(){
			request.post = querystring.parse(_postData);
			requestHandler.handle(request, response);
		});
	});

	server.listen(port);
	console.log("Server start listen!\n");
}

exports.start = start;