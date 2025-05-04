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
exports.id = "pages/item/[id]";
exports.ids = ["pages/item/[id]"];
exports.modules = {

/***/ "./pages/item/[id].tsx":
/*!*****************************!*\
  !*** ./pages/item/[id].tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ItemPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"react-chartjs-2\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ \"chart.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__, chart_js__WEBPACK_IMPORTED_MODULE_4__]);\n([swr__WEBPACK_IMPORTED_MODULE_2__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__, chart_js__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// pages/item/[id].tsx\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_4__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_4__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_4__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_4__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_4__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_4__.Title, chart_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_4__.Legend);\nconst fetcher = (url)=>fetch(url).then((res)=>res.json());\nfunction ItemPage() {\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const id = Array.isArray(query.id) ? query.id[0] : query.id;\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>id ? `/api/item/${encodeURIComponent(id)}` : null, fetcher);\n    if (!id) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"加载中…\"\n    }, void 0, false, {\n        fileName: \"D:\\\\OneDrive\\\\Backup\\\\sydwhite\\\\price-tracker\\\\pages\\\\item\\\\[id].tsx\",\n        lineNumber: 37,\n        columnNumber: 19\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"加载出错: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\OneDrive\\\\Backup\\\\sydwhite\\\\price-tracker\\\\pages\\\\item\\\\[id].tsx\",\n        lineNumber: 38,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"加载中…\"\n    }, void 0, false, {\n        fileName: \"D:\\\\OneDrive\\\\Backup\\\\sydwhite\\\\price-tracker\\\\pages\\\\item\\\\[id].tsx\",\n        lineNumber: 39,\n        columnNumber: 21\n    }, this);\n    // data 是 [{ date: \"...\", price: number }, …]\n    const labels = data.map((p)=>p.date);\n    const prices = data.map((p)=>p.price);\n    const chartData = {\n        labels,\n        datasets: [\n            {\n                label: \"价格\",\n                data: prices,\n                fill: false\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Price History\"\n            }, void 0, false, {\n                fileName: \"D:\\\\OneDrive\\\\Backup\\\\sydwhite\\\\price-tracker\\\\pages\\\\item\\\\[id].tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                data: chartData\n            }, void 0, false, {\n                fileName: \"D:\\\\OneDrive\\\\Backup\\\\sydwhite\\\\price-tracker\\\\pages\\\\item\\\\[id].tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\OneDrive\\\\Backup\\\\sydwhite\\\\price-tracker\\\\pages\\\\item\\\\[id].tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pdGVtL1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0JBQXNCO0FBQ3RCO0FBQXVDO0FBQ2Y7QUFDYztBQVVyQjtBQUVqQkksb0RBQWdCLENBQ2RDLG1EQUFhQSxFQUNiQyxpREFBV0EsRUFDWEMsa0RBQVlBLEVBQ1pDLGlEQUFXQSxFQUNYQywyQ0FBS0EsRUFDTEMsNkNBQU9BLEVBQ1BDLDRDQUFNQTtBQUdSLE1BQU1FLFVBQVUsQ0FBQ0MsTUFBZ0JDLE1BQU1ELEtBQUtFLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSTtBQUVqRCxTQUFTQyxXQUFXO0lBQ2pDLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUdwQixzREFBU0E7SUFDM0IsTUFBTXFCLEtBQUtDLE1BQU1DLE9BQU8sQ0FBQ0gsTUFBTUMsRUFBRSxJQUFJRCxNQUFNQyxFQUFFLENBQUMsRUFBRSxHQUFHRCxNQUFNQyxFQUFFO0lBRTNELE1BQU0sRUFBRUcsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR3hCLCtDQUFNQSxDQUM1QixJQUFNb0IsS0FBSyxDQUFDLFVBQVUsRUFBRUssbUJBQW1CTCxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQ3ZEUjtJQUdGLElBQUksQ0FBQ1EsSUFBSSxxQkFBTyw4REFBQ007a0JBQUU7Ozs7OztJQUNuQixJQUFJRixPQUFPLHFCQUFPLDhEQUFDRTs7WUFBRTtZQUFPRixNQUFNRyxPQUFPOzs7Ozs7O0lBQ3pDLElBQUksQ0FBQ0osTUFBTSxxQkFBTyw4REFBQ0c7a0JBQUU7Ozs7OztJQUVyQiw2Q0FBNkM7SUFDN0MsTUFBTUUsU0FBU0wsS0FBS00sR0FBRyxDQUFDLENBQUNILElBQVdBLEVBQUVJLElBQUk7SUFDMUMsTUFBTUMsU0FBU1IsS0FBS00sR0FBRyxDQUFDLENBQUNILElBQVdBLEVBQUVNLEtBQUs7SUFFM0MsTUFBTUMsWUFBWTtRQUNoQkw7UUFDQU0sVUFBVTtZQUNSO2dCQUNFQyxPQUFPO2dCQUNQWixNQUFNUTtnQkFDTkssTUFBTSxLQUFLO1lBQ2I7U0FDRDtJQUNIO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBMEI7Ozs7OzswQkFDeEMsOERBQUNyQyxpREFBSUE7Z0JBQUNzQixNQUFNVTs7Ozs7Ozs7Ozs7O0FBR2xCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmljZS10cmFja2VyLy4vcGFnZXMvaXRlbS9baWRdLnRzeD9lN2FlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2l0ZW0vW2lkXS50c3hcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJ1xyXG5pbXBvcnQge1xyXG4gIENoYXJ0IGFzIENoYXJ0SlMsXHJcbiAgQ2F0ZWdvcnlTY2FsZSxcclxuICBMaW5lYXJTY2FsZSxcclxuICBQb2ludEVsZW1lbnQsXHJcbiAgTGluZUVsZW1lbnQsXHJcbiAgVGl0bGUsXHJcbiAgVG9vbHRpcCxcclxuICBMZWdlbmRcclxufSBmcm9tICdjaGFydC5qcydcclxuXHJcbkNoYXJ0SlMucmVnaXN0ZXIoXHJcbiAgQ2F0ZWdvcnlTY2FsZSxcclxuICBMaW5lYXJTY2FsZSxcclxuICBQb2ludEVsZW1lbnQsXHJcbiAgTGluZUVsZW1lbnQsXHJcbiAgVGl0bGUsXHJcbiAgVG9vbHRpcCxcclxuICBMZWdlbmRcclxuKVxyXG5cclxuY29uc3QgZmV0Y2hlciA9ICh1cmw6IHN0cmluZykgPT4gZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbVBhZ2UoKSB7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKClcclxuICBjb25zdCBpZCA9IEFycmF5LmlzQXJyYXkocXVlcnkuaWQpID8gcXVlcnkuaWRbMF0gOiBxdWVyeS5pZFxyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAoKSA9PiBpZCA/IGAvYXBpL2l0ZW0vJHtlbmNvZGVVUklDb21wb25lbnQoaWQpfWAgOiBudWxsLFxyXG4gICAgZmV0Y2hlclxyXG4gIClcclxuXHJcbiAgaWYgKCFpZCkgcmV0dXJuIDxwPuWKoOi9veS4reKApjwvcD5cclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD7liqDovb3lh7rplJk6IHtlcnJvci5tZXNzYWdlfTwvcD5cclxuICBpZiAoIWRhdGEpIHJldHVybiA8cD7liqDovb3kuK3igKY8L3A+XHJcblxyXG4gIC8vIGRhdGEg5pivIFt7IGRhdGU6IFwiLi4uXCIsIHByaWNlOiBudW1iZXIgfSwg4oCmXVxyXG4gIGNvbnN0IGxhYmVscyA9IGRhdGEubWFwKChwOiBhbnkpID0+IHAuZGF0ZSlcclxuICBjb25zdCBwcmljZXMgPSBkYXRhLm1hcCgocDogYW55KSA9PiBwLnByaWNlKVxyXG5cclxuICBjb25zdCBjaGFydERhdGEgPSB7XHJcbiAgICBsYWJlbHMsXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICfku7fmoLwnLFxyXG4gICAgICAgIGRhdGE6IHByaWNlcyxcclxuICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPlByaWNlIEhpc3Rvcnk8L2gxPlxyXG4gICAgICA8TGluZSBkYXRhPXtjaGFydERhdGF9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVNXUiIsIkxpbmUiLCJDaGFydCIsIkNoYXJ0SlMiLCJDYXRlZ29yeVNjYWxlIiwiTGluZWFyU2NhbGUiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIlRpdGxlIiwiVG9vbHRpcCIsIkxlZ2VuZCIsInJlZ2lzdGVyIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJJdGVtUGFnZSIsInF1ZXJ5IiwiaWQiLCJBcnJheSIsImlzQXJyYXkiLCJkYXRhIiwiZXJyb3IiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwIiwibWVzc2FnZSIsImxhYmVscyIsIm1hcCIsImRhdGUiLCJwcmljZXMiLCJwcmljZSIsImNoYXJ0RGF0YSIsImRhdGFzZXRzIiwibGFiZWwiLCJmaWxsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/item/[id].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "chart.js":
/*!***************************!*\
  !*** external "chart.js" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("chart.js");;

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-chartjs-2");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/item/[id].tsx"));
module.exports = __webpack_exports__;

})();