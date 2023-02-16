/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  width: 100%;\r\n  padding: 1rem;\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n}\r\n\r\n/* HEADER */\r\nnav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n  color: #f5f5dc;\r\n  background-color: #8b0000;\r\n  text-align: center;\r\n  padding: 0 2rem;\r\n}\r\n\r\nul.navigation {\r\n  display: flex;\r\n  list-style-type: none;\r\n  gap: 2rem;\r\n}\r\n\r\nul.navigation li {\r\n  color: #fff;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: rgb(130, 99, 156);\r\n  font-weight: 900;\r\n}\r\n\r\n.navigation a {\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\nul.navigation:hover li,\r\nul.navigation:focus li {\r\n  opacity: 0.2;\r\n  filter: blur(2px);\r\n}\r\n\r\nul.navigation li:hover,\r\nul.navigation li:focus {\r\n  opacity: 1;\r\n  filter: blur(0);\r\n} /* HEADER */\r\n\r\ndiv.tv-main-info {\r\n  display: flex;\r\n  gap: 1rem;\r\n  width: 100%;\r\n}\r\n\r\nimg.tv-main-img {\r\n  width: 100%;\r\n}\r\n\r\n.tv-likes {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.tv-section {\r\n  padding: 5px;\r\n  box-shadow: #fff 0 0 10px;\r\n}\r\n\r\n.tv-other-info {\r\n  color: white;\r\n  display: flex;\r\n  font-weight: normal;\r\n  font-size: 0.5em;\r\n  flex-direction: column;\r\n  background-color: rgb(26, 16, 4, 0.4);\r\n  padding: 0.5rem;\r\n}\r\n\r\n.tv-div {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 0.5rem;\r\n  flex-wrap: wrap;\r\n  overflow-wrap: anywhere;\r\n  margin-block-start: 2%;\r\n}\r\n\r\nsection#section {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  overflow-wrap: break-word;\r\n  justify-items: center;\r\n  justify-content: center;\r\n  row-gap: 2rem;\r\n}\r\n\r\n.button {\r\n  background-color: rgb(130, 99, 156);\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;\r\n  width: 100%;\r\n  height: max-content;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  transition: all 250ms;\r\n  border: 0;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n}\r\n\r\n.button:hover {\r\n  transform: scale(1.05) rotate(-1deg);\r\n  background-color: #fff;\r\n  color: #9c8263;\r\n}\r\n\r\n.heart {\r\n  display: inline-block;\r\n  width: 1rem;\r\n  aspect-ratio: 1/1;\r\n  border-image: radial-gradient(red 69%, #0000 70%) 84.5% fill/100%;\r\n  clip-path: polygon(-41% 0, 50% 91%, 141% 0);\r\n}\r\n\r\ndiv.heart:hover {\r\n  transform: scale(1.25);\r\n}\r\n\r\nbutton.heart-button {\r\n  border-style: none;\r\n  background: none;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  padding: 1.5rem;\r\n  margin: 1.5rem 1rem;\r\n  border-radius: 10px;\r\n  box-shadow: 2px 2px 5px 1px rgb(207, 91, 91);\r\n}\r\n\r\n.card:hover {\r\n  border: 2px solid var(--color-primary);\r\n}\r\n\r\n.single-movies {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 20%;\r\n}\r\n\r\n.title-rection {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  padding-top: 10px;\r\n}\r\n\r\n.movie-banner-img {\r\n  width: 100%;\r\n  height: 370px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.movie-banner {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\nfooter {\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 1rem;\r\n}\r\n\r\n.movie-likes p {\r\n  margin: 0;\r\n  padding: 10px 0 10px 0;\r\n  width: 100%;\r\n  text-align: right;\r\n}\r\n\r\n#footer p {\r\n  padding: 1rem;\r\n  margin: auto;\r\n  color: beige;\r\n  background-color: darkred;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.footer-section {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n\r\nbutton {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.btn {\r\n  padding: 0.5rem 1rem;\r\n  cursor: pointer;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  width: 90%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.action-btns {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.btn-primary {\r\n  background-color: var(--color-primary);\r\n  color: var(--color-secondary);\r\n  border: 1px solid var(--color-primary);\r\n}\r\n\r\n.btn-secondary {\r\n  background-color: var(--color-secondary);\r\n  color: var(--color-primary);\r\n  border: 1px solid var(--color-primary);\r\n}\r\n\r\n.btn-secondary:hover {\r\n  background-color: rgb(215, 197, 197);\r\n  color: var(--color-font);\r\n  border: 1px solid rgb(215, 197, 197);\r\n}\r\n\r\n.btn-primary:hover {\r\n  background-color: var(--color-secondary);\r\n  color: var(--color-primary);\r\n  border: 1px solid var(--color-primary);\r\n}\r\n\r\n.movie-likes {\r\n  margin: 0;\r\n  padding: 0 0 10px 0;\r\n  width: 100%;\r\n}\r\n\r\nh3 {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.popup {\r\n  position: fixed;\r\n  bottom: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  background-color: var(--color-secondary);\r\n}\r\n\r\n.popup-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: scroll;\r\n  -ms-overflow-style: none;\r\n  scrollbar-width: none;\r\n}\r\n\r\n.popup-container::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.popup-header {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 10px;\r\n  padding: 10px;\r\n}\r\n\r\n.popup-movie-banner {\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 50%;\r\n  width: 100%;\r\n}\r\n\r\n.popup-movie-banner-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n  object-fit: contain;\r\n}\r\n\r\n.popup-details {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 90%;\r\n  margin: 0 auto;\r\n  align-items: flex-start;\r\n}\r\n\r\n.popup-description {\r\n  max-width: 70%;\r\n  font-weight: 400;\r\n}\r\n\r\n.comments-received {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\ninput[type='text'] {\r\n  width: 90%;\r\n  height: 45px;\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-primary);\r\n  padding: 0 10px;\r\n  margin: 10px 0;\r\n}\r\n\r\ninput[type='submit'] {\r\n  width: 120px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-primary);\r\n  padding: 0 10px;\r\n  margin: 10px 0;\r\n}\r\n\r\ntextarea {\r\n  width: 90%;\r\n  height: 120px;\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-primary);\r\n  padding: 0 10px;\r\n  margin: 10px 0;\r\n}\r\n\r\n.add-comment-form {\r\n  width: 50%;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  section#section {\r\n    grid-template-columns: repeat(4, minmax(0, 1fr));\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  width: 100%;\r\n  padding: 1rem;\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n}\r\n\r\n/* HEADER */\r\nnav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n  color: #f5f5dc;\r\n  background-color: #8b0000;\r\n  text-align: center;\r\n  padding: 0 2rem;\r\n}\r\n\r\nul.navigation {\r\n  display: flex;\r\n  list-style-type: none;\r\n  gap: 2rem;\r\n}\r\n\r\nul.navigation li {\r\n  color: #fff;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: rgb(130, 99, 156);\r\n  font-weight: 900;\r\n}\r\n\r\n.navigation a {\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\nul.navigation:hover li,\r\nul.navigation:focus li {\r\n  opacity: 0.2;\r\n  filter: blur(2px);\r\n}\r\n\r\nul.navigation li:hover,\r\nul.navigation li:focus {\r\n  opacity: 1;\r\n  filter: blur(0);\r\n} /* HEADER */\r\n\r\ndiv.tv-main-info {\r\n  display: flex;\r\n  gap: 1rem;\r\n  width: 100%;\r\n}\r\n\r\nimg.tv-main-img {\r\n  width: 100%;\r\n}\r\n\r\n.tv-likes {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.tv-section {\r\n  padding: 5px;\r\n  box-shadow: #fff 0 0 10px;\r\n}\r\n\r\n.tv-other-info {\r\n  color: white;\r\n  display: flex;\r\n  font-weight: normal;\r\n  font-size: 0.5em;\r\n  flex-direction: column;\r\n  background-color: rgb(26, 16, 4, 0.4);\r\n  padding: 0.5rem;\r\n}\r\n\r\n.tv-div {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 0.5rem;\r\n  flex-wrap: wrap;\r\n  overflow-wrap: anywhere;\r\n  margin-block-start: 2%;\r\n}\r\n\r\nsection#section {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  overflow-wrap: break-word;\r\n  justify-items: center;\r\n  justify-content: center;\r\n  row-gap: 2rem;\r\n}\r\n\r\n.button {\r\n  background-color: rgb(130, 99, 156);\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;\r\n  width: 100%;\r\n  height: max-content;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  transition: all 250ms;\r\n  border: 0;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n}\r\n\r\n.button:hover {\r\n  transform: scale(1.05) rotate(-1deg);\r\n  background-color: #fff;\r\n  color: #9c8263;\r\n}\r\n\r\n.heart {\r\n  display: inline-block;\r\n  width: 1rem;\r\n  aspect-ratio: 1/1;\r\n  border-image: radial-gradient(red 69%, #0000 70%) 84.5% fill/100%;\r\n  clip-path: polygon(-41% 0, 50% 91%, 141% 0);\r\n}\r\n\r\ndiv.heart:hover {\r\n  transform: scale(1.25);\r\n}\r\n\r\nbutton.heart-button {\r\n  border-style: none;\r\n  background: none;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  padding: 1.5rem;\r\n  margin: 1.5rem 1rem;\r\n  border-radius: 10px;\r\n  box-shadow: 2px 2px 5px 1px rgb(207, 91, 91);\r\n}\r\n\r\n.card:hover {\r\n  border: 2px solid var(--color-primary);\r\n}\r\n\r\n.single-movies {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 20%;\r\n}\r\n\r\n.title-rection {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  padding-top: 10px;\r\n}\r\n\r\n.movie-banner-img {\r\n  width: 100%;\r\n  height: 370px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.movie-banner {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\nfooter {\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 1rem;\r\n}\r\n\r\n.movie-likes p {\r\n  margin: 0;\r\n  padding: 10px 0 10px 0;\r\n  width: 100%;\r\n  text-align: right;\r\n}\r\n\r\n#footer p {\r\n  padding: 1rem;\r\n  margin: auto;\r\n  color: beige;\r\n  background-color: darkred;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.footer-section {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n\r\nbutton {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.btn {\r\n  padding: 0.5rem 1rem;\r\n  cursor: pointer;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  width: 90%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.action-btns {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.btn-primary {\r\n  background-color: var(--color-primary);\r\n  color: var(--color-secondary);\r\n  border: 1px solid var(--color-primary);\r\n}\r\n\r\n.btn-secondary {\r\n  background-color: var(--color-secondary);\r\n  color: var(--color-primary);\r\n  border: 1px solid var(--color-primary);\r\n}\r\n\r\n.btn-secondary:hover {\r\n  background-color: rgb(215, 197, 197);\r\n  color: var(--color-font);\r\n  border: 1px solid rgb(215, 197, 197);\r\n}\r\n\r\n.btn-primary:hover {\r\n  background-color: var(--color-secondary);\r\n  color: var(--color-primary);\r\n  border: 1px solid var(--color-primary);\r\n}\r\n\r\n.movie-likes {\r\n  margin: 0;\r\n  padding: 0 0 10px 0;\r\n  width: 100%;\r\n}\r\n\r\nh3 {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.popup {\r\n  position: fixed;\r\n  bottom: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  background-color: var(--color-secondary);\r\n}\r\n\r\n.popup-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: scroll;\r\n  -ms-overflow-style: none;\r\n  scrollbar-width: none;\r\n}\r\n\r\n.popup-container::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.popup-header {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 10px;\r\n  padding: 10px;\r\n}\r\n\r\n.popup-movie-banner {\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 50%;\r\n  width: 100%;\r\n}\r\n\r\n.popup-movie-banner-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n  object-fit: contain;\r\n}\r\n\r\n.popup-details {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 90%;\r\n  margin: 0 auto;\r\n  align-items: flex-start;\r\n}\r\n\r\n.popup-description {\r\n  max-width: 70%;\r\n  font-weight: 400;\r\n}\r\n\r\n.comments-received {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\ninput[type='text'] {\r\n  width: 90%;\r\n  height: 45px;\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-primary);\r\n  padding: 0 10px;\r\n  margin: 10px 0;\r\n}\r\n\r\ninput[type='submit'] {\r\n  width: 120px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-primary);\r\n  padding: 0 10px;\r\n  margin: 10px 0;\r\n}\r\n\r\ntextarea {\r\n  width: 90%;\r\n  height: 120px;\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-primary);\r\n  padding: 0 10px;\r\n  margin: 10px 0;\r\n}\r\n\r\n.add-comment-form {\r\n  width: 50%;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  section#section {\r\n    grid-template-columns: repeat(4, minmax(0, 1fr));\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/modules/likes/displayMovies.js":
/*!********************************************!*\
  !*** ./src/modules/likes/displayMovies.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _movieCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieCounter.js */ "./src/modules/likes/movieCounter.js");
