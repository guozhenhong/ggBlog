var config = require("./config");
var invalidHandler = require("./invalidHandler");
var path = require("path")
var url = require("url");
var fs = require("fs");
var mime = require("mime");

var handlerStaticFile = function(req, res, filePath){
    if(!filePath){
        var fileName = url.parse(req.url).pathname;
        var extType = path.extname(fileName);

        if(extType == ('.jpg' || '.gif' || '.png')){
            filePath = path.join(__dirname, config.staticPicDir, fileName);
        } else{
            filePath = path.join(__dirname, config.staticFileDir, url.parse(req.url).pathname);
        }
        // console.log("In staticFileServer, file path is " + filePath);
    }
    fs.exists(filePath, function(exists) {  
        if(!exists) {  
            invalidHandler.handle404(req, res);  
            return;  
        }  
        console.log("In staticFileServer!! SUCCESS" + filePath + "type is "+ mime.lookup(path.basename(filePath)));
        fs.readFile(filePath, "binary", function(err, file) {  
            if(err) {  
                invalidHandler.handle404(req, res, err);
                return;  
            }
            res.writeHead(200, {'Content-Type': mime.lookup(path.basename(filePath))});
            res.write(file, "binary");
            res.end();
        });  
    });
};

exports.handlerStaticFile = handlerStaticFile;