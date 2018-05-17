function fillModelTable(modelListLoad) {

    document.getElementById('Model').innerHTML = '';
    var models = [];

    switch (modelListLoad) {

        case 'Mercedes':
            models = modelListMerc;
            break;

        case 'Toyota':
            models = modelListToyota;
            break;

        case 'Lada':
            models = modelListLada;
            break;
    }

    var modelDropdown = document.getElementById('Model');

    var newEl = document.createElement('option');
    newEl.text = 'Select Model';
    newEl.value = '';
    newEl.selected = 1;
    //newEl.hidden = 1; Disabled to let user see all models when model not selected after generating report
    modelDropdown.add(newEl);

    for (var a = 0; a < models.length; a++) {

        var newEl = document.createElement('option');
        newEl.text = models[a];
        newEl.value = models[a];
        modelDropdown.add(newEl);
    }
}