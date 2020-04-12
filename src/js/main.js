import { cases, addressPoints } from './addresses';

document.querySelector('.overlay').style.display = "none";
document.querySelector('.message').style.display = "none";


// table
jQuery(document).ready( function () { 
  if(window.location.pathname == "/cases-by-wilaya.html"){
    $("#cases-by-wilaya").DataTable({
      data: cases,
      language: {
        url: "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Arabic.json"
      },
      columns: [
        { title: "الوﻻية" },
        { title: "الحالات" },
      ],
      pageLength: 25,
      order: [[ 1, "desc" ]]
    }); 
  }
});

// data
if(window.location.pathname == "/" || window.location.pathname == "/index.html"){
  fetch("https://corona.lmao.ninja/countries/algeria")
  .then(r =>  r.json())
  .then(data => {
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
          backgroundColor: ["rgba(0,123,255,0.2)", "rgba(255,193,7,0.2)", "rgba(15,216,80,0.2)"],
          backgroundColor: ["rgba(0,123,255,1)", "rgba(255,193,7,1)", "rgba(15,216,80,1)"],
          borderWidth: 1,
          data: [data.cases - (data.deaths + data.recovered), data.deaths, data.recovered]
      }]
  },
  myChart = new Chart(ctx, {
    type: "pie",
    data: chartData,
    options: {
      tooltips: { 
        borderColor: 'rgba(0,123,255,0.75)',
        borderWidth: 1,
        backgroundColor: '#FFF',
        titleFontSize: 16,
        titleFontColor: '#0066ff',
        bodyFontColor: '#000',
        bodyFontSize: 16,
        displayColors: false
      }
    }
  });
  
});
}


// heatmap

if(window.location.pathname == "/heatmap.html"){
  let heatmap = L.map('heatmap').setView([28.50, 3.6], 4.5);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiY2VseWVzIiwiYSI6ImNrN3Z0NjY3cjFjMnIzbnNmYWp2MHc0bDcifQ.lZykGC-yHpwcM6GsOX-GMQ'
  }).addTo(heatmap);
  L.heatLayer(addressPoints, {radius: 15}).addTo(heatmap);
}