import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupDesc = this._popup.querySelector('#image-description');
  }

  open({link, name}) {
    super.open();
    this._popupImage.setAttribute('src', link);
    this._popupImage.setAttribute('alt', name);
    this._popupDesc.textContent = name;
  }
}