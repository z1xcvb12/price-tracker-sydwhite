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
exports.id = "pages/api/search";
exports.ids = ["pages/api/search"];
exports.modules = {

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "(api)/./lib/supabaseClient.ts":
/*!*******************************!*\
  !*** ./lib/supabaseClient.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst url = \"https://dwvyznvfvtdwoywhkuqx.supabase.co\";\nconst anonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3dnl6bnZmdnRkd295d2hrdXF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxODQ2MzUsImV4cCI6MjA2MTc2MDYzNX0.3XJYJL92s5SveSmdMVfM90MV0FKdMMFuzOBgbkTh9t4\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(url, anonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc3VwYWJhc2VDbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9EO0FBRXBELE1BQU1DLE1BQU1DLDBDQUFvQztBQUNoRCxNQUFNRyxVQUFVSCxrTkFBeUM7QUFFbEQsTUFBTUssV0FBV1AsbUVBQVlBLENBQUNDLEtBQUtJLFNBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmljZS10cmFja2VyLy4vbGliL3N1cGFiYXNlQ2xpZW50LnRzPzNhN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJ1xyXG5cclxuY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIVxyXG5jb25zdCBhbm9uS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkhXHJcblxyXG5leHBvcnQgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQodXJsLCBhbm9uS2V5KVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwidXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsImFub25LZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsInN1cGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/supabaseClient.ts\n");

/***/ }),

/***/ "(api)/./pages/api/search.ts":
/*!*****************************!*\
  !*** ./pages/api/search.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/supabaseClient */ \"(api)/./lib/supabaseClient.ts\");\n// pages/api/search.ts\n\nasync function handler(req, res) {\n    const q = Array.isArray(req.query.q) ? req.query.q[0] : req.query.q;\n    console.log(\"\\uD83D\\uDD0D Received q =\", q);\n    if (!q) return res.status(400).json({\n        error: \"q 参数必填\"\n    });\n    const { data , error  } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__.supabase.rpc(\"search_products\", {\n        q\n    });\n    console.log(\"\\uD83D\\uDCBE supabase.rpc result — data:\", data, \" error:\", error);\n    if (error) return res.status(500).json({\n        error: error.message\n    });\n    res.status(200).json(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0JBQXNCO0FBRTZCO0FBRXBDLGVBQWVDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDL0UsTUFBTUMsSUFBSUMsTUFBTUMsT0FBTyxDQUFDSixJQUFJSyxLQUFLLENBQUNILENBQUMsSUFBSUYsSUFBSUssS0FBSyxDQUFDSCxDQUFDLENBQUMsRUFBRSxHQUFHRixJQUFJSyxLQUFLLENBQUNILENBQUM7SUFDbkVJLFFBQVFDLEdBQUcsQ0FBQyw2QkFBa0JMO0lBRTlCLElBQUksQ0FBQ0EsR0FBRyxPQUFPRCxJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBUztJQUV0RCxNQUFNLEVBQUVDLEtBQUksRUFBRUQsTUFBSyxFQUFFLEdBQUcsTUFBTVosNkRBQVksQ0FBQyxtQkFBbUI7UUFBRUk7SUFBRTtJQUNsRUksUUFBUUMsR0FBRyxDQUFDLDRDQUFpQ0ksTUFBTSxXQUFXRDtJQUU5RCxJQUFJQSxPQUFPLE9BQU9ULElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsT0FBT0EsTUFBTUcsT0FBTztJQUFDO0lBQzlEWixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRTtBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJpY2UtdHJhY2tlci8uL3BhZ2VzL2FwaS9zZWFyY2gudHM/N2EwOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvc2VhcmNoLnRzXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnLi4vLi4vbGliL3N1cGFiYXNlQ2xpZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xyXG4gIGNvbnN0IHEgPSBBcnJheS5pc0FycmF5KHJlcS5xdWVyeS5xKSA/IHJlcS5xdWVyeS5xWzBdIDogcmVxLnF1ZXJ5LnFcclxuICBjb25zb2xlLmxvZygn8J+UjSBSZWNlaXZlZCBxID0nLCBxKVxyXG5cclxuICBpZiAoIXEpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAncSDlj4LmlbDlv4XloasnIH0pXHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnJwYygnc2VhcmNoX3Byb2R1Y3RzJywgeyBxIH0pXHJcbiAgY29uc29sZS5sb2coJ/Cfkr4gc3VwYWJhc2UucnBjIHJlc3VsdCDigJQgZGF0YTonLCBkYXRhLCAnIGVycm9yOicsIGVycm9yKVxyXG5cclxuICBpZiAoZXJyb3IpIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSlcclxufVxyXG4iXSwibmFtZXMiOlsic3VwYWJhc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicSIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImRhdGEiLCJycGMiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/search.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/search.ts"));
module.exports = __webpack_exports__;

})();