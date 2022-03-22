export default class Popup {
  constructor(selector) {
    this.popup = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handlePopupClose = this._handlePopupClose.bind(this);
  }

  open() {
    this.popup.classList.add('popup_opened');
    this.setEventListeners();
  };

  close() {
    this.popup.classList.remove('popup_opened');
    this.removeEventListeners();
  };

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
      console.log('escape')
    }
  };

  _handlePopupClose(evt) {
    if ((evt.target === this.popup) || evt.target.classList.contains('popup__close')) {
      this.close();
      console.log('хуяк');
    }
  }

  setEventListeners() {
    this.popup.addEventListener('mousedown', this._handlePopupClose);
    document.addEventListener('keydown', this._handleEscClose);
  };

  removeEventListeners() {
    this.popup.removeEventListener('mousedown', this._handlePopupClose);
    document.removeEventListener('keydown', this._handleEscClose);
  }
}