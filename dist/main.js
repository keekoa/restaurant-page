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

        /* ADD CLASSES TO NAV */
        aboutList.classList.add('nav-link');
        menuList.classList.add('nav-link');
        contactList.classList.add('nav-link');
        aboutList.classList.add('active');

        /* ADD IDs TO NAV */
        aboutList.id = 'intro';
        menuList.id = 'menu';
        contactList.id = 'contact';

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





const managePage = (() => {
    const _clearPage = () => {
        const section = document.querySelector('section');
        section.innerHTML = '';
    };

    const _clearActive = () => {
        const navLinks = document.querySelectorAll('.nav-link');

        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active');
        }
    };

    const _navigatePage = () => {
        const navLinks = document.querySelectorAll('.nav-link');

        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', (e) => {
                _clearActive();
                navLinks[i].classList.add('active');
                _clearPage();
                if (e.target.id === 'intro') {
                    _intro__WEBPACK_IMPORTED_MODULE_1__["default"].loadIntro();
                }
                else if (e.target.id === 'menu') {
                    _menu__WEBPACK_IMPORTED_MODULE_2__["default"].loadMenu();
                }
                else if (e.target.id === 'contact') {
                    _contact__WEBPACK_IMPORTED_MODULE_3__["default"].loadContact();
                }
            });
        }
    };

    const initializePage = () => {
        _load__WEBPACK_IMPORTED_MODULE_0__["default"].pageLoad();
        _intro__WEBPACK_IMPORTED_MODULE_1__["default"].loadIntro();
        _navigatePage();
    };

    return {initializePage};
 })();

