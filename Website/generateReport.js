function generateReport(responseObj) {

    var tableDiv = document.getElementById('tableDiv');
    tableDiv.innerHTML = '';
    document.getElementById('tableDiv').removeAttribute('class');

    //get error message if presented
    if (responseObj.error !== undefined) {

        tableDiv.appendChild(document.createTextNode(responseObj.error));
        tableDiv.className = 'error';
        return;
    }

    var table = createTable(tableDiv);

    for (var key in responseObj) {

        if (key === 'manufacturer') {

            //Put table header with manufacturer
            addHeader(table, responseObj.manufacturer);
        }
        else {

            //Put model with status
            addModelRow(table, key, responseObj[key]);
        }
    }
}

function requestStatus() {

    //get values of selected dropdowns
    var man = document.getElementById('manufacturer').value;
    var mod = document.getElementById('model').value;

    return new Promise(function (res) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', 'http://localhost:8080/status/' + man + '/' + mod, true);
        xmlHttp.onload = function() {

            res(JSON.parse(xmlHttp.responseText));
        }

        xmlHttp.send();
    })
}