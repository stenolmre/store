module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/coupon/_get.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/coupon.js":
/*!**************************!*\
  !*** ./models/coupon.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.cjs\");\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CouponSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  _id: {\n    type: String,\n    default: () => Object(nanoid__WEBPACK_IMPORTED_MODULE_1__[\"nanoid\"])(5)\n  },\n  name: {\n    type: String,\n    required: true\n  },\n  percent: {\n    type: String,\n    required: true\n  }\n}, {\n  timestamps: true\n});\nconst Coupon = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Coupon || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Coupon', CouponSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Coupon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvY291cG9uLmpzP2MzODYiXSwibmFtZXMiOlsiQ291cG9uU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJfaWQiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsIm5hbm9pZCIsIm5hbWUiLCJyZXF1aXJlZCIsInBlcmNlbnQiLCJ0aW1lc3RhbXBzIiwiQ291cG9uIiwibW9kZWxzIiwibW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxHQUFHQywrQ0FBUSxDQUFDQyxNQUFULENBQWdCO0FBQ25DQyxLQUFHLEVBQUU7QUFDSEMsUUFBSSxFQUFFQyxNQURIO0FBRUhDLFdBQU8sRUFBRSxNQUFNQyxxREFBTSxDQUFDLENBQUQ7QUFGbEIsR0FEOEI7QUFLbkNDLE1BQUksRUFBRTtBQUNKSixRQUFJLEVBQUVDLE1BREY7QUFFSkksWUFBUSxFQUFFO0FBRk4sR0FMNkI7QUFTbkNDLFNBQU8sRUFBRTtBQUNQTixRQUFJLEVBQUVDLE1BREM7QUFFUEksWUFBUSxFQUFFO0FBRkg7QUFUMEIsQ0FBaEIsRUFhbEI7QUFDREUsWUFBVSxFQUFFO0FBRFgsQ0Fia0IsQ0FBckI7QUFpQkEsTUFBTUMsTUFBTSxHQUFHWCwrQ0FBUSxDQUFDWSxNQUFULENBQWdCRCxNQUFoQixJQUEwQlgsK0NBQVEsQ0FBQ2EsS0FBVCxDQUFlLFFBQWYsRUFBeUJkLFlBQXpCLENBQXpDO0FBRWVZLHFFQUFmIiwiZmlsZSI6Ii4vbW9kZWxzL2NvdXBvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZCdcblxuY29uc3QgQ291cG9uU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcbiAgX2lkOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICgpID0+IG5hbm9pZCg1KVxuICB9LFxuICBuYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIHBlcmNlbnQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfVxufSwge1xuICB0aW1lc3RhbXBzOiB0cnVlXG59KVxuXG5jb25zdCBDb3Vwb24gPSBtb25nb29zZS5tb2RlbHMuQ291cG9uIHx8IG1vbmdvb3NlLm1vZGVsKCdDb3Vwb24nLCBDb3Vwb25TY2hlbWEpXG5cbmV4cG9ydCBkZWZhdWx0IENvdXBvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/coupon.js\n");

/***/ }),

