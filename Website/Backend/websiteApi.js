var modelListMerc = ['E-Class', 'S-Class', 'A-Class', 'C-Class', 'B-Class', 'R-Class', 'CLK', 'SLK'];
var modelListToyota = [ 'Corolla',  'Yaris', 'Prius', 'Avensis', 'Camry', 'Land Cruiser'];
var modelListLada = ['110', 'Vesta', 'Largus', 'X-Ray'];

var http = require('http');
var url = require('url');

http.createServer(function(req, res) {

    var urlParse = url.parse(req.url).pathname;
    var pathSplit = urlParse.split('/');

    if (pathSplit[1] === 'models') {

        switch (pathSplit[2]) {
            case 'Mercedes':
                var models = modelListMerc;
                var responseObj = {'models': models};
                break;

            case 'Toyota':
                var models = modelListToyota;
                var responseObj = {'models': models};
                break;

            case 'Lada':
                var models = modelListLada;
                var responseObj = {'models': models};
                break;

            default:
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('Manufacturer is not valid');
                return;
        }
    }

    else if (pathSplit[1] === 'status') {

        console.log(pathSplit[2]);
        switch (pathSplit[2]) {
            case 'Mercedes':
                var models = modelListMerc;
                var responseObj = {'models': models};
                break;

            case 'Toyota':
                var models = modelListToyota;
                var responseObj = {'models': models};
                break;

            case 'Lada':
                var models = modelListLada;
                var responseObj = {'models': models};
                break;

            default:
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('Manufacturer is not valid');
                return;
        }

        console.log(models);
        if (pathSplit[3] === undefined)
        {
            var responseObj = {};
            for (var a=0; a<models.length; a++) {

                var modNameLength = models[a].length % 2;

                if (modNameLength === 0) {
                    var modelStatus = 'Not Available';
                }
                else {
                    var modelStatus = 'Available';
                }

                responseObj[models[a]] = modelStatus;
                console.log(responseObj);
            }
        }
        else
        {
            var modNameLength = pathSplit[3].length % 2;

            if (modNameLength === 0) {
                var modelStatus = 'Not Available';
            }
            else {
                var modelStatus = 'Available';
            }
            var responseObj = {};
            responseObj[pathSplit[3]] = modelStatus;
        }

    }
    else
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('Request is not valid');
        return;
    }

        var responseStr = JSON.stringify(responseObj);

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(responseStr);
}).listen(8080);