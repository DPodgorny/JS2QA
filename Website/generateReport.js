function generateReport() {

    //get values of selected dropdowns
    var man = document.getElementById('manufacturer').value;
    var mod = document.getElementById('model').value;
    var tableDiv = document.getElementById('tableDiv');
    tableDiv.innerHTML = '';
    document.getElementById('tableDiv').removeAttribute('class');

    //get error message
    var errorMessage = validate(man, mod);

    //if error message not null, show this message and stop function;
    if (errorMessage != null) {

        tableDiv.appendChild(document.createTextNode(errorMessage));
        tableDiv.className = 'error';
        return;
    }

    var table = createTable(tableDiv);

    //if model empty, show all models
    if (mod === '') {

        var modelSorted = models.sort();

        for (var a = 0; a < modelSorted.length; a++) {

            //Put model and status to the table
            addModelRow(table, modelSorted[a]);
        }
    }

    //if model not empty, show specified model
    else {

        //Put model and status to the table
        addModelRow(table, mod);
    }

    //Put table header with manufacturer
    addHeader(table, man);
}

