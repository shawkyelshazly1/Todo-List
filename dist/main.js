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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  font-family: \\\"Roboto\\\";\\n  box-sizing: border-box;\\n}\\n\\n.container {\\n  width: 100%;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: row;\\n  gap: 1rem;\\n}\\n\\n.dock {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 15px;\\n  border-right: 1.2px solid rgba(182, 181, 181, 0.55);\\n  min-height: 100%;\\n  max-height: 100%;\\n  min-width: 5%;\\n  align-items: center;\\n  position: fixed;\\n}\\n\\n.dock .title {\\n  font-size: 30px;\\n}\\n\\n.dock .add_new {\\n  outline: none;\\n  border: none;\\n  font-size: 25px;\\n  width: 50px;\\n  height: 50px;\\n  border-radius: 100%;\\n  cursor: pointer;\\n  background-color: black;\\n  color: whitesmoke;\\n  margin-top: 10px;\\n  text-align: center;\\n  justify-content: center;\\n  transition: all ease-in-out 0.5s;\\n}\\n\\n.dock .add_new:hover {\\n  transform: rotate(90deg);\\n}\\n\\n.dock .colors {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5rem;\\n  padding-top: 10px;\\n  visibility: hidden;\\n}\\n\\n.colors.display {\\n  visibility: visible;\\n}\\n\\n.dock .colors .color_btn {\\n  width: 22px;\\n  height: 22px;\\n  border-radius: 100%;\\n  cursor: pointer;\\n}\\n\\n/* TODO: Fix FadeOut Animation  Important:*/\\n\\n.dock .colors.open .color_red {\\n  background: rgba(253, 94, 94, 0.993);\\n  animation-delay: 0.5s;\\n}\\n.dock .colors.open .color_blue {\\n  background: rgb(90, 90, 253);\\n  animation-delay: 0.9s;\\n}\\n.dock .colors.open .color_yellow {\\n  background: rgb(250, 250, 96);\\n  animation-delay: 1.1s;\\n}\\n.dock .colors.open .color_purple {\\n  background: rgb(251, 102, 251);\\n  animation-delay: 1.4s;\\n}\\n.dock .colors.open .color_green {\\n  background: rgb(77, 236, 77);\\n  animation-delay: 1.7s;\\n}\\n\\n.dock .colors.open .color_btn {\\n  visibility: visible;\\n  opacity: 0;\\n  animation-name: fadeIn;\\n  animation-duration: 0.4s;\\n  animation-iteration-count: 1;\\n  animation-fill-mode: forwards;\\n}\\n\\n@keyframes fadeIn {\\n  from {\\n    opacity: 0;\\n  }\\n\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\n.dock .middle_section {\\n  display: flex;\\n  flex-direction: column;\\n  margin: auto auto auto auto;\\n  gap: 1rem;\\n  width: 100%;\\n}\\n\\n.middle_section .tasks_btn,\\n.middle_section .notes_btn {\\n  font-size: 40px;\\n  margin: 0 auto;\\n  cursor: pointer;\\n}\\n.dock .bottom_section {\\n  margin-top: auto;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n  border-top: 2px solid rgba(182, 181, 181, 0.7);\\n  width: 100%;\\n  padding-top: 1rem;\\n}\\n\\n.dock .calendar_btn,\\n.dock .about_btn {\\n  font-size: 40px;\\n  margin: 0 auto;\\n  cursor: pointer;\\n}\\n\\n.main {\\n  padding: 2rem;\\n  min-width: 95%;\\n  min-height: 100%;\\n  margin-left: 5%;\\n}\\n\\n.main .title {\\n  font-size: 50px;\\n}\\n\\n.main {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 2rem;\\n}\\n\\n.main .items_container .notes_container {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\\n  gap: 2rem;\\n}\\n\\n.main .items_container .notes_container .note {\\n  width: 100%;\\n  min-height: 250px;\\n  max-height: 2500px;\\n  background: rgb(113, 113, 243);\\n  padding: 1rem;\\n  display: flex;\\n  flex-direction: column;\\n  display: flex;\\n  gap: 0.5rem;\\n  border-radius: 15px;\\n  cursor: pointer;\\n}\\n\\n.main .items_container .notes_container .note p {\\n  display: -webkit-box;\\n  -webkit-line-clamp: 11;\\n  -webkit-box-orient: vertical;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  word-break: break-all;\\n  border: none;\\n  outline: none;\\n  pointer-events: none;\\n}\\n\\n.main .items_container .notes_container .note h1 {\\n  pointer-events: none;\\n}\\n\\n.hidden {\\n  display: none !important;\\n}\\n\\n.main .lists_container {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));\\n  width: 100%;\\n  height: auto;\\n  max-height: 840px;\\n  overflow: hidden;\\n  gap: 1rem;\\n  padding-bottom: 1rem;\\n}\\n\\n.main .lists_container .tasks_container {\\n  grid-row: 1;\\n  min-width: 380px;\\n  max-width: 380px;\\n  align-items: center;\\n  display: flex;\\n  flex-direction: column;\\n  background-color: rgb(194, 194, 194);\\n  padding: 1rem;\\n  padding-top: 2rem;\\n  border-radius: 10px;\\n  height: auto;\\n  max-height: 100%;\\n  min-height: 100%;\\n  gap: 1rem;\\n  position: relative;\\n}\\n\\n.main .lists_container .tasks_container .tasks {\\n  display: flex;\\n  flex-direction: column;\\n  height: auto;\\n  max-height: 739px;\\n  min-height: 739px;\\n  overflow-y: auto;\\n  gap: 1rem;\\n  width: 100%;\\n  align-items: center;\\n  text-align: center;\\n  padding: 1rem;\\n}\\n\\n.main .lists_container .tasks_container .tasks .task {\\n  background-color: lavender;\\n  width: 100%;\\n  padding: 20px 5px;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  border-radius: 10px;\\n  -webkit-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.14);\\n  -moz-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.14);\\n  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.14);\\n  cursor: pointer;\\n}\\n\\n.main .lists_container .add_task_container {\\n  position: absolute;\\n  bottom: 0;\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  padding: 2rem;\\n  gap: 1rem;\\n  justify-content: center;\\n  align-items: center;\\n  display: none;\\n}\\n.main .lists_container .add_task_container.show_container {\\n  display: flex !important;\\n}\\n.main .lists_container .tasks_container .new_task_btn.hide_btn {\\n  display: none !important;\\n}\\n.main .lists_container .add_task_container .add_task_field {\\n  width: 100%;\\n  padding: 10px 8px;\\n  border: none;\\n  outline: none;\\n  border-radius: 10px;\\n  font-size: 17px;\\n}\\n.main .lists_container .add_task_container .add_task_btn {\\n  padding: 10px 50px;\\n  outline: none;\\n  border: none;\\n  border-radius: 15px;\\n  font-weight: bold;\\n  font-size: 17px;\\n  cursor: pointer;\\n  background-color: black;\\n  color: whitesmoke;\\n}\\n\\n.main .lists_container .tasks_container .new_task_btn {\\n  position: absolute;\\n  bottom: 0;\\n  outline: none;\\n  border: none;\\n  font-size: 30px;\\n  width: 60px;\\n  height: 60px;\\n  border-radius: 100%;\\n  cursor: pointer;\\n  background-color: black;\\n  color: whitesmoke;\\n  text-align: center;\\n  justify-content: center;\\n  margin-bottom: 2rem;\\n  transition: all ease-in-out 0.5s;\\n}\\n.main .lists_container .tasks_container .new_task_btn:hover {\\n  transform: scale(1.2) rotate(90deg);\\n}\\n\\n.modal {\\n  display: block;\\n  position: fixed;\\n  z-index: 1;\\n  left: 0;\\n  top: 0;\\n  height: 100vh;\\n  width: 100%;\\n  overflow: hidden;\\n  background-color: rgba(0, 0, 0, 0.5);\\n}\\n\\n.modal .modal_content {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5rem;\\n  background-color: #f4f4f4;\\n  margin: 15% auto;\\n  padding: 30px 30px 40px 30px;\\n  width: 30%;\\n  height: 35%;\\n  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);\\n  border-radius: 15px;\\n}\\n\\n.note :empty:before {\\n  content: attr(placeholder);\\n  pointer-events: none;\\n  display: block;\\n  color: rgba(51, 50, 50, 0.575);\\n}\\n\\n.modal_content [contenteditable=\\\"true\\\"]:empty:before {\\n  content: attr(placeholder);\\n  pointer-events: none;\\n  display: block;\\n  color: rgba(51, 50, 50, 0.575);\\n}\\n\\n.modal_content [contenteditable=\\\"true\\\"]:focus {\\n  outline: 0px solid transparent;\\n}\\n\\n.note_red,\\n.project_red {\\n  background: rgba(251, 120, 120, 0.99) !important;\\n}\\n.note_blue,\\n.project_blue {\\n  background: rgb(113, 113, 243) !important;\\n}\\n.note_yellow,\\n.project_yellow {\\n  background: rgb(245, 245, 145) !important;\\n}\\n.note_purple,\\n.project_purple {\\n  background: rgb(251, 180, 251) !important;\\n}\\n.note_green,\\n.project_green {\\n  background: rgb(133, 249, 133) !important;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/components/UI.js":
/*!******************************!*\
  !*** ./src/components/UI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _modules_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _modules_ProjectsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/ProjectsList */ \"./src/modules/ProjectsList.js\");\n/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _modules_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _dock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dock */ \"./src/components/dock.js\");\n/* harmony import */ var _mainComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainComponent */ \"./src/components/mainComponent.js\");\n\n\n\n\n\n\n\nclass UI {\n  static loadHOmePage() {\n    this.initPageLayout();\n  }\n\n  static initPageLayout() {\n    let container = document.querySelector(\".container\");\n\n    container.appendChild((0,_dock__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n    container.appendChild((0,_mainComponent__WEBPACK_IMPORTED_MODULE_5__.MainComponent)(\"Tasks\"));\n    this.tasksScroll();\n    document.querySelector(\".tasks_btn\").addEventListener(\"click\", (e) => {\n      if (!e.target.classList.contains(\"active\")) {\n        document.querySelector(\".main\").remove();\n        container.appendChild((0,_mainComponent__WEBPACK_IMPORTED_MODULE_5__.MainComponent)(\"Tasks\"));\n        e.target.classList.toggle(\"active\");\n        document.querySelector(\".notes_btn\").classList.toggle(\"active\");\n        this.tasksScroll();\n      }\n    });\n\n    document.querySelector(\".notes_btn\").addEventListener(\"click\", (e) => {\n      if (!e.target.classList.contains(\"active\")) {\n        document.querySelector(\".main\").remove();\n        container.appendChild((0,_mainComponent__WEBPACK_IMPORTED_MODULE_5__.MainComponent)(\"Notes\"));\n        e.target.classList.toggle(\"active\");\n        document.querySelector(\".tasks_btn\").classList.toggle(\"active\");\n      }\n    });\n  }\n\n  static tasksScroll() {\n    let slider = document.querySelector(\".lists_container\");\n    let mouseDown = false;\n    let startX, scrollLeft;\n\n    let startDragging = (e) => {\n      mouseDown = true;\n      startX = e.pageX - slider.offsetLeft;\n      scrollLeft = slider.scrollLeft;\n    };\n\n    let stopDragging = (e) => {\n      mouseDown = false;\n    };\n\n    slider.addEventListener(\"mousemove\", (e) => {\n      e.preventDefault();\n      if (!mouseDown) {\n        return;\n      }\n\n      let x = e.pageX - slider.offsetLeft;\n      let scroll = x - startX;\n      slider.scrollLeft = scrollLeft - scroll;\n    });\n\n    slider.addEventListener(\"mousedown\", startDragging, false);\n    slider.addEventListener(\"mouseup\", stopDragging, false);\n    slider.addEventListener(\"mouseleave\", stopDragging, false);\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/components/UI.js?");

