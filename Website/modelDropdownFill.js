function fillModelTable(modelListLoad) {

    document.getElementById('Model').innerHTML='';
    var model=[];

    switch (modelListLoad) {

        case 'Mercedes':
            model = modelListMerc;
            break;

        case 'Toyota':
            model = modelListToyota;
            break;

        case 'Lada':
            model = modelListLada;
            break;
    }

    var modelDropdown = document.getElementById('Model');

    var newEl = document.createElement('option');
    newEl.value = '';
    modelDropdown.add(newEl);

    for (var a = 0; a < model.length; a++) {

        var newEl = document.createElement('option');
        newEl.text = model[a];
        newEl.value = model[a];
        modelDropdown.add(newEl);
    }
}