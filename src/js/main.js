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
        ctx = document.getElementById("myChart").getContext("2d"),
        data = {
            labels: ["الحالات المتوفاة", "الحالات التي شفيت", "الحالات الجديدة"],
            datasets: [{
                label: "الاصابات (الحالات)",
                backgroundColor: ["#ffc107", "#0fd850", "#dc3545"],
                data: [data.deaths, data.recovered, data.todayCases]
            }]
        },
        options = {},
        myChart = new Chart(ctx, {
          type: "doughnut",
          data: data,
          options: options
        });
  });
