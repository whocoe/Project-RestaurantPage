import restuImage from '../img/restau_home.jpg';
const container = document.querySelector('#content');

export function header() {
    const header = document.createElement('header');
    container.appendChild(header);
    const nav = document.createElement('nav');
    header.appendChild(nav);
    const home = document.createElement('a');
    home.href = '#';
    home.classList.add('homeNavTop')
    home.textContent = 'HOME';
    nav.appendChild(home);
    const menu = document.createElement('a');
    menu.href = '#';
    menu.classList.add('menuNavTop');
    menu.textContent = 'MENU';
    nav.appendChild(menu);
    const contactUs = document.createElement('a');
    contactUs.href = '#';
    contactUs.classList.add('contactNavTop');
    contactUs.textContent = 'CONTACT US';
    nav.appendChild(contactUs);
}

export function mainImg() {
    const main = document.createElement('div');
    main.setAttribute('id','page')
    container.appendChild(main);
    const imgDiv = document.createElement('div');
    const mainImg = document.createElement('img');
    imgDiv.appendChild(mainImg);
    main.appendChild(imgDiv);

    mainImg.classList.add('mainImg');
    mainImg.src = restuImage;
    mainImg.alt = 'Restaurant Front';
}