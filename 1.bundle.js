(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./markdown/about.md":
/*!***************************!*\
  !*** ./markdown/about.md ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<h1 id=\\\"zahnärzte\\\">Zahnärzte</h1>\\n<h2 id=\\\"dr-karina-hilgner-zahnärztin\\\">Dr. Karina Hilgner Zahnärztin</h2>\\n<p>1981<br>Abitur in Polen, Tarnowski Gory</p>\\n<p>1983<br>Abitur in Deutschland, Geilenkirchen</p>\\n<p>1983<br>Studium der Zahnmedizin an der Heinrich-Heine-Universität Düsseldorf</p>\\n<p>1989<br>Staatsexamen und Approbation als Zahnarzt</p>\\n<p>1989<br>Assistenzzeit in Düsseldorf und Mönchengladbach</p>\\n<p>1992<br>Niederlassung in eigener Praxis in Köln Volkhoven-Weiler</p>\\n<p>1996<br>Promotion</p>\\n<h4 id=\\\"mitgliedschaften\\\">Mitgliedschaften</h4>\\n<ul>\\n<li><p>Zahnärztekammer Nordrhein</p>\\n</li>\\n<li><p>Dt. Gesellschaft für Zahn-, Mund- und Kieferheilkunde</p>\\n</li>\\n<li><p>Dt. Gesellschaft für Kinderheilkunde</p>\\n</li>\\n<li><p>Zahnärzteinitiative Köln</p>\\n</li>\\n</ul>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./markdown/about.md?");

/***/ }),

/***/ "./src/views/about.ts":
/*!****************************!*\
  !*** ./src/views/about.ts ***!
  \****************************/
/*! exports provided: ViewAbout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ViewAbout\", function() { return ViewAbout; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ \"./node_modules/lit-element/lit-element.js\");\n/* harmony import */ var _page_view_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-view-element */ \"./src/views/page-view-element.ts\");\n/* harmony import */ var _components_section_intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/section-intro */ \"./src/components/section-intro.ts\");\n/* harmony import */ var _components_app_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/app-content */ \"./src/components/app-content.ts\");\n/* harmony import */ var _markdown_about_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../markdown/about.md */ \"./markdown/about.md\");\n/* harmony import */ var _markdown_about_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_markdown_about_md__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nlet ViewAbout = class ViewAbout extends _page_view_element__WEBPACK_IMPORTED_MODULE_2__[\"PageViewElement\"] {\n    render() {\n        return lit_element__WEBPACK_IMPORTED_MODULE_1__[\"html\"] `\n      <app-content content=${_markdown_about_md__WEBPACK_IMPORTED_MODULE_5___default.a}></app-content>\n      <app-content content=${_markdown_about_md__WEBPACK_IMPORTED_MODULE_5___default.a}></app-content>\n    `;\n    }\n};\nViewAbout = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__[\"customElement\"])('view-about')\n], ViewAbout);\n\n\n\n//# sourceURL=webpack:///./src/views/about.ts?");

/***/ })

}]);