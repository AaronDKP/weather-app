/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/HelveticaNeueThin.ttf */ "./src/HelveticaNeueThin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: HelveticaNeue;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('ttf');
}

* {
    padding: 0px;
    margin: 0px;
    font-family: 'HelveticaNeue', Helvetica, Arial, sans-serif;
}

body {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
    overflow-y: hidden;
    overflow-x: hidden;
}

#container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
    padding-top: 6rem;
    gap: 1rem;
    flex-grow: 1;
    height: 100%;
    max-width: 800px;
}

#searchContainer {
    display: flex;
    gap: 4px;
    width: 14rem;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 4px 10px;
}

#searchIcon {
    height: 1rem;
    width: 1rem;
}

#locationSubmit {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
}

#locationInput {
    flex-grow: 1;
    background: none;
    border: none;
    color: #bdbdbd;
    font-weight: 700;
    letter-spacing: 1px;
}

#currentContainer {
    display: flex;
    flex-direction: column;
    height: 14rem;
    width: 10rem;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

#currentLocation {
    font-size: 1.8em;
    font-weight: 700;
    letter-spacing: 1px;
}

#currentTemp {
    margin: -10px;
    font-size: 6em;
}

#currentCondition, #currentHiLo {
    font-size: 1.2em;
    font-weight: 700;
    letter-spacing: 1px;
}

#hourContainer{
    height: 8rem;
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
    border-radius: 12px;
    padding: 1rem;
    overflow-y: hidden;
    overflow-x: auto;
}

#hourCondition {
    position: absolute;
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 1px;
}

#hourlyForecastContainer {
    display: flex;
    margin-top: 2.5rem;
    gap: 1rem;
}

.hourlyForecast {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
}

.hourlyHour {
    font-size: 1em;
    font-weight: 900;
    letter-spacing: 1px;
}

.hourlyTemp {
    font-size: 1.2em;
    font-weight: 700;
    letter-spacing: 1px;
}

#hourContainer::-webkit-scrollbar{
    height: 1.4rem;
}

#hourContainer::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.05);
    border: solid 5px transparent;
    border-radius: 12px;
  }
   
#hourContainer::-webkit-scrollbar-track {
    display: none;
}

#dailyContainer {
    height: 14rem;
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: rgba(0, 0, 0, 0.1);
    color: #fff;
    border-radius: 12px;
    padding: 1rem;
}

#dailyHeading {
    display: flex;
    width: 100%;
    padding-bottom: 1rem;
    align-items: center;
    gap: 0.4rem;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

#calendarIcon {
    height: 1rem;
    width: 1rem;
}

#dailyForecastContainer {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
}

