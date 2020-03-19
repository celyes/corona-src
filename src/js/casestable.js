// let addressPoints = require('./addresses.js');
import { cases } from './addresses';
let container = document.querySelector("#table-container");
let table = document.createElement("table");
table.classList.add("table");
table.setAttribute("id","casesTable");
cases.forEach((item, i) => {
  let row = document.createElement('tr');
  let wilaya = document.createElement('td');
  wilaya.innerText = item[0];
  let cases = document.createElement('td');
  cases.innerText = item[3];
  row.appendChild(wilaya);
  row.appendChild(cases);
  table.appendChild(row);
});
container.appendChild(table);
