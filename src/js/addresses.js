import cases from './wilayas';

//let cases = require('./wilayas');

let addressPoints = [];
cases.forEach(x => {
    for(let i = 0; i < (x[1] * 15); i++){
      addressPoints.push([x[2], x[3], 30]);
    }
});

module.exports = {
    addressPoints,
    cases
};