.dailyForecast {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(6, 1fr);
    width: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 0.5rem 0;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.dayIcon {
    justify-self: center;
    grid-column-start: 3;
}

.dayMin, .dayMax {
    text-align: center;
}

.hourlyIcon>img, .dayIcon>img {
    height: 2.2rem;
    width: 2.2rem;
}

.dayBar {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,0DAAoD;AACxD;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,0DAA0D;AAC9D;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,iBAAiB;IACjB,SAAS;IACT,YAAY;IACZ,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,2CAA2C;AAC/C;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,uBAAuB;IACvB,oCAAoC;IACpC,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mDAAmD;IACnD,6BAA6B;IAC7B,mBAAmB;EACrB;;AAEF;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,uBAAuB;IACvB,oCAAoC;IACpC,WAAW;IACX,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,oBAAoB;IACpB,mBAAmB;IACnB,WAAW;IACX,mBAAmB;IACnB,+BAA+B;IAC/B,iDAAiD;AACrD;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qCAAqC;IACrC,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;IACX,iDAAiD;AACrD;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,iDAAiD;AACrD","sourcesContent":["@font-face {\n    font-family: HelveticaNeue;\n    src: url(../src/HelveticaNeueThin.ttf) format('ttf');\n}\n\n* {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'HelveticaNeue', Helvetica, Arial, sans-serif;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #ccc;\n    overflow-y: hidden;\n    overflow-x: hidden;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start; \n    align-items: center;\n    padding-top: 6rem;\n    gap: 1rem;\n    flex-grow: 1;\n    height: 100%;\n    max-width: 800px;\n}\n\n#searchContainer {\n    display: flex;\n    gap: 4px;\n    width: 14rem;\n    background-color: rgba(0, 0, 0, 0.1);\n    border-radius: 8px;\n    padding: 4px 10px;\n}\n\n#searchIcon {\n    height: 1rem;\n    width: 1rem;\n}\n\n#locationSubmit {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: none;\n    border: none;\n    cursor: pointer;\n}\n\n#locationInput {\n    flex-grow: 1;\n    background: none;\n    border: none;\n    color: #bdbdbd;\n    font-weight: 700;\n    letter-spacing: 1px;\n}\n\n#currentContainer {\n    display: flex;\n    flex-direction: column;\n    height: 14rem;\n    width: 10rem;\n    justify-content: center;\n    align-items: center;\n    color: #fff;\n    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n}\n\n#currentLocation {\n    font-size: 1.8em;\n    font-weight: 700;\n    letter-spacing: 1px;\n}\n\n#currentTemp {\n    margin: -10px;\n    font-size: 6em;\n}\n\n#currentCondition, #currentHiLo {\n    font-size: 1.2em;\n    font-weight: 700;\n    letter-spacing: 1px;\n}\n\n#hourContainer{\n    height: 8rem;\n    width: 20rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    background-color: rgba(0, 0, 0, 0.2);\n    color: #fff;\n    border-radius: 12px;\n    padding: 1rem;\n    overflow-y: hidden;\n    overflow-x: auto;\n}\n\n#hourCondition {\n    position: absolute;\n    font-size: 0.8em;\n    font-weight: 700;\n    letter-spacing: 1px;\n}\n\n#hourlyForecastContainer {\n    display: flex;\n    margin-top: 2.5rem;\n    gap: 1rem;\n}\n\n.hourlyForecast {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 0.2rem;\n}\n\n.hourlyHour {\n    font-size: 1em;\n    font-weight: 900;\n    letter-spacing: 1px;\n}\n\n.hourlyTemp {\n    font-size: 1.2em;\n    font-weight: 700;\n    letter-spacing: 1px;\n}\n\n#hourContainer::-webkit-scrollbar{\n    height: 1.4rem;\n}\n\n#hourContainer::-webkit-scrollbar-thumb {\n    box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.05);\n    border: solid 5px transparent;\n    border-radius: 12px;\n  }\n   \n#hourContainer::-webkit-scrollbar-track {\n    display: none;\n}\n\n#dailyContainer {\n    height: 14rem;\n    width: 20rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    background-color: rgba(0, 0, 0, 0.1);\n    color: #fff;\n    border-radius: 12px;\n    padding: 1rem;\n}\n\n#dailyHeading {\n    display: flex;\n    width: 100%;\n    padding-bottom: 1rem;\n    align-items: center;\n    gap: 0.4rem;\n    letter-spacing: 1px;\n    color: rgba(255, 255, 255, 0.5);\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n#calendarIcon {\n    height: 1rem;\n    width: 1rem;\n}\n\n#dailyForecastContainer {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    flex-direction: column;\n}\n\n.dailyForecast {\n    display: grid;\n    align-items: center;\n    grid-template-columns: repeat(6, 1fr);\n    width: 100%;\n    font-weight: 700;\n    letter-spacing: 1px;\n    padding: 0.5rem 0;\n    width: 100%;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.dayIcon {\n    justify-self: center;\n    grid-column-start: 3;\n}\n\n.dayMin, .dayMax {\n    text-align: center;\n}\n\n.hourlyIcon>img, .dayIcon>img {\n    height: 2.2rem;\n    width: 2.2rem;\n}\n\n.dayBar {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/fetchForecast.js":
/*!**************************************!*\
  !*** ./src/modules/fetchForecast.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchForecast: () => (/* binding */ fetchForecast),
/* harmony export */   processJSON: () => (/* binding */ processJSON)
/* harmony export */ });
function fetchForecast(location, days) {
  return new Promise((resolve, reject) => {
    resolve(
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=c2a982638cfd47eea3440339242402&q=${location}&days=${days}`,
        { mode: 'cors' },
      ),
    );

    // eslint-disable-next-line prefer-promise-reject-errors
    reject((error) => console.log(error));
  });
}

function getJSON(result) {
  const json = result.json();
  return json;
}

function getLocation(json) {
  const { country } = json.location;
  const { name } = json.location;
  const localTime = json.location.localtime.slice(-5);

  return { country, name, localTime };
}

function getCurrent(json) {
  const condition = json.current.condition.text;
  const tempC = json.current.temp_c;
  const tempF = json.current.temp_f;
  const feelsLikeC = json.current.feelslike_c;
  const feelsLikeF = json.current.feelslike_f;
  const { humidity } = json.current;
  const { uv } = json.current;
  const windDirection = json.current.wind_dir;
  const windKPH = json.current.wind_kph;
  const windMPH = json.current.wind_mph;

  return {
    condition, tempC, tempF, feelsLikeC, feelsLikeF, humidity, uv, windDirection, windKPH, windMPH,
  };
}

function getForecast(json) {
  function getDailyForecast(dayObj) {
    const { date } = dayObj;
    const condition = dayObj.day.condition.text;
    const getIcon = dayObj.day.condition.icon.slice(2);
    const icon = `https://${getIcon}`;
    const minTempC = dayObj.day.mintemp_c.toString().slice(0, 2);
    const maxTempC = dayObj.day.maxtemp_c.toString().slice(0, 2);
    const hourlyForecast = dayObj.hour;

    return {
      date, condition, icon, minTempC, maxTempC, hourlyForecast,
    };
  }

  function filterForecastDays(array) {
    for (let i = 0; i < array.length; i++) {
      const day = getDailyForecast(array[i]);

      array[i] = day;
    }
  }

  function reformatTime(date) {
    // eslint-disable-next-line prefer-template
    const timeString = new Date(date)
      .toLocaleTimeString('en-US', { hour12: true, hour: 'numeric' });

    return timeString;
  }

  function getHourlyForecast(hourObj) {
    const date = hourObj.time;
    const time = reformatTime(date).replace(/\s/g, '');
    const getIcon = hourObj.condition.icon.slice(2);
    const icon = `https://${getIcon}`;
    const tempC = hourObj.temp_c.toString().slice(0, 2);

    return {
      time, icon, tempC,
    };
  }

  function filterForecastHours(array) {
    for (let day = 0; day < 3; day++) {
      const hours = array[day].hourlyForecast;

      for (let i = 0; i < hours.length; i++) {
        const hour = getHourlyForecast(hours[i]);

        array[day].hourlyForecast[i] = hour;
      }
    }
  }

  const forecastDayArray = json.forecast.forecastday;

  filterForecastDays(forecastDayArray);
  filterForecastHours(forecastDayArray);

  return Object.assign(forecastDayArray);
}

async function processJSON(fetchData) {
  const json = await getJSON(fetchData);
  const location = getLocation(json);
  const current = getCurrent(json);
  const forecast = getForecast(json);

  return { location, current, forecast };
}




/***/ }),

/***/ "./src/modules/showForecast.js":
/*!*************************************!*\
  !*** ./src/modules/showForecast.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateGUI: () => (/* binding */ updateGUI)
