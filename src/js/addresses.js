let cases = require('./wilayas');

let addressPoints = [];
cases.forEach(x => {
    for(let i = 0; i < (x[1] * 20); i++){
      addressPoints.push([x[2], x[3], 25]);
    }
});

module.exports = {
    addressPoints,
    cases
};
