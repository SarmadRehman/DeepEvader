"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Landing_Page/ApiCom/ApiCom.tsx":
/*!***************************************************!*\
  !*** ./components/Landing_Page/ApiCom/ApiCom.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Common_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Common/Spinner */ \"./components/Common/Spinner.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ApiCom = ()=>{\n    _s();\n    const [dataset, setDataset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"FGSM\"); // Set initial value to \"FGSM\"\n    const [model, setModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Celebmodel.h5\"); // Set initial value to \"Celebmodel.h5\"\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setLoading(true);\n        setResponse(null);\n        setErrorMessage(\"\");\n        try {\n            // Make a GET request to your backend endpoint\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/predict?dataset=${dataset}&model=${model}\");\n            // Check if the response status is 200\n            if (response.status === 200) {\n                setResponse(response.data);\n            } else {\n                throw new Error(\"Failed to fetch data\");\n            }\n        } catch (error) {\n            setErrorMessage(\"An error occurred. Please try again later.\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:w-[50%] w-full flex justify-center items-start flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"w-full flex flex-col gap-6 justify-center items-center\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex gap-3 justify-center items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"text-blue-main text-[22px]\",\n                                children: \"Dataset:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"max-w-[260px] w-full h-[45px] border-[1px] border-blue-main rounded-md focus:outline-none\",\n                                value: dataset,\n                                onChange: (e)=>setDataset(e.target.value),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"FGSM\",\n                                    children: \"FGSM\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex gap-3 justify-center items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"text-blue-main text-[22px]\",\n                                children: \"Model:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"max-w-[260px] w-full h-[45px] border-[1px] border-blue-main rounded-md focus:outline-none\",\n                                value: model,\n                                onChange: (e)=>setModel(e.target.value),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Celebmodel.h5\",\n                                    children: \"Celebmodel.h5\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex justify-center items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"px-8 text-[20px] py-2 text-white bg-blue-main rounded-lg\",\n                            type: \"submit\",\n                            disabled: loading,\n                            children: loading ? \"Loading...\" : \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mx-12 px-8 text-[20px] py-2 text-white bg-blue-main rounded-lg gap-4\",\n                        children: \"Back \\uD83D\\uDC48\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-6\",\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                lineNumber: 79,\n                columnNumber: 24\n            }, undefined),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-8 w-full flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Spinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 12\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, undefined),\n            response && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Result:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                        children: JSON.stringify(response, null, 2)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ApiCom, \"fJmbzxFMfNKqrAx20TleWOzDEVw=\");\n_c = ApiCom;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ApiCom);\nvar _c;\n$RefreshReg$(_c, \"ApiCom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhbmRpbmdfUGFnZS9BcGlDb20vQXBpQ29tLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDZDtBQUN3QjtBQUVsRCxNQUFNSSxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQyxTQUFTLDhCQUE4QjtJQUM5RSxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUMsa0JBQWtCLHVDQUF1QztJQUM1RixNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1ksY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1jLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEJQLFdBQVc7UUFDWEUsWUFBWTtRQUNaRSxnQkFBZ0I7UUFFaEIsSUFBSTtZQUNGLDhDQUE4QztZQUM5QyxNQUFNSCxXQUFXLE1BQU1ULGlEQUFTLENBQzlCO1lBR0Ysc0NBQXNDO1lBQ3RDLElBQUlTLFNBQVNRLE1BQU0sS0FBSyxLQUFLO2dCQUMzQlAsWUFBWUQsU0FBU1MsSUFBSTtZQUMzQixPQUFPO2dCQUNMLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtRQUNGLEVBQUUsT0FBT0MsT0FBTztZQUNkUixnQkFBZ0I7UUFDbEIsU0FBVTtZQUNSSixXQUFXO1FBQ2I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQ0NELFdBQVU7Z0JBQ1ZFLFVBQVVYOztrQ0FFViw4REFBQ1E7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRztnQ0FBTUgsV0FBVTswQ0FBNkI7Ozs7OzswQ0FDOUMsOERBQUNJO2dDQUNDSixXQUFVO2dDQUNWSyxPQUFPeEI7Z0NBQ1B5QixVQUFVLENBQUNkLElBQU1WLFdBQVdVLEVBQUVlLE1BQU0sQ0FBQ0YsS0FBSzswQ0FFMUMsNEVBQUNHO29DQUFPSCxPQUFNOzhDQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJekIsOERBQUNOO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQU1ILFdBQVU7MENBQTZCOzs7Ozs7MENBQzlDLDhEQUFDSTtnQ0FDQ0osV0FBVTtnQ0FDVkssT0FBT3RCO2dDQUNQdUIsVUFBVSxDQUFDZCxJQUFNUixTQUFTUSxFQUFFZSxNQUFNLENBQUNGLEtBQUs7MENBRXhDLDRFQUFDRztvQ0FBT0gsT0FBTTs4Q0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlsQyw4REFBQ047d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNTOzRCQUNDVCxXQUFVOzRCQUNWVSxNQUFLOzRCQUNMQyxVQUFVMUI7c0NBRVRBLFVBQVUsZUFBZTs7Ozs7Ozs7Ozs7a0NBRzlCLDhEQUFDd0I7d0JBQU9ULFdBQVU7a0NBQXVFOzs7Ozs7Ozs7Ozs7WUFLMUZYLDhCQUFnQiw4REFBQ3VCO2dCQUFFWixXQUFVOzBCQUFRWDs7Ozs7O1lBRXJDSix5QkFDQyw4REFBQzJCO2dCQUFFWixXQUFVOzBCQUNWLDRFQUFDckIsa0VBQU9BOzs7Ozs7Ozs7O1lBSVpRLDBCQUNDLDhEQUFDWTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNZO2tDQUFFOzs7Ozs7a0NBQ0gsOERBQUNDO2tDQUFLQyxLQUFLQyxTQUFTLENBQUM1QixVQUFVLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvQztHQTFGTVA7S0FBQUE7QUE0Rk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5kaW5nX1BhZ2UvQXBpQ29tL0FwaUNvbS50c3g/ODEzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCJAL2NvbXBvbmVudHMvQ29tbW9uL1NwaW5uZXJcIjtcblxuY29uc3QgQXBpQ29tID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YXNldCwgc2V0RGF0YXNldF0gPSB1c2VTdGF0ZShcIkZHU01cIik7IC8vIFNldCBpbml0aWFsIHZhbHVlIHRvIFwiRkdTTVwiXG4gIGNvbnN0IFttb2RlbCwgc2V0TW9kZWxdID0gdXNlU3RhdGUoXCJDZWxlYm1vZGVsLmg1XCIpOyAvLyBTZXQgaW5pdGlhbCB2YWx1ZSB0byBcIkNlbGVibW9kZWwuaDVcIlxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogYW55KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0UmVzcG9uc2UobnVsbCk7XG4gICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIE1ha2UgYSBHRVQgcmVxdWVzdCB0byB5b3VyIGJhY2tlbmQgZW5kcG9pbnRcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wcmVkaWN0P2RhdGFzZXQ9JHtkYXRhc2V0fSZtb2RlbD0ke21vZGVsfVwiXG4gICAgICApO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgcmVzcG9uc2Ugc3RhdHVzIGlzIDIwMFxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHNldFJlc3BvbnNlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGRhdGFcIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIkFuIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LVs1MCVdIHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IGZsZXgtY29sXCI+XG4gICAgICA8Zm9ybVxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBnYXAtNiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGdhcC0zIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtbWFpbiB0ZXh0LVsyMnB4XVwiPkRhdGFzZXQ6PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1bMjYwcHhdIHctZnVsbCBoLVs0NXB4XSBib3JkZXItWzFweF0gYm9yZGVyLWJsdWUtbWFpbiByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICB2YWx1ZT17ZGF0YXNldH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGF0YXNldChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZHU01cIj5GR1NNPC9vcHRpb24+XG4gICAgICAgICAgICB7LyogQWRkIG1vcmUgb3B0aW9ucyBpZiBuZWVkZWQgKi99XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGdhcC0zIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtbWFpbiB0ZXh0LVsyMnB4XVwiPk1vZGVsOjwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctWzI2MHB4XSB3LWZ1bGwgaC1bNDVweF0gYm9yZGVyLVsxcHhdIGJvcmRlci1ibHVlLW1haW4gcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgdmFsdWU9e21vZGVsfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNb2RlbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNlbGVibW9kZWwuaDVcIj5DZWxlYm1vZGVsLmg1PC9vcHRpb24+XG4gICAgICAgICAgICB7LyogQWRkIG1vcmUgb3B0aW9ucyBpZiBuZWVkZWQgKi99XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTggdGV4dC1bMjBweF0gcHktMiB0ZXh0LXdoaXRlIGJnLWJsdWUtbWFpbiByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xvYWRpbmcgPyBcIkxvYWRpbmcuLi5cIiA6IFwiU3VibWl0XCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm14LTEyIHB4LTggdGV4dC1bMjBweF0gcHktMiB0ZXh0LXdoaXRlIGJnLWJsdWUtbWFpbiByb3VuZGVkLWxnIGdhcC00XCI+XG4gICAgICAgICAgQmFjayDwn5GIXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICB7ZXJyb3JNZXNzYWdlICYmIDxwIGNsYXNzTmFtZT1cIm10LTZcIj57ZXJyb3JNZXNzYWdlfTwvcD59XG5cbiAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtOCB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICB7PFNwaW5uZXIgLz59XG4gICAgICAgIDwvcD5cbiAgICAgICl9XG5cbiAgICAgIHtyZXNwb25zZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cbiAgICAgICAgICA8cD5SZXN1bHQ6PC9wPlxuICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLCBudWxsLCAyKX08L3ByZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBpQ29tO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIlNwaW5uZXIiLCJBcGlDb20iLCJkYXRhc2V0Iiwic2V0RGF0YXNldCIsIm1vZGVsIiwic2V0TW9kZWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJnZXQiLCJzdGF0dXMiLCJkYXRhIiwiRXJyb3IiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9wdGlvbiIsImJ1dHRvbiIsInR5cGUiLCJkaXNhYmxlZCIsInAiLCJwcmUiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Landing_Page/ApiCom/ApiCom.tsx\n"));

/***/ })

});