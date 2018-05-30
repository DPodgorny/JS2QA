module.exports = processRequest;

var modelListMerc = ['E-Class', 'S-Class', 'A-Class', 'C-Class', 'B-Class', 'R-Class', 'CLK', 'SLK', 'ML'];
var modelListToyota = [ 'Corolla',  'Yaris', 'Prius', 'Avensis', 'Camry', 'Land Cruiser'];
var modelListLada = ['110', 'Vesta', 'Largus', 'X-Ray'];

function processRequest(path) {

    //path[1] = requestType path[2] = manufacturer path[3] = model

    var responseObj;

    //Model list requested
    if (path[1] === 'models') {

        responseObj = getModelList(path[2]);
        return responseObj;
    }

    //Model status requested
    else if (path[1] === 'status') {

        responseObj = getModelStatus(path[2], path[3]);
        return responseObj;
    }

    else {

        responseObj = {'error': 'Request is not valid'};
        return responseObj;
    }
}

function getModelList(requestedModel) {

    var models;

    switch (requestedModel) {
        case 'Mercedes':
            models = modelListMerc;
            break;

        case 'Toyota':
            models = modelListToyota;
            break;

        case 'Lada':
            models = modelListLada;
            break;

        default:
            models = {'error': 'Manufacturer is not valid'};
            return models;
            break;
    }

    var modelsSorted = models.sort();
    return modelsSorted;
}

function getModelStatus(manufacturer, model) {

    var modelList = getModelList(manufacturer);
    var modelStatusList = {};

    //Check that manufacturer valid
    if (!modelList.error === undefined)
    {
        return modelList;
    }

    //Model undefined - return all models
    if (model === undefined)
    {

        for (var a=0; a<modelList.length; a++) {

            if (modelList[a].length % 2 === 0) {

                var modelStatus = 'Not Available';
            }
            else {

                var modelStatus = 'Available';
            }

            modelStatusList[modelList[a]] = modelStatus;
        }

        return modelStatusList;
    }

    //Model invalid - return error
    if (!modelList.includes(model)) {

        modelStatusList = {'error': 'Model is not valid for manufacturer'};
        return modelStatusList;
    }

    //Model defined and valid
    if (model.length % 2 === 0) {

        var modelStatus = 'Not Available';
    }
    else {

        var modelStatus = 'Available';
    }

    modelStatusList[model] = modelStatus;

    return modelStatusList;
}