/***/ "./node_modules/nanoid/index.cjs":
/*!***************************************!*\
  !*** ./node_modules/nanoid/index.cjs ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let crypto = __webpack_require__(/*! crypto */ \"crypto\")\n\nlet { urlAlphabet } = __webpack_require__(/*! ./url-alphabet/index.cjs */ \"./node_modules/nanoid/url-alphabet/index.cjs\")\n\n// It is best to make fewer, larger requests to the crypto module to\n// avoid system call overhead. So, random numbers are generated in a\n// pool. The pool is a Buffer that is larger than the initial random\n// request size by this multiplier. The pool is enlarged if subsequent\n// requests exceed the maximum buffer size.\nconst POOL_SIZE_MULTIPLIER = 32\nlet pool, poolOffset\n\nlet random = bytes => {\n  if (!pool || pool.length < bytes) {\n    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER)\n    crypto.randomFillSync(pool)\n    poolOffset = 0\n  } else if (poolOffset + bytes > pool.length) {\n    crypto.randomFillSync(pool)\n    poolOffset = 0\n  }\n\n  let res = pool.subarray(poolOffset, poolOffset + bytes)\n  poolOffset += bytes\n  return res\n}\n\nlet customRandom = (alphabet, size, getRandom) => {\n  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes\n  // values closer to the alphabet size. The bitmask calculates the closest\n  // `2^31 - 1` number, which exceeds the alphabet size.\n  // For example, the bitmask for the alphabet size 30 is 31 (00011111).\n  let mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1\n  // Though, the bitmask solution is not perfect since the bytes exceeding\n  // the alphabet size are refused. Therefore, to reliably generate the ID,\n  // the random bytes redundancy has to be satisfied.\n\n  // Note: every hardware random generator call is performance expensive,\n  // because the system call for entropy collection takes a lot of time.\n  // So, to avoid additional system calls, extra bytes are requested in advance.\n\n  // Next, a step determines how many random bytes to generate.\n  // The number of random bytes gets decided upon the ID size, mask,\n  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance\n  // according to benchmarks).\n  let step = Math.ceil((1.6 * mask * size) / alphabet.length)\n\n  return () => {\n    let id = ''\n    while (true) {\n      let bytes = getRandom(step)\n      // A compact alternative for `for (let i = 0; i < step; i++)`.\n      let i = step\n      while (i--) {\n        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.\n        id += alphabet[bytes[i] & mask] || ''\n        if (id.length === size) return id\n      }\n    }\n  }\n}\n\nlet customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)\n\nlet nanoid = (size = 21) => {\n  let bytes = random(size)\n  let id = ''\n  // A compact alternative for `for (let i = 0; i < size; i++)`.\n  while (size--) {\n    // It is incorrect to use bytes exceeding the alphabet size.\n    // The following mask reduces the random byte in the 0-255 value\n    // range to the 0-63 value range. Therefore, adding hacks, such\n    // as empty string fallback or magic numbers, is unneccessary because\n    // the bitmask trims bytes down to the alphabet size.\n    id += urlAlphabet[bytes[size] & 63]\n  }\n  return id\n}\n\nmodule.exports = { nanoid, customAlphabet, customRandom, urlAlphabet, random }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmNqcz85Mzg4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsbUJBQU8sQ0FBQyxzQkFBUTs7QUFFN0IsS0FBSyxjQUFjLEdBQUcsbUJBQU8sQ0FBQyw4RUFBMEI7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxVQUFVO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsVUFBVTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmNqcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKVxuXG5sZXQgeyB1cmxBbHBoYWJldCB9ID0gcmVxdWlyZSgnLi91cmwtYWxwaGFiZXQvaW5kZXguY2pzJylcblxuLy8gSXQgaXMgYmVzdCB0byBtYWtlIGZld2VyLCBsYXJnZXIgcmVxdWVzdHMgdG8gdGhlIGNyeXB0byBtb2R1bGUgdG9cbi8vIGF2b2lkIHN5c3RlbSBjYWxsIG92ZXJoZWFkLiBTbywgcmFuZG9tIG51bWJlcnMgYXJlIGdlbmVyYXRlZCBpbiBhXG4vLyBwb29sLiBUaGUgcG9vbCBpcyBhIEJ1ZmZlciB0aGF0IGlzIGxhcmdlciB0aGFuIHRoZSBpbml0aWFsIHJhbmRvbVxuLy8gcmVxdWVzdCBzaXplIGJ5IHRoaXMgbXVsdGlwbGllci4gVGhlIHBvb2wgaXMgZW5sYXJnZWQgaWYgc3Vic2VxdWVudFxuLy8gcmVxdWVzdHMgZXhjZWVkIHRoZSBtYXhpbXVtIGJ1ZmZlciBzaXplLlxuY29uc3QgUE9PTF9TSVpFX01VTFRJUExJRVIgPSAzMlxubGV0IHBvb2wsIHBvb2xPZmZzZXRcblxubGV0IHJhbmRvbSA9IGJ5dGVzID0+IHtcbiAgaWYgKCFwb29sIHx8IHBvb2wubGVuZ3RoIDwgYnl0ZXMpIHtcbiAgICBwb29sID0gQnVmZmVyLmFsbG9jVW5zYWZlKGJ5dGVzICogUE9PTF9TSVpFX01VTFRJUExJRVIpXG4gICAgY3J5cHRvLnJhbmRvbUZpbGxTeW5jKHBvb2wpXG4gICAgcG9vbE9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChwb29sT2Zmc2V0ICsgYnl0ZXMgPiBwb29sLmxlbmd0aCkge1xuICAgIGNyeXB0by5yYW5kb21GaWxsU3luYyhwb29sKVxuICAgIHBvb2xPZmZzZXQgPSAwXG4gIH1cblxuICBsZXQgcmVzID0gcG9vbC5zdWJhcnJheShwb29sT2Zmc2V0LCBwb29sT2Zmc2V0ICsgYnl0ZXMpXG4gIHBvb2xPZmZzZXQgKz0gYnl0ZXNcbiAgcmV0dXJuIHJlc1xufVxuXG5sZXQgY3VzdG9tUmFuZG9tID0gKGFscGhhYmV0LCBzaXplLCBnZXRSYW5kb20pID0+IHtcbiAgLy8gRmlyc3QsIGEgYml0bWFzayBpcyBuZWNlc3NhcnkgdG8gZ2VuZXJhdGUgdGhlIElELiBUaGUgYml0bWFzayBtYWtlcyBieXRlc1xuICAvLyB2YWx1ZXMgY2xvc2VyIHRvIHRoZSBhbHBoYWJldCBzaXplLiBUaGUgYml0bWFzayBjYWxjdWxhdGVzIHRoZSBjbG9zZXN0XG4gIC8vIGAyXjMxIC0gMWAgbnVtYmVyLCB3aGljaCBleGNlZWRzIHRoZSBhbHBoYWJldCBzaXplLlxuICAvLyBGb3IgZXhhbXBsZSwgdGhlIGJpdG1hc2sgZm9yIHRoZSBhbHBoYWJldCBzaXplIDMwIGlzIDMxICgwMDAxMTExMSkuXG4gIGxldCBtYXNrID0gKDIgPDwgKDMxIC0gTWF0aC5jbHozMigoYWxwaGFiZXQubGVuZ3RoIC0gMSkgfCAxKSkpIC0gMVxuICAvLyBUaG91Z2gsIHRoZSBiaXRtYXNrIHNvbHV0aW9uIGlzIG5vdCBwZXJmZWN0IHNpbmNlIHRoZSBieXRlcyBleGNlZWRpbmdcbiAgLy8gdGhlIGFscGhhYmV0IHNpemUgYXJlIHJlZnVzZWQuIFRoZXJlZm9yZSwgdG8gcmVsaWFibHkgZ2VuZXJhdGUgdGhlIElELFxuICAvLyB0aGUgcmFuZG9tIGJ5dGVzIHJlZHVuZGFuY3kgaGFzIHRvIGJlIHNhdGlzZmllZC5cblxuICAvLyBOb3RlOiBldmVyeSBoYXJkd2FyZSByYW5kb20gZ2VuZXJhdG9yIGNhbGwgaXMgcGVyZm9ybWFuY2UgZXhwZW5zaXZlLFxuICAvLyBiZWNhdXNlIHRoZSBzeXN0ZW0gY2FsbCBmb3IgZW50cm9weSBjb2xsZWN0aW9uIHRha2VzIGEgbG90IG9mIHRpbWUuXG4gIC8vIFNvLCB0byBhdm9pZCBhZGRpdGlvbmFsIHN5c3RlbSBjYWxscywgZXh0cmEgYnl0ZXMgYXJlIHJlcXVlc3RlZCBpbiBhZHZhbmNlLlxuXG4gIC8vIE5leHQsIGEgc3RlcCBkZXRlcm1pbmVzIGhvdyBtYW55IHJhbmRvbSBieXRlcyB0byBnZW5lcmF0ZS5cbiAgLy8gVGhlIG51bWJlciBvZiByYW5kb20gYnl0ZXMgZ2V0cyBkZWNpZGVkIHVwb24gdGhlIElEIHNpemUsIG1hc2ssXG4gIC8vIGFscGhhYmV0IHNpemUsIGFuZCBtYWdpYyBudW1iZXIgMS42ICh1c2luZyAxLjYgcGVha3MgYXQgcGVyZm9ybWFuY2VcbiAgLy8gYWNjb3JkaW5nIHRvIGJlbmNobWFya3MpLlxuICBsZXQgc3RlcCA9IE1hdGguY2VpbCgoMS42ICogbWFzayAqIHNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICAvLyBBIGNvbXBhY3QgYWx0ZXJuYXRpdmUgZm9yIGBmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXA7IGkrKylgLlxuICAgICAgbGV0IGkgPSBzdGVwXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIC8vIEFkZGluZyBgfHwgJydgIHJlZnVzZXMgYSByYW5kb20gYnl0ZSB0aGF0IGV4Y2VlZHMgdGhlIGFscGhhYmV0IHNpemUuXG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2ldICYgbWFza10gfHwgJydcbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgc2l6ZSkgPT4gY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG5cbmxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PiB7XG4gIGxldCBieXRlcyA9IHJhbmRvbShzaXplKVxuICBsZXQgaWQgPSAnJ1xuICAvLyBBIGNvbXBhY3QgYWx0ZXJuYXRpdmUgZm9yIGBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKylgLlxuICB3aGlsZSAoc2l6ZS0tKSB7XG4gICAgLy8gSXQgaXMgaW5jb3JyZWN0IHRvIHVzZSBieXRlcyBleGNlZWRpbmcgdGhlIGFscGhhYmV0IHNpemUuXG4gICAgLy8gVGhlIGZvbGxvd2luZyBtYXNrIHJlZHVjZXMgdGhlIHJhbmRvbSBieXRlIGluIHRoZSAwLTI1NSB2YWx1ZVxuICAgIC8vIHJhbmdlIHRvIHRoZSAwLTYzIHZhbHVlIHJhbmdlLiBUaGVyZWZvcmUsIGFkZGluZyBoYWNrcywgc3VjaFxuICAgIC8vIGFzIGVtcHR5IHN0cmluZyBmYWxsYmFjayBvciBtYWdpYyBudW1iZXJzLCBpcyB1bm5lY2Nlc3NhcnkgYmVjYXVzZVxuICAgIC8vIHRoZSBiaXRtYXNrIHRyaW1zIGJ5dGVzIGRvd24gdG8gdGhlIGFscGhhYmV0IHNpemUuXG4gICAgaWQgKz0gdXJsQWxwaGFiZXRbYnl0ZXNbc2l6ZV0gJiA2M11cbiAgfVxuICByZXR1cm4gaWRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IG5hbm9pZCwgY3VzdG9tQWxwaGFiZXQsIGN1c3RvbVJhbmRvbSwgdXJsQWxwaGFiZXQsIHJhbmRvbSB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/nanoid/index.cjs\n");

