/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"input::-moz-placeholder {\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-weight: 300;\\n  color: #94a3b8;\\n}\\ninput::placeholder {\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-weight: 300;\\n  color: #94a3b8;\\n}\\n\\ninput::-webkit-input-placeholder {\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-weight: 300;\\n  color: #94a3b8;\\n}\\n\\ninput::-moz-placeholder {\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-weight: 300;\\n  color: #94a3b8;\\n}\\n\\ninput:-ms-input-placeholder {\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-weight: 300;\\n  color: #94a3b8;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  border: none;\\n}\\n\\nh1, h2, h3 {\\n  color: #e2e8f0;\\n}\\n\\n::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n@-moz-document url-prefix() {\\n  body {\\n    scrollbar-width: none;\\n  }\\n}\\nhtml, body {\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-weight: 400;\\n}\\nhtml #container #header, body #container #header {\\n  height: 8vh;\\n  width: 100vw;\\n  background-color: #0e0b2b;\\n  position: relative;\\n}\\nhtml #container #header .project, body #container #header .project {\\n  position: absolute;\\n  top: 50%;\\n  transform: translateY(-50%);\\n  margin-left: 2rem;\\n}\\nhtml #container #main, body #container #main {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 100vw;\\n  text-align: center;\\n  color: #cbd5e1;\\n}\\nhtml #container #main #current-weather, body #container #main #current-weather {\\n  display: flex;\\n  flex-direction: column;\\n  flex-grow: 1;\\n  height: 84vh;\\n}\\nhtml #container #main #current-weather #main-info, body #container #main #current-weather #main-info {\\n  display: flex;\\n  flex-direction: column;\\n  padding-top: 2rem;\\n  gap: 2rem;\\n  flex-grow: 1;\\n  justify-content: space-between;\\n  align-items: center;\\n  background-image: linear-gradient(to bottom, #28217b, #241e6f, #1b1653);\\n}\\nhtml #container #main #current-weather #main-info #temp, body #container #main #current-weather #main-info #temp {\\n  display: flex;\\n  gap: 1rem;\\n}\\nhtml #container #main #current-weather #main-info .temperature, body #container #main #current-weather #main-info .temperature {\\n  font-weight: 300;\\n}\\nhtml #container #main #current-weather #main-info .units-switcher, body #container #main #current-weather #main-info .units-switcher {\\n  color: #e2e8f0;\\n  transition: all 0.3s;\\n  cursor: pointer;\\n}\\nhtml #container #main #current-weather #main-info .units-switcher:hover, body #container #main #current-weather #main-info .units-switcher:hover {\\n  transition: all 0.3s;\\n  color: #8b5cf6;\\n}\\nhtml #container #main #current-weather #main-info .search-field, body #container #main #current-weather #main-info .search-field {\\n  background-color: transparent;\\n  border-bottom: #cbd5e1 solid 1px;\\n  outline: none;\\n  font-size: 1rem;\\n  color: #cbd5e1;\\n  transition: all 0.3s;\\n  width: 10rem;\\n  text-align: center;\\n}\\nhtml #container #main #current-weather #main-info .search-field:hover, body #container #main #current-weather #main-info .search-field:hover {\\n  transition: all 0.3s;\\n  border-bottom: #8b5cf6 solid 1px;\\n  width: 13rem;\\n}\\nhtml #container #main #current-weather #main-info .submit, body #container #main #current-weather #main-info .submit {\\n  cursor: pointer;\\n  transition: all 0.3s;\\n}\\nhtml #container #main #current-weather #main-info .submit:hover, body #container #main #current-weather #main-info .submit:hover {\\n  transition: all 0.3s;\\n  color: #8b5cf6;\\n}\\nhtml #container #main #current-weather #main-info .weather-icon, body #container #main #current-weather #main-info .weather-icon {\\n  height: 3rem;\\n  filter: drop-shadow(7px 7px 1rem rgba(0, 0, 0, 0.5));\\n}\\nhtml #container #main #current-weather #other-info, body #container #main #current-weather #other-info {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  background-color: #1b1653;\\n  flex-grow: 1;\\n  padding-top: 2rem;\\n  padding-bottom: 2rem;\\n}\\nhtml #container #main #current-weather #other-info > * > *, body #container #main #current-weather #other-info > * > * {\\n  padding-top: 1rem;\\n}\\nhtml #container #main #weather-forecast, body #container #main #weather-forecast {\\n  display: grid;\\n  grid-template-columns: repeat(5, 1fr);\\n  flex-grow: 2;\\n  height: 84vh;\\n}\\nhtml #container #main #weather-forecast #forecast-section-day-1, body #container #main #weather-forecast #forecast-section-day-1 {\\n  background-image: linear-gradient(to bottom, #2e268f, #3b31b8, #3b31b8, #2e268f);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding-top: 25vh;\\n  min-height: 70vh;\\n  height: 100%;\\n  gap: 1rem;\\n  padding-left: 0.5rem;\\n  padding-right: 0.5rem;\\n}\\nhtml #container #main #weather-forecast .forecast-icon-day-1, body #container #main #weather-forecast .forecast-icon-day-1 {\\n  height: 4rem;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n  filter: drop-shadow(7px 7px 1rem rgba(0, 0, 0, 0.5));\\n}\\nhtml #container #main #weather-forecast .forecast-feels-like-day-1, body #container #main #weather-forecast .forecast-feels-like-day-1 {\\n  padding-top: 1rem;\\n}\\nhtml #container #main #weather-forecast #forecast-section-day-2, body #container #main #weather-forecast #forecast-section-day-2 {\\n  background-image: linear-gradient(to bottom, #28217b, #352ca3, #352ca3, #28217b);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding-top: 25vh;\\n  min-height: 70vh;\\n  height: 100%;\\n  gap: 1rem;\\n  padding-left: 0.5rem;\\n  padding-right: 0.5rem;\\n}\\nhtml #container #main #weather-forecast .forecast-icon-day-2, body #container #main #weather-forecast .forecast-icon-day-2 {\\n  height: 4rem;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n  filter: drop-shadow(7px 7px 1rem rgba(0, 0, 0, 0.5));\\n}\\nhtml #container #main #weather-forecast .forecast-feels-like-day-2, body #container #main #weather-forecast .forecast-feels-like-day-2 {\\n  padding-top: 1rem;\\n}\\nhtml #container #main #weather-forecast #forecast-section-day-3, body #container #main #weather-forecast #forecast-section-day-3 {\\n  background-image: linear-gradient(to bottom, #211b67, #2e268f, #2e268f, #211b67);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding-top: 25vh;\\n  min-height: 70vh;\\n  height: 100%;\\n  gap: 1rem;\\n  padding-left: 0.5rem;\\n  padding-right: 0.5rem;\\n}\\nhtml #container #main #weather-forecast .forecast-icon-day-3, body #container #main #weather-forecast .forecast-icon-day-3 {\\n  height: 4rem;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n  filter: drop-shadow(7px 7px 1rem rgba(0, 0, 0, 0.5));\\n}\\nhtml #container #main #weather-forecast .forecast-feels-like-day-3, body #container #main #weather-forecast .forecast-feels-like-day-3 {\\n  padding-top: 1rem;\\n}\\nhtml #container #main #weather-forecast #forecast-section-day-4, body #container #main #weather-forecast #forecast-section-day-4 {\\n  background-image: linear-gradient(to bottom, #1b1653, #28217b, #28217b, #1b1653);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding-top: 25vh;\\n  min-height: 70vh;\\n  height: 100%;\\n  gap: 1rem;\\n  padding-left: 0.5rem;\\n  padding-right: 0.5rem;\\n}\\nhtml #container #main #weather-forecast .forecast-icon-day-4, body #container #main #weather-forecast .forecast-icon-day-4 {\\n  height: 4rem;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n  filter: drop-shadow(7px 7px 1rem rgba(0, 0, 0, 0.5));\\n}\\nhtml #container #main #weather-forecast .forecast-feels-like-day-4, body #container #main #weather-forecast .forecast-feels-like-day-4 {\\n  padding-top: 1rem;\\n}\\nhtml #container #main #weather-forecast #forecast-section-day-5, body #container #main #weather-forecast #forecast-section-day-5 {\\n  background-image: linear-gradient(to bottom, #14113f, #211b67, #211b67, #14113f);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding-top: 25vh;\\n  min-height: 70vh;\\n  height: 100%;\\n  gap: 1rem;\\n  padding-left: 0.5rem;\\n  padding-right: 0.5rem;\\n}\\nhtml #container #main #weather-forecast .forecast-icon-day-5, body #container #main #weather-forecast .forecast-icon-day-5 {\\n  height: 4rem;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n  filter: drop-shadow(7px 7px 1rem rgba(0, 0, 0, 0.5));\\n}\\nhtml #container #main #weather-forecast .forecast-feels-like-day-5, body #container #main #weather-forecast .forecast-feels-like-day-5 {\\n  padding-top: 1rem;\\n}\\nhtml #container #footer, body #container #footer {\\n  height: 8vh;\\n  width: 100vw;\\n  background-color: #0e0b2b;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/css/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/apifn.js":
/*!**********************!*\
  !*** ./src/apifn.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getApi)\n/* harmony export */ });\nfunction getApi(location, units) {\r\n    return fetch(\r\n        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=632fd6bb413cdf25606b95ce9dcf7790&units=${units}`,\r\n        {mode: 'cors'}\r\n    )\r\n};\n\n//# sourceURL=webpack://weather-app/./src/apifn.js?");

/***/ }),

/***/ "./src/createpage.js":
/*!***************************!*\
  !*** ./src/createpage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPage)\n/* harmony export */ });\nfunction createPage() {\r\n\r\n    createSection('container', document.body);\r\n    createSection('header', document.getElementById('container'));\r\n    createContent('h2', 'project', 'One Weather App More', document.getElementById('header'));\r\n    createSection('main', document.getElementById('container'));\r\n    createSection('footer', document.getElementById('container'));\r\n    const main = document.getElementById('main');\r\n\r\n    createSection('current-weather', main);\r\n\r\n    createSection('main-info', document.getElementById('current-weather'));\r\n    const mainInfo = document.getElementById('main-info');\r\n\r\n    createContent('h1', 'location', '', mainInfo);\r\n    createContent('p', 'description', '', mainInfo);\r\n\r\n    createSection('temp', mainInfo);\r\n    const temp = document.getElementById('temp');\r\n    createContent('h2', 'temperature', '', temp);\r\n    createContent('p', 'units-switcher', '', temp);\r\n\r\n    createContent('img', 'weather-icon', '', mainInfo);\r\n    createContent('input', 'search-field', '', mainInfo);\r\n    const searchFlield = document.querySelector('.search-field');\r\n    searchFlield.type = 'text';\r\n    searchFlield.placeholder = 'Enter a location';\r\n    createContent('submit', 'submit', 'Search', mainInfo);\r\n\r\n    createSection('other-info', document.getElementById('current-weather'));\r\n\r\n    otherInfoContent('feels-like', 'Feels like');\r\n    otherInfoContent('temp-max', 'Max temperature')\r\n    otherInfoContent('temp-min', 'Min temperature');\r\n    otherInfoContent('humidity', 'Humidity');\r\n    otherInfoContent('pressure', 'Pressure');\r\n    otherInfoContent('wind-speed', 'Wind speed');\r\n\r\n    createSection('weather-forecast', main);\r\n\r\n    forecastContent('1');\r\n    forecastContent('2');\r\n    forecastContent('3');\r\n    forecastContent('4');\r\n    forecastContent('5');\r\n\r\n    function createContent(type, class_Name, text, parent) {\r\n        let el = document.createElement(type);\r\n        el.className = class_Name;\r\n        el.innerText = text;\r\n        parent.append(el);\r\n    };\r\n\r\n    function createSection(id, parent) {\r\n        let el = document.createElement('div');\r\n        el.id = id;\r\n        parent.append(el);\r\n    };\r\n\r\n    function otherInfoContent(elClass, title) {\r\n        createSection(elClass, document.getElementById('other-info'));\r\n        let el = document.getElementById(elClass);\r\n        createContent('h3', 'title', title, el);\r\n        createContent('p', `current-${elClass}`, '', el);\r\n    }\r\n\r\n    function forecastContent(day) {\r\n        createSection(`forecast-section-day-${day}`, document.getElementById('weather-forecast'));\r\n        let el = document.getElementById(`forecast-section-day-${day}`);\r\n        createContent('h2', `forecast-temp-day-${day}`, '', el);\r\n        createContent('p', `forecast-desc-day-${day}`, '', el);\r\n        createContent('img', `forecast-icon-day-${day}`, '', el);\r\n        createSection(`forecast-feels-like-day-${day}`, el);\r\n        createContent('h3', 'title', 'Feels like', document.getElementById(`forecast-feels-like-day-${day}`));\r\n        createContent('p', `forecast-feels-like-day-${day}`, '', document.getElementById(`forecast-feels-like-day-${day}`));\r\n    };\r\n};\n\n//# sourceURL=webpack://weather-app/./src/createpage.js?");

/***/ }),

/***/ "./src/domfns.js":
/*!***********************!*\
  !*** ./src/domfns.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ searchWeather),\n/* harmony export */   \"renderWeather\": () => (/* binding */ renderWeather),\n/* harmony export */   \"switchUnits\": () => (/* binding */ switchUnits)\n/* harmony export */ });\n/* harmony import */ var _apifn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apifn */ \"./src/apifn.js\");\n\r\n\r\nfunction renderCurrentWeather(data) {\r\n    const chosenUnits = document.querySelector('.units-switcher').innerText;\r\n    \r\n    document.querySelector('.location').innerText = `${data.city.name}, ${data.city.country}`;\r\n    document.querySelector('.temperature').innerText = `${data.list[0].main.temp}${chosenUnits}`;\r\n    document.querySelector('.description').innerText = data.list[0].weather[0].description;\r\n    document.querySelector('.weather-icon').src = `./images/${data.list[0].weather[0].icon}.png`;\r\n    document.querySelector('.current-humidity').innerText = data.list[0].main.humidity;\r\n    document.querySelector('.current-pressure').innerText = data.list[0].main.pressure;\r\n    document.querySelector('.current-feels-like').innerText = `${data.list[0].main.feels_like}${chosenUnits}`;\r\n    document.querySelector('.current-temp-max').innerText = `${data.list[0].main.temp_max}${chosenUnits}`;\r\n    document.querySelector('.current-temp-min').innerText = `${data.list[0].main.temp_min}${chosenUnits}`;\r\n    if (chosenUnits === '°F') {\r\n        document.querySelector('.current-wind-speed').innerText = `${data.list[0].wind.speed}miles/h`;\r\n    } else {\r\n        document.querySelector('.current-wind-speed').innerText = `${data.list[0].wind.speed}meter/sec`;\r\n    }\r\n};\r\n\r\nfunction renderFullForecast(data) {\r\n    renderForecast('1', 8, data);\r\n    renderForecast('2', 16, data);\r\n    renderForecast('3', 24, data);\r\n    renderForecast('4', 32, data);\r\n    renderForecast('5', 39, data);\r\n};\r\n\r\nfunction renderForecast(day, list, data) {\r\n    const chosenUnits = document.querySelector('.units-switcher').innerText;\r\n\r\n    document.querySelector(`.forecast-temp-day-${day}`).innerText = `${data.list[list].main.temp}${chosenUnits}`;\r\n    document.querySelector(`.forecast-desc-day-${day}`).innerText = data.list[list].weather[0].description;\r\n    document.querySelector(`.forecast-icon-day-${day}`).src = `./images/${data.list[list].weather[0].icon}.png`;\r\n    document.querySelector(`.forecast-feels-like-day-${day}`).innerText = `${data.list[list].main.feels_like}${chosenUnits}`;\r\n}\r\n\r\nasync function renderWeather(defaultInput = '', updateUnits = false) {\r\n    try {\r\n        let response;\r\n        if (defaultInput !== '') \r\n            response = await (0,_apifn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(defaultInput, unitsValue());\r\n        else if (updateUnits === true)\r\n            response = await (0,_apifn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.querySelector('.location').innerText.replace(/\\s/g, \"\"), unitsValue());\r\n        else\r\n            response = await (0,_apifn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.querySelector('.search-field').value, unitsValue());\r\n        const weatherData = await response.json();\r\n        renderCurrentWeather(weatherData);\r\n        renderFullForecast(weatherData);\r\n        document.querySelector('.search-field').value = '';\r\n    } catch (error) {\r\n        console.error(error);\r\n    };\r\n};\r\n\r\nfunction searchWeather() {\r\n    document.querySelector('.submit').addEventListener('click', () => {\r\n        if (document.querySelector('.search-field').value === '') return;\r\n        renderWeather();\r\n    });\r\n};\r\n\r\nfunction switchUnits() {\r\n    const units = document.querySelector('.units-switcher');\r\n    units.innerText = '°C';\r\n    units.addEventListener('click', () => {\r\n        if (units.innerText === '°C') \r\n        units.innerText = '°F';\r\n        else units.innerText = '°C';\r\n        renderWeather('', true);\r\n    })\r\n};\r\n\r\nfunction unitsValue() {\r\n    if (document.querySelector('.units-switcher').innerText === '°C') return 'metric';\r\n    else return 'imperial';\r\n};\n\n//# sourceURL=webpack://weather-app/./src/domfns.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _createpage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createpage.js */ \"./src/createpage.js\");\n/* harmony import */ var _domfns_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domfns.js */ \"./src/domfns.js\");\n\r\n\r\n\r\n\r\nconst link = document.createElement('link');\r\nlink.rel = 'shortcut icon';\r\nlink.type = 'image/x-icon';\r\nlink.href = './images/favicon.png';\r\ndocument.getElementsByTagName('head')[0].appendChild(link);\r\nconst invoke = () => {\r\n\t(0,_createpage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\t(0,_domfns_js__WEBPACK_IMPORTED_MODULE_2__.switchUnits)();\r\n\t(0,_domfns_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\t(0,_domfns_js__WEBPACK_IMPORTED_MODULE_2__.renderWeather)('London');\r\n};\r\ninvoke();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;