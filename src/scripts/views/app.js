import routes from '../routes/routes';
import UrlParser from '../routes/url_parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._innitialAppShell();
  }

  _innitialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('#skipToContent');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  }
}

export default App;
