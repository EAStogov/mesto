import { popupImage, popupDesc } from "../utils/constants.js";
import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(link, place, selector) {
    super(selector);
    this.link = link;
    this.place = place;
  }

  open() {
    super.open();
    popupImage.setAttribute('src', this.link);
    popupImage.setAttribute('alt', this.place);
    popupDesc.textContent = this.place;
  }
}