/* harmony export */ });
/* harmony import */ var _searchIcon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../searchIcon.svg */ "./src/searchIcon.svg");
/* harmony import */ var _calendarIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calendarIcon.svg */ "./src/calendarIcon.svg");
/* eslint-disable no-plusplus */



function updateCurrentContainer(json) {
  const currentLocation = document.getElementById('currentLocation');
  const currentTemp = document.getElementById('currentTemp');
  const currentCondition = document.getElementById('currentCondition');
  const currentHiLo = document.getElementById('currentHiLo');

  const jsonLocation = json.location.name;
  const jsonTempC = json.current.tempC;
  const jsonCondition = json.current.condition;

  const jsonLoC = json.forecast[0].minTempC;
  const jsonHiC = json.forecast[0].maxTempC;

  const jsonHiLoC = `H:${jsonHiC}° L:${jsonLoC}°`;

  currentLocation.textContent = jsonLocation;
  currentTemp.textContent = `${jsonTempC}°`;
  currentCondition.textContent = jsonCondition;
  currentHiLo.textContent = jsonHiLoC;
}

function generateHour() {
  const hourlyForecastContainer = document.getElementById('hourlyForecastContainer');
  const hourlyForecast = document.createElement('div');
  const hourlyHour = document.createElement('div');
  const hourlyIcon = document.createElement('div');
  const hourlyTemp = document.createElement('div');
  const img = new Image();

  hourlyHour.className = 'hourlyHour';
  hourlyIcon.className = 'hourlyIcon';
  hourlyIcon.appendChild(img);
  hourlyTemp.className = 'hourlyTemp';
  hourlyForecast.appendChild(hourlyHour);
  hourlyForecast.appendChild(hourlyIcon);
  hourlyForecast.appendChild(hourlyTemp);
  hourlyForecast.className = 'hourlyForecast';

  hourlyForecastContainer.appendChild(hourlyForecast);
}

function clearHourlyForecast(parentNode) {
  parentNode.innerHTML = '';
}

function generateHourlyForecast() {
  const hourlyForecastContainer = document.getElementById('hourlyForecastContainer');

  clearHourlyForecast(hourlyForecastContainer);

  for (let i = 0; i < 24; i++) {
    generateHour();
  }
}

async function updateHourlyForecast(json) {
  const currentTime = new Date().getHours();
  const currentHourForecast = json.forecast[0].hourlyForecast[currentTime];

  await generateHourlyForecast();

  const hourlyForecastContainer = document.getElementById('hourlyForecastContainer');
  const hourlyElementArray = [...hourlyForecastContainer.children];

  hourlyElementArray[0].children[0].textContent = 'Now';
  hourlyElementArray[0].children[1].children[0].src = currentHourForecast.icon;
  hourlyElementArray[0].children[2].textContent = `${currentHourForecast.tempC}°`;

  const remainingHours = (24 - currentTime);
  let time = currentTime;

  for (let i = 1; i < remainingHours; i++) {
    const thisHourForecast = json.forecast[0].hourlyForecast[time += 1];

    hourlyElementArray[i].children[0].textContent = thisHourForecast.time;
    hourlyElementArray[i].children[1].children[0].src = thisHourForecast.icon;
    hourlyElementArray[i].children[2].textContent = `${thisHourForecast.tempC}°`;
  }

  let nextDay = remainingHours;

  for (let i = 0; i < currentTime; i++) {
    const thisHourForecast = json.forecast[1].hourlyForecast[i];

    hourlyElementArray[nextDay].children[0].textContent = thisHourForecast.time;
    hourlyElementArray[nextDay].children[1].children[0].src = thisHourForecast.icon;
    hourlyElementArray[nextDay].children[2].textContent = `${thisHourForecast.tempC}°`;

    nextDay += 1;
  }
}

function updateHourContainer(json) {
  const hourCondition = document.getElementById('hourCondition');

  const jsonCondition = json.forecast[0].condition;

  hourCondition.textContent = `${jsonCondition} throughout the day`;

  updateHourlyForecast(json);
}

function getDayName(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { weekday: 'short' });
}

function updateDailyContainer(json) {
  const dailyForecastContainer = document.getElementById('dailyForecastContainer');
  const dailyElementArray = [...dailyForecastContainer.children];

  for (let i = 0; i < 3; i++) {
    const { date } = json.forecast[i];
    const day = getDayName(date);

    const min = json.forecast[i].minTempC;
    const max = json.forecast[i].maxTempC;

    dailyElementArray[i].children[0].textContent = day;
    dailyElementArray[i].children[1].children[0].src = json.forecast[i].icon;
    dailyElementArray[i].children[2].textContent = `${min}°`;
    dailyElementArray[i].children[4].textContent = `${max}°`;
  }

  dailyElementArray[0].children[0].textContent = 'Today';
}

function updateGUI(json) {
  const search = document.getElementById('searchIcon');
  search.src = _searchIcon_svg__WEBPACK_IMPORTED_MODULE_0__;

  const calendar = document.getElementById('calendarIcon');
  calendar.src = _calendarIcon_svg__WEBPACK_IMPORTED_MODULE_1__;

  updateCurrentContainer(json);
  updateHourContainer(json);
  updateDailyContainer(json);
}




/***/ }),

/***/ "./src/modules/userInputs.js":
/*!***********************************!*\
  !*** ./src/modules/userInputs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLocation: () => (/* binding */ getLocation)
/* harmony export */ });
function getLocation() {
  const newLocation = document.getElementById('locationInput').value;
  return newLocation;
}




/***/ }),

/***/ "./src/HelveticaNeueThin.ttf":
/*!***********************************!*\
  !*** ./src/HelveticaNeueThin.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4606aee9e3d876bc645.ttf";

/***/ }),

/***/ "./src/calendarIcon.svg":
/*!******************************!*\
  !*** ./src/calendarIcon.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8678c5599b2e88274c3.svg";

/***/ }),

