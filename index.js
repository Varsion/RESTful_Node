var restify = require('restify');
var UserController = require('./Controllers/User');

var ip = '127.0.0.1';
var port    =  '3001';
 
var server = restify.createServer();

  
var server = restify.createServer();

server.get('/hello/:name', UserController.Hello);

 
server.listen(port ,ip, function(){
    console.log('%s listening at %s ', server.name , server.url);
});