/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.cjs":
/*!****************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.cjs ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped\n// optimize the gzip compression for this alphabet.\nlet urlAlphabet =\n  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'\n\nmodule.exports = { urlAlphabet }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5janM/ZWZlYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5janMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGFscGhhYmV0IHVzZXMgYEEtWmEtejAtOV8tYCBzeW1ib2xzLiBUaGUgZ2VuZXRpYyBhbGdvcml0aG0gaGVscGVkXG4vLyBvcHRpbWl6ZSB0aGUgZ3ppcCBjb21wcmVzc2lvbiBmb3IgdGhpcyBhbHBoYWJldC5cbmxldCB1cmxBbHBoYWJldCA9XG4gICdNb2R1bGVTeW1iaGFzT3duUHItMDEyMzQ1Njc4OUFCQ0RFRkdITlJWZmdjdGlVdnpfS3FZVEprTHhwWlhJalFXJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgdXJsQWxwaGFiZXQgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/nanoid/url-alphabet/index.cjs\n");

/***/ }),

/***/ "./pages/api/coupon/_get.js":
/*!**********************************!*\
  !*** ./pages/api/coupon/_get.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/connectDB */ \"./utils/connectDB.js\");\n/* harmony import */ var _models_coupon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/coupon */ \"./models/coupon.js\");\n\n\nObject(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function (req, res) {\n  try {\n    const coupons = await _models_coupon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find().sort({\n      createdAt: -1\n    });\n    if (!coupons) return res.status(404).json({\n      msg: 'Coupons not found.'\n    });\n    res.send(coupons);\n  } catch (err) {\n    res.status(500).json({\n      msg: 'Server Error',\n      error: err.message\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY291cG9uL19nZXQuanM/OTAzOCJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJyZXEiLCJyZXMiLCJjb3Vwb25zIiwiQ291cG9uIiwiZmluZCIsInNvcnQiLCJjcmVhdGVkQXQiLCJzdGF0dXMiLCJqc29uIiwibXNnIiwic2VuZCIsImVyciIsImVycm9yIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBQSxnRUFBUztBQUVNLCtFQUFnQkMsR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQ3ZDLE1BQUk7QUFDRixVQUFNQyxPQUFPLEdBQUcsTUFBTUMsc0RBQU0sQ0FBQ0MsSUFBUCxHQUFjQyxJQUFkLENBQW1CO0FBQUVDLGVBQVMsRUFBRSxDQUFDO0FBQWQsS0FBbkIsQ0FBdEI7QUFFQSxRQUFJLENBQUNKLE9BQUwsRUFBYyxPQUFPRCxHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxTQUFHLEVBQUU7QUFBUCxLQUFyQixDQUFQO0FBRWRSLE9BQUcsQ0FBQ1MsSUFBSixDQUFTUixPQUFUO0FBQ0QsR0FORCxDQU1FLE9BQU9TLEdBQVAsRUFBWTtBQUNaVixPQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxTQUFHLEVBQUUsY0FBUDtBQUF1QkcsV0FBSyxFQUFFRCxHQUFHLENBQUNFO0FBQWxDLEtBQXJCO0FBQ0Q7QUFDRixDIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2NvdXBvbi9fZ2V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3REQiBmcm9tICdAL3V0aWxzL2Nvbm5lY3REQidcbmltcG9ydCBDb3Vwb24gZnJvbSAnQC9tb2RlbHMvY291cG9uJ1xuXG5jb25uZWN0REIoKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb3Vwb25zID0gYXdhaXQgQ291cG9uLmZpbmQoKS5zb3J0KHsgY3JlYXRlZEF0OiAtMSB9KVxuXG4gICAgaWYgKCFjb3Vwb25zKSByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtc2c6ICdDb3Vwb25zIG5vdCBmb3VuZC4nIH0pXG5cbiAgICByZXMuc2VuZChjb3Vwb25zKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1zZzogJ1NlcnZlciBFcnJvcicsIGVycm9yOiBlcnIubWVzc2FnZSB9KVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/coupon/_get.js\n");

