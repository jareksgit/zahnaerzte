(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/views/notfound.ts":
/*!*******************************!*\
  !*** ./src/views/notfound.ts ***!
  \*******************************/
/*! exports provided: ViewNotfound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ViewNotfound\", function() { return ViewNotfound; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ \"./node_modules/lit-element/lit-element.js\");\n/* harmony import */ var _page_view_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-view-element */ \"./src/views/page-view-element.ts\");\n\n\n\nlet ViewNotfound = class ViewNotfound extends _page_view_element__WEBPACK_IMPORTED_MODULE_2__[\"PageViewElement\"] {\n    render() {\n        return lit_element__WEBPACK_IMPORTED_MODULE_1__[\"html\"] `\n      <section>\n        <h2>Oops! You hit a 404</h2>\n        <p>\n          The page you're looking for doesn't seem to exist. Head back\n          <a href=\"/\">home</a> and try again?\n        </p>\n      </section>\n    `;\n    }\n};\nViewNotfound = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__[\"customElement\"])('view-notfound')\n], ViewNotfound);\n\n\n\n//# sourceURL=webpack:///./src/views/notfound.ts?");

/***/ }),

/***/ "./src/views/page-view-element.ts":
/*!****************************************!*\
  !*** ./src/views/page-view-element.ts ***!
  \****************************************/
/*! exports provided: PageViewElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PageViewElement\", function() { return PageViewElement; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ \"./node_modules/lit-element/lit-element.js\");\n\n\nclass PageViewElement extends lit_element__WEBPACK_IMPORTED_MODULE_1__[\"LitElement\"] {\n    constructor() {\n        super(...arguments);\n        this.active = false;\n    }\n    // Only render this page if it's actually visible.\n    shouldUpdate() {\n        return this.active;\n    }\n}\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__[\"property\"])({ type: Boolean })\n], PageViewElement.prototype, \"active\", void 0);\n\n\n//# sourceURL=webpack:///./src/views/page-view-element.ts?");

/***/ })

}]);