/***/ }),

/***/ "./src/components/dock.js":
/*!********************************!*\
  !*** ./src/components/dock.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DockComponent)\n/* harmony export */ });\n/* harmony import */ var _modules_Note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Note */ \"./src/modules/Note.js\");\n/* harmony import */ var _modules_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note */ \"./src/components/note.js\");\n/* harmony import */ var _projectComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectComponent */ \"./src/components/projectComponent.js\");\n\n\n\n\n\n\nfunction DockComponent() {\n  let dockContainer = document.createElement(\"div\");\n  dockContainer.classList.add(\"dock\");\n\n  let title = document.createElement(\"h3\");\n  title.classList.add(\"title\");\n  title.textContent = `Do!t`;\n\n  let addBtn = document.createElement(\"button\");\n  addBtn.classList.add(\"add_new\");\n  addBtn.innerHTML = `<i class=\"fas fa-plus\"></i>`;\n\n  let colorsContainer = document.createElement(\"div\");\n  colorsContainer.classList.add(\"colors\");\n\n  let redSpan = document.createElement(\"span\");\n  redSpan.classList.add(\"color_btn\", \"color_red\");\n  let blueSpan = document.createElement(\"span\");\n  blueSpan.classList.add(\"color_btn\", \"color_blue\");\n  let yellowSpan = document.createElement(\"span\");\n  yellowSpan.classList.add(\"color_btn\", \"color_yellow\");\n  let purpleSpan = document.createElement(\"span\");\n  purpleSpan.classList.add(\"color_btn\", \"color_purple\");\n  let greenSpan = document.createElement(\"span\");\n  greenSpan.classList.add(\"color_btn\", \"color_green\");\n\n  addBtn.addEventListener(\"click\", () => {\n    colorsContainer.classList.toggle(\"open\");\n  });\n\n  let colors = [redSpan, blueSpan, yellowSpan, purpleSpan, greenSpan];\n\n  colors.forEach((color) =>\n    color.addEventListener(\"click\", (e) => {\n      colorsContainer.classList.toggle(\"open\");\n      if (document.querySelector(\".tasks_btn\").classList.contains(\"active\")) {\n        let newProject = new _modules_Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n          \"New Project\",\n          e.target.classList[1].split(\"_\")[1]\n        );\n        _modules_Storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addProject(newProject);\n        document\n          .querySelector(\".lists_container\")\n          .appendChild((0,_projectComponent__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(newProject));\n        document.querySelector(\".lists_container\").scrollBy({\n          top: 0,\n          left: 9999,\n          behavior: \"smooth\",\n        });\n      } else if (\n        document.querySelector(\".notes_btn\").classList.contains(\"active\")\n      ) {\n        let note = new _modules_Note__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"\", \"\", e.target.classList[1].split(\"_\")[1]);\n        _modules_Storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addNote(note);\n        document.querySelector(\".notes_container\").prepend((0,_note__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(note));\n      }\n    })\n  );\n\n  colorsContainer.appendChild(redSpan);\n  colorsContainer.appendChild(blueSpan);\n  colorsContainer.appendChild(yellowSpan);\n  colorsContainer.appendChild(purpleSpan);\n  colorsContainer.appendChild(greenSpan);\n\n  let middleSectionContainer = document.createElement(\"div\");\n  middleSectionContainer.classList.add(\"middle_section\");\n\n  middleSectionContainer.innerHTML = `<i class=\"fas fa-tasks tasks_btn active\"></i>\n  <i class=\"fas fa-sticky-note notes_btn\"></i>`;\n\n  let bottomSectionContainer = document.createElement(\"div\");\n  bottomSectionContainer.classList.add(\"bottom_section\");\n\n  bottomSectionContainer.innerHTML = `<i class=\"fas fa-calendar-alt calendar_btn\"></i>\n  <i class=\"fas fa-question about_btn\"></i>`;\n\n  dockContainer.appendChild(title);\n  dockContainer.appendChild(addBtn);\n  dockContainer.appendChild(colorsContainer);\n  dockContainer.appendChild(middleSectionContainer);\n  dockContainer.appendChild(bottomSectionContainer);\n\n  return dockContainer;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/components/dock.js?");

