import buttonsTpl from './templates/buttons.hbs';
import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const bodyRef = document.querySelector('.body');
const buttonRef = document.querySelector('ul.button');

buttonRef.insertAdjacentHTML('beforeend', buttonsTpl());

const buttonStartRef = document.querySelector('button.start');
const buttonStopRef = document.querySelector('button.stop');

buttonStartRef.addEventListener('click', changeColor);
buttonStopRef.addEventListener('click', stopChangeColor);

let changeColorWithInterval;
function changeColor(event) {
  event.preventDefault();
  buttonStartRef.setAttribute('disabled', true);
  const randomColor = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  changeColorWithInterval = setInterval(() => {
    randomColor(0, 5);
    bodyRef.style.backgroundColor = colors[randomColor(0, 5)];
    // console.log(colors[randomColor(0, 5)]);
  }, 1000);
}

function stopChangeColor(event) {
  buttonStartRef.removeAttribute('disabled', true);
  event.preventDefault();
  clearInterval(changeColorWithInterval);
}
