"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "instrumentation";
exports.ids = ["instrumentation"];
exports.modules = {

/***/ "./instrumentation.ts":
/*!****************************!*\
  !*** ./instrumentation.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   onRequestError: () => (/* binding */ onRequestError),\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/nextjs */ \"@sentry/nextjs\");\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);\nglobalThis[\"_sentryRewritesTunnelPath\"] = undefined;\nglobalThis[\"SENTRY_RELEASE\"] = undefined;\nglobalThis[\"_sentryBasePath\"] = undefined;\nglobalThis[\"_sentryRewriteFramesDistDir\"] = \".next\";\n\nasync function register() {\n    if (true) {\n        await __webpack_require__.e(/*! import() */ \"sentry_server_config_ts\").then(__webpack_require__.bind(__webpack_require__, /*! ./sentry.server.config */ \"./sentry.server.config.ts\"));\n    }\n    if (false) {}\n}\nconst onRequestError = _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.captureRequestError;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbnN0cnVtZW50YXRpb24udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFDQSxVQUFVLENBQUMsNEJBQTRCLEdBQUdDO0FBQVVELFVBQVUsQ0FBQyxpQkFBaUIsR0FBR0M7QUFBVUQsVUFBVSxDQUFDLGtCQUFrQixHQUFHQztBQUFVRCxVQUFVLENBQUMsOEJBQThCLEdBQUc7QUFBaUQ7QUFFOU4sZUFBZUc7SUFDcEIsSUFBSUMsSUFBNkIsRUFBVTtRQUN6QyxNQUFNLCtLQUFPO0lBQ2Y7SUFFQSxJQUFJQSxLQUE2QixFQUFRLEVBRXhDO0FBQ0g7QUFFTyxNQUFNRyxpQkFBaUJMLCtEQUEwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vaW5zdHJ1bWVudGF0aW9uLnRzP2Q3ZDciXSwic291cmNlc0NvbnRlbnQiOlsiO2dsb2JhbFRoaXNbXCJfc2VudHJ5UmV3cml0ZXNUdW5uZWxQYXRoXCJdID0gdW5kZWZpbmVkO2dsb2JhbFRoaXNbXCJTRU5UUllfUkVMRUFTRVwiXSA9IHVuZGVmaW5lZDtnbG9iYWxUaGlzW1wiX3NlbnRyeUJhc2VQYXRoXCJdID0gdW5kZWZpbmVkO2dsb2JhbFRoaXNbXCJfc2VudHJ5UmV3cml0ZUZyYW1lc0Rpc3REaXJcIl0gPSBcIi5uZXh0XCI7aW1wb3J0ICogYXMgU2VudHJ5IGZyb20gJ0BzZW50cnkvbmV4dGpzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTkVYVF9SVU5USU1FID09PSAnbm9kZWpzJykge1xuICAgIGF3YWl0IGltcG9ydCgnLi9zZW50cnkuc2VydmVyLmNvbmZpZycpO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSA9PT0gJ2VkZ2UnKSB7XG4gICAgYXdhaXQgaW1wb3J0KCcuL3NlbnRyeS5lZGdlLmNvbmZpZycpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBvblJlcXVlc3RFcnJvciA9IFNlbnRyeS5jYXB0dXJlUmVxdWVzdEVycm9yO1xuIl0sIm5hbWVzIjpbImdsb2JhbFRoaXMiLCJ1bmRlZmluZWQiLCJTZW50cnkiLCJyZWdpc3RlciIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1JVTlRJTUUiLCJvblJlcXVlc3RFcnJvciIsImNhcHR1cmVSZXF1ZXN0RXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./instrumentation.ts\n");

/***/ }),

/***/ "@sentry/nextjs":
/*!*********************************!*\
  !*** external "@sentry/nextjs" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sentry/nextjs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./instrumentation.ts"));
module.exports = __webpack_exports__;

})();