/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postLikes.js */ "./src/modules/likes/postLikes.js");
/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getLikes.js */ "./src/modules/likes/getLikes.js");



// import showCommentPopUp from '../comments/getComment.js';

const displayMovies = async () => {
  const request = await fetch('https://api.tvmaze.com/shows');
  const response = await request.json();
  const section = document.querySelector('#section');
  response.forEach(async (movie) => {
    const movieID = `${movie.id}`;
    const movieLike = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_2__["default"])(movieID);

    (0,_movieCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    section.innerHTML += `
      <section id=${movie.id} class="tv-section">
        <div class="tv-main-info tv-div">
          <img src="${movie.image.medium}" class="tv-main-img" alt="${movie.name}" />
        </div>
        <div class="tv-other-info">
          <div class="tv-div">
            <h2 class="tv-name">${movie.name}</h2>
            <span class="tv-likes"
              ><p id="like-${movie.id}" class="tv-nbrOfLikes">${movieLike}</p>
              <button class="heart-button tv-likes-img" type="button"><div class="heart" id=${movie.id}></div></button>
              <!-- class="fa-solid fa-heart" -->
            </span>
          </div>
          <div class="tv-div">
            <button id=${movie.id} class="comment button">&#128172 Comments</button>
            <button class="reservation button">Reservation</button>
          </div>
        </div>
      </section>
    `;

    const likeButtons = section.querySelectorAll('.heart-button');
    likeButtons.forEach(async (likeButton) => {
      likeButton.addEventListener('click', async (e) => {
        e.preventDefault();
        await (0,_postLikes_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target.id);
        const likeContent = e.target.parentElement.parentElement.firstChild;
        const previousNbrOfLikes = Number(likeContent.innerText);
        const newNbrOfLikes = previousNbrOfLikes + 1;
        likeContent.innerText = newNbrOfLikes;
      });
    });
    // showCommentPopUp();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMovies);


/***/ }),

/***/ "./src/modules/likes/getLikes.js":
/*!***************************************!*\
  !*** ./src/modules/likes/getLikes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'g9eRucs5qtKLjf0q60oq';
const appUrl = `${baseUrl}${appID}/likes`;

const getAllLikes = async () => {
  const request = await fetch(appUrl);
  const response = await request.json();
  return response;
};

const getMovieLikes = async (movieID) => {
  const allLikes = await getAllLikes();
  const filteredLikes = await allLikes.filter(
    (item) => item.item_id === movieID,
  );
  return filteredLikes[0].likes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovieLikes);


/***/ }),

