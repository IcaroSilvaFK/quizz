"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quizz",{

/***/ "./src/pages/quizz/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/quizz/index.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuizUser; }\n/* harmony export */ });\n/* harmony import */ var D_next_quizz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_next_quizz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_next_quizz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header/index.jsx\");\n/* harmony import */ var _components_TitleQuestion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/TitleQuestion */ \"./src/components/TitleQuestion/index.jsx\");\n/* harmony import */ var _api_hello__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/hello */ \"./src/pages/api/hello.js\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.module.scss */ \"./src/pages/quizz/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction QuizUser() {\n    var handleNeQuestion = function handleNeQuestion() {\n        var counter = counterQuestion;\n        var slice = sliceQUestion;\n        setQuestion(questions.slice(counterQuestion, sliceQUestion));\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), errorResponse = ref6[0], seterrorResponse = ref6[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), questions = ref1[0], setQuestions = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), question = ref2[0], setQuestion = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), runtimeFinish = ref3[0], setHuntimeFinsih = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), counterQuestion = ref4[0], setCounterQuestion = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), sliceQUestion = ref5[0], setSliceQuestion = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(), user = ref[\"quizz.user\"];\n        if (!user) {\n            router.push(\"/\");\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Desculpe n\\xe3o conseguimos achar o usuario logado 😴\");\n        }\n        function pickUpQuestions() {\n            return _pickUpQuestions.apply(this, arguments);\n        }\n        function _pickUpQuestions() {\n            _pickUpQuestions = _asyncToGenerator(D_next_quizz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response;\n                return D_next_quizz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _api_hello__WEBPACK_IMPORTED_MODULE_9__.api.get(\"users/perguntas-all\");\n                        case 2:\n                            response = _ctx.sent;\n                            if (response.status === 200) {\n                                setQuestions(response.data);\n                                seterrorResponse(false);\n                            }\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _pickUpQuestions.apply(this, arguments);\n        }\n        pickUpQuestions();\n    }, // eslint-disable-next-line react-hooks/exhaustive-deps\n    []);\n    console.log(question);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().layout),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \"Quizz\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_7__.Header, {}, void 0, false, {\n                fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().Container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().card),\n                    children: [\n                        errorResponse ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().containerLoading),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().loading)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().messageLoading),\n                                    children: \"aguarde\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().containerQuestion),\n                            children: questions.map(function(element) {\n                                return console.log(\"\");\n                            })\n                        }, void 0, false, {\n                            fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            children: \" onClick\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}, void 0, false, {\n                fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this));\n}; /*\r\n  className={styles.finish}\r\n  className={styles.response}\r\n  className={styles.title}\r\n  className={styles.contentCard}\r\n*/  /*\r\n  <div className={styles.Questions} key={element.title}>\r\n                  <div>\r\n                    <h3>{element[counterQuestion]?.title}</h3>\r\n                  </div>\r\n                  <div>\r\n                    <button>\r\n                      {element[counterQuestion]?.alternativas?.alternativa_a}\r\n                    </button>\r\n                    <button>\r\n                      {element[counterQuestion]?.alternativas?.alternativa_b}\r\n                    </button>\r\n                    <button>\r\n                      {element[counterQuestion]?.alternativas?.alternativa_c}\r\n                    </button>\r\n                    <button>\r\n                      {element[counterQuestion]?.alternativas?.alternativa_d}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n*/ \n_s(QuizUser, \"YZekSI1kwHcaYFpwY66+bUznduY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = QuizUser;\nvar _c;\n$RefreshReg$(_c, \"QuizUser\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0VBQ1hrQixDQUFHOzRCQUFDQyxTQUFTLEVBQUU3Qiw2RUFBdUI7OzRHQUNwQzRCLENBQUc7b0NBQUNDLFNBQVMsRUFBRTdCLG9FQUFjOzs7Ozs7NEdBQzdCb0MsQ0FBQztvQ0FBQ1AsU0FBUyxFQUFFN0IsMkVBQXFCOzhDQUFFLENBQU87Ozs7Ozs7Ozs7OytHQUc3QzRCLENBQUc7NEJBQUNDLFNBQVMsRUFBRTdCLDhFQUF3QjtzQ0FDckNRLFNBQVMsQ0FBQytCLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQU87Z0NBQUtkLE1BQU0sQ0FBTkEsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBRTs7Ozs7OztvR0FHN0NjLENBQU07c0NBQUMsQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBR25CakQsMERBQWM7Ozs7Ozs7Ozs7O0FBR3JCLENBQUMsQ0FDRCxDQUtFO0dBakVzQlMsUUFBUTs7UUFDZkwsU0FBUzs7O0tBREZLLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3F1aXp6L2luZGV4LmpzeD8xZDg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZUFycm93TGVmdCB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBUaXRsZVF1ZXN0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGl0bGVRdWVzdGlvblwiO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vYXBpL2hlbGxvXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGUubW9kdWxlLnNjc3NcIjtcclxuXHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXpVc2VyKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtlcnJvclJlc3BvbnNlLCBzZXRlcnJvclJlc3BvbnNlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3J1bnRpbWVGaW5pc2gsIHNldEh1bnRpbWVGaW5zaWhdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFtjb3VudGVyUXVlc3Rpb24sIHNldENvdW50ZXJRdWVzdGlvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2xpY2VRVWVzdGlvbiwgc2V0U2xpY2VRdWVzdGlvbl0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgdXNlRWZmZWN0KFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IFtcInF1aXp6LnVzZXJcIl06IHVzZXIgfSA9IHBhcnNlQ29va2llcygpO1xyXG4gICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJEZXNjdWxwZSBuw6NvIGNvbnNlZ3VpbW9zIGFjaGFyIG8gdXN1YXJpbyBsb2dhZG8g8J+YtFwiKTtcclxuICAgICAgfVxyXG4gICAgICBhc3luYyBmdW5jdGlvbiBwaWNrVXBRdWVzdGlvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KFwidXNlcnMvcGVyZ3VudGFzLWFsbFwiKTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIHNldFF1ZXN0aW9ucyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHNldGVycm9yUmVzcG9uc2UoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwaWNrVXBRdWVzdGlvbnMoKTtcclxuICAgIH0sXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgICBbXVxyXG4gICk7XHJcbiAgZnVuY3Rpb24gaGFuZGxlTmVRdWVzdGlvbigpIHtcclxuICAgIGNvbnN0IGNvdW50ZXIgPSBjb3VudGVyUXVlc3Rpb247XHJcbiAgICBjb25zdCBzbGljZSA9IHNsaWNlUVVlc3Rpb247XHJcbiAgICBzZXRRdWVzdGlvbihxdWVzdGlvbnMuc2xpY2UoY291bnRlclF1ZXN0aW9uLCBzbGljZVFVZXN0aW9uKSk7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHF1ZXN0aW9uKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXR9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UXVpeno8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICB7ZXJyb3JSZXNwb25zZSA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJMb2FkaW5nfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmd9PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VMb2FkaW5nfT5hZ3VhcmRlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyUXVlc3Rpb259PlxyXG4gICAgICAgICAgICAgIHtxdWVzdGlvbnMubWFwKChlbGVtZW50KSA9PiBjb25zb2xlLmxvZyhcIlwiKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxidXR0b24+IG9uQ2xpY2s8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4vKlxyXG4gIGNsYXNzTmFtZT17c3R5bGVzLmZpbmlzaH1cclxuICBjbGFzc05hbWU9e3N0eWxlcy5yZXNwb25zZX1cclxuICBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX1cclxuICBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Q2FyZH1cclxuKi9cclxuLypcclxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlF1ZXN0aW9uc30ga2V5PXtlbGVtZW50LnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e2VsZW1lbnRbY291bnRlclF1ZXN0aW9uXT8udGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50W2NvdW50ZXJRdWVzdGlvbl0/LmFsdGVybmF0aXZhcz8uYWx0ZXJuYXRpdmFfYX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnRbY291bnRlclF1ZXN0aW9uXT8uYWx0ZXJuYXRpdmFzPy5hbHRlcm5hdGl2YV9ifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudFtjb3VudGVyUXVlc3Rpb25dPy5hbHRlcm5hdGl2YXM/LmFsdGVybmF0aXZhX2N9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50W2NvdW50ZXJRdWVzdGlvbl0/LmFsdGVybmF0aXZhcz8uYWx0ZXJuYXRpdmFfZH1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuKi9cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsIkFpT3V0bGluZUFycm93TGVmdCIsInBhcnNlQ29va2llcyIsInVzZVJvdXRlciIsIkhlYWRlciIsIlRpdGxlUXVlc3QiLCJhcGkiLCJzdHlsZXMiLCJRdWl6VXNlciIsImhhbmRsZU5lUXVlc3Rpb24iLCJjb3VudGVyIiwiY291bnRlclF1ZXN0aW9uIiwic2xpY2UiLCJzbGljZVFVZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJxdWVzdGlvbnMiLCJyb3V0ZXIiLCJlcnJvclJlc3BvbnNlIiwic2V0ZXJyb3JSZXNwb25zZSIsInNldFF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwicnVudGltZUZpbmlzaCIsInNldEh1bnRpbWVGaW5zaWgiLCJzZXRDb3VudGVyUXVlc3Rpb24iLCJzZXRTbGljZVF1ZXN0aW9uIiwidXNlciIsInB1c2giLCJlcnJvciIsInBpY2tVcFF1ZXN0aW9ucyIsInJlc3BvbnNlIiwiZ2V0Iiwic3RhdHVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJsYXlvdXQiLCJ0aXRsZSIsIkNvbnRhaW5lciIsImNhcmQiLCJjb250YWluZXJMb2FkaW5nIiwibG9hZGluZyIsInAiLCJtZXNzYWdlTG9hZGluZyIsImNvbnRhaW5lclF1ZXN0aW9uIiwibWFwIiwiZWxlbWVudCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/quizz/index.jsx\n");

/***/ })

});