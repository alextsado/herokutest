var template = require('../view/template-music');
var test_data = require('../model/test-data');
var cjs = require('./assets/cjs/cjs.min.js');
var fs = require('fs');
var mydata = cjs("dummy");

mydata.onChange(function(new_val, old_val) {
         //  console.log("was :" + old_val +", now: " + new_val);
                console.log("mydata updated");
           });

function init() {

    var filepath = __dirname + '/del.txt';
    fs.readFile(filepath, 'utf8', function (err, data){
                if (err) {
                return console.log('myerror:'+err);
                }
                console.log('readFile successful: '+ filepath);
                mydata.set(data);
   
                });
}

init();

exports.data = mydata;