/***/ "./src/modules/likes/movieCounter.js":
/*!*******************************************!*\
  !*** ./src/modules/likes/movieCounter.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const movieCounter = () => {
  const totalMovies = document.querySelector('#totalMovies');
  totalMovies.innerHTML = document.querySelectorAll('.tv-section').length + 1;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieCounter);


/***/ }),

/***/ "./src/modules/likes/postLikes.js":
/*!****************************************!*\
  !*** ./src/modules/likes/postLikes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'g9eRucs5qtKLjf0q60oq';
const appUrl = `${baseUrl}${appID}/likes`;

const postLikes = async (id) => {
  const request = await fetch(appUrl, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  const response = request;
  return response;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);


/***/ }),

/***/ "./src/images/today-tv-series.png":
/*!****************************************!*\
  !*** ./src/images/today-tv-series.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/477104dd0dc40e7e2762.png";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _images_today_tv_series_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/today-tv-series.png */ "./src/images/today-tv-series.png");
/* harmony import */ var _modules_likes_displayMovies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/likes/displayMovies.js */ "./src/modules/likes/displayMovies.js");




window.onload = () => {
  (0,_modules_likes_displayMovies_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSw0QkFBNEIsNkJBQTZCLGdCQUFnQixpQkFBaUIsOEJBQThCLEtBQUssY0FBYyx1REFBdUQsa0JBQWtCLG9CQUFvQiw4QkFBOEIsb0JBQW9CLDZCQUE2QixnQkFBZ0IsS0FBSyw2QkFBNkIsb0JBQW9CLHFDQUFxQywwQkFBMEIscUJBQXFCLHFCQUFxQixnQ0FBZ0MseUJBQXlCLHNCQUFzQixLQUFLLHVCQUF1QixvQkFBb0IsNEJBQTRCLGdCQUFnQixLQUFLLDBCQUEwQixrQkFBa0IsS0FBSyxXQUFXLDRCQUE0QiwrQkFBK0IsdUJBQXVCLEtBQUssdUJBQXVCLGtCQUFrQiw0QkFBNEIsS0FBSywyREFBMkQsbUJBQW1CLHdCQUF3QixLQUFLLDJEQUEyRCxpQkFBaUIsc0JBQXNCLE1BQU0sc0NBQXNDLG9CQUFvQixnQkFBZ0Isa0JBQWtCLEtBQUsseUJBQXlCLGtCQUFrQixLQUFLLG1CQUFtQixvQkFBb0IsMEJBQTBCLEtBQUsscUJBQXFCLG1CQUFtQixnQ0FBZ0MsS0FBSyx3QkFBd0IsbUJBQW1CLG9CQUFvQiwwQkFBMEIsdUJBQXVCLDZCQUE2Qiw0Q0FBNEMsc0JBQXNCLEtBQUssaUJBQWlCLG9CQUFvQixrQ0FBa0MsMEJBQTBCLHFDQUFxQyxrQkFBa0Isc0JBQXNCLDhCQUE4Qiw2QkFBNkIsS0FBSyx5QkFBeUIsb0JBQW9CLHVEQUF1RCxnQ0FBZ0MsNEJBQTRCLDhCQUE4QixvQkFBb0IsS0FBSyxpQkFBaUIsMENBQTBDLHlCQUF5QixzQkFBc0IsNEJBQTRCLHFGQUFxRixrQkFBa0IsMEJBQTBCLHlCQUF5Qiw0QkFBNEIsNEJBQTRCLGdCQUFnQixzQkFBc0Isd0JBQXdCLHdCQUF3QixnQ0FBZ0MsaUNBQWlDLEtBQUssdUJBQXVCLDJDQUEyQyw2QkFBNkIscUJBQXFCLEtBQUssZ0JBQWdCLDRCQUE0QixrQkFBa0Isd0JBQXdCLHdFQUF3RSxrREFBa0QsS0FBSyx5QkFBeUIsNkJBQTZCLEtBQUssNkJBQTZCLHlCQUF5Qix1QkFBdUIsS0FBSyxjQUFjLG9CQUFvQixzQkFBc0IsOEJBQThCLEtBQUssZUFBZSxzQkFBc0IsMEJBQTBCLDBCQUEwQixtREFBbUQsS0FBSyxxQkFBcUIsNkNBQTZDLEtBQUssd0JBQXdCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGlCQUFpQixLQUFLLHdCQUF3QixvQkFBb0IsMEJBQTBCLHFDQUFxQyxrQkFBa0Isd0JBQXdCLEtBQUssMkJBQTJCLGtCQUFrQixvQkFBb0IseUJBQXlCLEtBQUssdUJBQXVCLGtCQUFrQix5QkFBeUIsS0FBSyxnQkFBZ0IseUJBQXlCLGdCQUFnQixjQUFjLGVBQWUsbUJBQW1CLEtBQUssd0JBQXdCLGdCQUFnQiw2QkFBNkIsa0JBQWtCLHdCQUF3QixLQUFLLG1CQUFtQixvQkFBb0IsbUJBQW1CLG1CQUFtQixnQ0FBZ0Msa0JBQWtCLHlCQUF5QixLQUFLLHlCQUF5QixvQkFBb0Isa0NBQWtDLDBCQUEwQixtQkFBbUIsS0FBSyxnQkFBZ0IsZ0JBQWdCLGlCQUFpQixLQUFLLGNBQWMsMkJBQTJCLHNCQUFzQixtQkFBbUIseUJBQXlCLGlCQUFpQixvQkFBb0IsOEJBQThCLDBCQUEwQixLQUFLLHNCQUFzQixvQkFBb0IscUNBQXFDLDBCQUEwQixrQkFBa0IsS0FBSyxzQkFBc0IsNkNBQTZDLG9DQUFvQyw2Q0FBNkMsS0FBSyx3QkFBd0IsK0NBQStDLGtDQUFrQyw2Q0FBNkMsS0FBSyw4QkFBOEIsMkNBQTJDLCtCQUErQiwyQ0FBMkMsS0FBSyw0QkFBNEIsK0NBQStDLGtDQUFrQyw2Q0FBNkMsS0FBSyxzQkFBc0IsZ0JBQWdCLDBCQUEwQixrQkFBa0IsS0FBSyxZQUFZLGdCQUFnQixpQkFBaUIsS0FBSyxnQkFBZ0Isc0JBQXNCLGdCQUFnQixhQUFhLGNBQWMsZUFBZSxrQkFBa0IsbUJBQW1CLG9CQUFvQiwrQ0FBK0MsS0FBSywwQkFBMEIsa0JBQWtCLG1CQUFtQixvQkFBb0IsNkJBQTZCLHlCQUF5QiwrQkFBK0IsNEJBQTRCLEtBQUssNkNBQTZDLG9CQUFvQixLQUFLLHVCQUF1QixzQkFBc0IsYUFBYSxrQkFBa0Isb0JBQW9CLEtBQUssNkJBQTZCLG9CQUFvQiw4QkFBOEIsa0JBQWtCLGtCQUFrQixLQUFLLGlDQUFpQyxrQkFBa0IsbUJBQW1CLHlCQUF5QiwwQkFBMEIsS0FBSyx3QkFBd0Isb0JBQW9CLDZCQUE2QixxQkFBcUIscUJBQXFCLDhCQUE4QixLQUFLLDRCQUE0QixxQkFBcUIsdUJBQXVCLEtBQUssNEJBQTRCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLEtBQUssY0FBYyxvQkFBb0IsNkJBQTZCLGtCQUFrQixLQUFLLDRCQUE0QixpQkFBaUIsbUJBQW1CLHlCQUF5Qiw2Q0FBNkMsc0JBQXNCLHFCQUFxQixLQUFLLDhCQUE4QixtQkFBbUIsbUJBQW1CLHlCQUF5Qiw2Q0FBNkMsc0JBQXNCLHFCQUFxQixLQUFLLGtCQUFrQixpQkFBaUIsb0JBQW9CLHlCQUF5Qiw2Q0FBNkMsc0JBQXNCLHFCQUFxQixLQUFLLDJCQUEyQixpQkFBaUIsS0FBSyxlQUFlLG9CQUFvQixLQUFLLG1DQUFtQyx1QkFBdUIseURBQXlELE9BQU8sS0FBSyx1QkFBdUI7QUFDbndqQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjZDO0FBQ047QUFDRztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEMsNEJBQTRCLHdEQUFhOztBQUV6QyxJQUFJLDREQUFZOztBQUVoQjtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0Esc0JBQXNCLG1CQUFtQiw2QkFBNkIsV0FBVztBQUNqRjtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsV0FBVztBQUM3QztBQUNBLDZCQUE2QixTQUFTLDBCQUEwQixVQUFVO0FBQzFFLDhGQUE4RixTQUFTO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMseURBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDcEQ3QjtBQUNBO0FBQ0Esa0JBQWtCLFFBQVEsRUFBRSxNQUFNOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEI3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0w1QjtBQUNBO0FBQ0Esa0JBQWtCLFFBQVEsRUFBRSxNQUFNOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJ6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDYTtBQUN1Qjs7QUFFN0Q7QUFDQSxFQUFFLDJFQUFhO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0Ly4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvbGlrZXMvZGlzcGxheU1vdmllcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC8uL3NyYy9tb2R1bGVzL2xpa2VzL2dldExpa2VzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvbGlrZXMvbW92aWVDb3VudGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvbGlrZXMvcG9zdExpa2VzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVBREVSICovXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBjb2xvcjogI2Y1ZjVkYztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjAwMDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDJyZW07XFxyXFxufVxcclxcblxcclxcbnVsLm5hdmlnYXRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxudWwubmF2aWdhdGlvbiBsaSB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogcmdiKDEzMCwgOTksIDE1Nik7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbiBhIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG51bC5uYXZpZ2F0aW9uOmhvdmVyIGxpLFxcclxcbnVsLm5hdmlnYXRpb246Zm9jdXMgbGkge1xcclxcbiAgb3BhY2l0eTogMC4yO1xcclxcbiAgZmlsdGVyOiBibHVyKDJweCk7XFxyXFxufVxcclxcblxcclxcbnVsLm5hdmlnYXRpb24gbGk6aG92ZXIsXFxyXFxudWwubmF2aWdhdGlvbiBsaTpmb2N1cyB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgZmlsdGVyOiBibHVyKDApO1xcclxcbn0gLyogSEVBREVSICovXFxyXFxuXFxyXFxuZGl2LnR2LW1haW4taW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmltZy50di1tYWluLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnR2LWxpa2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udHYtc2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3gtc2hhZG93OiAjZmZmIDAgMCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udHYtb3RoZXItaW5mbyB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI2LCAxNiwgNCwgMC40KTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnR2LWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxyXFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uI3NlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcXHJcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHJvdy1nYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgOTksIDE1Nik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LWZhbWlseTogQ2VyZWJyaVNhbnMtUmVndWxhciwgLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBSb2JvdG8sIHNhbnMtc2VyaWY7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgcm90YXRlKC0xZGVnKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogIzljODI2MztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxyXFxuICBib3JkZXItaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZWQgNjklLCAjMDAwMCA3MCUpIDg0LjUlIGZpbGwvMTAwJTtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbigtNDElIDAsIDUwJSA5MSUsIDE0MSUgMCk7XFxyXFxufVxcclxcblxcclxcbmRpdi5oZWFydDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uaGVhcnQtYnV0dG9uIHtcXHJcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICBtYXJnaW46IDEuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDFweCByZ2IoMjA3LCA5MSwgOTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZDpob3ZlciB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS1tb3ZpZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLXJlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtYmFubmVyLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzcwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1iYW5uZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1saWtlcyBwIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyIHAge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGNvbG9yOiBiZWlnZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWJ0bnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1wcmltYXJ5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1zZWNvbmRhcnkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAxOTcsIDE5Nyk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE1LCAxOTcsIDE5Nyk7XFxyXFxufVxcclxcblxcclxcbi5idG4tcHJpbWFyeTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1saWtlcyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxyXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtbW92aWUtYmFubmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1tb3ZpZS1iYW5uZXItaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWRldGFpbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXgtd2lkdGg6IDkwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1kZXNjcmlwdGlvbiB7XFxyXFxuICBtYXgtd2lkdGg6IDcwJTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1yZWNlaXZlZCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nc3VibWl0J10ge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQtZm9ybSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcXHJcXG4gIHNlY3Rpb24jc2VjdGlvbiB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDVix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUEsV0FBVztBQUNYO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FB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RUFDdEMsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLGdEQUFnRDtFQUNsRDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIRUFERVIgKi9cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGNvbG9yOiAjZjVmNWRjO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiMDAwMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxudWwubmF2aWdhdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG51bC5uYXZpZ2F0aW9uIGxpIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2IoMTMwLCA5OSwgMTU2KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uIGEge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnVsLm5hdmlnYXRpb246aG92ZXIgbGksXFxyXFxudWwubmF2aWdhdGlvbjpmb2N1cyBsaSB7XFxyXFxuICBvcGFjaXR5OiAwLjI7XFxyXFxuICBmaWx0ZXI6IGJsdXIoMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxudWwubmF2aWdhdGlvbiBsaTpob3ZlcixcXHJcXG51bC5uYXZpZ2F0aW9uIGxpOmZvY3VzIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBmaWx0ZXI6IGJsdXIoMCk7XFxyXFxufSAvKiBIRUFERVIgKi9cXHJcXG5cXHJcXG5kaXYudHYtbWFpbi1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nLnR2LW1haW4taW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udHYtbGlrZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50di1zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6ICNmZmYgMCAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50di1vdGhlci1pbmZvIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAwLjVlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjYsIDE2LCA0LCAwLjQpO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udHYtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXHJcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMiU7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24jc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcm93LWdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCA5OSwgMTU2KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtZmFtaWx5OiBDZXJlYnJpU2Fucy1SZWd1bGFyLCAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIFJvYm90bywgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcztcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxyXFxufVxcclxcblxcclxcbi5idXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSByb3RhdGUoLTFkZWcpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjOWM4MjYzO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXHJcXG4gIGJvcmRlci1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHJlZCA2OSUsICMwMDAwIDcwJSkgODQuNSUgZmlsbC8xMDAlO1xcclxcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKC00MSUgMCwgNTAlIDkxJSwgMTQxJSAwKTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmhlYXJ0OmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5oZWFydC1idXR0b24ge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbjogMS41cmVtIDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMXB4IHJnYigyMDcsIDkxLCA5MSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLW1vdmllcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMjAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtcmVjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1iYW5uZXItaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzNzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWJhbm5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWxpa2VzIHAge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbiNmb290ZXIgcCB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgY29sb3I6IGJlaWdlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tYnRucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXByaW1hcnkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXNlY29uZGFyeSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDE5NywgMTk3KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTUsIDE5NywgMTk3KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWxpa2VzIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDAgMCAxMHB4IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXHJcXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1tb3ZpZS1iYW5uZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLW1vdmllLWJhbm5lci1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvYmplY3QtZml0OiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1heC13aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWRlc2NyaXB0aW9uIHtcXHJcXG4gIG1heC13aWR0aDogNzAlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLXJlY2VpdmVkIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0ndGV4dCddIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdzdWJtaXQnXSB7XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudC1mb3JtIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xcclxcbiAgc2VjdGlvbiNzZWN0aW9uIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbW92aWVDb3VudGVyIGZyb20gJy4vbW92aWVDb3VudGVyLmpzJztcbmltcG9ydCBwb3N0TGlrZXMgZnJvbSAnLi9wb3N0TGlrZXMuanMnO1xuaW1wb3J0IGdldE1vdmllTGlrZXMgZnJvbSAnLi9nZXRMaWtlcy5qcyc7XG4vLyBpbXBvcnQgc2hvd0NvbW1lbnRQb3BVcCBmcm9tICcuLi9jb21tZW50cy9nZXRDb21tZW50LmpzJztcblxuY29uc3QgZGlzcGxheU1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJyk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VjdGlvbicpO1xuICByZXNwb25zZS5mb3JFYWNoKGFzeW5jIChtb3ZpZSkgPT4ge1xuICAgIGNvbnN0IG1vdmllSUQgPSBgJHttb3ZpZS5pZH1gO1xuICAgIGNvbnN0IG1vdmllTGlrZSA9IGF3YWl0IGdldE1vdmllTGlrZXMobW92aWVJRCk7XG5cbiAgICBtb3ZpZUNvdW50ZXIoKTtcblxuICAgIHNlY3Rpb24uaW5uZXJIVE1MICs9IGBcbiAgICAgIDxzZWN0aW9uIGlkPSR7bW92aWUuaWR9IGNsYXNzPVwidHYtc2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHYtbWFpbi1pbmZvIHR2LWRpdlwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiJHttb3ZpZS5pbWFnZS5tZWRpdW19XCIgY2xhc3M9XCJ0di1tYWluLWltZ1wiIGFsdD1cIiR7bW92aWUubmFtZX1cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR2LW90aGVyLWluZm9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidHYtZGl2XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJ0di1uYW1lXCI+JHttb3ZpZS5uYW1lfTwvaDI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInR2LWxpa2VzXCJcbiAgICAgICAgICAgICAgPjxwIGlkPVwibGlrZS0ke21vdmllLmlkfVwiIGNsYXNzPVwidHYtbmJyT2ZMaWtlc1wiPiR7bW92aWVMaWtlfTwvcD5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImhlYXJ0LWJ1dHRvbiB0di1saWtlcy1pbWdcIiB0eXBlPVwiYnV0dG9uXCI+PGRpdiBjbGFzcz1cImhlYXJ0XCIgaWQ9JHttb3ZpZS5pZH0+PC9kaXY+PC9idXR0b24+XG4gICAgICAgICAgICAgIDwhLS0gY2xhc3M9XCJmYS1zb2xpZCBmYS1oZWFydFwiIC0tPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0di1kaXZcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9JHttb3ZpZS5pZH0gY2xhc3M9XCJjb21tZW50IGJ1dHRvblwiPiYjMTI4MTcyIENvbW1lbnRzPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVzZXJ2YXRpb24gYnV0dG9uXCI+UmVzZXJ2YXRpb248L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgYDtcblxuICAgIGNvbnN0IGxpa2VCdXR0b25zID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhcnQtYnV0dG9uJyk7XG4gICAgbGlrZUJ1dHRvbnMuZm9yRWFjaChhc3luYyAobGlrZUJ1dHRvbikgPT4ge1xuICAgICAgbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYXdhaXQgcG9zdExpa2VzKGUudGFyZ2V0LmlkKTtcbiAgICAgICAgY29uc3QgbGlrZUNvbnRlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNOYnJPZkxpa2VzID0gTnVtYmVyKGxpa2VDb250ZW50LmlubmVyVGV4dCk7XG4gICAgICAgIGNvbnN0IG5ld05ick9mTGlrZXMgPSBwcmV2aW91c05ick9mTGlrZXMgKyAxO1xuICAgICAgICBsaWtlQ29udGVudC5pbm5lclRleHQgPSBuZXdOYnJPZkxpa2VzO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gc2hvd0NvbW1lbnRQb3BVcCgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNb3ZpZXM7XG4iLCJjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG5jb25zdCBhcHBJRCA9ICdnOWVSdWNzNXF0S0xqZjBxNjBvcSc7XG5jb25zdCBhcHBVcmwgPSBgJHtiYXNlVXJsfSR7YXBwSUR9L2xpa2VzYDtcblxuY29uc3QgZ2V0QWxsTGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChhcHBVcmwpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRNb3ZpZUxpa2VzID0gYXN5bmMgKG1vdmllSUQpID0+IHtcbiAgY29uc3QgYWxsTGlrZXMgPSBhd2FpdCBnZXRBbGxMaWtlcygpO1xuICBjb25zdCBmaWx0ZXJlZExpa2VzID0gYXdhaXQgYWxsTGlrZXMuZmlsdGVyKFxuICAgIChpdGVtKSA9PiBpdGVtLml0ZW1faWQgPT09IG1vdmllSUQsXG4gICk7XG4gIHJldHVybiBmaWx0ZXJlZExpa2VzWzBdLmxpa2VzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TW92aWVMaWtlcztcbiIsImNvbnN0IG1vdmllQ291bnRlciA9ICgpID0+IHtcbiAgY29uc3QgdG90YWxNb3ZpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWxNb3ZpZXMnKTtcbiAgdG90YWxNb3ZpZXMuaW5uZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnR2LXNlY3Rpb24nKS5sZW5ndGggKyAxO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbW92aWVDb3VudGVyO1xuIiwiY29uc3QgYmFzZVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuY29uc3QgYXBwSUQgPSAnZzllUnVjczVxdEtMamYwcTYwb3EnO1xuY29uc3QgYXBwVXJsID0gYCR7YmFzZVVybH0ke2FwcElEfS9saWtlc2A7XG5cbmNvbnN0IHBvc3RMaWtlcyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYXBwVXJsLCB7XG4gICAgbWV0aG9kOiAnUG9zdCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgIH0pLFxuICB9KTtcbiAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0O1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0TGlrZXM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2Nzcy9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL2ltYWdlcy90b2RheS10di1zZXJpZXMucG5nJztcbmltcG9ydCBkaXNwbGF5TW92aWVzIGZyb20gJy4vbW9kdWxlcy9saWtlcy9kaXNwbGF5TW92aWVzLmpzJztcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgZGlzcGxheU1vdmllcygpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==