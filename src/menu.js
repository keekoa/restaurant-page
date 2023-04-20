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

export default menu;