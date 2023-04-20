/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/intro.js":
/*!**********************!*\
  !*** ./src/intro.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadIntro)
/* harmony export */ });
function loadIntro() {
    /* SELECT ELEMENT(S) */
    const section = document.querySelector('section');

    /* CREATE ELEMENTS */
    const restaurantBanner = document.createElement('img');
    const introArticle = document.createElement('article');
    const restaurantTitle = document.createElement('h1');
    const restaurantDesc = document.createElement('p');
    const openHoursArticle = document.createElement('article');
    const openHours = document.createElement('p');
    const addressArticle = document.createElement('article');
    const address = document.createElement('p');

    /* ADD CLASSES */
    introArticle.classList.add('intro');
    openHoursArticle.classList.add('open-hours');
    address.classList.add('address');

    /* ADD CONTENTS */
    // Image banner
    restaurantBanner.src = 'img/restaurant-banner.jpg';
    // Intro
    restaurantTitle.textContent = 'The Restaurant';
    restaurantDesc.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore obcaecati nesciunt voluptatem illum? Distinctio ducimus nisi deserunt possimus nam voluptate, rerum numquam id pariatur dolorum blanditiis quibusdam doloribus officia!';
    // Open hours
    openHours.textContent = 'Everyday 16:00 - 23:00';
    // Address
    address.textContent = '234 Restaurant Street District City Country 10934';

    /* APPEND ELEMENTS */
    // Restaurant banner
    section.appendChild(restaurantBanner);
    // Intro
    section.appendChild(introArticle);
    introArticle.appendChild(restaurantTitle);
    introArticle.appendChild(restaurantDesc);
    // Open hours
    section.appendChild(openHoursArticle);
    openHoursArticle.appendChild(openHours);
    // Address
    section.appendChild(addressArticle);
    addressArticle.appendChild(address);
}

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
function pageLoad() {
    /* CREATE ELEMENTS */
    const content = document.getElementById('content');
    const main = document.createElement('main');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const aboutList = document.createElement('li');
    const menuList = document.createElement('li');
    const contactList = document.createElement('li');
    const section = document.createElement('section');

    /* ADD CONTENT */
    // Menu
    aboutList.textContent = 'About';
    menuList.textContent = 'Menu';
    contactList.textContent = 'Contact';

    /* APPEND ELEMENTS */
    // Appended main
    content.appendChild(main);
    // Appended nav
    main.appendChild(nav);
    // Nav menu
    nav.appendChild(ul);
    ul.appendChild(aboutList);
    ul.appendChild(menuList);
    ul.appendChild(contactList);
    // Appended section
    main.appendChild(section);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ "./src/load.js");
/* harmony import */ var _intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro */ "./src/intro.js");



