import './style.css';
import Icon from './assets/frankenstein.png';

function createApp() {
  const app = document.getElementById('app');

  const myIcon = new Image();
  myIcon.src = Icon;

  const p = document.createElement('p');
  p.textContent = 'Hello, me!';

  app.appendChild(myIcon);
  app.appendChild(p);
}

createApp();
