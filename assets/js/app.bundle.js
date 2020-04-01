!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){var n=r(3),o=[];n.forEach((function(e){for(var t=0;t<15*e[1];t++)o.push([e[2],e[3],25])})),e.exports={addressPoints:o,cases:n}},function(e,t,r){r(2),e.exports=r(4)},function(e,t,r){"use strict";r.r(t);var n=r(0);document.querySelector(".overlay").style.display="none",document.querySelector(".message").style.display="none",jQuery(document).ready((function(){$("#cases-by-wilaya").DataTable({data:n.cases,language:{url:"https://cdn.datatables.net/plug-ins/1.10.20/i18n/Arabic.json"},columns:[{title:"الوﻻية"},{title:"الحالات"}],pageLength:50,order:[[1,"desc"]]})})),fetch("https://corona.lmao.ninja/countries/algeria").then((function(e){return e.json()})).then((function(e){var t=document.querySelector("#cases"),r=document.querySelector("#deaths"),n=document.querySelector("#total"),o=document.querySelector("#recovered"),a=document.querySelector("#todayCases");t.innerText=e.cases-(e.deaths+e.recovered),r.innerText=e.deaths,n.innerText="عدد الحالات الإجمالي: "+e.cases+" حالة ",o.innerText=e.recovered,a.innerText=e.todayCases;var s=document.getElementById("myChart").getContext("2d"),c={labels:["الحالات قيد التماثل للشفاء","الحالات المتوفاة","الحالات التي شفيت"],datasets:[{label:"الاصابات (الحالات)",backgroundColor:["#007BFF","#ffc107","#0fd850"],data:[e.cases-(e.deaths+e.recovered),e.deaths,e.recovered]}]};new Chart(s,{type:"doughnut",data:c,options:{}})}));var o=L.map("heatmap").setView([28.5,3.6],4.5);L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/streets-v11",maxZoom:18,tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoiY2VseWVzIiwiYSI6ImNrN3Z0NjY3cjFjMnIzbnNmYWp2MHc0bDcifQ.lZykGC-yHpwcM6GsOX-GMQ"}).addTo(o),L.heatLayer(n.addressPoints,{radius:15}).addTo(o)},function(e,t){e.exports=[["البليدة",294,36.4889434,2.7685398],["الجزائر العاصمة",125,36.7631,3.0506],["وهران",44,35.69,-.64],["تيزي وزو",29,36.7169,4.0497],["بجاية",26,36.75,5.0833],["سطيف",19,36.19,5.41],["تيبازة",18,36.592,2.449],["المدية",17,36.2653,2.767],["عين الدفلى",13,36.26405,1.9679],["تلمسان",12,34.87833,-1.315],["برج بوعريريج",11,36.0676,4.7453],["بومرداس",9,36.77,3.48],["مستغانم",8,35.93115,.08918],["سكيكدة",8,36.8799,6.9075],["قسنطينة",8,36.365,6.61472],["الشلف",7,36.1653,1.3345],["معسكر",7,35.3941,.138],["الوادي",7,33.368309,6.867369],["البويرة",6,36.38,3.9014],["عنابة",6,36.9,7.7667],["سيدي بلعباس",6,35.18994,-.63085],["الطارف",4,36.767,8.317],["جيجل",4,36.82055,5.76671],["قالمة",3,36.4651,7.4306],["سوق أهراس",3,36.2848,7.9515],["الجلفة",2,34.67279,3.263],["بسكرة",2,34.85038,5.72805],["أم البواقي",2,35.53,7.7],["عين تموشنت",2,35.29749,-1.14037],["خنشلة",2,35.43583,7.14333],["أدرار",2,27.9,-.2833],["باتنة",2,35.33,6.1],["تيسمسيلت",2,35.6,1.81],["ورقلة",1,31.9575,5.3278],["المسيلة",1,35.70583,4.54194],["إليزي",1,26.3018,8.2856],["الأغواط",1,33.481,2.523],["غرداية",1,32.29,3.4],["غليزان",1,35.44,.33]]},function(e,t,r){"use strict";r.r(t),t.default=r.p+"../css/style.min.css"}]);
//# sourceMappingURL=app.bundle.js.map