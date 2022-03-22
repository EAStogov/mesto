export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handlePopupClose = this._handlePopupClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
  };

  close() {
    this._popup.classList.remove('popup_opened');
    this.removeEventListeners();
  };

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  };

  _handlePopupClose(evt) {
    if ((evt.target === this._popup) || evt.target.classList.contains('popup__close')) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', this._handlePopupClose);
    document.addEventListener('keydown', this._handleEscClose);
  };

  removeEventListeners() {
    this._popup.removeEventListener('mousedown', this._handlePopupClose);
    document.removeEventListener('keydown', this._handleEscClose);
  }
}