/***/ "./src/searchIcon.svg":
/*!****************************!*\
  !*** ./src/searchIcon.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dce5585502fd80b31b6b.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_fetchForecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fetchForecast */ "./src/modules/fetchForecast.js");
/* harmony import */ var _modules_userInputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/userInputs */ "./src/modules/userInputs.js");
/* harmony import */ var _modules_showForecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/showForecast */ "./src/modules/showForecast.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






 // if broken, move css back to dist and link directly in html

window.onload = () => {
  const stylesheet = document.getElementById('stylesheet');
  stylesheet.href = _style_css__WEBPACK_IMPORTED_MODULE_3__["default"];

  const fetch = Promise.resolve((0,_modules_fetchForecast__WEBPACK_IMPORTED_MODULE_0__.fetchForecast)('brisbane', '3'));

  fetch.then((result) => (0,_modules_fetchForecast__WEBPACK_IMPORTED_MODULE_0__.processJSON)(result))
    .then((result) => (0,_modules_showForecast__WEBPACK_IMPORTED_MODULE_2__.updateGUI)(result));
};

const submitBtn = document.getElementById('locationSubmit');
const locationInput = document.getElementById('locationInput');

submitBtn.addEventListener('click', () => {
  const newLocation = (0,_modules_userInputs__WEBPACK_IMPORTED_MODULE_1__.getLocation)();

  const fetch = Promise.resolve((0,_modules_fetchForecast__WEBPACK_IMPORTED_MODULE_0__.fetchForecast)(newLocation, '3'));

  fetch.then((result) => (0,_modules_fetchForecast__WEBPACK_IMPORTED_MODULE_0__.processJSON)(result))
    .then((result) => (0,_modules_showForecast__WEBPACK_IMPORTED_MODULE_2__.updateGUI)(result));
});

locationInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const newLocation = (0,_modules_userInputs__WEBPACK_IMPORTED_MODULE_1__.getLocation)();

    const fetch = Promise.resolve((0,_modules_fetchForecast__WEBPACK_IMPORTED_MODULE_0__.fetchForecast)(newLocation, '3'));

    fetch.then((result) => (0,_modules_fetchForecast__WEBPACK_IMPORTED_MODULE_0__.processJSON)(result))
      .then((result) => (0,_modules_showForecast__WEBPACK_IMPORTED_MODULE_2__.updateGUI)(result));
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGdJQUErQztBQUMzRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8s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LGdFQUFTO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsZ0VBQVc7O0FBRWpDLGdDQUFnQyxxRUFBYTs7QUFFN0MseUJBQXlCLG1FQUFXO0FBQ3BDLHNCQUFzQixnRUFBUztBQUMvQixDQUFDOztBQUVEO0FBQ0E7QUFDQSx3QkFBd0IsZ0VBQVc7O0FBRW5DLGtDQUFrQyxxRUFBYTs7QUFFL0MsMkJBQTJCLG1FQUFXO0FBQ3RDLHdCQUF3QixnRUFBUztBQUNqQztBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9mZXRjaEZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvc2hvd0ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdXNlcklucHV0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSGVsdmV0aWNhTmV1ZVRoaW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZTtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3R0ZicpO1xufVxuXG4qIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuI2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNnJlbTtcbiAgICBnYXA6IDFyZW07XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuXG4jc2VhcmNoQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNHB4O1xuICAgIHdpZHRoOiAxNHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xufVxuXG4jc2VhcmNoSWNvbiB7XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIHdpZHRoOiAxcmVtO1xufVxuXG4jbG9jYXRpb25TdWJtaXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNsb2NhdGlvbklucHV0IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4jY3VycmVudENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTRyZW07XG4gICAgd2lkdGg6IDEwcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuI2N1cnJlbnRMb2NhdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbiNjdXJyZW50VGVtcCB7XG4gICAgbWFyZ2luOiAtMTBweDtcbiAgICBmb250LXNpemU6IDZlbTtcbn1cblxuI2N1cnJlbnRDb25kaXRpb24sICNjdXJyZW50SGlMbyB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbiNob3VyQ29udGFpbmVye1xuICAgIGhlaWdodDogOHJlbTtcbiAgICB3aWR0aDogMjByZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4jaG91ckNvbmRpdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4jaG91cmx5Rm9yZWNhc3RDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmhvdXJseUZvcmVjYXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuMnJlbTtcbn1cblxuLmhvdXJseUhvdXIge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmhvdXJseVRlbXAge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4jaG91ckNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gICAgaGVpZ2h0OiAxLjRyZW07XG59XG5cbiNob3VyQ29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIGJvcmRlcjogc29saWQgNXB4IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIH1cbiAgIFxuI2hvdXJDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jZGFpbHlDb250YWluZXIge1xuICAgIGhlaWdodDogMTRyZW07XG4gICAgd2lkdGg6IDIwcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuI2RhaWx5SGVhZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC40cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG4jY2FsZW5kYXJJY29uIHtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgd2lkdGg6IDFyZW07XG59XG5cbiNkYWlseUZvcmVjYXN0Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZGFpbHlGb3JlY2FzdCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi5kYXlJY29uIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbn1cblxuLmRheU1pbiwgLmRheU1heCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaG91cmx5SWNvbj5pbWcsIC5kYXlJY29uPmltZyB7XG4gICAgaGVpZ2h0OiAyLjJyZW07XG4gICAgd2lkdGg6IDIuMnJlbTtcbn1cblxuLmRheUJhciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsMERBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCwwREFBMEQ7QUFDOUQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbURBQW1EO0lBQ25ELDZCQUE2QjtJQUM3QixtQkFBbUI7RUFDckI7O0FBRUY7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpREFBaUQ7QUFDckRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlO1xcbiAgICBzcmM6IHVybCguLi9zcmMvSGVsdmV0aWNhTmV1ZVRoaW4udHRmKSBmb3JtYXQoJ3R0ZicpO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDZyZW07XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbiNzZWFyY2hDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDRweDtcXG4gICAgd2lkdGg6IDE0cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XFxufVxcblxcbiNzZWFyY2hJY29uIHtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICB3aWR0aDogMXJlbTtcXG59XFxuXFxuI2xvY2F0aW9uU3VibWl0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbG9jYXRpb25JbnB1dCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2JkYmRiZDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuI2N1cnJlbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDE0cmVtO1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuI2N1cnJlbnRMb2NhdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbiNjdXJyZW50VGVtcCB7XFxuICAgIG1hcmdpbjogLTEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNmVtO1xcbn1cXG5cXG4jY3VycmVudENvbmRpdGlvbiwgI2N1cnJlbnRIaUxvIHtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuI2hvdXJDb250YWluZXJ7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxufVxcblxcbiNob3VyQ29uZGl0aW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4jaG91cmx5Rm9yZWNhc3RDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmhvdXJseUZvcmVjYXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC4ycmVtO1xcbn1cXG5cXG4uaG91cmx5SG91ciB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4uaG91cmx5VGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbiNob3VyQ29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhcntcXG4gICAgaGVpZ2h0OiAxLjRyZW07XFxufVxcblxcbiNob3VyQ29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gICAgYm9yZGVyOiBzb2xpZCA1cHggdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICB9XFxuICAgXFxuI2hvdXJDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2RhaWx5Q29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxNHJlbTtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jZGFpbHlIZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNHJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG59XFxuXFxuI2NhbGVuZGFySWNvbiB7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07XFxufVxcblxcbiNkYWlseUZvcmVjYXN0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmRhaWx5Rm9yZWNhc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgcGFkZGluZzogMC41cmVtIDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cXG5cXG4uZGF5SWNvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXG59XFxuXFxuLmRheU1pbiwgLmRheU1heCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhvdXJseUljb24+aW1nLCAuZGF5SWNvbj5pbWcge1xcbiAgICBoZWlnaHQ6IDIuMnJlbTtcXG4gICAgd2lkdGg6IDIuMnJlbTtcXG59XFxuXFxuLmRheUJhciB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gZmV0Y2hGb3JlY2FzdChsb2NhdGlvbiwgZGF5cykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlc29sdmUoXG4gICAgICBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWMyYTk4MjYzOGNmZDQ3ZWVhMzQ0MDMzOTI0MjQwMiZxPSR7bG9jYXRpb259JmRheXM9JHtkYXlzfWAsXG4gICAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICAgICApLFxuICAgICk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xuICAgIHJlamVjdCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRKU09OKHJlc3VsdCkge1xuICBjb25zdCBqc29uID0gcmVzdWx0Lmpzb24oKTtcbiAgcmV0dXJuIGpzb247XG59XG5cbmZ1bmN0aW9uIGdldExvY2F0aW9uKGpzb24pIHtcbiAgY29uc3QgeyBjb3VudHJ5IH0gPSBqc29uLmxvY2F0aW9uO1xuICBjb25zdCB7IG5hbWUgfSA9IGpzb24ubG9jYXRpb247XG4gIGNvbnN0IGxvY2FsVGltZSA9IGpzb24ubG9jYXRpb24ubG9jYWx0aW1lLnNsaWNlKC01KTtcblxuICByZXR1cm4geyBjb3VudHJ5LCBuYW1lLCBsb2NhbFRpbWUgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudChqc29uKSB7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGpzb24uY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgY29uc3QgdGVtcEMgPSBqc29uLmN1cnJlbnQudGVtcF9jO1xuICBjb25zdCB0ZW1wRiA9IGpzb24uY3VycmVudC50ZW1wX2Y7XG4gIGNvbnN0IGZlZWxzTGlrZUMgPSBqc29uLmN1cnJlbnQuZmVlbHNsaWtlX2M7XG4gIGNvbnN0IGZlZWxzTGlrZUYgPSBqc29uLmN1cnJlbnQuZmVlbHNsaWtlX2Y7XG4gIGNvbnN0IHsgaHVtaWRpdHkgfSA9IGpzb24uY3VycmVudDtcbiAgY29uc3QgeyB1diB9ID0ganNvbi5jdXJyZW50O1xuICBjb25zdCB3aW5kRGlyZWN0aW9uID0ganNvbi5jdXJyZW50LndpbmRfZGlyO1xuICBjb25zdCB3aW5kS1BIID0ganNvbi5jdXJyZW50LndpbmRfa3BoO1xuICBjb25zdCB3aW5kTVBIID0ganNvbi5jdXJyZW50LndpbmRfbXBoO1xuXG4gIHJldHVybiB7XG4gICAgY29uZGl0aW9uLCB0ZW1wQywgdGVtcEYsIGZlZWxzTGlrZUMsIGZlZWxzTGlrZUYsIGh1bWlkaXR5LCB1diwgd2luZERpcmVjdGlvbiwgd2luZEtQSCwgd2luZE1QSCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Rm9yZWNhc3QoanNvbikge1xuICBmdW5jdGlvbiBnZXREYWlseUZvcmVjYXN0KGRheU9iaikge1xuICAgIGNvbnN0IHsgZGF0ZSB9ID0gZGF5T2JqO1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRheU9iai5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgY29uc3QgZ2V0SWNvbiA9IGRheU9iai5kYXkuY29uZGl0aW9uLmljb24uc2xpY2UoMik7XG4gICAgY29uc3QgaWNvbiA9IGBodHRwczovLyR7Z2V0SWNvbn1gO1xuICAgIGNvbnN0IG1pblRlbXBDID0gZGF5T2JqLmRheS5taW50ZW1wX2MudG9TdHJpbmcoKS5zbGljZSgwLCAyKTtcbiAgICBjb25zdCBtYXhUZW1wQyA9IGRheU9iai5kYXkubWF4dGVtcF9jLnRvU3RyaW5nKCkuc2xpY2UoMCwgMik7XG4gICAgY29uc3QgaG91cmx5Rm9yZWNhc3QgPSBkYXlPYmouaG91cjtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRlLCBjb25kaXRpb24sIGljb24sIG1pblRlbXBDLCBtYXhUZW1wQywgaG91cmx5Rm9yZWNhc3QsXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbHRlckZvcmVjYXN0RGF5cyhhcnJheSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRheSA9IGdldERhaWx5Rm9yZWNhc3QoYXJyYXlbaV0pO1xuXG4gICAgICBhcnJheVtpXSA9IGRheTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWZvcm1hdFRpbWUoZGF0ZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItdGVtcGxhdGVcbiAgICBjb25zdCB0aW1lU3RyaW5nID0gbmV3IERhdGUoZGF0ZSlcbiAgICAgIC50b0xvY2FsZVRpbWVTdHJpbmcoJ2VuLVVTJywgeyBob3VyMTI6IHRydWUsIGhvdXI6ICdudW1lcmljJyB9KTtcblxuICAgIHJldHVybiB0aW1lU3RyaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SG91cmx5Rm9yZWNhc3QoaG91ck9iaikge1xuICAgIGNvbnN0IGRhdGUgPSBob3VyT2JqLnRpbWU7XG4gICAgY29uc3QgdGltZSA9IHJlZm9ybWF0VGltZShkYXRlKS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgIGNvbnN0IGdldEljb24gPSBob3VyT2JqLmNvbmRpdGlvbi5pY29uLnNsaWNlKDIpO1xuICAgIGNvbnN0IGljb24gPSBgaHR0cHM6Ly8ke2dldEljb259YDtcbiAgICBjb25zdCB0ZW1wQyA9IGhvdXJPYmoudGVtcF9jLnRvU3RyaW5nKCkuc2xpY2UoMCwgMik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGltZSwgaWNvbiwgdGVtcEMsXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbHRlckZvcmVjYXN0SG91cnMoYXJyYXkpIHtcbiAgICBmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCAzOyBkYXkrKykge1xuICAgICAgY29uc3QgaG91cnMgPSBhcnJheVtkYXldLmhvdXJseUZvcmVjYXN0O1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGhvdXIgPSBnZXRIb3VybHlGb3JlY2FzdChob3Vyc1tpXSk7XG5cbiAgICAgICAgYXJyYXlbZGF5XS5ob3VybHlGb3JlY2FzdFtpXSA9IGhvdXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZm9yZWNhc3REYXlBcnJheSA9IGpzb24uZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG5cbiAgZmlsdGVyRm9yZWNhc3REYXlzKGZvcmVjYXN0RGF5QXJyYXkpO1xuICBmaWx0ZXJGb3JlY2FzdEhvdXJzKGZvcmVjYXN0RGF5QXJyYXkpO1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKGZvcmVjYXN0RGF5QXJyYXkpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzSlNPTihmZXRjaERhdGEpIHtcbiAgY29uc3QganNvbiA9IGF3YWl0IGdldEpTT04oZmV0Y2hEYXRhKTtcbiAgY29uc3QgbG9jYXRpb24gPSBnZXRMb2NhdGlvbihqc29uKTtcbiAgY29uc3QgY3VycmVudCA9IGdldEN1cnJlbnQoanNvbik7XG4gIGNvbnN0IGZvcmVjYXN0ID0gZ2V0Rm9yZWNhc3QoanNvbik7XG5cbiAgcmV0dXJuIHsgbG9jYXRpb24sIGN1cnJlbnQsIGZvcmVjYXN0IH07XG59XG5cbmV4cG9ydCB7XG4gIGZldGNoRm9yZWNhc3QsIHByb2Nlc3NKU09OLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgc2VhcmNoSWNvbiBmcm9tICcuLi9zZWFyY2hJY29uLnN2Zyc7XG5pbXBvcnQgY2FsZW5kYXJJY29uIGZyb20gJy4uL2NhbGVuZGFySWNvbi5zdmcnO1xuXG5mdW5jdGlvbiB1cGRhdGVDdXJyZW50Q29udGFpbmVyKGpzb24pIHtcbiAgY29uc3QgY3VycmVudExvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRMb2NhdGlvbicpO1xuICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGVtcCcpO1xuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRDb25kaXRpb24nKTtcbiAgY29uc3QgY3VycmVudEhpTG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudEhpTG8nKTtcblxuICBjb25zdCBqc29uTG9jYXRpb24gPSBqc29uLmxvY2F0aW9uLm5hbWU7XG4gIGNvbnN0IGpzb25UZW1wQyA9IGpzb24uY3VycmVudC50ZW1wQztcbiAgY29uc3QganNvbkNvbmRpdGlvbiA9IGpzb24uY3VycmVudC5jb25kaXRpb247XG5cbiAgY29uc3QganNvbkxvQyA9IGpzb24uZm9yZWNhc3RbMF0ubWluVGVtcEM7XG4gIGNvbnN0IGpzb25IaUMgPSBqc29uLmZvcmVjYXN0WzBdLm1heFRlbXBDO1xuXG4gIGNvbnN0IGpzb25IaUxvQyA9IGBIOiR7anNvbkhpQ33CsCBMOiR7anNvbkxvQ33CsGA7XG5cbiAgY3VycmVudExvY2F0aW9uLnRleHRDb250ZW50ID0ganNvbkxvY2F0aW9uO1xuICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IGAke2pzb25UZW1wQ33CsGA7XG4gIGN1cnJlbnRDb25kaXRpb24udGV4dENvbnRlbnQgPSBqc29uQ29uZGl0aW9uO1xuICBjdXJyZW50SGlMby50ZXh0Q29udGVudCA9IGpzb25IaUxvQztcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVIb3VyKCkge1xuICBjb25zdCBob3VybHlGb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VybHlGb3JlY2FzdENvbnRhaW5lcicpO1xuICBjb25zdCBob3VybHlGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBob3VybHlIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhvdXJseUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaG91cmx5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBob3VybHlIb3VyLmNsYXNzTmFtZSA9ICdob3VybHlIb3VyJztcbiAgaG91cmx5SWNvbi5jbGFzc05hbWUgPSAnaG91cmx5SWNvbic7XG4gIGhvdXJseUljb24uYXBwZW5kQ2hpbGQoaW1nKTtcbiAgaG91cmx5VGVtcC5jbGFzc05hbWUgPSAnaG91cmx5VGVtcCc7XG4gIGhvdXJseUZvcmVjYXN0LmFwcGVuZENoaWxkKGhvdXJseUhvdXIpO1xuICBob3VybHlGb3JlY2FzdC5hcHBlbmRDaGlsZChob3VybHlJY29uKTtcbiAgaG91cmx5Rm9yZWNhc3QuYXBwZW5kQ2hpbGQoaG91cmx5VGVtcCk7XG4gIGhvdXJseUZvcmVjYXN0LmNsYXNzTmFtZSA9ICdob3VybHlGb3JlY2FzdCc7XG5cbiAgaG91cmx5Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3QpO1xufVxuXG5mdW5jdGlvbiBjbGVhckhvdXJseUZvcmVjYXN0KHBhcmVudE5vZGUpIHtcbiAgcGFyZW50Tm9kZS5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVIb3VybHlGb3JlY2FzdCgpIHtcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cmx5Rm9yZWNhc3RDb250YWluZXInKTtcblxuICBjbGVhckhvdXJseUZvcmVjYXN0KGhvdXJseUZvcmVjYXN0Q29udGFpbmVyKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICBnZW5lcmF0ZUhvdXIoKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVIb3VybHlGb3JlY2FzdChqc29uKSB7XG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRIb3VycygpO1xuICBjb25zdCBjdXJyZW50SG91ckZvcmVjYXN0ID0ganNvbi5mb3JlY2FzdFswXS5ob3VybHlGb3JlY2FzdFtjdXJyZW50VGltZV07XG5cbiAgYXdhaXQgZ2VuZXJhdGVIb3VybHlGb3JlY2FzdCgpO1xuXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvdXJseUZvcmVjYXN0Q29udGFpbmVyJyk7XG4gIGNvbnN0IGhvdXJseUVsZW1lbnRBcnJheSA9IFsuLi5ob3VybHlGb3JlY2FzdENvbnRhaW5lci5jaGlsZHJlbl07XG5cbiAgaG91cmx5RWxlbWVudEFycmF5WzBdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gJ05vdyc7XG4gIGhvdXJseUVsZW1lbnRBcnJheVswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5zcmMgPSBjdXJyZW50SG91ckZvcmVjYXN0Lmljb247XG4gIGhvdXJseUVsZW1lbnRBcnJheVswXS5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRIb3VyRm9yZWNhc3QudGVtcEN9wrBgO1xuXG4gIGNvbnN0IHJlbWFpbmluZ0hvdXJzID0gKDI0IC0gY3VycmVudFRpbWUpO1xuICBsZXQgdGltZSA9IGN1cnJlbnRUaW1lO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcmVtYWluaW5nSG91cnM7IGkrKykge1xuICAgIGNvbnN0IHRoaXNIb3VyRm9yZWNhc3QgPSBqc29uLmZvcmVjYXN0WzBdLmhvdXJseUZvcmVjYXN0W3RpbWUgKz0gMV07XG5cbiAgICBob3VybHlFbGVtZW50QXJyYXlbaV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSB0aGlzSG91ckZvcmVjYXN0LnRpbWU7XG4gICAgaG91cmx5RWxlbWVudEFycmF5W2ldLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnNyYyA9IHRoaXNIb3VyRm9yZWNhc3QuaWNvbjtcbiAgICBob3VybHlFbGVtZW50QXJyYXlbaV0uY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBgJHt0aGlzSG91ckZvcmVjYXN0LnRlbXBDfcKwYDtcbiAgfVxuXG4gIGxldCBuZXh0RGF5ID0gcmVtYWluaW5nSG91cnM7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50VGltZTsgaSsrKSB7XG4gICAgY29uc3QgdGhpc0hvdXJGb3JlY2FzdCA9IGpzb24uZm9yZWNhc3RbMV0uaG91cmx5Rm9yZWNhc3RbaV07XG5cbiAgICBob3VybHlFbGVtZW50QXJyYXlbbmV4dERheV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSB0aGlzSG91ckZvcmVjYXN0LnRpbWU7XG4gICAgaG91cmx5RWxlbWVudEFycmF5W25leHREYXldLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnNyYyA9IHRoaXNIb3VyRm9yZWNhc3QuaWNvbjtcbiAgICBob3VybHlFbGVtZW50QXJyYXlbbmV4dERheV0uY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBgJHt0aGlzSG91ckZvcmVjYXN0LnRlbXBDfcKwYDtcblxuICAgIG5leHREYXkgKz0gMTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVIb3VyQ29udGFpbmVyKGpzb24pIHtcbiAgY29uc3QgaG91ckNvbmRpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VyQ29uZGl0aW9uJyk7XG5cbiAgY29uc3QganNvbkNvbmRpdGlvbiA9IGpzb24uZm9yZWNhc3RbMF0uY29uZGl0aW9uO1xuXG4gIGhvdXJDb25kaXRpb24udGV4dENvbnRlbnQgPSBgJHtqc29uQ29uZGl0aW9ufSB0aHJvdWdob3V0IHRoZSBkYXlgO1xuXG4gIHVwZGF0ZUhvdXJseUZvcmVjYXN0KGpzb24pO1xufVxuXG5mdW5jdGlvbiBnZXREYXlOYW1lKGRhdGVTdHJpbmcpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgeyB3ZWVrZGF5OiAnc2hvcnQnIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVEYWlseUNvbnRhaW5lcihqc29uKSB7XG4gIGNvbnN0IGRhaWx5Rm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFpbHlGb3JlY2FzdENvbnRhaW5lcicpO1xuICBjb25zdCBkYWlseUVsZW1lbnRBcnJheSA9IFsuLi5kYWlseUZvcmVjYXN0Q29udGFpbmVyLmNoaWxkcmVuXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGNvbnN0IHsgZGF0ZSB9ID0ganNvbi5mb3JlY2FzdFtpXTtcbiAgICBjb25zdCBkYXkgPSBnZXREYXlOYW1lKGRhdGUpO1xuXG4gICAgY29uc3QgbWluID0ganNvbi5mb3JlY2FzdFtpXS5taW5UZW1wQztcbiAgICBjb25zdCBtYXggPSBqc29uLmZvcmVjYXN0W2ldLm1heFRlbXBDO1xuXG4gICAgZGFpbHlFbGVtZW50QXJyYXlbaV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBkYXk7XG4gICAgZGFpbHlFbGVtZW50QXJyYXlbaV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uc3JjID0ganNvbi5mb3JlY2FzdFtpXS5pY29uO1xuICAgIGRhaWx5RWxlbWVudEFycmF5W2ldLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gYCR7bWlufcKwYDtcbiAgICBkYWlseUVsZW1lbnRBcnJheVtpXS5jaGlsZHJlbls0XS50ZXh0Q29udGVudCA9IGAke21heH3CsGA7XG4gIH1cblxuICBkYWlseUVsZW1lbnRBcnJheVswXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUdVSShqc29uKSB7XG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hJY29uJyk7XG4gIHNlYXJjaC5zcmMgPSBzZWFyY2hJY29uO1xuXG4gIGNvbnN0IGNhbGVuZGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbGVuZGFySWNvbicpO1xuICBjYWxlbmRhci5zcmMgPSBjYWxlbmRhckljb247XG5cbiAgdXBkYXRlQ3VycmVudENvbnRhaW5lcihqc29uKTtcbiAgdXBkYXRlSG91ckNvbnRhaW5lcihqc29uKTtcbiAgdXBkYXRlRGFpbHlDb250YWluZXIoanNvbik7XG59XG5cbmV4cG9ydCB7IHVwZGF0ZUdVSSB9O1xuIiwiZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XG4gIGNvbnN0IG5ld0xvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uSW5wdXQnKS52YWx1ZTtcbiAgcmV0dXJuIG5ld0xvY2F0aW9uO1xufVxuXG5leHBvcnQgeyBnZXRMb2NhdGlvbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7XG4gIGZldGNoRm9yZWNhc3QsIHByb2Nlc3NKU09OLFxufSBmcm9tICcuL21vZHVsZXMvZmV0Y2hGb3JlY2FzdCc7XG5cbmltcG9ydCB7IGdldExvY2F0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL3VzZXJJbnB1dHMnO1xuXG5pbXBvcnQgeyB1cGRhdGVHVUkgfSBmcm9tICcuL21vZHVsZXMvc2hvd0ZvcmVjYXN0JztcblxuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuY3NzJzsgLy8gaWYgYnJva2VuLCBtb3ZlIGNzcyBiYWNrIHRvIGRpc3QgYW5kIGxpbmsgZGlyZWN0bHkgaW4gaHRtbFxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXNoZWV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0eWxlc2hlZXQnKTtcbiAgc3R5bGVzaGVldC5ocmVmID0gc3R5bGU7XG5cbiAgY29uc3QgZmV0Y2ggPSBQcm9taXNlLnJlc29sdmUoZmV0Y2hGb3JlY2FzdCgnYnJpc2JhbmUnLCAnMycpKTtcblxuICBmZXRjaC50aGVuKChyZXN1bHQpID0+IHByb2Nlc3NKU09OKHJlc3VsdCkpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4gdXBkYXRlR1VJKHJlc3VsdCkpO1xufTtcblxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uU3VibWl0Jyk7XG5jb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uSW5wdXQnKTtcblxuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBuZXdMb2NhdGlvbiA9IGdldExvY2F0aW9uKCk7XG5cbiAgY29uc3QgZmV0Y2ggPSBQcm9taXNlLnJlc29sdmUoZmV0Y2hGb3JlY2FzdChuZXdMb2NhdGlvbiwgJzMnKSk7XG5cbiAgZmV0Y2gudGhlbigocmVzdWx0KSA9PiBwcm9jZXNzSlNPTihyZXN1bHQpKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHVwZGF0ZUdVSShyZXN1bHQpKTtcbn0pO1xuXG5sb2NhdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBjb25zdCBuZXdMb2NhdGlvbiA9IGdldExvY2F0aW9uKCk7XG5cbiAgICBjb25zdCBmZXRjaCA9IFByb21pc2UucmVzb2x2ZShmZXRjaEZvcmVjYXN0KG5ld0xvY2F0aW9uLCAnMycpKTtcblxuICAgIGZldGNoLnRoZW4oKHJlc3VsdCkgPT4gcHJvY2Vzc0pTT04ocmVzdWx0KSlcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHVwZGF0ZUdVSShyZXN1bHQpKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=