"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[2]!./styles/style.css":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[2]!./styles/style.css ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --color-default: #fff;\\n    --text-color: #333;  \\n    --color-border:#e7e7e7;\\n    --header-height: 3.5rem;\\n\\n  }\\n  @media (prefers-color-scheme: dark){\\n      :root{\\n          --color-default: #000;\\n          --text-color: #e0e0e0;\\n          --color-border:#e7e7e7;\\n          --header-height: 3.5rem;\\n\\n\\n      }\\n  }\\n  [data-theme='dark'] {\\n    --color-default: #000;\\n    --text-color: #e0e0e0;\\n    --color-border:#e7e7e7;\\n    --header-height: 3.5rem;\\n\\n\\n  }\\n  [data-theme='light'] {\\n    --color-default: #fff;\\n    --text-color: #333;\\n    --header-height: 3.5rem;\\n\\n  }\\n\\n  body {\\n      background-color: var(--color-default);\\n      font-family: 100%/1.5 system-ui,helvetica,sans-serif;\\n      color: var(--text-color);\\n      --header-height: 3.5rem;\\n\\n  }\\n\\n  p {\\n    margin-bottom: 1.6rem;\\n    font-size: 1.125rem;\\n}\\n.feature :last-child {\\n    margin-bottom: 0;\\n}\\n.feature:hover{\\n    outline: 1px solid var(--text-color);\\n    border-radius: 10px;\\n}\\n.feature a {\\n    text-decoration: none;\\n    color: var(--text-color)\\n\\n}\\nh1, h2, h3, h4, h5 {\\n    line-height: 1.1;\\n}\\n\\n  .tagline {\\n    font-size: 1.5rem;\\n    font-weight: 300;\\n    max-width: 50ch;\\n    margin-left: auto;\\n    margin-right: auto;\\n    line-height: 1.3;\\n  }\\n\\n  .cta, .tagline {\\n    margin-bottom: 2rem;\\n}\\n\\n.feature-grid {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: space-evenly;\\n    margin: 4rem auto;\\n    max-width: 80rem;\\n    padding: 0 2rem;\\n}\\n\\n.feature {\\n    flex: 1 1 33%;\\n    min-width: 300px;\\n    padding: 1rem;\\n}\\n\\n.feature-title {\\n    font-size: 2.2rem;\\n    margin-top: 0;\\n    margin-bottom: 0.5rem;\\n    font-weight: bold;\\n}\\n\\nh2 {\\n    font-family: 'Lobster', cursive;\\n    /*font-weight: bold;*/\\n    text-align: center;\\n    margin-top: 80px;\\n    margin-bottom: 60px;\\n}\\n.cta{\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n/* .btn, .is-hidden {\\n    white-space: nowrap;\\n} */\\n\\n.header {\\n    background: var(--color-default);\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    z-index: 200;\\n    width: 100%;\\n    overflow: hidden;\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 0 1rem;\\n    border-bottom: 0.0625rem solid var(--color-default);\\n    transition: background .3s;\\n}\\n.header, .header-area {\\n    height: var(--header-height);\\n}\\n\\n.menu-logo {\\n    font-weight: 700;\\n    font-size: 1.25rem;\\n}\\n.menu-item {\\n    align-items: center;\\n    padding: 0 1rem;\\n    font-size: 1rem;\\n    font-weight: 500;\\n}\\n\\n.menu, .menu-item {\\n    display: flex;\\n    height: 100%;\\n}\\n\\nh1{\\n    font-family: 'ui-serif', ;\\n    /* text-align: center;\\n     margin-top: 250px;\\n    font-size: 6em; */\\n\\n}\\np{\\n    font-family: 'ui-serif';\\n    font-size: 1.2em;\\n    \\n}\\ndiv.social-network a {\\n    background-color: var(--color-default);\\n    border-radius: 100%;\\n    /* color: #f7d35d; */\\n    padding: 5px 6px 5px 6px;\\n    position: relative; \\n    top: 25px;\\n\\n}\\n\\n.theme{\\n    padding-bottom: 30px;\\n    margin-left: 90px;\\n}\\n.footer {\\n    padding: 2rem 0;\\n    border-top: 0.0625rem solid var(--color-border);\\n    text-align: center;\\n    margin-left: 15px;\\n\\n\\n}\\n\\nfooter p{\\n    text-align: center;\\n    margin-left: 15px;\\n}\\n\\n/* .back-titre{\\n  \\n    display: flex;\\n    max-width: 40rem;\\n    align-items: center;\\n    justify-content: center;\\n    position: relative;\\n    margin: 4rem auto 2rem;\\n    padding: 2rem;\\n    background: var(--color-code-bg);\\n    text-align: center;\\n\\n} */\\n\\n.back-titre h1  {\\n    font-size: 90px;\\n    color: transparent;\\n    -webkit-text-stroke: 2px var(--text-color);\\n    text-align: center;\\n    padding-top: 15%;\\n    \\n}\\n.back-titre{\\n    position: relative;\\n    bottom: 20px;\\n}\\n.whiteSpace{\\n    height : 30%;\\n}\\n/* .back-titre:hover{\\n    transform: perspective(1000px) translateZ(0px) rotateX(-11.5562deg) rotateY(-5.73487deg);\\n    transition: all 150ms linear 0s;\\n} */\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/style.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,sBAAsB;IACtB,uBAAuB;;EAEzB;EACA;MACI;UACI,qBAAqB;UACrB,qBAAqB;UACrB,sBAAsB;UACtB,uBAAuB;;;MAG3B;EACJ;EACA;IACE,qBAAqB;IACrB,qBAAqB;IACrB,sBAAsB;IACtB,uBAAuB;;;EAGzB;EACA;IACE,qBAAqB;IACrB,kBAAkB;IAClB,uBAAuB;;EAEzB;;EAEA;MACI,sCAAsC;MACtC,oDAAoD;MACpD,wBAAwB;MACxB,uBAAuB;;EAE3B;;EAEA;IACE,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,oCAAoC;IACpC,mBAAmB;AACvB;AACA;IACI,qBAAqB;IACrB;;AAEJ;AACA;IACI,gBAAgB;AACpB;;EAEE;IACE,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,6BAA6B;IAC7B,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,+BAA+B;IAC/B,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;;GAEG;;AAEH;IACI,gCAAgC;IAChC,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,mDAAmD;IACnD,0BAA0B;AAC9B;AACA;IACI,4BAA4B;AAChC;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB;;qBAEiB;;AAErB;AACA;IACI,uBAAuB;IACvB,gBAAgB;;AAEpB;AACA;IACI,sCAAsC;IACtC,mBAAmB;IACnB,oBAAoB;IACpB,wBAAwB;IACxB,kBAAkB;IAClB,SAAS;;AAEb;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;AACrB;AACA;IACI,eAAe;IACf,+CAA+C;IAC/C,kBAAkB;IAClB,iBAAiB;;;AAGrB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;;;;;;;;;;;;GAYG;;AAEH;IACI,eAAe;IACf,kBAAkB;IAClB,0CAA0C;IAC1C,kBAAkB;IAClB,gBAAgB;;AAEpB;AACA;IACI,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;;;GAGG\",\"sourcesContent\":[\":root {\\n    --color-default: #fff;\\n    --text-color: #333;  \\n    --color-border:#e7e7e7;\\n    --header-height: 3.5rem;\\n\\n  }\\n  @media (prefers-color-scheme: dark){\\n      :root{\\n          --color-default: #000;\\n          --text-color: #e0e0e0;\\n          --color-border:#e7e7e7;\\n          --header-height: 3.5rem;\\n\\n\\n      }\\n  }\\n  [data-theme='dark'] {\\n    --color-default: #000;\\n    --text-color: #e0e0e0;\\n    --color-border:#e7e7e7;\\n    --header-height: 3.5rem;\\n\\n\\n  }\\n  [data-theme='light'] {\\n    --color-default: #fff;\\n    --text-color: #333;\\n    --header-height: 3.5rem;\\n\\n  }\\n\\n  body {\\n      background-color: var(--color-default);\\n      font-family: 100%/1.5 system-ui,helvetica,sans-serif;\\n      color: var(--text-color);\\n      --header-height: 3.5rem;\\n\\n  }\\n\\n  p {\\n    margin-bottom: 1.6rem;\\n    font-size: 1.125rem;\\n}\\n.feature :last-child {\\n    margin-bottom: 0;\\n}\\n.feature:hover{\\n    outline: 1px solid var(--text-color);\\n    border-radius: 10px;\\n}\\n.feature a {\\n    text-decoration: none;\\n    color: var(--text-color)\\n\\n}\\nh1, h2, h3, h4, h5 {\\n    line-height: 1.1;\\n}\\n\\n  .tagline {\\n    font-size: 1.5rem;\\n    font-weight: 300;\\n    max-width: 50ch;\\n    margin-left: auto;\\n    margin-right: auto;\\n    line-height: 1.3;\\n  }\\n\\n  .cta, .tagline {\\n    margin-bottom: 2rem;\\n}\\n\\n.feature-grid {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: space-evenly;\\n    margin: 4rem auto;\\n    max-width: 80rem;\\n    padding: 0 2rem;\\n}\\n\\n.feature {\\n    flex: 1 1 33%;\\n    min-width: 300px;\\n    padding: 1rem;\\n}\\n\\n.feature-title {\\n    font-size: 2.2rem;\\n    margin-top: 0;\\n    margin-bottom: 0.5rem;\\n    font-weight: bold;\\n}\\n\\nh2 {\\n    font-family: 'Lobster', cursive;\\n    /*font-weight: bold;*/\\n    text-align: center;\\n    margin-top: 80px;\\n    margin-bottom: 60px;\\n}\\n.cta{\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n/* .btn, .is-hidden {\\n    white-space: nowrap;\\n} */\\n\\n.header {\\n    background: var(--color-default);\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    z-index: 200;\\n    width: 100%;\\n    overflow: hidden;\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 0 1rem;\\n    border-bottom: 0.0625rem solid var(--color-default);\\n    transition: background .3s;\\n}\\n.header, .header-area {\\n    height: var(--header-height);\\n}\\n\\n.menu-logo {\\n    font-weight: 700;\\n    font-size: 1.25rem;\\n}\\n.menu-item {\\n    align-items: center;\\n    padding: 0 1rem;\\n    font-size: 1rem;\\n    font-weight: 500;\\n}\\n\\n.menu, .menu-item {\\n    display: flex;\\n    height: 100%;\\n}\\n\\nh1{\\n    font-family: 'ui-serif', ;\\n    /* text-align: center;\\n     margin-top: 250px;\\n    font-size: 6em; */\\n\\n}\\np{\\n    font-family: 'ui-serif';\\n    font-size: 1.2em;\\n    \\n}\\ndiv.social-network a {\\n    background-color: var(--color-default);\\n    border-radius: 100%;\\n    /* color: #f7d35d; */\\n    padding: 5px 6px 5px 6px;\\n    position: relative; \\n    top: 25px;\\n\\n}\\n\\n.theme{\\n    padding-bottom: 30px;\\n    margin-left: 90px;\\n}\\n.footer {\\n    padding: 2rem 0;\\n    border-top: 0.0625rem solid var(--color-border);\\n    text-align: center;\\n    margin-left: 15px;\\n\\n\\n}\\n\\nfooter p{\\n    text-align: center;\\n    margin-left: 15px;\\n}\\n\\n/* .back-titre{\\n  \\n    display: flex;\\n    max-width: 40rem;\\n    align-items: center;\\n    justify-content: center;\\n    position: relative;\\n    margin: 4rem auto 2rem;\\n    padding: 2rem;\\n    background: var(--color-code-bg);\\n    text-align: center;\\n\\n} */\\n\\n.back-titre h1  {\\n    font-size: 90px;\\n    color: transparent;\\n    -webkit-text-stroke: 2px var(--text-color);\\n    text-align: center;\\n    padding-top: 15%;\\n    \\n}\\n.back-titre{\\n    position: relative;\\n    bottom: 20px;\\n}\\n.whiteSpace{\\n    height : 30%;\\n}\\n/* .back-titre:hover{\\n    transform: perspective(1000px) translateZ(0px) rotateX(-11.5562deg) rotateY(-5.73487deg);\\n    transition: all 150ms linear 0s;\\n} */\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL3N0eWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsaURBQWlELDRCQUE0QiwyQkFBMkIsNkJBQTZCLDhCQUE4QixPQUFPLHdDQUF3QyxjQUFjLGtDQUFrQyxrQ0FBa0MsbUNBQW1DLG9DQUFvQyxhQUFhLEtBQUsseUJBQXlCLDRCQUE0Qiw0QkFBNEIsNkJBQTZCLDhCQUE4QixTQUFTLDBCQUEwQiw0QkFBNEIseUJBQXlCLDhCQUE4QixPQUFPLFlBQVksK0NBQStDLDZEQUE2RCxpQ0FBaUMsZ0NBQWdDLE9BQU8sU0FBUyw0QkFBNEIsMEJBQTBCLEdBQUcsd0JBQXdCLHVCQUF1QixHQUFHLGlCQUFpQiwyQ0FBMkMsMEJBQTBCLEdBQUcsY0FBYyw0QkFBNEIsbUNBQW1DLHNCQUFzQix1QkFBdUIsR0FBRyxnQkFBZ0Isd0JBQXdCLHVCQUF1QixzQkFBc0Isd0JBQXdCLHlCQUF5Qix1QkFBdUIsS0FBSyxzQkFBc0IsMEJBQTBCLEdBQUcsbUJBQW1CLG9CQUFvQixzQkFBc0Isb0NBQW9DLHdCQUF3Qix1QkFBdUIsc0JBQXNCLEdBQUcsY0FBYyxvQkFBb0IsdUJBQXVCLG9CQUFvQixHQUFHLG9CQUFvQix3QkFBd0Isb0JBQW9CLDRCQUE0Qix3QkFBd0IsR0FBRyxRQUFRLHNDQUFzQywwQkFBMEIsMkJBQTJCLHVCQUF1QiwwQkFBMEIsR0FBRyxPQUFPLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdB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QXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3N0eWxlLmNzcz80NDlmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tY29sb3ItZGVmYXVsdDogI2ZmZjtcXG4gICAgLS10ZXh0LWNvbG9yOiAjMzMzOyAgXFxuICAgIC0tY29sb3ItYm9yZGVyOiNlN2U3ZTc7XFxuICAgIC0taGVhZGVyLWhlaWdodDogMy41cmVtO1xcblxcbiAgfVxcbiAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayl7XFxuICAgICAgOnJvb3R7XFxuICAgICAgICAgIC0tY29sb3ItZGVmYXVsdDogIzAwMDtcXG4gICAgICAgICAgLS10ZXh0LWNvbG9yOiAjZTBlMGUwO1xcbiAgICAgICAgICAtLWNvbG9yLWJvcmRlcjojZTdlN2U3O1xcbiAgICAgICAgICAtLWhlYWRlci1oZWlnaHQ6IDMuNXJlbTtcXG5cXG5cXG4gICAgICB9XFxuICB9XFxuICBbZGF0YS10aGVtZT0nZGFyayddIHtcXG4gICAgLS1jb2xvci1kZWZhdWx0OiAjMDAwO1xcbiAgICAtLXRleHQtY29sb3I6ICNlMGUwZTA7XFxuICAgIC0tY29sb3ItYm9yZGVyOiNlN2U3ZTc7XFxuICAgIC0taGVhZGVyLWhlaWdodDogMy41cmVtO1xcblxcblxcbiAgfVxcbiAgW2RhdGEtdGhlbWU9J2xpZ2h0J10ge1xcbiAgICAtLWNvbG9yLWRlZmF1bHQ6ICNmZmY7XFxuICAgIC0tdGV4dC1jb2xvcjogIzMzMztcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiAzLjVyZW07XFxuXFxuICB9XFxuXFxuICBib2R5IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kZWZhdWx0KTtcXG4gICAgICBmb250LWZhbWlseTogMTAwJS8xLjUgc3lzdGVtLXVpLGhlbHZldGljYSxzYW5zLXNlcmlmO1xcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgICAtLWhlYWRlci1oZWlnaHQ6IDMuNXJlbTtcXG5cXG4gIH1cXG5cXG4gIHAge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjZyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcbi5mZWF0dXJlIDpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmZlYXR1cmU6aG92ZXJ7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmZlYXR1cmUgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpXFxuXFxufVxcbmgxLCBoMiwgaDMsIGg0LCBoNSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XFxufVxcblxcbiAgLnRhZ2xpbmUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbWF4LXdpZHRoOiA1MGNoO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBsaW5lLWhlaWdodDogMS4zO1xcbiAgfVxcblxcbiAgLmN0YSwgLnRhZ2xpbmUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uZmVhdHVyZS1ncmlkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgbWFyZ2luOiA0cmVtIGF1dG87XFxuICAgIG1heC13aWR0aDogODByZW07XFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXG59XFxuXFxuLmZlYXR1cmUge1xcbiAgICBmbGV4OiAxIDEgMzMlO1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZmVhdHVyZS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XFxuICAgIC8qZm9udC13ZWlnaHQ6IGJvbGQ7Ki9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG4uY3Rhe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLyogLmJ0biwgLmlzLWhpZGRlbiB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufSAqL1xcblxcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1kZWZhdWx0KTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDIwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tY29sb3ItZGVmYXVsdCk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO1xcbn1cXG4uaGVhZGVyLCAuaGVhZGVyLWFyZWEge1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbn1cXG5cXG4ubWVudS1sb2dvIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4ubWVudS1pdGVtIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5tZW51LCAubWVudS1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oMXtcXG4gICAgZm9udC1mYW1pbHk6ICd1aS1zZXJpZicsIDtcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgbWFyZ2luLXRvcDogMjUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNmVtOyAqL1xcblxcbn1cXG5we1xcbiAgICBmb250LWZhbWlseTogJ3VpLXNlcmlmJztcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgXFxufVxcbmRpdi5zb2NpYWwtbmV0d29yayBhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGVmYXVsdCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIC8qIGNvbG9yOiAjZjdkMzVkOyAqL1xcbiAgICBwYWRkaW5nOiA1cHggNnB4IDVweCA2cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxuICAgIHRvcDogMjVweDtcXG5cXG59XFxuXFxuLnRoZW1le1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDkwcHg7XFxufVxcbi5mb290ZXIge1xcbiAgICBwYWRkaW5nOiAycmVtIDA7XFxuICAgIGJvcmRlci10b3A6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcblxcblxcbn1cXG5cXG5mb290ZXIgcHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuXFxuLyogLmJhY2stdGl0cmV7XFxuICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWF4LXdpZHRoOiA0MHJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiA0cmVtIGF1dG8gMnJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItY29kZS1iZyk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59ICovXFxuXFxuLmJhY2stdGl0cmUgaDEgIHtcXG4gICAgZm9udC1zaXplOiA5MHB4O1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMTUlO1xcbiAgICBcXG59XFxuLmJhY2stdGl0cmV7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAyMHB4O1xcbn1cXG4ud2hpdGVTcGFjZXtcXG4gICAgaGVpZ2h0IDogMzAlO1xcbn1cXG4vKiAuYmFjay10aXRyZTpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKC0xMS41NTYyZGVnKSByb3RhdGVZKC01LjczNDg3ZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGxpbmVhciAwcztcXG59ICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix1QkFBdUI7O0VBRXpCO0VBQ0E7TUFDSTtVQUNJLHFCQUFxQjtVQUNyQixxQkFBcUI7VUFDckIsc0JBQXNCO1VBQ3RCLHVCQUF1Qjs7O01BRzNCO0VBQ0o7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHVCQUF1Qjs7O0VBR3pCO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHVCQUF1Qjs7RUFFekI7O0VBRUE7TUFDSSxzQ0FBc0M7TUFDdEMsb0RBQW9EO01BQ3BELHdCQUF3QjtNQUN4Qix1QkFBdUI7O0VBRTNCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckI7O0FBRUo7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7RUFFRTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTs7R0FFRzs7QUFFSDtJQUNJLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixtREFBbUQ7SUFDbkQsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qjs7cUJBRWlCOztBQUVyQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZiwrQ0FBK0M7SUFDL0Msa0JBQWtCO0lBQ2xCLGlCQUFpQjs7O0FBR3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTs7Ozs7Ozs7Ozs7O0dBWUc7O0FBRUg7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTs7O0dBR0dcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWNvbG9yLWRlZmF1bHQ6ICNmZmY7XFxuICAgIC0tdGV4dC1jb2xvcjogIzMzMzsgIFxcbiAgICAtLWNvbG9yLWJvcmRlcjojZTdlN2U3O1xcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDMuNXJlbTtcXG5cXG4gIH1cXG4gIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspe1xcbiAgICAgIDpyb290e1xcbiAgICAgICAgICAtLWNvbG9yLWRlZmF1bHQ6ICMwMDA7XFxuICAgICAgICAgIC0tdGV4dC1jb2xvcjogI2UwZTBlMDtcXG4gICAgICAgICAgLS1jb2xvci1ib3JkZXI6I2U3ZTdlNztcXG4gICAgICAgICAgLS1oZWFkZXItaGVpZ2h0OiAzLjVyZW07XFxuXFxuXFxuICAgICAgfVxcbiAgfVxcbiAgW2RhdGEtdGhlbWU9J2RhcmsnXSB7XFxuICAgIC0tY29sb3ItZGVmYXVsdDogIzAwMDtcXG4gICAgLS10ZXh0LWNvbG9yOiAjZTBlMGUwO1xcbiAgICAtLWNvbG9yLWJvcmRlcjojZTdlN2U3O1xcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDMuNXJlbTtcXG5cXG5cXG4gIH1cXG4gIFtkYXRhLXRoZW1lPSdsaWdodCddIHtcXG4gICAgLS1jb2xvci1kZWZhdWx0OiAjZmZmO1xcbiAgICAtLXRleHQtY29sb3I6ICMzMzM7XFxuICAgIC0taGVhZGVyLWhlaWdodDogMy41cmVtO1xcblxcbiAgfVxcblxcbiAgYm9keSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGVmYXVsdCk7XFxuICAgICAgZm9udC1mYW1pbHk6IDEwMCUvMS41IHN5c3RlbS11aSxoZWx2ZXRpY2Esc2Fucy1zZXJpZjtcXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgICAgLS1oZWFkZXItaGVpZ2h0OiAzLjVyZW07XFxuXFxuICB9XFxuXFxuICBwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG4uZmVhdHVyZSA6bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5mZWF0dXJlOmhvdmVye1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5mZWF0dXJlIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKVxcblxcbn1cXG5oMSwgaDIsIGgzLCBoNCwgaDUge1xcbiAgICBsaW5lLWhlaWdodDogMS4xO1xcbn1cXG5cXG4gIC50YWdsaW5lIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIG1heC13aWR0aDogNTBjaDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcXG4gIH1cXG5cXG4gIC5jdGEsIC50YWdsaW5lIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmZlYXR1cmUtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIG1hcmdpbjogNHJlbSBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDgwcmVtO1xcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxufVxcblxcbi5mZWF0dXJlIHtcXG4gICAgZmxleDogMSAxIDMzJTtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZlYXR1cmUtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xcbiAgICAvKmZvbnQtd2VpZ2h0OiBib2xkOyovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG59XFxuLmN0YXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi8qIC5idG4sIC5pcy1oaWRkZW4ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn0gKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZGVmYXVsdCk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAyMDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWNvbG9yLWRlZmF1bHQpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcztcXG59XFxuLmhlYWRlciwgLmhlYWRlci1hcmVhIHtcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG59XFxuXFxuLm1lbnUtbG9nbyB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuLm1lbnUtaXRlbSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubWVudSwgLm1lbnUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaDF7XFxuICAgIGZvbnQtZmFtaWx5OiAndWktc2VyaWYnLCA7XFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgIG1hcmdpbi10b3A6IDI1MHB4O1xcbiAgICBmb250LXNpemU6IDZlbTsgKi9cXG5cXG59XFxucHtcXG4gICAgZm9udC1mYW1pbHk6ICd1aS1zZXJpZic7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIFxcbn1cXG5kaXYuc29jaWFsLW5ldHdvcmsgYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRlZmF1bHQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAvKiBjb2xvcjogI2Y3ZDM1ZDsgKi9cXG4gICAgcGFkZGluZzogNXB4IDZweCA1cHggNnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICB0b3A6IDI1cHg7XFxuXFxufVxcblxcbi50aGVtZXtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xcbn1cXG4uZm9vdGVyIHtcXG4gICAgcGFkZGluZzogMnJlbSAwO1xcbiAgICBib3JkZXItdG9wOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG5cXG5cXG59XFxuXFxuZm9vdGVyIHB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcblxcbi8qIC5iYWNrLXRpdHJle1xcbiAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogNDByZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogNHJlbSBhdXRvIDJyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWNvZGUtYmcpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufSAqL1xcblxcbi5iYWNrLXRpdHJlIGgxICB7XFxuICAgIGZvbnQtc2l6ZTogOTBweDtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDE1JTtcXG4gICAgXFxufVxcbi5iYWNrLXRpdHJle1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMjBweDtcXG59XFxuLndoaXRlU3BhY2V7XFxuICAgIGhlaWdodCA6IDMwJTtcXG59XFxuLyogLmJhY2stdGl0cmU6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSB0cmFuc2xhdGVaKDBweCkgcm90YXRlWCgtMTEuNTU2MmRlZykgcm90YXRlWSgtNS43MzQ4N2RlZyk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBsaW5lYXIgMHM7XFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[2]!./styles/style.css\n");

/***/ })

});