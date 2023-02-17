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
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable indentation */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  scroll-behavior: smooth;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --color-primary: white;\r\n  --color-secondary: rgba(0, 0, 0, 0.89);\r\n  --color-tertiary: white;\r\n  --color-font: rgb(237, 227, 227);\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n}\r\n\r\n/* HEADER */\r\nnav {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n  color: #f5f5dc;\r\n  background-color: #9c8263;\r\n  text-align: center;\r\n  padding: 0 2rem;\r\n  list-style-type: none;\r\n  position: absolute;\r\n  top: 0;\r\n  gap: 18rem;\r\n}\r\n\r\ninput[type='text'],\r\nli,\r\n.btn-outline-primary {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 150%;\r\n  height: 5px;\r\n  border: none;\r\n  list-style: none;\r\n  background: rgb(56, 54, 54);\r\n  padding: 20px;\r\n  border-radius: 50px;\r\n  margin: 10px 5px;\r\n  color: var(--color-primary);\r\n  font-size: medium;\r\n}\r\n\r\n.navigation li {\r\n  margin: 0 2rem;\r\n}\r\n\r\nul.navigation {\r\n  display: flex;\r\n  list-style-type: none;\r\n  gap: 2rem;\r\n}\r\n\r\nul.navigation li {\r\n  color: #fff;\r\n}\r\n\r\n.navigation li:hover {\r\n  color: var(--color-primary);\r\n  border-bottom: 3px solid var(--color-primary);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #000;\r\n  font-weight: 900;\r\n}\r\n\r\n.navigation a {\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\nul.navigation:hover li,\r\nul.navigation:focus li {\r\n  opacity: 0.2;\r\n  filter: blur(2px);\r\n}\r\n\r\nul.navigation li:hover,\r\nul.navigation li:focus {\r\n  opacity: 1;\r\n  filter: blur(0);\r\n} /* HEADER */\r\n\r\ndiv.tv-main-info {\r\n  display: flex;\r\n  gap: 1rem;\r\n  width: 100%;\r\n}\r\n\r\nimg.tv-main-img {\r\n  width: 100%;\r\n}\r\n\r\n.tv-likes {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nspan.tv-likes {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\ndiv.tv-other-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #9c8263;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.tv-div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.5rem;\r\n  flex-wrap: wrap;\r\n  overflow-wrap: anywhere;\r\n}\r\n\r\nsection#section {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  grid-gap: 1rem;\r\n  overflow-wrap: break-word;\r\n  justify-items: center;\r\n}\r\n\r\n.button {\r\n  background-color: rgb(238, 238, 238);\r\n  border-radius: 100px;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family:\r\n cursive,\r\n CerebriSans-Regular,\r\n -apple-system,\r\n system-ui,\r\n Roboto,\r\n    sans-serif;\r\n  padding: 7px 20px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  transition: all 250ms;\r\n  border: 0;\r\n  font-size: 16px;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n}\r\n\r\n.button:hover {\r\n  transform: scale(1.05) rotate(-1deg);\r\n  background-color: #000;\r\n  color: #eee;\r\n}\r\n\r\n.heart {\r\n  display: inline-block;\r\n  width: 1rem;\r\n  aspect-ratio: 1/1;\r\n  border-image: radial-gradient(red 69%, #0000 70%) 84.5% fill/100%;\r\n  clip-path: polygon(-41% 0, 50% 91%, 141% 0);\r\n}\r\n\r\ndiv.heart:hover {\r\n  transform: scale(1.25);\r\n}\r\n\r\nbutton.heart-button {\r\n  border-style: none;\r\n  background: none;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.logo p {\r\n  font-size: 2.5rem;\r\n  font-weight: 700;\r\n  margin: 0;\r\n  color: var(--color-primary);\r\n}\r\n\r\n.navigation {\r\n  list-style-type: none;\r\n  display: flex;\r\n}\r\n\r\n.navigation li a {\r\n  text-decoration: none;\r\n  color: var(--color-font);\r\n}\r\n\r\n.active {\r\n  color: var(--color-primary);\r\n  border-bottom: 3px solid var(--color-primary);\r\n}\r\n\r\nmain {\r\n  margin-top: 5rem;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  padding: 1.5rem;\r\n  margin: 1.5rem 1rem;\r\n  border-radius: 10px;\r\n  box-shadow: 2px 2px 5px 1px rgb(207, 91, 91);\r\n}\r\n\r\n.card:hover {\r\n  border: 2px solid var(--color-primary);\r\n}\r\n\r\n.single-movies {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 20%;\r\n}\r\n\r\n.title-rection {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  padding-top: 10px;\r\n}\r\n\r\n.movie-banner-img {\r\n  width: 100%;\r\n  height: 370px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.movie-banner {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\nfooter {\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 1rem;\r\n  background-color: #9c8263;\r\n}\r\n\r\n.footer-section {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.movie-likes p {\r\n  margin: 0;\r\n  padding: 10px 0 10px 0;\r\n  width: 100%;\r\n  text-align: right;\r\n}\r\n\r\n.container.footer-section p {\r\n  color: #fff;\r\n  padding: 1rem;\r\n}\r\n\r\nbutton {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.btn {\r\n  padding: 0.5rem 1rem;\r\n  cursor: pointer;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  width: 90%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.action-btns {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.btn-primary {\r\n  background-color: var(--color-primary);\r\n  color: var(--color-secondary);\r\n  border: 1px solid var(--color-primary);\r\n}\r\n\r\n.btn-secondary {\r\n  background-color: var(--color-secondary);\r\n  color: var(--color-primary);\r\n  border: 1px solid var(--color-primary);\r\n}\r\n\r\n.btn-secondary:hover {\r\n  background-color: rgb(215, 197, 197);\r\n  color: var(--color-font);\r\n  border: 1px solid rgb(215, 197, 197);\r\n}\r\n\r\n.btn-primary:hover {\r\n  background-color: var(--color-secondary);\r\n  color: var(--color-primary);\r\n  border: 1px solid var(--color-primary);\r\n}\r\n\r\n.movie-likes {\r\n  margin: 0;\r\n  padding: 0 0 10px 0;\r\n  width: 100%;\r\n}\r\n\r\nh3 {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: var(--color-primary);\r\n}\r\n\r\n.popup {\r\n  position: fixed;\r\n  bottom: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  background-color: var(--color-secondary);\r\n}\r\n\r\n.popup-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: scroll;\r\n  -ms-overflow-style: none; /* IE and Edge */\r\n  scrollbar-width: none; /* Firefox */\r\n}\r\n\r\n/* Hide scrollbar for Chrome, Safari and Opera */\r\n.popup-container::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\nh2 {\r\n  color: var(--color-primary);\r\n}\r\n\r\n.popup-header {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 10px;\r\n  padding: 10px;\r\n  background: #0000003b;\r\n  border-radius: 50px;\r\n}\r\n\r\n.popup-movie-banner {\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 50%;\r\n  width: 100%;\r\n}\r\n\r\n.popup-movie-banner-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n  object-fit: cover;\r\n}\r\n\r\n.popup-details {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 90%;\r\n  margin: 0 auto;\r\n  align-items: flex-start;\r\n}\r\n\r\n.popup-description {\r\n  font-weight: 400;\r\n  color: #fff;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\ninput[name='comment'] {\r\n  width: 400%;\r\n  font-size: medium;\r\n}\r\n\r\n.popup-comments {\r\n  width: 100%;\r\n  display: flex;\r\n  gap: 25%;\r\n  flex-direction: row-reverse;\r\n  justify-content: center;\r\n}\r\n\r\n.btn-outline-primary {\r\n  width: 10%;\r\n  font-size: larger;\r\n}\r\n\r\n::placeholder {\r\n  color: var(--color-primary);\r\n  font-size: medium;\r\n}\r\n\r\ninput[type='submit'] {\r\n  width: 120px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-primary);\r\n  padding: 0 10px;\r\n  margin: 10px 0;\r\n}\r\n\r\n.add-comment-form {\r\n  width: 100%;\r\n  background: black;\r\n  border-radius: 15px;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  section#section {\r\n    grid-template-columns: repeat(4, minmax(0, 1fr));\r\n  }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  section#section {\r\n    grid-template-columns: repeat(6, minmax(0, 1fr));\r\n  }\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n  section#section {\r\n    grid-template-columns: repeat(8, minmax(0, 1fr));\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":["/* stylelint-disable indentation */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  scroll-behavior: smooth;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --color-primary: white;\r\n  --color-secondary: rgba(0, 0, 0, 0.89);\r\n  --color-tertiary: white;\r\n  --color-font: rgb(237, 227, 227);\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n}\r\n\r\n/* HEADER */\r\nnav {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n  color: #f5f5dc;\r\n  background-color: #9c8263;\r\n  text-align: center;\r\n  padding: 0 2rem;\r\n  list-style-type: none;\r\n  position: absolute;\r\n  top: 0;\r\n  gap: 18rem;\r\n}\r\n\r\ninput[type='text'],\r\nli,\r\n.btn-outline-primary {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 150%;\r\n  height: 5px;\r\n  border: none;\r\n  list-style: none;\r\n  background: rgb(56, 54, 54);\r\n  padding: 20px;\r\n  border-radius: 50px;\r\n  margin: 10px 5px;\r\n  color: var(--color-primary);\r\n  font-size: medium;\r\n}\r\n\r\n.navigation li {\r\n  margin: 0 2rem;\r\n}\r\n\r\nul.navigation {\r\n  display: flex;\r\n  list-style-type: none;\r\n  gap: 2rem;\r\n}\r\n\r\nul.navigation li {\r\n  color: #fff;\r\n}\r\n\r\n.navigation li:hover {\r\n  color: var(--color-primary);\r\n  border-bottom: 3px solid var(--color-primary);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #000;\r\n  font-weight: 900;\r\n}\r\n\r\n.navigation a {\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\nul.navigation:hover li,\r\nul.navigation:focus li {\r\n  opacity: 0.2;\r\n  filter: blur(2px);\r\n}\r\n\r\nul.navigation li:hover,\r\nul.navigation li:focus {\r\n  opacity: 1;\r\n  filter: blur(0);\r\n} /* HEADER */\r\n\r\ndiv.tv-main-info {\r\n  display: flex;\r\n  gap: 1rem;\r\n  width: 100%;\r\n}\r\n\r\nimg.tv-main-img {\r\n  width: 100%;\r\n}\r\n\r\n.tv-likes {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nspan.tv-likes {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\ndiv.tv-other-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #9c8263;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.tv-div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.5rem;\r\n  flex-wrap: wrap;\r\n  overflow-wrap: anywhere;\r\n}\r\n\r\nsection#section {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  grid-gap: 1rem;\r\n  overflow-wrap: break-word;\r\n  justify-items: center;\r\n}\r\n\r\n.button {\r\n  background-color: rgb(238, 238, 238);\r\n  border-radius: 100px;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-family:\r\n cursive,\r\n CerebriSans-Regular,\r\n -apple-system,\r\n system-ui,\r\n Roboto,\r\n    sans-serif;\r\n  padding: 7px 20px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  transition: all 250ms;\r\n  border: 0;\r\n  font-size: 16px;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n}\r\n\r\n.button:hover {\r\n  transform: scale(1.05) rotate(-1deg);\r\n  background-color: #000;\r\n  color: #eee;\r\n}\r\n\r\n.heart {\r\n  display: inline-block;\r\n  width: 1rem;\r\n  aspect-ratio: 1/1;\r\n  border-image: radial-gradient(red 69%, #0000 70%) 84.5% fill/100%;\r\n  clip-path: polygon(-41% 0, 50% 91%, 141% 0);\r\n}\r\n\r\ndiv.heart:hover {\r\n  transform: scale(1.25);\r\n}\r\n\r\nbutton.heart-button {\r\n  border-style: none;\r\n  background: none;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.logo p {\r\n  font-size: 2.5rem;\r\n  font-weight: 700;\r\n  margin: 0;\r\n  color: var(--color-primary);\r\n}\r\n\r\n.navigation {\r\n  list-style-type: none;\r\n  display: flex;\r\n}\r\n\r\n.navigation li a {\r\n  text-decoration: none;\r\n  color: var(--color-font);\r\n}\r\n\r\n.active {\r\n  color: var(--color-primary);\r\n  border-bottom: 3px solid var(--color-primary);\r\n}\r\n\r\nmain {\r\n  margin-top: 5rem;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  padding: 1.5rem;\r\n  margin: 1.5rem 1rem;\r\n  border-radius: 10px;\r\n  box-shadow: 2px 2px 5px 1px rgb(207, 91, 91);\r\n}\r\n\r\n.card:hover {\r\n  border: 2px solid var(--color-primary);\r\n}\r\n\r\n.single-movies {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 20%;\r\n}\r\n\r\n.title-rection {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  padding-top: 10px;\r\n}\r\n\r\n.movie-banner-img {\r\n  width: 100%;\r\n  height: 370px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.movie-banner {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\nfooter {\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 1rem;\r\n  background-color: #9c8263;\r\n}\r\n\r\n.footer-section {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.movie-likes p {\r\n  margin: 0;\r\n  padding: 10px 0 10px 0;\r\n  width: 100%;\r\n  text-align: right;\r\n}\r\n\r\n.container.footer-section p {\r\n  color: #fff;\r\n  padding: 1rem;\r\n}\r\n\r\nbutton {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.btn {\r\n  padding: 0.5rem 1rem;\r\n  cursor: pointer;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  width: 90%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.action-btns {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.btn-primary {\r\n  background-color: var(--color-primary);\r\n  color: var(--color-secondary);\r\n  border: 1px solid var(--color-primary);\r\n}\r\n\r\n.btn-secondary {\r\n  background-color: var(--color-secondary);\r\n  color: var(--color-primary);\r\n  border: 1px solid var(--color-primary);\r\n}\r\n\r\n.btn-secondary:hover {\r\n  background-color: rgb(215, 197, 197);\r\n  color: var(--color-font);\r\n  border: 1px solid rgb(215, 197, 197);\r\n}\r\n\r\n.btn-primary:hover {\r\n  background-color: var(--color-secondary);\r\n  color: var(--color-primary);\r\n  border: 1px solid var(--color-primary);\r\n}\r\n\r\n.movie-likes {\r\n  margin: 0;\r\n  padding: 0 0 10px 0;\r\n  width: 100%;\r\n}\r\n\r\nh3 {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: var(--color-primary);\r\n}\r\n\r\n.popup {\r\n  position: fixed;\r\n  bottom: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  background-color: var(--color-secondary);\r\n}\r\n\r\n.popup-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: scroll;\r\n  -ms-overflow-style: none; /* IE and Edge */\r\n  scrollbar-width: none; /* Firefox */\r\n}\r\n\r\n/* Hide scrollbar for Chrome, Safari and Opera */\r\n.popup-container::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\nh2 {\r\n  color: var(--color-primary);\r\n}\r\n\r\n.popup-header {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 10px;\r\n  padding: 10px;\r\n  background: #0000003b;\r\n  border-radius: 50px;\r\n}\r\n\r\n.popup-movie-banner {\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 50%;\r\n  width: 100%;\r\n}\r\n\r\n.popup-movie-banner-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n  object-fit: cover;\r\n}\r\n\r\n.popup-details {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 90%;\r\n  margin: 0 auto;\r\n  align-items: flex-start;\r\n}\r\n\r\n.popup-description {\r\n  font-weight: 400;\r\n  color: #fff;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\ninput[name='comment'] {\r\n  width: 400%;\r\n  font-size: medium;\r\n}\r\n\r\n.popup-comments {\r\n  width: 100%;\r\n  display: flex;\r\n  gap: 25%;\r\n  flex-direction: row-reverse;\r\n  justify-content: center;\r\n}\r\n\r\n.btn-outline-primary {\r\n  width: 10%;\r\n  font-size: larger;\r\n}\r\n\r\n::placeholder {\r\n  color: var(--color-primary);\r\n  font-size: medium;\r\n}\r\n\r\ninput[type='submit'] {\r\n  width: 120px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  border: 1px solid var(--color-primary);\r\n  padding: 0 10px;\r\n  margin: 10px 0;\r\n}\r\n\r\n.add-comment-form {\r\n  width: 100%;\r\n  background: black;\r\n  border-radius: 15px;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  section#section {\r\n    grid-template-columns: repeat(4, minmax(0, 1fr));\r\n  }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  section#section {\r\n    grid-template-columns: repeat(6, minmax(0, 1fr));\r\n  }\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n  section#section {\r\n    grid-template-columns: repeat(8, minmax(0, 1fr));\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/comments/comments.js":
/*!******************************************!*\
  !*** ./src/modules/comments/comments.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getComments = async (movieId) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/V9PGHS19NclaPI0zbq7b/comments?item_id=${movieId}`);
  const myJson = await response.json(); // extract JSON from the http respo

  return myJson;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);


/***/ }),

