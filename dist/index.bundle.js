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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUQsT0FBTyxLQUFLLG9DQUFvQyx1QkFBdUIseURBQXlELE9BQU8sS0FBSyxXQUFXLDRGQUE0RixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsaUJBQWlCLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLHlCQUF5Qix1QkFBdUIsT0FBTyxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FB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Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQnpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0F5QjtBQUNhO0FBQ3VCOztBQUU3RDtBQUNBLEVBQUUsMkVBQWE7QUFDZiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0Ly4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3QvLi9zcmMvY3NzL2luZGV4LmNzcz9mN2VhIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3QvLi9zcmMvbW9kdWxlcy9jb21tZW50cy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzL2dldENvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3QvLi9zcmMvbW9kdWxlcy9jb21tZW50cy9nZXRNb3ZpZURldGFpbHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3QvLi9zcmMvbW9kdWxlcy9jb21tZW50cy9zaG93Q29tbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC8uL3NyYy9tb2R1bGVzL2xpa2VzL2Rpc3BsYXlNb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3QvLi9zcmMvbW9kdWxlcy9saWtlcy9nZXRMaWtlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC8uL3NyYy9tb2R1bGVzL2xpa2VzL21vdmllQ291bnRlci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC8uL3NyYy9tb2R1bGVzL2xpa2VzL3Bvc3RMaWtlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b24tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3Rvbi1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgaW5kZW50YXRpb24gKi9cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tY29sb3ItcHJpbWFyeTogd2hpdGU7XFxyXFxuICAtLWNvbG9yLXNlY29uZGFyeTogcmdiYSgwLCAwLCAwLCAwLjg5KTtcXHJcXG4gIC0tY29sb3ItdGVydGlhcnk6IHdoaXRlO1xcclxcbiAgLS1jb2xvci1mb250OiByZ2IoMjM3LCAyMjcsIDIyNyk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVBREVSICovXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBjb2xvcjogI2Y1ZjVkYztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzgyNjM7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDJyZW07XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBnYXA6IDE4cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSd0ZXh0J10sXFxyXFxubGksXFxyXFxuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTUwJTtcXHJcXG4gIGhlaWdodDogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYig1NiwgNTQsIDU0KTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDVweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbiBsaSB7XFxyXFxuICBtYXJnaW46IDAgMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxudWwubmF2aWdhdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG51bC5uYXZpZ2F0aW9uIGxpIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbiBsaTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbiBhIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG51bC5uYXZpZ2F0aW9uOmhvdmVyIGxpLFxcclxcbnVsLm5hdmlnYXRpb246Zm9jdXMgbGkge1xcclxcbiAgb3BhY2l0eTogMC4yO1xcclxcbiAgZmlsdGVyOiBibHVyKDJweCk7XFxyXFxufVxcclxcblxcclxcbnVsLm5hdmlnYXRpb24gbGk6aG92ZXIsXFxyXFxudWwubmF2aWdhdGlvbiBsaTpmb2N1cyB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgZmlsdGVyOiBibHVyKDApO1xcclxcbn0gLyogSEVBREVSICovXFxyXFxuXFxyXFxuZGl2LnR2LW1haW4taW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmltZy50di1tYWluLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnR2LWxpa2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLnR2LWxpa2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYudHYtb3RoZXItaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzgyNjM7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50di1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24jc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcclxcbiAgZ3JpZC1nYXA6IDFyZW07XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC1mYW1pbHk6XFxyXFxuIGN1cnNpdmUsXFxyXFxuIENlcmVicmlTYW5zLVJlZ3VsYXIsXFxyXFxuIC1hcHBsZS1zeXN0ZW0sXFxyXFxuIHN5c3RlbS11aSxcXHJcXG4gUm9ib3RvLFxcclxcbiAgICBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogN3B4IDIwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpIHJvdGF0ZSgtMWRlZyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgY29sb3I6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbi5oZWFydCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcclxcbiAgYm9yZGVyLWltYWdlOiByYWRpYWwtZ3JhZGllbnQocmVkIDY5JSwgIzAwMDAgNzAlKSA4NC41JSBmaWxsLzEwMCU7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oLTQxJSAwLCA1MCUgOTElLCAxNDElIDApO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuaGVhcnQ6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmhlYXJ0LWJ1dHRvbiB7XFxyXFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gcCB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uIGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgbWFyZ2luOiAxLjVyZW0gMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAxcHggcmdiKDIwNywgOTEsIDkxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQ6aG92ZXIge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbi5zaW5nbGUtbW92aWVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAyMCU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1yZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWJhbm5lci1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDM3MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtYmFubmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljODI2MztcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1saWtlcyBwIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLmZvb3Rlci1zZWN0aW9uIHAge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWJ0bnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1wcmltYXJ5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1zZWNvbmRhcnkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAxOTcsIDE5Nyk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE1LCAxOTcsIDE5Nyk7XFxyXFxufVxcclxcblxcclxcbi5idG4tcHJpbWFyeTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1saWtlcyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXFxyXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xcclxcbi5wb3B1cC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwM2I7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtbW92aWUtYmFubmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1tb3ZpZS1iYW5uZXItaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWF4LXdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZGVzY3JpcHRpb24ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFtuYW1lPSdjb21tZW50J10ge1xcclxcbiAgd2lkdGg6IDQwMCU7XFxyXFxuICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnRzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjUlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcXHJcXG4gIHdpZHRoOiAxMCU7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nc3VibWl0J10ge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb21tZW50LWZvcm0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xcclxcbiAgc2VjdGlvbiNzZWN0aW9uIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuICBzZWN0aW9uI3NlY3Rpb24ge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCBtaW5tYXgoMCwgMWZyKSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcXHJcXG4gIHNlY3Rpb24jc2VjdGlvbiB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIG1pbm1heCgwLCAxZnIpKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0NBQWtDOztBQUVsQztFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsdUJBQXVCO0VBQ3ZCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sVUFBVTtBQUNaOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLG1CQUFt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Q2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsZ0RBQWdEO0VBQ2xEO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdEQUFnRDtFQUNsRDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnREFBZ0Q7RUFDbEQ7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBpbmRlbnRhdGlvbiAqL1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1jb2xvci1wcmltYXJ5OiB3aGl0ZTtcXHJcXG4gIC0tY29sb3Itc2Vjb25kYXJ5OiByZ2JhKDAsIDAsIDAsIDAuODkpO1xcclxcbiAgLS1jb2xvci10ZXJ0aWFyeTogd2hpdGU7XFxyXFxuICAtLWNvbG9yLWZvbnQ6IHJnYigyMzcsIDIyNywgMjI3KTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIRUFERVIgKi9cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGNvbG9yOiAjZjVmNWRjO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljODI2MztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGdhcDogMThyZW07XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3RleHQnXSxcXHJcXG5saSxcXHJcXG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxNTAlO1xcclxcbiAgaGVpZ2h0OiA1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDU2LCA1NCwgNTQpO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggNXB4O1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgZm9udC1zaXplOiBtZWRpdW07XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uIGxpIHtcXHJcXG4gIG1hcmdpbjogMCAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG51bC5uYXZpZ2F0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbnVsLm5hdmlnYXRpb24gbGkge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uIGxpOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uIGEge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnVsLm5hdmlnYXRpb246aG92ZXIgbGksXFxyXFxudWwubmF2aWdhdGlvbjpmb2N1cyBsaSB7XFxyXFxuICBvcGFjaXR5OiAwLjI7XFxyXFxuICBmaWx0ZXI6IGJsdXIoMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxudWwubmF2aWdhdGlvbiBsaTpob3ZlcixcXHJcXG51bC5uYXZpZ2F0aW9uIGxpOmZvY3VzIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBmaWx0ZXI6IGJsdXIoMCk7XFxyXFxufSAvKiBIRUFERVIgKi9cXHJcXG5cXHJcXG5kaXYudHYtbWFpbi1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nLnR2LW1haW4taW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udHYtbGlrZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnNwYW4udHYtbGlrZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmRpdi50di1vdGhlci1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljODI2MztcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnR2LWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiNzZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxyXFxuICBncmlkLWdhcDogMXJlbTtcXHJcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LWZhbWlseTpcXHJcXG4gY3Vyc2l2ZSxcXHJcXG4gQ2VyZWJyaVNhbnMtUmVndWxhcixcXHJcXG4gLWFwcGxlLXN5c3RlbSxcXHJcXG4gc3lzdGVtLXVpLFxcclxcbiBSb2JvdG8sXFxyXFxuICAgIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiA3cHggMjBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcztcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgcm90YXRlKC0xZGVnKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBjb2xvcjogI2VlZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxyXFxuICBib3JkZXItaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZWQgNjklLCAjMDAwMCA3MCUpIDg0LjUlIGZpbGwvMTAwJTtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbigtNDElIDAsIDUwJSA5MSUsIDE0MSUgMCk7XFxyXFxufVxcclxcblxcclxcbmRpdi5oZWFydDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uaGVhcnQtYnV0dG9uIHtcXHJcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRpb24ge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRpb24gbGkgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udCk7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICBtYXJnaW46IDEuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDFweCByZ2IoMjA3LCA5MSwgOTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZDpob3ZlciB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS1tb3ZpZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLXJlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtYmFubmVyLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzcwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1iYW5uZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWM4MjYzO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWxpa2VzIHAge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIuZm9vdGVyLXNlY3Rpb24gcCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tYnRucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXByaW1hcnkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXNlY29uZGFyeSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDE5NywgMTk3KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTUsIDE5NywgMTk3KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWxpa2VzIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDAgMCAxMHB4IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cXHJcXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXFxyXFxuLnBvcHVwLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDAwMDAzYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1tb3ZpZS1iYW5uZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLW1vdmllLWJhbm5lci1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWRldGFpbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXgtd2lkdGg6IDkwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1kZXNjcmlwdGlvbiB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W25hbWU9J2NvbW1lbnQnXSB7XFxyXFxuICB3aWR0aDogNDAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudHMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyNSU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xcclxcbiAgd2lkdGg6IDEwJTtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbn1cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdzdWJtaXQnXSB7XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQtZm9ybSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XFxyXFxuICBzZWN0aW9uI3NlY3Rpb24ge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gIHNlY3Rpb24jc2VjdGlvbiB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIG1pbm1heCgwLCAxZnIpKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xcclxcbiAgc2VjdGlvbiNzZWN0aW9uIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgbWlubWF4KDAsIDFmcikpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChtb3ZpZUlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1Y5UEdIUzE5TmNsYVBJMHpicTdiL2NvbW1lbnRzP2l0ZW1faWQ9JHttb3ZpZUlkfWApO1xuICBjb25zdCBteUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7IC8vIGV4dHJhY3QgSlNPTiBmcm9tIHRoZSBodHRwIHJlc3BvXG5cbiAgcmV0dXJuIG15SnNvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvbW1lbnRzO1xuIiwiaW1wb3J0IHsgZ2V0TW92aWVEZXRhaWxzIH0gZnJvbSAnLi9nZXRNb3ZpZURldGFpbHMuanMnO1xuXG5jb25zdCBzaG93Q29tbWVudFBvcFVwID0gKCkgPT4ge1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xuXG4gIGNvbnN0IGNvbW1lbnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudCcpO1xuICBjb21tZW50QnV0dG9uLmZvckVhY2goKHN1Ym1pdEJ1dHRvbikgPT4ge1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IG1vdmllSWQgPSBldmVudC50YXJnZXQuaWQ7XG4gICAgICBnZXRNb3ZpZURldGFpbHMobW92aWVJZCk7XG4gICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcG9wdXAtY2xvc2UnKTtcbiAgY2xvc2VCdXR0b24uZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IHNob3dDb21tZW50UG9wVXA7XG4iLCJpbXBvcnQgc2hvd0NvbW1lbnQgZnJvbSAnLi9zaG93Q29tbWVudC5qcyc7XG5pbXBvcnQgZ2V0Q29tbWVudHMgZnJvbSAnLi9jb21tZW50cy5qcyc7XG5cbmNvbnN0IGdldE1vdmllRGV0YWlscyA9IGFzeW5jIChtb3ZpZUlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJHttb3ZpZUlkfWApO1xuICBjb25zdCBtb3ZpZURldGFpbHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbnRhaW5lcicpO1xuICBjb25zdCBtb3ZpZU5hbWUgPSBtb3ZpZURldGFpbHMubmFtZTtcbiAgY29uc3QgeyBzdW1tYXJ5IH0gPSBtb3ZpZURldGFpbHM7XG4gIGNvbnN0IHsgaW1hZ2UgfSA9IG1vdmllRGV0YWlscztcblxuICBsZXQgaW1hZ2VTcmMgPSAnaHR0cHM6Ly9zdGF0aWMudHZtYXplLmNvbS91cGxvYWRzL2ltYWdlcy9vcmlnaW5hbF91bnRvdWNoZWQvNTMvMTMzNjE1LmpwZyc7XG5cbiAgaWYgKGltYWdlICE9PSAnbnVsbCcpIHtcbiAgICBpZiAoaW1hZ2Uub3JpZ2luYWwgIT09ICdudWxsJykge1xuICAgICAgaW1hZ2VTcmMgPSBtb3ZpZURldGFpbHMuaW1hZ2Uub3JpZ2luYWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGltYWdlU3JjID0gbW92aWVEZXRhaWxzLmltYWdlLm1lZGl1bTtcbiAgICB9XG4gIH1cbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50cyhtb3ZpZUlkKTtcbiAgbGV0IHRvdGFsQ29tbWVudCA9IDA7XG4gIGlmIChjb21tZW50cy5sZW5ndGggPiAwKSB7XG4gICAgdG90YWxDb21tZW50ID0gY29tbWVudHMubGVuZ3RoO1xuICB9XG4gIGNvbnN0IGZpcnN0UGFydCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwicG9wdXAtbW92aWUtYmFubmVyXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3M9XCJwb3B1cC1tb3ZpZS1iYW5uZXItaW1nXCJcbiAgICAgICAgICAgIHNyYz1cIiR7aW1hZ2VTcmN9XCJcbiAgICAgICAgICAgIGFsdD1cIiR7bW92aWVOYW1lfSBCYW5uZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtZGV0YWlsc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC10aXRsZVwiPlxuICAgICAgICAgICAgPGgyPiR7bW92aWVOYW1lfTwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAke3N1bW1hcnl9IDxicj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1jb21tZW50c1wiPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwicG9wdXAtY29tbWVudHMtdGl0bGVcIj5cbiAgICAgICAgICAgICAgQ29tbWVudHM8c3BhbiBpZD1cImNvbW1lbnRDb250ZXJcIj4oPHNwYW4gaWQ9XCJ0b3RhbENvbW1lbnRcIj4ke3RvdGFsQ29tbWVudH08L3NwYW4+KTwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdS1jb21tZW50cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY29tbWVudC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICBgO1xuXG4gIGxldCBjb21tZW50TGlzdCA9ICcnO1xuICBmb3IgKGxldCBrID0gMDsgayA8IGNvbW1lbnRzLmxlbmd0aDsgayArPSAxKSB7XG4gICAgY29uc3QgdGVtcCA9IGA8bGk+JiMxMjg0ODkgJm5ic3AgJm5ic3AgJHtjb21tZW50c1trXS5jcmVhdGlvbl9kYXRlfSAke2NvbW1lbnRzW2tdLnVzZXJuYW1lfTombmJzcCAmbmJzcCAke2NvbW1lbnRzW2tdLmNvbW1lbnR9PC9saT5gO1xuICAgIGNvbW1lbnRMaXN0ICs9IHRlbXA7XG4gIH1cbiAgY29uc3Qgc2Vjb25kUGFydCA9IGBcbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1jb21tZW50LWZvcm1cIj5cbiAgICAgICAgICAgIDxmb3JtIGlkPVwiYWRkQ29tbWVudFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIG5hbWU9XCJtb3ZpZUlkXCIgdmFsdWU9XCIke21vdmllSWR9XCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY29tbWVudFwiIHBsYWNlaG9sZGVyPVwiYWRkIGNvbW1lbnRcIiBuYW1lPVwiY29tbWVudFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhZGRDb21tZW50XCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIj4mIzEyODQ5MDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gO1xuXG4gIHBvcHVwQ29udGFpbmVyLmlubmVySFRNTCA9IGZpcnN0UGFydCArIGNvbW1lbnRMaXN0ICsgc2Vjb25kUGFydDtcblxuICBjb25zdCBhZGRDb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZENvbW1lbnQnKTtcblxuICBhZGRDb21tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmFtZSA9IGFkZENvbW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hbWVcIl0nKS52YWx1ZTtcbiAgICBjb25zdCBjb21tZW50ID0gYWRkQ29tbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiY29tbWVudFwiXScpLnZhbHVlO1xuICAgIGNvbnN0IG1vdmllSWQgPSBhZGRDb21tZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJtb3ZpZUlkXCJdJykudmFsdWU7XG5cbiAgICBzaG93Q29tbWVudChtb3ZpZUlkLCBuYW1lLCBjb21tZW50KTtcblxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGNvbW1lbnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgY29tbWVudENvbnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbENvbW1lbnQnKTtcblxuICAgIGNvbnN0IHllID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuJywgeyB5ZWFyOiAnbnVtZXJpYycgfSkuZm9ybWF0KGQpO1xuICAgIGNvbnN0IG1vID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuJywgeyBtb250aDogJzItZGlnaXQnIH0pLmZvcm1hdChkKTtcbiAgICBjb25zdCBkYSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbicsIHsgZGF5OiAnMi1kaWdpdCcgfSkuZm9ybWF0KGQpO1xuICAgIGNvbW1lbnREZXNjcmlwdGlvbi5pbm5lckhUTUwgKz0gYDxsaT4ke3llfS0ke21vfS0ke2RhfSAgJHtuYW1lfTogICAke2NvbW1lbnR9PC9saT5gO1xuICAgIGNvbW1lbnRDb250ZXIuaW5uZXJIVE1MID0gTnVtYmVyKGNvbW1lbnRDb250ZXIuaW5uZXJIVE1MKSArIDE7XG4gICAgYWRkQ29tbWVudC5yZXNldCgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNvbW1lbnRzQ291bnRlciA9IChjb21tZW50cykgPT4ge1xuICBpZiAoIWNvbW1lbnRzLmxlbmd0aCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHJldHVybiBjb21tZW50cy5sZW5ndGg7XG59O1xuXG5leHBvcnQgeyBnZXRNb3ZpZURldGFpbHMsIGNvbW1lbnRzQ291bnRlciB9O1xuIiwiY29uc3Qgc2hvd0NvbW1lbnQgPSBhc3luYyAobW92aWVJZCwgbmFtZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgZGF0YSA9IGB7XCJpdGVtX2lkXCI6IFwiJHttb3ZpZUlkfVwiLCBcInVzZXJuYW1lXCI6IFwiJHtuYW1lfVwiLCBcImNvbW1lbnRcIjogXCIke2Rlc2NyaXB0aW9ufVwifWA7XG5cbiAgY29uc3QgbUJvZHkgPSBKU09OLnBhcnNlKGRhdGEpO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1Y5UEdIUzE5TmNsYVBJMHpicTdiL2NvbW1lbnRzLycsXG4gICAge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtQm9keSksXG5cbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9KU09OJyB9LFxuICAgIH0pO1xuICAvLyBhd2FpdCByZXNwb25zZTsgLy8gZXh0cmFjdCBKU09OIGZyb20gdGhlIGh0dHAgcmVzcG9uc2VcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd0NvbW1lbnQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IG1vdmllQ291bnRlciBmcm9tICcuL21vdmllQ291bnRlci5qcyc7XG5pbXBvcnQgcG9zdExpa2VzIGZyb20gJy4vcG9zdExpa2VzLmpzJztcbmltcG9ydCBnZXRNb3ZpZUxpa2VzIGZyb20gJy4vZ2V0TGlrZXMuanMnO1xuaW1wb3J0IHNob3dDb21tZW50UG9wVXAgZnJvbSAnLi4vY29tbWVudHMvZ2V0Q29tbWVudC5qcyc7XG5cbmNvbnN0IGRpc3BsYXlNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cycpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlY3Rpb24nKTtcbiAgcmVzcG9uc2UuZm9yRWFjaChhc3luYyAobW92aWUpID0+IHtcbiAgICBjb25zdCBtb3ZpZUlEID0gYCR7bW92aWUuaWR9YDtcbiAgICBjb25zdCBtb3ZpZUxpa2UgPSBhd2FpdCBnZXRNb3ZpZUxpa2VzKG1vdmllSUQpO1xuXG4gICAgbW92aWVDb3VudGVyKCk7XG5cbiAgICBzZWN0aW9uLmlubmVySFRNTCArPSBgXG4gICAgICA8c2VjdGlvbiBpZD0ke21vdmllLmlkfSBjbGFzcz1cInR2LXNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInR2LW1haW4taW5mbyB0di1kaXZcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIiR7bW92aWUuaW1hZ2UubWVkaXVtfVwiIGNsYXNzPVwidHYtbWFpbi1pbWdcIiBhbHQ9XCIke21vdmllLm5hbWV9XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0di1vdGhlci1pbmZvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInR2LWRpdlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwidHYtbmFtZVwiPiR7bW92aWUubmFtZX08L2gyPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0di1saWtlc1wiXG4gICAgICAgICAgICAgID48cCBpZD1cImxpa2UtJHttb3ZpZS5pZH1cIiBjbGFzcz1cInR2LW5ick9mTGlrZXNcIj4ke21vdmllTGlrZX08L3A+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJoZWFydC1idXR0b24gdHYtbGlrZXMtaW1nXCIgdHlwZT1cImJ1dHRvblwiPjxkaXYgY2xhc3M9XCJoZWFydFwiIGlkPSR7bW92aWUuaWR9PjwvZGl2PjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0di1kaXZcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9JHttb3ZpZS5pZH0gY2xhc3M9XCJjb21tZW50IGJ1dHRvblwiPiYjMTI4MTcyIENvbW1lbnRzPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVzZXJ2YXRpb24gYnV0dG9uXCI+UmVzZXJ2YXRpb248L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgYDtcblxuICAgIGNvbnN0IGxpa2VCdXR0b25zID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhcnQtYnV0dG9uJyk7XG4gICAgbGlrZUJ1dHRvbnMuZm9yRWFjaChhc3luYyAobGlrZUJ1dHRvbikgPT4ge1xuICAgICAgbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYXdhaXQgcG9zdExpa2VzKGUudGFyZ2V0LmlkKTtcbiAgICAgICAgY29uc3QgbGlrZUNvbnRlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNOYnJPZkxpa2VzID0gTnVtYmVyKGxpa2VDb250ZW50LmlubmVyVGV4dCk7XG4gICAgICAgIGNvbnN0IG5ld05ick9mTGlrZXMgPSBwcmV2aW91c05ick9mTGlrZXMgKyAxO1xuICAgICAgICBsaWtlQ29udGVudC5pbm5lclRleHQgPSBuZXdOYnJPZkxpa2VzO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc2hvd0NvbW1lbnRQb3BVcCgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNb3ZpZXM7XG4iLCJjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG5jb25zdCBhcHBJRCA9ICdnOWVSdWNzNXF0S0xqZjBxNjBvcSc7XG5jb25zdCBhcHBVcmwgPSBgJHtiYXNlVXJsfSR7YXBwSUR9L2xpa2VzYDtcblxuY29uc3QgZ2V0QWxsTGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChhcHBVcmwpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRNb3ZpZUxpa2VzID0gYXN5bmMgKG1vdmllSUQpID0+IHtcbiAgY29uc3QgYWxsTGlrZXMgPSBhd2FpdCBnZXRBbGxMaWtlcygpO1xuICBjb25zdCBmaWx0ZXJlZExpa2VzID0gYXdhaXQgYWxsTGlrZXMuZmlsdGVyKFxuICAgIChpdGVtKSA9PiBpdGVtLml0ZW1faWQgPT09IG1vdmllSUQsXG4gICk7XG4gIHJldHVybiBmaWx0ZXJlZExpa2VzWzBdLmxpa2VzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TW92aWVMaWtlcztcbiIsImNvbnN0IG1vdmllQ291bnRlciA9ICgpID0+IHtcbiAgY29uc3QgdG90YWxNb3ZpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWxNb3ZpZXMnKTtcbiAgdG90YWxNb3ZpZXMuaW5uZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnR2LXNlY3Rpb24nKS5sZW5ndGggKyAxO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbW92aWVDb3VudGVyO1xuIiwiY29uc3QgYmFzZVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuY29uc3QgYXBwSUQgPSAnZzllUnVjczVxdEtMamYwcTYwb3EnO1xuY29uc3QgYXBwVXJsID0gYCR7YmFzZVVybH0ke2FwcElEfS9saWtlc2A7XG5cbmNvbnN0IHBvc3RMaWtlcyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYXBwVXJsLCB7XG4gICAgbWV0aG9kOiAnUG9zdCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgIH0pLFxuICB9KTtcbiAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0O1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0TGlrZXM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2Nzcy9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL2ltYWdlcy90b2RheS10di1zZXJpZXMucG5nJztcbmltcG9ydCBkaXNwbGF5TW92aWVzIGZyb20gJy4vbW9kdWxlcy9saWtlcy9kaXNwbGF5TW92aWVzLmpzJztcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgZGlzcGxheU1vdmllcygpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==