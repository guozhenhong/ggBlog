
function handle404(request, responce){
	responce.writeHead(404, {"Content-Type" : "text/plain"});
	responce.write("404 Not found");
	responce.end();
}

function handle500(request, responce){
	responce.writeHead(500, {"Content-Type" : "text/plain"});
	responce.write("500 Internal Server Error");
	responce.end();
}

exports.handle500 = handle500;
exports.handle404 = handle404;