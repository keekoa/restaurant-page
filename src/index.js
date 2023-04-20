import load from "./load";
import intro from "./intro";
import menu from "./menu";
import contact from "./contact";

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
                    intro.loadIntro();
                }
                else if (e.target.id === 'menu') {
                    menu.loadMenu();
                }
                else if (e.target.id === 'contact') {
                    contact.loadContact();
                }
            });
        }
    };

    const initializePage = () => {
        load.pageLoad();
        intro.loadIntro();
        _navigatePage();
    };

    return {initializePage};
 })();

managePage.initializePage();