/***/ "./src/modules/comments/getComment.js":
/*!********************************************!*\
  !*** ./src/modules/comments/getComment.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMovieDetails_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMovieDetails.js */ "./src/modules/comments/getMovieDetails.js");


const showCommentPopUp = () => {
  const popup = document.querySelector('.popup');

  const commentButton = document.querySelectorAll('.comment');
  commentButton.forEach((submitButton) => {
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      const movieId = event.target.id;
      (0,_getMovieDetails_js__WEBPACK_IMPORTED_MODULE_0__.getMovieDetails)(movieId);
      popup.classList.remove('hide');
      popup.style.display = 'flex';
    });
  });
  const closeButton = document.querySelectorAll('#popup-close');
  closeButton.forEach((button) => button.addEventListener('click', () => {
    popup.style.display = 'none';
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCommentPopUp);


/***/ }),

/***/ "./src/modules/comments/getMovieDetails.js":
/*!*************************************************!*\
  !*** ./src/modules/comments/getMovieDetails.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commentsCounter": () => (/* binding */ commentsCounter),
/* harmony export */   "getMovieDetails": () => (/* binding */ getMovieDetails)
/* harmony export */ });
/* harmony import */ var _showComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showComment.js */ "./src/modules/comments/showComment.js");
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ "./src/modules/comments/comments.js");



