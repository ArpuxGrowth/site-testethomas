"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(otherPages)/patients-abroad/page",{

/***/ "(app-pages-browser)/./components/headers/components/Nav3.jsx":
/*!************************************************!*\
  !*** ./components/headers/components/Nav3.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav3; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utlis_menuToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utlis/menuToggle */ \"(app-pages-browser)/./utlis/menuToggle.js\");\n/* harmony import */ var _utlis_scrollToElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utlis/scrollToElement */ \"(app-pages-browser)/./utlis/scrollToElement.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Nav3(param) {\n    let { links } = param;\n    _s();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([\n        -1,\n        -1\n    ]); // Menu aberto no mobile\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false); // Verifica se é mobile\n    const toggleParent1 = (i)=>{\n        const tempMenuOpen = [\n            ...menuOpen\n        ];\n        if (menuOpen[0] === i) {\n            tempMenuOpen[0] = -1;\n        } else {\n            tempMenuOpen[0] = i;\n        }\n        setMenuOpen(tempMenuOpen);\n    };\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    // Lista de abas que não devem ter submenus\n    const noSubMenuTitles = [\n        \"In\\xedcio\",\n        \"Imprensa\",\n        \"Pacientes no Exterior\",\n        \"Cirurgias\",\n        \"Antes e Depois\"\n    ];\n    // Detecta se é mobile (tela <= 1024px)\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setIsMobile(window.innerWidth <= 1024);\n        };\n        handleResize(); // Verificação inicial\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        setTimeout(()=>{\n            (0,_utlis_scrollToElement__WEBPACK_IMPORTED_MODULE_2__.scrollToElement)();\n        }, 1000);\n        (0,_utlis_menuToggle__WEBPACK_IMPORTED_MODULE_1__.init_classic_menu_resize)();\n        window.addEventListener(\"resize\", _utlis_menuToggle__WEBPACK_IMPORTED_MODULE_1__.init_classic_menu_resize);\n        return ()=>{\n            window.removeEventListener(\"resize\", _utlis_menuToggle__WEBPACK_IMPORTED_MODULE_1__.init_classic_menu_resize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: links.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"\".concat(menuOpen[0] === index && isMobile ? \"js-opened\" : \"\").trim(),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: noSubMenuTitles.includes(item.title) ? item.subMenu[0].links[0].href : \"#\",\n                        className: \"mn-has-sub \".concat(item.subMenu && !noSubMenuTitles.includes(item.title) && item.subMenu.some((subItem)=>subItem.links.some((link)=>pathname.split(\"/\")[1] === link.href.split(\"/\")[1])) ? \"active\" : \"\"),\n                        onClick: (e)=>{\n                            if (isMobile && item.title === \"Dr. Thomas\") {\n                                e.preventDefault(); // Evita redirecionamento no mobile\n                                toggleParent1(index);\n                            }\n                        },\n                        children: [\n                            item.title,\n                            isMobile && item.title === \"Dr. Thomas\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                width: \"16\",\n                                height: \"16\",\n                                fill: \"currentColor\",\n                                class: \"bi bi-chevron-down\",\n                                viewBox: \"0 0 16 16\",\n                                children: [\n                                    \"\\xa0\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        \"fill-rule\": \"evenodd\",\n                                        d: \"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    item.subMenu && !noSubMenuTitles.includes(item.title) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"mn-sub mn-has-multi \".concat(isMobile && menuOpen[0] === index ? \"mobile-sub-active\" : \"\"),\n                        children: item.subMenu.map((subItem, subIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"mn-sub-multi\",\n                                children: [\n                                    subItem.title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mn-group-title\",\n                                        children: subItem.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: subItem.links && subItem.links.map((link, linkIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    className: pathname.split(\"/\")[1] === link.href.split(\"/\")[1] ? \"active\" : \"\",\n                                                    href: link.href,\n                                                    children: [\n                                                        link.icon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            className: link.icon\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                                                            lineNumber: 109,\n                                                            columnNumber: 43\n                                                        }, this),\n                                                        \" \",\n                                                        link.text\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 27\n                                                }, this)\n                                            }, linkIndex, false, {\n                                                fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                                                lineNumber: 99,\n                                                columnNumber: 25\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, subIndex, true, {\n                                fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this))\n    }, void 0, false);\n}\n_s(Nav3, \"RXt3ltVlaL95kx+A3ZfR+aQkQbw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n_c = Nav3;\nvar _c;\n$RefreshReg$(_c, \"Nav3\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVhZGVycy9jb21wb25lbnRzL05hdjMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDOEQ7QUFDSjtBQUM3QjtBQUNpQjtBQUNGO0FBRTdCLFNBQVNNLEtBQUssS0FBUztRQUFULEVBQUVDLEtBQUssRUFBRSxHQUFUOztJQUMzQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUM7UUFBQyxDQUFDO1FBQUcsQ0FBQztLQUFFLEdBQUcsd0JBQXdCO0lBQzVFLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQyxRQUFRLHVCQUF1QjtJQUV4RSxNQUFNTyxnQkFBZ0IsQ0FBQ0M7UUFDckIsTUFBTUMsZUFBZTtlQUFJTjtTQUFTO1FBQ2xDLElBQUlBLFFBQVEsQ0FBQyxFQUFFLEtBQUtLLEdBQUc7WUFDckJDLFlBQVksQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNyQixPQUFPO1lBQ0xBLFlBQVksQ0FBQyxFQUFFLEdBQUdEO1FBQ3BCO1FBQ0FKLFlBQVlLO0lBQ2Q7SUFFQSxNQUFNQyxXQUFXWiw0REFBV0E7SUFFNUIsMkNBQTJDO0lBQzNDLE1BQU1hLGtCQUFrQjtRQUFDO1FBQVU7UUFBWTtRQUF5QjtRQUFhO0tBQWlCO0lBRXRHLHVDQUF1QztJQUN2Q1osZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxlQUFlO1lBQ25CTixZQUFZTyxPQUFPQyxVQUFVLElBQUk7UUFDbkM7UUFFQUYsZ0JBQWdCLHNCQUFzQjtRQUN0Q0MsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFDbEMsT0FBTyxJQUFNQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtJQUNwRCxHQUFHLEVBQUU7SUFFTGIsZ0RBQVNBLENBQUM7UUFDUmtCLFdBQVc7WUFDVHJCLHVFQUFlQTtRQUNqQixHQUFHO1FBQ0hELDJFQUF3QkE7UUFDeEJrQixPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVcEIsdUVBQXdCQTtRQUMxRCxPQUFPO1lBQ0xrQixPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVckIsdUVBQXdCQTtRQUMvRDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUNHTyxNQUFNZ0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNoQiw4REFBQ0M7Z0JBRUNDLFdBQVcsR0FBd0QsT0FBckRuQixRQUFRLENBQUMsRUFBRSxLQUFLaUIsU0FBU2YsV0FBVyxjQUFjLElBQUtrQixJQUFJOztrQ0FFekUsOERBQUMxQixpREFBSUE7d0JBQ0gyQixNQUFNYixnQkFBZ0JjLFFBQVEsQ0FBQ04sS0FBS08sS0FBSyxJQUFJUCxLQUFLUSxPQUFPLENBQUMsRUFBRSxDQUFDekIsS0FBSyxDQUFDLEVBQUUsQ0FBQ3NCLElBQUksR0FBRzt3QkFDN0VGLFdBQVcsY0FVVixPQVRDSCxLQUFLUSxPQUFPLElBQ1osQ0FBQ2hCLGdCQUFnQmMsUUFBUSxDQUFDTixLQUFLTyxLQUFLLEtBQ3BDUCxLQUFLUSxPQUFPLENBQUNDLElBQUksQ0FBQyxDQUFDQyxVQUNqQkEsUUFBUTNCLEtBQUssQ0FBQzBCLElBQUksQ0FDaEIsQ0FBQ0UsT0FBU3BCLFNBQVNxQixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBS0QsS0FBS04sSUFBSSxDQUFDTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FHNUQsV0FDQTt3QkFFTkMsU0FBUyxDQUFDQzs0QkFDUixJQUFJNUIsWUFBWWMsS0FBS08sS0FBSyxLQUFLLGNBQWM7Z0NBQzNDTyxFQUFFQyxjQUFjLElBQUksbUNBQW1DO2dDQUN2RDNCLGNBQWNhOzRCQUNoQjt3QkFDRjs7NEJBRUNELEtBQUtPLEtBQUs7NEJBQ1ZyQixZQUNDYyxLQUFLTyxLQUFLLEtBQUssOEJBQ2IsOERBQUNTO2dDQUFJQyxPQUFNO2dDQUE2QkMsT0FBTTtnQ0FBS0MsUUFBTztnQ0FBS0MsTUFBSztnQ0FBZUMsT0FBTTtnQ0FBcUJDLFNBQVE7O29DQUFZO2tEQUVoSSw4REFBQ0M7d0NBQUtDLGFBQVU7d0NBQVVDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFJbkN6QixLQUFLUSxPQUFPLElBQUksQ0FBQ2hCLGdCQUFnQmMsUUFBUSxDQUFDTixLQUFLTyxLQUFLLG1CQUNuRCw4REFBQ21CO3dCQUNDdkIsV0FBVyx1QkFFVixPQURDakIsWUFBWUYsUUFBUSxDQUFDLEVBQUUsS0FBS2lCLFFBQVEsc0JBQXNCO2tDQUczREQsS0FBS1EsT0FBTyxDQUFDVCxHQUFHLENBQUMsQ0FBQ1csU0FBU2lCLHlCQUMxQiw4REFBQ3pCO2dDQUFHQyxXQUFVOztvQ0FDWE8sUUFBUUgsS0FBSyxrQkFDWiw4REFBQ3FCO3dDQUFLekIsV0FBVTtrREFBa0JPLFFBQVFILEtBQUs7Ozs7OztrREFFakQsOERBQUNtQjtrREFDRWhCLFFBQVEzQixLQUFLLElBQ1oyQixRQUFRM0IsS0FBSyxDQUFDZ0IsR0FBRyxDQUFDLENBQUNZLE1BQU1rQiwwQkFDdkIsOERBQUMzQjswREFDQyw0RUFBQ3hCLGlEQUFJQTtvREFDSHlCLFdBQ0VaLFNBQVNxQixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FDdEJELEtBQUtOLElBQUksQ0FBQ08sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQ25CLFdBQ0E7b0RBRU5QLE1BQU1NLEtBQUtOLElBQUk7O3dEQUVkTSxLQUFLbUIsSUFBSSxrQkFBSSw4REFBQ3pDOzREQUFFYyxXQUFXUSxLQUFLbUIsSUFBSTs7Ozs7O3dEQUFNO3dEQUMxQ25CLEtBQUtvQixJQUFJOzs7Ozs7OytDQVhMRjs7Ozs7Ozs7Ozs7K0JBUGlCRjs7Ozs7Ozs7Ozs7ZUF2Q25DMUI7Ozs7OztBQXNFZjtHQW5Id0JuQjs7UUFjTEgsd0RBQVdBOzs7S0FkTkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXJzL2NvbXBvbmVudHMvTmF2My5qc3g/YzE5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgaW5pdF9jbGFzc2ljX21lbnVfcmVzaXplIH0gZnJvbSBcIkAvdXRsaXMvbWVudVRvZ2dsZVwiO1xyXG5pbXBvcnQgeyBzY3JvbGxUb0VsZW1lbnQgfSBmcm9tIFwiQC91dGxpcy9zY3JvbGxUb0VsZW1lbnRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2Myh7IGxpbmtzIH0pIHtcclxuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKFstMSwgLTFdKTsgLy8gTWVudSBhYmVydG8gbm8gbW9iaWxlXHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIFZlcmlmaWNhIHNlIMOpIG1vYmlsZVxyXG5cclxuICBjb25zdCB0b2dnbGVQYXJlbnQxID0gKGkpID0+IHtcclxuICAgIGNvbnN0IHRlbXBNZW51T3BlbiA9IFsuLi5tZW51T3Blbl07XHJcbiAgICBpZiAobWVudU9wZW5bMF0gPT09IGkpIHtcclxuICAgICAgdGVtcE1lbnVPcGVuWzBdID0gLTE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZW1wTWVudU9wZW5bMF0gPSBpO1xyXG4gICAgfVxyXG4gICAgc2V0TWVudU9wZW4odGVtcE1lbnVPcGVuKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcblxyXG4gIC8vIExpc3RhIGRlIGFiYXMgcXVlIG7Do28gZGV2ZW0gdGVyIHN1Ym1lbnVzXHJcbiAgY29uc3Qgbm9TdWJNZW51VGl0bGVzID0gW1wiSW7DrWNpb1wiLCBcIkltcHJlbnNhXCIsIFwiUGFjaWVudGVzIG5vIEV4dGVyaW9yXCIsIFwiQ2lydXJnaWFzXCIsIFwiQW50ZXMgZSBEZXBvaXNcIl07XHJcblxyXG4gIC8vIERldGVjdGEgc2Ugw6kgbW9iaWxlICh0ZWxhIDw9IDEwMjRweClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBzZXRJc01vYmlsZSh3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDI0KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlUmVzaXplKCk7IC8vIFZlcmlmaWNhw6fDo28gaW5pY2lhbFxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzY3JvbGxUb0VsZW1lbnQoKTtcclxuICAgIH0sIDEwMDApO1xyXG4gICAgaW5pdF9jbGFzc2ljX21lbnVfcmVzaXplKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBpbml0X2NsYXNzaWNfbWVudV9yZXNpemUpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaW5pdF9jbGFzc2ljX21lbnVfcmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2xpbmtzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICA8bGlcclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake21lbnVPcGVuWzBdID09PSBpbmRleCAmJiBpc01vYmlsZSA/IFwianMtb3BlbmVkXCIgOiBcIlwifWAudHJpbSgpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e25vU3ViTWVudVRpdGxlcy5pbmNsdWRlcyhpdGVtLnRpdGxlKSA/IGl0ZW0uc3ViTWVudVswXS5saW5rc1swXS5ocmVmIDogXCIjXCJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG1uLWhhcy1zdWIgJHtcclxuICAgICAgICAgICAgICBpdGVtLnN1Yk1lbnUgJiZcclxuICAgICAgICAgICAgICAhbm9TdWJNZW51VGl0bGVzLmluY2x1ZGVzKGl0ZW0udGl0bGUpICYmXHJcbiAgICAgICAgICAgICAgaXRlbS5zdWJNZW51LnNvbWUoKHN1Ykl0ZW0pID0+XHJcbiAgICAgICAgICAgICAgICBzdWJJdGVtLmxpbmtzLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgIChsaW5rKSA9PiBwYXRobmFtZS5zcGxpdChcIi9cIilbMV0gPT09IGxpbmsuaHJlZi5zcGxpdChcIi9cIilbMV1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA/IFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoaXNNb2JpbGUgJiYgaXRlbS50aXRsZSA9PT0gXCJEci4gVGhvbWFzXCIpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gRXZpdGEgcmVkaXJlY2lvbmFtZW50byBubyBtb2JpbGVcclxuICAgICAgICAgICAgICAgIHRvZ2dsZVBhcmVudDEoaW5kZXgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgIHtpc01vYmlsZSAmJlxyXG4gICAgICAgICAgICAgIGl0ZW0udGl0bGUgPT09IFwiRHIuIFRob21hc1wiICYmICggLy8gU2V0YSBzb21lbnRlIHBhcmEgXCJEci4gVGhvbWFzXCIgbm8gbW9iaWxlXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1jaGV2cm9uLWRvd25cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xLjY0NiA0LjY0NmEuNS41IDAgMCAxIC43MDggMEw4IDEwLjI5M2w1LjY0Ni01LjY0N2EuNS41IDAgMCAxIC43MDguNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4IDBsLTYtNmEuNS41IDAgMCAxIDAtLjcwOFwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICB7aXRlbS5zdWJNZW51ICYmICFub1N1Yk1lbnVUaXRsZXMuaW5jbHVkZXMoaXRlbS50aXRsZSkgJiYgKFxyXG4gICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Btbi1zdWIgbW4taGFzLW11bHRpICR7XHJcbiAgICAgICAgICAgICAgICBpc01vYmlsZSAmJiBtZW51T3BlblswXSA9PT0gaW5kZXggPyBcIm1vYmlsZS1zdWItYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aXRlbS5zdWJNZW51Lm1hcCgoc3ViSXRlbSwgc3ViSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtbi1zdWItbXVsdGlcIiBrZXk9e3N1YkluZGV4fT5cclxuICAgICAgICAgICAgICAgICAge3N1Ykl0ZW0udGl0bGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1uLWdyb3VwLXRpdGxlXCI+e3N1Ykl0ZW0udGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge3N1Ykl0ZW0ubGlua3MgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHN1Ykl0ZW0ubGlua3MubWFwKChsaW5rLCBsaW5rSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bGlua0luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmhyZWYuc3BsaXQoXCIvXCIpWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpbmsuaWNvbiAmJiA8aSBjbGFzc05hbWU9e2xpbmsuaWNvbn0gLz59e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpbmsudGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiaW5pdF9jbGFzc2ljX21lbnVfcmVzaXplIiwic2Nyb2xsVG9FbGVtZW50IiwiTGluayIsInVzZVBhdGhuYW1lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOYXYzIiwibGlua3MiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsInRvZ2dsZVBhcmVudDEiLCJpIiwidGVtcE1lbnVPcGVuIiwicGF0aG5hbWUiLCJub1N1Yk1lbnVUaXRsZXMiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiLCJjbGFzc05hbWUiLCJ0cmltIiwiaHJlZiIsImluY2x1ZGVzIiwidGl0bGUiLCJzdWJNZW51Iiwic29tZSIsInN1Ykl0ZW0iLCJsaW5rIiwic3BsaXQiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3ZnIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsImZpbGwiLCJjbGFzcyIsInZpZXdCb3giLCJwYXRoIiwiZmlsbC1ydWxlIiwiZCIsInVsIiwic3ViSW5kZXgiLCJzcGFuIiwibGlua0luZGV4IiwiaWNvbiIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/headers/components/Nav3.jsx\n"));

/***/ })

});