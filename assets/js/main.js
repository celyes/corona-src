var ctx=document.getElementById("myChart").getContext("2d"),data={labels:["الحالات المؤكدة","الحالات المتوفاة","الحالات التي شفيت","الحالات قيد التعافي"],datasets:[{label:"الاصابات (الحالات)",backgroundColor:["#dc3545","#ffc107","#0fd850","#007BFF"],data:[54,4,12,38]}]},options={},myChart=new Chart(ctx,{type:"doughnut",data:data,options:options});
