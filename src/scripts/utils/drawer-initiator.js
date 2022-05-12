const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('showmenu');
    this._changeIcon();
  },

  _changeIcon() {
    document
      .querySelector('#hamburgerButton .bx-menu')
      .classList.toggle('bx-x');
  },
};

export default DrawerInitiator;