/***/ }),

/***/ "./src/components/mainComponent.js":
/*!*****************************************!*\
  !*** ./src/components/mainComponent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainComponent\": () => (/* binding */ MainComponent)\n/* harmony export */ });\n/* harmony import */ var _modules_Note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Note */ \"./src/modules/Note.js\");\n/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note */ \"./src/components/note.js\");\n/* harmony import */ var _projectComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectComponent */ \"./src/components/projectComponent.js\");\n\n\n\n\n\nfunction MainComponent(view) {\n  let container = document.createElement(\"div\");\n  container.classList.add(\"main\");\n\n  loadView(view).components.forEach((component) => {\n    container.appendChild(component);\n  });\n  \n\n  return container;\n}\n\nfunction loadView(view) {\n  let components = [];\n\n  let title = document.createElement(\"h1\");\n  title.textContent = `${view}`;\n\n  components.push(title);\n\n  switch (view) {\n    case \"Tasks\":\n      components.push(loadTasksView());\n\n      break;\n    case \"Notes\":\n      components.push(loadNotesView());\n      break;\n  }\n\n  return { components };\n}\n\nfunction loadNotesView() {\n  let container = document.createElement(\"div\");\n  container.classList.add(\"items_container\");\n\n  let notesContainer = document.createElement(\"div\");\n  notesContainer.classList.add(\"notes_container\");\n\n  let notes = _modules_Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getNotesList().getNotes();\n\n  if (notes.length) {\n    notesContainer.textContent = ``;\n    notes.forEach((note) => {\n      notesContainer.appendChild((0,_note__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(note));\n    });\n  } else {\n    let firstNote = new _modules_Note__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    _modules_Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addNote(firstNote);\n    notesContainer.appendChild((0,_note__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(firstNote));\n  }\n\n  container.appendChild(notesContainer);\n\n  return container;\n}\n\nfunction loadTasksView() {\n  let container = document.createElement(\"div\");\n  container.classList.add(\"lists_container\");\n\n  _modules_Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProjectsList()\n    .getProjects()\n    .forEach((project) => {\n      container.appendChild((0,_projectComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(project));\n    });\n\n  return container;\n}\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/components/mainComponent.js?");

