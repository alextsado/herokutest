var server = require("../model/server");
var router = require("../model/router");

server.start(router.route);
