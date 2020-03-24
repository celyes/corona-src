import { cases, addressPoints } from './addresses';

// table
jQuery(document).ready( function () { 
  $("#cases-by-wilaya").DataTable({
    data: cases,
    language: {
      url: "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Arabic.json"
    },
    columns: [
      { title: "الوﻻية" },
      { title: "الحالات" },
    ],
    pageLength: 50,
    order: [[ 1, "desc" ]]    
  }); 
} );

// data
fetch("https://corona.lmao.ninja/countries/algeria")
.then((response) => { return response.json(); })
.then((data) => {
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
