const fs = require('fs');
const express = require("express");
var accepts = require('accepts');
var app = express();
var publicIp = require("public-ip");

app.use(express.static(__dirname+ '/Timestamp Microservice'))

var port = 3000;

app.listen(port);

console.log('server on '+port);
app.get(/get/,function(req,res)
{
  var os = require( 'os' );
  var networkInterfaces = os.networkInterfaces();
  publicIp.v4().then(ip => {
    var info= {ip:ip,
      language: req.headers['accept-language'],
      software:req.headers['user-agent']};
    res.send(info)

  });
});
