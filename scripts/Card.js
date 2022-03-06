import {openPopup, imagePopup, popupImage, popupDesc} from './index.js';

class Card {

  constructor(data, cardSelector) {
    this.place = data.name;
    this.link = data.link;
    this.cardSelector = cardSelector;
  }

  createCard() {
    this._getTemplate();
    const cardImage = this.cardElement.querySelector('.elements__image');
    
    this.cardElement.querySelector('.elements__place').textContent = this.place;
    cardImage.setAttribute('src', this.link);
    cardImage.setAttribute('alt', this.place);
    
    this._setEventListeners();
  }

  _getTemplate() {
    this.cardElement = document
      .querySelector('#card-template')
      .content
      .querySelector(this.cardSelector)
      .cloneNode(true);
  }

  _setEventListeners() {
    this.cardElement.querySelector('.elements__trash').addEventListener('click', () => this.cardElement.remove());
    this.cardElement.querySelector('.elements__like').addEventListener('click', (evt) => {
      evt.target.classList.toggle('elements__like_active');
    });
    this.cardElement.querySelector('.elements__image').addEventListener('click', () => {
      openPopup(imagePopup);
      popupImage.setAttribute('src', this.link);
      popupImage.setAttribute('alt', this.place);
      popupDesc.textContent = this.place;
    })
  }
}

export { Card };