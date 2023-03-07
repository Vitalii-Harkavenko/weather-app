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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\nbody {\\r\\n    font-family: sans-serif;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    border: none;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n}\\r\\n#container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    flex-wrap: wrap;\\r\\n    height: 100vh;\\r\\n}\\r\\n#header {\\r\\n    height: 50px;\\r\\n    width: 100%;\\r\\n    background-color: rgb(5, 8, 28);\\r\\n}\\r\\n#main {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    max-width: 100%;\\r\\n    height: calc(100% - 100px);\\r\\n    flex-basis: calc(100% - 100px);\\r\\n    overflow-y: auto;\\r\\n}\\r\\n#footer {\\r\\n    height: 50px;\\r\\n    width: 100%;\\r\\n    background-color: rgb(5, 8, 28);\\r\\n    position: absolute;\\r\\n    bottom: 0;\\r\\n}\\r\\n#current-weather {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    flex-grow: 1;\\r\\n}\\r\\n#main-info {\\r\\n    display: flex;\\r\\n    flex-grow: 1;\\r\\n    flex-direction: column;\\r\\n    justify-content: space-evenly;\\r\\n    background-color: rgb(35, 40, 60);\\r\\n}\\r\\n#main-info > * {\\r\\n    align-self: center;\\r\\n    border: none;\\r\\n    padding: 0px;\\r\\n    margin-top: 10px;\\r\\n    margin-bottom: 10px;\\r\\n    color: #fff;\\r\\n}\\r\\n#temp {\\r\\n    display: flex;\\r\\n    gap: 1rem;\\r\\n}\\r\\n.units-switcher {\\r\\n    transition: all 0.3s;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.units-switcher:hover {\\r\\n    transition: all 0.3s;\\r\\n    color: rgb(186, 216, 255);\\r\\n}\\r\\n.location {\\r\\n    font-size: 1.7rem;\\r\\n}\\r\\n#main-info > .search-field {\\r\\n    background-color: transparent;\\r\\n    border-bottom: #fff solid 1px;\\r\\n    outline: none;\\r\\n    font-size: 1.2rem;\\r\\n    transition: all 0.3s;\\r\\n    width: 9rem;\\r\\n    text-align: center;\\r\\n}\\r\\n#main-info > .search-field:hover {\\r\\n    transition: all 0.3s;\\r\\n    width: 13rem;\\r\\n}\\r\\n#main-info > .submit {\\r\\n    cursor: pointer;\\r\\n    transition: all 0.3s;\\r\\n    color: rgb(255, 255, 255);\\r\\n}\\r\\n#main-info > .submit:hover {\\r\\n    transition: all 0.3s;\\r\\n    color: rgb(186, 216, 255);\\r\\n}\\r\\n#main-info > .weather-icon {\\r\\n    height: 3rem;\\r\\n    width: fit-content;\\r\\n    filter: drop-shadow(7px 7px 30px rgb(0, 0, 0));\\r\\n}\\r\\n#other-info {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr;\\r\\n    background-color: rgb(25, 30, 50);\\r\\n    color: #fff;\\r\\n    border: none;\\r\\n}\\r\\n#other-info > * {\\r\\n    text-align: center;\\r\\n    padding: 1rem;\\r\\n}\\r\\n#weather-forecast {\\r\\n    display: flex;\\r\\n    flex-grow: 3;\\r\\n    border: none;\\r\\n    color: #fff;\\r\\n}\\r\\n#weather-forecast > * {\\r\\n    text-align: center;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    flex-grow: 1;\\r\\n    padding-left: 10px;\\r\\n    padding-right: 10px;\\r\\n    gap: 1rem;\\r\\n}\\r\\n#forecast-section-day-one {\\r\\n    background-color: rgb(45, 50, 70);\\r\\n}\\r\\n#forecast-section-day-two {\\r\\n    background-color: rgb(35, 40, 60);\\r\\n}\\r\\n#forecast-section-day-three {\\r\\n    background-color: rgb(25, 30, 50);\\r\\n}\\r\\n#forecast-section-day-four {\\r\\n    background-color: rgb(15, 20, 40);\\r\\n}\\r\\n#forecast-section-day-five {\\r\\n    background-color: rgb(5, 10, 30);\\r\\n}\\r\\n.forecast-icon-day-one {\\r\\n    height: 3rem;\\r\\n    width: fit-content;\\r\\n    align-self: center;\\r\\n    filter: drop-shadow(7px 7px 30px rgb(0, 0, 0));\\r\\n}\\r\\n.forecast-icon-day-two {\\r\\n    height: 3rem;\\r\\n    width: fit-content;\\r\\n    align-self: center;\\r\\n    filter: drop-shadow(7px 7px 30px rgb(0, 0, 0));\\r\\n}\\r\\n.forecast-icon-day-three {\\r\\n    height: 3rem;\\r\\n    width: fit-content;\\r\\n    align-self: center;\\r\\n    filter: drop-shadow(7px 7px 30px rgb(0, 0, 0));\\r\\n}\\r\\n.forecast-icon-day-four {\\r\\n    height: 3rem;\\r\\n    width: fit-content;\\r\\n    align-self: center;\\r\\n    filter: drop-shadow(7px 7px 30px rgb(0, 0, 0));\\r\\n}\\r\\n.forecast-icon-day-five {\\r\\n    height: 3rem;\\r\\n    width: fit-content;\\r\\n    align-self: center;\\r\\n    filter: drop-shadow(7px 7px 30px rgb(0, 0, 0));\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPage)\n/* harmony export */ });\nfunction createPage() {\r\n\r\n    createSection('container', document.body);\r\n    createSection('header', document.getElementById('container'));\r\n    createSection('main', document.getElementById('container'));\r\n    createSection('footer', document.getElementById('container'));\r\n    const main = document.getElementById('main');\r\n\r\n    createSection('current-weather', main);\r\n\r\n    createSection('main-info', document.getElementById('current-weather'));\r\n    const mainInfo = document.getElementById('main-info');\r\n\r\n    createContent('p', 'location', '', mainInfo);\r\n    createContent('p', 'description', '', mainInfo);\r\n\r\n    createSection('temp', mainInfo);\r\n    const temp = document.getElementById('temp');\r\n    createContent('p', 'temperature', '', temp);\r\n    createContent('p', 'units-switcher', '', temp);\r\n\r\n    createContent('img', 'weather-icon', '', mainInfo);\r\n    createContent('input', 'search-field', '', mainInfo);\r\n    createContent('submit', 'submit', 'search', mainInfo);\r\n\r\n    createSection('other-info', document.getElementById('current-weather'));\r\n    const otherInfo = document.getElementById('other-info');\r\n\r\n    createSection('feels-like', otherInfo);\r\n    const feelsLike = document.getElementById('feels-like');\r\n    createContent('p', 'title', 'Feels like', feelsLike);\r\n    createContent('p', 'current-feels-like', '', feelsLike);\r\n\r\n    createSection('temp-max', otherInfo);\r\n    const tempMax = document.getElementById('temp-max');\r\n    createContent('p', 'title', 'Max temperature', tempMax);\r\n    createContent('p', 'current-temp-max', '', tempMax);\r\n\r\n    createSection('temp-min', otherInfo);\r\n    const tempMin = document.getElementById('temp-min');\r\n    createContent('p', 'title', 'Min temperature', tempMin);\r\n    createContent('p', 'current-temp-min', '', tempMin);\r\n\r\n    createSection('humidity', otherInfo);\r\n    const humidity = document.getElementById('humidity');\r\n    createContent('p', 'title', 'Humidity', humidity);\r\n    createContent('p', 'current-humidity', '', humidity);\r\n\r\n    createSection('pressure', otherInfo);\r\n    const pressure = document.getElementById('pressure');\r\n    createContent('p', 'title', 'Pressure', pressure);\r\n    createContent('p', 'current-pressure', '', pressure);\r\n\r\n    createSection('wind-speed', otherInfo);\r\n    const windSpeed = document.getElementById('wind-speed');\r\n    createContent('p', 'title', 'Wind speed', windSpeed);\r\n    createContent('p', 'current-wind-speed', '', windSpeed);\r\n\r\n    createSection('weather-forecast', main);\r\n    const weatherForecast = document.getElementById('weather-forecast');\r\n\r\n    createSection('forecast-section-day-one', weatherForecast);\r\n    const forecastDayOne = document.getElementById('forecast-section-day-one');\r\n    createContent('p', 'forecast-temp-day-one', '', forecastDayOne);\r\n    createContent('p', 'forecast-desc-day-one', '', forecastDayOne);\r\n    createContent('img', 'forecast-icon-day-one', '', forecastDayOne);\r\n    createSection('forecast-feels-like-day-one', forecastDayOne);\r\n    const feelsLikeDayOne = document.getElementById('forecast-feels-like-day-one');\r\n    createContent('p', 'title', 'Feels like', feelsLikeDayOne);\r\n    createContent('p', 'forecast-feels-like-day-one', '', feelsLikeDayOne);\r\n\r\n\r\n    createSection('forecast-section-day-two', weatherForecast);\r\n    const forecastDayTwo = document.getElementById('forecast-section-day-two');\r\n    createContent('p', 'forecast-temp-day-two', '', forecastDayTwo);\r\n    createContent('p', 'forecast-desc-day-two', '', forecastDayTwo);\r\n    createContent('img', 'forecast-icon-day-two', '', forecastDayTwo);\r\n    createSection('forecast-feels-like-day-two', forecastDayTwo);\r\n    const feelsLikeDayTwo = document.getElementById('forecast-feels-like-day-two');\r\n    createContent('p', 'title', 'Feels like', feelsLikeDayTwo);\r\n    createContent('p', 'forecast-feels-like-day-two', '', feelsLikeDayTwo);\r\n    \r\n    createSection('forecast-section-day-three', weatherForecast);\r\n    const forecastDayThree = document.getElementById('forecast-section-day-three');\r\n    createContent('p', 'forecast-temp-day-three', '', forecastDayThree);\r\n    createContent('p', 'forecast-desc-day-three', '', forecastDayThree);\r\n    createContent('img', 'forecast-icon-day-three', '', forecastDayThree);\r\n    createSection('forecast-feels-like-day-three', forecastDayThree);\r\n    const feelsLikeDayThree = document.getElementById('forecast-feels-like-day-three');\r\n    createContent('p', 'title', 'Feels like', feelsLikeDayThree);\r\n    createContent('p', 'forecast-feels-like-day-three', '', feelsLikeDayThree);\r\n\r\n    createSection('forecast-section-day-four', weatherForecast);\r\n    const forecastDayFour = document.getElementById('forecast-section-day-four');\r\n    createContent('p', 'forecast-temp-day-four', '', forecastDayFour);\r\n    createContent('p', 'forecast-desc-day-four', '', forecastDayFour);\r\n    createContent('img', 'forecast-icon-day-four', '', forecastDayFour);\r\n    createSection('forecast-feels-like-day-four', forecastDayFour);\r\n    const feelsLikeDayFour = document.getElementById('forecast-feels-like-day-four');\r\n    createContent('p', 'title', 'Feels like', feelsLikeDayFour);\r\n    createContent('p', 'forecast-feels-like-day-four', '', feelsLikeDayFour);\r\n    \r\n    createSection('forecast-section-day-five', weatherForecast);\r\n    const forecastDayFive = document.getElementById('forecast-section-day-five');\r\n    createContent('p', 'forecast-temp-day-five', '', forecastDayFive);\r\n    createContent('p', 'forecast-desc-day-five', '', forecastDayFive);\r\n    createContent('img', 'forecast-icon-day-five', '', forecastDayFive);\r\n    createSection('forecast-feels-like-day-five', forecastDayFive);\r\n    const feelsLikeDayFive = document.getElementById('forecast-feels-like-day-five');\r\n    createContent('p', 'title', 'Feels like', feelsLikeDayFive);\r\n    createContent('p', 'forecast-feels-like-day-five', '', feelsLikeDayFive);\r\n\r\n    function createContent(type, class_Name, text, parent) {\r\n        let el = document.createElement(type);\r\n        el.className = class_Name;\r\n        el.innerText = text;\r\n        parent.append(el);\r\n    };\r\n\r\n    function createSection(id, parent) {\r\n        let el = document.createElement('div');\r\n        el.id = id;\r\n        parent.append(el);\r\n    };\r\n};\n\n//# sourceURL=webpack://weather-app/./src/createpage.js?");

