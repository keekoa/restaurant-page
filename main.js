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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const intro = (() => {
    const loadIntro = () => {
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
        restaurantBanner.classList.add('restaurant-banner');
        introArticle.classList.add('intro');
        openHoursArticle.classList.add('open-hours');
        addressArticle.classList.add('address');

        /* ADD CONTENTS */
        restaurantBanner.src = 'img/restaurant-banner.jpg';
        restaurantTitle.textContent = 'The Restaurant';
        restaurantDesc.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore obcaecati nesciunt voluptatem illum? Distinctio ducimus nisi deserunt possimus nam voluptate, rerum numquam id pariatur dolorum blanditiis quibusdam doloribus officia!';
        openHours.textContent = 'Everyday 16:00 - 23:00';
        address.textContent = '234 Restaurant Street District City Country 10934';

        /* APPEND ELEMENTS */
        section.appendChild(restaurantBanner);
        section.appendChild(introArticle);
        introArticle.appendChild(restaurantTitle);
        introArticle.appendChild(restaurantDesc);
        section.appendChild(openHoursArticle);
        openHoursArticle.appendChild(openHours);
        section.appendChild(addressArticle);
        addressArticle.appendChild(address);
    };

    return { loadIntro };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intro);

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const load = (() => {
    const pageLoad = () => {
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
        aboutList.textContent = 'About';
        menuList.textContent = 'Menu';
        contactList.textContent = 'Contact';

        /* APPEND ELEMENTS */

        content.appendChild(main);
        main.appendChild(nav);
        nav.appendChild(ul);
        ul.appendChild(aboutList);
        ul.appendChild(menuList);
        ul.appendChild(contactList);
        main.appendChild(section);
    };

    return{ pageLoad };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Factory function for menu items
const Menu = (image, title, desc, price) => ({
        image,
        title,
        desc,
        price
    });

// Module for loading menu
const menu = (() => {
    // Menu items
    const _spaghetti = Menu('img/menu/spaghetti.jpg', 'Spaghetti', 'Rerum numquam id pariatur dolorum blanditiis quibus', '$39');
    const _burger = Menu('img/menu/burger.jpg', 'Burger', 'Rerum numquam id pariatur dolorum blanditiis quibus', '$49');
    const _steak = Menu('img/menu/steak.jpg', 'Steak', 'Rerum numquam id pariatur dolorum blanditiis quibus', '$65');
    const _frenchfries = Menu('img/menu/frenchfries.jpg', 'Frenchfries', 'Rerum numquam id pariatur dolorum blanditiis quibus', '$999');
    const _hotdog = Menu('img/menu/hotdog.jpg', 'Hotdog', 'Rerum numquam id pariatur dolorum blanditiis quibus', '$699');
    const _lasagna = Menu('img/menu/lasagna.jpg', 'Lasangna', 'Rerum numquam id pariatur dolorum blanditiis quibus', '$700');
    const _gapao = Menu('img/menu/gapao.jpg', 'Pad Gapao', 'Rerum numquam id pariatur dolorum blanditiis quibus', '$9999');
    const _butadon = Menu('img/menu/butadon.jpg', 'Butadon', 'Rerum numquam id pariatur dolorum blanditiis quibus', '$798');
    const _friedChicken = Menu('img/menu/friedChicken.jpg', 'Fried Chicken', 'Rerum numquam id pariatur dolorum blanditiis quibus', '$800');
    const _salad = Menu('img/menu/salad.jpg', 'Salad', 'Rerum numquam id pariatur dolorum blanditiis quibus', '$99999');

    // Put menu items into list
    const _menuItems = [
        _spaghetti,
        _burger,
        _steak,
        _frenchfries,
        _hotdog,
        _lasagna,
        _gapao,
        _butadon,
        _friedChicken,
        _salad
    ];

    // Function to load menu on the page
    const loadMenu = () => {
        // Select section as parent
        const section = document.querySelector('section');
        const itemContainer = document.createElement('div');

        itemContainer.classList.add('item-container');

        section.appendChild(itemContainer);

        // Loop through items in menu items list to create cards
        Object.values(_menuItems).forEach(item => {
            const itemCard = document.createElement('article');
            const itemImage = document.createElement('img');
            const itemTitle = document.createElement('h2');
            const itemDesc = document.createElement('p');
            const itemPrice = document.createElement('p');

            itemCard.classList.add('item-card');
            itemImage.classList.add('item-image');
            itemTitle.classList.add('item-title');
            itemDesc.classList.add('item-desc');
            itemPrice.classList.add('item-price');

            itemImage.src = item.image;
            itemTitle.textContent = item.title;
            itemDesc.textContent = item.desc;
            itemPrice.textContent = item.price;

            itemContainer.appendChild(itemCard);
            itemCard.appendChild(itemImage);
            itemCard.appendChild(itemTitle);
            itemCard.appendChild(itemDesc);
            itemCard.appendChild(itemPrice);
        });
    };

    return { loadMenu };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




_load__WEBPACK_IMPORTED_MODULE_0__["default"].pageLoad();
// intro.loadIntro();
_menu__WEBPACK_IMPORTED_MODULE_2__["default"].loadMenu();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7OztBQzFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUMvQm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7VUM1RW5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUNFO0FBQ0Y7QUFDMUI7QUFDQSxzREFBYTtBQUNiO0FBQ0Esc0RBQWEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbnRyby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW50cm8gPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgbG9hZEludHJvID0gKCkgPT4ge1xyXG4gICAgICAgICAvKiBTRUxFQ1QgRUxFTUVOVChTKSAqL1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XHJcblxyXG4gICAgICAgIC8qIENSRUFURSBFTEVNRU5UUyAqL1xyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnRCYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCBpbnRyb0FydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBvcGVuSG91cnNBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGNvbnN0IG9wZW5Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBhZGRyZXNzQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgICAgICAvKiBBREQgQ0xBU1NFUyAqL1xyXG4gICAgICAgIHJlc3RhdXJhbnRCYW5uZXIuY2xhc3NMaXN0LmFkZCgncmVzdGF1cmFudC1iYW5uZXInKTtcclxuICAgICAgICBpbnRyb0FydGljbGUuY2xhc3NMaXN0LmFkZCgnaW50cm8nKTtcclxuICAgICAgICBvcGVuSG91cnNBcnRpY2xlLmNsYXNzTGlzdC5hZGQoJ29wZW4taG91cnMnKTtcclxuICAgICAgICBhZGRyZXNzQXJ0aWNsZS5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzJyk7XHJcblxyXG4gICAgICAgIC8qIEFERCBDT05URU5UUyAqL1xyXG4gICAgICAgIHJlc3RhdXJhbnRCYW5uZXIuc3JjID0gJ2ltZy9yZXN0YXVyYW50LWJhbm5lci5qcGcnO1xyXG4gICAgICAgIHJlc3RhdXJhbnRUaXRsZS50ZXh0Q29udGVudCA9ICdUaGUgUmVzdGF1cmFudCc7XHJcbiAgICAgICAgcmVzdGF1cmFudERlc2MudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTWFpb3JlcyBsYWJvcmUgb2JjYWVjYXRpIG5lc2NpdW50IHZvbHVwdGF0ZW0gaWxsdW0/IERpc3RpbmN0aW8gZHVjaW11cyBuaXNpIGRlc2VydW50IHBvc3NpbXVzIG5hbSB2b2x1cHRhdGUsIHJlcnVtIG51bXF1YW0gaWQgcGFyaWF0dXIgZG9sb3J1bSBibGFuZGl0aWlzIHF1aWJ1c2RhbSBkb2xvcmlidXMgb2ZmaWNpYSEnO1xyXG4gICAgICAgIG9wZW5Ib3Vycy50ZXh0Q29udGVudCA9ICdFdmVyeWRheSAxNjowMCAtIDIzOjAwJztcclxuICAgICAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gJzIzNCBSZXN0YXVyYW50IFN0cmVldCBEaXN0cmljdCBDaXR5IENvdW50cnkgMTA5MzQnO1xyXG5cclxuICAgICAgICAvKiBBUFBFTkQgRUxFTUVOVFMgKi9cclxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRCYW5uZXIpO1xyXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaW50cm9BcnRpY2xlKTtcclxuICAgICAgICBpbnRyb0FydGljbGUuYXBwZW5kQ2hpbGQocmVzdGF1cmFudFRpdGxlKTtcclxuICAgICAgICBpbnRyb0FydGljbGUuYXBwZW5kQ2hpbGQocmVzdGF1cmFudERlc2MpO1xyXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQob3BlbkhvdXJzQXJ0aWNsZSk7XHJcbiAgICAgICAgb3BlbkhvdXJzQXJ0aWNsZS5hcHBlbmRDaGlsZChvcGVuSG91cnMpO1xyXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkcmVzc0FydGljbGUpO1xyXG4gICAgICAgIGFkZHJlc3NBcnRpY2xlLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4geyBsb2FkSW50cm8gfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludHJvOyIsImNvbnN0IGxvYWQgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgcGFnZUxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgLyogQ1JFQVRFIEVMRU1FTlRTICovXHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3QgYWJvdXRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgY29uc3QgY29udGFjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcblxyXG4gICAgICAgIC8qIEFERCBDT05URU5UICovXHJcbiAgICAgICAgYWJvdXRMaXN0LnRleHRDb250ZW50ID0gJ0Fib3V0JztcclxuICAgICAgICBtZW51TGlzdC50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICAgICAgICBjb250YWN0TGlzdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcclxuXHJcbiAgICAgICAgLyogQVBQRU5EIEVMRU1FTlRTICovXHJcblxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChuYXYpO1xyXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQoYWJvdXRMaXN0KTtcclxuICAgICAgICB1bC5hcHBlbmRDaGlsZChtZW51TGlzdCk7XHJcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQoY29udGFjdExpc3QpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybnsgcGFnZUxvYWQgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWQ7IiwiLy8gRmFjdG9yeSBmdW5jdGlvbiBmb3IgbWVudSBpdGVtc1xyXG5jb25zdCBNZW51ID0gKGltYWdlLCB0aXRsZSwgZGVzYywgcHJpY2UpID0+ICh7XHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZGVzYyxcclxuICAgICAgICBwcmljZVxyXG4gICAgfSk7XHJcblxyXG4vLyBNb2R1bGUgZm9yIGxvYWRpbmcgbWVudVxyXG5jb25zdCBtZW51ID0gKCgpID0+IHtcclxuICAgIC8vIE1lbnUgaXRlbXNcclxuICAgIGNvbnN0IF9zcGFnaGV0dGkgPSBNZW51KCdpbWcvbWVudS9zcGFnaGV0dGkuanBnJywgJ1NwYWdoZXR0aScsICdSZXJ1bSBudW1xdWFtIGlkIHBhcmlhdHVyIGRvbG9ydW0gYmxhbmRpdGlpcyBxdWlidXMnLCAnJDM5Jyk7XHJcbiAgICBjb25zdCBfYnVyZ2VyID0gTWVudSgnaW1nL21lbnUvYnVyZ2VyLmpwZycsICdCdXJnZXInLCAnUmVydW0gbnVtcXVhbSBpZCBwYXJpYXR1ciBkb2xvcnVtIGJsYW5kaXRpaXMgcXVpYnVzJywgJyQ0OScpO1xyXG4gICAgY29uc3QgX3N0ZWFrID0gTWVudSgnaW1nL21lbnUvc3RlYWsuanBnJywgJ1N0ZWFrJywgJ1JlcnVtIG51bXF1YW0gaWQgcGFyaWF0dXIgZG9sb3J1bSBibGFuZGl0aWlzIHF1aWJ1cycsICckNjUnKTtcclxuICAgIGNvbnN0IF9mcmVuY2hmcmllcyA9IE1lbnUoJ2ltZy9tZW51L2ZyZW5jaGZyaWVzLmpwZycsICdGcmVuY2hmcmllcycsICdSZXJ1bSBudW1xdWFtIGlkIHBhcmlhdHVyIGRvbG9ydW0gYmxhbmRpdGlpcyBxdWlidXMnLCAnJDk5OScpO1xyXG4gICAgY29uc3QgX2hvdGRvZyA9IE1lbnUoJ2ltZy9tZW51L2hvdGRvZy5qcGcnLCAnSG90ZG9nJywgJ1JlcnVtIG51bXF1YW0gaWQgcGFyaWF0dXIgZG9sb3J1bSBibGFuZGl0aWlzIHF1aWJ1cycsICckNjk5Jyk7XHJcbiAgICBjb25zdCBfbGFzYWduYSA9IE1lbnUoJ2ltZy9tZW51L2xhc2FnbmEuanBnJywgJ0xhc2FuZ25hJywgJ1JlcnVtIG51bXF1YW0gaWQgcGFyaWF0dXIgZG9sb3J1bSBibGFuZGl0aWlzIHF1aWJ1cycsICckNzAwJyk7XHJcbiAgICBjb25zdCBfZ2FwYW8gPSBNZW51KCdpbWcvbWVudS9nYXBhby5qcGcnLCAnUGFkIEdhcGFvJywgJ1JlcnVtIG51bXF1YW0gaWQgcGFyaWF0dXIgZG9sb3J1bSBibGFuZGl0aWlzIHF1aWJ1cycsICckOTk5OScpO1xyXG4gICAgY29uc3QgX2J1dGFkb24gPSBNZW51KCdpbWcvbWVudS9idXRhZG9uLmpwZycsICdCdXRhZG9uJywgJ1JlcnVtIG51bXF1YW0gaWQgcGFyaWF0dXIgZG9sb3J1bSBibGFuZGl0aWlzIHF1aWJ1cycsICckNzk4Jyk7XHJcbiAgICBjb25zdCBfZnJpZWRDaGlja2VuID0gTWVudSgnaW1nL21lbnUvZnJpZWRDaGlja2VuLmpwZycsICdGcmllZCBDaGlja2VuJywgJ1JlcnVtIG51bXF1YW0gaWQgcGFyaWF0dXIgZG9sb3J1bSBibGFuZGl0aWlzIHF1aWJ1cycsICckODAwJyk7XHJcbiAgICBjb25zdCBfc2FsYWQgPSBNZW51KCdpbWcvbWVudS9zYWxhZC5qcGcnLCAnU2FsYWQnLCAnUmVydW0gbnVtcXVhbSBpZCBwYXJpYXR1ciBkb2xvcnVtIGJsYW5kaXRpaXMgcXVpYnVzJywgJyQ5OTk5OScpO1xyXG5cclxuICAgIC8vIFB1dCBtZW51IGl0ZW1zIGludG8gbGlzdFxyXG4gICAgY29uc3QgX21lbnVJdGVtcyA9IFtcclxuICAgICAgICBfc3BhZ2hldHRpLFxyXG4gICAgICAgIF9idXJnZXIsXHJcbiAgICAgICAgX3N0ZWFrLFxyXG4gICAgICAgIF9mcmVuY2hmcmllcyxcclxuICAgICAgICBfaG90ZG9nLFxyXG4gICAgICAgIF9sYXNhZ25hLFxyXG4gICAgICAgIF9nYXBhbyxcclxuICAgICAgICBfYnV0YWRvbixcclxuICAgICAgICBfZnJpZWRDaGlja2VuLFxyXG4gICAgICAgIF9zYWxhZFxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBsb2FkIG1lbnUgb24gdGhlIHBhZ2VcclxuICAgIGNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIFNlbGVjdCBzZWN0aW9uIGFzIHBhcmVudFxyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29udGFpbmVyJyk7XHJcblxyXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBpdGVtcyBpbiBtZW51IGl0ZW1zIGxpc3QgdG8gY3JlYXRlIGNhcmRzXHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhfbWVudUl0ZW1zKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgICAgICAgICBpdGVtQ2FyZC5jbGFzc0xpc3QuYWRkKCdpdGVtLWNhcmQnKTtcclxuICAgICAgICAgICAgaXRlbUltYWdlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taW1hZ2UnKTtcclxuICAgICAgICAgICAgaXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGl0bGUnKTtcclxuICAgICAgICAgICAgaXRlbURlc2MuY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjJyk7XHJcbiAgICAgICAgICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXByaWNlJyk7XHJcblxyXG4gICAgICAgICAgICBpdGVtSW1hZ2Uuc3JjID0gaXRlbS5pbWFnZTtcclxuICAgICAgICAgICAgaXRlbVRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcclxuICAgICAgICAgICAgaXRlbURlc2MudGV4dENvbnRlbnQgPSBpdGVtLmRlc2M7XHJcbiAgICAgICAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XHJcblxyXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1DYXJkKTtcclxuICAgICAgICAgICAgaXRlbUNhcmQuYXBwZW5kQ2hpbGQoaXRlbUltYWdlKTtcclxuICAgICAgICAgICAgaXRlbUNhcmQuYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcclxuICAgICAgICAgICAgaXRlbUNhcmQuYXBwZW5kQ2hpbGQoaXRlbURlc2MpO1xyXG4gICAgICAgICAgICBpdGVtQ2FyZC5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4geyBsb2FkTWVudSB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkIGZyb20gXCIuL2xvYWRcIjtcclxuaW1wb3J0IGludHJvIGZyb20gXCIuL2ludHJvXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnVcIjtcclxuXHJcbmxvYWQucGFnZUxvYWQoKTtcclxuLy8gaW50cm8ubG9hZEludHJvKCk7XHJcbm1lbnUubG9hZE1lbnUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=