/***/ }),

/***/ "./src/components/note.js":
/*!********************************!*\
  !*** ./src/components/note.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NoteComponent)\n/* harmony export */ });\n/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _noteModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noteModal */ \"./src/components/noteModal.js\");\n\n\n\nfunction NoteComponent(note) {\n  let container = document.createElement(\"div\");\n  container.classList.add(\"note\");\n  container.classList.add(note.getColor());\n  container.setAttribute(\"data-note-id\", note.getId());\n\n  let header = document.createElement(\"h1\");\n  header.classList.add(\"note_title\");\n\n  if (note.getTitle() === \"\") {\n    header.setAttribute(\"placeholder\", \"Title...\");\n  } else {\n    header.textContent = note.getTitle();\n  }\n\n  let content = document.createElement(\"p\");\n  content.classList.add(\"note_content\");\n\n  if (note.getContent() === \"\") {\n    content.setAttribute(\"placeholder\", \"Content...\");\n  } else {\n    content.textContent = note.getContent();\n  }\n\n  container.appendChild(header);\n  container.appendChild(content);\n\n  container.addEventListener(\"click\", (e) => {\n    let noteToDisplay = _modules_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadNote(e.target.dataset.noteId);\n    (0,_noteModal__WEBPACK_IMPORTED_MODULE_1__.showNoteModal)(noteToDisplay);\n  });\n\n  return container;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/components/note.js?");

