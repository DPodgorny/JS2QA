var http = require('http');
var url = require('url');
var processRequest = require('./requestProcessing');

http.createServer(function(req, res) {

    //Parse request and put to array
    var urlParse = url.parse(req.url).pathname;
    var pathSplit = urlParse.split('/');

    //Process request
    var responseObj = processRequest(pathSplit);
    var responseStr = JSON.stringify(responseObj);

    //Return required info
    res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    res.end(responseStr);

}).listen(8080);