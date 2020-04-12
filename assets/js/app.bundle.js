!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,o){var r=o(3),n=[];r.forEach((function(e){for(var t=0;t<15*e[1];t++)n.push([e[2],e[3],25])})),e.exports={addressPoints:n,cases:r}},function(e,t,o){o(2),e.exports=o(4)},function(e,t,o){"use strict";o.r(t);var r=o(0);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}if(document.querySelector(".overlay").style.display="none",document.querySelector(".message").style.display="none",jQuery(document).ready((function(){"/cases-by-wilaya.html"==window.location.pathname&&$("#cases-by-wilaya").DataTable({data:r.cases,language:{url:"https://cdn.datatables.net/plug-ins/1.10.20/i18n/Arabic.json"},columns:[{title:"الوﻻية"},{title:"الحالات"}],pageLength:25,order:[[1,"desc"]]})})),"/"!=window.location.pathname&&"/index.html"!=window.location.pathname||fetch("https://corona.lmao.ninja/countries/algeria").then((function(e){return e.json()})).then((function(e){var t,o=document.querySelector("#cases"),r=document.querySelector("#deaths"),a=document.querySelector("#total"),s=document.querySelector("#recovered"),i=document.querySelector("#todayCases");o.innerText=e.cases-(e.deaths+e.recovered),r.innerText=e.deaths,a.innerText="عدد الحالات الإجمالي: "+e.cases+" حالة ",s.innerText=e.recovered,i.innerText=e.todayCases;var c=document.getElementById("myChart").getContext("2d"),l={labels:["الحالات قيد التماثل للشفاء","الحالات المتوفاة","الحالات التي شفيت"],datasets:[(t={label:"الاصابات (الحالات)",backgroundColor:["rgba(0,123,255,0.2)","rgba(255,193,7,0.2)","rgba(15,216,80,0.2)"]},n(t,"backgroundColor",["rgba(0,123,255,1)","rgba(255,193,7,1)","rgba(15,216,80,1)"]),n(t,"borderWidth",1),n(t,"data",[e.cases-(e.deaths+e.recovered),e.deaths,e.recovered]),t)]};new Chart(c,{type:"pie",data:l,options:{tooltips:{borderColor:"rgba(0,123,255,0.75)",borderWidth:1,backgroundColor:"#FFF",titleFontSize:16,titleFontColor:"#0066ff",bodyFontColor:"#000",bodyFontSize:16,displayColors:!1}}})})),"/heatmap.html"==window.location.pathname){var a=L.map("heatmap").setView([28.5,3.6],4.5);L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/streets-v11",maxZoom:18,tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoiY2VseWVzIiwiYSI6ImNrN3Z0NjY3cjFjMnIzbnNmYWp2MHc0bDcifQ.lZykGC-yHpwcM6GsOX-GMQ"}).addTo(a),L.heatLayer(r.addressPoints,{radius:15}).addTo(a)}},function(e,t){e.exports=[["البليدة",529,36.4889434,2.7685398],["الجزائر العاصمة",310,36.7631,3.0506],["وهران",104,35.69,-.64],["سطيف",80,36.19,5.41],["بجاية",77,36.75,5.0833],["تيبازة",55,36.592,2.449],["تيزي وزو",47,36.7169,4.0497],["عين الدفلى",40,36.26405,1.9679],["تلمسان",38,34.87833,-1.315],["برج بوعريريج",37,36.0676,4.7453],["قسنطينة",33,36.365,6.61472],["الشلف",30,36.1653,1.3345],["مستغانم",29,35.93115,.08918],["المدية",26,36.2653,2.767],["بومرداس",25,36.77,3.48],["الجلفة",21,34.67279,3.263],["سكيكدة",21,36.8799,6.9075],["جيجل",21,36.82055,5.76671],["معسكر",20,35.3941,.138],["باتنة",18,35.55597,6.17414],["أم البواقي",17,35.87541,7.11353],["سيدي بلعباس",17,35.18994,-.63085],["الوادي",16,33.368309,6.867369],["تيسمسيلت",15,35.6,1.81],["عنابة",14,36.9,7.7667],["البويرة",13,36.38,3.9014],["عين تموشنت",13,35.29749,-1.14037],["بسكرة",10,34.85038,5.72805],["بشار",10,31.61667,-2.21667],["غليزان",9,35.73734,.55599],["المسيلة",8,35.70583,4.54194],["الأغواط",8,33.481,2.523],["قالمة",6,36.4651,7.4306],["خنشلة",6,35.43583,7.14333],["سوق أهراس",6,36.2848,7.9515],["تبسة",6,35.40417,8.12417],["ورقلة",4,31.9575,5.3278],["تيارت",4,35.37103,1.3167],["أدرار",4,27.9,-.2833],["الطارف",4,36.767,8.317],["ميلة",3,36.45028,6.26444],["غرداية",2,32.29,3.4],["إليزي",2,26.3018,8.2856],["البيض",1,33.68318,1.01927],["النعامة",1,33.1544,.1852],["سعيدة",1,34.83033,.15171]]},function(e,t,o){"use strict";o.r(t),t.default=o.p+"../css/style.min.css"}]);
//# sourceMappingURL=app.bundle.js.map