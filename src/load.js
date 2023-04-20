export default function pageLoad() {
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