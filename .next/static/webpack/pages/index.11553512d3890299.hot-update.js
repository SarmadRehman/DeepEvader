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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Common_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Common/Spinner */ \"./components/Common/Spinner.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ApiCom = ()=>{\n    _s();\n    const [dataset, setDataset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"FGSM\"); // Set initial value to \"FGSM\"\n    const [model, setModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Celebmodel.h5\"); // Set initial value to \"Celebmodel.h5\"\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setLoading(true);\n        setResponse(null);\n        setErrorMessage(\"\");\n        try {\n            // Make a GET request to your backend endpoint\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/predict?dataset=${dataset}&model=${model}\");\n            // Check if the response status is 200\n            if (response.status === 200) {\n                setResponse(response.data);\n            } else {\n                throw new Error(\"Failed to fetch data\");\n            }\n        } catch (error) {\n            setErrorMessage(\"An error occurred. Please try again later.\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:w-[50%] w-full flex justify-center items-start flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"w-full flex flex-col gap-6 justify-center items-center\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex gap-3 justify-center items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"text-blue-main text-[22px]\",\n                                children: \"Dataset:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"max-w-[260px] w-full h-[45px] border-[1px] border-blue-main rounded-md focus:outline-none\",\n                                value: dataset,\n                                onChange: (e)=>setDataset(e.target.value),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"FGSM\",\n                                    children: \"FGSM\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex gap-3 justify-center items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"text-blue-main text-[22px]\",\n                                children: \"Model:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"max-w-[260px] w-full h-[45px] border-[1px] border-blue-main rounded-md focus:outline-none\",\n                                value: model,\n                                onChange: (e)=>setModel(e.target.value),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Celebmodel.h5\",\n                                    children: \"Celebmodel.h5\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex justify-center items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"px-8 text-[20px] py-2 text-white bg-blue-main rounded-lg\",\n                                type: \"submit\",\n                                disabled: loading,\n                                children: loading ? \"Loading...\" : \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"px-8 text-[20px] py-2 text-white bg-blue-main rounded-lg space-betweenm\",\n                                children: \"Back \\uD83D\\uDC48\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-6\",\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                lineNumber: 79,\n                columnNumber: 24\n            }, undefined),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-8 w-full flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Spinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 12\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, undefined),\n            response && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Result:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                        children: JSON.stringify(response, null, 2)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sarmad Rehman\\\\Desktop\\\\DeepEvader\\\\components\\\\Landing_Page\\\\ApiCom\\\\ApiCom.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ApiCom, \"fJmbzxFMfNKqrAx20TleWOzDEVw=\");\n_c = ApiCom;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ApiCom);\nvar _c;\n$RefreshReg$(_c, \"ApiCom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhbmRpbmdfUGFnZS9BcGlDb20vQXBpQ29tLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDZDtBQUN3QjtBQUVsRCxNQUFNSSxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQyxTQUFTLDhCQUE4QjtJQUM5RSxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUMsa0JBQWtCLHVDQUF1QztJQUM1RixNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1ksY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1jLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEJQLFdBQVc7UUFDWEUsWUFBWTtRQUNaRSxnQkFBZ0I7UUFFaEIsSUFBSTtZQUNGLDhDQUE4QztZQUM5QyxNQUFNSCxXQUFXLE1BQU1ULGlEQUFTLENBQzlCO1lBR0Ysc0NBQXNDO1lBQ3RDLElBQUlTLFNBQVNRLE1BQU0sS0FBSyxLQUFLO2dCQUMzQlAsWUFBWUQsU0FBU1MsSUFBSTtZQUMzQixPQUFPO2dCQUNMLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtRQUNGLEVBQUUsT0FBT0MsT0FBTztZQUNkUixnQkFBZ0I7UUFDbEIsU0FBVTtZQUNSSixXQUFXO1FBQ2I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQ0NELFdBQVU7Z0JBQ1ZFLFVBQVVYOztrQ0FFViw4REFBQ1E7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRztnQ0FBTUgsV0FBVTswQ0FBNkI7Ozs7OzswQ0FDOUMsOERBQUNJO2dDQUNDSixXQUFVO2dDQUNWSyxPQUFPeEI7Z0NBQ1B5QixVQUFVLENBQUNkLElBQU1WLFdBQVdVLEVBQUVlLE1BQU0sQ0FBQ0YsS0FBSzswQ0FFMUMsNEVBQUNHO29DQUFPSCxPQUFNOzhDQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJekIsOERBQUNOO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQU1ILFdBQVU7MENBQTZCOzs7Ozs7MENBQzlDLDhEQUFDSTtnQ0FDQ0osV0FBVTtnQ0FDVkssT0FBT3RCO2dDQUNQdUIsVUFBVSxDQUFDZCxJQUFNUixTQUFTUSxFQUFFZSxNQUFNLENBQUNGLEtBQUs7MENBRXhDLDRFQUFDRztvQ0FBT0gsT0FBTTs4Q0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlsQyw4REFBQ047d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDUztnQ0FDQ1QsV0FBVTtnQ0FDVlUsTUFBSztnQ0FDTEMsVUFBVTFCOzBDQUVUQSxVQUFVLGVBQWU7Ozs7OzswQ0FFNUIsOERBQUN3QjtnQ0FBT1QsV0FBVTswQ0FBMEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU0vRlgsOEJBQWdCLDhEQUFDdUI7Z0JBQUVaLFdBQVU7MEJBQVFYOzs7Ozs7WUFFckNKLHlCQUNDLDhEQUFDMkI7Z0JBQUVaLFdBQVU7MEJBQ1YsNEVBQUNyQixrRUFBT0E7Ozs7Ozs7Ozs7WUFJWlEsMEJBQ0MsOERBQUNZO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1k7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0M7a0NBQUtDLEtBQUtDLFNBQVMsQ0FBQzVCLFVBQVUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSy9DO0dBMUZNUDtLQUFBQTtBQTRGTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xhbmRpbmdfUGFnZS9BcGlDb20vQXBpQ29tLnRzeD84MTNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Db21tb24vU3Bpbm5lclwiO1xuXG5jb25zdCBBcGlDb20gPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhc2V0LCBzZXREYXRhc2V0XSA9IHVzZVN0YXRlKFwiRkdTTVwiKTsgLy8gU2V0IGluaXRpYWwgdmFsdWUgdG8gXCJGR1NNXCJcbiAgY29uc3QgW21vZGVsLCBzZXRNb2RlbF0gPSB1c2VTdGF0ZShcIkNlbGVibW9kZWwuaDVcIik7IC8vIFNldCBpbml0aWFsIHZhbHVlIHRvIFwiQ2VsZWJtb2RlbC5oNVwiXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRSZXNwb25zZShudWxsKTtcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XG5cbiAgICB0cnkge1xuICAgICAgLy8gTWFrZSBhIEdFVCByZXF1ZXN0IHRvIHlvdXIgYmFja2VuZCBlbmRwb2ludFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgIFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL3ByZWRpY3Q/ZGF0YXNldD0ke2RhdGFzZXR9Jm1vZGVsPSR7bW9kZWx9XCJcbiAgICAgICk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSByZXNwb25zZSBzdGF0dXMgaXMgMjAwXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgc2V0UmVzcG9uc2UocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YVwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiQW4gZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctWzUwJV0gdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgZmxleC1jb2xcIj5cbiAgICAgIDxmb3JtXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGdhcC02IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZ2FwLTMganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtYmx1ZS1tYWluIHRleHQtWzIycHhdXCI+RGF0YXNldDo8L2xhYmVsPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LVsyNjBweF0gdy1mdWxsIGgtWzQ1cHhdIGJvcmRlci1bMXB4XSBib3JkZXItYmx1ZS1tYWluIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREYXRhc2V0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRkdTTVwiPkZHU008L29wdGlvbj5cbiAgICAgICAgICAgIHsvKiBBZGQgbW9yZSBvcHRpb25zIGlmIG5lZWRlZCAqL31cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZ2FwLTMganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtYmx1ZS1tYWluIHRleHQtWzIycHhdXCI+TW9kZWw6PC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1bMjYwcHhdIHctZnVsbCBoLVs0NXB4XSBib3JkZXItWzFweF0gYm9yZGVyLWJsdWUtbWFpbiByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICB2YWx1ZT17bW9kZWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1vZGVsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2VsZWJtb2RlbC5oNVwiPkNlbGVibW9kZWwuaDU8L29wdGlvbj5cbiAgICAgICAgICAgIHsvKiBBZGQgbW9yZSBvcHRpb25zIGlmIG5lZWRlZCAqL31cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtOCB0ZXh0LVsyMHB4XSBweS0yIHRleHQtd2hpdGUgYmctYmx1ZS1tYWluIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bG9hZGluZyA/IFwiTG9hZGluZy4uLlwiIDogXCJTdWJtaXRcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTggdGV4dC1bMjBweF0gcHktMiB0ZXh0LXdoaXRlIGJnLWJsdWUtbWFpbiByb3VuZGVkLWxnIHNwYWNlLWJldHdlZW5tXCI+XG4gICAgICAgICAgICBCYWNrIPCfkYhcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIHtlcnJvck1lc3NhZ2UgJiYgPHAgY2xhc3NOYW1lPVwibXQtNlwiPntlcnJvck1lc3NhZ2V9PC9wPn1cblxuICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC04IHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIHs8U3Bpbm5lciAvPn1cbiAgICAgICAgPC9wPlxuICAgICAgKX1cblxuICAgICAge3Jlc3BvbnNlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMFwiPlxuICAgICAgICAgIDxwPlJlc3VsdDo8L3A+XG4gICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcGlDb207XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiU3Bpbm5lciIsIkFwaUNvbSIsImRhdGFzZXQiLCJzZXREYXRhc2V0IiwibW9kZWwiLCJzZXRNb2RlbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImdldCIsInN0YXR1cyIsImRhdGEiLCJFcnJvciIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJzZWxlY3QiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib3B0aW9uIiwiYnV0dG9uIiwidHlwZSIsImRpc2FibGVkIiwicCIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Landing_Page/ApiCom/ApiCom.tsx\n"));

/***/ })

});