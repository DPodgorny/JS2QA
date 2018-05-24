var models = [];

function fillModelDropDown(modelListLoad) {

    var modelDropdown = document.getElementById('model');
    modelDropdown.innerHTML = '';

    var newEl = document.createElement('option');
    newEl.text = 'Select Model';
    newEl.value = '';
    newEl.selected = 1;
    //newEl.hidden = 1; Disabled to let user see all models when model not selected after generating report
    modelDropdown.add(newEl);

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

        default:
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