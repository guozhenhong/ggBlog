var server = require("./server");
var config = require("./config");
var route = require("./route");

config.registerAll(route);

server.start(7777);