if(window.top != window.self){top.location.href = document.location.href;}


import { addressPoints } from './addresses';

fetch("https://corona.lmao.ninja/countries/algeria").then((response) => {
  response.json();
}).then((data) => {
  // data
      cases = document.querySelector("#cases"),
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
  ctx = document.getElementById("myChart").getContext("2d");

  data = {
      labels: ["الحالات قيد التماثل للشفاء","الحالات المتوفاة", "الحالات التي شفيت", "الحالات الجديدة"],
      datasets: [{
          label: "الاصابات (الحالات)",
          backgroundColor: ["#007BFF", "#ffc107", "#0fd850", "#dc3545"],
          data: [data.cases - (data.deaths + data.recovered), data.deaths, data.recovered, data.todayCases]
      }]
  },
  myChart = new Chart(ctx, {
    type: "doughnut",
    data: data,
    options: {}
  });
}).catch((e)=> {
  alert("خطأ في جلب البيانات. أعد المحاولة لاحقاً");
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