/***/ }),

/***/ "./src/components/noteModal.js":
/*!*************************************!*\
  !*** ./src/components/noteModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showNoteModal\": () => (/* binding */ showNoteModal)\n/* harmony export */ });\n/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Storage */ \"./src/modules/Storage.js\");\n\n\nfunction showNoteModal(note) {\n  let modal = document.createElement(\"div\");\n  modal.classList.add(\"modal\");\n  modal.setAttribute(\"id\", \"note_modal\");\n\n  let modalContent = document.createElement(\"div\");\n  modalContent.classList.add(\"modal_content\");\n\n  let noteTitle = document.createElement(\"h1\");\n  noteTitle.classList.add(\"note_modal_title\");\n  noteTitle.setAttribute(\"placeholder\", \"Title...\");\n  noteTitle.setAttribute(\"contenteditable\", \"true\");\n\n  let content = document.createElement(\"p\");\n  content.classList.add(\"note_modal_content\");\n  content.setAttribute(\"placeholder\", \"Content...\");\n  content.setAttribute(\"contenteditable\", \"true\");\n\n  noteTitle.textContent = note[\"title\"];\n  content.textContent = note[\"content\"];\n\n  modalContent.appendChild(noteTitle);\n  modalContent.appendChild(content);\n\n  modal.appendChild(modalContent);\n\n  modal.addEventListener(\"click\", (e) => {\n    if (e.path[0].classList.contains(\"modal\")) {\n      let modalC = document.querySelector(\"#note_modal\");\n      updateNote(noteTitle.textContent, content.textContent, note[\"id\"]);\n      document.body.removeChild(modalC);\n    }\n  });\n\n  window.addEventListener(\"keydown\", (e) => {\n    let modalC = document.querySelector(\"#note_modal\");\n    if (modalC && e.key == \"Escape\") {\n      updateNote(noteTitle.textContent, content.textContent, note[\"id\"]);\n      document.body.removeChild(modalC);\n    }\n  });\n\n  document.body.appendChild(modal);\n}\n\nfunction updateNote(title, content, id) {\n  _modules_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateNote(title, content, id);\n  document.querySelector(`[data-note-id=\"${id}\"]`).childNodes[0].textContent =\n    title;\n  document.querySelector(`[data-note-id=\"${id}\"]`).childNodes[1].textContent =\n    content;\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/components/noteModal.js?");

