import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this.popupImage = this.popup.querySelector('.popup__image');
    this.popupDesc = this.popup.querySelector('#image-description');
  }

  open({link, place}) {
    super.open();
    this.popupImage.setAttribute('src', link);
    this.popupImage.setAttribute('alt', place);
    this.popupDesc.textContent = place;
  }
}