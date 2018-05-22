function generateReport() {

    //get values of selected dropdowns
    var man = document.getElementById('manufacturer').value;
    var mod = document.getElementById('model').value;
    var tableDiv = document.getElementById('tableDiv');
    tableDiv.innerHTML = '';


    //error if manufacturer not selected, show error
    if (man === '') {

        tableDiv.appendChild(document.createTextNode('Please select a manufacturer'));
        return;
    }

    //error if manufacturer not valid
    if (!manufacturerList.includes(man)) {

        tableDiv.appendChild(document.createTextNode('No data found'));
        return;
    }

    //if model not empty, check if model belongs to manufacturer
    if (mod !== '') {

        //error if model is not valid for manufacturer
        if (models.includes(mod) === false) {

            tableDiv.appendChild(document.createTextNode("Specified model doesn't exist in the selected manufacturer"));
            return;
        }
    }

    var table = createTable(tableDiv);

    //if model empty, show all models
    if (mod === '') {

        //Put table header with manufacturer
        addHeader(table, man);

        var modelSorted = models.sort();

        for (var a = 0; a < modelSorted.length; a++) {

            //Put model and status to the table
            addModelRow(table, modelSorted[a]);

        }
        return;
    }

    //if model not empty, show specified model
    else {

        //Put table header with manufacturer
        addHeader(table, man);
        //Put model and status to the table
        addModelRow(table, mod);

    }
}

