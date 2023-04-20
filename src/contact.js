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

export default contact;