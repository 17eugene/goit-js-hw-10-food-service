refs = {
    body: document.querySelector('body'),
    checkbox: document.querySelector('.theme-switch__toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.checkbox.addEventListener('change', setTheme);

function setTheme(event) {
    const check = refs.checkbox.checked;
    
    if (check) {
        refs.body.classList.add(Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT);

        localStorage.setItem('selected theme', Theme.DARK)

    } else {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);

        localStorage.removeItem('selected theme');
        localStorage.setItem('selected theme', Theme.LIGHT)
    }
};

const savedThemeInStorage = localStorage.getItem('selected theme');

if (savedThemeInStorage === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.checkbox.checked = true;
};

