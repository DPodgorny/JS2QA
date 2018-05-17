function fillTableMan(inputMan) {

    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');

    //add manufacturer cell to the table
    tableDiv.appendChild(table);
    table.id = 'reportTable';
    table.appendChild(tr);
    tr.appendChild(td);
    td.appendChild(document.createTextNode(inputMan));

}

function fillTableMod(model) {

    //check status of the model, if name length even - unavailable, if not even - available
    var modNameLength = model.length % 2;

    if (modNameLength === 0) {
        var modelStatus = 'Not Available';
    }
    else {
        var modelStatus = 'Available';
    }

    //add row to the table
    var table = document.getElementById('reportTable');
    var tr = document.createElement('tr');
    table.append(tr);

    //fill model cell
    var td = document.createElement('td');
    tr.appendChild(td);
    td.appendChild(document.createTextNode(model));

    //fill status cell
    var td = document.createElement('td');
    tr.appendChild(td);
    td.appendChild(document.createTextNode(modelStatus));

}