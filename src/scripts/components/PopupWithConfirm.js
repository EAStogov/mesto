import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(selector, buttonSelector) {
    super(selector);
    this._submitButton = this._popup.querySelector(buttonSelector);
    this._buttonText = this._submitButton.textContent;
    this._deleteItem = this._deleteItem.bind(this);
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener('click', this._deleteItem);
  }

  removeEventListeners() {
    super.removeEventListeners();
    this._submitButton.removeEventListener('click', this._deleteItem);
  }

  open(item, api, cardId) {
    super.open();
    this._submitButton.textContent = this._buttonText;
    this._api = api;
    this._cardId = cardId;
    this._item = item;
  }

  _deleteItem(evt) {
    evt.preventDefault();
    this._submitButton.textContent = 'Удаление...';
    this._api.deleteCard(this._cardId).then(() => {
      this.close();
      this._item.remove();
    }).catch(err => {
      alert(err);
    });
  }
}