/***/ }),

/***/ "./src/components/projectComponent.js":
/*!********************************************!*\
  !*** ./src/components/projectComponent.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectComponent)\n/* harmony export */ });\n/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _modules_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _taskComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskComponent */ \"./src/components/taskComponent.js\");\n\n\n\n\nfunction ProjectComponent(project) {\n  let container = document.createElement(\"div\");\n  container.classList.add(\"tasks_container\", project.getColor());\n\n  let header = document.createElement(\"h3\");\n  header.classList.add(\"container_title\");\n  header.textContent = `${project.getTitle()}`;\n\n  let tasksContainer = document.createElement(\"div\");\n  tasksContainer.classList.add(\"tasks\");\n\n  project.getTasks().forEach((task) => {\n    tasksContainer.appendChild((0,_taskComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(task));\n  });\n\n  let newTaskBtn = document.createElement(\"button\");\n  newTaskBtn.classList.add(\"new_task_btn\");\n  newTaskBtn.textContent = `+`;\n\n  newTaskBtn.addEventListener(\"click\", (e) => {\n    addTaskContainer.classList.toggle(\"show_container\");\n    newTaskBtn.classList.toggle(\"hide_btn\");\n  });\n\n  let inputField = document.createElement(\"input\");\n  inputField.setAttribute(\"type\", \"text\");\n  inputField.classList.add(\"add_task_field\");\n  inputField.setAttribute(\"placeholder\", \"Enter Task Name\");\n\n  let addBtn = document.createElement(\"button\");\n  addBtn.classList.add(\"add_task_btn\");\n  addBtn.textContent = `Add`;\n\n  addBtn.addEventListener(\"click\", (e) => {\n    if (inputField.value.length == 0) {\n      inputField.style.border = \"1px solid red\";\n    } else {\n      _modules_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addNewTask(new _modules_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](inputField.value), project);\n      tasksContainer.appendChild((0,_taskComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(new _modules_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](inputField.value)));\n      tasksContainer.scrollBy({\n        top: 99999,\n        left: 0,\n        behavior: \"smooth\",\n      });\n      addTaskContainer.classList.toggle(\"show_container\");\n      newTaskBtn.classList.toggle(\"hide_btn\");\n      inputField.style.border = \"none\";\n      inputField.value = ``;\n    }\n  });\n\n  let addTaskContainer = document.createElement(\"div\");\n  addTaskContainer.classList.add(\"add_task_container\");\n\n  addTaskContainer.appendChild(inputField);\n  addTaskContainer.appendChild(addBtn);\n\n  container.appendChild(header);\n  container.appendChild(tasksContainer);\n  container.appendChild(newTaskBtn);\n  container.appendChild(addTaskContainer);\n  return container;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/components/projectComponent.js?");

