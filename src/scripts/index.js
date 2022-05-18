import 'regenerator-runtime';
import '../styles/scss/main.scss';
import './globals/config';
import './views/templates/template_creator';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navbar'),
  content: document.querySelector('#contentWrapper'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();

  swRegister();
});
