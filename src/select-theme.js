refs = {
    body: document.querySelector('body'),
    checkbox: document.querySelector('#theme-switch-toggle'),
    // menu: document.querySelector('.js-menu'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function setTheme(event) {
    const check = refs.checkbox.cheked;
    
    if (check) {
        refs.body.classList.add(Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT);
    } else {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
    }
}