/***/ }),

/***/ "./src/components/taskComponent.js":
/*!*****************************************!*\
  !*** ./src/components/taskComponent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskComponent)\n/* harmony export */ });\nfunction TaskComponent(task) {\n  let taskContainer = document.createElement(\"div\");\n  taskContainer.classList.add(\"task\");\n  taskContainer.textContent = `${task.getTitle()}`;\n\n  return taskContainer;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/components/taskComponent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/UI */ \"./src/components/UI.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n_components_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadHOmePage();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Note.js":
/*!*****************************!*\
  !*** ./src/modules/Note.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Note)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\nclass Note {\n  constructor(title = \"\", content = \"\", color = \"blue\") {\n    this.title = title;\n    this.content = content;\n    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    this.color = color;\n  }\n\n  setTitle(newTitle) {\n    this.title = newTitle;\n  }\n\n  getTitle() {\n    return this.title;\n  }\n\n  setContent(newContent) {\n    this.content = newContent;\n  }\n\n  getContent() {\n    return this.content;\n  }\n\n  getId() {\n    return this.id;\n  }\n\n  getColor() {\n    switch (this.color) {\n      case \"blue\":\n        return \"note_blue\";\n      case \"red\":\n        return \"note_red\";\n      case \"yellow\":\n        return \"note_yellow\";\n      case \"purple\":\n        return \"note_purple\";\n      case \"green\":\n        return \"note_green\";\n    }\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/Note.js?");

/***/ }),

