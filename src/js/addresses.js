
(() => {

  let cases = [
        ["البليدة",36.4889434,2.7685398, 43],
        ["أدرار",27.9,-0.2833, 1],
        ["معسكر",35.3941,0.138,2],
        ["برج بوعريريج",36.0676,4.7453, 1],
        ["ورقلة",31.9575,5.3278,1],
        ["الجزائر العاصمة",36.7631,3.0506, 8],
        ["تيزي وزو",36.7169,4.0497, 5],
        ["البويرة",36.38,3.9014, 1],
        ["المدية",36.2653,2.767, 1],
        ["بجاية",36.75,5.0833, 2],
        ["قالمة",36.4651,7.4306, 2],
        ["سوق أهراس",36.2848,7.9515, 1],
        ["عنابة",36.9,7.7667, 1],
        ["سكيكدة",36.8799,6.9075, 3]
  ];

  let addressPoints = [];
  cases.forEach((x)=> {
    for(let i = 0; i < (x[3] * 15); i++){
      addressPoints.push([x[1], x[2], 30]);
    }
  })
  module.exports = {
    addressPoints,
    cases
  };
})()

/*module.exports = [
  [36.4889434,2.7685398, 50],
  [36.8648344,6.8931628, 50],
];

*/
