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
exports.id = "pages/types/[id]";
exports.ids = ["pages/types/[id]"];
exports.modules = {

/***/ "./locales lazy recursive ^\\.\\/.*\\/.*$":
/*!*****************************************************!*\
  !*** ./locales/ lazy ^\.\/.*\/.*$ namespace object ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en-US/common": [
		"./locales/en-US/common.json",
		"locales_en-US_common_json"
	],
	"./en-US/common.json": [
		"./locales/en-US/common.json",
		"locales_en-US_common_json"
	],
	"./en-US/test": [
		"./locales/en-US/test.json",
		"locales_en-US_test_json"
	],
	"./en-US/test.json": [
		"./locales/en-US/test.json",
		"locales_en-US_test_json"
	],
	"./en-US/types": [
		"./locales/en-US/types.json",
		"locales_en-US_types_json"
	],
	"./en-US/types.json": [
		"./locales/en-US/types.json",
		"locales_en-US_types_json"
	],
	"./es-MX/common": [
		"./locales/es-MX/common.json",
		"locales_es-MX_common_json"
	],
	"./es-MX/common.json": [
		"./locales/es-MX/common.json",
		"locales_es-MX_common_json"
	],
	"./es-MX/test": [
		"./locales/es-MX/test.json",
		"locales_es-MX_test_json"
	],
	"./es-MX/test.json": [
		"./locales/es-MX/test.json",
		"locales_es-MX_test_json"
	],
	"./es-MX/types": [
		"./locales/es-MX/types.json",
		"locales_es-MX_types_json"
	],
	"./es-MX/types.json": [
		"./locales/es-MX/types.json",
		"locales_es-MX_types_json"
	],
	"./tl-PH/common": [
		"./locales/tl-PH/common.json",
		"locales_tl-PH_common_json"
	],
	"./tl-PH/common.json": [
		"./locales/tl-PH/common.json",
		"locales_tl-PH_common_json"
	],
	"./tl-PH/test": [
		"./locales/tl-PH/test.json",
		"locales_tl-PH_test_json"
	],
	"./tl-PH/test.json": [
		"./locales/tl-PH/test.json",
		"locales_tl-PH_test_json"
	],
	"./tl-PH/types": [
		"./locales/tl-PH/types.json",
		"locales_tl-PH_types_json"
	],
	"./tl-PH/types.json": [
		"./locales/tl-PH/types.json",
		"locales_tl-PH_types_json"
	],
	"./zgh-MA/common": [
		"./locales/zgh-MA/common.json",
		"locales_zgh-MA_common_json"
	],
	"./zgh-MA/common.json": [
		"./locales/zgh-MA/common.json",
		"locales_zgh-MA_common_json"
	],
	"./zgh-MA/test": [
		"./locales/zgh-MA/test.json",
		"locales_zgh-MA_test_json"
	],
	"./zgh-MA/test.json": [
		"./locales/zgh-MA/test.json",
		"locales_zgh-MA_test_json"
	],
	"./zgh-MA/types": [
		"./locales/zgh-MA/types.json",
		"locales_zgh-MA_types_json"
	],
	"./zgh-MA/types.json": [
		"./locales/zgh-MA/types.json",
		"locales_zgh-MA_types_json"
	],
	"./zh-CN/common": [
		"./locales/zh-CN/common.json",
		"locales_zh-CN_common_json"
	],
	"./zh-CN/common.json": [
		"./locales/zh-CN/common.json",
		"locales_zh-CN_common_json"
	],
	"./zh-CN/test": [
		"./locales/zh-CN/test.json",
		"locales_zh-CN_test_json"
	],
	"./zh-CN/test.json": [
		"./locales/zh-CN/test.json",
		"locales_zh-CN_test_json"
	],
	"./zh-CN/types": [
		"./locales/zh-CN/types.json",
		"locales_zh-CN_types_json"
	],
	"./zh-CN/types.json": [
		"./locales/zh-CN/types.json",
		"locales_zh-CN_types_json"
	],
	"./zh-HK/common": [
		"./locales/zh-HK/common.json",
		"locales_zh-HK_common_json"
	],
	"./zh-HK/common.json": [
		"./locales/zh-HK/common.json",
		"locales_zh-HK_common_json"
	],
	"./zh-HK/test": [
		"./locales/zh-HK/test.json",
		"locales_zh-HK_test_json"
	],
	"./zh-HK/test.json": [
		"./locales/zh-HK/test.json",
		"locales_zh-HK_test_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./locales lazy recursive ^\\.\\/.*\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ \"./node_modules/next/dist/shared/lib/dynamic.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLHVIQUFxRCIsInNvdXJjZXMiOlsid2VicGFjazovL25tcGQtcmVjcnVpdG1lbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzPzg2MDciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dynamic.js\n");

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.noSSR = noSSR;\nexports.default = dynamic;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ \"./loadable\"));\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    default: obj\n  };\n}\n\nconst isServerSide = true;\n\nfunction noSSR(LoadableInitializer, loadableOptions) {\n  // Removing webpack and modules means react-loadable won't try preloading\n  delete loadableOptions.webpack;\n  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server\n\n  if (!isServerSide) {\n    return LoadableInitializer(loadableOptions);\n  }\n\n  const Loading = loadableOptions.loading; // This will only be rendered on the server side\n\n  return () => /*#__PURE__*/_react.default.createElement(Loading, {\n    error: null,\n    isLoading: true,\n    pastDelay: false,\n    timedOut: false\n  });\n}\n\nfunction dynamic(dynamicOptions, options) {\n  let loadableFn = _loadable.default;\n  let loadableOptions = {\n    // A loading component is not required, so we default it\n    loading: ({\n      error,\n      isLoading,\n      pastDelay\n    }) => {\n      if (!pastDelay) return null;\n\n      if (true) {\n        if (isLoading) {\n          return null;\n        }\n\n        if (error) {\n          return /*#__PURE__*/_react.default.createElement(\"p\", null, error.message, /*#__PURE__*/_react.default.createElement(\"br\", null), error.stack);\n        }\n      }\n\n      return null;\n    }\n  }; // Support for direct import(), eg: dynamic(import('../hello-world'))\n  // Note that this is only kept for the edge case where someone is passing in a promise as first argument\n  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))\n  // To make sure we don't execute the import without rendering first\n\n  if (dynamicOptions instanceof Promise) {\n    loadableOptions.loader = () => dynamicOptions; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))\n\n  } else if (typeof dynamicOptions === 'function') {\n    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})\n  } else if (typeof dynamicOptions === 'object') {\n    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);\n  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})\n\n\n  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);\n  const suspenseOptions = loadableOptions;\n\n  if (true) {\n    // Error if react root is not enabled and `suspense` option is set to true\n    if ( true && suspenseOptions.suspense) {\n      // TODO: add error doc when this feature is stable\n      throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);\n    }\n  }\n\n  if (suspenseOptions.suspense) {\n    return loadableFn(suspenseOptions);\n  } // coming from build/babel/plugins/react-loadable-plugin.js\n\n\n  if (loadableOptions.loadableGenerated) {\n    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);\n    delete loadableOptions.loadableGenerated;\n  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})\n\n\n  if (typeof loadableOptions.ssr === 'boolean') {\n    if (!loadableOptions.ssr) {\n      delete loadableOptions.ssr;\n      return noSSR(loadableFn, loadableOptions);\n    }\n\n    delete loadableOptions.ssr;\n  }\n\n  return loadableFn(loadableOptions);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7Ozs7Ozs7QUFDYkEsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsYUFBQSxHQUFnQkUsS0FBaEI7QUFDQUYsZUFBQSxHQUFrQkksT0FBbEI7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQW5DOztBQUNBLElBQUlDLFNBQVMsR0FBR0Ysc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsOEJBQUQsQ0FBUixDQUF0Qzs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ0csR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO0FBQ2pDTixJQUFBQSxPQUFPLEVBQUVNO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsTUFBTUUsWUFBWSxPQUFsQjs7QUFDQSxTQUFTVCxLQUFULENBQWVVLG1CQUFmLEVBQW9DQyxlQUFwQyxFQUFxRDtBQUNqRDtBQUNBLFNBQU9BLGVBQWUsQ0FBQ0MsT0FBdkI7QUFDQSxTQUFPRCxlQUFlLENBQUNFLE9BQXZCLENBSGlELENBSWpEOztBQUNBLE1BQUksQ0FBQ0osWUFBTCxFQUFtQjtBQUNmLFdBQU9DLG1CQUFtQixDQUFDQyxlQUFELENBQTFCO0FBQ0g7O0FBQ0QsUUFBTUcsT0FBTyxHQUFHSCxlQUFlLENBQUNJLE9BQWhDLENBUmlELENBU2pEOztBQUNBLFNBQU8sTUFBSSxhQUFjWixNQUFNLENBQUNGLE9BQVAsQ0FBZWUsYUFBZixDQUE2QkYsT0FBN0IsRUFBc0M7QUFDdkRHLElBQUFBLEtBQUssRUFBRSxJQURnRDtBQUV2REMsSUFBQUEsU0FBUyxFQUFFLElBRjRDO0FBR3ZEQyxJQUFBQSxTQUFTLEVBQUUsS0FINEM7QUFJdkRDLElBQUFBLFFBQVEsRUFBRTtBQUo2QyxHQUF0QyxDQUF6QjtBQU9IOztBQUNELFNBQVNsQixPQUFULENBQWlCbUIsY0FBakIsRUFBaUNDLE9BQWpDLEVBQTBDO0FBQ3RDLE1BQUlDLFVBQVUsR0FBR2pCLFNBQVMsQ0FBQ0wsT0FBM0I7QUFDQSxNQUFJVSxlQUFlLEdBQUc7QUFDbEI7QUFDQUksSUFBQUEsT0FBTyxFQUFFLENBQUM7QUFBRUUsTUFBQUEsS0FBRjtBQUFVQyxNQUFBQSxTQUFWO0FBQXNCQyxNQUFBQTtBQUF0QixLQUFELEtBQXNDO0FBQzNDLFVBQUksQ0FBQ0EsU0FBTCxFQUFnQixPQUFPLElBQVA7O0FBQ2hCLGdCQUE0QztBQUN4QyxZQUFJRCxTQUFKLEVBQWU7QUFDWCxpQkFBTyxJQUFQO0FBQ0g7O0FBQ0QsWUFBSUQsS0FBSixFQUFXO0FBQ1AsaUJBQU8sYUFBY2QsTUFBTSxDQUFDRixPQUFQLENBQWVlLGFBQWYsQ0FBNkIsR0FBN0IsRUFBa0MsSUFBbEMsRUFBd0NDLEtBQUssQ0FBQ08sT0FBOUMsRUFBdUQsYUFBY3JCLE1BQU0sQ0FBQ0YsT0FBUCxDQUFlZSxhQUFmLENBQTZCLElBQTdCLEVBQW1DLElBQW5DLENBQXJFLEVBQStHQyxLQUFLLENBQUNRLEtBQXJILENBQXJCO0FBQ0g7QUFDSjs7QUFDRCxhQUFPLElBQVA7QUFDSDtBQWJpQixHQUF0QixDQUZzQyxDQWlCdEM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBSUosY0FBYyxZQUFZSyxPQUE5QixFQUF1QztBQUNuQ2YsSUFBQUEsZUFBZSxDQUFDZ0IsTUFBaEIsR0FBeUIsTUFBSU4sY0FBN0IsQ0FEbUMsQ0FHdkM7O0FBQ0MsR0FKRCxNQUlPLElBQUksT0FBT0EsY0FBUCxLQUEwQixVQUE5QixFQUEwQztBQUM3Q1YsSUFBQUEsZUFBZSxDQUFDZ0IsTUFBaEIsR0FBeUJOLGNBQXpCLENBRDZDLENBRWpEO0FBQ0MsR0FITSxNQUdBLElBQUksT0FBT0EsY0FBUCxLQUEwQixRQUE5QixFQUF3QztBQUMzQ1YsSUFBQUEsZUFBZSxtQ0FDUkEsZUFEUSxHQUVSVSxjQUZRLENBQWY7QUFJSCxHQWpDcUMsQ0FrQ3RDOzs7QUFDQVYsRUFBQUEsZUFBZSxtQ0FDUkEsZUFEUSxHQUVSVyxPQUZRLENBQWY7QUFJQSxRQUFNTSxlQUFlLEdBQUdqQixlQUF4Qjs7QUFDQSxNQUFJLElBQUosRUFBNkM7QUFDekM7QUFDQSxRQUFJLFNBQWtDaUIsZUFBZSxDQUFDSyxRQUF0RCxFQUFnRTtBQUM1RDtBQUNBLFlBQU0sSUFBSUMsS0FBSixDQUFXLHFIQUFYLENBQU47QUFDSDtBQUNKOztBQUNELE1BQUlOLGVBQWUsQ0FBQ0ssUUFBcEIsRUFBOEI7QUFDMUIsV0FBT1YsVUFBVSxDQUFDSyxlQUFELENBQWpCO0FBQ0gsR0FqRHFDLENBa0R0Qzs7O0FBQ0EsTUFBSWpCLGVBQWUsQ0FBQ3dCLGlCQUFwQixFQUF1QztBQUNuQ3hCLElBQUFBLGVBQWUsbUNBQ1JBLGVBRFEsR0FFUkEsZUFBZSxDQUFDd0IsaUJBRlIsQ0FBZjtBQUlBLFdBQU94QixlQUFlLENBQUN3QixpQkFBdkI7QUFDSCxHQXpEcUMsQ0EwRHRDOzs7QUFDQSxNQUFJLE9BQU94QixlQUFlLENBQUN5QixHQUF2QixLQUErQixTQUFuQyxFQUE4QztBQUMxQyxRQUFJLENBQUN6QixlQUFlLENBQUN5QixHQUFyQixFQUEwQjtBQUN0QixhQUFPekIsZUFBZSxDQUFDeUIsR0FBdkI7QUFDQSxhQUFPcEMsS0FBSyxDQUFDdUIsVUFBRCxFQUFhWixlQUFiLENBQVo7QUFDSDs7QUFDRCxXQUFPQSxlQUFlLENBQUN5QixHQUF2QjtBQUNIOztBQUNELFNBQU9iLFVBQVUsQ0FBQ1osZUFBRCxDQUFqQjtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm1wZC1yZWNydWl0bWVudC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljLmpzP2FlYTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm5vU1NSID0gbm9TU1I7XG5leHBvcnRzLmRlZmF1bHQgPSBkeW5hbWljO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfbG9hZGFibGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xvYWRhYmxlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IGlzU2VydmVyU2lkZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gbm9TU1IoTG9hZGFibGVJbml0aWFsaXplciwgbG9hZGFibGVPcHRpb25zKSB7XG4gICAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMud2VicGFjaztcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLm1vZHVsZXM7XG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG4gICAgaWYgKCFpc1NlcnZlclNpZGUpIHtcbiAgICAgICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKTtcbiAgICB9XG4gICAgY29uc3QgTG9hZGluZyA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nO1xuICAgIC8vIFRoaXMgd2lsbCBvbmx5IGJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuICAgIHJldHVybiAoKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIHtcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVkT3V0OiBmYWxzZVxuICAgICAgICB9KVxuICAgIDtcbn1cbmZ1bmN0aW9uIGR5bmFtaWMoZHluYW1pY09wdGlvbnMsIG9wdGlvbnMpIHtcbiAgICBsZXQgbG9hZGFibGVGbiA9IF9sb2FkYWJsZS5kZWZhdWx0O1xuICAgIGxldCBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgIC8vIEEgbG9hZGluZyBjb21wb25lbnQgaXMgbm90IHJlcXVpcmVkLCBzbyB3ZSBkZWZhdWx0IGl0XG4gICAgICAgIGxvYWRpbmc6ICh7IGVycm9yICwgaXNMb2FkaW5nICwgcGFzdERlbGF5ICB9KT0+e1xuICAgICAgICAgICAgaWYgKCFwYXN0RGVsYXkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGVycm9yLm1lc3NhZ2UsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBlcnJvci5zdGFjaykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBTdXBwb3J0IGZvciBkaXJlY3QgaW1wb3J0KCksIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBvbmx5IGtlcHQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgc29tZW9uZSBpcyBwYXNzaW5nIGluIGEgcHJvbWlzZSBhcyBmaXJzdCBhcmd1bWVudFxuICAgIC8vIFRoZSByZWFjdC1sb2FkYWJsZSBiYWJlbCBwbHVnaW4gd2lsbCB0dXJuIGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKSBpbnRvIGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIC8vIFRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBleGVjdXRlIHRoZSBpbXBvcnQgd2l0aG91dCByZW5kZXJpbmcgZmlyc3RcbiAgICBpZiAoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSAoKT0+ZHluYW1pY09wdGlvbnNcbiAgICAgICAgO1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBpbXBvcnQgYXMgYSBmdW5jdGlvbiwgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBkeW5hbWljT3B0aW9ucztcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgZmlyc3QgYXJndW1lbnQgYmVpbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoe2xvYWRlcjogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAgICAgLi4uZHluYW1pY09wdGlvbnNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gU3VwcG9ydCBmb3IgcGFzc2luZyBvcHRpb25zLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nIHNvbWV0aGluZzwvcD59KVxuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICBjb25zdCBzdXNwZW5zZU9wdGlvbnMgPSBsb2FkYWJsZU9wdGlvbnM7XG4gICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfQ09OQ1VSUkVOVF9GRUFUVVJFUykge1xuICAgICAgICAvLyBFcnJvciBpZiByZWFjdCByb290IGlzIG5vdCBlbmFibGVkIGFuZCBgc3VzcGVuc2VgIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZVxuICAgICAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9SRUFDVF9ST09UICYmIHN1c3BlbnNlT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgICAgICAgICAgLy8gVE9ETzogYWRkIGVycm9yIGRvYyB3aGVuIHRoaXMgZmVhdHVyZSBpcyBzdGFibGVcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzdXNwZW5zZSBvcHRpb24gdXNhZ2UgaW4gbmV4dC9keW5hbWljLiBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtZHluYW1pYy1zdXNwZW5zZWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzdXNwZW5zZU9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRhYmxlRm4oc3VzcGVuc2VPcHRpb25zKTtcbiAgICB9XG4gICAgLy8gY29taW5nIGZyb20gYnVpbGQvYmFiZWwvcGx1Z2lucy9yZWFjdC1sb2FkYWJsZS1wbHVnaW4uanNcbiAgICBpZiAobG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZFxuICAgICAgICB9O1xuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkO1xuICAgIH1cbiAgICAvLyBzdXBwb3J0IGZvciBkaXNhYmxpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtzc3I6IGZhbHNlfSlcbiAgICBpZiAodHlwZW9mIGxvYWRhYmxlT3B0aW9ucy5zc3IgPT09ICdib29sZWFuJykge1xuICAgICAgICBpZiAoIWxvYWRhYmxlT3B0aW9ucy5zc3IpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO1xuICAgICAgICAgICAgcmV0dXJuIG5vU1NSKGxvYWRhYmxlRm4sIGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XG4gICAgfVxuICAgIHJldHVybiBsb2FkYWJsZUZuKGxvYWRhYmxlT3B0aW9ucyk7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWR5bmFtaWMuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwibm9TU1IiLCJkZWZhdWx0IiwiZHluYW1pYyIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2xvYWRhYmxlIiwib2JqIiwiX19lc01vZHVsZSIsImlzU2VydmVyU2lkZSIsIkxvYWRhYmxlSW5pdGlhbGl6ZXIiLCJsb2FkYWJsZU9wdGlvbnMiLCJ3ZWJwYWNrIiwibW9kdWxlcyIsIkxvYWRpbmciLCJsb2FkaW5nIiwiY3JlYXRlRWxlbWVudCIsImVycm9yIiwiaXNMb2FkaW5nIiwicGFzdERlbGF5IiwidGltZWRPdXQiLCJkeW5hbWljT3B0aW9ucyIsIm9wdGlvbnMiLCJsb2FkYWJsZUZuIiwibWVzc2FnZSIsInN0YWNrIiwiUHJvbWlzZSIsImxvYWRlciIsInN1c3BlbnNlT3B0aW9ucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfQ09OQ1VSUkVOVF9GRUFUVVJFUyIsIl9fTkVYVF9SRUFDVF9ST09UIiwic3VzcGVuc2UiLCJFcnJvciIsImxvYWRhYmxlR2VuZXJhdGVkIiwic3NyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/shared/lib/dynamic.js\n");

/***/ }),

