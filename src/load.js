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

export default load;