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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuizUser; }\n/* harmony export */ });\n/* harmony import */ var D_next_quizz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_next_quizz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_next_quizz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header/index.jsx\");\n/* harmony import */ var _components_TitleQuestion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/TitleQuestion */ \"./src/components/TitleQuestion/index.jsx\");\n/* harmony import */ var _api_hello__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/hello */ \"./src/pages/api/hello.js\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.module.scss */ \"./src/pages/quizz/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction QuizUser() {\n    var _this = this;\n    var handleQuestion = function handleQuestion() {\n        setQuestion(questions.slice(counterQuestion, sliceQUestion));\n        seterrorResponse(false);\n    };\n    var handleNewQuestion = function handleNewQuestion() {\n        var nextQuestion = counterQuestion + sliceQUestion;\n        var newSlice = nextQuestion + sliceQUestion;\n        console.log(nextQuestion, newSlice);\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), errorResponse = ref6[0], seterrorResponse = ref6[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), questions = ref1[0], setQuestions = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), question = ref2[0], setQuestion = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), runtimeFinish = ref3[0], setHuntimeFinsih = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), counterQuestion = ref4[0], setCounterQuestion = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), sliceQUestion = ref5[0], setSliceQuestion = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(), user = ref[\"quizz.user\"];\n        if (!user) {\n            router.push(\"/\");\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Desculpe n\\xe3o conseguimos achar o usuario logado 😴\");\n        }\n        function pickUpQuestions() {\n            return _pickUpQuestions.apply(this, arguments);\n        }\n        function _pickUpQuestions() {\n            _pickUpQuestions = _asyncToGenerator(D_next_quizz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response;\n                return D_next_quizz_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _api_hello__WEBPACK_IMPORTED_MODULE_9__.api.get(\"users/perguntas-all\");\n                        case 2:\n                            response = _ctx.sent;\n                            if (response.status === 200) {\n                                setQuestions(response.data);\n                            }\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _pickUpQuestions.apply(this, arguments);\n        }\n        pickUpQuestions();\n    }, // eslint-disable-next-line react-hooks/exhaustive-deps\n    []);\n    console.log(question);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().layout),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \"Quizz\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_7__.Header, {}, void 0, false, {\n                fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().Container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().card),\n                    children: errorResponse ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().containerLoading),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().loading)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().messageLoading),\n                                children: \"aguarde\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: handleQuestion,\n                                children: \"question\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().containerQuestion),\n                        children: question.map(function(element) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        children: element.title\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        children: element.alternativas.alternativa_a\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        children: element.alternativas.alternativa_b\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        children: element.alternativas.alternativa_c\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        children: element.alternativas.alternativa_d\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        onClick: handleNewQuestion,\n                                        children: \"next question\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 21\n                                    }, _this)\n                                ]\n                            }, element.title, true, {\n                                fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 19\n                            }, _this));\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}, void 0, false, {\n                fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\next\\\\quizz\\\\src\\\\pages\\\\quizz\\\\index.jsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this));\n}; /*\r\n  className={styles.finish}\r\n  className={styles.response}\r\n  className={styles.title}\r\n  className={styles.contentCard}\r\n*/  /*\r\n  <div className={styles.Questions} key={element.title}>\r\n                  <div>\r\n                    <h3>{element[counterQuestion]?.title}</h3>\r\n                  </div>\r\n                  <div>\r\n                    <button>\r\n                      {element[counterQuestion]?.alternativas?.alternativa_a}\r\n                    </button>\r\n                    <button>\r\n                      {element[counterQuestion]?.alternativas?.alternativa_b}\r\n                    </button>\r\n                    <button>\r\n                      {element[counterQuestion]?.alternativas?.alternativa_c}\r\n                    </button>\r\n                    <button>\r\n                      {element[counterQuestion]?.alternativas?.alternativa_d}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n*/ \n_s(QuizUser, \"YZekSI1kwHcaYFpwY66+bUznduY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = QuizUser;\nvar _c;\n$RefreshReg$(_c, \"QuizUser\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3F1aXp6L2luZGV4LmpzeD8xZDg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZUFycm93TGVmdCB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBUaXRsZVF1ZXN0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGl0bGVRdWVzdGlvblwiO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vYXBpL2hlbGxvXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGUubW9kdWxlLnNjc3NcIjtcclxuXHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXpVc2VyKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtlcnJvclJlc3BvbnNlLCBzZXRlcnJvclJlc3BvbnNlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3J1bnRpbWVGaW5pc2gsIHNldEh1bnRpbWVGaW5zaWhdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFtjb3VudGVyUXVlc3Rpb24sIHNldENvdW50ZXJRdWVzdGlvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2xpY2VRVWVzdGlvbiwgc2V0U2xpY2VRdWVzdGlvbl0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgdXNlRWZmZWN0KFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IFtcInF1aXp6LnVzZXJcIl06IHVzZXIgfSA9IHBhcnNlQ29va2llcygpO1xyXG4gICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJEZXNjdWxwZSBuw6NvIGNvbnNlZ3VpbW9zIGFjaGFyIG8gdXN1YXJpbyBsb2dhZG8g8J+YtFwiKTtcclxuICAgICAgfVxyXG4gICAgICBhc3luYyBmdW5jdGlvbiBwaWNrVXBRdWVzdGlvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KFwidXNlcnMvcGVyZ3VudGFzLWFsbFwiKTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIHNldFF1ZXN0aW9ucyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcGlja1VwUXVlc3Rpb25zKCk7XHJcbiAgICB9LFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgW11cclxuICApO1xyXG4gIGZ1bmN0aW9uIGhhbmRsZVF1ZXN0aW9uKCkge1xyXG4gICAgc2V0UXVlc3Rpb24ocXVlc3Rpb25zLnNsaWNlKGNvdW50ZXJRdWVzdGlvbiwgc2xpY2VRVWVzdGlvbikpO1xyXG4gICAgc2V0ZXJyb3JSZXNwb25zZShmYWxzZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1F1ZXN0aW9uKCkge1xyXG4gICAgY29uc3QgbmV4dFF1ZXN0aW9uID0gY291bnRlclF1ZXN0aW9uICsgc2xpY2VRVWVzdGlvbjtcclxuICAgIGNvbnN0IG5ld1NsaWNlID0gbmV4dFF1ZXN0aW9uICsgc2xpY2VRVWVzdGlvbjtcclxuICAgIGNvbnNvbGUubG9nKG5leHRRdWVzdGlvbiwgbmV3U2xpY2UpO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhxdWVzdGlvbik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0fT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlF1aXp6PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAge2Vycm9yUmVzcG9uc2UgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyTG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkaW5nfT48L2Rpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlTG9hZGluZ30+YWd1YXJkZTwvcD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVF1ZXN0aW9ufT5xdWVzdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyUXVlc3Rpb259PlxyXG4gICAgICAgICAgICAgIHtxdWVzdGlvbi5tYXAoKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtlbGVtZW50LnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e2VsZW1lbnQudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPntlbGVtZW50LmFsdGVybmF0aXZhcy5hbHRlcm5hdGl2YV9hfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+e2VsZW1lbnQuYWx0ZXJuYXRpdmFzLmFsdGVybmF0aXZhX2J9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj57ZWxlbWVudC5hbHRlcm5hdGl2YXMuYWx0ZXJuYXRpdmFfY308L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPntlbGVtZW50LmFsdGVybmF0aXZhcy5hbHRlcm5hdGl2YV9kfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTmV3UXVlc3Rpb259Pm5leHQgcXVlc3Rpb248L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuLypcclxuICBjbGFzc05hbWU9e3N0eWxlcy5maW5pc2h9XHJcbiAgY2xhc3NOYW1lPXtzdHlsZXMucmVzcG9uc2V9XHJcbiAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9XHJcbiAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudENhcmR9XHJcbiovXHJcbi8qXHJcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5RdWVzdGlvbnN9IGtleT17ZWxlbWVudC50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPntlbGVtZW50W2NvdW50ZXJRdWVzdGlvbl0/LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudFtjb3VudGVyUXVlc3Rpb25dPy5hbHRlcm5hdGl2YXM/LmFsdGVybmF0aXZhX2F9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50W2NvdW50ZXJRdWVzdGlvbl0/LmFsdGVybmF0aXZhcz8uYWx0ZXJuYXRpdmFfYn1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnRbY291bnRlclF1ZXN0aW9uXT8uYWx0ZXJuYXRpdmFzPy5hbHRlcm5hdGl2YV9jfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudFtjb3VudGVyUXVlc3Rpb25dPy5hbHRlcm5hdGl2YXM/LmFsdGVybmF0aXZhX2R9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiovXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJBaU91dGxpbmVBcnJvd0xlZnQiLCJwYXJzZUNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJUaXRsZVF1ZXN0IiwiYXBpIiwic3R5bGVzIiwiUXVpelVzZXIiLCJoYW5kbGVRdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwicXVlc3Rpb25zIiwic2xpY2UiLCJjb3VudGVyUXVlc3Rpb24iLCJzbGljZVFVZXN0aW9uIiwic2V0ZXJyb3JSZXNwb25zZSIsImhhbmRsZU5ld1F1ZXN0aW9uIiwibmV4dFF1ZXN0aW9uIiwibmV3U2xpY2UiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwiZXJyb3JSZXNwb25zZSIsInNldFF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwicnVudGltZUZpbmlzaCIsInNldEh1bnRpbWVGaW5zaWgiLCJzZXRDb3VudGVyUXVlc3Rpb24iLCJzZXRTbGljZVF1ZXN0aW9uIiwidXNlciIsInB1c2giLCJlcnJvciIsInBpY2tVcFF1ZXN0aW9ucyIsInJlc3BvbnNlIiwiZ2V0Iiwic3RhdHVzIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImxheW91dCIsInRpdGxlIiwiQ29udGFpbmVyIiwiY2FyZCIsImNvbnRhaW5lckxvYWRpbmciLCJsb2FkaW5nIiwicCIsIm1lc3NhZ2VMb2FkaW5nIiwiYnV0dG9uIiwib25DbGljayIsImNvbnRhaW5lclF1ZXN0aW9uIiwibWFwIiwiZWxlbWVudCIsImgzIiwiYWx0ZXJuYXRpdmFzIiwiYWx0ZXJuYXRpdmFfYSIsImFsdGVybmF0aXZhX2IiLCJhbHRlcm5hdGl2YV9jIiwiYWx0ZXJuYXRpdmFfZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/quizz/index.jsx\n");

/***/ })

});