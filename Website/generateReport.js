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

            var table = document.createElement('table');
            var tr = document.createElement('tr');
            var td = document.createElement('td');

            //add manufacturer cell to the table
            tableDiv.appendChild(table);
            table.appendChild(tr);
            tr.appendChild(td);
            td.appendChild(document.createTextNode(man));

            var modelSorted = models.sort();

            for (var a = 0; a < modelSorted.length; a++) {

                //check status of the model, if name length even - unavailable, if not even - available
                var modNameLength = modelSorted[a].length % 2;

                if (modNameLength === 0) {
                    var modelStatus = 'Not Available';
                }
                else {
                    var modelStatus = 'Available';
                }

                //add row to the table for every model
                tr = document.createElement('tr');
                table.append(tr);

                //fill model cell
                td = document.createElement('td');
                tr.appendChild(td);
                td.appendChild(document.createTextNode(modelSorted[a]));

                //fill status cell
                td = document.createElement('td');
                tr.appendChild(td);
                td.appendChild(document.createTextNode(modelStatus));

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

                table = document.createElement('table');
                tr = document.createElement('tr');
                td = document.createElement('td');

                //add manufacturer cell to the table
                tableDiv.appendChild(table);
                table.appendChild(tr);
                tr.appendChild(td);
                td.appendChild(document.createTextNode(man));

                //check status of the model, if name length even - unavailable, if not even - available
                modNameLength = mod.length % 2;

                if (modNameLength === 0) {
                    var modelStatus = 'Not Available';
                }
                else {
                    var modelStatus = 'Available';
                }

                //add row to the table
                tr = document.createElement('tr');
                table.append(tr);

                //fill model cell
                td = document.createElement('td');
                tr.appendChild(td);
                td.appendChild(document.createTextNode(mod));

                //fill status cell
                td = document.createElement('td');
                tr.appendChild(td);
                td.appendChild(document.createTextNode(modelStatus));
            }
        }
    }
}