/***/ }),

/***/ "./src/domfns.js":
/*!***********************!*\
  !*** ./src/domfns.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ searchWeather),\n/* harmony export */   \"renderWeather\": () => (/* binding */ renderWeather),\n/* harmony export */   \"switchUnits\": () => (/* binding */ switchUnits)\n/* harmony export */ });\n/* harmony import */ var _apifn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apifn */ \"./src/apifn.js\");\n\r\n\r\nfunction renderCurrentWeather(data) {\r\n    const chosenUnits = document.querySelector('.units-switcher').innerText;\r\n    \r\n    document.querySelector('.location').innerText = `${data.city.name}, ${data.city.country}`;\r\n    document.querySelector('.temperature').innerText = `${data.list[0].main.temp}${chosenUnits}`;\r\n    document.querySelector('.description').innerText = data.list[0].weather[0].description;\r\n    document.querySelector('.weather-icon').src = `./images/${data.list[0].weather[0].icon}.png`;\r\n    document.querySelector('.current-humidity').innerText = data.list[0].main.humidity;\r\n    document.querySelector('.current-pressure').innerText = data.list[0].main.pressure;\r\n    document.querySelector('.current-feels-like').innerText = `${data.list[0].main.feels_like}${chosenUnits}`;\r\n    document.querySelector('.current-temp-max').innerText = `${data.list[0].main.temp_max}${chosenUnits}`;\r\n    document.querySelector('.current-temp-min').innerText = `${data.list[0].main.temp_min}${chosenUnits}`;\r\n    if (chosenUnits === '°F') {\r\n        document.querySelector('.current-wind-speed').innerText = `${data.list[0].wind.speed}miles/h`;\r\n    } else {\r\n        document.querySelector('.current-wind-speed').innerText = `${data.list[0].wind.speed}meter/sec`;\r\n    }\r\n};\r\n\r\nfunction renderFullForecast(data) {\r\n    renderForecast('one', 8, data);\r\n    renderForecast('two', 16, data);\r\n    renderForecast('three', 24, data);\r\n    renderForecast('four', 32, data);\r\n    renderForecast('five', 39, data);\r\n};\r\n\r\nfunction renderForecast(day, list, data) {\r\n    const chosenUnits = document.querySelector('.units-switcher').innerText;\r\n\r\n    document.querySelector(`.forecast-temp-day-${day}`).innerText = `${data.list[list].main.temp}${chosenUnits}`;\r\n    document.querySelector(`.forecast-desc-day-${day}`).innerText = data.list[list].weather[0].description;\r\n    document.querySelector(`.forecast-icon-day-${day}`).src = `./images/${data.list[list].weather[0].icon}.png`;\r\n    document.querySelector(`.forecast-feels-like-day-${day}`).innerText = `${data.list[list].main.feels_like}${chosenUnits}`;\r\n}\r\n\r\nasync function renderWeather(defaultInput = '', updateUnits = false) {\r\n    try {\r\n        let response;\r\n        if (defaultInput !== '') \r\n            response = await (0,_apifn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(defaultInput, unitsValue());\r\n        else if (updateUnits === true)\r\n            response = await (0,_apifn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.querySelector('.location').innerText.replace(/\\s/g, \"\"), unitsValue());\r\n        else\r\n            response = await (0,_apifn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.querySelector('.search-field').value, unitsValue());\r\n        const weatherData = await response.json();\r\n        renderCurrentWeather(weatherData);\r\n        renderFullForecast(weatherData);\r\n        document.querySelector('.search-field').value = '';\r\n    } catch (error) {\r\n        console.error(error);\r\n    };\r\n};\r\n\r\nfunction searchWeather() {\r\n    document.querySelector('.submit').addEventListener('click', () => {\r\n        if (document.querySelector('.search-field').value === '') return;\r\n        renderWeather();\r\n    });\r\n};\r\n\r\nfunction switchUnits() {\r\n    const units = document.querySelector('.units-switcher');\r\n    units.innerText = '°C';\r\n    units.addEventListener('click', () => {\r\n        if (units.innerText === '°C') \r\n        units.innerText = '°F';\r\n        else units.innerText = '°C';\r\n        renderWeather('', true);\r\n    })\r\n};\r\n\r\nfunction unitsValue() {\r\n    if (document.querySelector('.units-switcher').innerText === '°C') return 'metric';\r\n    else return 'imperial';\r\n};\n\n//# sourceURL=webpack://weather-app/./src/domfns.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _createpage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createpage.js */ \"./src/createpage.js\");\n/* harmony import */ var _domfns_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domfns.js */ \"./src/domfns.js\");\n\r\n\r\n\r\n\r\n(0,_createpage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_domfns_js__WEBPACK_IMPORTED_MODULE_2__.switchUnits)();\r\n(0,_domfns_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_domfns_js__WEBPACK_IMPORTED_MODULE_2__.renderWeather)('London');\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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