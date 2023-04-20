/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contact = (() => {
    const loadContact = () => {
        const section = document.querySelector('section');

        const contactContainer = document.createElement('article');
        const phoneNumber = document.createElement('p');
        const email = document.createElement('p');
        const address = document.createElement('p');

        contactContainer.classList.add('contact-container');
        phoneNumber.classList.add('phonenumber');
        email.classList.add('email');
        address.classList.add('contact-address');

        phoneNumber.textContent = '080-9999-9999';
        email.textContent = 'contact@therestaurant.com';
        address.textContent = '234 Restaurant Street District City Country 10934';

        section.appendChild(contactContainer);
        contactContainer.appendChild(phoneNumber);
        contactContainer.appendChild(email);
        contactContainer.appendChild(address);
    };

    return { loadContact };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





_load__WEBPACK_IMPORTED_MODULE_0__["default"].pageLoad();
// intro.loadIntro();
// menu.loadMenu();
_contact__WEBPACK_IMPORTED_MODULE_3__["default"].loadContact();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7OztBQzNCdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7QUFDRDtBQUNBLGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7O0FDMUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQy9CbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7QUFDRDtBQUNBLGlFQUFlLElBQUk7Ozs7OztVQzVFbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUNFO0FBQ0Y7QUFDTTtBQUNoQztBQUNBLHNEQUFhO0FBQ2I7QUFDQTtBQUNBLDREQUFtQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ludHJvLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWN0ID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGxvYWRDb250YWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICAgICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHBob25lTnVtYmVyLmNsYXNzTGlzdC5hZGQoJ3Bob25lbnVtYmVyJyk7XHJcbiAgICAgICAgZW1haWwuY2xhc3NMaXN0LmFkZCgnZW1haWwnKTtcclxuICAgICAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtYWRkcmVzcycpO1xyXG5cclxuICAgICAgICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9ICcwODAtOTk5OS05OTk5JztcclxuICAgICAgICBlbWFpbC50ZXh0Q29udGVudCA9ICdjb250YWN0QHRoZXJlc3RhdXJhbnQuY29tJztcclxuICAgICAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gJzIzNCBSZXN0YXVyYW50IFN0cmVldCBEaXN0cmljdCBDaXR5IENvdW50cnkgMTA5MzQnO1xyXG5cclxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xyXG4gICAgICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xyXG4gICAgICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWwpO1xyXG4gICAgICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IGxvYWRDb250YWN0IH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0OyIsImNvbnN0IGludHJvID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGxvYWRJbnRybyA9ICgpID0+IHtcclxuICAgICAgICAgLyogU0VMRUNUIEVMRU1FTlQoUykgKi9cclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xyXG5cclxuICAgICAgICAvKiBDUkVBVEUgRUxFTUVOVFMgKi9cclxuICAgICAgICBjb25zdCByZXN0YXVyYW50QmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgaW50cm9BcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3Qgb3BlbkhvdXJzQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICBjb25zdCBvcGVuSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzc0FydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICAgICAgLyogQUREIENMQVNTRVMgKi9cclxuICAgICAgICByZXN0YXVyYW50QmFubmVyLmNsYXNzTGlzdC5hZGQoJ3Jlc3RhdXJhbnQtYmFubmVyJyk7XHJcbiAgICAgICAgaW50cm9BcnRpY2xlLmNsYXNzTGlzdC5hZGQoJ2ludHJvJyk7XHJcbiAgICAgICAgb3BlbkhvdXJzQXJ0aWNsZS5jbGFzc0xpc3QuYWRkKCdvcGVuLWhvdXJzJyk7XHJcbiAgICAgICAgYWRkcmVzc0FydGljbGUuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcycpO1xyXG5cclxuICAgICAgICAvKiBBREQgQ09OVEVOVFMgKi9cclxuICAgICAgICByZXN0YXVyYW50QmFubmVyLnNyYyA9ICdpbWcvcmVzdGF1cmFudC1iYW5uZXIuanBnJztcclxuICAgICAgICByZXN0YXVyYW50VGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIFJlc3RhdXJhbnQnO1xyXG4gICAgICAgIHJlc3RhdXJhbnREZXNjLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE1haW9yZXMgbGFib3JlIG9iY2FlY2F0aSBuZXNjaXVudCB2b2x1cHRhdGVtIGlsbHVtPyBEaXN0aW5jdGlvIGR1Y2ltdXMgbmlzaSBkZXNlcnVudCBwb3NzaW11cyBuYW0gdm9sdXB0YXRlLCByZXJ1bSBudW1xdWFtIGlkIHBhcmlhdHVyIGRvbG9ydW0gYmxhbmRpdGlpcyBxdWlidXNkYW0gZG9sb3JpYnVzIG9mZmljaWEhJztcclxuICAgICAgICBvcGVuSG91cnMudGV4dENvbnRlbnQgPSAnRXZlcnlkYXkgMTY6MDAgLSAyMzowMCc7XHJcbiAgICAgICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICcyMzQgUmVzdGF1cmFudCBTdHJlZXQgRGlzdHJpY3QgQ2l0eSBDb3VudHJ5IDEwOTM0JztcclxuXHJcbiAgICAgICAgLyogQVBQRU5EIEVMRU1FTlRTICovXHJcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChyZXN0YXVyYW50QmFubmVyKTtcclxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGludHJvQXJ0aWNsZSk7XHJcbiAgICAgICAgaW50cm9BcnRpY2xlLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRUaXRsZSk7XHJcbiAgICAgICAgaW50cm9BcnRpY2xlLmFwcGVuZENoaWxkKHJlc3RhdXJhbnREZXNjKTtcclxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKG9wZW5Ib3Vyc0FydGljbGUpO1xyXG4gICAgICAgIG9wZW5Ib3Vyc0FydGljbGUuYXBwZW5kQ2hpbGQob3BlbkhvdXJzKTtcclxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGFkZHJlc3NBcnRpY2xlKTtcclxuICAgICAgICBhZGRyZXNzQXJ0aWNsZS5hcHBlbmRDaGlsZChhZGRyZXNzKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgbG9hZEludHJvIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRybzsiLCJjb25zdCBsb2FkID0gKCgpID0+IHtcclxuICAgIGNvbnN0IHBhZ2VMb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIC8qIENSRUFURSBFTEVNRU5UUyAqL1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IGFib3V0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5cclxuICAgICAgICAvKiBBREQgQ09OVEVOVCAqL1xyXG4gICAgICAgIGFib3V0TGlzdC50ZXh0Q29udGVudCA9ICdBYm91dCc7XHJcbiAgICAgICAgbWVudUxpc3QudGV4dENvbnRlbnQgPSAnTWVudSc7XHJcbiAgICAgICAgY29udGFjdExpc3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XHJcblxyXG4gICAgICAgIC8qIEFQUEVORCBFTEVNRU5UUyAqL1xyXG5cclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobmF2KTtcclxuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xyXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGFib3V0TGlzdCk7XHJcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xyXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGNvbnRhY3RMaXN0KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm57IHBhZ2VMb2FkIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkOyIsIi8vIEZhY3RvcnkgZnVuY3Rpb24gZm9yIG1lbnUgaXRlbXNcclxuY29uc3QgTWVudSA9IChpbWFnZSwgdGl0bGUsIGRlc2MsIHByaWNlKSA9PiAoe1xyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2MsXHJcbiAgICAgICAgcHJpY2VcclxuICAgIH0pO1xyXG5cclxuLy8gTW9kdWxlIGZvciBsb2FkaW5nIG1lbnVcclxuY29uc3QgbWVudSA9ICgoKSA9PiB7XHJcbiAgICAvLyBNZW51IGl0ZW1zXHJcbiAgICBjb25zdCBfc3BhZ2hldHRpID0gTWVudSgnaW1nL21lbnUvc3BhZ2hldHRpLmpwZycsICdTcGFnaGV0dGknLCAnUmVydW0gbnVtcXVhbSBpZCBwYXJpYXR1ciBkb2xvcnVtIGJsYW5kaXRpaXMgcXVpYnVzJywgJyQzOScpO1xyXG4gICAgY29uc3QgX2J1cmdlciA9IE1lbnUoJ2ltZy9tZW51L2J1cmdlci5qcGcnLCAnQnVyZ2VyJywgJ1JlcnVtIG51bXF1YW0gaWQgcGFyaWF0dXIgZG9sb3J1bSBibGFuZGl0aWlzIHF1aWJ1cycsICckNDknKTtcclxuICAgIGNvbnN0IF9zdGVhayA9IE1lbnUoJ2ltZy9tZW51L3N0ZWFrLmpwZycsICdTdGVhaycsICdSZXJ1bSBudW1xdWFtIGlkIHBhcmlhdHVyIGRvbG9ydW0gYmxhbmRpdGlpcyBxdWlidXMnLCAnJDY1Jyk7XHJcbiAgICBjb25zdCBfZnJlbmNoZnJpZXMgPSBNZW51KCdpbWcvbWVudS9mcmVuY2hmcmllcy5qcGcnLCAnRnJlbmNoZnJpZXMnLCAnUmVydW0gbnVtcXVhbSBpZCBwYXJpYXR1ciBkb2xvcnVtIGJsYW5kaXRpaXMgcXVpYnVzJywgJyQ5OTknKTtcclxuICAgIGNvbnN0IF9ob3Rkb2cgPSBNZW51KCdpbWcvbWVudS9ob3Rkb2cuanBnJywgJ0hvdGRvZycsICdSZXJ1bSBudW1xdWFtIGlkIHBhcmlhdHVyIGRvbG9ydW0gYmxhbmRpdGlpcyBxdWlidXMnLCAnJDY5OScpO1xyXG4gICAgY29uc3QgX2xhc2FnbmEgPSBNZW51KCdpbWcvbWVudS9sYXNhZ25hLmpwZycsICdMYXNhbmduYScsICdSZXJ1bSBudW1xdWFtIGlkIHBhcmlhdHVyIGRvbG9ydW0gYmxhbmRpdGlpcyBxdWlidXMnLCAnJDcwMCcpO1xyXG4gICAgY29uc3QgX2dhcGFvID0gTWVudSgnaW1nL21lbnUvZ2FwYW8uanBnJywgJ1BhZCBHYXBhbycsICdSZXJ1bSBudW1xdWFtIGlkIHBhcmlhdHVyIGRvbG9ydW0gYmxhbmRpdGlpcyBxdWlidXMnLCAnJDk5OTknKTtcclxuICAgIGNvbnN0IF9idXRhZG9uID0gTWVudSgnaW1nL21lbnUvYnV0YWRvbi5qcGcnLCAnQnV0YWRvbicsICdSZXJ1bSBudW1xdWFtIGlkIHBhcmlhdHVyIGRvbG9ydW0gYmxhbmRpdGlpcyBxdWlidXMnLCAnJDc5OCcpO1xyXG4gICAgY29uc3QgX2ZyaWVkQ2hpY2tlbiA9IE1lbnUoJ2ltZy9tZW51L2ZyaWVkQ2hpY2tlbi5qcGcnLCAnRnJpZWQgQ2hpY2tlbicsICdSZXJ1bSBudW1xdWFtIGlkIHBhcmlhdHVyIGRvbG9ydW0gYmxhbmRpdGlpcyBxdWlidXMnLCAnJDgwMCcpO1xyXG4gICAgY29uc3QgX3NhbGFkID0gTWVudSgnaW1nL21lbnUvc2FsYWQuanBnJywgJ1NhbGFkJywgJ1JlcnVtIG51bXF1YW0gaWQgcGFyaWF0dXIgZG9sb3J1bSBibGFuZGl0aWlzIHF1aWJ1cycsICckOTk5OTknKTtcclxuXHJcbiAgICAvLyBQdXQgbWVudSBpdGVtcyBpbnRvIGxpc3RcclxuICAgIGNvbnN0IF9tZW51SXRlbXMgPSBbXHJcbiAgICAgICAgX3NwYWdoZXR0aSxcclxuICAgICAgICBfYnVyZ2VyLFxyXG4gICAgICAgIF9zdGVhayxcclxuICAgICAgICBfZnJlbmNoZnJpZXMsXHJcbiAgICAgICAgX2hvdGRvZyxcclxuICAgICAgICBfbGFzYWduYSxcclxuICAgICAgICBfZ2FwYW8sXHJcbiAgICAgICAgX2J1dGFkb24sXHJcbiAgICAgICAgX2ZyaWVkQ2hpY2tlbixcclxuICAgICAgICBfc2FsYWRcclxuICAgIF07XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gbG9hZCBtZW51IG9uIHRoZSBwYWdlXHJcbiAgICBjb25zdCBsb2FkTWVudSA9ICgpID0+IHtcclxuICAgICAgICAvLyBTZWxlY3Qgc2VjdGlvbiBhcyBwYXJlbnRcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLWNvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xyXG5cclxuICAgICAgICAvLyBMb29wIHRocm91Z2ggaXRlbXMgaW4gbWVudSBpdGVtcyBsaXN0IHRvIGNyZWF0ZSBjYXJkc1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoX21lbnVJdGVtcykuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgICAgICAgICAgaXRlbUNhcmQuY2xhc3NMaXN0LmFkZCgnaXRlbS1jYXJkJyk7XHJcbiAgICAgICAgICAgIGl0ZW1JbWFnZS5jbGFzc0xpc3QuYWRkKCdpdGVtLWltYWdlJyk7XHJcbiAgICAgICAgICAgIGl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXRpdGxlJyk7XHJcbiAgICAgICAgICAgIGl0ZW1EZXNjLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGVzYycpO1xyXG4gICAgICAgICAgICBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZCgnaXRlbS1wcmljZScpO1xyXG5cclxuICAgICAgICAgICAgaXRlbUltYWdlLnNyYyA9IGl0ZW0uaW1hZ2U7XHJcbiAgICAgICAgICAgIGl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XHJcbiAgICAgICAgICAgIGl0ZW1EZXNjLnRleHRDb250ZW50ID0gaXRlbS5kZXNjO1xyXG4gICAgICAgICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xyXG5cclxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtQ2FyZCk7XHJcbiAgICAgICAgICAgIGl0ZW1DYXJkLmFwcGVuZENoaWxkKGl0ZW1JbWFnZSk7XHJcbiAgICAgICAgICAgIGl0ZW1DYXJkLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XHJcbiAgICAgICAgICAgIGl0ZW1DYXJkLmFwcGVuZENoaWxkKGl0ZW1EZXNjKTtcclxuICAgICAgICAgICAgaXRlbUNhcmQuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgbG9hZE1lbnUgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZCBmcm9tIFwiLi9sb2FkXCI7XHJcbmltcG9ydCBpbnRybyBmcm9tIFwiLi9pbnRyb1wiO1xyXG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuXHJcbmxvYWQucGFnZUxvYWQoKTtcclxuLy8gaW50cm8ubG9hZEludHJvKCk7XHJcbi8vIG1lbnUubG9hZE1lbnUoKTtcclxuY29udGFjdC5sb2FkQ29udGFjdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==