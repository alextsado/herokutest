var template = require('../view/template-music');
var mydata = require('../model/musicPageData');
var fs = require('fs')

exports.get = function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log("my data is : " + mydata.data.get());
    res.write(
              template.build("MusicNaija","First Page", mydata.data.get()));
    res.end();
}



