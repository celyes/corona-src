!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t){var o,r;r=[],(o=[["البليدة",51,36.4889434,2.7685398],["الجزائر العاصمة",8,36.7631,3.0506],["تيزي وزو",5,36.7169,4.0497],["سكيكدة",5,36.8799,6.9075],["الوادي",2,33.368309,6.867369],["معسكر",2,35.3941,.138],["قالمة",2,36.4651,7.4306],["ورقلة",1,31.9575,5.3278],["أدرار",1,27.9,-.2833],["برج بوعريريج",1,36.0676,4.7453],["البويرة",1,36.38,3.9014],["المدية",1,36.2653,2.767],["بجاية",1,36.75,5.0833],["سوق أهراس",1,36.2848,7.9515],["عنابة",1,36.9,7.7667],["بومرداس",1,36.77,3.48]]).forEach((function(e){for(var t=0;t<15*e[1];t++)r.push([e[2],e[3],30])})),e.exports={addressPoints:r,cases:o}},function(e,t,o){o(2),e.exports=o(3)},function(e,t,o){"use strict";o.r(t);var r=o(0);window.top!=window.self&&(top.location.href=document.location.href),jQuery(document).ready((function(){$("#cases-by-wilaya").DataTable({data:r.cases,columns:[{title:"الوﻻية"},{title:"الحالات"}],language:{sEmptyTable:"ليست هناك بيانات متاحة في الجدول",sLoadingRecords:"جارٍ التحميل...",sProcessing:"جارٍ التحميل...",sLengthMenu:"أظهر _MENU_ مدخلات",sZeroRecords:"لم يعثر على أية سجلات",sInfo:"إظهار _START_ إلى _END_ من أصل _TOTAL_ مدخل",sInfoEmpty:"يعرض 0 إلى 0 من أصل 0 سجل",sInfoFiltered:"(منتقاة من مجموع _MAX_ مُدخل)",sInfoPostFix:"",sSearch:"ابحث:",sUrl:"",oPaginate:{sFirst:"الأول",sPrevious:"السابق",sNext:"التالي",sLast:"الأخير"},oAria:{sSortAscending:": تفعيل لترتيب العمود تصاعدياً",sSortDescending:": تفعيل لترتيب العمود تنازلياً"}},pageLength:25,order:[[1,"desc"]]})})),fetch("https://corona.lmao.ninja/countries/algeria").then((function(e){return e.json()})).then((function(e){var t=document.querySelector("#cases"),o=document.querySelector("#deaths"),r=document.querySelector("#total"),n=document.querySelector("#recovered"),a=document.querySelector("#todayCases");t.innerText=e.cases-(e.deaths+e.recovered),o.innerText=e.deaths,r.innerText="عدد الحالات الإجمالي: "+e.cases+" حالة ",n.innerText=e.recovered,a.innerText=e.todayCases;var s=document.getElementById("myChart").getContext("2d"),c={labels:["الحالات قيد التماثل للشفاء","الحالات المتوفاة","الحالات التي شفيت","الحالات الجديدة"],datasets:[{label:"الاصابات (الحالات)",backgroundColor:["#007BFF","#ffc107","#0fd850","#dc3545"],data:[e.cases-(e.deaths+e.recovered),e.deaths,e.recovered,e.todayCases]}]};new Chart(s,{type:"doughnut",data:c,options:{}})}));var n=L.map("heatmap").setView([28.5,3.6],4.5);L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/streets-v11",maxZoom:18,tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoiY2VseWVzIiwiYSI6ImNrN3Z0NjY3cjFjMnIzbnNmYWp2MHc0bDcifQ.lZykGC-yHpwcM6GsOX-GMQ"}).addTo(n),L.heatLayer(r.addressPoints).addTo(n)},function(e,t,o){"use strict";o.r(t),t.default=o.p+"../css/style.min.css"}]);
//# sourceMappingURL=app.bundle.js.map