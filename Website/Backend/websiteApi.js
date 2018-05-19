var modelListMerc = ['E-Class', 'S-Class', 'A-Class', 'C-Class', 'B-Class', 'R-Class', 'CLK', 'SLK'];
var modelListToyota = [ 'Corolla',  'Yaris', 'Prius', 'Avensis', 'Camry', 'Land Cruiser'];
var modelListLada = ['110', 'Vesta', 'Largus', 'X-Ray'];

var http = require('http');

http.createServer(function(req, res) {

    var body = [];

    req.on('data', function(requestMan) {
        body.push(requestMan);
    }).on('end', function() {

        body = Buffer.concat(body).toString();
        //var man = JSON.parse(body);
        var man = body;

        switch (man) {

            case 'Mercedes':
                var modelList = modelListMerc;
                break;
            case 'Toyota':
                var modelList = modelListToyota;
                break;
            case 'Lada':
                var modelList = modelListLada;
                break;
            default:
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('Manufacturer is not valid');
                return;
        }

        modelList = JSON.stringify(modelList);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(modelList);
    });

}).listen(8080);