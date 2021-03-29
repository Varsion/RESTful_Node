var restify = require('restify');
var UserController = require('./Controllers/User');
var corsMiddleware = require('restify-cors-middleware');

var ip = '127.0.0.1';
var port    =  '3001';

const cors = corsMiddleware({
  preflightMaxAge: 5,
  origins: ['*'],
  allowHeaders: ['API-Token'],
  exposeHeaders: ['API-Token-Expiry']
})

var server = restify.createServer();

/**
 * Load plugins
 */
server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/hello/:name', UserController.Hello);


server.listen(port ,ip, function(){
    console.log('%s listening at %s ', server.name , server.url);
});
