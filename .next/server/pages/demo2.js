module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/demo2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/utils/illustration.js":
/*!******************************************!*\
  !*** ./components/utils/illustration.js ***!
  \******************************************/
/*! exports provided: SmallIllustration, BigIllustration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SmallIllustration\", function() { return SmallIllustration; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BigIllustration\", function() { return BigIllustration; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/stenolmre/Desktop/learn/components/utils/illustration.js\";\n\n\n\nconst SmallIllustration = () => {\n  const n = 25;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-1302100775\" + \" \" + \"illustration_small\",\n    children: [[...Array(n)].map((e, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-1302100775\" + \" \" + \"illustration_dot\"\n    }, i, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 35\n    }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1302100775\",\n      children: \".illustration_small.jsx-1302100775{width:150px;height:100px;display:grid;grid-template-columns:repeat(5,1fr);place-items:center;position:relative;z-index:-1;}.illustration_dot.jsx-1302100775{width:10px;height:10px;border-radius:100%;background:var(--dodgerblue);opacity:.2;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVub2xtcmUvRGVza3RvcC9sZWFybi9jb21wb25lbnRzL3V0aWxzL2lsbHVzdHJhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTZ0IsQUFHcUIsQUFVRCxXQUNDLENBVkMsV0FXTSxFQVZOLGFBQ3dCLElBVVIsNkJBQ2xCLEdBVlEsUUFXckIsV0FWb0Isa0JBQ1AsV0FDYiIsImZpbGUiOiIvVXNlcnMvc3Rlbm9sbXJlL0Rlc2t0b3AvbGVhcm4vY29tcG9uZW50cy91dGlscy9pbGx1c3RyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFNtYWxsSWxsdXN0cmF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBuID0gMjVcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJpbGx1c3RyYXRpb25fc21hbGxcIj5cbiAgICB7XG4gICAgICBbLi4uQXJyYXkobildLm1hcCgoZSwgaSkgPT4gPGRpdiBjbGFzc05hbWU9XCJpbGx1c3RyYXRpb25fZG90XCIga2V5PXtpfS8+KVxuICAgIH1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuaWxsdXN0cmF0aW9uX3NtYWxsIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgfVxuXG4gICAgICAuaWxsdXN0cmF0aW9uX2RvdCB7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRvZGdlcmJsdWUpO1xuICAgICAgICBvcGFjaXR5OiAuMjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxufVxuXG5jb25zdCBCaWdJbGx1c3RyYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG4gPSAxMDBcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJpbGx1c3RyYXRpb25fYmlnXCI+XG4gICAge1xuICAgICAgWy4uLkFycmF5KG4pXS5tYXAoKGUsIGkpID0+IDxkaXYgY2xhc3NOYW1lPVwiaWxsdXN0cmF0aW9uX2RvdFwiIGtleT17aX0vPilcbiAgICB9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmlsbHVzdHJhdGlvbl9iaWcge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgfVxuXG4gICAgICAuaWxsdXN0cmF0aW9uX2RvdCB7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRvZGdlcmJsdWUpO1xuICAgICAgICBvcGFjaXR5OiAuMjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxufVxuXG5leHBvcnQgeyBTbWFsbElsbHVzdHJhdGlvbiwgQmlnSWxsdXN0cmF0aW9uIH1cbiJdfQ== */\\n/*@ sourceURL=/Users/stenolmre/Desktop/learn/components/utils/illustration.js */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 10\n  }, undefined);\n};\n\nconst BigIllustration = () => {\n  const n = 100;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-3531470631\" + \" \" + \"illustration_big\",\n    children: [[...Array(n)].map((e, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-3531470631\" + \" \" + \"illustration_dot\"\n    }, i, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 35\n    }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3531470631\",\n      children: \".illustration_big.jsx-3531470631{width:300px;height:200px;display:grid;grid-template-columns:repeat(10,1fr);place-items:center;position:relative;z-index:-1;}.illustration_dot.jsx-3531470631{width:10px;height:10px;border-radius:100%;background:var(--dodgerblue);opacity:.2;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVub2xtcmUvRGVza3RvcC9sZWFybi9jb21wb25lbnRzL3V0aWxzL2lsbHVzdHJhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ2dCLEFBR3FCLEFBVUQsV0FDQyxDQVZDLFdBV00sRUFWTixhQUN5QixJQVVULDZCQUNsQixJQVZRLE9BV3JCLFlBVm9CLGtCQUNQLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL3N0ZW5vbG1yZS9EZXNrdG9wL2xlYXJuL2NvbXBvbmVudHMvdXRpbHMvaWxsdXN0cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBTbWFsbElsbHVzdHJhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgbiA9IDI1XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaWxsdXN0cmF0aW9uX3NtYWxsXCI+XG4gICAge1xuICAgICAgWy4uLkFycmF5KG4pXS5tYXAoKGUsIGkpID0+IDxkaXYgY2xhc3NOYW1lPVwiaWxsdXN0cmF0aW9uX2RvdFwiIGtleT17aX0vPilcbiAgICB9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmlsbHVzdHJhdGlvbl9zbWFsbCB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgIH1cblxuICAgICAgLmlsbHVzdHJhdGlvbl9kb3Qge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kb2RnZXJibHVlKTtcbiAgICAgICAgb3BhY2l0eTogLjI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbn1cblxuY29uc3QgQmlnSWxsdXN0cmF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBuID0gMTAwXG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaWxsdXN0cmF0aW9uX2JpZ1wiPlxuICAgIHtcbiAgICAgIFsuLi5BcnJheShuKV0ubWFwKChlLCBpKSA9PiA8ZGl2IGNsYXNzTmFtZT1cImlsbHVzdHJhdGlvbl9kb3RcIiBrZXk9e2l9Lz4pXG4gICAgfVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5pbGx1c3RyYXRpb25fYmlnIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgIH1cblxuICAgICAgLmlsbHVzdHJhdGlvbl9kb3Qge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kb2RnZXJibHVlKTtcbiAgICAgICAgb3BhY2l0eTogLjI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbn1cblxuZXhwb3J0IHsgU21hbGxJbGx1c3RyYXRpb24sIEJpZ0lsbHVzdHJhdGlvbiB9XG4iXX0= */\\n/*@ sourceURL=/Users/stenolmre/Desktop/learn/components/utils/illustration.js */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 10\n  }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3V0aWxzL2lsbHVzdHJhdGlvbi5qcz80ZjAzIl0sIm5hbWVzIjpbIlNtYWxsSWxsdXN0cmF0aW9uIiwibiIsIkFycmF5IiwibWFwIiwiZSIsImkiLCJCaWdJbGx1c3RyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLGlCQUFpQixHQUFHLE1BQU07QUFDOUIsUUFBTUMsQ0FBQyxHQUFHLEVBQVY7QUFFQSxzQkFBTztBQUFBLHdDQUFlLG9CQUFmO0FBQUEsZUFFSCxDQUFDLEdBQUdDLEtBQUssQ0FBQ0QsQ0FBRCxDQUFULEVBQWNFLEdBQWQsQ0FBa0IsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLGtCQUFVO0FBQUEsMENBQWU7QUFBZixPQUF1Q0EsQ0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBNUIsQ0FGRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQXdCRCxDQTNCRDs7QUE2QkEsTUFBTUMsZUFBZSxHQUFHLE1BQU07QUFDNUIsUUFBTUwsQ0FBQyxHQUFHLEdBQVY7QUFFQSxzQkFBTztBQUFBLHdDQUFlLGtCQUFmO0FBQUEsZUFFSCxDQUFDLEdBQUdDLEtBQUssQ0FBQ0QsQ0FBRCxDQUFULEVBQWNFLEdBQWQsQ0FBa0IsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLGtCQUFVO0FBQUEsMENBQWU7QUFBZixPQUF1Q0EsQ0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBNUIsQ0FGRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQXdCRCxDQTNCRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvdXRpbHMvaWxsdXN0cmF0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBTbWFsbElsbHVzdHJhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgbiA9IDI1XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaWxsdXN0cmF0aW9uX3NtYWxsXCI+XG4gICAge1xuICAgICAgWy4uLkFycmF5KG4pXS5tYXAoKGUsIGkpID0+IDxkaXYgY2xhc3NOYW1lPVwiaWxsdXN0cmF0aW9uX2RvdFwiIGtleT17aX0vPilcbiAgICB9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmlsbHVzdHJhdGlvbl9zbWFsbCB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgIH1cblxuICAgICAgLmlsbHVzdHJhdGlvbl9kb3Qge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kb2RnZXJibHVlKTtcbiAgICAgICAgb3BhY2l0eTogLjI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbn1cblxuY29uc3QgQmlnSWxsdXN0cmF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBuID0gMTAwXG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaWxsdXN0cmF0aW9uX2JpZ1wiPlxuICAgIHtcbiAgICAgIFsuLi5BcnJheShuKV0ubWFwKChlLCBpKSA9PiA8ZGl2IGNsYXNzTmFtZT1cImlsbHVzdHJhdGlvbl9kb3RcIiBrZXk9e2l9Lz4pXG4gICAgfVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5pbGx1c3RyYXRpb25fYmlnIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgIH1cblxuICAgICAgLmlsbHVzdHJhdGlvbl9kb3Qge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kb2RnZXJibHVlKTtcbiAgICAgICAgb3BhY2l0eTogLjI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbn1cblxuZXhwb3J0IHsgU21hbGxJbGx1c3RyYXRpb24sIEJpZ0lsbHVzdHJhdGlvbiB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/utils/illustration.js\n");

/***/ }),

/***/ "./pages/demo2.js":
/*!************************!*\
  !*** ./pages/demo2.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _illustration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/illustration */ \"./components/utils/illustration.js\");\n\nvar _jsxFileName = \"/Users/stenolmre/Desktop/learn/pages/demo2.js\";\n\n\n\nconst Demo2 = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_illustration__WEBPACK_IMPORTED_MODULE_2__[\"BigIllustration\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demo2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZW1vMi5qcz8zMDM1Il0sIm5hbWVzIjpbIkRlbW8yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFDbEIsc0JBQU8scUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGRDs7QUFJZUEsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9kZW1vMi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgU21hbGxJbGx1c3RyYXRpb24sIEJpZ0lsbHVzdHJhdGlvbiB9IGZyb20gJ0AvaWxsdXN0cmF0aW9uJ1xuXG5jb25zdCBEZW1vMiA9ICgpID0+IHtcbiAgcmV0dXJuIDxCaWdJbGx1c3RyYXRpb24gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVtbzJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/demo2.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });