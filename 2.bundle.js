(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./markdown/intro.md":
/*!***************************!*\
  !*** ./markdown/intro.md ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<h2 id=\\\"herzlich-willkommen\\\">Herzlich Willkommen,</h2>\\n<p>die zahnärztliche Praxisgemeinschaft Dr. Karina Hilgner &amp; Markus Jansen begrüßt Sie ganz herzlich auf ihrer Internetseite.</p>\\n<p>Auf den folgenden Seiten möchten wir uns, unsere Praxis, unsere Philosophie sowie unser Team vorstellen.</p>\\n<p>Hier haben Sie die Möglichkeit, sich vorab zu informieren oder zu einem späteren Zeitpunkt (z.B. Verhaltensmaßregeln, Adressen, Notdienst, aktuelle Angebote oder Anamnese-Bögen) nachzuschlagen.</p>\\n<p>Sie haben noch Fragen oder möchten gerne detailliertere Informationen?</p>\\n<p>Bitte kontaktieren Sie uns einfach telefonisch. Gerne beantworten wir Ihre Fragen in einem persönlichen Beratungstermin.</p>\\n<p>Wir möchten, dass Sie sich wohlfühlen!</p>\\n<blockquote>\\n<p>In unserer Praxis setzen wir auf ein kompetentes Team und modernste Technik.\\nUm Ihre Zähne ein Leben lang gesund zu halten bieten wir ein breites Spektrum\\nan Behandlungen der Zahnheilkunde ab. \\nAuf dieser Homepage können Sie uns kennen lernen und sich umfassend informieren.</p>\\n</blockquote>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./markdown/intro.md?");

/***/ }),

/***/ "./src/views/index.ts":
/*!****************************!*\
  !*** ./src/views/index.ts ***!
  \****************************/
/*! exports provided: ViewIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ViewIndex\", function() { return ViewIndex; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ \"./node_modules/lit-element/lit-element.js\");\n/* harmony import */ var _page_view_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-view-element */ \"./src/views/page-view-element.ts\");\n/* harmony import */ var _components_section_intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/section-intro */ \"./src/components/section-intro.ts\");\n/* harmony import */ var _components_app_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/app-content */ \"./src/components/app-content.ts\");\n/* harmony import */ var _markdown_intro_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../markdown/intro.md */ \"./markdown/intro.md\");\n/* harmony import */ var _markdown_intro_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_markdown_intro_md__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nlet ViewIndex = class ViewIndex extends _page_view_element__WEBPACK_IMPORTED_MODULE_2__[\"PageViewElement\"] {\n    render() {\n        return lit_element__WEBPACK_IMPORTED_MODULE_1__[\"html\"] `\n      <section-intro></section-intro>\n      <app-content content=${_markdown_intro_md__WEBPACK_IMPORTED_MODULE_5___default.a}></app-content>\n    `;\n    }\n};\nViewIndex = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__[\"customElement\"])('view-index')\n], ViewIndex);\n\n\n\n//# sourceURL=webpack:///./src/views/index.ts?");

/***/ })

}]);