const getMovieDetails = async (movieId) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${movieId}`);
  const movieDetails = await response.json();
  const popupContainer = document.querySelector('.popup-container');
  const movieName = movieDetails.name;
  const { summary } = movieDetails;
  const { image } = movieDetails;

  let imageSrc = 'https://static.tvmaze.com/uploads/images/original_untouched/53/133615.jpg';

  if (image !== 'null') {
    if (image.original !== 'null') {
      imageSrc = movieDetails.image.original;
    } else {
      imageSrc = movieDetails.image.medium;
    }
  }
  const comments = await (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(movieId);
  let totalComment = 0;
  if (comments.length > 0) {
    totalComment = comments.length;
  }
  const firstPart = `
    <div class="popup-movie-banner">
          <img
            class="popup-movie-banner-img"
            src="${imageSrc}"
            alt="${movieName} Banner"
          />
        </div>
        <div class="popup-details">
          <div class="popup-title">
            <h2>${movieName}</h2>
          </div>
          <div class="popup-description">
            ${summary} <br>
          </div>

          <div class="popup-comments">
            <h3 class="popup-comments-title">
              Comments<span id="commentConter">(<span id="totalComment">${totalComment}</span>)</span>
            </h3>
            <div class="popu-comments-container">
              <ul class="comment-description">
              `;

  let commentList = '';
  for (let k = 0; k < comments.length; k += 1) {
    const temp = `<li>&#128489 &nbsp &nbsp ${comments[k].creation_date} ${comments[k].username}:&nbsp &nbsp ${comments[k].comment}</li>`;
    commentList += temp;
  }
  const secondPart = `
              </ul>
            </div>
          </div>

          <div class="add-comment-form">
            <form id="addComment">
            <input type="text" placeholder="Your name" name="name" required />
            <input type="hidden" placeholder="Name" name="movieId" value="${movieId}" />
            <input type="text" id="comment" placeholder="add comment" name="comment" required />
              <button id="addComment" type="submit" class="btn btn-outline-primary">&#128490</button>
            </form>
          </div>
        </div>`;

  popupContainer.innerHTML = firstPart + commentList + secondPart;

  const addComment = document.querySelector('#addComment');

  addComment.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = addComment.querySelector('input[name="name"]').value;
    const comment = addComment.querySelector('input[name="comment"]').value;
    const movieId = addComment.querySelector('input[name="movieId"]').value;

    (0,_showComment_js__WEBPACK_IMPORTED_MODULE_0__["default"])(movieId, name, comment);

    const d = new Date();
    const commentDescription = document.querySelector('.comment-description');
    const commentConter = document.querySelector('#totalComment');

    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    commentDescription.innerHTML += `<li>${ye}-${mo}-${da}  ${name}:   ${comment}</li>`;
    commentConter.innerHTML = Number(commentConter.innerHTML) + 1;
    addComment.reset();
  });
};

