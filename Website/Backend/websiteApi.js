var manufacturerList = ['Mercedes', 'Toyota', 'Lada'];

var http = require('http');

http.createServer(function(req, res) {

    var body = [];

    req.on('data', function(chunk) {
        console.log(chunk);
        body.push(chunk);
    }).on('end', function() {
        body = Buffer.concat(body).toString();
        var a = JSON.parse(body);
        console.log(a.name[0]);

    });

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('asdas');

}).listen(8080);