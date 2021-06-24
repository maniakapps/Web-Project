function createTable(){
    let items =['xd','ret'];
    let empTable = document.createElement("TABLE");
    empTable.setAttribute("id","Items");
    for (let i = 0; i < items.length; i++){
        let row = empTable.insertRow(i)
        for (let j = 0; j < row.length; j++){
            let cell1 = row.insertCell(j);
            cell1 += items[j];
            row.appendChild(cell1);
        }
    }
    document.getElementById("table").appendChild(empTable);
}
function addTable() {

    var myTableDiv = document.getElementById("table");

    var table = document.createElement('table');
    table.border='1';

    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (var i=0; i<3; i++){
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (var j=0; j<4; j++){
            var td = document.createElement('TD');
            td.width='75';
            td.appendChild(document.createTextNode("Cell " + i + "," + j));
            tr.appendChild(td);
        }
    }
    myTableDiv.appendChild(table);

}
function load() {
  addTable()
}
