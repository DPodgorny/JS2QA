var models = [];

function fillModelDropDown(responseObj) {

    var modelDropdown = document.getElementById('model');
    modelDropdown.innerHTML = '';
    var btn = document.getElementById('genReportBtn');


    var newEl = document.createElement('option');
    newEl.text = 'Select Model';
    newEl.value = '';
    newEl.selected = 1;
    //newEl.hidden = 1; Disabled to let user see all models when model not selected after generating report
    modelDropdown.add(newEl);



    if (responseObj.error === undefined) {

        models = responseObj;
    }
    else {

        console.log(responseObj.error);
        return;
    }

    for (var a = 0; a < models.length; a++) {

        var newEl = document.createElement('option');
        newEl.text = models[a];
        newEl.value = models[a];
        modelDropdown.add(newEl);
    }

    //added model outside of array to check validation wether model belongs to manufacturer
    var extEl = document.createElement('option');
    extEl.text = 'Test';
    extEl.value = 'Test to check validation';
    modelDropdown.add(extEl);
}

function requestModels(manufacturer) {

    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open('GET', 'http://localhost:8080/models/' + manufacturer, true);

    xmlHttp.onload = function () {

                var responseObj = JSON.parse(xmlHttp.responseText);
                fillModelDropDown(responseObj);
    }

    xmlHttp.send();
}