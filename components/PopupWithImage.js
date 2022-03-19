import { popupImage, popupDesc } from "../scripts/index.js";
import { link, place } from '../scripts/Card.js';

class PopupWithImage extends Popup {
  constructor(link, place, selector) {
    this.link = link;
    this.place = place;
    super(selector);
  }

  open() {
    super.open();
    popupImage.setAttribute('src', this.link);
    popupImage.setAttribute('alt', this.place);
    popupDesc.textContent = this.place;
  }
}