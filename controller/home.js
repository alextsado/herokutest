var template = require('../view/template-main');
var test_data = require('../model/test-data');
var fs = require('fs')

exports.get = function(req, res) {
    
    fs.readFile(__dirname + '/del.txt', 'utf8', function (err, data){
                if (err) {
                return console.log('myerror:'+err);
                }
                console.log(data);
               
                });
    
 var teamlist = test_data.teamlist;
 var strTeam = "", i = 0;
 for (i = 0; i<teamlist.count;) {
 strTeam = strTeam + "<li>" + teamlist.teams[i].country + "</li>";
 i = i+1;
 }
 strTeam = "<ul>" + strTeam + "</ul>"
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write(
 template.build("Test web page on node.js","Hello there","<p>The teams in Group " + teamlist.GroupName + " for Euro 2012 are:</p>" + strTeam));
 res.end();
}


