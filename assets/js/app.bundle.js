!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){var o=r(3),n=[];o.forEach((function(e){for(var t=0;t<15*e[1];t++)n.push([e[2],e[3],30])})),e.exports={addressPoints:n,cases:o}},function(e,t,r){r(2),e.exports=r(4)},function(e,t,r){"use strict";r.r(t);var o=r(0);jQuery(document).ready((function(){$("#cases-by-wilaya").DataTable({data:o.cases,columns:[{title:"الوﻻية"},{title:"الحالات"}],language:{sEmptyTable:"ليست هناك بيانات متاحة في الجدول",sLoadingRecords:"جارٍ التحميل...",sProcessing:"جارٍ التحميل...",sLengthMenu:"أظهر _MENU_ مدخلات",sZeroRecords:"لم يعثر على أية سجلات",sInfo:"إظهار _START_ إلى _END_ من أصل _TOTAL_ مدخل",sInfoEmpty:"يعرض 0 إلى 0 من أصل 0 سجل",sInfoFiltered:"(منتقاة من مجموع _MAX_ مُدخل)",sInfoPostFix:"",sSearch:"ابحث:",sUrl:"",oPaginate:{sFirst:"الأول",sPrevious:"السابق",sNext:"التالي",sLast:"الأخير"},oAria:{sSortAscending:": تفعيل لترتيب العمود تصاعدياً",sSortDescending:": تفعيل لترتيب العمود تنازلياً"}},pageLength:25,order:[[1,"desc"]]})})),fetch("https://corona.lmao.ninja/countries/algeria").then((function(e){return e.json()})).then((function(e){var t=document.querySelector("#cases"),r=document.querySelector("#deaths"),o=document.querySelector("#total"),n=document.querySelector("#recovered"),s=document.querySelector("#todayCases");t.innerText=e.cases-(e.deaths+e.recovered),r.innerText=e.deaths,o.innerText="عدد الحالات الإجمالي: "+e.cases+" حالة ",n.innerText=e.recovered,s.innerText=e.todayCases;var a=document.getElementById("myChart").getContext("2d"),c={labels:["الحالات قيد التماثل للشفاء","الحالات المتوفاة","الحالات التي شفيت"],datasets:[{label:"الاصابات (الحالات)",backgroundColor:["#007BFF","#ffc107","#0fd850"],data:[e.cases-(e.deaths+e.recovered),e.deaths,e.recovered]}]};new Chart(a,{type:"doughnut",data:c,options:{}})}));var n=L.map("heatmap").setView([28.5,3.6],4.5);L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/streets-v11",maxZoom:18,tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoiY2VseWVzIiwiYSI6ImNrN3Z0NjY3cjFjMnIzbnNmYWp2MHc0bDcifQ.lZykGC-yHpwcM6GsOX-GMQ"}).addTo(n),L.heatLayer(o.addressPoints).addTo(n)},function(e,t){e.exports=[["البليدة",110,36.4889434,2.7685398],["الجزائر العاصمة",42,36.7631,3.0506],["تيزي وزو",11,36.7169,4.0497],["وهران",8,35.69,-.64],["عنابة",6,36.9,7.7667],["سكيكدة",5,36.8799,6.9075],["الوادي",4,33.368309,6.867369],["سطيف",3,36.19,5.41],["برج بوعريريج",2,36.0676,4.7453],["بجاية",2,36.75,5.0833],["تيبازة",2,36.592,2.449],["المدية",2,36.2653,2.767],["معسكر",2,35.3941,.138],["قالمة",2,36.4651,7.4306],["البويرة",2,36.38,3.9014],["الشلف",1,36.1653,1.3345],["سيدي بلعباس",1,35.18994,-.63085],["عين تموشنت",1,35.29749,-1.14037],["مستغانم",1,35.93115,.08918],["جيجل",1,36.82055,5.76671],["ورقلة",1,31.9575,5.3278],["أدرار",1,27.9,-.2833],["سوق أهراس",1,36.2848,7.9515],["بومرداس",1,36.77,3.48],["تيسمسيلت",1,35.6,1.81],["خنشلة",1,35.43583,7.14333]]},function(e,t,r){"use strict";r.r(t),t.default=r.p+"../css/style.min.css"}]);
//# sourceMappingURL=app.bundle.js.map