(0,_load__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_intro__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM0NlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDN0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ0U7QUFDaEM7QUFDQSxpREFBUTtBQUNSLGtEQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW50cm8uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRJbnRybygpIHtcclxuICAgIC8qIFNFTEVDVCBFTEVNRU5UKFMpICovXHJcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xyXG5cclxuICAgIC8qIENSRUFURSBFTEVNRU5UUyAqL1xyXG4gICAgY29uc3QgcmVzdGF1cmFudEJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29uc3QgaW50cm9BcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgY29uc3QgcmVzdGF1cmFudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGNvbnN0IHJlc3RhdXJhbnREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3Qgb3BlbkhvdXJzQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgIGNvbnN0IG9wZW5Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGFkZHJlc3NBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICAvKiBBREQgQ0xBU1NFUyAqL1xyXG4gICAgaW50cm9BcnRpY2xlLmNsYXNzTGlzdC5hZGQoJ2ludHJvJyk7XHJcbiAgICBvcGVuSG91cnNBcnRpY2xlLmNsYXNzTGlzdC5hZGQoJ29wZW4taG91cnMnKTtcclxuICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcycpO1xyXG5cclxuICAgIC8qIEFERCBDT05URU5UUyAqL1xyXG4gICAgLy8gSW1hZ2UgYmFubmVyXHJcbiAgICByZXN0YXVyYW50QmFubmVyLnNyYyA9ICdpbWcvcmVzdGF1cmFudC1iYW5uZXIuanBnJztcclxuICAgIC8vIEludHJvXHJcbiAgICByZXN0YXVyYW50VGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIFJlc3RhdXJhbnQnO1xyXG4gICAgcmVzdGF1cmFudERlc2MudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTWFpb3JlcyBsYWJvcmUgb2JjYWVjYXRpIG5lc2NpdW50IHZvbHVwdGF0ZW0gaWxsdW0/IERpc3RpbmN0aW8gZHVjaW11cyBuaXNpIGRlc2VydW50IHBvc3NpbXVzIG5hbSB2b2x1cHRhdGUsIHJlcnVtIG51bXF1YW0gaWQgcGFyaWF0dXIgZG9sb3J1bSBibGFuZGl0aWlzIHF1aWJ1c2RhbSBkb2xvcmlidXMgb2ZmaWNpYSEnO1xyXG4gICAgLy8gT3BlbiBob3Vyc1xyXG4gICAgb3BlbkhvdXJzLnRleHRDb250ZW50ID0gJ0V2ZXJ5ZGF5IDE2OjAwIC0gMjM6MDAnO1xyXG4gICAgLy8gQWRkcmVzc1xyXG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICcyMzQgUmVzdGF1cmFudCBTdHJlZXQgRGlzdHJpY3QgQ2l0eSBDb3VudHJ5IDEwOTM0JztcclxuXHJcbiAgICAvKiBBUFBFTkQgRUxFTUVOVFMgKi9cclxuICAgIC8vIFJlc3RhdXJhbnQgYmFubmVyXHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRCYW5uZXIpO1xyXG4gICAgLy8gSW50cm9cclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaW50cm9BcnRpY2xlKTtcclxuICAgIGludHJvQXJ0aWNsZS5hcHBlbmRDaGlsZChyZXN0YXVyYW50VGl0bGUpO1xyXG4gICAgaW50cm9BcnRpY2xlLmFwcGVuZENoaWxkKHJlc3RhdXJhbnREZXNjKTtcclxuICAgIC8vIE9wZW4gaG91cnNcclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQob3BlbkhvdXJzQXJ0aWNsZSk7XHJcbiAgICBvcGVuSG91cnNBcnRpY2xlLmFwcGVuZENoaWxkKG9wZW5Ib3Vycyk7XHJcbiAgICAvLyBBZGRyZXNzXHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGFkZHJlc3NBcnRpY2xlKTtcclxuICAgIGFkZHJlc3NBcnRpY2xlLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxvYWQoKSB7XHJcbiAgICAvKiBDUkVBVEUgRUxFTUVOVFMgKi9cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgY29uc3QgYWJvdXRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IGNvbnRhY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcblxyXG4gICAgLyogQUREIENPTlRFTlQgKi9cclxuICAgIC8vIE1lbnVcclxuICAgIGFib3V0TGlzdC50ZXh0Q29udGVudCA9ICdBYm91dCc7XHJcbiAgICBtZW51TGlzdC50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICAgIGNvbnRhY3RMaXN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xyXG5cclxuICAgIC8qIEFQUEVORCBFTEVNRU5UUyAqL1xyXG4gICAgLy8gQXBwZW5kZWQgbWFpblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcclxuICAgIC8vIEFwcGVuZGVkIG5hdlxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChuYXYpO1xyXG4gICAgLy8gTmF2IG1lbnVcclxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChhYm91dExpc3QpO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQoY29udGFjdExpc3QpO1xyXG4gICAgLy8gQXBwZW5kZWQgc2VjdGlvblxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gXCIuL2xvYWRcIjtcclxuaW1wb3J0IGxvYWRJbnRybyBmcm9tIFwiLi9pbnRyb1wiO1xyXG5cclxucGFnZUxvYWQoKTtcclxubG9hZEludHJvKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9