"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(portfolio)/before-after/page",{

/***/ "(app-pages-browser)/./components/headers/components/Nav3.jsx":
/*!************************************************!*\
  !*** ./components/headers/components/Nav3.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav3; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utlis_menuToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utlis/menuToggle */ \"(app-pages-browser)/./utlis/menuToggle.js\");\n/* harmony import */ var _utlis_scrollToElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utlis/scrollToElement */ \"(app-pages-browser)/./utlis/scrollToElement.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Nav3(param) {\n    let { links } = param;\n    _s();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null); // Controla qual menu está aberto no mobile\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false); // Detecta se está no mobile\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    // Alternar submenu no mobile\n    const toggleSubMenu = (index)=>{\n        setMenuOpen((prev)=>prev === index ? null : index);\n    };\n    // Detectar dispositivos móveis\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setIsMobile(window.innerWidth <= 1024); // Define largura limite para mobile\n        };\n        handleResize(); // Detectar largura inicial\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    // Inicializar configurações do menu\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        setTimeout(()=>{\n            (0,_utlis_scrollToElement__WEBPACK_IMPORTED_MODULE_2__.scrollToElement)();\n        }, 1000);\n        (0,_utlis_menuToggle__WEBPACK_IMPORTED_MODULE_1__.init_classic_menu_resize)();\n        window.addEventListener(\"resize\", _utlis_menuToggle__WEBPACK_IMPORTED_MODULE_1__.init_classic_menu_resize);\n        return ()=>{\n            window.removeEventListener(\"resize\", _utlis_menuToggle__WEBPACK_IMPORTED_MODULE_1__.init_classic_menu_resize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: links.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"nav-item \".concat(menuOpen === index ? \"js-opened\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: item.subMenu && item.subMenu.length > 0 ? item.subMenu[0].links[0].href : \"#\",\n                        onClick: (e)=>{\n                            if (isMobile && item.subMenu && item.subMenu.length > 0) {\n                                e.preventDefault(); // Impede navegação no mobile se houver submenu\n                                toggleSubMenu(index); // Alternar submenu\n                            }\n                        },\n                        className: \"mn-has-sub \".concat(item.subMenu && item.subMenu.some((submenu)=>submenu.links.some((link)=>pathname.split(\"/\")[1] === link.href.split(\"/\")[1])) ? \"active\" : \"\"),\n                        children: [\n                            item.title,\n                            isMobile && item.subMenu && item.subMenu.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"mobile-arrow\",\n                                children: menuOpen === index ? \"▲\" : \"▼\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this),\n                    item.subMenu && item.subMenu.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"mn-sub \".concat(isMobile ? menuOpen === index ? \"mobile-sub-active\" : \"\" : \"\"),\n                        children: item.subMenu.map((subItem, subIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"mn-sub-multi\",\n                                children: [\n                                    subItem.title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mn-group-title\",\n                                        children: subItem.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: subItem.links.map((link, linkIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    className: pathname.split(\"/\")[1] === link.href.split(\"/\")[1] ? \"active\" : \"\",\n                                                    href: link.href,\n                                                    children: link.text\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                                                    lineNumber: 102,\n                                                    columnNumber: 25\n                                                }, this)\n                                            }, linkIndex, false, {\n                                                fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 23\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, subIndex, true, {\n                                fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 17\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\Asus Switch\\\\Desktop\\\\drthomas-template\\\\resonance\\\\components\\\\headers\\\\components\\\\Nav3.jsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this))\n    }, void 0, false);\n}\n_s(Nav3, \"90c6tLdl/TlJSGnUc637NMRQTBw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n_c = Nav3;\nvar _c;\n$RefreshReg$(_c, \"Nav3\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVhZGVycy9jb21wb25lbnRzL05hdjMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDOEQ7QUFDSjtBQUM3QjtBQUNpQjtBQUNGO0FBRTdCLFNBQVNNLEtBQUssS0FBUztRQUFULEVBQUVDLEtBQUssRUFBRSxHQUFUOztJQUMzQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUMsT0FBTywyQ0FBMkM7SUFDM0YsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDLFFBQVEsNEJBQTRCO0lBRTdFLE1BQU1PLFdBQVdULDREQUFXQTtJQUU1Qiw2QkFBNkI7SUFDN0IsTUFBTVUsZ0JBQWdCLENBQUNDO1FBQ3JCTCxZQUFZLENBQUNNLE9BQVVBLFNBQVNELFFBQVEsT0FBT0E7SUFDakQ7SUFFQSwrQkFBK0I7SUFDL0JWLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVksZUFBZTtZQUNuQkwsWUFBWU0sT0FBT0MsVUFBVSxJQUFJLE9BQU8sb0NBQW9DO1FBQzlFO1FBRUFGLGdCQUFnQiwyQkFBMkI7UUFDM0NDLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBRWxDLE9BQU87WUFDTEMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxvQ0FBb0M7SUFDcENaLGdEQUFTQSxDQUFDO1FBQ1JpQixXQUFXO1lBQ1RwQix1RUFBZUE7UUFDakIsR0FBRztRQUNIRCwyRUFBd0JBO1FBQ3hCaUIsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVW5CLHVFQUF3QkE7UUFDMUQsT0FBTztZQUNMaUIsT0FBT0csbUJBQW1CLENBQUMsVUFBVXBCLHVFQUF3QkE7UUFDL0Q7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDR08sTUFBTWUsR0FBRyxDQUFDLENBQUNDLE1BQU1ULHNCQUNoQiw4REFBQ1U7Z0JBRUNDLFdBQVcsWUFBa0QsT0FBdENqQixhQUFhTSxRQUFRLGNBQWM7O2tDQUcxRCw4REFBQ1osaURBQUlBO3dCQUNId0IsTUFDRUgsS0FBS0ksT0FBTyxJQUFJSixLQUFLSSxPQUFPLENBQUNDLE1BQU0sR0FBRyxJQUNsQ0wsS0FBS0ksT0FBTyxDQUFDLEVBQUUsQ0FBQ3BCLEtBQUssQ0FBQyxFQUFFLENBQUNtQixJQUFJLEdBQzdCO3dCQUVORyxTQUFTLENBQUNDOzRCQUNSLElBQUlwQixZQUFZYSxLQUFLSSxPQUFPLElBQUlKLEtBQUtJLE9BQU8sQ0FBQ0MsTUFBTSxHQUFHLEdBQUc7Z0NBQ3ZERSxFQUFFQyxjQUFjLElBQUksK0NBQStDO2dDQUNuRWxCLGNBQWNDLFFBQVEsbUJBQW1COzRCQUMzQzt3QkFDRjt3QkFDQVcsV0FBVyxjQVVWLE9BVENGLEtBQUtJLE9BQU8sSUFDWkosS0FBS0ksT0FBTyxDQUFDSyxJQUFJLENBQUMsQ0FBQ0MsVUFDakJBLFFBQVExQixLQUFLLENBQUN5QixJQUFJLENBQ2hCLENBQUNFLE9BQ0N0QixTQUFTdUIsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUtELEtBQUtSLElBQUksQ0FBQ1MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBR3BELFdBQ0E7OzRCQUdMWixLQUFLYSxLQUFLOzRCQUdWMUIsWUFBWWEsS0FBS0ksT0FBTyxJQUFJSixLQUFLSSxPQUFPLENBQUNDLE1BQU0sR0FBRyxtQkFDakQsOERBQUNTO2dDQUFLWixXQUFVOzBDQUNiakIsYUFBYU0sUUFBUSxNQUFNOzs7Ozs7Ozs7Ozs7b0JBTWpDUyxLQUFLSSxPQUFPLElBQUlKLEtBQUtJLE9BQU8sQ0FBQ0MsTUFBTSxHQUFHLG1CQUNyQyw4REFBQ1U7d0JBQ0NiLFdBQVcsVUFFVixPQURDZixXQUFZRixhQUFhTSxRQUFRLHNCQUFzQixLQUFNO2tDQUc5RFMsS0FBS0ksT0FBTyxDQUFDTCxHQUFHLENBQUMsQ0FBQ2lCLFNBQVNDLHlCQUMxQiw4REFBQ2hCO2dDQUFHQyxXQUFVOztvQ0FDWGMsUUFBUUgsS0FBSyxrQkFDWiw4REFBQ0M7d0NBQUtaLFdBQVU7a0RBQWtCYyxRQUFRSCxLQUFLOzs7Ozs7a0RBRWpELDhEQUFDRTtrREFDRUMsUUFBUWhDLEtBQUssQ0FBQ2UsR0FBRyxDQUFDLENBQUNZLE1BQU1PLDBCQUN4Qiw4REFBQ2pCOzBEQUNDLDRFQUFDdEIsaURBQUlBO29EQUNIdUIsV0FDRWIsU0FBU3VCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUN0QkQsS0FBS1IsSUFBSSxDQUFDUyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FDbkIsV0FDQTtvREFFTlQsTUFBTVEsS0FBS1IsSUFBSTs4REFFZFEsS0FBS1EsSUFBSTs7Ozs7OytDQVZMRDs7Ozs7Ozs7Ozs7K0JBTm1CRDs7Ozs7Ozs7Ozs7ZUE5Q25DMUI7Ozs7OztBQTJFZjtHQXBId0JSOztRQUlMSCx3REFBV0E7OztLQUpORyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlcnMvY29tcG9uZW50cy9OYXYzLmpzeD9jMTliIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBpbml0X2NsYXNzaWNfbWVudV9yZXNpemUgfSBmcm9tIFwiQC91dGxpcy9tZW51VG9nZ2xlXCI7XHJcbmltcG9ydCB7IHNjcm9sbFRvRWxlbWVudCB9IGZyb20gXCJAL3V0bGlzL3Njcm9sbFRvRWxlbWVudFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYzKHsgbGlua3MgfSkge1xyXG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUobnVsbCk7IC8vIENvbnRyb2xhIHF1YWwgbWVudSBlc3TDoSBhYmVydG8gbm8gbW9iaWxlXHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIERldGVjdGEgc2UgZXN0w6Egbm8gbW9iaWxlXHJcblxyXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuXHJcbiAgLy8gQWx0ZXJuYXIgc3VibWVudSBubyBtb2JpbGVcclxuICBjb25zdCB0b2dnbGVTdWJNZW51ID0gKGluZGV4KSA9PiB7XHJcbiAgICBzZXRNZW51T3BlbigocHJldikgPT4gKHByZXYgPT09IGluZGV4ID8gbnVsbCA6IGluZGV4KSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gRGV0ZWN0YXIgZGlzcG9zaXRpdm9zIG3Ds3ZlaXNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBzZXRJc01vYmlsZSh3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDI0KTsgLy8gRGVmaW5lIGxhcmd1cmEgbGltaXRlIHBhcmEgbW9iaWxlXHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVJlc2l6ZSgpOyAvLyBEZXRlY3RhciBsYXJndXJhIGluaWNpYWxcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBJbmljaWFsaXphciBjb25maWd1cmHDp8O1ZXMgZG8gbWVudVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2Nyb2xsVG9FbGVtZW50KCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIGluaXRfY2xhc3NpY19tZW51X3Jlc2l6ZSgpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaW5pdF9jbGFzc2ljX21lbnVfcmVzaXplKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGluaXRfY2xhc3NpY19tZW51X3Jlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtsaW5rcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGxpXHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWl0ZW0gJHttZW51T3BlbiA9PT0gaW5kZXggPyBcImpzLW9wZW5lZFwiIDogXCJcIn1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiBMaW5rIFByaW5jaXBhbCAqL31cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e1xyXG4gICAgICAgICAgICAgIGl0ZW0uc3ViTWVudSAmJiBpdGVtLnN1Yk1lbnUubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgPyBpdGVtLnN1Yk1lbnVbMF0ubGlua3NbMF0uaHJlZlxyXG4gICAgICAgICAgICAgICAgOiBcIiNcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGlzTW9iaWxlICYmIGl0ZW0uc3ViTWVudSAmJiBpdGVtLnN1Yk1lbnUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBJbXBlZGUgbmF2ZWdhw6fDo28gbm8gbW9iaWxlIHNlIGhvdXZlciBzdWJtZW51XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVTdWJNZW51KGluZGV4KTsgLy8gQWx0ZXJuYXIgc3VibWVudVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbW4taGFzLXN1YiAke1xyXG4gICAgICAgICAgICAgIGl0ZW0uc3ViTWVudSAmJlxyXG4gICAgICAgICAgICAgIGl0ZW0uc3ViTWVudS5zb21lKChzdWJtZW51KSA9PlxyXG4gICAgICAgICAgICAgICAgc3VibWVudS5saW5rcy5zb21lKFxyXG4gICAgICAgICAgICAgICAgICAobGluaykgPT5cclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZS5zcGxpdChcIi9cIilbMV0gPT09IGxpbmsuaHJlZi5zcGxpdChcIi9cIilbMV1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA/IFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcblxyXG4gICAgICAgICAgICB7LyogRXhpYmlyIHNldGEgYXBlbmFzIHBhcmEgaXRlbnMgY29tIHN1Ym1lbnUgbm8gbW9iaWxlICovfVxyXG4gICAgICAgICAgICB7aXNNb2JpbGUgJiYgaXRlbS5zdWJNZW51ICYmIGl0ZW0uc3ViTWVudS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb2JpbGUtYXJyb3dcIj5cclxuICAgICAgICAgICAgICAgIHttZW51T3BlbiA9PT0gaW5kZXggPyBcIuKWslwiIDogXCLilrxcIn1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgey8qIFN1Ym1lbnUgKi99XHJcbiAgICAgICAgICB7aXRlbS5zdWJNZW51ICYmIGl0ZW0uc3ViTWVudS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgPHVsXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbW4tc3ViICR7XHJcbiAgICAgICAgICAgICAgICBpc01vYmlsZSA/IChtZW51T3BlbiA9PT0gaW5kZXggPyBcIm1vYmlsZS1zdWItYWN0aXZlXCIgOiBcIlwiKSA6IFwiXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpdGVtLnN1Yk1lbnUubWFwKChzdWJJdGVtLCBzdWJJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1uLXN1Yi1tdWx0aVwiIGtleT17c3ViSW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICB7c3ViSXRlbS50aXRsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW4tZ3JvdXAtdGl0bGVcIj57c3ViSXRlbS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7c3ViSXRlbS5saW5rcy5tYXAoKGxpbmssIGxpbmtJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bGlua0luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5ocmVmLnNwbGl0KFwiL1wiKVsxXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5rLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImluaXRfY2xhc3NpY19tZW51X3Jlc2l6ZSIsInNjcm9sbFRvRWxlbWVudCIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmF2MyIsImxpbmtzIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJwYXRobmFtZSIsInRvZ2dsZVN1Yk1lbnUiLCJpbmRleCIsInByZXYiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwibWFwIiwiaXRlbSIsImxpIiwiY2xhc3NOYW1lIiwiaHJlZiIsInN1Yk1lbnUiLCJsZW5ndGgiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic29tZSIsInN1Ym1lbnUiLCJsaW5rIiwic3BsaXQiLCJ0aXRsZSIsInNwYW4iLCJ1bCIsInN1Ykl0ZW0iLCJzdWJJbmRleCIsImxpbmtJbmRleCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/headers/components/Nav3.jsx\n"));

/***/ })

});