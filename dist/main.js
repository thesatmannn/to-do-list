/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const links = document.querySelectorAll(\".sidebar a\");\n\nlinks.forEach(link => {\n  link.addEventListener(\"click\", function(event) {\n    event.preventDefault();\n    const selectedLink = this;\n\n    // Remove 'active' class from all links\n    links.forEach(link => link.classList.remove(\"active\"));\n\n    // Add 'active' class to the clicked link\n    selectedLink.classList.add(\"active\");\n\n    // Update content based on the selected link\n    const content = document.querySelector(\".content\");\n    content.textContent = `You clicked on ${selectedLink.textContent} link.`;\n  });\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;