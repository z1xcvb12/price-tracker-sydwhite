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
exports.id = "pages/api/item/[id]";
exports.ids = ["pages/api/item/[id]"];
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

/***/ "(api)/./pages/api/item/[id].ts":
/*!********************************!*\
  !*** ./pages/api/item/[id].ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/supabaseClient */ \"(api)/./lib/supabaseClient.ts\");\n// pages/api/item/[id].ts\n\nasync function handler(req, res) {\n    const { id  } = req.query;\n    if (!id || Array.isArray(id)) {\n        return res.status(400).json({\n            error: \"id 参数错误\"\n        });\n    }\n    // 从物化视图里取每日最低价\n    const { data , error  } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__.supabase.from(\"prices\").select(\"price_date, price\").eq(\"product_id\", id).order(\"price_date\", {\n        ascending: true\n    });\n    if (error) return res.status(500).json({\n        error: error.message\n    });\n    res.status(200).json(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaXRlbS9baWRdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUJBQXlCO0FBRTZCO0FBRXZDLGVBQWVDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDL0UsTUFBTSxFQUFFQyxHQUFFLEVBQUUsR0FBR0YsSUFBSUcsS0FBSztJQUN4QixJQUFJLENBQUNELE1BQU1FLE1BQU1DLE9BQU8sQ0FBQ0gsS0FBSztRQUM1QixPQUFPRCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBVTtJQUNqRCxDQUFDO0lBRUQsZUFBZTtJQUNmLE1BQU0sRUFBRUMsS0FBSSxFQUFFRCxNQUFLLEVBQUUsR0FBRyxNQUFNViw4REFDdkIsQ0FBQyxVQUNMYSxNQUFNLENBQUMscUJBQ1BDLEVBQUUsQ0FBQyxjQUFjVixJQUNqQlcsS0FBSyxDQUFDLGNBQWM7UUFBRUMsV0FBVyxJQUFJO0lBQUM7SUFFekMsSUFBSU4sT0FBTyxPQUFPUCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVDLE9BQU9BLE1BQU1PLE9BQU87SUFBQztJQUM5RGQsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0U7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ByaWNlLXRyYWNrZXIvLi9wYWdlcy9hcGkvaXRlbS9baWRdLnRzPzljNzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL2l0ZW0vW2lkXS50c1xyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdXBhYmFzZUNsaWVudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcclxuICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnlcclxuICBpZiAoIWlkIHx8IEFycmF5LmlzQXJyYXkoaWQpKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ2lkIOWPguaVsOmUmeivrycgfSlcclxuICB9XHJcblxyXG4gIC8vIOS7jueJqeWMluinhuWbvumHjOWPluavj+aXpeacgOS9juS7t1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbSgncHJpY2VzJylcclxuICAgIC5zZWxlY3QoJ3ByaWNlX2RhdGUsIHByaWNlJylcclxuICAgIC5lcSgncHJvZHVjdF9pZCcsIGlkKVxyXG4gICAgLm9yZGVyKCdwcmljZV9kYXRlJywgeyBhc2NlbmRpbmc6IHRydWUgfSlcclxuXHJcbiAgaWYgKGVycm9yKSByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KVxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpXHJcbn1cclxuIl0sIm5hbWVzIjpbInN1cGFiYXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImlkIiwicXVlcnkiLCJBcnJheSIsImlzQXJyYXkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJkYXRhIiwiZnJvbSIsInNlbGVjdCIsImVxIiwib3JkZXIiLCJhc2NlbmRpbmciLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/item/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/item/[id].ts"));
module.exports = __webpack_exports__;

})();