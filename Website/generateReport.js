function generateReport() {

    //get values of selected dropdowns
    var man = document.getElementById('Manufacturer').value;
    var mod = document.getElementById('Model').value;
    var tableDiv = document.getElementById('tableDiv');
    tableDiv.innerHTML = '';


    //error if manufacturer not selected, show error
    if (man === '') {

        tableDiv.appendChild(document.createTextNode('Please select a manufacturer'));

    }

    //if manufacturer selected, show model names and status
    else {

        //if model not selected, show all models
        if (mod === '') {

            //Put table header with manufacturer
            fillTableMan(man);

            var modelSorted = models.sort();

            for (var a = 0; a < modelSorted.length; a++) {

                //Put model and status to the table
                fillTableMod(modelSorted[a]);

            }
        }

        //if model not empty, show info for selected model
        else {

            //Check wether is valid for specified manufacturer
            var valueExist = models.includes(mod);
            //if not
            if (valueExist === false) {

                tableDiv.appendChild(document.createTextNode('Specified model doesn\'t exist in the selected manufacturer'));

            }
            //if yes
            else {

                //Put table header with manufacturer
                fillTableMan(man);
                //Put model and status to the table
                fillTableMod(mod);
            }
        }
    }
}

