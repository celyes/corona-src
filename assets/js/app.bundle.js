!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){var r,n;n=[],(r=[["البليدة",36.4889434,2.7685398,51],["الجزائر العاصمة",36.7631,3.0506,8],["تيزي وزو",36.7169,4.0497,5],36.8799,["معسكر",35.3941,.138,2],["قالمة",36.4651,7.4306,2],["الوادي",35.9833,4.1667,2],["برج بوعريريج",36.0676,4.7453,1],["ورقلة",31.9575,5.3278,1],["البويرة",36.38,3.9014,1],["المدية",36.2653,2.767,1],["بجاية",36.75,5.0833,1],["سوق أهراس",36.2848,7.9515,1],["عنابة",36.9,7.7667,1],["بومرداس",36.7363844,3.3523493,1]]).forEach((function(e){for(var t=0;t<15*e[3];t++)n.push([e[1],e[2],30])})),e.exports={addressPoints:n,cases:r}},function(e,t,r){r(2),r(3),e.exports=r(4)},function(e,t,r){"use strict";r.r(t);var n=r(0);window.top!=window.self&&(top.location.href=document.location.href),fetch("https://corona.lmao.ninja/countries/algeria").then((function(e){return e.json()})).then((function(e){var t=document.querySelector("#cases"),r=document.querySelector("#deaths"),n=document.querySelector("#total"),o=document.querySelector("#recovered"),a=document.querySelector("#todayCases");t.innerText=e.cases-(e.deaths+e.recovered),r.innerText=e.deaths,n.innerText="عدد الحالات الإجمالي: "+e.cases+" حالة ",o.innerText=e.recovered,a.innerText=e.todayCases;var c=document.getElementById("myChart").getContext("2d"),s={labels:["الحالات قيد التماثل للشفاء","الحالات المتوفاة","الحالات التي شفيت","الحالات الجديدة"],datasets:[{label:"الاصابات (الحالات)",backgroundColor:["#007BFF","#ffc107","#0fd850","#dc3545"],data:[e.cases-(e.deaths+e.recovered),e.deaths,e.recovered,e.todayCases]}]};new Chart(c,{type:"doughnut",data:s,options:{}})}));var o=L.map("heatmap").setView([28.5,3.6],4.5);L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/streets-v11",maxZoom:18,tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoiY2VseWVzIiwiYSI6ImNrN3Z0NjY3cjFjMnIzbnNmYWp2MHc0bDcifQ.lZykGC-yHpwcM6GsOX-GMQ"}).addTo(o),L.heatLayer(n.addressPoints).addTo(o)},function(e,t,r){"use strict";r.r(t);var n=r(0),o=document.createElement("table");o.classList.add("table"),o.setAttribute("id","casesTable"),n.cases.forEach((function(e,t){var r=document.createElement("tr"),n=document.createElement("td");n.innerText=e[0];var a=document.createElement("td");a.innerText=e[3],r.appendChild(n),r.appendChild(a),o.appendChild(r)})),document.body.appendChild(o)},function(e,t,r){"use strict";r.r(t),t.default=r.p+"../css/style.min.css"}]);
//# sourceMappingURL=app.bundle.js.map