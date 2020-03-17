/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/addresses.js":
/*!*****************************!*\
  !*** ./src/js/addresses.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var cases = [[36.4889434, 2.7685398, 27], // Blida
  [36.8648344, 6.8931628, 4], // Skikda
  [35.3828768, 0.0838511, 2], // Mascara
  [36.4535449, 7.3801097, 2], // Guelma
  [34.8974446, -1.3852008, 2], // Tlemcen
  [36.7538428, 3.0490862, 4], // Alger
  [36.190742, 5.34978610, 2], // Setif
  [36.0678737, 4.7514073, 1], // Bordj
  [35.2125443, 4.0412112, 1], // Boussaada
  [31.9828667, 5.308684, 1], // Ouargla
  [28.0095527, -0.3155977, 1] // Adrar
  ];
  var exported = [];
  cases.forEach(function (x) {
    for (var i = 0; i < x[2] * 15; i++) {
      exported.push([x[0], x[1], 30]);
    }
  });
  module.exports = exported;
})();
/*module.exports = [
  [36.4889434,2.7685398, 50],
  [36.8648344,6.8931628, 50],
];

*/

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (window.top != window.self) {
  top.location.href = document.location.href;
}

var addressPoints = __webpack_require__(/*! ./addresses.js */ "./src/js/addresses.js");

fetch("https://corona.lmao.ninja/countries/algeria").then(function (response) {
  return response.json();
}).then(function (data) {
  var cases = document.querySelector("#cases"),
      deaths = document.querySelector("#deaths"),
      total = document.querySelector("#total"),
      recovered = document.querySelector("#recovered"),
      todayCases = document.querySelector("#todayCases");
  cases.innerText = data.cases - (data.deaths + data.recovered);
  deaths.innerText = data.deaths;
  total.innerText = "عدد الحالات الإجمالي: " + data.cases + " حالة ";
  recovered.innerText = data.recovered;
  todayCases.innerText = data.todayCases;
  ctx = document.getElementById("myChart").getContext("2d"), data = {
    labels: ["الحالات قيد التماثل للشفاء", "الحالات المتوفاة", "الحالات التي شفيت", "الحالات الجديدة"],
    datasets: [{
      label: "الاصابات (الحالات)",
      backgroundColor: ["#007BFF", "#ffc107", "#0fd850", "#dc3545"],
      data: [data.cases - (data.deaths + data.recovered), data.deaths, data.recovered, data.todayCases]
    }]
  }, options = {}, myChart = new Chart(ctx, {
    type: "doughnut",
    data: data,
    options: options
  });
}); // map

var mymap = L.map('map').setView([28.50, 3.6], 4.5); // @29.7923208,-2.1006385,5.25z

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiY2VseWVzIiwiYSI6ImNrN3Z0NjY3cjFjMnIzbnNmYWp2MHc0bDcifQ.lZykGC-yHpwcM6GsOX-GMQ'
}).addTo(mymap);
/**addressPoints = addressPoints.map(p => [p[0], p[1]]);
L.heatLayer(addressPoints).addTo(mymap);
*/

var heat = L.heatLayer(addressPoints, {
  radius: 40
}).addTo(mymap);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "../css/style.min.css");

/***/ }),

/***/ 0:
/*!**************************************************************************!*\
  !*** multi ./src/js/main.js ./src/js/addresses.js ./src/scss/style.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/corona/src/js/main.js */"./src/js/main.js");
__webpack_require__(/*! /var/www/html/corona/src/js/addresses.js */"./src/js/addresses.js");
module.exports = __webpack_require__(/*! /var/www/html/corona/src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map