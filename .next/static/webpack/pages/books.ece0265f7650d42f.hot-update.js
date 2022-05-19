"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/books",{

/***/ "./pages/BookList.js":
/*!***************************!*\
  !*** ./pages/BookList.js ***!
  \***************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _bookcard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookcard */ \"./pages/bookcard.js\");\nvar _this = undefined;\n\n\n\nvar BookList = function(props) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: props.books.map(function(book, i) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                class: \"grid grid-cols-1 md:grid-cols-2 md:gap-28 xl:gap-56 space-y-28 md:space-y-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bookcard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    image: book.volumeInfo.imageLinks.thumbnail,\n                    title: book.volumeInfo.title,\n                    author: book.volumeInfo.authors,\n                    url: book.selfLink\n                }, i, false, {\n                    fileName: \"/Users/ahmedsaheed/Desktop/Desktop/ahmed-saheed/pages/BookList.js\",\n                    lineNumber: 10,\n                    columnNumber: 21\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/ahmedsaheed/Desktop/Desktop/ahmed-saheed/pages/BookList.js\",\n                lineNumber: 9,\n                columnNumber: 28\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/ahmedsaheed/Desktop/Desktop/ahmed-saheed/pages/BookList.js\",\n        lineNumber: 6,\n        columnNumber: 8\n    }, _this);\n};\n_c = BookList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookList);\nvar _c;\n$RefreshReg$(_c, \"BookList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Cb29rTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQXdDO0FBQ047QUFFbEMsSUFBTUcsUUFBUSxHQUFHLFNBQUNDLEtBQUssRUFBSzs7SUFDeEIscUJBQ0csOERBQUNDLEtBQUc7a0JBRUtELEtBQUssQ0FBQ0UsS0FBSyxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxDQUFDLEVBQUs7WUFDekIscUJBQU8sOERBQUNDLFNBQU87Z0JBQUNDLEtBQUssRUFBQyw2RUFBNkU7MEJBQ25HLDRFQUFDVCxpREFBUTtvQkFFTFUsS0FBSyxFQUFFSixJQUFJLENBQUNLLFVBQVUsQ0FBQ0MsVUFBVSxDQUFDQyxTQUFTO29CQUMzQ0MsS0FBSyxFQUFFUixJQUFJLENBQUNLLFVBQVUsQ0FBQ0csS0FBSztvQkFDNUJDLE1BQU0sRUFBRVQsSUFBSSxDQUFDSyxVQUFVLENBQUNLLE9BQU87b0JBQy9CQyxHQUFHLEVBQUVYLElBQUksQ0FBQ1ksUUFBUTttQkFKakJYLENBQUM7Ozs7MEJBTUo7Ozs7O3NCQUdRO1NBQ2IsQ0FBQzs7Ozs7YUFFSixDQUNUO0NBQ0o7QUFyQktOLEtBQUFBLFFBQVE7QUF1QmIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Cb29rTGlzdC5qcz82OWVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEJvb2tDYXJkIGZyb20gJy4vYm9va2NhcmQnO1xuXG5jb25zdCBCb29rTGlzdCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybihcbiAgICAgICA8ZGl2PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BzLmJvb2tzLm1hcCgoYm9vaywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNlY3Rpb24gY2xhc3M9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIG1kOmdhcC0yOCB4bDpnYXAtNTYgc3BhY2UteS0yOCBtZDpzcGFjZS15LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJvb2tDYXJkXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtib29rLnZvbHVtZUluZm8uaW1hZ2VMaW5rcy50aHVtYm5haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Ym9vay52b2x1bWVJbmZvLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtib29rLnZvbHVtZUluZm8uYXV0aG9yc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17Ym9vay5zZWxmTGlua31cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuIGV4cG9ydCBkZWZhdWx0IEJvb2tMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQm9va0NhcmQiLCJCb29rTGlzdCIsInByb3BzIiwiZGl2IiwiYm9va3MiLCJtYXAiLCJib29rIiwiaSIsInNlY3Rpb24iLCJjbGFzcyIsImltYWdlIiwidm9sdW1lSW5mbyIsImltYWdlTGlua3MiLCJ0aHVtYm5haWwiLCJ0aXRsZSIsImF1dGhvciIsImF1dGhvcnMiLCJ1cmwiLCJzZWxmTGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/BookList.js\n");

/***/ })

});