/***/ "./src/modules/NotesList.js":
/*!**********************************!*\
  !*** ./src/modules/NotesList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NotesList)\n/* harmony export */ });\nclass NotesList {\n  constructor() {\n    this.notes = [];\n  }\n\n  getNotes() {\n    return this.notes;\n  }\n\n  getNote(id) {\n    return this.notes.find((note) => note.getId() === id);\n  }\n\n  setNotes(notes) {\n    this.notes = notes;\n  }\n\n  addNote(newNote) {\n    this.notes.unshift(newNote);\n  }\n\n  deleteNote(id) {\n    this.notes = this.notes.filter((note) => note.getId() !== id);\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/NotesList.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\nclass Project {\n  constructor(title, color = \"blue\") {\n    this.title = title;\n    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    this.tasks = [];\n    this.color = color;\n  }\n\n  getTitle() {\n    return this.title;\n  }\n\n  setTitle(newTitle) {\n    this.title = newTitle;\n  }\n\n  setTasks(tasks) {\n    this.tasks = tasks;\n  }\n\n  getId() {\n    return this.id;\n  }\n\n  addTask(newTask) {\n    this.tasks.push(newTask);\n  }\n\n  removeTask(id) {\n    this.tasks = this.tasks.filter((task) => task.getId() !== id);\n  }\n\n  getTasks() {\n    return this.tasks;\n  }\n\n  getColor() {\n    switch (this.color) {\n      case \"blue\":\n        return \"project_blue\";\n      case \"red\":\n        return \"project_red\";\n      case \"yellow\":\n        return \"project_yellow\";\n      case \"purple\":\n        return \"project_purple\";\n      case \"green\":\n        return \"project_green\";\n    }\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/ProjectsList.js":
/*!*************************************!*\
  !*** ./src/modules/ProjectsList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectsList)\n/* harmony export */ });\nclass ProjectsList {\n  constructor() {\n    this.projects = [];\n  }\n\n  getProjects() {\n    return this.projects;\n  }\n\n  setProjects(projects) {\n    this.projects = projects;\n  }\n\n  addProject(newProject) {\n    this.projects.push(newProject);\n  }\n\n  getProject(id) {\n    return this.projects.filter((project) => project.getId() === id);\n  }\n\n  \n\n  deleteProject(id) {\n    this.projects = this.projects.filter((project) => project.getId() !== id);\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/ProjectsList.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Note */ \"./src/modules/Note.js\");\n/* harmony import */ var _NotesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotesList */ \"./src/modules/NotesList.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _ProjectsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectsList */ \"./src/modules/ProjectsList.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n\n\n\n\n\n\nclass Storage {\n  static saveNotesList(data) {\n    localStorage.setItem(\"notesList\", JSON.stringify(data));\n  }\n\n  static saveProjectsList(data) {\n    localStorage.setItem(\"projectsList\", JSON.stringify(data));\n  }\n\n  static getNotesList() {\n    let notesList = Object.assign(\n      new _NotesList__WEBPACK_IMPORTED_MODULE_1__[\"default\"](),\n      JSON.parse(localStorage.getItem(\"notesList\"))\n    );\n    notesList.setNotes(\n      notesList.getNotes().map((note) => Object.assign(new _Note__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), note))\n    );\n\n    return notesList;\n  }\n\n  static getProjectsList() {\n    let projectsList = Object.assign(\n      new _ProjectsList__WEBPACK_IMPORTED_MODULE_3__[\"default\"](),\n      JSON.parse(localStorage.getItem(\"projectsList\"))\n    );\n\n    projectsList.setProjects(\n      projectsList\n        .getProjects()\n        .map((project) => Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"](), project))\n    );\n\n    projectsList\n      .getProjects()\n      .forEach((project) =>\n        project.setTasks(\n          project.getTasks().map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_4__[\"default\"](), task))\n        )\n      );\n\n    return projectsList;\n  }\n\n  static addNote(newNote) {\n    let notesList = Storage.getNotesList();\n    notesList.addNote(newNote);\n    Storage.saveNotesList(notesList);\n  }\n\n  static addNewTask(newTask, destProject) {\n    let projectsList = Storage.getProjectsList();\n    let projects = projectsList.getProjects();\n\n    destProject.addTask(newTask);\n    projects = projects.map((project) =>\n      project.getId() !== destProject.getId() ? project : destProject\n    );\n\n    projectsList.setProjects(projects);\n    Storage.saveProjectsList(projectsList);\n  }\n\n  static addProject(newProject) {\n    let projectsList = Storage.getProjectsList();\n    projectsList.addProject(newProject);\n    Storage.saveProjectsList(projectsList);\n  }\n\n  static loadNote(id) {\n    let notesList = Storage.getNotesList();\n    return notesList.getNote(id);\n  }\n\n  static loadProject(id) {\n    let projectsList = Storage.getProjectsList();\n    return projectsList.getProject(id);\n  }\n\n  static updateNote(title, content, id) {\n    let notesList = Storage.getNotesList();\n    notesList.getNote(id).setTitle(title);\n    notesList.getNote(id).setContent(content);\n    Storage.saveNotesList(notesList);\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\nclass Task {\n  constructor(title) {\n    this.title = title;\n    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n\n  getTitle() {\n    return this.title;\n  }\n\n  setTitle(newTitle) {\n    this.title = newTitle;\n  }\n\n  getId() {\n    return this.id;\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/Task.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;