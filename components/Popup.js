class Popup {
  constructor(selector) {
    this.popup = document.querySelector(selector);
  }

  open() {
    this.popup.classList.add('popup_opened');
  };
  close() {
    this.popup.classList.remove('popup_opened');
  };
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  };
  _overlayAndButtonClose(evt) {
    if ((evt.target === this.popup) || evt.target.classList.contains('popup__close')) {
      this.close();
    }
  }
  setEventListeners() {
    this.popup.addEventListener('mousedown', _overlayAndButtonClose(evt));
    document.addEventListener('keydown', _handleEscClose(evt));
  };
  removeEventListeners() {
    this.popup.removeEventListener('mousedown', _overlayAndButtonClose(evt));
    document.removeEventListener('keydown', _handleEscClose(evt));
  }
}