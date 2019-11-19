

let table_creation = function(row,column){
    //remove collection
   let my_table = document.getElementById('my-table');
   my_table.style.border = '1';
   let table_body =  doument.createElement('table-body');
   for (i = 0; i < 3; i++){
       let tr = document.createElement('TR');
       table_creation.appendChild(tr);
   }
   for (x = 0; x <5; x++){
       let td = document.createElement('TD');
       td.width = '75';
       tr.appendChild(td);
   }

my_table .appendChild(table);
}
table_creation()