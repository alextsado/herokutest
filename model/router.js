
var url = require('url');
var fs = require('fs');
var home = require('../controller/home');
var musicPage = require('../controller/music');

function route(req, res) {
 req.requrl = url.parse(req.url, true);
 var path = req.requrl.pathname;
 if (/\.(css)$/.test(path)) {
   res.writeHead(200, {'Content-Type': 'text/css'});
   res.write(fs.readFileSync(__dirname + path, 'utf8'));
   res.end();
 } else if (/.(js)$/.test(path)){
     res.writeHead(200, {'Content-Type': 'text/javascript'});
     res.write(fs.readFileSync(__dirname + path, 'utf8'));
     res.end();
 } else if (/.(json)$/.test(path)){
     res.writeHead(200, {'Content-Type': 'text/json'});
     res.write(fs.readFileSync(__dirname + path, 'utf8'));
     res.end();
 } else {
  if (path === '/' || path === '/home') {
   home.get(req, res);
  } else if (path === '/music') {
      musicPage.get(req, res);
  } else {
   require('../controller/404').get(req, res);
  }
 }

}

exports.route = route;

