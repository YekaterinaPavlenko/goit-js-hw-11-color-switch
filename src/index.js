import buttonsTpl from './templates/buttons.hbs';
import './styles.css';

// const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('.body');
const buttonRef = document.querySelector('ul.button');
console.log(bodyRef);
console.log(buttonRef);
console.log(buttonsTpl);

const menuMarcup = buttonsTpl;
// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };
// const localTheme = localStorage.getItem('theme');
// const localcheckboxValue = localStorage.getItem('checkboxValue');
// addLocalTheme();

// checkboxRef.addEventListener('change', changeTheme);

buttonRef.insertAdjacentHTML('beforeend', menuMarcup);

// // Второй вариант  создания и добавления меню
// // const menuMarcup = createMenu(menuList);
// // function createMenu(menuList) {
// //   return menuList.map(menuItemTpl).join('');
// // }

// function changeTheme(event) {
//   event.preventDefault();
//   const checkBoxValue = event.target.checked;

//   if (checkBoxValue) {
//     localStorage.setItem('theme', Theme.DARK);

//     bodyRef.classList.add(Theme.DARK);
//     bodyRef.classList.remove(Theme.LIGHT);
//   } else {
//     localStorage.setItem('theme', Theme.LIGHT);

//     bodyRef.classList.add(Theme.LIGHT);
//     bodyRef.classList.remove(Theme.DARK);
//   }
// }

// console.log(localcheckboxValue);
// function addLocalTheme() {
//   if (localTheme) {
//     bodyRef.classList.add(localTheme);
//     if (localTheme === Theme.DARK) {
//       checkboxRef.checked = true;
//     }
//   }
// }