/***/ "./pages/types/[id].js":
/*!*****************************!*\
  !*** ./pages/types/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-translate-root/i18n */ \"./i18n.json\");\n/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/loadNamespaces */ \"next-translate/loadNamespaces\");\n/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/ghost/Documents/sait/production_company1/assignments/assignment4/website/nmpd-recruitment/pages/types/[id].js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst Type = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ \"components_Type_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Type */ \"./components/Type.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../../components/Type */ \"./components/Type.js\")],\n    modules: [\"types/[id].js -> \" + '../../components/Type']\n  }\n});\n\nfunction type({\n  id,\n  darkMode\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Type, {\n    id: id,\n    darkMode: darkMode\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 12\n  }, this);\n} // export async function getStaticPaths() {\n//     return {\n//       paths: [{ params: { id: 'innovator' } }, { params: { id: 'artist' } }, { params: { id: 'thinker' } }, { params: { id: 'adventurer' } }, \n//       { params: { id: 'maker' } }, { params: { id: 'producer' } }, { params: { id: 'dreamer' } }, { params: { id: 'visionary' } }],\n//       fallback: false, // can also be true or 'blocking'\n//     }\n//   }\n// export async function getStaticProps(context) {\n//     const  id  = context.params.id\n//     console.log(context)\n//     console.log(id)\n//     return {\n//         props: { id: id},\n//     }\n// }\n\n\nasync function _getServerSideProps(context) {\n  const {\n    id\n  } = context.query;\n  return {\n    props: {\n      id\n    }\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (type);\nasync function getServerSideProps(ctx) {\n  let res = _getServerSideProps(ctx);\n\n  if (typeof res.then === 'function') res = await res;\n  return _objectSpread(_objectSpread({}, res), {}, {\n    props: _objectSpread(_objectSpread({}, res.props || {}), await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread(_objectSpread(_objectSpread({}, ctx), {}, {\n      pathname: '/types/[id]',\n      loaderName: 'getServerSideProps'\n    }, _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_0__), {}, {\n      loadLocaleFrom: (l, n) => __webpack_require__(\"./locales lazy recursive ^\\\\.\\\\/.*\\\\/.*$\")(`./${l}/${n}`).then(m => m.default)\n    })))\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90eXBlcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0k7QUFDQTtBQUVKOztBQUNBLE1BQU1HLElBQUksR0FBR0QsbURBQU8sQ0FBQyxNQUFNLG9LQUFQO0FBQUE7QUFBQSx3Q0FBYyxtREFBZDtBQUFBLG9DQUFjLHVCQUFkO0FBQUE7QUFBQSxFQUFwQjs7QUFFQSxTQUFTRSxJQUFULENBQWM7QUFBQ0MsRUFBQUEsRUFBRDtBQUFLQyxFQUFBQTtBQUFMLENBQWQsRUFBOEI7QUFDMUIsc0JBQU8sOERBQUMsSUFBRDtBQUFNLE1BQUUsRUFBRUQsRUFBVjtBQUFjLFlBQVEsRUFBRUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0gsRUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdDLGVBQWVDLG1CQUFmLENBQW1DQyxPQUFuQyxFQUE0QztBQUN6QyxRQUFNO0FBQUVILElBQUFBO0FBQUYsTUFBU0csT0FBTyxDQUFDQyxLQUF2QjtBQUNBLFNBQU87QUFDSEMsSUFBQUEsS0FBSyxFQUFFO0FBQ0hMLE1BQUFBO0FBREc7QUFESixHQUFQO0FBS0g7O0FBR0QsaUVBQWVELElBQWY7QUFHVyxlQUFlTyxrQkFBZixDQUFrQ0MsR0FBbEMsRUFBdUM7QUFDMUMsTUFBSUMsR0FBRyxHQUFHTixtQkFBbUIsQ0FBQ0ssR0FBRCxDQUE3Qjs7QUFDQSxNQUFHLE9BQU9DLEdBQUcsQ0FBQ0MsSUFBWCxLQUFvQixVQUF2QixFQUFtQ0QsR0FBRyxHQUFHLE1BQU1BLEdBQVo7QUFDbkMseUNBRUtBLEdBRkw7QUFHRUgsSUFBQUEsS0FBSyxrQ0FDQ0csR0FBRyxDQUFDSCxLQUFKLElBQWEsRUFEZCxHQUVDLE1BQU1ULG9FQUFnQiwrQ0FDckJXLEdBRHFCO0FBRXhCRyxNQUFBQSxRQUFRLEVBQUUsYUFGYztBQUd4QkMsTUFBQUEsVUFBVSxFQUFFO0FBSFksT0FJckJoQixzREFKcUI7QUFLeEJpQixNQUFBQSxjQUFjLEVBQUUsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVUsZ0VBQVEsS0FBK0JELENBQUUsSUFBR0MsQ0FBRSxFQUE5QyxFQUFpREwsSUFBakQsQ0FBc0RNLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxPQUE3RDtBQUxGLE9BRnZCO0FBSFA7QUFjSCIsInNvdXJjZXMiOlsid2VicGFjazovL25tcGQtcmVjcnVpdG1lbnQvLi9wYWdlcy90eXBlcy9baWRdLmpzPzY0YTciXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IF9faTE4bkNvbmZpZyBmcm9tICdAbmV4dC10cmFuc2xhdGUtcm9vdC9pMThuJ1xuICAgIGltcG9ydCBfX2xvYWROYW1lc3BhY2VzIGZyb20gJ25leHQtdHJhbnNsYXRlL2xvYWROYW1lc3BhY2VzJ1xuICAgIFxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuY29uc3QgVHlwZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL1R5cGUnKSlcblxuZnVuY3Rpb24gdHlwZSh7aWQsIGRhcmtNb2RlfSkge1xuICAgIHJldHVybiA8VHlwZSBpZD17aWR9IGRhcmtNb2RlPXtkYXJrTW9kZX0vPlxufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHBhdGhzOiBbeyBwYXJhbXM6IHsgaWQ6ICdpbm5vdmF0b3InIH0gfSwgeyBwYXJhbXM6IHsgaWQ6ICdhcnRpc3QnIH0gfSwgeyBwYXJhbXM6IHsgaWQ6ICd0aGlua2VyJyB9IH0sIHsgcGFyYW1zOiB7IGlkOiAnYWR2ZW50dXJlcicgfSB9LCBcbi8vICAgICAgIHsgcGFyYW1zOiB7IGlkOiAnbWFrZXInIH0gfSwgeyBwYXJhbXM6IHsgaWQ6ICdwcm9kdWNlcicgfSB9LCB7IHBhcmFtczogeyBpZDogJ2RyZWFtZXInIH0gfSwgeyBwYXJhbXM6IHsgaWQ6ICd2aXNpb25hcnknIH0gfV0sXG4vLyAgICAgICBmYWxsYmFjazogZmFsc2UsIC8vIGNhbiBhbHNvIGJlIHRydWUgb3IgJ2Jsb2NraW5nJ1xuLy8gICAgIH1cbi8vICAgfVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuLy8gICAgIGNvbnN0ICBpZCAgPSBjb250ZXh0LnBhcmFtcy5pZFxuLy8gICAgIGNvbnNvbGUubG9nKGNvbnRleHQpXG4vLyAgICAgY29uc29sZS5sb2coaWQpXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgcHJvcHM6IHsgaWQ6IGlkfSxcbi8vICAgICB9XG4vLyB9XG5cblxuIGFzeW5jIGZ1bmN0aW9uIF9nZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnlcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCB0eXBlXG5cblxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XG4gICAgICAgIGxldCByZXMgPSBfZ2V0U2VydmVyU2lkZVByb3BzKGN0eClcbiAgICAgICAgaWYodHlwZW9mIHJlcy50aGVuID09PSAnZnVuY3Rpb24nKSByZXMgPSBhd2FpdCByZXNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBcbiAgICAgICAgICAuLi5yZXMsXG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIC4uLihyZXMucHJvcHMgfHwge30pLFxuICAgICAgICAgICAgLi4uKGF3YWl0IF9fbG9hZE5hbWVzcGFjZXMoe1xuICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3R5cGVzL1tpZF0nLFxuICAgICAgICAgICAgICBsb2FkZXJOYW1lOiAnZ2V0U2VydmVyU2lkZVByb3BzJyxcbiAgICAgICAgICAgICAgLi4uX19pMThuQ29uZmlnLFxuICAgICAgICAgICAgICBsb2FkTG9jYWxlRnJvbTogKGwsIG4pID0+IGltcG9ydChgQG5leHQtdHJhbnNsYXRlLXJvb3QvbG9jYWxlcy8ke2x9LyR7bn1gKS50aGVuKG0gPT4gbS5kZWZhdWx0KSxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgIl0sIm5hbWVzIjpbIl9faTE4bkNvbmZpZyIsIl9fbG9hZE5hbWVzcGFjZXMiLCJkeW5hbWljIiwiVHlwZSIsInR5cGUiLCJpZCIsImRhcmtNb2RlIiwiX2dldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsInByb3BzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4IiwicmVzIiwidGhlbiIsInBhdGhuYW1lIiwibG9hZGVyTmFtZSIsImxvYWRMb2NhbGVGcm9tIiwibCIsIm4iLCJtIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/types/[id].js\n");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("framer-motion");

/***/ }),

/***/ "next-share":
/*!*****************************!*\
  !*** external "next-share" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-share");

/***/ }),

/***/ "next-translate/loadNamespaces":
/*!************************************************!*\
  !*** external "next-translate/loadNamespaces" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/loadNamespaces");

/***/ }),

/***/ "next-translate/useTranslation":
/*!************************************************!*\
  !*** external "next-translate/useTranslation" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./i18n.json":
/*!*******************!*\
  !*** ./i18n.json ***!
  \*******************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"locales":["en-US","zh-HK","zh-CN","es-MX","zgh-MA","tl-PH"],"defaultLocale":"en-US","pages":{"*":["common"],"/test":["test"],"rgx:/types/*":["types"]}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/types/[id].js"));
module.exports = __webpack_exports__;

})();