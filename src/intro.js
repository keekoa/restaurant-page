export default function loadIntro() {
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