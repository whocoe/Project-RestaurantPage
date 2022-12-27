function menu() {
    //get div reference
    const container = document.querySelector('#content');
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'page');
    menuContainer.classList.add('menu');
    container.appendChild(menuContainer);
    const menuItem = [
                        'House Special Salad', 
                        'Mushroom Swish Burger', 
                        'Spinach Salad', 
                        'Peanut Butter Pie', 
                        'Creme Caramel', 
                        'Carrot Cake', 
                        'Pineapple Cheesecake', 
                        'Black Tea', 
                        'Green Tea', 
                        'Mocha', 
                        'Tea Latte', 
                        'Latte'
    ];

    menuItem.forEach(createMenu);

    function createMenu(item) {
        const ul = document.createElement('ul');
        menuContainer.appendChild(ul);
        const li = document.createElement('li');
        ul.appendChild(li);
        li.classList.add('menuItem');
        li.textContent = `${item}`;
    }
    
}

export {menu};