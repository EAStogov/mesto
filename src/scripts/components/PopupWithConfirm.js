import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(selector, buttonSelector) {
    super(selector);
    this.button = this._popup.querySelector(buttonSelector);
    this._deleteItem = this._deleteItem.bind(this);
  }

  setEventListeners() {
    super.setEventListeners();
    this.button.addEventListener('click', this._deleteItem);
  }

  removeEventListeners() {
    super.removeEventListeners();
    this.button.removeEventListener('click', this._deleteItem);
  }

  open(item) {
    super.open();
    this._item = item;
  }

  _deleteItem() {
    this._item.remove();
    this.close();
  }
}