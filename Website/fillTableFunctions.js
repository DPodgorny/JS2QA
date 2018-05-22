function createTable(tableDiv) {

    var table = document.createElement('table');
    table.id = 'reportTable';
    tableDiv.appendChild(table);
    return table;

}

function addHeader(table, inputMan) {

    var tr = document.createElement('tr');
    var td = document.createElement('td');

    //add manufacturer cell to the table
    tr.appendChild(td);
    td.appendChild(document.createTextNode(inputMan));
    table.appendChild(tr);

}

function addModelRow(table, model) {

    //check status of the model, if name length even - unavailable, if not even - available
    var modNameLength = model.length % 2;

    if (modNameLength === 0) {
        var modelStatus = 'Not Available';
    }
    else {
        var modelStatus = 'Available';
    }

    //add row to the table
    var tr = document.createElement('tr');

    //fill model cell
    var td = document.createElement('td');
    tr.appendChild(td);
    td.appendChild(document.createTextNode(model));

    //fill status cell
    var td = document.createElement('td');
    tr.appendChild(td);
    td.appendChild(document.createTextNode(modelStatus));

    table.appendChild(tr);

}