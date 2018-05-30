function createTable(tableDiv) {

    var table = document.createElement('table');
    table.id = 'reportTable';
    tableDiv.appendChild(table);
    return table;

}

function addHeader(table, inputMan) {

    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.colSpan = '2';

    //add manufacturer cell to the table
    tr.appendChild(th);
    th.appendChild(document.createTextNode(inputMan));
    table.prepend(tr);

}

function addModelRow(table, model, status) {
  
  
    if (status === 'Not Available') {
      
        var styleAvailablity = 'styleNotAvailable';
    }
    else if (status === 'Available') {
      
        var styleAvailablity = 'styleAvailable';
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
    td.appendChild(document.createTextNode(status));
    td.className = styleAvailablity;

    table.appendChild(tr);

}