managePage.initializePage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbnRyby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGFjdCA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkQ29udGFjdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1jb250YWluZXInKTtcclxuICAgICAgICBwaG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKCdwaG9uZW51bWJlcicpO1xyXG4gICAgICAgIGVtYWlsLmNsYXNzTGlzdC5hZGQoJ2VtYWlsJyk7XHJcbiAgICAgICAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWFkZHJlc3MnKTtcclxuXHJcbiAgICAgICAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAnMDgwLTk5OTktOTk5OSc7XHJcbiAgICAgICAgZW1haWwudGV4dENvbnRlbnQgPSAnY29udGFjdEB0aGVyZXN0YXVyYW50LmNvbSc7XHJcbiAgICAgICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICcyMzQgUmVzdGF1cmFudCBTdHJlZXQgRGlzdHJpY3QgQ2l0eSBDb3VudHJ5IDEwOTM0JztcclxuXHJcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcclxuICAgICAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcclxuICAgICAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsKTtcclxuICAgICAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4geyBsb2FkQ29udGFjdCB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDsiLCJjb25zdCBpbnRybyA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkSW50cm8gPSAoKSA9PiB7XHJcbiAgICAgICAgIC8qIFNFTEVDVCBFTEVNRU5UKFMpICovXHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcclxuXHJcbiAgICAgICAgLyogQ1JFQVRFIEVMRU1FTlRTICovXHJcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudEJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IGludHJvQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IG9wZW5Ib3Vyc0FydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgICAgY29uc3Qgb3BlbkhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgICAgIC8qIEFERCBDTEFTU0VTICovXHJcbiAgICAgICAgcmVzdGF1cmFudEJhbm5lci5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LWJhbm5lcicpO1xyXG4gICAgICAgIGludHJvQXJ0aWNsZS5jbGFzc0xpc3QuYWRkKCdpbnRybycpO1xyXG4gICAgICAgIG9wZW5Ib3Vyc0FydGljbGUuY2xhc3NMaXN0LmFkZCgnb3Blbi1ob3VycycpO1xyXG4gICAgICAgIGFkZHJlc3NBcnRpY2xlLmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3MnKTtcclxuXHJcbiAgICAgICAgLyogQUREIENPTlRFTlRTICovXHJcbiAgICAgICAgcmVzdGF1cmFudEJhbm5lci5zcmMgPSAnaW1nL3Jlc3RhdXJhbnQtYmFubmVyLmpwZyc7XHJcbiAgICAgICAgcmVzdGF1cmFudFRpdGxlLnRleHRDb250ZW50ID0gJ1RoZSBSZXN0YXVyYW50JztcclxuICAgICAgICByZXN0YXVyYW50RGVzYy50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBNYWlvcmVzIGxhYm9yZSBvYmNhZWNhdGkgbmVzY2l1bnQgdm9sdXB0YXRlbSBpbGx1bT8gRGlzdGluY3RpbyBkdWNpbXVzIG5pc2kgZGVzZXJ1bnQgcG9zc2ltdXMgbmFtIHZvbHVwdGF0ZSwgcmVydW0gbnVtcXVhbSBpZCBwYXJpYXR1ciBkb2xvcnVtIGJsYW5kaXRpaXMgcXVpYnVzZGFtIGRvbG9yaWJ1cyBvZmZpY2lhISc7XHJcbiAgICAgICAgb3BlbkhvdXJzLnRleHRDb250ZW50ID0gJ0V2ZXJ5ZGF5IDE2OjAwIC0gMjM6MDAnO1xyXG4gICAgICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSAnMjM0IFJlc3RhdXJhbnQgU3RyZWV0IERpc3RyaWN0IENpdHkgQ291bnRyeSAxMDkzNCc7XHJcblxyXG4gICAgICAgIC8qIEFQUEVORCBFTEVNRU5UUyAqL1xyXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocmVzdGF1cmFudEJhbm5lcik7XHJcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChpbnRyb0FydGljbGUpO1xyXG4gICAgICAgIGludHJvQXJ0aWNsZS5hcHBlbmRDaGlsZChyZXN0YXVyYW50VGl0bGUpO1xyXG4gICAgICAgIGludHJvQXJ0aWNsZS5hcHBlbmRDaGlsZChyZXN0YXVyYW50RGVzYyk7XHJcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChvcGVuSG91cnNBcnRpY2xlKTtcclxuICAgICAgICBvcGVuSG91cnNBcnRpY2xlLmFwcGVuZENoaWxkKG9wZW5Ib3Vycyk7XHJcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChhZGRyZXNzQXJ0aWNsZSk7XHJcbiAgICAgICAgYWRkcmVzc0FydGljbGUuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IGxvYWRJbnRybyB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW50cm87IiwiY29uc3QgbG9hZCA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlTG9hZCA9ICgpID0+IHtcclxuICAgICAgICAvKiBDUkVBVEUgRUxFTUVOVFMgKi9cclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCBhYm91dExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBjb25zdCBjb250YWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuXHJcbiAgICAgICAgLyogQUREIENMQVNTRVMgVE8gTkFWICovXHJcbiAgICAgICAgYWJvdXRMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJyk7XHJcbiAgICAgICAgbWVudUxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LWxpbmsnKTtcclxuICAgICAgICBjb250YWN0TGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpO1xyXG4gICAgICAgIGFib3V0TGlzdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgLyogQUREIElEcyBUTyBOQVYgKi9cclxuICAgICAgICBhYm91dExpc3QuaWQgPSAnaW50cm8nO1xyXG4gICAgICAgIG1lbnVMaXN0LmlkID0gJ21lbnUnO1xyXG4gICAgICAgIGNvbnRhY3RMaXN0LmlkID0gJ2NvbnRhY3QnO1xyXG5cclxuICAgICAgICAvKiBBREQgQ09OVEVOVCAqL1xyXG4gICAgICAgIGFib3V0TGlzdC50ZXh0Q29udGVudCA9ICdBYm91dCc7XHJcbiAgICAgICAgbWVudUxpc3QudGV4dENvbnRlbnQgPSAnTWVudSc7XHJcbiAgICAgICAgY29udGFjdExpc3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XHJcblxyXG4gICAgICAgIC8qIEFQUEVORCBFTEVNRU5UUyAqL1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChuYXYpO1xyXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQoYWJvdXRMaXN0KTtcclxuICAgICAgICB1bC5hcHBlbmRDaGlsZChtZW51TGlzdCk7XHJcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQoY29udGFjdExpc3QpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybnsgcGFnZUxvYWQgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWQ7IiwiLy8gRmFjdG9yeSBmdW5jdGlvbiBmb3IgbWVudSBpdGVtc1xyXG5jb25zdCBNZW51ID0gKGltYWdlLCB0aXRsZSwgZGVzYywgcHJpY2UpID0+ICh7XHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZGVzYyxcclxuICAgICAgICBwcmljZVxyXG4gICAgfSk7XHJcblxyXG4vLyBNb2R1bGUgZm9yIGxvYWRpbmcgbWVudVxyXG5jb25zdCBtZW51ID0gKCgpID0+IHtcclxuICAgIC8vIE1lbnUgaXRlbXNcclxuICAgIGNvbnN0IF9zcGFnaGV0dGkgPSBNZW51KCdpbWcvbWVudS9zcGFnaGV0dGkuanBnJywgJ1NwYWdoZXR0aScsICdSZXJ1bSBudW1xdWFtIGlkIHBhcmlhdHVyIGRvbG9ydW0gYmxhbmRpdGlpcyBxdWlidXMnLCAnJDM5Jyk7XHJcbiAgICBjb25zdCBfYnVyZ2VyID0gTWVudSgnaW1nL21lbnUvYnVyZ2VyLmpwZycsICdCdXJnZXInLCAnUmVydW0gbnVtcXVhbSBpZCBwYXJpYXR1ciBkb2xvcnVtIGJsYW5kaXRpaXMgcXVpYnVzJywgJyQ0OScpO1xyXG4gICAgY29uc3QgX3N0ZWFrID0gTWVudSgnaW1nL21lbnUvc3RlYWsuanBnJywgJ1N0ZWFrJywgJ1JlcnVtIG51bXF1YW0gaWQgcGFyaWF0dXIgZG9sb3J1bSBibGFuZGl0aWlzIHF1aWJ1cycsICckNjUnKTtcclxuICAgIGNvbnN0IF9mcmVuY2hmcmllcyA9IE1lbnUoJ2ltZy9tZW51L2ZyZW5jaGZyaWVzLmpwZycsICdGcmVuY2hmcmllcycsICdSZXJ1bSBudW1xdWFtIGlkIHBhcmlhdHVyIGRvbG9ydW0gYmxhbmRpdGlpcyBxdWlidXMnLCAnJDk5OScpO1xyXG4gICAgY29uc3QgX2hvdGRvZyA9IE1lbnUoJ2ltZy9tZW51L2hvdGRvZy5qcGcnLCAnSG90ZG9nJywgJ1JlcnVtIG51bXF1YW0gaWQgcGFyaWF0dXIgZG9sb3J1bSBibGFuZGl0aWlzIHF1aWJ1cycsICckNjk5Jyk7XHJcbiAgICBjb25zdCBfbGFzYWduYSA9IE1lbnUoJ2ltZy9tZW51L2xhc2FnbmEuanBnJywgJ0xhc2FuZ25hJywgJ1JlcnVtIG51bXF1YW0gaWQgcGFyaWF0dXIgZG9sb3J1bSBibGFuZGl0aWlzIHF1aWJ1cycsICckNzAwJyk7XHJcbiAgICBjb25zdCBfZ2FwYW8gPSBNZW51KCdpbWcvbWVudS9nYXBhby5qcGcnLCAnUGFkIEdhcGFvJywgJ1JlcnVtIG51bXF1YW0gaWQgcGFyaWF0dXIgZG9sb3J1bSBibGFuZGl0aWlzIHF1aWJ1cycsICckOTk5OScpO1xyXG4gICAgY29uc3QgX2J1dGFkb24gPSBNZW51KCdpbWcvbWVudS9idXRhZG9uLmpwZycsICdCdXRhZG9uJywgJ1JlcnVtIG51bXF1YW0gaWQgcGFyaWF0dXIgZG9sb3J1bSBibGFuZGl0aWlzIHF1aWJ1cycsICckNzk4Jyk7XHJcbiAgICBjb25zdCBfZnJpZWRDaGlja2VuID0gTWVudSgnaW1nL21lbnUvZnJpZWRDaGlja2VuLmpwZycsICdGcmllZCBDaGlja2VuJywgJ1JlcnVtIG51bXF1YW0gaWQgcGFyaWF0dXIgZG9sb3J1bSBibGFuZGl0aWlzIHF1aWJ1cycsICckODAwJyk7XHJcbiAgICBjb25zdCBfc2FsYWQgPSBNZW51KCdpbWcvbWVudS9zYWxhZC5qcGcnLCAnU2FsYWQnLCAnUmVydW0gbnVtcXVhbSBpZCBwYXJpYXR1ciBkb2xvcnVtIGJsYW5kaXRpaXMgcXVpYnVzJywgJyQ5OTk5OScpO1xyXG5cclxuICAgIC8vIFB1dCBtZW51IGl0ZW1zIGludG8gbGlzdFxyXG4gICAgY29uc3QgX21lbnVJdGVtcyA9IFtcclxuICAgICAgICBfc3BhZ2hldHRpLFxyXG4gICAgICAgIF9idXJnZXIsXHJcbiAgICAgICAgX3N0ZWFrLFxyXG4gICAgICAgIF9mcmVuY2hmcmllcyxcclxuICAgICAgICBfaG90ZG9nLFxyXG4gICAgICAgIF9sYXNhZ25hLFxyXG4gICAgICAgIF9nYXBhbyxcclxuICAgICAgICBfYnV0YWRvbixcclxuICAgICAgICBfZnJpZWRDaGlja2VuLFxyXG4gICAgICAgIF9zYWxhZFxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBsb2FkIG1lbnUgb24gdGhlIHBhZ2VcclxuICAgIGNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIFNlbGVjdCBzZWN0aW9uIGFzIHBhcmVudFxyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29udGFpbmVyJyk7XHJcblxyXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBpdGVtcyBpbiBtZW51IGl0ZW1zIGxpc3QgdG8gY3JlYXRlIGNhcmRzXHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhfbWVudUl0ZW1zKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgICAgICAgICBpdGVtQ2FyZC5jbGFzc0xpc3QuYWRkKCdpdGVtLWNhcmQnKTtcclxuICAgICAgICAgICAgaXRlbUltYWdlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taW1hZ2UnKTtcclxuICAgICAgICAgICAgaXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGl0bGUnKTtcclxuICAgICAgICAgICAgaXRlbURlc2MuY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjJyk7XHJcbiAgICAgICAgICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXByaWNlJyk7XHJcblxyXG4gICAgICAgICAgICBpdGVtSW1hZ2Uuc3JjID0gaXRlbS5pbWFnZTtcclxuICAgICAgICAgICAgaXRlbVRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcclxuICAgICAgICAgICAgaXRlbURlc2MudGV4dENvbnRlbnQgPSBpdGVtLmRlc2M7XHJcbiAgICAgICAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XHJcblxyXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1DYXJkKTtcclxuICAgICAgICAgICAgaXRlbUNhcmQuYXBwZW5kQ2hpbGQoaXRlbUltYWdlKTtcclxuICAgICAgICAgICAgaXRlbUNhcmQuYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcclxuICAgICAgICAgICAgaXRlbUNhcmQuYXBwZW5kQ2hpbGQoaXRlbURlc2MpO1xyXG4gICAgICAgICAgICBpdGVtQ2FyZC5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4geyBsb2FkTWVudSB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkIGZyb20gXCIuL2xvYWRcIjtcclxuaW1wb3J0IGludHJvIGZyb20gXCIuL2ludHJvXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xyXG5cclxuY29uc3QgbWFuYWdlUGFnZSA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBfY2xlYXJQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XHJcbiAgICAgICAgc2VjdGlvbi5pbm5lckhUTUwgPSAnJztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgX2NsZWFyQWN0aXZlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rJyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2TGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbmF2TGlua3NbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfbmF2aWdhdGVQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rJyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2TGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbmF2TGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgX2NsZWFyQWN0aXZlKCk7XHJcbiAgICAgICAgICAgICAgICBuYXZMaW5rc1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIF9jbGVhclBhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ2ludHJvJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGludHJvLmxvYWRJbnRybygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09ICdtZW51Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbnUubG9hZE1lbnUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSAnY29udGFjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWN0LmxvYWRDb250YWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbGl6ZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9hZC5wYWdlTG9hZCgpO1xyXG4gICAgICAgIGludHJvLmxvYWRJbnRybygpO1xyXG4gICAgICAgIF9uYXZpZ2F0ZVBhZ2UoKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtpbml0aWFsaXplUGFnZX07XHJcbiB9KSgpO1xyXG5cclxubWFuYWdlUGFnZS5pbml0aWFsaXplUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==