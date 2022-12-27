import './styles.css';
import { header, mainImg } from    './modules/home.js';
import {menu} from './modules/menu';
import { contactUs } from    './modules/contact';

header();
mainImg();

const nav = document.querySelector('nav');
nav.addEventListener('click', e => {
    e.preventDefault();
    if(e.target.classList.contains('homeNavTop')) {
        const page = document.getElementById('page');
        page.remove();
        mainImg();
    } else if(e.target.classList.contains('menuNavTop')) {
        const page = document.getElementById('page');
        page.remove();
        menu();
    } else {
        const page = document.getElementById('page');
        page.remove();
        contactUs();
    }
});