const commentsCounter = (comments) => {
  if (!comments.length) {
    return 0;
  }
  return comments.length;
};




/***/ }),

/***/ "./src/modules/comments/showComment.js":
/*!*********************************************!*\
  !*** ./src/modules/comments/showComment.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showComment = async (movieId, name, description) => {
  const data = `{"item_id": "${movieId}", "username": "${name}", "comment": "${description}"}`;

  const mBody = JSON.parse(data);

  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/V9PGHS19NclaPI0zbq7b/comments/',
    {
      method: 'POST',
      body: JSON.stringify(mBody),

      headers: { 'Content-Type': 'application/JSON' },
    });
  // await response; // extract JSON from the http response
  const result = await response.text();
  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showComment);


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
/* harmony import */ var _comments_getComment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comments/getComment.js */ "./src/modules/comments/getComment.js");
/* eslint-disable no-unused-vars */





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
    (0,_comments_getComment_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
  return Number(totalMovies.innerHTML);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFV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QUUsMkVBQWE7QUFDZiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0Ly4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3QvLi9zcmMvY3NzL2luZGV4LmNzcz9mN2VhIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3QvLi9zcmMvbW9kdWxlcy9saWtlcy9kaXNwbGF5TW92aWVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvbGlrZXMvZ2V0TGlrZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3QvLi9zcmMvbW9kdWxlcy9saWtlcy9tb3ZpZUNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3QvLi9zcmMvbW9kdWxlcy9saWtlcy9wb3N0TGlrZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIRUFERVIgKi9cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGNvbG9yOiAjZjVmNWRjO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiMDAwMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxudWwubmF2aWdhdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG51bC5uYXZpZ2F0aW9uIGxpIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2IoMTMwLCA5OSwgMTU2KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uIGEge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnVsLm5hdmlnYXRpb246aG92ZXIgbGksXFxyXFxudWwubmF2aWdhdGlvbjpmb2N1cyBsaSB7XFxyXFxuICBvcGFjaXR5OiAwLjI7XFxyXFxuICBmaWx0ZXI6IGJsdXIoMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxudWwubmF2aWdhdGlvbiBsaTpob3ZlcixcXHJcXG51bC5uYXZpZ2F0aW9uIGxpOmZvY3VzIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBmaWx0ZXI6IGJsdXIoMCk7XFxyXFxufSAvKiBIRUFERVIgKi9cXHJcXG5cXHJcXG5kaXYudHYtbWFpbi1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nLnR2LW1haW4taW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udHYtbGlrZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50di1zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6ICNmZmYgMCAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50di1vdGhlci1pbmZvIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAwLjVlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjYsIDE2LCA0LCAwLjQpO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udHYtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXHJcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMiU7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24jc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcm93LWdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCA5OSwgMTU2KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtZmFtaWx5OiBDZXJlYnJpU2Fucy1SZWd1bGFyLCAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIFJvYm90bywgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcztcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxyXFxufVxcclxcblxcclxcbi5idXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSByb3RhdGUoLTFkZWcpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjOWM4MjYzO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXHJcXG4gIGJvcmRlci1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHJlZCA2OSUsICMwMDAwIDcwJSkgODQuNSUgZmlsbC8xMDAlO1xcclxcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKC00MSUgMCwgNTAlIDkxJSwgMTQxJSAwKTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmhlYXJ0OmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5oZWFydC1idXR0b24ge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbjogMS41cmVtIDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMXB4IHJnYigyMDcsIDkxLCA5MSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLW1vdmllcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMjAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtcmVjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1iYW5uZXItaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzNzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWJhbm5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWxpa2VzIHAge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbiNmb290ZXIgcCB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgY29sb3I6IGJlaWdlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tYnRucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXByaW1hcnkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXNlY29uZGFyeSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDE5NywgMTk3KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTUsIDE5NywgMTk3KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWxpa2VzIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDAgMCAxMHB4IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXHJcXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1tb3ZpZS1iYW5uZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLW1vdmllLWJhbm5lci1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvYmplY3QtZml0OiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1heC13aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWRlc2NyaXB0aW9uIHtcXHJcXG4gIG1heC13aWR0aDogNzAlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLXJlY2VpdmVkIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0ndGV4dCddIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdzdWJtaXQnXSB7XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudC1mb3JtIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xcclxcbiAgc2VjdGlvbiNzZWN0aW9uIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNq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QUFzQztFQUN0QyxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsZ0RBQWdEO0VBQ2xEO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIEhFQURFUiAqL1xcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgY29sb3I6ICNmNWY1ZGM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGIwMDAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG51bC5uYXZpZ2F0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbnVsLm5hdmlnYXRpb24gbGkge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHJnYigxMzAsIDk5LCAxNTYpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRpb24gYSB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwubmF2aWdhdGlvbjpob3ZlciBsaSxcXHJcXG51bC5uYXZpZ2F0aW9uOmZvY3VzIGxpIHtcXHJcXG4gIG9wYWNpdHk6IDAuMjtcXHJcXG4gIGZpbHRlcjogYmx1cigycHgpO1xcclxcbn1cXHJcXG5cXHJcXG51bC5uYXZpZ2F0aW9uIGxpOmhvdmVyLFxcclxcbnVsLm5hdmlnYXRpb24gbGk6Zm9jdXMge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGZpbHRlcjogYmx1cigwKTtcXHJcXG59IC8qIEhFQURFUiAqL1xcclxcblxcclxcbmRpdi50di1tYWluLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcudHYtbWFpbi1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50di1saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnR2LXNlY3Rpb24ge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm94LXNoYWRvdzogI2ZmZiAwIDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnR2LW90aGVyLWluZm8ge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXNpemU6IDAuNWVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNiwgMTYsIDQsIDAuNCk7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50di1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcclxcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiNzZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICByb3ctZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDk5LCAxNTYpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC1mYW1pbHk6IENlcmVicmlTYW5zLVJlZ3VsYXIsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgUm9ib3RvLCBzYW5zLXNlcmlmO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpIHJvdGF0ZSgtMWRlZyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgY29sb3I6ICM5YzgyNjM7XFxyXFxufVxcclxcblxcclxcbi5oZWFydCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcclxcbiAgYm9yZGVyLWltYWdlOiByYWRpYWwtZ3JhZGllbnQocmVkIDY5JSwgIzAwMDAgNzAlKSA4NC41JSBmaWxsLzEwMCU7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oLTQxJSAwLCA1MCUgOTElLCAxNDElIDApO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuaGVhcnQ6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmhlYXJ0LWJ1dHRvbiB7XFxyXFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgbWFyZ2luOiAxLjVyZW0gMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAxcHggcmdiKDIwNywgOTEsIDkxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQ6aG92ZXIge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbi5zaW5nbGUtbW92aWVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAyMCU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1yZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWJhbm5lci1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDM3MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtYmFubmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtbGlrZXMgcCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3RlciBwIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBjb2xvcjogYmVpZ2U7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbi1idG5zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5idG4tcHJpbWFyeSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbi5idG4tc2Vjb25kYXJ5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgMTk3LCAxOTcpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnQpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNSwgMTk3LCAxOTcpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXByaW1hcnk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtbGlrZXMge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMCAwIDEwcHggMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcclxcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLW1vdmllLWJhbm5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDUwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtbW92aWUtYmFubmVyLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWF4LXdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZGVzY3JpcHRpb24ge1xcclxcbiAgbWF4LXdpZHRoOiA3MCU7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtcmVjZWl2ZWQge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3N1Ym1pdCddIHtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb21tZW50LWZvcm0ge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XFxyXFxuICBzZWN0aW9uI3NlY3Rpb24ge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgbW92aWVDb3VudGVyIGZyb20gJy4vbW92aWVDb3VudGVyLmpzJztcbmltcG9ydCBwb3N0TGlrZXMgZnJvbSAnLi9wb3N0TGlrZXMuanMnO1xuaW1wb3J0IGdldE1vdmllTGlrZXMgZnJvbSAnLi9nZXRMaWtlcy5qcyc7XG4vLyBpbXBvcnQgc2hvd0NvbW1lbnRQb3BVcCBmcm9tICcuLi9jb21tZW50cy9nZXRDb21tZW50LmpzJztcblxuY29uc3QgZGlzcGxheU1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJyk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VjdGlvbicpO1xuICByZXNwb25zZS5mb3JFYWNoKGFzeW5jIChtb3ZpZSkgPT4ge1xuICAgIGNvbnN0IG1vdmllSUQgPSBgJHttb3ZpZS5pZH1gO1xuICAgIGNvbnN0IG1vdmllTGlrZSA9IGF3YWl0IGdldE1vdmllTGlrZXMobW92aWVJRCk7XG5cbiAgICBtb3ZpZUNvdW50ZXIoKTtcblxuICAgIHNlY3Rpb24uaW5uZXJIVE1MICs9IGBcbiAgICAgIDxzZWN0aW9uIGlkPSR7bW92aWUuaWR9IGNsYXNzPVwidHYtc2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHYtbWFpbi1pbmZvIHR2LWRpdlwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiJHttb3ZpZS5pbWFnZS5tZWRpdW19XCIgY2xhc3M9XCJ0di1tYWluLWltZ1wiIGFsdD1cIiR7bW92aWUubmFtZX1cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR2LW90aGVyLWluZm9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidHYtZGl2XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJ0di1uYW1lXCI+JHttb3ZpZS5uYW1lfTwvaDI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInR2LWxpa2VzXCJcbiAgICAgICAgICAgICAgPjxwIGlkPVwibGlrZS0ke21vdmllLmlkfVwiIGNsYXNzPVwidHYtbmJyT2ZMaWtlc1wiPiR7bW92aWVMaWtlfTwvcD5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImhlYXJ0LWJ1dHRvbiB0di1saWtlcy1pbWdcIiB0eXBlPVwiYnV0dG9uXCI+PGRpdiBjbGFzcz1cImhlYXJ0XCIgaWQ9JHttb3ZpZS5pZH0+PC9kaXY+PC9idXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInR2LWRpdlwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD0ke21vdmllLmlkfSBjbGFzcz1cImNvbW1lbnQgYnV0dG9uXCI+JiMxMjgxNzIgQ29tbWVudHM8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZXNlcnZhdGlvbiBidXR0b25cIj5SZXNlcnZhdGlvbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICBgO1xuXG4gICAgY29uc3QgbGlrZUJ1dHRvbnMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFydC1idXR0b24nKTtcbiAgICBsaWtlQnV0dG9ucy5mb3JFYWNoKGFzeW5jIChsaWtlQnV0dG9uKSA9PiB7XG4gICAgICBsaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhd2FpdCBwb3N0TGlrZXMoZS50YXJnZXQuaWQpO1xuICAgICAgICBjb25zdCBsaWtlQ29udGVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkO1xuICAgICAgICBjb25zdCBwcmV2aW91c05ick9mTGlrZXMgPSBOdW1iZXIobGlrZUNvbnRlbnQuaW5uZXJUZXh0KTtcbiAgICAgICAgY29uc3QgbmV3TmJyT2ZMaWtlcyA9IHByZXZpb3VzTmJyT2ZMaWtlcyArIDE7XG4gICAgICAgIGxpa2VDb250ZW50LmlubmVyVGV4dCA9IG5ld05ick9mTGlrZXM7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBzaG93Q29tbWVudFBvcFVwKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1vdmllcztcbiIsImNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcbmNvbnN0IGFwcElEID0gJ2c5ZVJ1Y3M1cXRLTGpmMHE2MG9xJztcbmNvbnN0IGFwcFVybCA9IGAke2Jhc2VVcmx9JHthcHBJRH0vbGlrZXNgO1xuXG5jb25zdCBnZXRBbGxMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGFwcFVybCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGdldE1vdmllTGlrZXMgPSBhc3luYyAobW92aWVJRCkgPT4ge1xuICBjb25zdCBhbGxMaWtlcyA9IGF3YWl0IGdldEFsbExpa2VzKCk7XG4gIGNvbnN0IGZpbHRlcmVkTGlrZXMgPSBhd2FpdCBhbGxMaWtlcy5maWx0ZXIoXG4gICAgKGl0ZW0pID0+IGl0ZW0uaXRlbV9pZCA9PT0gbW92aWVJRCxcbiAgKTtcbiAgcmV0dXJuIGZpbHRlcmVkTGlrZXNbMF0ubGlrZXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRNb3ZpZUxpa2VzO1xuIiwiY29uc3QgbW92aWVDb3VudGVyID0gKCkgPT4ge1xuICBjb25zdCB0b3RhbE1vdmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbE1vdmllcycpO1xuICB0b3RhbE1vdmllcy5pbm5lckhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHYtc2VjdGlvbicpLmxlbmd0aCArIDE7XG4gIHJldHVybiBOdW1iZXIodG90YWxNb3ZpZXMuaW5uZXJIVE1MKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmllQ291bnRlcjtcbiIsImNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcbmNvbnN0IGFwcElEID0gJ2c5ZVJ1Y3M1cXRLTGpmMHE2MG9xJztcbmNvbnN0IGFwcFVybCA9IGAke2Jhc2VVcmx9JHthcHBJRH0vbGlrZXNgO1xuXG5jb25zdCBwb3N0TGlrZXMgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGFwcFVybCwge1xuICAgIG1ldGhvZDogJ1Bvc3QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICB9KSxcbiAgfSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdDtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zdExpa2VzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9jc3MvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbWFnZXMvdG9kYXktdHYtc2VyaWVzLnBuZyc7XG5pbXBvcnQgZGlzcGxheU1vdmllcyBmcm9tICcuL21vZHVsZXMvbGlrZXMvZGlzcGxheU1vdmllcy5qcyc7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGRpc3BsYXlNb3ZpZXMoKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
