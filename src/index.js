import './select-theme.js';
import menuCardTpl from './template/menu-card.hbs';
import menuItems from './menu.json';


const menuWrapper = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menuItems);

menuWrapper.insertAdjacentHTML('afterbegin', menuMarkup);

function createMenuMarkup(menuItems) {
    return menuItems.map(menuCardTpl).join('');
}