/***/ }),

/***/ "./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return connectDB; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function connectDB() {\n  if (connection.isConnected) {\n    return;\n  }\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(\"mongodb+srv://etreeningud:kuznef-wowse9-tUzgid@etreeningud-dxlxs.mongodb.net/demo_store?retryWrites=true&w=majority\", {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useFindAndModify: false\n  });\n  connection.isConnected = db.connections[0].readyState;\n  console.log(connection.isConnected);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jb25uZWN0REIuanM/YjdkNCJdLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwiY29ubmVjdERCIiwiaXNDb25uZWN0ZWQiLCJkYiIsIm1vbmdvb3NlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFVBQVUsR0FBRyxFQUFuQjtBQUVlLGVBQWVDLFNBQWYsR0FBMkI7QUFDeEMsTUFBSUQsVUFBVSxDQUFDRSxXQUFmLEVBQTRCO0FBQzFCO0FBQ0Q7O0FBRUQsUUFBTUMsRUFBRSxHQUFHLE1BQU1DLCtDQUFRLENBQUNDLE9BQVQsQ0FBaUJDLHFIQUFqQixFQUF3QztBQUN2REMsbUJBQWUsRUFBRSxJQURzQztBQUV2REMsc0JBQWtCLEVBQUUsSUFGbUM7QUFHdkRDLG9CQUFnQixFQUFFO0FBSHFDLEdBQXhDLENBQWpCO0FBTUFULFlBQVUsQ0FBQ0UsV0FBWCxHQUF5QkMsRUFBRSxDQUFDTyxXQUFILENBQWUsQ0FBZixFQUFrQkMsVUFBM0M7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVliLFVBQVUsQ0FBQ0UsV0FBdkI7QUFDRCIsImZpbGUiOiIuL3V0aWxzL2Nvbm5lY3REQi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgY29ubmVjdGlvbiA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REQigpIHtcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkksIHtcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlXG4gIH0pXG5cbiAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGVcbiAgY29uc29sZS5sb2coY29ubmVjdGlvbi5pc0Nvbm5lY3RlZClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/connectDB.js\n");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIj80Yzc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImNyeXB0by5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///crypto\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });