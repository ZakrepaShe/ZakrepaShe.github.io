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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return readFile; });\nfunction readFile() {\n  return `MONTH,DEPARTMENT,EMPLOYEE,AMOUNT\n            2018-01,Legals,Smith A.,14289.66\n            2018-01,Legals,Jonson B.,7408.05\n            2018-01,Legals,Lee C.,10102.98\n            2018-01,Legals,Janaro R.,8127.94\n            2018-01,Legals,Conor J.,10341.33\n            2018-01,Legals,Conor S.,7010.52\n            2018-02,Legals,Smith A.,9927.47\n            2018-02,Legals,Jonson B.,7053.96\n            2018-02,Legals,Lee C.,7057.36\n            2018-02,Legals,Janaro R.,13043.93\n            2018-02,Legals,Conor J.,12613.82\n            2018-02,Legals,Conor S.,10310.33\n            2018-02,Legals,Travolta J.,10857.58\n            2018-03,Legals,Smith A.,11043.21\n            2018-03,Legals,Jonson B.,5144.06\n            2018-03,Legals,Conor J.,11022.75\n            2018-03,Legals,Conor S.,11651.08\n            2018-03,Legals,Clark A.,7889.03\n            2018-03,Legals,Doyle C.,6490.54\n            2018-01,Compliance,Smith A.,14980.55\n            2018-01,Compliance,Johnson B.,8132.88\n            2018-01,Compliance,Williams C.,5635.36\n            2018-01,Compliance,Jones D.,12454.79\n            2018-01,Compliance,Brown F.,5787.25\n            2018-01,Compliance,Davis G.,8618.50\n            2018-02,Compliance,Smith A.,5093.56\n            2018-02,Compliance,Johnson B.,11625.41\n            2018-02,Compliance,Williams C.,11875.55\n            2018-02,Compliance,Jones D.,10008.70\n            2018-02,Compliance,Brown F.,6291.20\n            2018-02,Compliance,Davis G.,12524.68\n            2018-02,Compliance,Miller H.,11630.42\n            2018-03,Compliance,Johnson B.,5681.83\n            2018-03,Compliance,Williams C.,10941.43\n            2018-03,Compliance,Jones D.,8859.54\n            2018-03,Compliance,Brown F.,6663.98\n            2018-03,Compliance,Davis G.,6988.17\n            2018-03,Compliance,Miller H.,14138.79\n            2018-01,Marketing & Sales,Wilson A.,13200.80\n            2018-01,Marketing & Sales,Moore B.,6145.94\n            2018-01,Marketing & Sales,Taylor C.,8459.98\n            2018-01,Marketing & Sales,Anderson D.,8639.86\n            2018-01,Marketing & Sales,Thomas E.,9384.85\n            2018-01,Marketing & Sales,Jackson F.,7018.11\n            2018-02,Marketing & Sales,White G.,13853.19\n            2018-02,Marketing & Sales,Moore B.,5292.43\n            2018-02,Marketing & Sales,Taylor C.,10465.98\n            2018-02,Marketing & Sales,Anderson D.,5907.43\n            2018-02,Marketing & Sales,Thomas E.,8700.87\n            2018-02,Marketing & Sales,Jackson F.,7444.12\n            2018-02,Marketing & Sales,Miller I.,12142.15\n            2018-03,Marketing & Sales,Moore B.,8600.83\n            2018-03,Marketing & Sales,Taylor C.,5185.76\n            2018-03,Marketing & Sales,Anderson D.,5491.73\n            2018-03,Marketing & Sales,Thomas E.,11236.40\n            2018-03,Marketing & Sales,Jackson F.,12056.60\n            2018-03,Marketing & Sales,Miller I.,6828.36\n            2018-01,Production,Harris A.,10125.18\n            2018-01,Production,Martin B.,5035.75\n            2018-01,Production,Thompson C.,12100.76\n            2018-01,Production,Garcia D.,13739.30\n            2018-01,Production,Martinez E.,9274.72\n            2018-01,Production,Robinson F.,10073.36\n            2018-02,Production,Clark H.,7193.33\n            2018-02,Production,Martin B.,13999.01\n            2018-02,Production,Thompson C.,14287.98\n            2018-02,Production,Garcia D.,8285.04\n            2018-02,Production,Martinez E.,14948.03\n            2018-02,Production,Robinson F.,13104.71\n            2018-02,Production,Driller R.,5443.28\n            2018-03,Production,Martin B.,14379.60\n            2018-03,Production,Thompson C.,13450.47\n            2018-03,Production,Garcia D.,11364.05\n            2018-03,Production,Martinez E.,5548.34\n            2018-03,Production,Robinson F.,10733.07\n            2018-03,Production,Driller R.,13843.69\n            2018-01,Service,King A.,8617.04\n            2018-01,Service,Wright B.,13078.48\n            2018-01,Service,Lopez C.,5150.28\n            2018-01,Service,Hill D.,14136.06\n            2018-01,Service,Scott E.,6731.88\n            2018-01,Service,Green F.,13076.14\n            2018-02,Service,Adams G.,12432.64\n            2018-02,Service,Wright B.,6735.59\n            2018-02,Service,Lopez C.,12947.72\n            2018-02,Service,Hill D.,14863.50\n            2018-02,Service,Scott E.,12849.35\n            2018-02,Service,Green F.,13825.99\n            2018-02,Service,Driller R.,11326.42\n            2018-03,Service,Wright B.,10512.58\n            2018-03,Service,Lopez C.,9330.24\n            2018-03,Service,Hill D.,5373.41\n            2018-03,Service,Scott E.,5327.75\n            2018-03,Service,Green F.,6972.30\n            2018-03,Service,Driller R.,10481.02\n            `;\n}\n\n//# sourceURL=webpack:///./src/api/index.js?");

/***/ }),

/***/ "./src/dataFormatter/index.js":
/*!************************************!*\
  !*** ./src/dataFormatter/index.js ***!
  \************************************/
/*! exports provided: MONTH, DEPARTMENT, EMPLOYEE, AMOUNT, totalAmount, dataByParamSeparator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MONTH\", function() { return MONTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DEPARTMENT\", function() { return DEPARTMENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EMPLOYEE\", function() { return EMPLOYEE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AMOUNT\", function() { return AMOUNT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"totalAmount\", function() { return totalAmount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dataByParamSeparator\", function() { return dataByParamSeparator; });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ \"./src/api/index.js\");\n //Split data by lines where headers - 0 element & trim last empty element\n\nconst parsedData = Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().split(/\\n/).filter(item => item.trim() !== ''); //Separate headers from data rows and split them\n\nconst headers = parsedData.shift().split(',');\nconst [MONTH, DEPARTMENT, EMPLOYEE, AMOUNT] = headers; //Form arrays of keyed objects with headers as keys\n\nconst structuredData = parsedData.map(row => row.split(',').reduce((result, item, index) => {\n  result[headers[index]] = item.trim();\n  return result;\n}, {})); //Calculate total amount\n\nconst totalAmount = () => structuredData.reduce((sum, item) => sum + parseFloat(item[AMOUNT]), 0);\nconst dataByParamSeparator = param => {\n  const allParams = [],\n        paramsData = [],\n        paramCounter = [];\n  structuredData.forEach(item => {\n    //separate unique params\n    if (allParams.indexOf(item[param]) === -1) {\n      allParams.push(item[param]); //init new AMOUNT array for each new param\n\n      paramsData[allParams.indexOf(item[param])] = []; //init param counter\n\n      paramCounter[allParams.indexOf(item[param])] = 0;\n    } //separate AMOUNT by unique params\n\n\n    paramsData[allParams.indexOf(item[param])].push(item[AMOUNT]); //count param\n\n    paramCounter[allParams.indexOf(item[param])]++;\n  });\n  return {\n    allParams,\n    paramsData,\n    paramCounter\n  };\n};\n\n//# sourceURL=webpack:///./src/dataFormatter/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _markupFormer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markupFormer */ \"./src/markupFormer/index.js\");\n/* harmony import */ var _dataFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataFormatter */ \"./src/dataFormatter/index.js\");\n\n\ndocument.getElementById('total').innerText = Object(_dataFormatter__WEBPACK_IMPORTED_MODULE_1__[\"totalAmount\"])().toFixed(2);\ndocument.getElementById(_dataFormatter__WEBPACK_IMPORTED_MODULE_1__[\"DEPARTMENT\"]).innerHTML = Object(_markupFormer__WEBPACK_IMPORTED_MODULE_0__[\"formHTMLAmountByParam\"])(_dataFormatter__WEBPACK_IMPORTED_MODULE_1__[\"DEPARTMENT\"]);\ndocument.getElementById(_dataFormatter__WEBPACK_IMPORTED_MODULE_1__[\"MONTH\"]).innerHTML = Object(_markupFormer__WEBPACK_IMPORTED_MODULE_0__[\"formHTMLAmountByParam\"])(_dataFormatter__WEBPACK_IMPORTED_MODULE_1__[\"MONTH\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/markupFormer/index.js":
/*!***********************************!*\
  !*** ./src/markupFormer/index.js ***!
  \***********************************/
/*! exports provided: formHTMLAmountByParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formHTMLAmountByParam\", function() { return formHTMLAmountByParam; });\n/* harmony import */ var _dataFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dataFormatter */ \"./src/dataFormatter/index.js\");\n\nfunction formHTMLAmountByParam(param) {\n  const {\n    allParams,\n    paramsData,\n    paramCounter\n  } = Object(_dataFormatter__WEBPACK_IMPORTED_MODULE_0__[\"dataByParamSeparator\"])(param); //calculate Average AMOUNT, form html\n\n  return allParams.reduce((resultHTML, paramName, paramIndex) => {\n    const amountSum = paramsData[paramIndex].reduce((sum, amount) => sum + parseFloat(amount), 0);\n    return resultHTML + `<tr><td>${paramName}</td><td>${(amountSum / paramCounter[paramIndex]).toFixed(2)}</td></tr>`;\n  }, '');\n}\n\n//# sourceURL=webpack:///./src/markupFormer/index.js?");

/***/ })

/******/ });