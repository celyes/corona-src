if(window.top != window.self){top.location.href = document.location.href;}
fetch("https://corona.lmao.ninja/countries/algeria").then((response) => {
    return response.json();
  })
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
        ctx = document.getElementById("myChart").getContext("2d"),
        data = {
            labels: ["الحالات قيد التماثل للشفاء","الحالات المتوفاة", "الحالات التي شفيت", "الحالات الجديدة"],
            datasets: [{
                label: "الاصابات (الحالات)",
                backgroundColor: ["#007BFF", "#ffc107", "#0fd850", "#dc3545"],
                data: [data.cases - (data.deaths + data.recovered), data.deaths, data.recovered, data.todayCases]
            }]
        },
        options = {},
        myChart = new Chart(ctx, {
          type: "doughnut",
          data: data,
          options: options
        });
  });
