function generateReport() {

    //get values of selected dropdowns
    var man = document.getElementById('Manufacturer').value;
    var mod = document.getElementById('Model').value;
    var tableDiv = document.getElementById('tableDiv');
    tableDiv.innerHTML = '';


    //error if manufacturer not selected, show error
    if (man === '') {

        tableDiv.appendChild(document.createTextNode('Please select a manufacturer'));
        return;
    }

    //error if manufacturer not valid
    if (manufacturerList.includes(man) === false) {

        tableDiv.appendChild(document.createTextNode('No data found'));
        return;
    }

    //if model not empty, check if model belongs to manufacturer
    if (mod != '') {

        //error if model is not valid for manufacturer
        if (models.includes(mod) === false) {

            tableDiv.appendChild(document.createTextNode('Specified model doesn\'t exist in the selected manufacturer'));
            return;
        }
    }

    //if model empty, show all models
    if (mod === '') {

        //Put table header with manufacturer
        fillTableMan(man);

        var modelSorted = models.sort();

        for (var a = 0; a < modelSorted.length; a++) {

            //Put model and status to the table
            fillTableMod(modelSorted[a]);

        }
        return;
    }

    //if model not empty, show specified model
    else {

        //Put table header with manufacturer
        fillTableMan(man);
        //Put model and status to the table
        fillTableMod(mod);

    }
}

