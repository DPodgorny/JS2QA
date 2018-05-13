function generateReport() {
    var man = document.getElementById('Manufacturer').value;
    var mod = document.getElementById('Model').value;

    var tableDiv = document.getElementById('tableDiv');
    var table = document.createElement('table');
    table.border = '3';
    var tr = document.createElement('tr');
    tr.border = '0';
    var td = document.createElement('td');
    td.border = '0';

    tableDiv.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(td);
    td.appendChild(document.createTextNode(man));

    if (mod != undefined)
    {
        var tr = document.createElement('tr');
        table.append(tr);
        var td = document.createElement('td');
        tr.appendChild(td);
        td.appendChild(document.createTextNode(mod));
        var td = document.createElement('td');
        td.width = '100';
        td.appendChild(document.createTextNode(''));
    }
    /*for (var a = 0; a<model.length; a++)
    {
        table.appendChild(tr);
        td.appendChild(document.createTextNode(model));
        tr.appendChild(td);
        td.appendChild(document.createTextNode(man));
        tr.appendChild(td);
    }*/
}