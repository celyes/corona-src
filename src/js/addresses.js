
(() => {

  let cases = [
        ["البليدة",47,36.4889434,2.7685398], // blida
        ["الجزائر العاصمة",12,36.7631,3.0506,], // alger
        ["تيزي وزو",6,36.7169,4.0497], // tizi ouzou
        ["سكيكدة",5,36.8799,6.9075], // skikda  
        ["الوادي",2,33.368309, 6.867369], // eloued  
        ["معسكر",2,35.3941,0.138], // mascara
        ["قالمة",2,36.4651,7.4306], // guelma
        ["ورقلة",1,31.9575,5.3278], // ouargla
        ["أدرار",1,27.9,-0.2833], // adrar 
        ["برج بوعريريج",2,36.0676,4.7453], // bordj bouarreridj
        ["البويرة",1,36.38,3.9014], // bouira
        ["المدية",1,36.2653,2.767], //medea
        ["بجاية",1,36.75,5.0833], // béjaia
        ["سوق أهراس",1,36.2848,7.9515], // souk ahras
        ["عنابة",5,36.9,7.7667], // annaba
        ["بومرداس",1,36.77,3.48], // boumerdes
        ["سطيف",1,36.19,5.41], // setif
        ["تيسمسيلت",1,35.60,1.81], // tissemsilt
        ["وهران",1,35.69,-0.64], // orancd /
  ];

  let addressPoints = [];
  cases.forEach((x)=> {
    for(let i = 0; i < (x[1] * 15); i++){
      addressPoints.push([x[2], x[3], 30]);
    }
  })
  module.exports = {
    addressPoints,
    cases
  };

})();
