let ctx = document.getElementById("myChart").getContext("2d");
let data = {
    labels: ["الحالات المؤكدة", "الحالات المتوفاة", "الحالات التي شفيت", "الحالات قيد التعافي"],
    datasets: [{
        label: "الاصابات (الحالات)",
        backgroundColor: ["#dc3545", "#ffc107", "#0fd850", "#007BFF"],
        data: [54, 4, 12, 38]
    }]
};
let options = {};
let myChart = new Chart(ctx, {
  type: "doughnut",
  data: data,
  options: options
});

// fetch
fetch("https://corona.lmao.ninja/countries/algeria").then((response) => {
    return response.json();
  })
  .then((data) => {
    let cases = document.querySelector("#cases"),
        deaths = document.querySelector("#deaths"),
        recovered = document.querySelector("#recovered"),
        todayCases = document.querySelector("#todayCases");
        cases.innerText = data.cases;
        deaths.innerText = data.deaths;
        recovered.innerText = data.recovered;
        todayCases.innerText = data.todayCases;
  });
