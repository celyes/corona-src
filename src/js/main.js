if(window.top != window.self){top.location.href = document.location.href;}

import { cases, addressPoints } from './addresses';

jQuery(document).ready( function () { 
  $("#cases-by-wilaya").DataTable({
    data: cases,
    columns: [
      { title: "الوﻻية" },
      { title: "الحالات" },
    ],
    language: {
        
      sEmptyTable:     "ليست هناك بيانات متاحة في الجدول",
      sLoadingRecords: "جارٍ التحميل...",
      sProcessing:   "جارٍ التحميل...",
      sLengthMenu:   "أظهر _MENU_ مدخلات",
      sZeroRecords:  "لم يعثر على أية سجلات",
      sInfo:         "إظهار _START_ إلى _END_ من أصل _TOTAL_ مدخل",
      sInfoEmpty:    "يعرض 0 إلى 0 من أصل 0 سجل",
      sInfoFiltered: "(منتقاة من مجموع _MAX_ مُدخل)",
      sInfoPostFix:  "",
      sSearch:       "ابحث:",
      sUrl:          "",
      oPaginate: {
          sFirst:    "الأول",
          sPrevious: "السابق",
          sNext:     "التالي",
          sLast:     "الأخير"
      },
      oAria: {
          sSortAscending:  ": تفعيل لترتيب العمود تصاعدياً",
          sSortDescending: ": تفعيل لترتيب العمود تنازلياً"   
      }
    },
    pageLength: 25,
    order: [[ 1, "desc" ]]    
  }); 
} );


fetch("https://corona.lmao.ninja/countries/algeria").then((response) => {
  return response.json();
}).then((data) => {

  // data

  let cases = document.querySelector("#cases"),
    deaths = document.querySelector("#deaths"),
    total = document.querySelector("#total"),
    recovered = document.querySelector("#recovered"),
    todayCases = document.querySelector("#todayCases");
  
  cases.innerText = data.cases - (data.deaths + data.recovered);
  deaths.innerText = data.deaths;
  total.innerText = "عدد الحالات الإجمالي: " + data.cases + " حالة ";
  recovered.innerText = data.recovered;
  todayCases.innerText = data.todayCases;


  // chart
  let ctx = document.getElementById("myChart").getContext("2d");
  
  let chartData = {
      labels: ["الحالات قيد التماثل للشفاء","الحالات المتوفاة", "الحالات التي شفيت"],
      datasets: [{
          label: "الاصابات (الحالات)",
          backgroundColor: ["#007BFF", "#ffc107", "#0fd850"],
          data: [data.cases - (data.deaths + data.recovered), data.deaths, data.recovered]
      }]
  },
  myChart = new Chart(ctx, {
    type: "doughnut",
    data: chartData,
    options: {}
  });
}).catch(e=>{
  alert("يتم حاليا تحديث البيانات. الرجاء العودة ﻻحقا.")و
});

// heatmap
let heatmap = L.map('heatmap').setView([28.50, 3.6], 4.5);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY2VseWVzIiwiYSI6ImNrN3Z0NjY3cjFjMnIzbnNmYWp2MHc0bDcifQ.lZykGC-yHpwcM6GsOX-GMQ'
}).addTo(heatmap);
L.heatLayer(addressPoints).addTo(heatmap);

// cases by wilaya